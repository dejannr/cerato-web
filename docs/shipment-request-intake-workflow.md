# Shipment Request Intake Workflow

## Purpose

This document describes a small, self-contained workflow product for logistics and transportation teams. It takes a shipment request from first contact through information completion and operational handoff.

The product is intended to replace the repeated work of reading requests from email or messages, copying details into another record, finding missing information, following up, and keeping the team aware of the request's current state.

The workflow ends when a complete request is accepted for operational review or is closed. It does not attempt to replace a TMS, plan routes, dispatch drivers, or calculate a final freight price.

## Example customer journey

An operations coordinator sends a customer a request link. The customer enters a pickup and delivery location, requested dates, cargo details, and contact information. The system notices that cargo dimensions are missing and creates a request in **Needs information**. The coordinator sends a request for the missing details from the request record. The customer replies, the coordinator adds the dimensions, and the request becomes **Ready for review**. A teammate reviews and accepts it, then hands it off to the process used to plan or quote the shipment.

The coordinator can see the request, the outstanding task, and the full activity history in one place throughout the process.

## People and access

- **Company owner:** creates the company, configures the form and rules, invites teammates, and manages trial or company settings.
- **Operations team member:** reviews requests, asks for information, adds notes, assigns work, changes statuses, and completes the handoff.
- **Customer or requester:** submits a request through a public form link and receives relevant acknowledgments or follow-ups. A customer account is not required.

Company members have named accounts. The company owner can invite or remove teammates. Every request has an owner or an explicit unassigned state so work does not silently disappear into a shared inbox.

## 1. Registration and initial setup

1. A visitor selects **Start free trial** and creates an account with their name, work email, password, and company name.
2. The system creates a private company and starts a 30-day trial. The trial date and remaining time are visible in company settings.
3. The owner chooses a company name, default timezone, and the email address that should appear as the sender on customer messages.
4. The system opens a short setup checklist:
   - Review the sample request form.
   - Choose required request fields.
   - Set basic validation rules.
   - Invite a teammate, if applicable.
   - Submit a test request or share the form link.
5. A sample company is available so the owner can inspect a complete example before entering real data. Sample records are clearly marked and can be removed in one action.

The company is usable immediately with sensible defaults. Configuration is optional and can be changed later.

## 2. Configure the request form

The owner can create a customer-facing form for shipment requests. The form has a shareable URL and can be opened without the requester creating an account.

### Suggested default fields

- Requester name, company, and email
- Pickup address or location
- Delivery address or location
- Requested pickup and delivery dates
- Cargo description
- Number of pieces or units
- Weight and dimensions, when known
- Special handling notes
- Reference number, if the customer has one

The owner can edit field labels, mark fields as required or optional, reorder fields, and hide fields that do not apply to their operation. For a first release, use a small set of practical field types: short text, long text, email, phone, date, number, and single-choice selection.

The public form should display the company name and a short explanation of what happens after submission. It should confirm submission without exposing other customer requests or internal notes.

### Form rules

The owner can configure straightforward checks, such as:

- Required fields must be present.
- Email fields must have a valid format.
- A delivery date cannot be earlier than a pickup date.
- Numeric fields cannot contain negative values.
- A field can be required only for selected request types, if request types are enabled.

Validation should explain what needs correction in plain language. A failed check should not silently discard the customer's entries.

## 3. How a request enters the workflow

Requests can enter in two ways:

1. **Customer form:** the requester completes the public form and submits it.
2. **Manual entry:** a team member creates a request after receiving details by phone, email, or another channel.

Both methods create the same kind of request record. The team member can record the original source, such as public form, email, phone, or other, and add an external reference if useful.

On submission, the system:

1. Creates a unique request number.
2. Saves the supplied fields and submission time.
3. Checks required fields and configured rules.
4. Sets the initial status to **New** if the submission is complete, or **Needs information** if information is missing or inconsistent.
5. Adds an event to the activity history.
6. Notifies the company about the new request.
7. Sends the requester a receipt confirmation when a valid contact email is available and customer notifications are enabled.

The request should never be rejected merely because a non-required detail is unavailable. The team can decide what is essential for its process.

## 4. The request record

Each request has a detail page with these sections:

- **Summary:** request number, customer, current status, owner, priority, source, and created or updated time.
- **Shipment details:** all submitted or manually entered field values.
- **Readiness checks:** missing required information, failed rules, and resolved checks.
- **Next action:** the most useful outstanding task, such as asking for dimensions or reviewing a complete request.
- **Customer communication:** messages sent and replies or updates recorded by the team.
- **Internal notes:** notes visible only to company members.
- **Activity history:** a time-ordered record of submission, edits, assignments, status changes, and messages.

