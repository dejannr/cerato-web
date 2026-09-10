# Cerato Systems — Transportation Operations Case Study
## Full Codex integration specification

### Purpose

Create and integrate the first full customer case study for the Cerato Systems website.

This case study is based on a real production system built end-to-end for a passenger transportation company.

The client must remain anonymous.

The case study should be written and presented as **evidence of Cerato Systems' ability to understand a complicated real-world operation and turn it into custom software**, not as a generic portfolio piece and not as a technical project write-up.

Use the existing Cerato Systems website, existing design system, existing motion system, existing responsive rules, existing Customers page, and existing case-study content model.

Do **not** redesign the website.

Do **not** change global navigation, typography, color system, motion language, or established page patterns.

This specification defines:
- the story;
- exact case-study copy;
- page structure;
- project facts;
- screenshot roles;
- supporting proof;
- metadata;
- customer-card content;
- responsive behavior;
- implementation rules.

---

# 1. Case-study strategy

The case study should follow the strongest patterns used by high-quality software/product customer stories:

1. Open with the **business transformation**, not the technology.
2. Establish the client's operational context quickly.
3. Show the **before-state** in concrete terms.
4. Explain why generic tools/workarounds were no longer enough.
5. Present the solution as a **system built around the operation**.
6. Demonstrate the system through real workflows, not a feature dump.
7. Show the organizational/business impact before diving into engineering.
8. Use real product screenshots as proof.
9. Include technical complexity only after the reader understands why it mattered.
10. End by connecting the project back to Cerato Systems' broader positioning.

The page should read like a business story first and an engineering story second.

---

# 2. Core message

The reader should leave with one thought:

> **Cerato Systems can take a business held together by spreadsheets, messages, manual calculations, and knowledge in people's heads — understand how it really operates — and turn it into a complete custom software system.**

This is the single most important purpose of the case study.

---

# 3. Positioning

Do NOT position this as:
- "a bus booking website";
- "an Odoo implementation";
- "a fleet-management dashboard";
- "a Next.js project";
- "a reservation app";
- "a CRUD system";
- "an ERP customization".

Those descriptions are too narrow.

Position it as:

> **A complete operational platform for a passenger transportation company.**

The system spans customer booking, office operations, dispatch, drivers, fleet, trip execution, financial reconciliation, ticket inventory, packages, and reporting.

---

# 4. Privacy / anonymity

The real client identity must never appear publicly.

Do not use:
- the real company name;
- company logo;
- real company address;
- identifiable route/company details;
- private screenshots containing identifying information unless anonymized first.

Use the public label:

> **Private passenger transportation company**

Do not invent a pseudonymous company brand.

---

# 5. Case-study slug

Use:

```text
/customers/transportation-operations-platform
```

Preferred content identifier:

```text
transportation-operations-platform
```

---

# 6. Customer-card content

Add this case study to the `/customers` page and any homepage Featured Customer Work section.

## Eyebrow / industry

```text
Passenger transportation
```

## Card title

```text
From spreadsheets and messaging apps to one operational platform
```

## Card summary

```text
A custom system that brought passenger booking, dispatch, fleet operations, driver workflows, financial reconciliation, and reporting into one connected platform.
```

## Suggested facts

```text
~50 buses
~30 drivers
Live in production
End-to-end custom system
```

Do not add percentages or savings claims.

## CTA

```text
Read case study
```

## Cover visual

Use:

```text
PLACEHOLDER: TRANSPORTATION CASE STUDY COVER
```

When real imagery is supplied, prefer a polished crop/composition of the Daily Operations / Dispatch screen.

Do not invent a screenshot.

---

# 7. SEO

## Title

```text
Transportation Operations Platform — Cerato Systems
```

## Description

```text
How Cerato Systems replaced spreadsheets, messaging apps, and manual transportation workflows with a custom operational platform spanning booking, dispatch, fleet, drivers, financial reconciliation, and reporting.
```

## OG title

