# Cerato Systems — Illustration System for Marketing Website

## 1. Purpose

This document defines how to create conceptual illustrations for the Cerato Systems marketing website.

Read this together with the supplied Linear-inspired design-language document.

The design-language document remains the source of truth for:
- colors;
- typography;
- spacing;
- borders;
- surfaces;
- radius;
- motion;
- responsive behavior;
- overall visual character.

This document only defines how those same principles should be applied to illustrations.

Cerato Systems is NOT a SaaS product.

Therefore:

DO NOT invent fake Cerato dashboards or fake product screenshots.

Instead, create abstract but sophisticated visual representations of:
- business operations;
- workflows;
- connected systems;
- automation;
- business rules;
- integrations;
- information flow;
- operational complexity.

The illustrations must feel like they belong to the same visual system
as the rest of the website.

They should NOT look like separate illustrations pasted onto the page.


# 2. Core illustration philosophy

The illustrations should feel:

- technical;
- structural;
- precise;
- understated;
- intelligent;
- slightly abstract;
- information-dense;
- calm;
- engineered rather than "drawn."

Think:

"visual representation of a software system"

rather than:

"marketing illustration."


## The key rule

STRUCTURE IS THE ILLUSTRATION.

Do not decorate empty space.

The visual interest should come from:
- relationships;
- hierarchy;
- alignment;
- grouping;
- movement;
- states;
- information flow.


# 3. Never use

Do NOT create:

- cartoon illustrations;
- people illustrations;
- 3D characters;
- isometric offices;
- floating 3D cubes;
- giant gradient blobs;
- colorful SaaS illustrations;
- generic abstract waves;
- glowing neon networks;
- excessive glassmorphism;
- stock illustrations;
- fake analytics dashboards;
- fake charts with invented business numbers;
- random graphs;
- giant icons floating in space;
- thick arrows between boxes;
- PowerPoint-style flowcharts;
- Mermaid-style diagrams;
- UML diagrams;
- generic corporate process diagrams;
- rainbow-colored nodes;
- excessive icon usage.

The illustrations should never look like documentation diagrams.


# 4. Illustration primitives

Build illustrations primarily using reusable frontend primitives.

Create components similar conceptually to:

- SystemNode
- SystemPanel
- DataRow
- WorkflowStep
- Connection
- ConnectorPort
- EventPulse
- StatusIndicator
- DataPacket
- IntegrationNode
- RuleNode
- UserNode
- GroupContainer
- FlowPath
- ActivityRow

Exact component names are implementation decisions.

Use HTML/CSS/SVG.

Avoid canvas unless there is a strong technical reason.


# 5. Visual language

Illustrations should use the SAME tokens as the website.

Do not create a separate illustration palette.


## Background

Main visual canvas:

#08090a

Illustrations should usually merge naturally into the page background.


## Surfaces

Use:

#0f1011
#151617
#1c1c1f

Create depth primarily through subtle changes between these surfaces.


## Borders

Default:

1px solid #23252a

Secondary/internal separators may use:

rgba(255,255,255,.05)

Connections should generally be quieter than container borders.


## Text

Primary:
#f7f8f8

Secondary:
#8a8f98

Tertiary:
#62666d


## Accent

#5e6ad2

Accent must be scarce.

Do NOT make all nodes violet.

Accent should indicate:
- active flow;
- selected state;
- important relationship;
- current step;
- meaningful event.

Most of every illustration should remain neutral.


# 6. Geometry

Use the same restrained geometry as the website.

Typical nodes:

border-radius: 6–8px

Larger system containers:

border-radius: 8–12px

Do not use giant rounded cards.

Do not turn every node into a pill.

Most nodes should resemble compact pieces of software UI.


# 7. Nodes should feel like software

Avoid creating boxes that contain only:

[ Finance ]

Instead, give important nodes subtle internal structure.

Example:

┌──────────────────────┐
│ Finance              │
│                      │
│ Revenue       ●      │
│ Expenses      ●      │
│ Reconciliation       │
└──────────────────────┘

Or:

┌──────────────────────┐
│ Operations           │
├──────────────────────┤
│ 12 active workflows  │
│ 3 pending actions    │
│ All systems synced   │
└──────────────────────┘

IMPORTANT:

Do not use fake business metrics like "$2.4M revenue."

Use qualitative/system information or clearly illustrative counts only
when they are obviously conceptual.