Team members can edit details, assign an owner, change the status, add an internal note, and send a customer message from this page. The record should make clear which content is customer-visible and which is internal.

## 5. Statuses and transitions

Use a short, understandable status set:

| Status | Meaning | Typical next action |
| --- | --- | --- |
| **New** | The request has arrived and is awaiting an initial check. | Review the request. |
| **Needs information** | Required information is missing, inconsistent, or awaiting a customer response. | Ask for or record the missing information. |
| **Ready for review** | The configured readiness checks pass and the request is ready for an operational decision. | Review and accept, decline, or return for information. |
| **Accepted** | The team has accepted the request for the next operational process. | Hand it off to quoting, planning, or another existing process. |
| **Closed** | The request will not proceed, or its intake workflow is complete. | No further intake action is expected. |

Status changes can be made by an authorized team member. The system may suggest a status based on readiness checks, but should not silently mark a request accepted. Acceptance is a business decision for the team.

When a team member attempts to move a request to **Ready for review**, the system checks the configured rules again and shows any unresolved items. A team member with the appropriate permission may override a check, but must enter a short reason. The override is recorded in the activity history.

Closing a request asks for a reason such as duplicate, cancelled by requester, declined, or other. The reason is recorded and can be included in filtered views and exports.

## 6. Missing-information follow-up

When a request needs information, the team member selects the missing fields or writes a short question. The system prepares a customer message that:

- Identifies the request by its request number.
- Lists the specific information needed.
- Gives the customer a reply path or a secure update link.
- Uses the company's configured sender details and message template.

The message is reviewed and sent by the team member. The system records the sender, recipient, time, and message content in the request history.

For an initial release, the most reliable reply workflow is a secure link to a request update form. The link lets the requester supply only the requested fields without creating an account. After submission, the system saves the response, reruns the readiness checks, records the update, and notifies the assigned team member. The requester sees a confirmation that the information was received.

If reply-by-email is supported, inbound email matching should be treated as a later enhancement unless it can be implemented reliably. A simple, dependable update link is enough to demonstrate the workflow.

The team member can also enter information received by phone or another channel and record the source. Customer updates must not overwrite internal notes.

## 7. Assignment and team coordination

- A request can be assigned to one company member or left unassigned.
- The company can set a default owner for new requests; otherwise they appear in an **Unassigned** queue.
- Assignment and reassignment are recorded in the history.
- Team members can add internal notes and mention the next action in plain language.
- An optional due date can help teams track follow-up without introducing a full task-management system.
- The request list supports filters for status, owner, source, creation date, and due date, plus search by request number, customer, or reference.

## 8. Notifications and automation

The workflow should automate predictable administrative steps while leaving operational decisions to people.

### Automatic actions

- Create the request record and request number.
- Run configured validation checks.
- Set the initial status based on those checks.
- Send a submission receipt when enabled.
- Notify the company or assigned owner of a new request.
- Notify the owner when a customer submits requested information.
- Record events and timestamps in the activity history.

### Team-controlled actions

- Accept or decline a shipment request.
- Decide whether an exception or missing detail is acceptable.
- Send a follow-up message.
- Override a validation result with a recorded reason.
- Hand the accepted request to the next business process.

Notification preferences should be configurable so teams can reduce unnecessary email. In-app request queues remain the source of truth.

## 9. Daily company views

The home screen should answer three questions quickly: what arrived, what is waiting for a customer, and what is ready for the team?

Suggested views:

- **Needs attention:** new requests, overdue follow-ups, and unresolved validation issues.
- **Needs information:** requests waiting for a customer or for a team member to enter details.
- **Ready for review:** complete requests awaiting a decision.
- **Assigned to me:** requests owned by the signed-in member.
- **All requests:** searchable and filterable company list.

A small summary can show counts by status and average time to first review. Keep the main interface focused on actionable requests rather than a broad analytics dashboard.

## 10. Handoff and completion

When a request is accepted, the team member can add a handoff note and, if needed, export the request as a CSV row or copy a formatted summary into the company's existing TMS or quoting process.

The handoff should include the request number, customer, pickup and delivery details, dates, cargo details, special notes, and any exceptions or overrides. The system marks the request **Accepted**, records who accepted it and when, and can send the requester an acceptance acknowledgment.

The workflow is complete when the request is accepted and handed off, declined, cancelled, or otherwise closed. Shipment execution continues in the team's existing operational tools.

## 11. Example from start to finish

