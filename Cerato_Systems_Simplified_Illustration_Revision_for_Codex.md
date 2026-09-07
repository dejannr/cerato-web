# Cerato Systems — Simplified Illustration Content Specification
## Revision to the current illustration system

### Purpose

This document **replaces the content concepts** in the previous Cerato Systems illustration specification.

Keep the existing visual language and implementation rules from:

- `linear-inspired-design-language(2).md`
- the previous Cerato illustration specification, **only where it describes visual treatment** such as colors, borders, typography, surfaces, motion restraint, responsiveness, and avoiding fake product screenshots.

This document changes **what the illustrations show**.

The previous concepts became too diagram-heavy and too complex. The new approach should be simpler, more concrete, and easier to understand in one glance.

---

# 1. Research-derived direction

The homepage should follow a pattern common to strong contemporary software websites:

1. **One idea per visual.**
2. Use a **small believable scenario** instead of a large abstract system map.
3. Show **cause → effect** rather than every possible dependency.
4. Keep most visuals to **2–5 meaningful objects**.
5. Let copy explain the broader idea; the visual only demonstrates one part of it.
6. Customer work is where real application UI becomes the proof.
7. Generic capability sections should use small conceptual UI moments, not fake full products.
8. Not every section needs a large illustration.

The goal is closer to:

> a carefully staged product interaction

than:

> an architecture diagram.

---

# 2. Main rule

## Do not visualize the whole business.

Visualize **one moment that represents the business problem or value**.

Bad:

```text
Customers
    ↓
Scheduling
    ↓
Operations
    ↓
Finance
    ↓
Reporting
    ↓
Integrations
```

Better:

```text
New request
     ↓
Assignment created
     ↓
Ready
```

The visitor understands the broader point from the section copy.

---

# 3. Illustration vocabulary

Use a small set of reusable visual primitives.

Preferred:

- compact record rows;
- small cards;
- status chips;
- simple tables;
- task/activity items;
- forms with 1–3 fields;
- connection lines used sparingly;
- small mobile frame;
- small desktop frame;
- one transformation between states;
- one highlighted business rule;
- small external-system tags;
- subtle event/log rows;
- checkmarks or status dots.

Avoid:

- large node graphs;
- radial diagrams;
- many crossing connectors;
- giant architecture maps;
- more than 5 primary concepts in one illustration;
- long animation sequences;
- visuals requiring explanation before they make sense.

---

# 4. Illustration count

The homepage should have only **five primary visual moments**:

1. Hero — scattered work becomes one organized workflow.
2. Problem — duplicated information across disconnected tools.
3. What we build — four small capability demonstrations.
4. Complexity — one simple action with hidden checks underneath.
5. Engineering — one simple layered stack.

The Customers section uses real case-study imagery later.

The How We Work section should be mostly typographic and should **not** receive another elaborate illustration.

---

# 5. HERO — “From scattered work to one clear operation”

## Copy

Keep the current hero copy:

# Software built around how your business works.

Your business has its own workflows, rules, exceptions, and ways of getting things done. We turn complex operations into custom software that brings the work together.

## What the visual should communicate

The visitor should understand:

> Information that used to live in separate places can become one structured workflow.

Do **not** attempt to show Customers, Scheduling, Employees, Finance, Reporting, etc. all at once.

## Composition

Use two visual states in the same composition.

### Left / incoming side

Show 3 small fragments:

**Spreadsheet**
```text
Customer      Status
M. Petrović   Pending
```

**Message**
```text
Can we move the booking
to tomorrow?
```

**Manual note**
```text
Call driver
Check payment
```

These are generic illustrative records.

Do not use real customer information.

### Right / resolved side

Show one larger structured work item:

```text
REQUEST #024

Customer
M. Petrović

Change
Tomorrow, 08:30

Assignment
Ready

Payment
Verified

Status
Updated
```

Use clearly fictional/example data.

The structured item is **not a Cerato product screenshot**. It is a conceptual representation of organized operational information.

## Motion

Keep it very simple.

Sequence:

