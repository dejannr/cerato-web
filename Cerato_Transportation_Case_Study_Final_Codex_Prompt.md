# Cerato Systems — Transportation Operations Case Study
## Final Codex implementation specification

> **Status:** Production-ready case-study specification  
> **Client:** Anonymized passenger transportation company  
> **Public anonymized brand visible in supplied assets:** Northstar Transport  
> **Case-study route:** `/customers/transportation-operations-platform`

---

# 1. Objective

Build the flagship Cerato Systems customer case study for the passenger transportation platform.

This must feel like a **serious B2B business-transformation story**, not a developer portfolio page, feature catalogue, or generic agency case study.

The central story is:

```text
A complex passenger transportation operation
was being coordinated through spreadsheets,
messaging apps, manual calculations,
and knowledge held by the people running it.

↓

Cerato Systems understood the actual workflows,
rules, dependencies, exceptions, and roles.

↓

Those workflows were turned into one custom
operational platform connecting passenger booking,
office operations, dispatch, fleet, drivers,
trip execution, financial control, and reporting.

↓

The business gained a more structured,
connected, and controllable way to operate.
```

The page should demonstrate one broader Cerato capability:

> **Cerato Systems can understand a complicated real-world business operation and build the complete software system it actually needs.**

---

# 2. Global implementation rules

Use the existing Cerato Systems:

- global navigation;
- footer;
- typography;
- dark visual language;
- grid/background system;
- spacing system;
- motion system;
- responsive rules;
- case-study architecture;
- buttons and links;
- content widths;
- border and surface tokens.

Do **not** redesign the global website.

Do not introduce a new visual language specifically for this page.

The page should feel unmistakably part of the existing Cerato website.

---

# 3. Editorial philosophy

The case study should be designed as an editorial narrative.

The rhythm should generally be:

```text
context
↓
proof
↓
explanation
↓
structured information
↓
proof
↓
deeper explanation
↓
outcome
```

Avoid:

```text
text
screenshot
screenshot
screenshot
text
```

and avoid:

```text
card
card
card
card
card
```

Real screenshots are evidence.

They should appear only when they advance the story.

---

# 4. Available production assets

There are five finished visual assets.

Use the actual supplied asset paths/files from the project. Do not generate replacements.

---

## Asset A — Hero composite

File:

```text
version-2-flat.png
```

Content:

- public passenger booking;
- mobile schedule;
- internal passenger-control interface;
- transparent multi-device composition.

Purpose:

> Immediately communicate that this is a complete multi-interface operational system rather than one dashboard.

This is the correct hero visual.

**Use it.**

---

## Asset B — Screenshot 1

Content:

Desktop schedule / assignment interface.

Shows:

- departures;
- schedule;
- vehicle assignment;
- driver assignment;
- passenger/capacity context;
- assign/manage actions.

Purpose:

> Primary evidence for Daily Operations.

**Use it in Daily Operations.**

---

## Asset C — Screenshot 2

Content:

Public-facing passenger trip search and available departures.

Purpose:

> Primary evidence for Passenger Booking.

**Use it in Passenger Booking.**

---

## Asset D — Screenshot 3

Content:

Internal departure passenger-control view.

Shows:

- passenger records;
- boarding states;
- payment states;
- passenger actions;
- departure details.

Purpose:

> Evidence that a departure remains operationally manageable after booking.

Do **not** present this as:

- driver settlement;
- driver interface;
- financial reconciliation;
- dispatch assignment.

Use it later in the narrative under **Beyond the core trip / Departure control** so it is separated from Screenshot 1.

---

## Asset E — Screenshot 4

Content:

Full mobile schedule / assignment view.

Purpose:

> Evidence that important operational information remains usable away from a desktop.

**Use it in Flexible Access.**

---

# 5. Asset usage summary

Use all five supplied visual assets.

Final assignment:

```text
Hero
→ Asset A — version-2-flat.png

Passenger Booking
→ Asset C — Screenshot 2

Daily Operations
→ Asset B — Screenshot 1

Flexible Access
→ Asset E — Screenshot 4

Beyond the Core Trip / Departure Control
→ Asset D — Screenshot 3
```

No visual is required in Driver Operations.

No visual is required in Financial Control.

No visual is required in Engineering.

This is intentional.

Do not create fake screenshots to fill those sections.

---

# 6. Page metadata

## Slug

```text
transportation-operations-platform
```

## Route

```text
/customers/transportation-operations-platform
```

## SEO title

```text
Transportation Operations Platform — Cerato Systems
```

## Meta description

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

Use an appropriate crop/composition of the existing case-study imagery for the OG image.

Do not create fake customer branding.

---

# 7. Customer record

The case study must use the existing data-driven Customers architecture.

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