1. A customer submits request **SR-1042** for a pickup next Tuesday and delivery the following day.
2. The form contains the route and cargo description, but no cargo dimensions.
3. The system creates the request as **Needs information**, identifies dimensions as missing, and sends a receipt confirmation.
4. The operations queue shows the request under **Needs information**. The owner assigns it to Ana.
5. Ana selects the missing dimensions and sends a follow-up using the request template.
6. The customer opens the secure update link and adds the dimensions.
7. The system saves the update, reruns the rules, moves the request to **Ready for review**, and notifies Ana.
8. Ana checks the details, adds an internal note about a special handling requirement, and accepts the request.
9. The system records the acceptance and generates a concise handoff summary for the team's existing quoting or planning process.
10. Ana closes the intake work. The request history remains available for search and export.

## 12. Exceptions and less common cases

- **Duplicate request:** a team member can mark a request as a duplicate and link or note the related request number. The system should warn about possible duplicates based on a matching customer, route, and date, but allow the team to decide.
- **Customer cancels:** the team member closes the request with a cancellation reason and can send a confirmation.
- **Request changes after submission:** edits are saved with a timestamp and attributed to the customer or team member who made them. Important changes can notify the assigned owner.
- **No customer email:** a team member can still create and process the request manually. The system should not attempt customer email notifications without a valid address.
- **Rule override:** an authorized member can continue despite a failed check, with a required reason in the history.
- **Unassigned work:** new requests remain visible in the unassigned queue and can trigger a company notification.
- **Rejected or withdrawn request:** the request is closed with a reason and remains searchable rather than being deleted.

## 13. Trial behavior

The 30-day trial includes the complete feature set described in this workflow. There are no feature tiers within the trial. The time limit applies to using the company, not to which workflow capabilities are available.

During the trial, the company owner can configure forms and rules, invite teammates, receive requests, send follow-ups, assign work, use all views, and export records. The interface should show the trial end date and provide clear reminders before expiry.

At the end of the trial, the company is frozen. Members cannot view company data or use the application. The owner sees in-app reminders seven days, three days, and one day before expiry. On the next sign-in after expiry, the application says the trial has expired and directs the owner to contact Cerato Systems. Data is retained indefinitely. No payment method or automatic subscription is required.

## 14. Product boundaries for the first version

Keep the first version focused on one workflow: request intake, information completion, readiness review, and handoff.

Include:

- Self-serve company registration and setup
- Public request form and manual request entry
- Configurable fields and straightforward validation rules
- Request queue, detail page, assignment, statuses, notes, and history
- Customer receipt and missing-information messages
- Secure customer update link
- Notifications, search, filters, basic summary, and export
- Full feature access for the entire 30-day trial

Leave out of the first version:

- Route optimization and dispatch scheduling
- Driver, vehicle, or fleet management
- Automated freight-rate calculation or quoting logic
- Full TMS, ERP, accounting, or CRM replacement
- Complex document OCR or AI extraction
- General-purpose workflow builders
- Multi-stage approval designers
- Complex inbound email parsing

These boundaries keep setup understandable and make it possible for a new user to experience the complete value of one operational workflow without configuring a large business system.

---

# Implementation Specification

This section turns the workflow into a build-oriented product specification. It defines user-facing areas, permissions, records, lifecycle behavior, and completion criteria. The recommended implementation stack and deployment arrangement are specified in Section 27.

## 15. Product decisions and terminology

- The product is a single-workflow application for shipment request intake and handoff.
- A **company** is the account-owning organization in the application. It has one private company area, settings, members, and one trial.
- A **member** is a person with an account in a company.
- A **requester** is an external customer or contact. Requesters do not need accounts.
- A **request** is one shipment intake record.
- A **public form** is a company-branded link through which a requester can submit a request.
- A **customer update link** grants temporary, limited access to provide information for one request.
- Each user account may create no more than one company and may belong to only one company at a time.
- A company has one trial. The trial belongs to the company, not an individual member, and includes every product feature for 30 calendar days. No in-trial feature limits apply.
- Trial registration does not require a payment method.
- Send the company owner reminders seven days, three days, and one day before trial expiry.
- At the end of the 30-day trial, freeze the application for that company. On the next sign-in after expiry, show an expired-trial notice instead of the company. Members cannot view company data or use the application.
- Retain company data indefinitely after expiry. No paid subscription starts automatically.

## 16. Application areas and screen requirements

### 16.1 Public marketing and trial entry

The marketing site explains the workflow and provides a **Start free trial** path. Trial entry collects only the information needed to create an account and company. The user must accept the terms and privacy notice before account creation. Company creation and trial eligibility are checked against the user account so one user cannot create multiple companies to restart the trial.

After successful registration, the user lands in the new company setup experience. Errors should preserve entered values where safe and explain how to recover.

### 16.2 Sign-up, sign-in, and recovery

