# Cerato Systems Website — Homepage Content Revision for Codex

## Purpose

Update the current Cerato Systems website plan so the homepage does **not** depend on fake or missing product screenshots.

Cerato Systems is a custom software company, not a single software product like Linear.

The website can still use the supplied Linear-inspired design language for visual quality, structure, motion, spacing, typography, surfaces, and interaction patterns, but the **content model must fit a services/company website**.

The key principle is:

> Do not imitate Linear's product content. Imitate the quality of its presentation.

Use the existing design file as the source of truth for design implementation.

Do not add new design rules here.

---

# 1. Remove the fake product-visual requirement from the homepage hero

## Current problem

The previous homepage plan asks for:

`PLACEHOLDER: HERO PRODUCT VISUAL`

Remove this requirement.

Cerato Systems does not have one Cerato-branded SaaS product to display.

Do not invent:
- a Cerato dashboard;
- a fake SaaS interface;
- a fake product screenshot;
- fake analytics;
- fake customer data;
- fake product modules presented as a real existing product.

## Replace it with

Create an **abstract operational-system visual directly in code**.

This should be built with HTML/CSS/SVG or equivalent frontend primitives and should not require a supplied image.

The visual should communicate how custom software can connect different parts of a business.

Use conceptual nodes such as:

- Customers
- Operations
- Scheduling
- Employees
- Finance
- Reporting

Supporting smaller concepts may include:

- Orders
- Assignments
- Inventory
- Notifications
- Approvals
- Documents
- Integrations
- Business rules

These are conceptual examples only.

Do not imply that Cerato Systems sells a fixed platform containing all of these modules.

The visual should communicate:

> One system, built around the operation.

The hero content remains:

# Software built around how your business works.

Your business has its own workflows, rules, exceptions, and ways of getting things done. We turn complex operations into custom software that brings the work together.

Primary CTA:

**Start a project**

Secondary CTA:

**See our work**

---

# 2. Keep the problem section, but make the visual fully code-generated

The section remains:

# Your business shouldn't run on workarounds.

Use the existing copy.

Do not require an image asset.

Build the supporting visual directly in the frontend.

It should conceptually show:

```text
Spreadsheets
Messages
Email
Manual calculations
Repeated data entry
Disconnected tools
        ↓
Fragmented business operation
        ↓
One custom system
```

The visual should represent the transformation from fragmented work to a connected system.

Do not use logos from WhatsApp, Excel, Viber, Slack, Microsoft, or other companies unless such use is explicitly approved later.

Prefer neutral text labels and abstract UI/system elements.

---

# 3. Change "What we build" into conceptual system visuals, not product previews

Keep these four service categories:

1. Operational platforms
2. Business process automation
3. Customer and employee applications
4. Integrations and connected systems

Do not require screenshots for these cards/sections.

Each category can have a small conceptual visualization built directly in code.

## Operational platforms

Suggested conceptual structure:

```text
People
   ↓
Workflows
   ↓
Business rules
   ↓
Operational data
   ↓
One system
```

## Business process automation

Suggested conceptual structure:

```text
Input
  ↓
Rules
  ↓
Validation
  ↓
Approval / Action
  ↓
Record
```

## Customer and employee applications

Suggested conceptual structure:

```text
Customer
Employee
Field team
Manager
     ↓
Shared operational system
```

## Integrations and connected systems

Suggested conceptual structure:

```text
Existing system A ─┐
Existing system B ─┼─> Connected operation
External service  ─┤
Internal database ─┘
```

These should be presented as examples of what Cerato Systems can build, not as screenshots of an existing Cerato product.

---

# 4. Featured Customers is the first place real application screenshots should appear

This section is where product UI becomes appropriate because it represents actual client work.

Keep:

# Built for real operations.

The section should render the two case-study cards from the reusable Customers data structure.

For now, both remain placeholders.

Each case study should support:

- title;
- industry;
- summary;
- cover visual;
- project facts;
- slug;
- anonymous customer support;
- optional customer logo;
- optional testimonial;
- optional metrics.

When real case-study content is added, the cover visual may contain a real anonymized application screenshot.

Until then:

Do not invent product screenshots.

Use a clearly replaceable case-study cover placeholder.

---

# 5. Replace any homepage product/UI visual in "Built for complexity"

Do not use a screenshot here.

Keep the section:

# Simple to use. Built for complexity underneath.

Use the existing body copy.

Build a conceptual business-logic visual in code.

Use a central concept such as:

**Operation**

Surround it with concepts such as:

- Scheduling
- Assignments
- Permissions
- Validation
- Capacity
- Pricing
- Financial reconciliation
- Reporting
- Integrations
- Notifications
- Offline workflows
- Document generation

Connections can visually show that these concerns affect one another.

The purpose of this visual is to communicate:

> Cerato Systems can model complicated business rules while keeping the software usable.

Do not present this diagram as a literal Cerato product architecture.

---