```text
From spreadsheets and messaging apps to one operational platform
```

## OG description

```text
A custom operational system built around the day-to-day complexity of a passenger transportation company.
```

## OG image

```text
PLACEHOLDER: TRANSPORTATION CASE STUDY OG IMAGE
```

---

# 8. Case-study data record

Map the content into the existing reusable case-study model.

Conceptually:

```ts
{
  slug: "transportation-operations-platform",
  title: "From spreadsheets and messaging apps to one operational platform",
  eyebrow: "Passenger transportation",
  industry: "Transportation & operations",
  summary:
    "A custom system that brought passenger booking, dispatch, fleet operations, driver workflows, financial reconciliation, and reporting into one connected platform.",
  anonymousClient: true,
  clientName: undefined,
  clientLogo: undefined,
  facts: [
    { label: "Operation", value: "~50 buses" },
    { label: "Driver network", value: "~30 drivers" },
    { label: "Initial build", value: "~6 months" },
    { label: "Status", value: "Live in production" }
  ],
  technology: [
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Odoo",
    "PostgreSQL"
  ]
}
```

If the existing type does not include `anonymousClient`, extend it cleanly rather than hard-coding this page.

Do not display a blank customer-logo slot.

---

# 9. Page structure

Use this section order:

```text
1. Case-study hero
2. The challenge
3. The goal
4. The solution
5. Passenger booking
6. Operations built around real transportation workflows
7. Driver operations
8. Work from anywhere
9. Financial control
10. Supporting operational control
11. Engineering complexity
12. Technology & end-to-end ownership
13. The outcome
14. Closing Cerato positioning / CTA
```

This order is intentional.

It moves from:

```text
business problem
→ system
→ workflows
→ control
→ engineering
→ outcome
```

---

# 10. HERO

## Back link

```text
Back to Customers
```

## Eyebrow

```text
Passenger transportation
```

## H1

```text
From spreadsheets and messaging apps to one operational platform.
```

## Hero summary

```text
A passenger transportation company was running critical parts of its operation through spreadsheets, messaging apps, manual calculations, and knowledge carried by the people managing the business.

Cerato Systems designed and built a custom platform that brought passenger booking, daily dispatch, fleet and driver operations, trip execution, financial reconciliation, ticket control, and reporting into one connected system.
```

## Facts

```text
Operation
~50 buses

Driver network
~30 drivers

Initial build
~6 months

Status
Live in production
```

## Hero image

Preferred:

```text
PLACEHOLDER: SCREENSHOT 1 — DAILY OPERATIONS / DISPATCH OVERVIEW
```

---

# 11. The challenge

## Eyebrow

```text
The challenge
```

## H2

```text
The operation had outgrown the tools holding it together.
```

## Copy

```text
Passenger transportation looks straightforward from the outside: publish a schedule, sell a seat, assign a bus, and complete the trip. Behind the scenes, the operation is a dense network of dependencies.

Passengers need to be connected to the correct departure and seat. Vehicles and drivers need to be available at the right time. Routes can span multiple stops and countries. Trips generate mileage, fuel records, cash, expenses, ticket records, manifests, and travel documents. Last-minute changes have to be reflected across the operation without losing track of what changed.

For this company, much of that work was being coordinated through Excel, Viber, WhatsApp, a calculator, and manual communication. Information lived in different places, calculations had to be repeated, and important operational knowledge often depended on the person handling the task.

At a fleet of roughly 50 buses and a network of around 30 drivers, that approach placed a significant amount of operational work on the company owner and office team. Running the business meant constantly checking, calculating, reconciling, calling, messaging, and making sure information in one place still matched information somewhere else.
```

## Callout

```text
The problem was not a lack of software. It was that the operation had no single system built around the way the business actually worked.
```

Render this as a Cerato editorial statement, not a client testimonial.

---

# 12. The goal

## Eyebrow

```text
The goal
```

## H2

```text
Build around the operation instead of forcing the operation into another tool.
```