- Sign-up fields: name, work email, password, company name, terms acceptance.
- Sign-in fields: email and password.
- Password reset uses a time-limited single-use link.
- Email verification is required before inviting teammates. Customer messages are sent from `andria@ceratosystems.com`.
- Sessions expire after an appropriate inactivity period and can be revoked by the account holder or company owner.
- An account can create only one company. It can actively belong to only one company at a time; there is no company switcher.
- A member who leaves or is removed can join a different company by invitation, but cannot create another company. Leaving or joining a company does not reset or create a trial.
- Account deletion and company deletion are separate actions with clear consequences.

### 16.3 First-run setup

The setup screen shows a short checklist and the user's progress. The owner can skip setup and return later. Default form and rule settings make the product usable immediately.

Setup tasks:

1. Confirm company name and timezone.
2. Review default request fields and required fields.
3. Review customer message templates and sender identity.
4. Optionally invite teammates.
5. Create a sample request or publish the customer form.

The sample request is clearly labeled as sample data, excluded from real operational counts by default, and removable without affecting real requests.

### 16.4 Company home and request queue

The home view contains:

- Counts for New, Needs information, Ready for review, and overdue follow-ups.
- A **Needs attention** list prioritized by overdue follow-up, then oldest unreviewed request.
- Quick access to Assigned to me, Unassigned, Needs information, Ready for review, and All requests.
- A visible trial end date while the company is in trial.

The request queue supports text search and filters by status, assignee, source, created date, and due date. Each row shows request number, requester/company, route, pickup date, status, assignee, and last activity. Sorting by last activity, created date, and pickup date is supported. Empty states explain how to create or receive the first request.

### 16.5 Request detail

The request detail view shows the request summary, shipment fields, readiness checks, next action, customer communication, internal notes, and activity history. Available actions depend on the member's role and the request state.

The screen must distinguish customer-visible messages from internal notes using labels and separate presentation. Destructive or consequential actions—close, delete, override a validation result—require confirmation or a reason as described below.

### 16.6 Create and edit request

Members can create a request manually using the same fields and rules as the public form. Source defaults to **Manual** but can be changed to Phone, Email, or Other. The user can save a partial request; it remains **Needs information** and lists the missing required fields.

Editing a request validates changed values, preserves a change history, and updates the readiness result. A field changed by a requester through an update link is attributed to the requester. Internal notes are never editable through a public link.

### 16.7 Form and workflow settings

The owner can manage:

- Company name and timezone.
- Public form title, introduction, active state, and shareable URL.
- Fields, labels, required state, order, and supported field type.
- Basic validation rules and which fields they apply to.
- Default request owner and notification preferences.
- Customer message templates and sender display name. Customer messages are sent from `andria@ceratosystems.com`; the delivery service is managed by Cerato Systems.
- Members, invitations, and access. The only roles are Owner and Member; the owner can transfer ownership but cannot create custom roles.

Changes to a published form apply to new submissions. Existing requests retain their saved values and must remain readable even if a field is later hidden or renamed. Keep a stable field identifier and store a field-label snapshot with submitted values.

### 16.8 Company members, ownership, and invitations

Company settings show the company owner and every member with their role and invitation state. The owner can invite a teammate as a Member by email. Invitations expire after seven days and can be resent or revoked. A person can have only one active company membership; someone who already belongs to a company must leave or be removed before accepting a different company's invitation. A member who leaves or is removed can no longer access company data; their historical actions remain attributed to their account. An account can create only one company, even after leaving or deleting it.

### 16.9 Trial and billing area

Company settings show the trial end date, remaining days, company owner, and each member's role. The page explains that the application freezes at expiry, company data is retained indefinitely, and the owner should contact Cerato Systems to discuss restoring access. There is no payment collection or automatic renewal in this version.

### 16.10 Public request form

The form is accessible without authentication and only creates a request in the company identified by its unguessable public form token. It displays configured customer-facing fields and validation messages. It must not expose company members, existing requests, internal notes, or other customer data.

Successful submission returns a confirmation and, when provided, sends a receipt. The receipt should not reveal sensitive shipment details beyond the request reference and submission confirmation.

### 16.11 Customer update page

The update page is reached through an unguessable, expiring, single-request token. It displays only the fields the team requested from the customer. It does not permit the requester to view internal notes, other requests, team details, or change the request status directly.

After successful submission, the token is invalidated or limited according to the configured follow-up policy, the request is revalidated, and the requester sees a confirmation. Expired or revoked links show a neutral message asking the requester to contact the company.

### 16.12 Export

Authorized members can export the filtered request list or an individual handoff summary. Exports include operational fields and status but exclude passwords, authentication tokens, internal system secrets, and customer update tokens. The export action is recorded in the company audit history.

## 17. Roles and permissions