Prefer labels and states over invented financial numbers.


# 8. Connections

Connections are extremely important.

Do NOT use thick arrows.

Prefer:

- 1px paths;
- subtle curves;
- orthogonal connector lines;
- low-contrast lines;
- small connection ports;
- occasional animated pulses.

Default connection:

rgba(255,255,255,.08)

Active connection:

rgba(94,106,210,.45)


## Data movement

When showing information moving through a system, animate a very small
dot or short highlight along the connection.

Example:

Customer ───────────────●────> Operation

The animation should be subtle.

Duration:
approximately 2–4 seconds for ambient loops.

Do not make every line animate simultaneously.

At any moment, only a few relationships should appear active.


# 9. Motion philosophy

Motion should explain the system.

Never animate just because an element exists.

Good motion:

- information enters;
- a rule evaluates;
- a workflow advances;
- systems synchronize;
- fragmented items converge;
- a connection activates;
- a status changes;
- a document is produced.

Bad motion:

- bouncing cards;
- floating continuously;
- rotating icons;
- random pulsing;
- parallax everywhere;
- constant glowing;
- springy movement.


## Timing

UI reactions:
180–250ms

Illustration state transitions:
250–500ms

Ambient system-flow animation:
2–5 seconds

Use the easing tokens from the design-language document.


# 10. HERO ILLUSTRATION

This is the most important illustration.

It must NOT look like a flowchart.

## Concept

"One system, built around the operation."

The visual represents a business whose different operational areas are
connected through custom software.


## Composition

Create one central system area.

Possible central label:

OPERATIONS

Around it place several connected operational domains:

Customers
Scheduling
Employees
Finance
Reporting

Potential secondary elements:

Orders
Assignments
Documents
Notifications
Integrations


## IMPORTANT

Do not arrange everything as a perfect radial mind map.

Use an asymmetric composition.

For example:

             Customers
                 │
       ┌─────────┴──────────┐
       │                    │
 Scheduling           OPERATIONS ───── Reporting
       │                    │
       │                    │
 Assignments            Finance
                            │
                       Documents

But visually implement this using overlapping system surfaces,
small panels, connection paths and UI-like elements.

NOT literal text boxes connected by arrows.


## Central operations component

Make the central component richer than surrounding nodes.

It can contain several small workflow rows such as:

Reservation received
Vehicle assigned
Approval completed
Report generated

These are conceptual examples.

Use tiny status indicators.

Example:

● Reservation received
● Vehicle assigned
○ Approval pending
✓ Report generated


## Surrounding modules

Surrounding modules should have different internal structures.

Customers might contain:
- customer records;
- request indicator;
- activity row.

Scheduling might resemble:
- date rows;
- assignment blocks.

Finance might resemble:
- reconciliation rows;
- payment state;
- expense state.

Reporting might resemble:
- report rows;
- export indicators.

DO NOT create actual fake product screens.

They should remain abstract UI fragments.


## Hero animation

Create a slow sequence.

Example:

1. Customer event appears.
2. Connection to Operations activates.
3. Operations adds/updates a workflow row.
4. Scheduling connection activates.
5. Assignment changes state.
6. Finance receives an event.
7. Reporting updates.

Then pause.

Repeat subtly.

The visitor should subconsciously understand:

"Everything is connected."


# 11. PROBLEM ILLUSTRATION

Section:

"Your business shouldn't run on workarounds."


## Initial state

Show fragmented pieces scattered across the illustration.

Examples:

Spreadsheet
Messages
Email
Manual entry
Documents
Calculations

Represent these as small neutral software-like fragments.

NOT logos.

Example:

┌──────────────┐
│ Spreadsheet  │
│ Row 124      │
│ Row 125      │
└──────────────┘

        ┌─────────────┐
        │ Messages    │
        │ 4 unread    │
        └─────────────┘

┌──────────────┐
│ Manual entry │
│ Pending      │
└──────────────┘


## Fragmented state

Connections should be:
- incomplete;
- indirect;
- visually messy but controlled;
- mostly tertiary gray.

Some information may visually repeat across fragments.

For example:

CUSTOMER #142

appears in multiple places.

This subtly communicates duplicate information.


## Transformation

Animate or transition the fragments toward one structured operational
system.