## Copy

```text
The goal was not to digitize one isolated task.

It was to understand how the company actually operated from the moment a passenger searched for a trip through to the moment a completed journey was reconciled — then build a system around those workflows.

That meant treating booking, dispatch, drivers, vehicles, seats, money, fuel, ticket stock, packages, and reporting as parts of the same operation rather than separate software problems.

The system also had to account for the details that generic software often ignores: return journeys, transfer departures, seat allotments, multiple vehicles on the same departure, resource conflicts, international mileage, driver settlement, physical ticket serials, and changes that happen while the operation is already moving.
```

## Callout

```text
One system. Different roles. One source of operational truth.
```

---

# 13. The solution

## Eyebrow

```text
The solution
```

## H2

```text
A custom operational platform connecting the business from booking to reconciliation.
```

## Copy

```text
Cerato Systems built an end-to-end application with interfaces for passengers, office operations, management, and drivers.

Instead of replacing one spreadsheet with another isolated tool, the platform connects the major workflows of the transportation business through shared operational data.

A reservation created through the public booking experience becomes part of the same operational system used to assign seats, plan departures, allocate vehicles and drivers, manage trips, reconcile money, and generate reports.

The result is a system designed around the lifecycle of the work rather than around the boundaries of individual departments or generic software products.
```

## Capability summary

```text
Passenger booking
Reservations & seats
Routes & departures
Daily dispatch
Fleet & drivers
Driver trip workflow
Mileage & fuel
Financial reconciliation
Ticket inventory
Packages
Operational reporting
```

Use a compact grid/list, not eleven large cards.

---

# 14. Passenger booking

## Eyebrow

```text
Passenger booking
```

## H2

```text
Booking is connected directly to the operation behind it.
```

## Copy

```text
Passengers can search available trips, select a journey, reserve seats, book return travel, and receive confirmation through the public-facing application.

Behind that interface, the booking is not treated as a disconnected ecommerce transaction. It becomes an operational record tied to the departure, route, passenger, seat capacity, and the rest of the transportation workflow.

The system supports route-stop sequencing, segment-level fares, one-way and return journeys, different passenger fare types, transfers, linked departures, and seat availability rules.

That connection between the customer-facing experience and the internal operation removes the need to recreate booking information manually in a separate back-office process.
```

## Screenshot

```text
PLACEHOLDER: SCREENSHOT 2 — PASSENGER BOOKING
```

## Caption

```text
Passenger booking feeds directly into the same system used by the operations team.
```

---

# 15. Daily operations

## Eyebrow

```text
Daily operations
```

## H2

```text
The software reflects how transportation work actually happens.
```

## Copy

```text
The operational side of the system brings routes, departures, reservations, passengers, vehicles, and drivers into one working environment.

For each day, the team can see what is running, assign vehicles and drivers, manage additional buses when demand requires them, and move passengers when operational changes make that necessary.

The system checks for overlapping vehicle and driver assignments rather than relying on someone to remember every conflict manually.

Seat assignment is also connected to the underlying departure, vehicle layout, capacity, and allotment rules. The objective is not simply to store data — it is to prevent operational mistakes before they become problems on the road.
```

## Supporting points

```text
Daily vehicle and driver allocation
Resource-overlap checks
Multiple buses on a departure
Passenger reassignment
Seat layouts and availability
Seat allotments
Regular and special departures
Transfer / linked departures
One-way and return passenger lifecycle
```

---

# 16. Driver operations

## Eyebrow

```text
Driver operations
```

## H2

```text
The trip continues inside the system after the bus leaves the station.
```

## Copy

```text
Drivers have a dedicated workflow for the journeys assigned to them.

During and after a run, the system can capture the information needed to close the trip operationally: mileage, fuel, passenger counts, cash, expenses, and travel-order information.

This matters because the physical journey is only one part of completing a transportation service. The business also needs a reliable record of what happened during that journey and what needs to be reconciled afterward.

The driver interface keeps that process connected to the same departure and operational data already used by the office team.
```