Use two company roles in the initial version:

| Capability | Owner | Member |
| --- | --- | --- |
| View company requests and activity | Yes | Yes |
| Create and edit requests | Yes | Yes |
| Assign and reassign requests | Yes | Yes |
| Add internal notes and customer messages | Yes | Yes |
| Change request status and close requests | Yes | Yes |
| Override failed readiness checks | Yes, with reason recorded | No |
| Export requests | Yes | Yes |
| Configure form fields, rules, templates, and company defaults | Yes | No |
| Invite or remove members | Yes | No |
| Manage trial or delete company | Yes | No |

The company owner is a member with additional administrative permissions. A company must always have exactly one designated owner. Ownership transfer requires the current owner to select another verified member and confirm the transfer. If the only owner leaves, ownership must be transferred or the company must be deleted first. Company settings show who owns the company and what role each member has. The owner alone can override a failed readiness check, and must record a reason.

All authorization checks occur on the server. Hiding an action in the interface is not an authorization control.

## 18. Data model

All company-owned records include a company identifier. Every read and write must be scoped to the authenticated member's company. IDs should be opaque and non-sequential for externally reachable resources.

### 18.1 Account

- `id`
- `name`
- `email` (unique, normalized)
- `email_verified_at` (nullable)
- `password_hash` or external identity provider reference
- `company_created_at` (nullable; set once a company is created, prevents account from creating another)
- `created_at`, `updated_at`, `deleted_at` (nullable)

### 18.2 Company

- `id`
- `name`
- `timezone`
- `owner_account_id` (exactly one current owner)
- `created_by_account_id` (unique across companies; the account that created this company)
- `state`: `trial`, `frozen`, `active`, `deletion_pending`, `deleted`
- `trial_started_at`, `trial_ends_at`
- `created_at`, `updated_at`

The company record owns the trial dates and state; there is no separate trial record. `active` means Cerato Systems has restored the company after expiry.

### 18.3 Company membership

- `id`
- `company_id`
- `account_id`
- `role`: `owner` or `member`
- `status`: `invited`, `active`, `removed`
- `joined_at` (nullable), `created_at`, `updated_at`

Enforce a global uniqueness constraint on `account_id` among active company memberships, so an account belongs to only one company at a time. Enforce one company creation per account, even if that company is later deleted. An invitation is rejected while the account already has an active membership. After leaving or removal, the account may accept an invitation to a different company but cannot create a company.

### 18.4 Invitation

- `id`
- `company_id`
- `email`
- `role` (always `member` for an invitation)
- `token_hash` (store a hash, never the raw token)
- `expires_at`, `accepted_at` (nullable), `revoked_at` (nullable)
- `invited_by_account_id`
- `created_at`

### 18.5 Request form configuration

- `id`
- `company_id`
- `public_token_hash`
- `title`, `introduction`
- `active`
- `version`
- `created_at`, `updated_at`

The raw public token is only presented in the share URL; store a cryptographic hash for lookup where practical. Rotating the URL invalidates the previous token.

### 18.6 Request field definition

- `id` (stable field key)
- `company_id`
- `form_id`
- `label`
- `type`: `short_text`, `long_text`, `email`, `phone`, `date`, `number`, `single_choice`
- `required`
- `visible_on_public_form`
- `customer_editable`
- `position`
- `options` (for single choice)
- `validation_config` (bounded, typed configuration)
- `active`
- `created_at`, `updated_at`

System fields such as request number, status, source, assignee, and timestamps are not configurable form fields.

### 18.7 Request

- `id`
- `company_id`
- `request_number` (unique within company)
- `form_version` (nullable for manual requests)
- `requester_name`, `requester_company`, `requester_email`, `requester_phone` (nullable as appropriate)
- `source`: `public_form`, `manual`, `phone`, `email`, `other`
- `status`: `new`, `needs_information`, `ready_for_review`, `accepted`, `closed`
- `close_reason` (nullable)
- `assignee_membership_id` (nullable)
- `priority` (default normal; no custom priority rules initially)
- `due_at` (nullable)
- `pickup_date`, `delivery_date` (nullable)
- `field_values` (typed JSON keyed by stable field IDs, with label snapshot)
- `readiness_result` (structured result with rule IDs and messages)
- `handoff_note` (nullable)
- `accepted_at`, `accepted_by_membership_id` (nullable)
- `created_by_account_id` (nullable for public submissions)
- `created_at`, `updated_at`, `closed_at` (nullable)

Enforce request number uniqueness per company. Store dates with unambiguous date semantics; store event timestamps in UTC and render using the company timezone.

### 18.8 Rule definition

