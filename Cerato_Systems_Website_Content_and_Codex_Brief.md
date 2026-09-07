# Cerato Systems Website --- Content & Implementation Brief

## 0. Purpose of this document

This document is the complete content and information-architecture brief
for the first Cerato Systems website.

It is intended to be given directly to Codex together with the separate
file:

`linear-inspired-design-language(1).md`

### Important instruction for Codex

-   Use the attached design-language file as the **single source of
    truth for visual design, layout language, typography, spacing,
    surfaces, responsive behavior, motion, components, and visual QA**.
-   This document defines **what the website contains, what each page
    must communicate, the exact copy, navigation, CTAs, content
    hierarchy, placeholder requirements, and functional requirements**.
-   Do **not** infer additional visual styling from this document.
-   Do **not** copy Linear's branding, logo, wording, product
    screenshots, illustrations, or proprietary assets. Use only the
    design principles described in the supplied design-language file.
-   Do not invent facts, customers, testimonials, project metrics,
    certifications, team members, office locations, awards, or client
    logos.
-   Where this brief says `PLACEHOLDER`, create a clearly identifiable
    placeholder that can be replaced later without restructuring the
    page.
-   The website should present Cerato Systems as a **company/studio**,
    so use **we / our**, not first-person singular language.

------------------------------------------------------------------------

# 1. What Cerato Systems is

Cerato Systems builds custom software around the way a business actually
operates.

The company is especially suited to businesses that have important
workflows spread across spreadsheets, messaging apps, manual
calculations, disconnected software, repeated data entry, or processes
that depend too heavily on individual employees.

Cerato Systems should **not** be positioned as a generic
website-development agency.

The website should communicate that Cerato Systems can understand a
complicated real-world operation, model its workflows and business
rules, and build a complete software system around it.

## Core positioning

**Software built around how your business works.**

## Core philosophy

**Software should adapt to the business --- not force the business to
adapt to the software.**

## Primary customer problem

A business has grown beyond its current collection of spreadsheets,
messages, manual processes, disconnected applications, and operational
workarounds.

## What Cerato Systems does

Cerato Systems turns those workflows into custom software.

------------------------------------------------------------------------

# 2. Website goals

The website has four primary goals:

1.  Make a business owner or decision-maker understand what Cerato
    Systems does within seconds.
2.  Show that Cerato Systems builds serious operational software, not
    just websites.
3.  Establish credibility through real customer work and case studies.
4.  Convert qualified visitors into project conversations.

A successful visitor reaction is:

> "Our company has exactly this kind of operational mess. Cerato Systems
> could probably build the system we need."

------------------------------------------------------------------------

# 3. Target positioning

Do not constrain the copy to a specific country or industry.

The website should feel suitable for international B2B clients.

Do not position Cerato Systems exclusively as: - a transportation
software company; - a startup MVP agency; - a web-design agency; - a
mobile-development agency; - an Odoo agency; - a React/Next.js agency.

The transportation project is evidence of Cerato Systems' capability,
not the definition of the company.

The broader positioning is:

> **Custom operational software for businesses with complex workflows.**

------------------------------------------------------------------------

# 4. Sitemap

Create these primary routes:

``` text
/
├── /customers
│   ├── /customers/[case-study-one-slug]
│   └── /customers/[case-study-two-slug]
├── /services
├── /company
├── /contact
└── /privacy
```

Do not create a blog, careers page, pricing page, resources section,
login page, documentation section, or newsletter at this stage.

------------------------------------------------------------------------

# 5. Global navigation

## Primary navigation

Left/brand: - Cerato Systems logo --- links to `/`

Navigation: - Customers --- `/customers` - Services --- `/services` -
Company --- `/company`

Primary CTA: - Start a project --- `/contact`

Do not add dropdown menus unless technically necessary later.

## Mobile navigation

Use the same destinations: - Customers - Services - Company - Start a
project

------------------------------------------------------------------------

# 6. Global CTA language

Use these CTA labels consistently.

### Primary CTA

**Start a project**

Destination: `/contact`

### Secondary CTA

**See our work**