Do not display an empty customer-logo area.

Do not create a testimonial area.

---

# 8. Customers-page card

## Eyebrow

```text
Passenger transportation
```

## Title

```text
From spreadsheets and messaging apps to one operational platform
```

## Summary

```text
A custom system that brought passenger booking, dispatch, fleet operations, driver workflows, financial reconciliation, and reporting into one connected platform.
```

## Facts

Where appropriate:

```text
~50 buses
~30 drivers
Live in production
```

## CTA

```text
Read case study
```

## Cover

Use the strongest suitable composition from the existing assets.

Prefer Asset A if it reads clearly at card size.

If the multi-device composite becomes too small at card size, use a strong crop of Screenshot 1 instead.

---

# 9. Final page order

Use exactly this narrative order:

```text
01 Hero
02 The Challenge
03 The Goal
04 The Solution
05 Passenger Booking
06 Daily Operations
07 Driver Operations
08 Flexible Access
09 Financial Control
10 Beyond the Core Trip
11 Built for Complexity
12 Engineering
13 The Outcome
14 What This Project Represents
15 Final CTA
```

---

# 10. HERO

## Layout type

**Mixed / visual-led hero**

The hero must combine:

- editorial copy;
- project facts;
- Asset A.

---

## Back link

```text
Back to Customers
```

---

## Eyebrow

```text
Passenger transportation
```

---

## H1

```text
From spreadsheets and messaging apps to one operational platform.
```

This is the primary case-study headline.

Do not replace it with a generic project name.

---

## Summary

```text
A passenger transportation company was running critical parts of its operation through spreadsheets, messaging apps, manual calculations, and knowledge carried by the people managing the business.

Cerato Systems designed and built a custom platform that brought passenger booking, daily dispatch, fleet and driver operations, trip execution, financial reconciliation, ticket control, and reporting into one connected system.
```

---

## Facts

Display:

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

Desktop:

Prefer one horizontal facts row or balanced 4-column layout.

Mobile:

2 × 2 grid.

On very narrow devices, allow natural stacking if required.

---

## Hero visual

Use:

```text
version-2-flat.png
```

Do not replace it with a single screenshot.

The multi-device composition is valuable because it communicates breadth immediately.

---

## Hero visual role

It should communicate:

```text
customer-facing software
+
internal operations
+
mobile access
```

before the visitor reads the details.

---

## Desktop treatment

Make the visual large and important.

Recommended:

```text
width: approximately 80–100% of the wide visual container
```

Preserve the transparent background.

Do not place it inside a fake laptop/browser.

Do not add another device mockup around it.

Use the existing site grid/background system behind it if appropriate.

The visual may slightly overlap or escape the normal text column, but it must remain inside the site's safe content region.

---

## Mobile treatment

Keep the entire composition visible if it remains legible.

Do not make it so large that the hero requires multiple screens just to pass the visual.

Target roughly:

```text
visual height ≤ 45–55svh
```

where practical.

If necessary, reduce the visual scale rather than aggressively cropping important devices.

---

## Transition to Challenge

After the hero visual:

Use generous negative-space separation.

The next section should begin as an editorial reset.

Do not immediately place another screenshot.

---

# 11. THE CHALLENGE

## Layout type

**Text-led**

No product screenshot.

This gives the visitor time to understand the business before seeing more UI.

---

## Eyebrow

```text
The challenge
```

## H2

```text
The operation had outgrown the tools holding it together.
```

## Body

```text
Passenger transportation looks straightforward from the outside: publish a schedule, sell a seat, assign a bus, and complete the trip. Behind the scenes, the operation is a dense network of dependencies.

Passengers need to be connected to the correct departure and seat. Vehicles and drivers need to be available at the right time. Routes can span multiple stops and countries. Trips generate mileage, fuel records, cash, expenses, ticket records, manifests, and travel documents. Last-minute changes have to be reflected across the operation without losing track of what changed.

For this company, much of that work was being coordinated through Excel, Viber, WhatsApp, a calculator, and manual communication. Information lived in different places, calculations had to be repeated, and important operational knowledge often depended on the person handling the task.

At a fleet of roughly 50 buses and a network of around 30 drivers, that approach placed a significant amount of operational work on the company owner and office team. Running the business meant constantly checking, calculating, reconciling, calling, messaging, and making sure information in one place still matched information somewhere else.
```

---

## Editorial callout

```text
The problem was not a lack of software. It was that the operation had no single system built around the way the business actually worked.
```

This is Cerato editorial copy.

Do not style it as a customer quotation.

No quotation marks.

No customer attribution.

---

## Optional supporting structure

A restrained before-state strip may be used:

```text
Excel
Messaging
Manual calculations
Repeated data entry
Operational knowledge
```

leading conceptually toward:

```text
One transportation operation
```

Do not build a large elaborate diagram here.

The homepage already uses conceptual diagrams.

This page should prioritize the real application.

---

## Transition

Move naturally into the strategic Goal.

No major visual divider is necessary beyond the existing site section treatment.

---

# 12. THE GOAL

## Layout type

**Text-led**

No screenshot.

---

## Eyebrow

```text
The goal
```

## H2

```text
Build around the operation instead of forcing the operation into another tool.
```

## Body

```text
The goal was not to digitize one isolated task.

It was to understand how the company actually operated from the moment a passenger searched for a trip through to the moment a completed journey was reconciled — then build a system around those workflows.

That meant treating booking, dispatch, drivers, vehicles, seats, money, fuel, ticket stock, packages, and reporting as parts of the same operation rather than separate software problems.

The system also had to account for the details that generic software often ignores: return journeys, transfer departures, seat allotments, multiple vehicles on the same departure, resource conflicts, international mileage, driver settlement, physical ticket serials, and changes that happen while the operation is already moving.
```

---

## Callout

```text
One system. Different roles. One source of operational truth.
```

Use a restrained editorial treatment.

---

# 13. THE SOLUTION

## Layout type

**Mixed, but without a large screenshot**

Use copy + structured capability overview.

This section establishes the scope before individual workflow proof begins.

---

## Eyebrow

```text
The solution
```

## H2

```text
A custom operational platform connecting the business from booking to reconciliation.
```

## Body

```text
Cerato Systems built an end-to-end application with interfaces for passengers, office operations, management, and drivers.

Instead of replacing one spreadsheet with another isolated tool, the platform connects the major workflows of the transportation business through shared operational data.

A reservation created through the public booking experience becomes part of the same operational system used to assign seats, plan departures, allocate vehicles and drivers, manage trips, reconcile money, and generate reports.

The result is a system designed around the lifecycle of the work rather than around the boundaries of individual departments or generic software products.
```

---

## Capability overview

Display these as a compact structured matrix/list:

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

Do not make eleven oversized cards.

Prefer:

- two or three columns on desktop;
- restrained separators;
- compact typography;
- one column or two compact columns on mobile.

---

## Transition

The next section begins the proof sequence.

Give Passenger Booking enough spacing to feel like the start of a new chapter.

---

# 14. PASSENGER BOOKING

## Layout type

**Mixed / screenshot-led**

Use Asset C — Screenshot 2.

---

## Eyebrow

```text
Passenger booking
```

## H2

```text
Booking is connected directly to the operation behind it.
```

## Body

```text
Passengers can search available trips, select a journey, reserve seats, book return travel, and receive confirmation through the public-facing application.

Behind that interface, the booking is not treated as a disconnected ecommerce transaction. It becomes an operational record tied to the departure, route, passenger, seat capacity, and the rest of the transportation workflow.

The system supports route-stop sequencing, segment-level fares, one-way and return journeys, different passenger fare types, transfers, linked departures, and seat availability rules.

That connection between the customer-facing experience and the internal operation removes the need to recreate booking information manually in a separate back-office process.
```

---

## Visual

Use:

```text
Screenshot 2
```

---

## Narrative role

The screenshot proves:

> A real passenger-facing experience exists and feeds the same operational platform.

---

## Desktop layout

Use a **large contained screenshot below the text**, not a cramped 50/50 split.

Recommended visual width:

```text
~85–100% of the case-study visual container
```

Maintain the screenshot's natural desktop aspect ratio.

Do not crop away the search context or available departures.

---

## Visual treatment

Use:

- subtle dark outer frame;
- 1px restrained border;
- existing site grid/surface behind it if appropriate;
- modest internal breathing room;
- no fake browser chrome unless already part of the screenshot;
- no device mockup.

---

## Caption

Use:

```text
Passenger booking feeds directly into the same system used by the operations team.
```

Caption should be small and quiet.

---

## Transition

After the screenshot, restore text rhythm before the next proof visual.

Use meaningful vertical spacing before Daily Operations.

Do not make Screenshot 1 visually touch Screenshot 2.

---

# 15. DAILY OPERATIONS

## Layout type

**Mixed / primary operational proof**

Use Asset B — Screenshot 1.

This is one of the most important sections of the page.

---

## Eyebrow

```text
Daily operations
```

## H2

```text
The software reflects how transportation work actually happens.
```

## Body

```text
The operational side of the system brings routes, departures, reservations, passengers, vehicles, and drivers into one working environment.

For each day, the team can see what is running, assign vehicles and drivers, manage additional buses when demand requires them, and move passengers when operational changes make that necessary.

The system checks for overlapping vehicle and driver assignments rather than relying on someone to remember every conflict manually.

Seat assignment is also connected to the underlying departure, vehicle layout, capacity, and allotment rules. The objective is not simply to store data — it is to prevent operational mistakes before they become problems on the road.
```