## H3

```text
Built for work that happens on the road.
```

## Supporting copy

```text
Driver workflows cannot assume a perfect office connection.

The driver application includes offline-oriented behavior that can preserve selected reads and queue writes locally when connectivity is unavailable, allowing important trip work to remain practical in real operating conditions.

Once connectivity is available again, queued work can continue back into the central system.
```

## Screenshot

```text
PLACEHOLDER: SCREENSHOT 3 — DRIVER TRIP / FINANCIAL SETTLEMENT
```

## Caption

```text
Drivers complete trip records in the same system used by the office and management teams.
```

---

# 17. Work from anywhere

## Eyebrow

```text
Flexible access
```

## H2

```text
The operation stays accessible wherever the work happens.
```

## Copy

```text
Transportation operations do not happen only behind a desk.

Schedules change, vehicles are on the road, staff move between locations, and important information may be needed when a computer is not nearby.

The application was built to remain practical across different screen sizes, allowing key operational information and workflows to be accessed from a phone as well as a desktop computer.

That means the system can stay useful in the office, at the station, next to a vehicle, or while someone responsible for the operation is away from their desk.
```

## Supporting points

```text
Operational information is not locked to one office computer.
Staff can stay connected to the same centralized system while moving between locations.
Important information can be checked without waiting to return to a desk.
The application adapts to the way transportation work actually happens.
```

## Screenshot

```text
PLACEHOLDER: SCREENSHOT 4 — FULL APPLICATION ON A PHONE
```

Important: show a normal management/operations view on a phone. Do not reuse the dedicated driver screen.

## Caption

```text
The same operational system remains useful away from the desk.
```

---

# 18. Financial control

## Eyebrow

```text
Financial control
```

## H2

```text
Operational data and money are reconciled in the same workflow.
```

## Copy

```text
One of the most important parts of the project was improving control around the money and records associated with each trip.

When cash, passenger counts, fuel, expenses, and ticket records are managed through separate conversations and calculations, discrepancies can be difficult to detect and even harder to trace back to the trip that created them.

The platform ties financial and operational information back to the journey itself. Driver settlement, passenger counts, collected cash, fuel entries, expenses, and related records can be reviewed as part of a structured trip-closing process.

This gives management a much clearer basis for checking what was expected against what was recorded, and reduces the opportunity for mistakes, omissions, or unexplained discrepancies to pass unnoticed.
```

## Callout

```text
The system does not just record what happened. It gives the business a way to verify it.
```

Do not claim guaranteed fraud prevention.

---

# 19. Beyond the core trip

## Eyebrow

```text
Beyond the core trip
```

## H2

```text
The smaller operational details were part of the system too.
```

## Intro

```text
A real transportation business contains important workflows that rarely appear in generic booking software.

The platform includes supporting tools for the operational details that still need to be controlled every day.
```

## Feature groups

### Physical ticket stock

```text
Physical ticket books can be managed through depot batches and serial-number ranges, with validation around allocation and stock.
```

### Packages

```text
Package transportation can be recorded alongside the passenger operation instead of being tracked separately through messages or paper.
```

### Manifests and operational documents

```text
Passenger manifests and other operational outputs can be generated directly from system data, including spreadsheet and image-based exports where required by the workflow.
```

### Mileage and travel orders

```text
The system can produce mileage and travel-order reporting from the data captured through the actual trip workflow.
```

### Domestic / international mileage

```text
Routes can distinguish Serbian and non-Serbian mileage, supporting operational records for journeys that cross national borders.
```

---

# 20. Built for complexity

## Eyebrow

```text
Built for complexity
```

## H2

```text
Simple screens sit on top of complicated business rules.
```

## Copy

```text
Much of the engineering work in this project is invisible in a screenshot.

Transportation operations contain dependencies that have to be modeled correctly for the interface to remain simple: which route segment a passenger is travelling, which seats are actually available, whether a vehicle or driver is already committed elsewhere, how a return journey relates to the outbound booking, and how one departure changes when more than one bus is required.

The platform turns those rules into validations and workflows so the people running the operation do not have to reconstruct the logic manually each time.
```