Destination: `/customers`

### Case-study CTA

**Read case study**

### Contact email CTA

Use:

**Email us**

If the actual company email is not supplied, use:

`PLACEHOLDER: COMPANY EMAIL`

Do not invent an email address.

------------------------------------------------------------------------

# 7. Home page `/`

## Section 1 --- Hero

### Eyebrow

Optional. If the chosen implementation uses one, use:

**Custom software systems**

Do not add an eyebrow if it makes the hero weaker.

### Main headline

# Software built around how your business works.

### Supporting copy

Your business has its own workflows, rules, exceptions, and ways of
getting things done. We turn complex operations into custom software
that brings the work together.

### Primary CTA

**Start a project**

### Secondary CTA

**See our work**

### Hero visual

`PLACEHOLDER: HERO PRODUCT VISUAL`

The final visual will be supplied later.

Codex should create a replaceable placeholder container for a future
Cerato Systems product/application composition.

Do not use stock photography. Do not use an invented dashboard
screenshot. Do not generate fake customer data and present it as a real
Cerato product.

------------------------------------------------------------------------

## Section 2 --- The problem

### Section headline

# Your business shouldn't run on workarounds.

### Body copy

Spreadsheets, messages, repeated data entry, manual calculations,
information living in people's heads, and generic tools that almost fit.

These solutions can work for a while. But as the business grows, the
workarounds become part of the problem.

Important processes become harder to control. Information gets
fragmented. Employees repeat the same work. Decisions depend on finding
the right message, spreadsheet, or person.

### Closing statement

**We turn those workflows into software.**

### Supporting visual

Do not require a product screenshot.

Create a content placeholder/diagram structure representing:

``` text
Spreadsheets
Messages
Manual work
Disconnected tools
Repeated data entry
        ↓
Business operations
        ↓
One connected system
```

The visual treatment must follow the attached design-language file.

------------------------------------------------------------------------

## Section 3 --- What we build

### Section eyebrow

**What we build**

### Section headline

# Systems designed around the operation.

### Intro copy

We build software for businesses whose processes are too important, too
specific, or too complex to keep forcing into generic tools.

### Capability 1

#### Operational platforms

Bring people, workflows, business rules, and operational data into one
purpose-built system.

Examples of what this can include: - operations dashboards; - scheduling
and assignments; - customer and employee workflows; - inventory or
resource management; - financial and operational records; - reporting; -
role-specific interfaces.

### Capability 2

#### Business process automation

Replace repetitive manual work with structured workflows that reduce
duplicate work and make important processes easier to follow and
control.

Examples: - approvals; - calculations; - recurring administrative
work; - data synchronization; - document generation; - operational
checks and validations.

### Capability 3

#### Customer and employee applications

Build web and mobile-friendly experiences that connect customers,
employees, field teams, and management to the same underlying operation.

### Capability 4

#### Integrations and connected systems

Connect existing tools and services so information can move through the
business without creating another disconnected silo.

### CTA

**Explore our services**

Destination: `/services`

------------------------------------------------------------------------

## Section 4 --- Featured customer work

### Section eyebrow

**Customer work**

### Section headline

# Built for real operations.

### Intro copy

The best way to understand our work is to see what changed for the
businesses using it.

### Customer card 1

`PLACEHOLDER: CASE STUDY 1`

Required placeholder fields: - Case-study title - Industry -
One-sentence transformation - 2--4 short project facts - Cover visual -
Case-study slug - "Read case study" CTA

Do not invent the customer name or project facts.

This will later be replaced by the transportation operations case study.

### Customer card 2

`PLACEHOLDER: CASE STUDY 2`

Required placeholder fields: - Case-study title - Industry -
One-sentence transformation - 2--4 short project facts - Cover visual -
Case-study slug - "Read case study" CTA

Do not invent the customer, project, metrics, or testimonial.

### Section CTA

**View all customers**

Destination: `/customers`

------------------------------------------------------------------------

## Section 5 --- Complexity

### Section eyebrow

**Built for complexity**

### Section headline

# Simple to use. Built for complexity underneath.

### Body copy