---

## Supporting operational points

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

Use a compact list/grid.

---

## Visual

Use:

```text
Screenshot 1
```

---

## Narrative role

This is the strongest evidence that the system models the actual operation.

It should demonstrate:

```text
departure
+
vehicle
+
driver
+
capacity
+
assignment
```

as connected information.

---

## Desktop layout

Make Screenshot 1 one of the largest screenshots on the page.

Preferred:

```text
full visual-container width
```

or approximately:

```text
90–100%
```

Do not put Screenshot 3 beside it.

Do not put Screenshot 3 immediately after it.

---

## Crop

Preserve:

- departure context;
- assignment modal;
- vehicle selection;
- driver selection;
- passenger/capacity information;
- meaningful actions.

Avoid overly aggressive crop.

---

## Caption

Use:

```text
Daily dispatch connects departures, passenger demand, vehicles, and drivers in one operational workflow.
```

---

## Transition

After this visual, deliberately switch back to a **text-led section**.

Driver Operations follows.

This creates separation between Screenshot 1 and Screenshot 3.

---

# 16. DRIVER OPERATIONS

## Layout type

**Text-led**

No screenshot.

This is intentional.

Do not misuse Screenshot 3.

---

## Eyebrow

```text
Driver operations
```

## H2

```text
The trip continues inside the system after the bus leaves the station.
```

## Body

```text
Drivers have a dedicated workflow for the journeys assigned to them.

During and after a run, the system can capture the information needed to close the trip operationally: mileage, fuel, passenger counts, cash, expenses, and travel-order information.

This matters because the physical journey is only one part of completing a transportation service. The business also needs a reliable record of what happened during that journey and what needs to be reconciled afterward.

The driver interface keeps that process connected to the same departure and operational data already used by the office team.
```

---

## Secondary heading

```text
Built for work that happens on the road.
```

## Copy

```text
Driver workflows cannot assume a perfect office connection.

The driver application includes offline-oriented behavior that can preserve selected reads and queue writes locally when connectivity is unavailable, allowing important trip work to remain practical in real operating conditions.

Once connectivity is available again, queued work can continue back into the central system.
```

---

## Visual treatment

Because there is no screenshot, make this section feel intentionally editorial.

Possible treatment:

- narrower text column;
- quiet rule/divider;
- small structured record labels such as Mileage / Fuel / Cash / Expenses / Travel order;
- restrained system-style typography.

Do not create a fake UI.

---

## Transition

Flexible Access follows with a mobile visual, creating a strong change of rhythm.

---

# 17. FLEXIBLE ACCESS

## Layout type

**Mixed / asymmetric**

Use Asset E — Screenshot 4.

---

## Eyebrow

```text
Flexible access
```

## H2

```text
The operation stays accessible wherever the work happens.
```

## Body

```text
Transportation operations do not happen only behind a desk.

Schedules change, vehicles are on the road, staff move between locations, and important information may be needed when a computer is not nearby.

The application was built to remain practical across different screen sizes, allowing key operational information and workflows to be accessed from a phone as well as a desktop computer.

That means the system can stay useful in the office, at the station, next to a vehicle, or while someone responsible for the operation is away from their desk.
```

---

## Supporting points

```text
Operational information is not locked to one office computer.

Staff can stay connected to the same centralized system while moving between locations.

Important information can be checked without waiting to return to a desk.

The application adapts to the way transportation work actually happens.
```

---

## Visual

Use:

```text
Screenshot 4
```

---

## Narrative role

This is not:

> “Look, the website is responsive.”

It proves:

> **The software follows the operation beyond the office.**

---

## Desktop layout

Use an asymmetric split.

Recommended:

```text
copy: ~55–62%
mobile visual: ~28–35%
```

with generous gap.

The phone visual should not become a giant centered phone occupying an entire viewport.

Keep it proportionate to the text.

---

## Mobile layout

Do not render a huge tall phone mockup.

Place the mobile screenshot after the main copy.

Target:

```text
width: ~72–86% of available content width
max-height: ~55–65svh
```

Preserve aspect ratio.

Center it or slightly align with the content grid.

The visitor should be able to understand the point without scrolling through an enormous phone image.

---

## Caption

Use:

```text
The same operational system remains useful away from the desk.
```

---

## Transition

Return to a text-led Financial Control section.

---

# 18. FINANCIAL CONTROL

## Layout type

**Text-led**

No screenshot.

This section sells a major business outcome.

Do not weaken it by attaching an unrelated screenshot.

---

## Eyebrow

```text
Financial control
```

## H2

```text
Operational data and money are reconciled in the same workflow.
```

