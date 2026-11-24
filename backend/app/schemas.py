from datetime import date, datetime
from typing import Literal
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field, model_validator


class RegisterInput(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    password: str = Field(min_length=12, max_length=128)
    company_name: str | None = Field(default=None, min_length=1, max_length=160)
    invite_token: str | None = Field(default=None, max_length=128)


class LoginInput(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1, max_length=128)


class RequestInput(BaseModel):
    requester_name: str = Field(min_length=1, max_length=120)
    requester_company: str | None = Field(default=None, max_length=160)
    requester_email: EmailStr
    requester_phone: str | None = Field(default=None, max_length=50)
    source: Literal["manual", "phone", "email", "public_form", "other"] = "manual"
    pickup_location: str | None = Field(default=None, max_length=2000)
    delivery_location: str | None = Field(default=None, max_length=2000)
    pickup_date: date | None = None
    delivery_date: date | None = None
    cargo_description: str | None = Field(default=None, max_length=4000)
    pieces: int | None = Field(default=None, ge=0, le=100000)
    weight_kg: float | None = Field(default=None, ge=0, le=10000000)
    dimensions: str | None = Field(default=None, max_length=160)
    special_handling: str | None = Field(default=None, max_length=4000)
    reference_number: str | None = Field(default=None, max_length=120)

    @model_validator(mode="after")
    def validate_dates(self):
        if self.pickup_date and self.delivery_date and self.delivery_date < self.pickup_date:
            raise ValueError("Delivery date cannot be before pickup date.")
        return self


class RequestUpdate(BaseModel):
    requester_name: str | None = Field(default=None, min_length=1, max_length=120)
    requester_company: str | None = Field(default=None, max_length=160)
    requester_email: EmailStr | None = None
    requester_phone: str | None = Field(default=None, max_length=50)
    pickup_location: str | None = Field(default=None, max_length=2000)
    delivery_location: str | None = Field(default=None, max_length=2000)
    pickup_date: date | None = None
    delivery_date: date | None = None
    cargo_description: str | None = Field(default=None, max_length=4000)
    pieces: int | None = Field(default=None, ge=0, le=100000)
    weight_kg: float | None = Field(default=None, ge=0, le=10000000)
    dimensions: str | None = Field(default=None, max_length=160)
    special_handling: str | None = Field(default=None, max_length=4000)
    reference_number: str | None = Field(default=None, max_length=120)

    @model_validator(mode="after")
    def validate_dates(self):
        if self.pickup_date and self.delivery_date and self.delivery_date < self.pickup_date:
            raise ValueError("Delivery date cannot be before pickup date.")
        return self


class StatusInput(BaseModel):
    status: Literal["needs_information", "ready_for_review", "accepted", "closed"]
    close_reason: str | None = Field(default=None, max_length=80)
    override_reason: str | None = Field(default=None, max_length=500)


class AssignmentInput(BaseModel):
    membership_id: UUID | None


class NoteInput(BaseModel):
    body: str = Field(min_length=1, max_length=5000)


class InformationRequestInput(BaseModel):
    fields: list[str] = Field(min_length=1, max_length=10)
    message: str | None = Field(default=None, max_length=2000)


class InviteInput(BaseModel):
    email: EmailStr


class CompanyCreateInput(BaseModel):
    name: str = Field(min_length=1, max_length=160)


class CustomerUpdateInput(BaseModel):
    values: dict[str, str | int | float | None]


class CompanyMember(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: UUID
    name: str
    email: EmailStr
    role: str


class RequestPublic(BaseModel):
    id: UUID
    request_number: str
    requester_name: str
    requester_company: str | None
    requester_email: str
    requester_phone: str | None
    source: str
    status: str
    assignee_membership_id: UUID | None
    pickup_location: str | None
    delivery_location: str | None
    pickup_date: date | None
    delivery_date: date | None
    cargo_description: str | None
    pieces: int | None
    weight_kg: float | None
    dimensions: str | None
    special_handling: str | None
    reference_number: str | None
    close_reason: str | None
    readiness: list[str]
    created_at: datetime
    updated_at: datetime