# 6. Remove "Work from anywhere" from the homepage

Remove the standalone homepage section:

**Your business doesn't only happen behind a desk.**

Also remove:

`PLACEHOLDER: DESKTOP + MOBILE PRODUCT VISUAL`

Reason:

This message is useful inside a specific case study where there is real evidence and a real mobile implementation, but it is not important enough to be a primary generic homepage message for Cerato Systems.

The homepage should stay focused on:

- operational complexity;
- custom software;
- business workflows;
- customer proof;
- process;
- engineering capability.

The mobile/flexible-access story can appear inside relevant customer case studies.

---

# 7. Keep "How we work"

Keep this section:

# Understand the operation. Then build the system.

Keep the four steps:

1. Understand
2. Design
3. Build
4. Evolve

No product screenshots are required.

The section may use code-generated diagrams, process lines, steps, cards, or other visual elements according to the supplied design-language file.

---

# 8. Change the Engineering section so it is not just a stack-logo section

Keep the section secondary to the business message.

Keep:

# Modern software, chosen for the problem.

Use the existing copy.

Do not require logos.

Prefer a conceptual architecture/system visual built in code.

Example conceptual structure:

```text
Customer / Employee / Operations interfaces
                    ↓
             Application layer
                    ↓
            Business workflows
                    ↓
          Data + integrations
```

Technology labels may appear subtly:

- TypeScript
- React
- Next.js
- Python
- PostgreSQL

Do not make the section look like a generic development-agency technology wall.

The supporting line remains:

**The technology is important. The business outcome is the point.**

---

# 9. Revised homepage structure

The homepage should now follow this sequence:

```text
HOME
├── Hero
│   └── Code-generated operational-system visual
│
├── The problem
│   └── Fragmented tools → connected system visual
│
├── What we build
│   ├── Operational platforms
│   ├── Business process automation
│   ├── Customer and employee applications
│   └── Integrations and connected systems
│
├── Featured customer work
│   ├── Case study 1 placeholder
│   └── Case study 2 placeholder
│
├── Built for complexity
│   └── Code-generated business-logic/system diagram
│
├── How we work
│   ├── Understand
│   ├── Design
│   ├── Build
│   └── Evolve
│
├── Engineering
│   └── Conceptual system architecture + subtle technology labels
│
└── Final CTA
```

Do not add a generic mobile-access section to the homepage.

---

# 10. Revised homepage asset requirements

The homepage should no longer require these assets:

```text
PLACEHOLDER: HERO PRODUCT VISUAL
PLACEHOLDER: DESKTOP + MOBILE PRODUCT VISUAL
```

Remove them from the placeholder inventory.

The homepage should be able to look complete even before case-study screenshots are available.

The only homepage visuals that may later depend on supplied images are:

```text
PLACEHOLDER: CASE STUDY 1 COVER
PLACEHOLDER: CASE STUDY 2 COVER
```

Everything else should be created using the frontend itself.

---

# 11. Important implementation rule

Do not create fake product UI just to fill visual space.

If a homepage section needs visual interest, use:

- diagrams;
- nodes;
- relationships;
- workflow representations;
- system maps;
- capability structures;
- process animations;
- abstract data-flow visuals;
- typographic compositions;
- code-generated interface-like primitives that are clearly conceptual rather than fake screenshots.

Do not create something that looks like a real Cerato SaaS dashboard unless it is based on an actual client project and explicitly approved for use.

---

# 12. Content positioning rule

The homepage should communicate this progression:

### First

**We understand businesses with complicated operations.**

### Then

**We can turn those operations into custom software.**

### Then

**Here is proof through real customer work.**

### Then

**We understand the complexity underneath the interface.**

### Then

**Here is how we approach and engineer the solution.**

### Finally

**Talk to us if your current tools are holding your operation together instead of helping it run.**

---

# 13. What must remain unchanged

Unless another instruction explicitly changes them, keep the existing:

- navigation;
- Customers page;
- case-study content model;
- Services page;
- Company page;
- Contact page;
- Privacy page;
- footer;
- SEO metadata;
- accessibility requirements;
- content tone;
- placeholder rules;
- no-invented-claims rule;
- case-study infrastructure.

Only revise the homepage and placeholder inventory where described in this document.

---

# 14. Final instruction to Codex

Cerato Systems is not a single software product.

Do not design the homepage as if Cerato is selling one SaaS application.

Use the supplied Linear-inspired design-language file for visual execution, but adapt the content model to a custom software company.

The homepage should feel complete without fake product screenshots.

Use code-generated conceptual visuals to communicate:

- fragmented workflows becoming connected;
- different parts of a business working through one system;
- business process automation;
- integrations;
- operational complexity;
- engineering structure.

Reserve real application screenshots for the **Customers / case-study content**, where they act as proof of actual work.

The final homepage should communicate:

> **Cerato Systems understands how a business operates, models its complexity, and builds custom software around it.**
