from datetime import datetime, timedelta, timezone
from uuid import UUID

from fastapi import HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models import Company, Membership, RequestEvent, ShipmentRequest


READY_FIELDS = {
    "pickup_location": "Pickup location",
    "delivery_location": "Delivery location",
    "pickup_date": "Pickup date",
    "delivery_date": "Delivery date",
    "cargo_description": "Cargo description",
}


def readiness_gaps(request: ShipmentRequest) -> list[str]:
    return [label for field, label in READY_FIELDS.items() if not getattr(request, field)]


def make_event(db: Session, request: ShipmentRequest, actor_id: UUID | None, event_type: str, summary: str) -> None:
    db.add(RequestEvent(company_id=request.company_id, request_id=request.id, actor_user_id=actor_id, event_type=event_type, summary=summary))


def current_membership(db: Session, user_id: UUID) -> tuple[Membership, Company]:
    membership = db.scalar(
        select(Membership).where(Membership.user_id == user_id, Membership.status == "active")
    )
    if membership is None:
        raise HTTPException(status_code=403, detail="Your account is not a member of an active company.")
    company = db.get(Company, membership.company_id)
    if company is None:
        raise HTTPException(status_code=403, detail="Company access is unavailable.")
    return membership, company


def sync_trial_state(db: Session, company: Company) -> bool:
    """Return True when the company is currently frozen."""
    now = datetime.now(timezone.utc)
    if company.state == "trial" and company.trial_ends_at <= now:
        company.state = "frozen"
        db.commit()
        db.refresh(company)
    return company.state == "frozen"


def require_active_company(db: Session, company: Company) -> None:
    if sync_trial_state(db, company):
        raise HTTPException(status_code=423, detail="This company's trial has expired. Contact Cerato Systems to discuss restoring access.")


def request_payload(request: ShipmentRequest) -> dict:
    return {
        "id": request.id,
        "request_number": f"SR-{request.request_number:06d}",
        "requester_name": request.requester_name,
        "requester_company": request.requester_company,
        "requester_email": request.requester_email,
        "requester_phone": request.requester_phone,
        "source": request.source,
        "status": request.status,
        "assignee_membership_id": request.assignee_membership_id,
        "pickup_location": request.pickup_location,
        "delivery_location": request.delivery_location,
        "pickup_date": request.pickup_date,
        "delivery_date": request.delivery_date,
        "cargo_description": request.cargo_description,
        "pieces": request.pieces,
        "weight_kg": request.weight_kg,
        "dimensions": request.dimensions,
        "special_handling": request.special_handling,
        "reference_number": request.reference_number,
        "close_reason": request.close_reason,
        "readiness": readiness_gaps(request),
        "created_at": request.created_at,
        "updated_at": request.updated_at,
    }


def create_trial_end(started_at: datetime | None = None) -> datetime:
    return (started_at or datetime.now(timezone.utc)) + timedelta(days=30)