The final state should be:

                     ┌─────────────────────┐
                     │ Connected operation │
                     │                     │
                     │ Customer            │
                     │ Assignment          │
                     │ Payment             │
                     │ Status              │
                     └─────────────────────┘

The visual message:

fragmentation → structure.


# 12. WHAT WE BUILD — ILLUSTRATION SET

Each capability needs its OWN visual grammar.

Do not create four identical cards with different icons.


## A. Operational platforms

Show several roles/data sources converging into one operational system.

Example concepts:

Customer
Employee
Manager
Resources

feeding:

Operational system

which produces:

Assignments
Records
Reporting

Use layered panels and relationships.


## B. Business process automation

Use a horizontal or vertical workflow.

Example:

Request
↓
Validation
↓
Business rule
↓
Approval
↓
Action
↓
Record

Each step should resemble a compact system event.

Animate one item progressing through the pipeline.

Example states:

Received
Checking
Approved
Completed


## C. Customer and employee applications

Show multiple interface contexts connected to the same underlying
system.

For example:

Customer interface
Employee interface
Field interface

            ↓

Shared operation

The interfaces should be abstract shells, not fake full applications.

One can resemble desktop.
One can resemble mobile.
One can resemble a compact internal panel.

The message:

different people → same business system.


## D. Integrations

Create a central system with several external endpoints.

Example:

CRM
Email
Payments
ERP
External API

connected to:

Custom operational system

Use subtle connector activity.

Some connections may show:

SYNCED
EVENT
API
IMPORT

Use monospace sparingly for these technical labels.


# 13. COMPLEXITY ILLUSTRATION

Section:

"Simple to use. Built for complexity underneath."

This should visually contrast:

SIMPLE SURFACE

with

COMPLEX SYSTEM.


## Top/front layer

Create one simple, clean operational action.

Example:

┌──────────────────────────────┐
│ Assign vehicle              │
│                              │
│ Vehicle     [ Select ]       │
│ Driver      [ Select ]       │
│                              │
│            Assign            │
└──────────────────────────────┘

This is conceptual UI, not a real product.


## Underneath

Reveal the business logic that one action may trigger.

Examples:

Capacity
Availability
Permissions
Scheduling
Conflict detection
Business rules
Notifications
Financial rules
Reporting

Represent these underneath or behind the simple interface as a system
network.

Conceptually:

             SIMPLE ACTION
                  │
          ┌───────┴────────┐
          │                │
     Validation       Permissions
          │                │
     Scheduling        Capacity
          │                │
     Conflicts         Business rules
          └───────┬────────┘
                  │
               Result


## Visual hierarchy

The user-facing action should be brighter.

The underlying complexity should be darker and more technical.

This creates the message:

"The user sees simplicity. The system handles complexity."


# 14. HOW WE WORK

Do NOT create another network diagram.

Use a restrained progression.

Understand → Design → Build → Evolve

Each stage should have a tiny system-oriented visual.


## Understand

Show fragmented inputs being inspected:

People
Process
Data
Rules
Exceptions


## Design

Show those inputs becoming a structured system model.


## Build

Show system pieces becoming connected/active.


## Evolve

Show one new requirement being added without destroying the existing
structure.

This section should feel calmer than the hero.


# 15. ENGINEERING ILLUSTRATION

Section:

"Modern software, chosen for the problem."


## Concept

Show architecture as layers rather than logos.

Suggested layers:

Interfaces

↓

Application

↓

Business workflows

↓

Data + integrations


## Example

┌─────────────────────────────────────────┐
│ Customer  Employee  Operations          │
│ interfaces                              │
└─────────────────────────────────────────┘

                    ↓

┌─────────────────────────────────────────┐
│ Application layer                       │
└─────────────────────────────────────────┘

                    ↓

┌─────────────────────────────────────────┐
│ Workflows · Rules · Automation           │
└─────────────────────────────────────────┘

                    ↓

┌─────────────────────────────────────────┐
│ Data · APIs · Integrations               │
└─────────────────────────────────────────┘


Add technology labels subtly near relevant layers:

TypeScript
React
Next.js
Python
PostgreSQL

Technology names should NOT dominate the visual.


# 16. Illustration density

Desktop illustrations can be relatively information-dense.

They should reward looking closely.

Use:
- small labels;
- metadata;
- subtle status indicators;
- separators;
- tiny controls;
- small relationship details.