- `id`
- `company_id`
- `field_id` (nullable for cross-field rule)
- `type`: required, date_order, non_negative, email_format, or supported fixed rule
- `config` (validated typed values only)
- `active`
- `created_at`, `updated_at`

Do not execute arbitrary user-provided code or expressions. Cross-field rules are explicit supported rule types.

### 18.9 Message template and message record

Template fields:

- `id`, `company_id`, `kind` (`receipt`, `information_request`, `accepted`, `closed`)
- `subject`, `body`, `active`, `created_at`, `updated_at`

Sent message fields:

- `id`, `company_id`, `request_id`
- `kind`, `recipient`, `subject`, `body`
- `delivery_state`: `queued`, `sent`, `failed`
- `provider_reference` (nullable)
- `sent_by_membership_id` (nullable for system messages)
- `created_at`, `sent_at` (nullable)

Templates support a small allowlist of placeholders, such as requester name, request number, company name, and update link. Unknown placeholders must be rejected or rendered safely, not executed. Messages are sent from `andria@ceratosystems.com`. Companies do not configure email delivery, and inbound email processing is outside this version; customers provide requested details through secure update links.

### 18.10 Customer update token

- `id`, `company_id`, `request_id`
- `token_hash`
- `allowed_field_ids`
- `expires_at`
- `used_at` or `revoked_at` (nullable)
- `created_at`

Tokens are high entropy, stored hashed, scoped to one request and a set of fields, rate-limited, and invalidated on expiry or revocation.

### 18.11 Internal note

- `id`, `company_id`, `request_id`
- `author_membership_id`
- `body`
- `created_at`, `edited_at` (nullable)

Do not store customer-visible communication as an internal note or vice versa.

### 18.12 Activity event

- `id`, `company_id`, `request_id` (nullable for company events)
- `actor_type`: member, requester, or system
- `actor_id` (nullable for anonymous requester/system events)
- `event_type`
- `summary`
- `details` (structured, allowlisted event data)
- `created_at`

Events include creation, field changes, status transitions, assignment changes, messages, note creation, rule overrides, export, and closure. Activity history is append-only for normal users. Corrections are recorded as new events.

### 18.13 Notification preference

- `id`, `company_id`, `membership_id`
- `new_request_email_enabled`
- `customer_update_email_enabled`
- `assignment_email_enabled`
- `created_at`, `updated_at`

In-app queues are authoritative; email notification failure must not lose a request.

## 19. Business rules and state behavior

### 19.1 Readiness evaluation

The server evaluates active company rules whenever a request is created or relevant field values change. It stores the evaluated result and the rule/configuration version used. A request is eligible for **Ready for review** only when all blocking rules pass or an authorized member records an override.

Missing optional information is not a blocker. A rule override records the member, rule, reason, and time. Overridden requests are visibly marked in the detail view and handoff summary.

### 19.2 Status transition rules

- Public form submission creates `new` when blocking checks pass, otherwise `needs_information`.
- Manual partial request creation creates `needs_information` until required checks pass.
- Passing checks does not auto-accept a request.
- A member may set a request to `ready_for_review` only after the server reevaluates it.
- `ready_for_review` may transition to `accepted`, `needs_information`, or `closed`.
- `accepted` may transition to `closed`; reopening requires a reason and an activity event.
- `closed` is terminal in the normal interface. Reopening is an explicit owner/member action with a reason and restores an appropriate active status.
- Closing requires a close reason. Accepted requests closed as completed use a completion reason; rejected, cancelled, and duplicate requests use their respective reasons.

Every transition writes an activity event in the same transaction as the request update.

### 19.3 Duplicate detection

Duplicate detection is advisory, not a hard block. A possible duplicate can be suggested when normalized requester email, pickup/delivery locations, and dates match within a configurable short period. The user can proceed or link the request as a duplicate. No automatic merging occurs.

### 19.4 Request numbering

Use a readable company-scoped sequence such as `SR-000123`. Allocate numbers atomically to prevent collisions under concurrent submissions. Numbers are identifiers for people, not authorization secrets.

## 20. Trial lifecycle and access rules

### 20.1 Trial start

The trial belongs to the company and begins when the company is created, not when the first request is submitted. All company members share the same trial end date and state. Store exact start/end timestamps in UTC. Display calendar dates in the company timezone. An account may create only one company, and a company receives only one trial. Leaving a company does not reset trial eligibility or allow that account to create another company.

### 20.2 Reminders

Queue an in-app reminder for the company owner seven days, three days, and one day before trial end. Show each reminder the next time the owner signs in on or after its scheduled day while the trial is still active, and show each scheduled reminder only once. If the owner next signs in after expiry, show the expired-trial notice instead. Do not send trial notices by email or to customers/requesters.

### 20.3 Expiry and freeze