1. Three fragmented items exist.
2. One small highlight moves from the fragments toward the structured record.
3. The structured record changes from `Processing` to `Updated`.
4. Stop.
5. Repeat after a long pause.

Do not animate every field.

## Main visual message

**Scattered information → structured operation**

That is enough for the hero.

---

# 6. PROBLEM — “The same information in three places”

## Section

# Your business shouldn't run on workarounds.

## Purpose

Instead of another large transformation diagram, show a **very specific operational problem: duplicated information**.

## Visual

Create three small windows next to each other.

### Window A — Spreadsheet

```text
ORDER 184
Thursday
09:00
Pending
```

### Window B — Message

```text
Order 184 changed
to 10:30
```

### Window C — Notes

```text
ORDER 184
09:00 ?
confirm time
```

The details intentionally disagree.

Use a small warning/status line:

```text
3 sources · 2 different times
```

Then below or beside them, show one clean record:

```text
ORDER 184
Thursday · 10:30
Confirmed
```

## Why this is better

The visual demonstrates an instantly understandable business problem:

- duplicated data;
- conflicting information;
- manual synchronization;
- uncertainty.

Do not use logos of real applications.

Do not show a giant “fragmented system” graph.

---

# 7. WHAT WE BUILD — four simple micro-demonstrations

Keep the four capability categories, but every visual should be a **small demonstration of one behavior**.

They should not all use the same layout.

---

## 7A. Operational platforms

### Content idea

Show an operational queue becoming actionable.

Example:

```text
TODAY

08:30   Delivery     Assigned
09:10   Installation Unassigned
10:45   Pickup       Assigned
```

Then highlight the unassigned row and show:

```text
Assign to
Daniel K.

[ Confirm ]
```

After confirmation:

```text
09:10 Installation   Assigned
```

### Message

Operational software gives people one place to see work and act on it.

### Do not show

- finance;
- reporting;
- permissions;
- customers;
- integrations;
- scheduling;

all in this one visual.

Only show the operational assignment moment.

---

## 7B. Business process automation

### Content idea

Show one repetitive request being processed automatically.

Example:

```text
NEW REQUEST

Amount: 1,250
Type: Standard
Customer: Existing
```

Then show three compact checks:

```text
✓ Customer found
✓ Amount within limit
✓ Required data present
```

Final state:

```text
Ready for approval
```

or:

```text
Processed automatically
```

Choose one depending on the implementation.

### Message

Rules the team used to check manually can become part of the workflow.

### Animation

Checks appear one by one over approximately 1 second.

Do not create a 6-step process map.

---

## 7C. Customer and employee applications

### Content idea

Show the **same request from two perspectives**.

Left: small customer/mobile view.

```text
Your request

Pickup
Tomorrow · 09:00

Confirmed
```

Right: small internal/desktop view.

```text
REQUEST #024

Pickup
Tomorrow · 09:00

Customer confirmed
Assigned to Team 2
```

Use one subtle line or matching ID to communicate that both views refer to the same underlying record.

### Message

Different people can interact with the same operation through interfaces built for their role.

### Important

This is conceptual UI.

Do not pretend it is an existing Cerato application.

---

## 7D. Integrations and connected systems

### Content idea

Keep this extremely simple.

Show:

```text
Email       Payment       Existing ERP
   \           |             /
        CUSTOM SYSTEM
```

But render it as three small external-service cards feeding one central event list, not as a network graph.

Central event list:

```text
09:21 Payment received
09:22 Record updated
09:22 Confirmation sent
```

### Message

Existing systems can stay in place while custom software connects the workflow between them.

### Motion

One event enters from one external source.
Two resulting events appear.
Stop.

No continuous network animation.

---

# 8. CUSTOMERS — real proof, no conceptual illustration

## Section

# Built for real operations.

This section should **not** use an abstract illustration.

Once available, it should use:

- real anonymized project screenshots;
- case-study cover compositions;
- real project facts;
- approved customer information.

For now, retain placeholders.

Do not try to compensate for missing case studies with invented UI.

This is intentionally the point in the homepage where abstract explanation becomes real proof.