Real businesses are full of dependencies, exceptions, permissions,
calculations, and edge cases.

Good operational software should hide unnecessary complexity from the
people using it without ignoring the complexity the business actually
depends on.

We design the interface and the underlying system together, so the
software can stay clear while the business logic remains precise.

### Supporting capability labels

Use these as content for a system/logic visual:

-   Scheduling
-   Assignments
-   Permissions
-   Validation
-   Capacity
-   Pricing
-   Financial reconciliation
-   Reporting
-   Integrations
-   Offline workflows
-   Notifications
-   Document generation

These are capability examples, not claims that every Cerato project
includes all of them.

------------------------------------------------------------------------

## Section 6 --- Work from anywhere

### Section eyebrow

**Flexible by default**

### Section headline

# Your business doesn't only happen behind a desk.

### Body copy

Operations move between offices, customer locations, vehicles,
warehouses, job sites, and everywhere in between.

When the workflow requires it, we build software that remains useful
across desktop and mobile devices, so important information and actions
are available where the work actually happens.

The goal is not simply to make a desktop screen smaller. The experience
should remain practical for the person using it in that context.

### Supporting statements

-   Access important information away from the office.
-   Keep teams connected to the same system.
-   Support field and mobile workflows where they make sense.
-   Design each workflow for the device and environment in which it is
    used.

### Visual

`PLACEHOLDER: DESKTOP + MOBILE PRODUCT VISUAL`

Do not invent screenshots.

The placeholder should support replacing it later with: - one desktop
application screenshot; - one phone application screenshot.

------------------------------------------------------------------------

## Section 7 --- How we work

### Section eyebrow

**How we work**

### Section headline

# Understand the operation. Then build the system.

### Intro copy

Custom software succeeds when the business is understood before the
solution is decided.

### Step 1

#### Understand

We learn how the operation works today: the people involved, the
information they use, the rules they follow, the exceptions they handle,
and the problems slowing them down.

### Step 2

#### Design

We turn those workflows into a clear system: what should happen, who
should do it, what information is needed, and how the parts connect.

### Step 3

#### Build

We implement the product around the real operation, including the
business rules and edge cases that generic software often cannot
represent.

### Step 4

#### Evolve

Once software becomes part of daily operations, the business continues
to change. We can maintain and evolve the system as new requirements
appear.

------------------------------------------------------------------------

## Section 8 --- Technology

This section should be intentionally secondary to the business message.

### Section eyebrow

**Engineering**

### Headline

# Modern software, chosen for the problem.

### Body copy

We use modern web technologies and proven engineering tools, choosing
the architecture around the needs of the product rather than forcing
every project into the same stack.

### Technology list

The following technologies may be shown as examples of technologies
Cerato Systems works with:

-   TypeScript
-   React
-   Next.js
-   Python
-   PostgreSQL

Do not add technologies that have not been confirmed.

Do not make this section read like a list of agency keywords.

### Supporting statement

**The technology is important. The business outcome is the point.**

------------------------------------------------------------------------

## Section 9 --- Final CTA

### Headline

# Your business already has a system.

### Supporting headline

**It might just be made of spreadsheets, messages, and manual work.**

### Body copy

If important parts of your operation have outgrown the tools holding
them together, let's talk about what a system built around the business
could look like.

### CTA

**Start a project**

Destination: `/contact`

------------------------------------------------------------------------

# 8. Customers page `/customers`

This page should function similarly in purpose to Linear's Customers
area: a dedicated place for customer stories and case studies.

Do not write the actual two case studies yet.

## Hero

### Eyebrow

**Customers**

### Headline

# Software built around real businesses.

### Body copy

Every business has its own workflows, constraints, and operational
complexity. Our work starts by understanding those details and building
software around them.

The stories below show how custom systems can replace fragmented
processes, improve control, and give teams better tools for running the
business.

------------------------------------------------------------------------

## Customer story grid/list

Create infrastructure for case studies as reusable data-driven content.

There will initially be **two case studies**.

### Case study 1

`PLACEHOLDER: CASE STUDY 1`

Do not invent copy.

