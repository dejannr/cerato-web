from datetime import datetime, timezone
from datetime import timedelta
import hashlib
import secrets
from uuid import UUID

from fastapi import Depends, FastAPI, HTTPException, Query, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select, update
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.config import settings
from app.database import get_db
from app.emailing import send_customer_email
from app.models import Company, CustomerMessage, CustomerUpdateToken, InternalNote, Invitation, Membership, RequestEvent, ShipmentRequest, User
from app.schemas import AssignmentInput, CompanyCreateInput, CustomerUpdateInput, InformationRequestInput, InviteInput, LoginInput, NoteInput, RegisterInput, RequestInput, RequestUpdate, StatusInput
from app.security import clear_session_cookie, hash_password, set_session_cookie, user_id_from_request, verify_password
from app.services import READY_FIELDS, create_trial_end, current_membership, make_event, readiness_gaps, request_payload, require_active_company, sync_trial_state

app = FastAPI(title="Cerato Demo 1 API", version="0.1.0", docs_url="/api/docs", openapi_url="/api/openapi.json")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_origin],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "X-Requested-With"],
)


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "cerato-demo1-api"}


@app.post("/api/auth/register", status_code=status.HTTP_201_CREATED)
def register(payload: RegisterInput, response: Response, db: Session = Depends(get_db)):
    email = str(payload.email).strip().lower()
    invitation = None
    invited_company = None
    if payload.invite_token:
        invitation = db.scalar(select(Invitation).where(Invitation.token_hash == token_digest(payload.invite_token)))
        if invitation is None or invitation.accepted_at or invitation.revoked_at or invitation.expires_at <= datetime.now(timezone.utc):
            raise HTTPException(status_code=404, detail="This company invitation is no longer available.")
        if invitation.email.lower() != email:
            raise HTTPException(status_code=403, detail="Use the email address this invitation was sent to.")
        invited_company = db.get(Company, invitation.company_id)
        if invited_company is None or sync_trial_state(db, invited_company):
            raise HTTPException(status_code=423, detail="This company's trial has expired.")
    elif not payload.company_name or not payload.company_name.strip():
        raise HTTPException(status_code=422, detail="Enter a company name to start a trial.")
    user = User(name=payload.name.strip(), email=email, password_hash=hash_password(payload.password))
    db.add(user)
    try:
        db.flush()
        if invited_company is not None and invitation is not None:
            company = invited_company
            membership = Membership(company_id=company.id, user_id=user.id, role="member", status="active")
            invitation.accepted_at = datetime.now(timezone.utc)
        else:
            now = datetime.now(timezone.utc)
            company = Company(
                name=payload.company_name.strip(),
                created_by_user_id=user.id,
                trial_started_at=now,
                trial_ends_at=create_trial_end(now),
            )
            user.company_created = True
            db.add(company)
            db.flush()
            membership = Membership(company_id=company.id, user_id=user.id, role="owner", status="active")
        db.add(membership)
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=409, detail="An account with this email already exists, or this account has already created a company.") from None
    set_session_cookie(response, user.id)
    return {"user": {"id": user.id, "name": user.name, "email": user.email}, "company": {"id": company.id, "name": company.name, "state": company.state, "trial_ends_at": company.trial_ends_at}, "role": membership.role}