At `trial_ends_at`:

- Change the company state to `frozen`.
- Do not start billing automatically.
- Block access to the company application and all company data. On the next sign-in, show an expired-trial screen with the expiry date and instructions for the owner to contact Cerato Systems to discuss restoring access. Other members see that the company's trial has expired.
- Do not expose company data, requests, settings, or exports on the expired-trial screen.
- Disable public submission and customer update links with a neutral expiry message that does not reveal company data.

Authentication remains available only to identify the member and display the expired-trial state; it does not grant access to company content.

### 20.4 Retention and deletion

Retain company data indefinitely after trial expiry. Do not automatically delete it because the trial expired. Data remains inaccessible to company members while frozen. Company deletion requests and any legal retention obligations must still be handled according to the published privacy notice and terms. Public form and customer update tokens remain disabled while frozen.

### 20.5 Subscription activation

The trial does not collect a payment method or automatically convert to a paid subscription. There is no self-service paid plan in this version. To restore access after expiry, the owner contacts Cerato Systems. Cerato Systems handles any commercial agreement before access is restored.

## 21. Security, privacy, and reliability requirements

- Enforce company-level tenant isolation on every server read, write, export, and background job.
- Use secure password hashing or a reputable authentication provider; never store plaintext passwords.
- Use HTTPS for all pages and API calls in production.
- Protect public forms against spam with rate limits, honeypot or equivalent controls, and optional challenge escalation when abuse is detected.
- Rate-limit sign-in, password reset, public submissions, customer update submissions, and message sending.
- Use CSRF protections where cookie-based authentication requires them; set secure, HTTP-only, same-site cookies.
- Escape user-provided values in rendered HTML and email. Sanitize rich content; preferably support plain-text notes and messages initially.
- Keep public form and update tokens unguessable, scoped, revocable, and excluded from analytics, logs, referrer headers, and error traces.
- Never expose customer data through sequential IDs, client-side authorization alone, or unfiltered exports.
- Log security-relevant events without logging passwords, raw tokens, or unnecessary personal data.
- Back up operational data and document restoration procedures. Email provider failure must preserve the request and expose message delivery failure for retry.
- Define data retention, deletion, privacy notice, and terms before accepting real customer data.
- Avoid collecting shipment details not needed for intake. Let each company decide which fields are required.

## 22. Operational and accessibility requirements

- Core workflows work on current desktop and mobile browsers, with responsive public forms and request detail pages.
- All actions are usable by keyboard and have visible focus states.
- Inputs have persistent labels; validation errors are connected to fields and announced to assistive technology.
- Status must be conveyed by text as well as color.
- Respect reduced-motion preferences.
- Show loading, success, empty, and error states for data and message actions.
- Prevent duplicate form submissions with idempotency or equivalent safeguards.
- Use pagination for request lists and exports large enough to avoid timeouts.
- Store operational timestamps in UTC and display them in the company timezone.
- Provide a support/contact route for account access and data issues.

## 23. Error and recovery behavior

- **Form validation error:** preserve entered data and identify each invalid or missing field.
- **Network error during submission:** show a retry option; prevent duplicate requests using an idempotency key.
- **Customer message failure:** keep the request and message draft, mark delivery failed, and allow retry. Do not report it as sent.
- **Expired update link:** explain that the link is no longer available and invite the requester to contact the company; do not reveal whether a request number exists.
- **Member removed during a session:** revoke or refresh authorization so subsequent requests are denied.
- **Company trial expired:** use the frozen behavior above and explain the available next actions.
- **Export failure:** show a recoverable error and do not silently produce a partial export.

## 24. Analytics and audit

Product analytics may record aggregate events needed to understand onboarding and workflow adoption, such as company created, setup completed, first request received, first follow-up sent, request accepted, and trial converted. Analytics must not include message bodies, shipment details, customer email addresses, or public tokens.

Company audit history records operational changes visible to authorized company members. Product analytics and the audit history serve different purposes and must remain separate.

## 25. Implementation acceptance criteria

The first release is ready for customer use when all of the following are true:

1. A new owner can register, verify their email, create one company, and begin that company's 30-day full-feature trial.
2. The owner can use the default form without completing configuration and can customize supported fields, required state, and basic rules.
3. A customer can submit a request without an account; the company receives one request record with a unique request number.
4. A member can create the same request manually, including a partial request that needs information.
5. Readiness checks consistently identify missing or invalid information and are reevaluated after relevant edits.
6. Members can assign requests, add internal notes, send customer follow-ups, and see the full activity history.
7. A customer update link only reveals and edits the requested fields for its one request, then expires or is revoked according to policy.
8. A complete request can be reviewed and explicitly accepted by a member; an accepted request can be handed off through a formatted summary or export.
9. Requests can be searched, filtered, and exported without crossing company boundaries.
10. Company-owner-only configuration and membership actions are rejected server-side for members.
11. Trial expiry freezes the company, blocks all company data and application access, and shows an expired notice on the next sign-in. It never starts billing automatically.
12. Failed notifications, exports, or network requests do not silently lose or duplicate operational records.
13. Public and member-facing screens have appropriate loading, empty, validation, success, and failure states and are usable on mobile and by keyboard.