## Body

```text
One of the most important parts of the project was improving control around the money and records associated with each trip.

When cash, passenger counts, fuel, expenses, and ticket records are managed through separate conversations and calculations, discrepancies can be difficult to detect and even harder to trace back to the trip that created them.

The platform ties financial and operational information back to the journey itself. Driver settlement, passenger counts, collected cash, fuel entries, expenses, and related records can be reviewed as part of a structured trip-closing process.

This gives management a much clearer basis for checking what was expected against what was recorded, and reduces the opportunity for mistakes, omissions, or unexplained discrepancies to pass unnoticed.
```

---

## Strong editorial callout

```text
The system does not just record what happened. It gives the business a way to verify it.
```

This should receive visual emphasis.

Possible treatment:

- larger text;
- restrained border;
- more negative space;
- no quotation attribution.

---

## Do not claim

Do not say:

```text
prevents theft
eliminates fraud
guarantees accurate cash
reduced fraud by X%
```

The supported story is:

```text
stronger control
better traceability
structured reconciliation
fewer opportunities for discrepancies to remain unnoticed
```

---

# 19. BEYOND THE CORE TRIP

## Layout type

**Mixed**

This section should use Asset D — Screenshot 3.

This placement solves the Screenshot 1 / Screenshot 3 conflict.

They now appear in different narrative chapters with multiple text-led sections between them.

---

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

---

# 20. Departure control subsection

Before the supporting feature list, introduce Screenshot 3 with a specific subsection.

## H3

```text
A departure remains manageable after the booking is made.
```

## Copy

```text
The operations team can work directly with the passengers attached to a departure, review boarding and payment states, inspect passenger records, and take the actions required as the journey approaches.

That keeps the operational passenger list connected to the same departure data that originated earlier in the booking process.
```

---

## Visual

Use:

```text
Screenshot 3
```

---

## Narrative role

Screenshot 3 proves:

```text
booking
does not end at reservation creation

↓

passenger records continue
into the operational departure workflow
```

This creates a useful callback to Screenshot 2.

---

## Desktop layout

Screenshot 3 is currently wide.

Use it as a contained wide visual.

Recommended:

```text
~82–95% of visual-container width
```

Do not stretch it to an excessively tall display.

If necessary, crop a small amount vertically while preserving:

- departure details;
- passenger table/list;
- boarding/payment states;
- actions.

---

## Caption

Use:

```text
Passenger records remain connected to the departure, including boarding, payment status, and operational actions.
```

---

# 21. Supporting operational control

After Screenshot 3, continue the same section with a compact structured grid.

Use these groups.

---

## Physical ticket stock

```text
Physical ticket books can be managed through depot batches and serial-number ranges, with validation around allocation and stock.
```

---

## Packages

```text
Package transportation can be recorded alongside the passenger operation instead of being tracked separately through messages or paper.
```

---

## Manifests and operational documents

```text
Passenger manifests and other operational outputs can be generated directly from system data, including spreadsheet and image-based exports where required by the workflow.
```

---

## Mileage and travel orders

```text
The system can produce mileage and travel-order reporting from the data captured through the actual trip workflow.
```

---

## Domestic / international mileage

```text
Routes can distinguish Serbian and non-Serbian mileage, supporting operational records for journeys that cross national borders.
```

---

## Layout

Desktop:

Use a restrained 2-column or 3-column editorial grid.

Do not use oversized marketing cards.

Mobile:

Single-column stack.

---

# 22. BUILT FOR COMPLEXITY

## Layout type

**Text + structured technical/business-rule list**

No product screenshot required.

---

## Eyebrow

```text
Built for complexity
```

## H2

```text
Simple screens sit on top of complicated business rules.
```

## Body

```text
Much of the engineering work in this project is invisible in a screenshot.

Transportation operations contain dependencies that have to be modeled correctly for the interface to remain simple: which route segment a passenger is travelling, which seats are actually available, whether a vehicle or driver is already committed elsewhere, how a return journey relates to the outbound booking, and how one departure changes when more than one bus is required.

The platform turns those rules into validations and workflows so the people running the operation do not have to reconstruct the logic manually each time.
```

---

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

---

## Closing statement

```text
The complexity stays in the system so the workflow can stay understandable for the person using it.
```

Give this statement moderate visual emphasis.

---

# 23. ENGINEERING

## Layout type

**Structured text-led**

No screenshot.

---

## Eyebrow

```text
Engineering
```

## H2

```text
Designed and built end to end.
```

## Body