@app.post("/api/auth/login")
def login(payload: LoginInput, response: Response, db: Session = Depends(get_db)):
    email = str(payload.email).strip().lower()
    user = db.scalar(select(User).where(User.email == email))
    if user is None or not verify_password(payload.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Email or password is incorrect.")
    set_session_cookie(response, user.id)
    return {"user": {"id": user.id, "name": user.name, "email": user.email}}


@app.post("/api/auth/logout")
def logout(response: Response):
    clear_session_cookie(response)
    return {"ok": True}


@app.get("/api/auth/me")
def me(request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    user = db.get(User, user_id)
    if user is None:
        raise HTTPException(status_code=401, detail="Account not found.")
    membership = db.scalar(select(Membership).where(Membership.user_id == user.id, Membership.status == "active"))
    if membership is None:
        return {"user": {"id": user.id, "name": user.name, "email": user.email}, "company": None, "role": None, "can_create_company": not user.company_created, "reminders": []}
    company = db.get(Company, membership.company_id)
    if company is None:
        raise HTTPException(status_code=403, detail="Company access is unavailable.")
    frozen = sync_trial_state(db, company)
    if frozen:
        return {"user": {"id": user.id, "name": user.name, "email": user.email}, "company": {"state": "frozen", "trial_ends_at": company.trial_ends_at}, "role": membership.role, "reminders": []}

    days_left = max(0, (company.trial_ends_at.date() - datetime.now(timezone.utc).date()).days)
    due = [day for day in (7, 3, 1) if days_left <= day and day not in company.trial_notices_shown]
    if membership.role == "owner" and due:
        company.trial_notices_shown = [*company.trial_notices_shown, *due]
        db.commit()
    return {
        "user": {"id": user.id, "name": user.name, "email": user.email},
        "company": {"id": company.id, "name": company.name, "state": company.state, "trial_ends_at": company.trial_ends_at, "public_form_token": company.public_form_token},
        "role": membership.role,
        "reminders": due if membership.role == "owner" else [],
    }


@app.post("/api/company", status_code=status.HTTP_201_CREATED)
def create_company(payload: CompanyCreateInput, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    user = db.get(User, user_id)
    if user is None:
        raise HTTPException(status_code=401, detail="Account not found.")
    if db.scalar(select(Membership).where(Membership.user_id == user.id, Membership.status == "active")):
        raise HTTPException(status_code=409, detail="Leave your current company before creating a company.")
    if user.company_created:
        raise HTTPException(status_code=409, detail="This account has already created its one company. Join another company by invitation.")
    name = payload.name.strip()
    now = datetime.now(timezone.utc)
    company = Company(name=name, created_by_user_id=user.id, trial_started_at=now, trial_ends_at=create_trial_end(now))
    user.company_created = True
    db.add(company)
    try:
        db.flush()
        db.add(Membership(company_id=company.id, user_id=user.id, role="owner", status="active"))
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=409, detail="This account cannot create another company.") from None
    return {"id": company.id, "name": company.name, "trial_ends_at": company.trial_ends_at}


@app.get("/api/company/members")
def list_members(request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    rows = db.execute(
        select(Membership, User).join(User, User.id == Membership.user_id).where(
            Membership.company_id == company.id, Membership.status == "active"
        ).order_by(Membership.role.desc(), User.name.asc())
    ).all()
    return [{"id": member.id, "name": user.name, "email": user.email, "role": member.role} for member, user in rows]


@app.delete("/api/company/members/me")
def leave_company(request: Request, response: Response, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    if membership.role == "owner":
        raise HTTPException(status_code=409, detail="The company owner must transfer ownership before leaving.")
    membership.status = "removed"
    db.commit()
    clear_session_cookie(response)
    return {"ok": True}


@app.delete("/api/company/members/{membership_id}")
def remove_member(membership_id: UUID, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    owner_membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    if owner_membership.role != "owner":
        raise HTTPException(status_code=403, detail="Only the company owner can remove members.")
    target = db.scalar(select(Membership).where(Membership.id == membership_id, Membership.company_id == company.id, Membership.status == "active"))
    if target is None:
        raise HTTPException(status_code=404, detail="Company member not found.")
    if target.role == "owner":
        raise HTTPException(status_code=409, detail="The company owner cannot be removed.")
    target.status = "removed"
    db.commit()
    return {"ok": True}


@app.post("/api/company/invitations", status_code=status.HTTP_201_CREATED)
def invite_member(payload: InviteInput, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    if membership.role != "owner":
        raise HTTPException(status_code=403, detail="Only the company owner can invite members.")
    email = str(payload.email).strip().lower()
    existing_user = db.scalar(select(User).where(User.email == email))
    if existing_user:
        already_member = db.scalar(select(Membership).where(Membership.user_id == existing_user.id, Membership.status == "active"))
        if already_member:
            raise HTTPException(status_code=409, detail="This person already belongs to a company. They must leave it before joining another.")
    existing_invite = db.scalar(select(Invitation).where(Invitation.company_id == company.id, Invitation.email == email, Invitation.accepted_at.is_(None), Invitation.revoked_at.is_(None), Invitation.expires_at > datetime.now(timezone.utc)))
    if existing_invite:
        raise HTTPException(status_code=409, detail="An active invitation has already been sent to this email.")
    raw_token = secrets.token_urlsafe(32)
    invitation = Invitation(company_id=company.id, email=email, token_hash=token_digest(raw_token), invited_by_user_id=user_id, expires_at=datetime.now(timezone.utc) + timedelta(days=7))
    db.add(invitation)
    db.commit()
    invite_url = f"{settings.app_public_url.rstrip('/')}/invite/{raw_token}"
    body = f"You have been invited to join {company.name} in Cerato Demo 1.\n\nAccept this invitation within 7 days: {invite_url}\n\nIf you already belong to another company in Cerato Demo 1, leave that company before accepting.\n\nCerato Systems"
    try:
        send_customer_email(email, f"Invitation to join {company.name}", body)
    except HTTPException:
        invitation.revoked_at = datetime.now(timezone.utc)
        db.commit()
        raise
    return {"sent": True, "email": email, "expires_at": invitation.expires_at}


@app.get("/api/public/invitations/{token}")
def get_invitation(token: str, db: Session = Depends(get_db)):
    invitation = db.scalar(select(Invitation).where(Invitation.token_hash == token_digest(token)))
    if invitation is None or invitation.accepted_at or invitation.revoked_at or invitation.expires_at <= datetime.now(timezone.utc):
        raise HTTPException(status_code=404, detail="This company invitation is no longer available.")
    company = db.get(Company, invitation.company_id)
    if company is None or sync_trial_state(db, company):
        raise HTTPException(status_code=404, detail="This company invitation is no longer available.")
    return {"company_name": company.name, "email": invitation.email, "expires_at": invitation.expires_at}


@app.post("/api/company/invitations/{token}/accept")
def accept_invitation(token: str, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    user = db.get(User, user_id)
    invitation = db.scalar(select(Invitation).where(Invitation.token_hash == token_digest(token)))
    if invitation is None or invitation.accepted_at or invitation.revoked_at or invitation.expires_at <= datetime.now(timezone.utc):
        raise HTTPException(status_code=404, detail="This company invitation is no longer available.")
    if user is None or user.email.lower() != invitation.email.lower():
        raise HTTPException(status_code=403, detail="Sign in with the email address this invitation was sent to.")
    if db.scalar(select(Membership).where(Membership.user_id == user.id, Membership.status == "active")):
        raise HTTPException(status_code=409, detail="You already belong to a company. Leave that company before joining another.")
    company = db.get(Company, invitation.company_id)
    if company is None or sync_trial_state(db, company):
        raise HTTPException(status_code=423, detail="This company's trial has expired.")
    prior_membership = db.scalar(select(Membership).where(Membership.company_id == company.id, Membership.user_id == user.id))
    if prior_membership:
        prior_membership.role = "member"
        prior_membership.status = "active"
        prior_membership.joined_at = datetime.now(timezone.utc)
    else:
        db.add(Membership(company_id=company.id, user_id=user.id, role="member", status="active"))
    invitation.accepted_at = datetime.now(timezone.utc)
    db.commit()
    return {"company": {"id": company.id, "name": company.name}, "role": "member"}


@app.get("/api/requests")
def list_requests(
    request: Request,
    status_filter: str | None = Query(default=None, alias="status"),
    assignee: UUID | None = None,
    q: str | None = Query(default=None, max_length=160),
    limit: int = Query(default=100, ge=1, le=200),
    db: Session = Depends(get_db),
):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    query = select(ShipmentRequest).where(ShipmentRequest.company_id == company.id)
    if status_filter:
        query = query.where(ShipmentRequest.status == status_filter)
    if assignee:
        query = query.where(ShipmentRequest.assignee_membership_id == assignee)
    if q:
        pattern = f"%{q.strip()}%"
        query = query.where(
            ShipmentRequest.requester_name.ilike(pattern)
            | ShipmentRequest.requester_company.ilike(pattern)
            | ShipmentRequest.requester_email.ilike(pattern)
            | ShipmentRequest.reference_number.ilike(pattern)
        )
    rows = db.scalars(query.order_by(ShipmentRequest.updated_at.desc()).limit(limit)).all()
    return [request_payload(item) for item in rows]


def create_request_record(db: Session, company: Company, values: dict, actor_id: UUID | None, source: str):
    number = db.scalar(
        update(Company)
        .where(Company.id == company.id)
        .values(next_request_number=Company.next_request_number + 1)
        .returning(Company.next_request_number)
    )
    request = ShipmentRequest(
        company_id=company.id,
        request_number=number - 1,
        source=source,
        created_by_user_id=actor_id,
        **values,
    )
    request.status = "new" if not readiness_gaps(request) else "needs_information"
    db.add(request)
    db.flush()
    make_event(db, request, actor_id, "created", f"Request SR-{request.request_number:06d} created.")
    db.commit()
    db.refresh(request)
    return request


def token_digest(token: str) -> str:
    return hashlib.sha256(token.encode("utf-8")).hexdigest()


@app.post("/api/requests", status_code=status.HTTP_201_CREATED)
def create_request(payload: RequestInput, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    values = payload.model_dump(exclude={"source"})
    result = create_request_record(db, company, values, user_id, payload.source)
    return request_payload(result)


@app.get("/api/requests/{request_id}")
def get_request(request_id: UUID, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    item = db.scalar(select(ShipmentRequest).where(ShipmentRequest.id == request_id, ShipmentRequest.company_id == company.id))
    if item is None:
        raise HTTPException(status_code=404, detail="Request not found.")
    activity = db.scalars(select(RequestEvent).where(RequestEvent.request_id == item.id).order_by(RequestEvent.created_at.asc())).all()
    notes = db.scalars(select(InternalNote).where(InternalNote.request_id == item.id).order_by(InternalNote.created_at.asc())).all()
    messages = db.scalars(select(CustomerMessage).where(CustomerMessage.request_id == item.id).order_by(CustomerMessage.created_at.asc())).all()
    return {
        **request_payload(item),
        "events": [{"id": e.id, "type": e.event_type, "summary": e.summary, "at": e.created_at, "actor_id": e.actor_user_id} for e in activity],
        "notes": [{"id": n.id, "body": n.body, "at": n.created_at, "author_id": n.author_user_id} for n in notes],
        "messages": [{"id": m.id, "subject": m.subject, "body": m.body, "delivery_state": m.delivery_state, "at": m.sent_at or m.created_at} for m in messages],
    }


@app.patch("/api/requests/{request_id}")
def update_request(request_id: UUID, payload: RequestUpdate, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    item = db.scalar(select(ShipmentRequest).where(ShipmentRequest.id == request_id, ShipmentRequest.company_id == company.id))
    if item is None:
        raise HTTPException(status_code=404, detail="Request not found.")
    if item.status in {"accepted", "closed"}:
        raise HTTPException(status_code=409, detail="Accepted or closed requests cannot be edited. Reopen the request first.")
    changes = payload.model_dump(exclude_unset=True)
    for key, value in changes.items():
        setattr(item, key, value)
    if item.pickup_date and item.delivery_date and item.delivery_date < item.pickup_date:
        raise HTTPException(status_code=422, detail="Delivery date cannot be before pickup date.")
    gaps = readiness_gaps(item)
    if gaps and item.status == "ready_for_review":
        item.status = "needs_information"
    if not gaps:
        item.override_reason = None
    if not gaps and item.status == "needs_information":
        item.status = "ready_for_review"
    make_event(db, item, user_id, "updated", "Request details updated.")
    db.commit()
    db.refresh(item)
    return request_payload(item)


@app.post("/api/requests/{request_id}/status")
def change_status(request_id: UUID, payload: StatusInput, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    item = db.scalar(select(ShipmentRequest).where(ShipmentRequest.id == request_id, ShipmentRequest.company_id == company.id))
    if item is None:
        raise HTTPException(status_code=404, detail="Request not found.")
    target = payload.status
    if item.status == "closed":
        raise HTTPException(status_code=409, detail="Closed requests cannot be changed.")
    allowed_transitions = {
        "new": {"needs_information", "ready_for_review", "closed"},
        "needs_information": {"ready_for_review", "closed"},
        "ready_for_review": {"needs_information", "accepted", "closed"},
        "accepted": {"closed"},
    }
    if target not in allowed_transitions.get(item.status, set()):
        raise HTTPException(status_code=409, detail="That status change is not available from the current stage.")
    if target == "ready_for_review":
        gaps = readiness_gaps(item)
        if gaps and (membership.role != "owner" or not payload.override_reason or not payload.override_reason.strip()):
            raise HTTPException(status_code=422, detail={"message": "The request is missing required information.", "missing": gaps, "owner_override_required": bool(gaps)})
        item.override_reason = payload.override_reason.strip() if gaps and payload.override_reason else None
    if target == "accepted" and item.status != "ready_for_review":
        raise HTTPException(status_code=409, detail="Move the request to Ready for review before accepting it.")
    if target == "closed" and not (payload.close_reason and payload.close_reason.strip()):
        raise HTTPException(status_code=422, detail="Choose a close reason.")
    old_status = item.status
    item.status = target
    item.close_reason = payload.close_reason.strip() if target == "closed" and payload.close_reason else None
    make_event(db, item, user_id, "status_changed", f"Status changed from {old_status.replace('_', ' ')} to {target.replace('_', ' ')}.")
    if item.override_reason:
        make_event(db, item, user_id, "readiness_override", f"Readiness check overridden: {item.override_reason}")
    db.commit()
    db.refresh(item)
    return request_payload(item)


@app.post("/api/requests/{request_id}/assignment")
def assign_request(request_id: UUID, payload: AssignmentInput, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    item = db.scalar(select(ShipmentRequest).where(ShipmentRequest.id == request_id, ShipmentRequest.company_id == company.id))
    if item is None:
        raise HTTPException(status_code=404, detail="Request not found.")
    if payload.membership_id is not None:
        assignee = db.scalar(select(Membership).where(Membership.id == payload.membership_id, Membership.company_id == company.id, Membership.status == "active"))
        if assignee is None:
            raise HTTPException(status_code=422, detail="Choose an active member of this company.")
    item.assignee_membership_id = payload.membership_id
    label = "Unassigned" if payload.membership_id is None else "Assigned to a team member"
    make_event(db, item, user_id, "assigned", label)
    db.commit()
    db.refresh(item)
    return request_payload(item)


@app.post("/api/requests/{request_id}/notes", status_code=status.HTTP_201_CREATED)
def add_note(request_id: UUID, payload: NoteInput, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    item = db.scalar(select(ShipmentRequest).where(ShipmentRequest.id == request_id, ShipmentRequest.company_id == company.id))
    if item is None:
        raise HTTPException(status_code=404, detail="Request not found.")
    note = InternalNote(company_id=company.id, request_id=item.id, author_user_id=user_id, body=payload.body.strip())
    db.add(note)
    make_event(db, item, user_id, "note_added", "An internal note was added.")
    db.commit()
    db.refresh(note)
    return {"id": note.id, "body": note.body, "at": note.created_at, "author_id": note.author_user_id}


@app.post("/api/requests/{request_id}/request-information", status_code=status.HTTP_201_CREATED)
def request_information(request_id: UUID, payload: InformationRequestInput, request: Request, db: Session = Depends(get_db)):
    user_id = user_id_from_request(request)
    membership, company = current_membership(db, user_id)
    require_active_company(db, company)
    item = db.scalar(select(ShipmentRequest).where(ShipmentRequest.id == request_id, ShipmentRequest.company_id == company.id))
    if item is None:
        raise HTTPException(status_code=404, detail="Request not found.")
    if item.status in {"accepted", "closed"}:
        raise HTTPException(status_code=409, detail="Customer follow-up is unavailable for accepted or closed requests.")

    allowed_fields = {
        "pickup_location", "delivery_location", "pickup_date", "delivery_date", "cargo_description",
        "pieces", "weight_kg", "dimensions", "special_handling", "reference_number",
    }
    requested_fields = list(dict.fromkeys(payload.fields))
    if not requested_fields or any(field not in allowed_fields for field in requested_fields):
        raise HTTPException(status_code=422, detail="Choose shipment fields the customer can update.")

    token = secrets.token_urlsafe(32)
    update_token = CustomerUpdateToken(
        company_id=company.id,
        request_id=item.id,
        token_hash=token_digest(token),
        allowed_fields=requested_fields,
        expires_at=datetime.now(timezone.utc) + timedelta(days=7),
    )
    labels = [READY_FIELDS.get(field, field.replace("_", " ").title()) for field in requested_fields]
    link = f"{settings.app_public_url.rstrip('/')}/update/{token}"
    body = payload.message.strip() if payload.message else "Please provide the missing shipment details using the secure link below."
    email_body = f"Hello {item.requester_name},\n\n{body}\n\nRequest {item.request_number:06d} needs: {', '.join(labels)}.\n\nUpdate details securely: {link}\n\nThis link expires in 7 days.\n\nCerato Systems"
    message = CustomerMessage(company_id=company.id, request_id=item.id, recipient=item.requester_email, subject=f"Shipment request SR-{item.request_number:06d}: more information needed", body=email_body, delivery_state="queued", sent_by_user_id=user_id)
    db.add(update_token)
    db.add(message)
    db.flush()
    try:
        send_customer_email(item.requester_email, message.subject, email_body)
        message.delivery_state = "sent"
        message.sent_at = datetime.now(timezone.utc)
        make_event(db, item, user_id, "information_requested", f"Requested shipment details from {item.requester_name}.")
        db.commit()
    except HTTPException:
        update_token.revoked_at = datetime.now(timezone.utc)
        message.delivery_state = "failed"
        db.commit()
        raise
    return {"sent": True, "expires_at": update_token.expires_at}


@app.get("/api/public/forms/{form_token}")
def get_public_form(form_token: str, db: Session = Depends(get_db)):
    company = db.scalar(select(Company).where(Company.public_form_token == form_token))
    if company is None or sync_trial_state(db, company):
        raise HTTPException(status_code=404, detail="This request form is unavailable.")
    return {"company_name": company.name, "title": f"Shipment request for {company.name}"}


@app.get("/api/public/updates/{token}")
def get_customer_update(token: str, db: Session = Depends(get_db)):
    now = datetime.now(timezone.utc)
    update_token = db.scalar(select(CustomerUpdateToken).where(CustomerUpdateToken.token_hash == token_digest(token)))
    if update_token is None or update_token.used_at is not None or update_token.revoked_at is not None or update_token.expires_at <= now:
        raise HTTPException(status_code=404, detail="This update link is unavailable. Please contact the company that sent it.")
    company = db.get(Company, update_token.company_id)
    item = db.get(ShipmentRequest, update_token.request_id)
    if company is None or item is None or sync_trial_state(db, company):
        raise HTTPException(status_code=404, detail="This update link is unavailable. Please contact the company that sent it.")
    return {
        "company_name": company.name,
        "request_number": f"SR-{item.request_number:06d}",
        "requester_name": item.requester_name,
        "fields": [{"id": field, "label": READY_FIELDS.get(field, field.replace("_", " ").title()), "value": getattr(item, field)} for field in update_token.allowed_fields],
    }


@app.post("/api/public/updates/{token}")
def submit_customer_update(token: str, payload: CustomerUpdateInput, db: Session = Depends(get_db)):
    now = datetime.now(timezone.utc)
    update_token = db.scalar(select(CustomerUpdateToken).where(CustomerUpdateToken.token_hash == token_digest(token)))
    if update_token is None or update_token.used_at is not None or update_token.revoked_at is not None or update_token.expires_at <= now:
        raise HTTPException(status_code=404, detail="This update link is unavailable. Please contact the company that sent it.")
    company = db.get(Company, update_token.company_id)
    item = db.get(ShipmentRequest, update_token.request_id)
    if company is None or item is None or sync_trial_state(db, company):
        raise HTTPException(status_code=404, detail="This update link is unavailable. Please contact the company that sent it.")
    submitted_fields = set(payload.values)
    allowed_fields = set(update_token.allowed_fields)
    if not submitted_fields or not submitted_fields.issubset(allowed_fields):
        raise HTTPException(status_code=422, detail="This link does not allow one or more of those fields.")
    try:
        incoming_values = {key: (None if value == "" else value) for key, value in payload.values.items()}
        validated = RequestUpdate.model_validate(incoming_values).model_dump(exclude_unset=True)
    except Exception as error:
        raise HTTPException(status_code=422, detail="Please check the information and try again.") from error
    for field, value in validated.items():
        setattr(item, field, value)
    update_token.used_at = now
    gaps = readiness_gaps(item)
    if not gaps and item.status == "needs_information":
        item.status = "ready_for_review"
    make_event(db, item, None, "customer_updated", "The customer supplied requested shipment information.")
    db.commit()
    return {"message": "Your information has been received. Thank you.", "request_number": f"SR-{item.request_number:06d}", "ready_for_review": not gaps}


@app.post("/api/public/forms/{form_token}/requests", status_code=status.HTTP_201_CREATED)
def submit_public_request(form_token: str, payload: RequestInput, db: Session = Depends(get_db)):
    company = db.scalar(select(Company).where(Company.public_form_token == form_token))
    if company is None:
        raise HTTPException(status_code=404, detail="This request form is unavailable.")
    require_active_company(db, company)
    values = payload.model_dump(exclude={"source"})
    item = create_request_record(db, company, values, None, "public_form")
    email_sent = False
    if settings.smtp_host:
        number = f"SR-{item.request_number:06d}"
        subject = f"We received shipment request {number}"
        body = f"Hello {item.requester_name},\n\nWe received your shipment request {number}. The operations team will review it and follow up if more information is needed.\n\nCerato Systems"
        message = CustomerMessage(company_id=company.id, request_id=item.id, recipient=item.requester_email, subject=subject, body=body, delivery_state="queued")
        db.add(message)
        db.commit()
        try:
            send_customer_email(item.requester_email, subject, body)
            message.delivery_state = "sent"
            message.sent_at = datetime.now(timezone.utc)
            email_sent = True
        except HTTPException:
            message.delivery_state = "failed"
        db.commit()
    return {"request_number": f"SR-{item.request_number:06d}", "message": "Your request has been received.", "receipt_email_sent": email_sent}