## Complexity list

```text
Segment-aware routes and fares
Seat capacity and allotment rules
Multi-bus dispatch
Vehicle / driver conflict checks
Round-trip passenger lifecycle
Transfer and linked departures
International mileage separation
Trip-level financial reconciliation
Physical ticket serial controls
Driver offline-oriented workflows
Operational document generation
```

## Closing line

```text
The complexity stays in the system so the workflow can stay understandable for the person using it.
```

---

# 21. Engineering

## Eyebrow

```text
Engineering
```

## H2

```text
Designed and built end to end.
```

## Copy

```text
The project was built as a complete software system rather than a collection of disconnected interfaces.

Cerato Systems was responsible for the application architecture, frontend, backend business logic, data model, integrations, operational workflows, exports, and ongoing development.

The public-facing application is built with Next.js, React, and TypeScript. The operational backend is implemented as a custom Odoo module in Python with PostgreSQL as the database.

The system connects the public booking experience to the operational back office through server-side integration, while email services support passenger confirmation workflows.

The technology was selected and shaped around the needs of the operation. The important outcome is not the framework list — it is that the customer-facing experience, internal workflows, business rules, and data all operate as one system.
```

## Technology

```text
Next.js
React
TypeScript
Python
Odoo
PostgreSQL
JSON-RPC integrations
Email delivery
XLSX / image exports
PWA / offline-oriented driver workflow
```

## Scope of ownership

```text
Product / workflow design
Frontend engineering
Backend engineering
Data modeling
Business-rule implementation
Integrations
Operational exports
Responsive interfaces
Production implementation
Ongoing maintenance & development
```

Do not imply a large Cerato team.

---

# 22. The outcome

## Eyebrow

```text
The outcome
```

## H2

```text
The business moved from fragmented tools to one operational system.
```

## Copy

```text
The platform is now live in production and continues to support the company's day-to-day operation.

Passenger information, routes, departures, fleet resources, driver workflows, trip records, financial reconciliation, ticket control, and reporting no longer need to live across the same collection of spreadsheets, messages, calculations, and disconnected processes that existed before.

The most important change is operational leverage.

Work that previously required the owner and staff to manually connect information across different tools can now happen through structured workflows inside one system. Management has better visibility into what is happening, stronger control over operational and financial records, and a more reliable foundation for running the business.

For the owner in particular, the system reduces the amount of repetitive operational coordination that has to be carried personally, creating more room to focus on the company rather than continuously holding its processes together.
```

## Outcome proof points

```text
One connected operational system
Live in daily production
Public booking connected to back-office operations
Centralized passenger, route, fleet, driver, and trip data
Structured trip and financial reconciliation
Stronger visibility and operational control
Less dependence on manual coordination
Software maintained and extended as the operation evolves
```

Do not turn these into invented numeric KPI cards.

---

# 23. What this project represents

## Eyebrow

```text
What this project represents
```

## H2

```text
Custom software is most valuable when the business has outgrown generic tools.
```

## Copy

```text
This project is not valuable because transportation companies need another booking application.

It is valuable because the business had developed its own operational rules, exceptions, responsibilities, and ways of working — and the tools around it were no longer enough to manage that complexity cleanly.

Cerato Systems turned those workflows into software built around the operation.

That is the kind of problem we are built to solve.
```

---

# 24. Final CTA

## H2/H1

```text
Has your operation outgrown the tools holding it together?
```

## Body

```text
If important parts of your business still depend on spreadsheets, messages, repeated calculations, or processes that only a few people know how to run, let's talk about what a system built around the operation could look like.
```

## CTA

```text
Start a project
```

Link:

```text
/contact
```

---

# 25. Screenshot plan

Use exactly four primary unique screenshots.