But the MAIN IDEA must remain understandable without reading the small
text.


# 17. Responsive behavior

Do NOT simply scale the entire desktop SVG down on mobile.

That will make it unreadable.


## Desktop

Show the complete system.


## Tablet

Reduce secondary nodes.

Preserve the main relationship.


## Mobile

Create a simplified composition.

Example hero desktop:

Customers
Scheduling
Employees
Operations
Finance
Reporting
Integrations

Mobile:

Customers
    ↓
Operations
    ↓
Finance / Reporting

The conceptual message must survive even when detail is removed.


# 18. Illustration boundaries

Illustrations should often fade naturally into the page.

Do not necessarily wrap every illustration in a visible card.

Possible treatment:

- no outer border;
- subtle internal grid;
- surfaces emerging from page background;
- partial clipping;
- soft mask at edges;
- low-opacity structural lines.

Avoid making every illustration look like:

[ BIG ROUNDED RECTANGLE WITH GRAPHIC INSIDE ]


# 19. Background grids

A very subtle structural grid may be used where appropriate.

Example:

linear-gradient(
  rgba(255,255,255,.025) 1px,
  transparent 1px
)

Do not make the grid obvious.

Grid spacing should align with the site's spacing system.

The grid exists to reinforce precision, not create decoration.


# 20. Labels and microcopy

Illustration microcopy should sound like software/system language.

Good:

Assignment created
Validation passed
Pending approval
Synced
Updated
3 dependencies
Rule applied
Export ready
Connected
Processing

Bad:

Grow faster!
Amazing!
Boost productivity
Success!
AI magic


# 21. Icons

If icons are necessary:

- use one consistent outline icon family;
- approximately 1.5px stroke;
- 16–20px;
- neutral color;
- accent only for active state.

Do not put every icon inside a colorful square.

Many nodes should work WITHOUT icons.


# 22. Animation sequencing

Do not animate everything at once.

Use narrative sequencing.

For example:

0.0s  idle
0.5s  new event appears
1.0s  connection activates
1.4s  workflow updates
1.8s  rule evaluates
2.2s  destination updates
3.0s  system settles
4.5s  repeat

This should feel like observing a functioning system.

Not watching an animated banner.


# 23. Hover interaction

Illustrations can respond subtly to pointer interaction.

Example:

Hover "Finance":

- Finance node becomes slightly brighter.
- Direct connections become more visible.
- Unrelated elements become slightly quieter.
- Small metadata may appear.

Do not:
- dramatically enlarge nodes;
- rotate elements;
- move the whole composition;
- use playful physics.


# 24. Reduced motion

Respect:

prefers-reduced-motion: reduce

When enabled:

- stop ambient data movement;
- remove automatic sequencing;
- show the final meaningful state;
- keep hover/focus feedback where appropriate.


# 25. Illustration quality test

Before accepting an illustration, ask:

1. Does it communicate a real concept?
2. Could the visitor understand the main idea without reading all labels?
3. Does it feel like software/system design rather than a flowchart?
4. Does it use the website's existing design tokens?
5. Is the accent color scarce?
6. Is most of the illustration neutral?
7. Are connections thin and restrained?
8. Is there enough internal detail to feel intentional?
9. Does the composition have hierarchy?
10. Is motion explaining something?
11. Does it avoid fake product claims?
12. Does it work without animation?
13. Is mobile intentionally simplified?
14. Does it feel like Cerato could have designed it?
15. Would it still look sophisticated if all decorative effects were
    removed?

If the answer to several of these is "no", redesign it.


# 26. Most important anti-pattern

DO NOT produce this:

[Customers] → [Operations] → [Finance] → [Reporting]

with four plain boxes and arrows.

That is technically correct but visually poor.

Instead, turn those concepts into a SYSTEM COMPOSITION.

Each important domain should contain:
- structure;
- hierarchy;
- state;
- relationships;
- subtle metadata.

The illustration should feel like a glimpse into how software thinks
about a business.


# 27. Final instruction

The Cerato Systems illustrations should make abstract business
operations feel tangible.

They should communicate:

"Complex business processes can be understood, structured, connected,
and turned into software."

Use the visual language of a high-end engineering product:
quiet surfaces, precise geometry, subtle borders, muted information,
scarce accent, deliberate motion, and dense but controlled detail.

Do not make illustrations decorative.

Make them explain the idea.