Required fields: - `title` - `slug` - `industry` - `summary` -
`coverImage` - `projectFacts` - optional `quote` - optional
`customerName` - optional `customerLogo` - `featured`

### Case study 2

`PLACEHOLDER: CASE STUDY 2`

Same fields.

### Important

The page must work correctly when: - the customer is anonymous; - there
is no customer logo; - there is no testimonial; - there are no hard
metrics.

Do not make those fields mandatory.

------------------------------------------------------------------------

## Customers closing CTA

### Headline

# Have an operation that has outgrown its tools?

### Body

We build custom software around workflows that generic systems cannot
quite fit.

### CTA

**Start a project**

------------------------------------------------------------------------

# 9. Case-study template `/customers/[slug]`

Create the reusable template now even though the final two case studies
will be written later.

All actual content below is placeholder-driven.

## Required content model

``` ts
type CaseStudy = {
  slug: string
  title: string
  eyebrow?: string
  industry: string
  summary: string
  clientName?: string
  clientLogo?: string
  anonymousClient?: boolean

  facts: {
    label: string
    value: string
  }[]

  heroImage?: string

  challenge: {
    heading: string
    body: string[]
  }

  goal?: {
    heading: string
    body: string[]
  }

  solution: {
    heading: string
    body: string[]
  }

  sections: {
    eyebrow?: string
    heading: string
    body: string[]
    bullets?: string[]
    image?: string
    imageAlt?: string
  }[]

  outcomes: {
    heading: string
    body: string
  }[]

  technology?: string[]

  testimonial?: {
    quote: string
    name?: string
    role?: string
  }

  nextCaseStudySlug?: string
}
```

## Case-study page structure

1.  Back to Customers
2.  Industry/eyebrow
3.  Case-study title
4.  Summary
5.  Project facts
6.  Hero image --- optional
7.  Challenge
8.  Goal --- optional
9.  Solution
10. Flexible project sections
11. Outcomes
12. Technology --- optional
13. Testimonial --- optional
14. Next customer story --- if available
15. Start a project CTA

### Placeholder behavior

If optional content does not exist, omit the section cleanly.

Never render text such as: - "No testimonial available" - "Logo coming
soon" - "Metrics unavailable"

The layout should simply adapt.

------------------------------------------------------------------------

# 10. Services page `/services`

## Hero

### Eyebrow

**Services**

### Headline

# Custom software for the parts of your business that don't fit off the shelf.

### Body copy

We design and build software around real operational workflows ---
especially when spreadsheets, manual processes, disconnected tools, or
generic platforms have become a limitation.

### CTA

**Start a project**

------------------------------------------------------------------------

## Service 1 --- Operational software

### Heading

# Operational platforms

### Copy

We build internal systems that bring the day-to-day operation into one
place.

Instead of making teams jump between spreadsheets, messages, generic
tools, and manual records, a custom operational platform can connect the
people, data, rules, and actions that keep the business moving.

### Possible capabilities

-   Scheduling and planning
-   Assignments
-   Customer and employee records
-   Inventory or resource tracking
-   Role-based workflows
-   Operational dashboards
-   Financial and operational records
-   Reports and exports

### Note

These are examples. Do not imply every project contains all of them.

------------------------------------------------------------------------

## Service 2 --- Process automation

### Heading

# Business process automation

### Copy

Repetitive work is often a sign that the software does not match the
process.

We identify where information is being copied, calculated, checked,
transferred, or recreated manually and build workflows that make those
processes more reliable.

### Possible capabilities

-   Workflow automation
-   Business-rule validation
-   Calculations
-   Approval flows
-   Notifications
-   Data synchronization
-   Document generation
-   Recurring administrative processes

------------------------------------------------------------------------

## Service 3 --- Customer and employee applications

### Heading

# Applications for the people inside and outside the business

### Copy

A good operational system often needs more than one interface.

Customers, office staff, managers, drivers, technicians, field teams, or
other employees may all need different views of the same underlying
operation.

We build web and mobile-friendly experiences around the job each person
needs to perform.

------------------------------------------------------------------------

## Service 4 --- Integrations