## Screenshot 1 — Daily Operations / Dispatch Overview

Purpose:

```text
Show the scale and operational depth of the internal system.
```

Preferred placement: hero.

## Screenshot 2 — Passenger Booking

Purpose:

```text
Show that passenger-facing booking connects directly to internal operations.
```

## Screenshot 3 — Driver Trip / Financial Settlement

Purpose:

```text
Show that the system follows the trip through execution and reconciliation.
```

## Screenshot 4 — Full Application on a Phone

Purpose:

```text
Show that operational access is not tied to an office desktop.
```

This must be a normal operations/management view, not another driver screenshot.

---

# 26. Screenshot presentation

Use the established Cerato visual language.

Prefer:
- sharp application crops;
- subtle frames;
- restrained borders;
- enough scale to inspect interface detail;
- dark surrounding surfaces.

Avoid:
- photorealistic MacBook mockups;
- excessive 3D perspective;
- stock transportation imagery;
- fake screens.

---

# 27. Screenshot privacy checklist

Before publishing real screenshots, review:
- company name;
- passenger names;
- phone numbers;
- emails;
- license plates;
- driver names;
- identifiable route information;
- financial values;
- internal IDs;
- browser URLs;
- notifications.

Replace/redact only sensitive details while preserving screenshot clarity.

---

# 28. Testimonials

There is no approved client testimonial.

Use:

```ts
testimonial: undefined
```

Do not invent one.

---

# 29. Metrics

Approved factual quantitative context:

```text
~50 buses
~30 drivers
~6 months initial build
Live in production
```

Do not invent:
- percentages saved;
- hours saved;
- revenue improvement;
- error reduction;
- fraud reduction;
- booking counts;
- trip counts;
- user counts.

---

# 30. Tone

Use:
- calm confidence;
- concrete business language;
- operational specificity;
- short-to-medium paragraphs;
- technical detail only where it supports the business story.

Avoid:
- revolutionary;
- game-changing;
- cutting-edge;
- seamless;
- world-class;
- digital transformation;
- industry-leading;
- excessive agency jargon.

---

# 31. Mobile

Use the existing Cerato mobile design system.

Requirements:
- single-column reading flow;
- facts reduce to 2 columns, then 1 on narrow phones if needed;
- screenshots use full available width;
- no horizontal page overflow;
- screenshots may use mobile-specific crops;
- no removal of case-study content;
- long technical lists wrap naturally.

---

# 32. Motion

Use the existing Cerato motion specification.

For this page:
- subtle hero stagger;
- viewport screenshot reveals;
- small structured-list reveals;
- restrained hover on desktop screenshots;
- no ambient looping diagrams unless already reused from global components;
- case study should be calmer than homepage.

Real screenshots are the visual proof.

---

# 33. Implementation

Use the existing data-driven case-study architecture.

Do not hard-code the listing card separately from the detail page.

Preferred structure:

```text
caseStudies/
  transportation-operations-platform.ts
```

or the current project equivalent.

The same record should drive:
- homepage Featured Customer Work;
- `/customers`;
- `/customers/transportation-operations-platform`.

Optional fields must disappear cleanly when absent.

No empty customer-logo block.
No empty testimonial block.
No fake metric block.

---

# 34. Final Codex instruction

Implement this as the first flagship Cerato Systems customer story.

The page must feel like a **serious business transformation case study**, not a developer portfolio entry.

The story is:

```text
complex transportation operation
+
fragmented manual tools
+
heavy owner involvement

→

custom software designed around the real workflow

→

one operational platform connecting passengers, office staff, drivers, fleet, trips, money, and reporting

→

better control, visibility, and operational leverage
```

Do not invent hard performance metrics.

Do not invent a testimonial.

Do not reveal the client.

Do not over-focus on frameworks.

Use real anonymized screenshots as the primary visual proof once supplied.

The strongest impression should be:

> **Cerato Systems can understand a messy, specialized business operation and build the complete software system it actually needs.**