```text
The project was built as a complete software system rather than a collection of disconnected interfaces.

Cerato Systems was responsible for the application architecture, frontend, backend business logic, data model, integrations, operational workflows, exports, and ongoing development.

The public-facing application is built with Next.js, React, and TypeScript. The operational backend is implemented as a custom Odoo module in Python with PostgreSQL as the database.

The system connects the public booking experience to the operational back office through server-side integration, while email services support passenger confirmation workflows.

The technology was selected and shaped around the needs of the operation. The important outcome is not the framework list — it is that the customer-facing experience, internal workflows, business rules, and data all operate as one system.
```

---

## Technology

Display compactly:

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

Do not use giant technology logos.

Text labels are preferred.

---

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

Do not imply a large team.

Do not make the section primarily about technologies.

---

# 24. THE OUTCOME

## Layout type

**Editorial + structured proof**

No screenshot needed.

At this point the visitor has already seen the product.

The focus should return to the business.

---

## Eyebrow

```text
The outcome
```

## H2

```text
The business moved from fragmented tools to one operational system.
```

## Body

```text
The platform is now live in production and continues to support the company's day-to-day operation.

Passenger information, routes, departures, fleet resources, driver workflows, trip records, financial reconciliation, ticket control, and reporting no longer need to live across the same collection of spreadsheets, messages, calculations, and disconnected processes that existed before.

The most important change is operational leverage.

Work that previously required the owner and staff to manually connect information across different tools can now happen through structured workflows inside one system. Management has better visibility into what is happening, stronger control over operational and financial records, and a more reliable foundation for running the business.

For the owner in particular, the system reduces the amount of repetitive operational coordination that has to be carried personally, creating more room to focus on the company rather than continuously holding its processes together.
```

---

## Outcome proof

Display these as restrained rows or compact blocks:

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

Do not use fake KPI styling.

Do not attach invented numbers.

---

# 25. WHAT THIS PROJECT REPRESENTS

## Layout type

**Strong editorial closing**

No screenshot.

---

## Eyebrow

```text
What this project represents
```

## H2

```text
Custom software is most valuable when the business has outgrown generic tools.
```

## Body

```text
This project is not valuable because transportation companies need another booking application.

It is valuable because the business had developed its own operational rules, exceptions, responsibilities, and ways of working — and the tools around it were no longer enough to manage that complexity cleanly.

Cerato Systems turned those workflows into software built around the operation.

That is the kind of problem we are built to solve.
```

Give the final sentence additional emphasis:

```text
That is the kind of problem we are built to solve.
```

---

# 26. FINAL CTA

Use the site's existing final CTA treatment.

## Heading

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

Route:

```text
/contact
```

---

# 27. Final visual map

The completed page should visually flow like this:

```text
────────────────────────────────────

HERO
Editorial headline + facts
+
Asset A
Large multi-device composite

────────────────────────────────────

THE CHALLENGE
Text-led
No screenshot

────────────────────────────────────

THE GOAL
Text-led
No screenshot

────────────────────────────────────

THE SOLUTION
Text + compact capability structure
No screenshot

────────────────────────────────────

PASSENGER BOOKING
Text
+
Asset C / Screenshot 2
Large desktop product proof

────────────────────────────────────

DAILY OPERATIONS
Text + operational points
+
Asset B / Screenshot 1
Large operational proof

────────────────────────────────────

DRIVER OPERATIONS
Text-led
No screenshot

────────────────────────────────────

FLEXIBLE ACCESS
Asymmetric text + mobile visual
+
Asset E / Screenshot 4

────────────────────────────────────

FINANCIAL CONTROL
Strong editorial text
No screenshot

────────────────────────────────────

BEYOND THE CORE TRIP
Departure-control explanation
+
Asset D / Screenshot 3

Then:
compact supporting operational grid

────────────────────────────────────

BUILT FOR COMPLEXITY
Text + business-rule structure
No screenshot

────────────────────────────────────

ENGINEERING
Text + technology / ownership structure
No screenshot

────────────────────────────────────

THE OUTCOME
Business outcome
+
qualitative proof rows

────────────────────────────────────

WHAT THIS PROJECT REPRESENTS
Editorial closing

────────────────────────────────────

FINAL CTA

────────────────────────────────────
```

---

# 28. Why Screenshot 3 is placed later

Do not change this decision.

Screenshot 1 and Screenshot 3 are both internal operational interfaces.

If placed together, they:

- visually compete;
- make the middle of the page screenshot-heavy;
- appear repetitive;
- weaken the narrative distinction.

Therefore:

```text
Screenshot 1
=
resource / schedule / assignment control

Screenshot 3
=
passenger / departure control
```

Screenshot 3 appears only after:

```text
Driver Operations
Flexible Access
Financial Control
```

This creates enough narrative and visual distance.

It also lets Screenshot 3 callback to the earlier Passenger Booking screenshot:

```text
Passenger books
↓
reservation enters operation
↓
departure is prepared
↓
passenger remains manageable
through the departure workflow
```