### Heading

# Connect the systems you already use

### Copy

Custom software does not always need to replace everything.

When existing tools still serve the business well, we can connect them
to the new system so information moves between applications without
unnecessary duplicate work.

### Possible capabilities

-   Third-party APIs
-   Existing business systems
-   Email services
-   Data imports and exports
-   Payment or communication services
-   Custom internal integrations

Do not name integrations that have not been confirmed.

------------------------------------------------------------------------

## Service 5 --- Ongoing development

### Heading

# Software that can evolve with the business

### Copy

Operational software is rarely finished forever.

Processes change. Teams grow. New exceptions appear. New opportunities
become worth automating.

We can continue maintaining and extending the product after the initial
system is in use.

------------------------------------------------------------------------

## Services closing statement

### Headline

# Not sure what the software should look like yet?

### Body copy

You do not need to arrive with a technical specification.

Start with the business problem, the current workflow, and what is no
longer working. We can work from there.

### CTA

**Start a project**

------------------------------------------------------------------------

# 11. Company page `/company`

## Hero

### Eyebrow

**Cerato Systems**

### Headline

# We build software around the business, not the other way around.

### Body copy

Cerato Systems is a software engineering company focused on custom
systems for businesses with real operational complexity.

We work from the workflow outward: understand how the business operates,
identify where software can remove friction, and build the system around
those requirements.

------------------------------------------------------------------------

## Section --- Philosophy

### Headline

# Generic software is not always the answer.

### Copy

Off-the-shelf software is the right choice when the business can fit the
product.

But some operations have their own rules, processes, edge cases, and
competitive advantages. Forcing those businesses into software designed
for everyone can create a different kind of inefficiency.

That is where custom software makes sense.

### Callout

**Software should adapt to the business --- not force the business to
adapt to the software.**

------------------------------------------------------------------------

## Section --- What matters to us

### Item 1

#### Understand before building

The quality of the software depends on understanding the operation
behind it.

### Item 2

#### Solve the workflow, not just the screen

A polished interface is useful only when the underlying process works.

### Item 3

#### Keep complexity where it belongs

The business may be complex. The experience for the person using the
software should still be clear.

### Item 4

#### Build for real use

Operational software has to work during normal days, unusual days,
exceptions, mistakes, changing requirements, and real-world constraints.

### Item 5

#### Stay pragmatic

Technology is a tool. Architecture, frameworks, and integrations should
serve the product rather than become the product.

------------------------------------------------------------------------

## Section --- Company/team

At launch, do **not** invent a large team.

Use:

`PLACEHOLDER: COMPANY / TEAM CONTENT`

The section should be optional and easy to add later.

Possible future fields: - short founder/company story; - team member
cards; - location; - company photo; - founder photo; - company values.

Until real content is supplied, omit this section from the rendered page
rather than showing empty cards.

------------------------------------------------------------------------

## Company closing CTA

### Headline

# Let's build the system your operation needs.

### CTA

**Start a project**

------------------------------------------------------------------------

# 12. Contact page `/contact`

The contact page should qualify a potential project without making the
form exhausting.

## Hero

### Eyebrow

**Start a project**

### Headline

# Tell us what your business is trying to solve.

### Body copy

You do not need a finished specification.

Tell us how the process works today, where it is causing problems, and
what you would like to improve. We can take the conversation from there.

------------------------------------------------------------------------

## Contact form

Required fields:

### Name

Label: **Your name**

Input placeholder: **Jane Smith**

### Work email

Label: **Work email**

Input placeholder: **jane@company.com**

### Company

Label: **Company**

Input placeholder: **Company name**

### Website

Label: **Company website**

Optional.

Input placeholder: **company.com**

### What are you trying to improve?

Label: **What are you trying to improve?**

Textarea placeholder:

**Tell us about the workflow, process, or operational problem you want
to improve. What are you using today, and what is no longer working?**

### Project context

Use optional selectable values if useful:

-   Internal operations
-   Process automation
-   Customer application
-   Employee / field application
-   Integrations
-   Existing custom software
-   Not sure yet