## 26. Version-one rules at a glance

Use these rules consistently in the first implementation:

- A person creates an account, then creates one company. An account can never create a second company, even if the first is deleted.
- A person can actively belong to only one company at a time. After leaving or being removed, they may join a different company by invitation. They cannot create another company.
- Each company has exactly one owner and two roles: Owner and Member. The owner manages company settings and members; members handle requests. Only the owner can override a failed readiness check, and must record a reason.
- The company receives one 30-day trial with every feature. No payment method is collected and no automatic charge occurs.
- Show the owner in-app reminders 7, 3, and 1 day before expiry. Do not send trial reminders by email.
- At expiry, freeze the company. On the next sign-in, every member sees an expired notice and cannot access company data or application features. The owner is told to contact Cerato Systems to discuss restoring access.
- Retain company data indefinitely while frozen. Public forms and customer update links stop working.
- Customer workflow emails are sent from `andria@ceratosystems.com`. Companies do not configure email delivery. Customers provide requested details through secure update links; inbound email processing is not included.
- Customer email delivery must use mail infrastructure controlled by Cerato Systems; do not use a hosted email provider for this app.
- There is no self-service payment or reactivation flow in this version. Cerato Systems handles any commercial agreement and restores access.
- Publish privacy and terms that clearly explain company data handling, trial expiry, indefinite retention, and deletion requests before accepting real customer data.

## 27. Recommended backend stack and deployment

Build the demo as one product at `demo1.ceratosystems.com`, separate from the Cerato marketing website. It has a frontend and backend that work together as one application. Its business rules live in the backend so the frontend does not duplicate company, membership, request, or trial logic.

### Application stack

- **Frontend:** Next.js with React for the user interface at `demo1.ceratosystems.com`.
- **Backend:** FastAPI in Python. It owns account and company rules, authentication, invitations, request handling, trial reminders, and expiry. The Next.js frontend calls the FastAPI API; it does not reimplement those rules.
- **Database:** PostgreSQL installed and operated on Cerato-controlled infrastructure. Do not use Supabase, MongoDB Atlas, or another hosted database service.
- **Database access and migrations:** SQLAlchemy connects FastAPI to PostgreSQL; Alembic manages schema migrations. Put key rules in PostgreSQL constraints: unique account email, one company created per account, one active company membership per account, and foreign keys between companies, members, requests, and activity records.
- **Authentication:** FastAPI issues and verifies JWTs. Store passwords as secure hashes, keep signing secrets on the server, and send tokens in secure, HTTP-only cookies.
- **Validation:** use FastAPI/Pydantic validation for incoming API data. The frontend can show immediate form feedback, but FastAPI is authoritative.
- **Email:** send customer messages from `andria@ceratosystems.com` through SMTP infrastructure controlled by Cerato Systems. Do not use a hosted email API for this application. Keep the SMTP host and credentials on the server. Inbound email processing is not included; the customer update link is the reply path.
- **Trial and reminders:** store trial dates and freeze state on the company record. The backend checks trial state and provides the 7-, 3-, and 1-day in-app reminders. No external scheduler or email reminder service is required for the first version.

### Hosting arrangement

- Host the demo at `demo1.ceratosystems.com` on Cerato-controlled infrastructure.
- Run Next.js and FastAPI as separate processes behind the same HTTPS reverse proxy and hostname. Send page requests to Next.js and `/api/*` requests to FastAPI. This is one user-facing product with one coordinated deployment, not two separate products.
- Run PostgreSQL as a separate database process, bound to a private interface and not exposed to the public internet. FastAPI connects using a restricted database user.
- Keep the demo's code, configuration, and deployment separate from the marketing website. Deploying or restarting the marketing website must not deploy, restart, or change the demo.
- The frontend and backend can live in one repository with separate `frontend` and `backend` directories; this does not combine the demo with the marketing website.
- Back up PostgreSQL to storage controlled by Cerato Systems and document a restore process. Backups must follow the indefinite-retention policy for frozen company data.

This uses the stack you proposed and keeps the demo self-hosted. There is no Supabase, Atlas, hosted authentication, payment, or email provider. FastAPI is the single source of business logic; Next.js provides the interface.