---

# 9. COMPLEXITY — one action, four checks

## Section

# Simple to use. Built for complexity underneath.

## Previous problem

The earlier specification used a large network of:

- Capacity
- Permissions
- Scheduling
- Pricing
- Finance
- Reporting
- Notifications
- Integrations
- etc.

That is too much.

## New visual

Show **one simple user action**.

Top/front:

```text
ASSIGN

Vehicle
Bus 12

Driver
D. Jovanović

[ Assign ]
```

When `Assign` is conceptually triggered, show a compact validation stack underneath:

```text
✓ Driver available
✓ Vehicle available
✓ Capacity valid
✓ No schedule conflict
```

Then:

```text
Assignment created
```

That is the entire illustration.

## Message

The person using the software performs one simple action.

The system handles the rules underneath.

This communicates custom business logic far more clearly than a large dependency network.

## Motion

1. Assign button enters active state.
2. Four checks resolve quickly.
3. `Assignment created` appears.
4. Settle.

No looping is necessary unless desired.

---

# 10. HOW WE WORK — remove complex illustrations

## Section

# Understand the operation. Then build the system.

Keep:

- Understand
- Design
- Build
- Evolve

Do not create four mini diagrams.

Use primarily:
- typography;
- sequence/progression;
- number labels;
- one short supporting line per stage;
- perhaps one subtle active-line movement as the user scrolls.

The section itself provides visual rhythm.

Do not force an illustration into every section.

---

# 11. ENGINEERING — simple four-layer stack

## Section

# Modern software, chosen for the problem.

## Purpose

Show that Cerato understands full-system engineering without creating a technical architecture diagram.

## Visual

Use four horizontal layers.

```text
┌───────────────────────────────────┐
│ Interfaces                        │
│ Customer · Employee · Operations  │
└───────────────────────────────────┘

┌───────────────────────────────────┐
│ Application                       │
│ Product logic · APIs              │
└───────────────────────────────────┘

┌───────────────────────────────────┐
│ Business rules                    │
│ Workflows · Validation            │
└───────────────────────────────────┘

┌───────────────────────────────────┐
│ Data & integrations               │
│ Database · External services      │
└───────────────────────────────────┘
```

The four layers may slightly overlap or connect according to the design language.

Technology names can appear as quiet metadata:

```text
TypeScript · React · Next.js
Python · PostgreSQL
```

Do not assign exact technologies to exact layers if that becomes technically misleading.

## Message

Cerato builds more than the visible interface.

It can own the system from user experience through business logic and data.

---

# 12. FINAL CTA — no illustration required

Do not add another visual just because the page has space.

Use the typography and layout system to make the final CTA strong.

The site should become visually quieter toward the final conversion point.

---

# 13. Revised homepage visual rhythm

The homepage should now feel like this:

```text
HERO
Large simple transformation visual
Scattered → structured

PROBLEM
Small concrete duplication/conflict scenario

WHAT WE BUILD
Four compact micro-demonstrations

CUSTOMERS
Real project imagery

COMPLEXITY
One action → four hidden checks

HOW WE WORK
Typography / progression only

ENGINEERING
Simple four-layer stack

FINAL CTA
Typography only
```

This creates variation.

It avoids a homepage made entirely of diagrams.

---

# 14. Complexity budget

Every illustration must pass these limits unless there is a strong reason otherwise.

## Primary objects

Maximum:
**5**

Ideal:
**2–4**

## Visible text labels inside illustration

Ideal:
**6–12**

Maximum:
approximately **16**

## Connector lines

Ideal:
**0–3**

Maximum:
**4**

## Simultaneously animated elements

Ideal:
**1–2**

Maximum:
**3**

## Main concept

Exactly:
**1**

If the illustration is trying to explain two or three different business ideas at once, simplify it.

---

# 15. Content realism

Conceptual UI should use believable but generic microcopy.

Good:

```text
Pending
Assigned
Confirmed
Ready
Synced
Processing
Updated
No conflict
Payment received
Request created
```

Avoid:

```text
Optimize
Transform
Scale faster
AI-powered
Revolutionize
Unlock growth
```