This field must not prevent submission if nothing is selected.

### Budget

Do **not** add a budget field at this stage.

### Phone

Do **not** require a phone number.

### Submit button

**Send project inquiry**

### Submission behavior

`PLACEHOLDER: CONTACT FORM DELIVERY`

Codex must implement the form UI and validation, but if no email/form
backend credentials are provided: - do not invent credentials; - do not
silently pretend the message was sent; - create a clearly documented
integration point for the future form backend; - in development,
submission may log/store mock data only if clearly marked as development
behavior.

### Success message

**Thanks --- your message has been received. We'll get back to you as
soon as we can.**

Only use this success state when a real submission has actually
succeeded.

### Error message

**Something went wrong while sending your message. Please try again or
contact us by email.**

Email fallback: `PLACEHOLDER: COMPANY EMAIL`

------------------------------------------------------------------------

# 13. Privacy page `/privacy`

Create the route and page structure.

Until legal copy is supplied:

`PLACEHOLDER: PRIVACY POLICY`

Do not generate legal claims or a fake privacy policy.

The page can contain a development-only notice indicating that final
legal copy must be supplied before production launch.

Do not ship the development notice as final production legal text.

------------------------------------------------------------------------

# 14. Footer

## Brand

Cerato Systems logo.

### Short statement

**Custom software built around how your business works.**

## Navigation

### Company

-   Customers
-   Services
-   Company
-   Contact

### Legal

-   Privacy

Do not create Terms unless real terms are supplied.

## Contact

`PLACEHOLDER: COMPANY EMAIL`

## Social

`PLACEHOLDER: LINKEDIN COMPANY PAGE URL`

Do not invent social profiles.

If no social URL is supplied, hide the social link rather than linking
to `#`.

## Copyright

Use the current year dynamically:

**© \[CURRENT YEAR\] Cerato Systems.**

Do not hard-code a year that will become stale.

------------------------------------------------------------------------

# 15. Reusable content components

Codex should structure the site so these content patterns can be reused.

-   Page hero
-   Section heading
-   CTA group
-   Capability/service item
-   Process step
-   Customer/case-study card
-   Case-study facts
-   Case-study content section
-   Outcome item
-   Technology list
-   Quote/testimonial
-   Final CTA
-   Contact form
-   Footer

Component naming and code organization are implementation decisions.

Visual implementation must follow the attached design-language file.

------------------------------------------------------------------------

# 16. Placeholder inventory

The following information is intentionally missing.

Codex must create replaceable placeholders or omit optional content as
instructed.

## Brand assets

-   `PLACEHOLDER: FINAL LOGO ASSET` if the logo is not already available
    in the repository.
-   `PLACEHOLDER: FAVICON`
-   `PLACEHOLDER: SOCIAL / OPEN GRAPH IMAGE`

## Company details

-   `PLACEHOLDER: COMPANY EMAIL`
-   `PLACEHOLDER: LINKEDIN COMPANY PAGE URL`
-   `PLACEHOLDER: COMPANY / TEAM CONTENT`

## Home imagery

-   `PLACEHOLDER: HERO PRODUCT VISUAL`
-   `PLACEHOLDER: DESKTOP + MOBILE PRODUCT VISUAL`

## Customers

-   `PLACEHOLDER: CASE STUDY 1`
-   `PLACEHOLDER: CASE STUDY 2`
-   Case-study cover images
-   Case-study screenshots
-   Customer logos if permitted
-   Testimonials if supplied later

## Contact

-   `PLACEHOLDER: CONTACT FORM DELIVERY`

## Legal

-   `PLACEHOLDER: PRIVACY POLICY`

Never fill these gaps with invented information.

------------------------------------------------------------------------

# 17. SEO content

Implement standard metadata per page.

## Home

### Title

**Cerato Systems --- Custom Software Built Around Your Business**

### Description

**Cerato Systems designs and builds custom operational software for
businesses that have outgrown spreadsheets, manual processes, and
disconnected tools.**

------------------------------------------------------------------------

## Customers

### Title

**Customers --- Cerato Systems**

### Description