That is a stronger story than presenting both screenshots as generic operations screens.

---

# 29. Screenshot hierarchy

Not every screenshot should have equal visual importance.

Use this hierarchy:

```text
1. Hero composite
   strongest opening composition

2. Screenshot 1
   strongest internal operational proof

3. Screenshot 2
   important customer-facing proof

4. Screenshot 3
   supporting operational depth

5. Screenshot 4
   focused mobile-access proof
```

Do not give all screenshots identical dimensions and presentation.

Editorial hierarchy is desirable.

---

# 30. Desktop spacing rhythm

Do not use one identical section padding everywhere.

Create editorial rhythm while staying inside the existing spacing system.

Conceptually:

```text
major chapter separation:
large

heading → body:
moderate

body → screenshot:
moderate-large

screenshot → caption:
small

screenshot → next major chapter:
large

text-only related sections:
slightly tighter
```

The page should breathe.

Avoid huge empty voids merely to imitate Linear.

---

# 31. Mobile layout

The mobile page must feel intentionally redesigned for the viewport, not simply collapsed desktop CSS.

---

## Global

Use:

```text
single content column
```

No page-level horizontal overflow.

Keep existing Cerato mobile side padding.

---

## Hero

Order:

```text
Back
Eyebrow
H1
Summary
Facts
Hero composite
```

Facts:

```text
2 × 2
```

Hero composite:

Keep visually compact enough that it does not dominate multiple screens.

---

## Text sections

Use comfortable readable width.

Do not center long copy.

Left-align editorial text.

---

## Desktop screenshots

For Screenshots 1, 2, and 3:

Do not scale the entire desktop UI so small that text becomes meaningless.

Use one of these strategies based on the actual asset:

### Strategy A

Show the full screenshot when the UI remains legible.

### Strategy B

Use a mobile-specific crop emphasizing the relevant portion while preserving the original asset.

Do not change screenshot content.

Do not fabricate missing UI.

Do not create horizontal page overflow.

---

## Screenshot 4

This is already mobile-oriented.

Do not make it full viewport width if that creates excessive height.

Use approximately:

```text
72–86% width
```

and constrain its visual height.

---

## Structured lists

Desktop multi-column structures should become:

```text
single-column
```

or compact:

```text
2-column
```

only where items remain readable.

---

## Outcome rows

Stack cleanly.

Do not turn them into a horizontal carousel.

---

# 32. Motion

Use the site's existing motion system.

The case study should be **calmer than the homepage**.

---

## Hero

Entrance sequence:

```text
Back to Customers
↓
Eyebrow
↓
Headline
↓
Summary
↓
Facts
↓
Hero composite
```

Use the established subtle timing.

---

## Sections

Viewport reveal:

```text
opacity 0 → 1
translateY 8–12px → 0
```

Once only.

---

## Screenshots

Reveal:

```text
opacity 0 → 1
translateY 10px → 0
duration ~420–500ms
```

Desktop pointer hover:

```text
scale 1 → maximum 1.008
```

Only if consistent with the current global case-study visual component.

---

## Do not add

- screenshot parallax;
- floating screenshots;
- constant device movement;
- animated fake cursor;
- autoplay scrolling inside screenshots;
- giant scale entrances;
- 3D rotation;
- glowing screenshot borders.

The application itself is the proof.

---

# 33. Anonymity and screenshot rules

The anonymized `Northstar Transport` branding visible in the supplied assets is permitted.

Use the supplied visuals as approved.

Do not introduce the real client name elsewhere.

Public case-study text should refer to:

```text
a passenger transportation company
```

or:

```text
the company
```

Do not create a fake testimonial from Northstar Transport.

---

# 34. Claims

Approved factual scale/context:

```text
~50 buses
~30 drivers
~6 months initial build
live in production
```

Approved qualitative outcomes:

```text
centralized operational information
less manual coordination
better visibility
stronger operational control
structured reconciliation
connected booking and operations
```

Do not invent:

```text
X% time saved
X% fewer errors
X% less fraud
€X saved
X bookings
X monthly passengers
X trips
X users
X revenue growth
```

---

# 35. Financial-control language

The original business problem included concerns around money and the ability to detect discrepancies.

Public language should frame this professionally.

Use:

```text
control
traceability
reconciliation
verification
discrepancies
structured records
```

Avoid:

```text
drivers stealing
employee theft
fraud prevention guarantee
```

The page should remain credible and professional.

---

# 36. Technology positioning

Technology is supporting evidence.

It is not the main story.

Do not make:

```text
Next.js
React
Python
Odoo
PostgreSQL
```

more visually important than:

```text
booking
operations
dispatch
drivers
financial control
business outcome
```

The prospect should first think:

> “They understand operations.”

Then:

> “They can engineer the complete system.”

Not the reverse.

---

# 37. Accessibility

All screenshots need meaningful alt text.

Use:

### Hero

```text
Composite of passenger booking, internal transportation operations, and mobile scheduling interfaces.
```

### Screenshot 1

```text
Transportation schedule and assignment interface showing departures, vehicles, drivers, passenger capacity, and assignment controls.
```

### Screenshot 2

```text
Passenger trip-search interface showing available transportation departures.
```

### Screenshot 3

```text
Internal departure passenger-control interface showing passenger records, boarding and payment states, and operational actions.
```

### Screenshot 4

```text
Transportation schedule and assignment interface displayed on a mobile phone.
```

---

# 38. Performance

Use the actual image dimensions.

Do not load oversized assets unnecessarily.

For each screenshot:

- preserve aspect ratio;
- use responsive image sizing;
- reserve layout space;
- lazy-load below-fold visuals;
- hero visual may load eagerly;
- use optimized formats supported by the existing project;
- do not degrade screenshot text with excessive compression.

Screenshot readability matters more than tiny file-size savings.

---

# 39. Do not add

Do not add:

- stock bus photography;
- generic road photography;
- fake maps;
- fake dashboards;
- fake metrics;
- fake customer quotes;
- a fabricated company logo;
- decorative device mockups;
- extra screenshots merely for density;
- project timeline graphics;
- team-size claims;
- pricing;
- a “results” chart without real data;
- generic agency process diagrams.

The real software is enough.

---

# 40. Final implementation checklist

Before considering the case study finished, verify:

## Story

- [ ] Hero communicates transformation.
- [ ] Challenge explains the actual operational problem.
- [ ] Goal explains why custom software was appropriate.
- [ ] Solution establishes complete-system scope.
- [ ] Booking demonstrates customer-facing integration.
- [ ] Daily Operations demonstrates internal operational depth.
- [ ] Driver section remains truthful without fake imagery.
- [ ] Flexible Access demonstrates mobility.
- [ ] Financial Control communicates business value.
- [ ] Screenshot 3 is correctly framed as departure passenger control.
- [ ] Complexity demonstrates engineering depth.
- [ ] Engineering remains secondary to business value.
- [ ] Outcome returns to business impact.
- [ ] Closing connects project back to Cerato positioning.

## Visuals

- [ ] Asset A used once in Hero.
- [ ] Screenshot 2 used in Passenger Booking.
- [ ] Screenshot 1 used in Daily Operations.
- [ ] Screenshot 4 used in Flexible Access.
- [ ] Screenshot 3 used in Beyond the Core Trip.
- [ ] Screenshot 1 and Screenshot 3 are not adjacent.
- [ ] No screenshot is falsely labeled.
- [ ] No duplicate screenshot is used.
- [ ] No stock imagery is used.

## Mobile

- [ ] No horizontal page overflow.
- [ ] Hero composite remains manageable.
- [ ] Desktop screenshots remain understandable.
- [ ] Mobile screenshot does not create an excessively tall section.
- [ ] Facts use a compact responsive grid.
- [ ] All text remains left-aligned and readable.
- [ ] CTA remains clear.

## Claims

- [ ] No invented metrics.
- [ ] No invented testimonial.
- [ ] No real client identity.
- [ ] No unsupported performance claim.
- [ ] Financial-control language remains professional.

## Technical

- [ ] Case study uses existing reusable content architecture.
- [ ] Customers page and detail page use the same data source.
- [ ] Metadata implemented.
- [ ] Image alt text implemented.
- [ ] Images optimized.
- [ ] Existing reduced-motion behavior preserved.
- [ ] Existing design tokens used.

---

# 41. Final instruction to Codex

Implement this specification directly inside the existing Cerato Systems website.

Do not treat it as inspiration.

Treat the specified:

- narrative;
- section order;
- copy;
- screenshot assignment;
- screenshot hierarchy;
- layout intent;
- captions;
- responsive behavior;
- anonymity rules;
- motion behavior;
- claim restrictions;

as the source of truth for this case study.

Use the existing Cerato design system to determine exact typography, colors, border tokens, radii, grid appearance, and reusable component styling.

Do not redesign global components.

Do not invent missing content.

Do not create visual filler.

The final page should feel like an editorial customer story from a serious B2B software company.

The visual experience should communicate:

```text
This was a complicated real business.

Cerato understood how it operated.

Cerato built software around those operations.

The software is real, broad, and live.

The result is a business that can operate through
one connected system instead of fragmented tools.
```

Above all, optimize the page for the reaction:

> **“My business also has complicated workflows held together by spreadsheets, messages, and manual work. Cerato could probably build the system we actually need.”**