The illustrations should demonstrate an operation, not repeat marketing language.

---

# 16. Fictional example data

Because these are conceptual illustrations, small fake/example records are allowed only if they are obviously generic and are not presented as customer proof.

Use neutral fictional content such as:

```text
Request #024
Order 184
Team 2
Vehicle 12
Tomorrow · 09:00
1,250
```

For personal names, either:
- use initials;
- use obvious placeholders;
- or avoid names.

Do not use real client data.

Do not invent business performance metrics.

---

# 17. Animation philosophy — revised

The earlier illustration specification allowed relatively elaborate sequences.

Simplify them.

Each illustration should animate **one event**.

Examples:

Hero:
fragment → structured record.

Automation:
three checks → ready.

Integration:
payment event → update + confirmation.

Complexity:
assign → validation → created.

That is enough.

Do not run animated choreography through an entire system.

The visitor should understand the animation even if they see only the last two seconds.

---

# 18. Mobile behavior

On mobile, do not preserve every desktop detail.

Reduce each visual to its core scenario.

Examples:

## Hero mobile

Instead of three fragments simultaneously:

```text
Spreadsheet
Message
Note
```

cycle or stack them into:

```text
Scattered information
        ↓
Structured request
```

## Problem mobile

Show two conflicting records rather than three.

## What we build mobile

Render each capability illustration above its copy.

## Complexity mobile

Keep:

```text
Assign
 ↓
4 checks
 ↓
Created
```

## Engineering mobile

Stack the four layers vertically.

No tiny unreadable system diagrams.

---

# 19. What to preserve from the existing illustration specification

Keep the previous rules about:

- using the design tokens from `linear-inspired-design-language(2).md`;
- near-black page environment;
- neutral surfaces;
- subtle 1px borders;
- restrained violet accent;
- Inter typography;
- scarce monospace;
- small radii;
- subtle motion;
- no playful bouncing;
- `prefers-reduced-motion`;
- HTML/CSS/SVG implementation;
- responsive simplification;
- no stock illustrations;
- no giant gradients;
- no 3D characters;
- no fake Cerato SaaS dashboard;
- no invented customer metrics;
- no excessive glassmorphism;
- no PowerPoint-style arrows.

Change only the **content and complexity of the illustrations** according to this document.

---

# 20. What this revision explicitly removes

Do not implement the previous versions of:

- large central Operations network;
- radial business-domain map;
- 10–12-node complexity graph;
- separate graph for every service;
- multi-stage hero story across many modules;
- large interconnected architecture network;
- four illustrated mini-systems in How We Work.

Replace them with the simpler scenarios defined here.

---

# 21. Quality test

Before accepting an illustration, ask:

1. Can I explain the visual in one sentence?
2. Can a business owner understand it in about 2 seconds?
3. Does it demonstrate a specific operational moment?
4. Is there only one main idea?
5. Could I remove another node/card/line without losing the idea?
6. Does it avoid looking like a flowchart?
7. Does it avoid pretending Cerato has one SaaS product?
8. Does it fit the supplied Linear-inspired design language?
9. Is the motion showing cause and effect?
10. Is the real proof still reserved for Customers/case studies?

If #1 or #2 is no, simplify again.

---

# 22. Final instruction to Codex

The new Cerato illustrations should be **simpler than the previous version**.

Do not attempt to visually explain everything Cerato can build.

Each illustration should demonstrate one small, believable operational moment:

- messy information becomes one record;
- conflicting information becomes one source of truth;
- an assignment gets made;
- manual checks become automatic;
- two users see the same underlying request;
- one external event updates the system;
- one simple action triggers hidden business rules;
- the application sits on top of business logic, data, and integrations.

Use the supplied Linear-inspired visual language to make these small ideas feel premium.

The sophistication should come from:
- typography;
- spacing;
- hierarchy;
- subtle surfaces;
- precise alignment;
- restrained state changes;
- carefully staged interaction.

Not from adding more nodes.

**One clear idea, beautifully executed, is better than a complete system diagram.**