**See how Cerato Systems turns complex business workflows into custom
operational software.**

------------------------------------------------------------------------

## Services

### Title

**Custom Software Services --- Cerato Systems**

### Description

**Custom operational platforms, business process automation, customer
and employee applications, integrations, and ongoing software
development.**

------------------------------------------------------------------------

## Company

### Title

**Company --- Cerato Systems**

### Description

**Cerato Systems builds custom software around the way businesses
actually operate.**

------------------------------------------------------------------------

## Contact

### Title

**Start a Project --- Cerato Systems**

### Description

**Tell Cerato Systems about the workflow, process, or operational
problem you want to improve.**

------------------------------------------------------------------------

## Case studies

Generate metadata from each case-study content object.

Do not invent customer names or metrics for metadata.

------------------------------------------------------------------------

# 18. Social sharing metadata

Support: - Open Graph title - Open Graph description - Open Graph
image - Twitter/X card metadata if the framework supports it

Image: `PLACEHOLDER: SOCIAL / OPEN GRAPH IMAGE`

Case studies should be able to specify their own social image later.

------------------------------------------------------------------------

# 19. Content and accessibility requirements

These are content/implementation requirements, not visual-design
overrides.

-   Use semantic page landmarks.
-   Use one clear H1 per page.
-   Maintain logical heading hierarchy.
-   All meaningful images need descriptive alt text.
-   Decorative imagery should not be announced unnecessarily.
-   Buttons must be buttons and links must be links.
-   Forms need associated labels and accessible validation messages.
-   Do not hide important information exclusively inside hover states.
-   The site must remain understandable without animation.
-   Case-study screenshots must have useful alt text describing the
    screen at a high level without exposing confidential information.

Follow the attached design-language file for the rest of the
accessibility and responsive requirements.

------------------------------------------------------------------------

# 20. Content rules

## Tone

Use: - concise language; - calm confidence; - concrete business
language; - technical language only when it adds meaning; -
sentence-case headings; - short paragraphs.

Avoid: - hype; - excessive superlatives; - exclamation marks; -
"revolutionary"; - "cutting-edge"; - "world-class"; - "game-changing"; -
"unlock your potential"; - generic outsourcing language; - generic
claims about "digital transformation"; - claiming Cerato is a large
agency.

## Important positioning rule

Do not make the website primarily about: - code; - frameworks; -
developer hours; - staff augmentation; - cheap outsourcing; - "we can
build anything"; - number of developers.

The website is about **understanding operations and building software
around them**.

------------------------------------------------------------------------

# 21. Claims that must NOT be invented

Until real information is provided, do not claim:

-   number of Cerato customers;
-   years Cerato Systems has existed;
-   number of projects completed;
-   revenue generated for customers;
-   percentages of time saved;
-   percentages of errors reduced;
-   customer satisfaction scores;
-   geographic reach;
-   team size;
-   certifications;
-   partnerships;
-   awards;
-   customer testimonials;
-   recognizable customer logos;
-   24/7 support;
-   guaranteed response times;
-   specific project starting prices.

If one of these would improve a layout, use an explicit placeholder or
omit it.

------------------------------------------------------------------------

# 22. Customer/case-study system requirements

The Customers page is important and should be built for growth from the
beginning.

Do not hard-code exactly two customer cards into page markup.

Create a content/data structure that can later support: - 2 case studies
now; - more case studies later; - anonymous customers; - named
customers; - optional customer logos; - optional testimonials; -
optional metrics; - different numbers of screenshots; - different
case-study section structures.

The Customers index should render from this data.

The individual case-study route should render from the same content
system.

If the project already uses a content solution, use it. Otherwise, a
typed local data/content structure is sufficient for the first version.

Do not introduce a CMS unless there is already one or it is clearly
necessary.

------------------------------------------------------------------------

# 23. Initial case-study placeholders

Create two draft records so the Customers page can be developed without
fake customer stories.

Example conceptual data only:

``` ts
[
  {
    slug: "case-study-one",
    status: "placeholder",
    title: "Case study coming soon",
    industry: "PLACEHOLDER",
    summary: "PLACEHOLDER: CASE STUDY 1 SUMMARY",
    featured: true
  },
  {
    slug: "case-study-two",
    status: "placeholder",
    title: "Case study coming soon",
    industry: "PLACEHOLDER",
    summary: "PLACEHOLDER: CASE STUDY 2 SUMMARY",
    featured: true
  }
]
```

The exact code shape can differ.

In production, if placeholder content is still present, it is preferable
to show a tasteful "Case study coming soon" state than invented customer
information.

------------------------------------------------------------------------

# 24. Analytics

`PLACEHOLDER: ANALYTICS`

Do not install an analytics vendor unless one is already specified by
the repository or supplied separately.

Structure the site so analytics can be added later.

Useful future events: - Start a project CTA click - See our work click -
Case-study open - Contact form started - Contact form submitted
successfully

------------------------------------------------------------------------

# 25. Performance/content handling

-   Optimize supplied images appropriately.
-   Do not load full-resolution case-study screenshots when a smaller
    responsive image is sufficient.
-   Reserve image space to avoid layout shift.
-   Lazy-load below-the-fold case-study imagery where appropriate.
-   Do not autoplay heavy video.
-   If product videos are added later, support a poster/fallback image.

Use the attached design-language file for visual implementation details.

------------------------------------------------------------------------

# 26. Suggested implementation order

1.  Global shell and navigation
2.  Home page content
3.  Services page
4.  Company page
5.  Contact page and validation
6.  Customers index
7.  Reusable case-study content model/template
8.  Footer
9.  Metadata/SEO
10. Placeholder asset wiring
11. Responsive/content QA
12. Accessibility QA
13. Final placeholder audit

------------------------------------------------------------------------

# 27. Final placeholder audit before launch

Before production launch, search the repository for:

``` text
PLACEHOLDER:
TODO
case-study-one
case-study-two
company.com
Jane Smith
coming soon
```

Review every result.

Some "coming soon" customer states may intentionally remain, but no
accidental placeholder should ship.

Also verify: - final logo exists; - favicon exists; - company email is
real; - contact form really delivers; - LinkedIn URL is correct if
displayed; - privacy policy is real; - Open Graph image exists; -
customer content is approved for public use; - screenshots contain no
confidential data.

------------------------------------------------------------------------

# 28. Final content map

``` text
HOME
├── Hero
├── The problem
├── What we build
├── Featured customer work
├── Built for complexity
├── Work from anywhere
├── How we work
├── Engineering / technology
└── Final CTA

CUSTOMERS
├── Hero
├── Case study 1 placeholder
├── Case study 2 placeholder
└── Final CTA

CASE STUDY TEMPLATE
├── Hero
├── Facts
├── Hero image
├── Challenge
├── Goal
├── Solution
├── Flexible content sections
├── Outcomes
├── Technology
├── Optional testimonial
├── Next case study
└── Final CTA

SERVICES
├── Hero
├── Operational platforms
├── Business process automation
├── Customer & employee applications
├── Integrations
├── Ongoing development
└── Final CTA

COMPANY
├── Hero
├── Philosophy
├── What matters to us
├── Optional team/company section
└── Final CTA

CONTACT
├── Hero
├── Project inquiry form
├── Success/error states
└── Email fallback

PRIVACY
└── Final legal copy placeholder
```

------------------------------------------------------------------------

# 29. Final instruction to Codex

Build the website as a serious B2B software company website whose
strongest message is:

> **Cerato Systems understands complicated business operations and turns
> them into custom software.**

Use the supplied `linear-inspired-design-language(1).md` file for all
visual decisions.

Use this document for content, page structure, navigation, CTAs,
placeholders, and functionality.

Do not invent proof.

Do not make Cerato Systems look larger than it currently is.

Do not turn the site into a generic software-agency template.

Do not overemphasize the technology stack.

Keep customer stories as the primary proof mechanism.

The final site should make the right prospect understand three things:

1.  **Cerato Systems understands operational complexity.**
2.  **Cerato Systems can build complete software around it.**
3.  **If my business has outgrown its current tools, I should start a
    conversation.**
