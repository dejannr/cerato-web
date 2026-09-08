# Cerato Systems — Mobile Website Specification for Codex
## Linear-inspired phone experience without changing any content

### Scope

This document defines how the **existing Cerato Systems website** must behave and feel on phones.

Do **not** rewrite, shorten, remove, or invent website content.

Do **not** change the desktop information architecture.

Do **not** change the existing visual design language.

Use the supplied Linear-inspired design-language file as the source of truth for:

- colors;
- typography character;
- surface hierarchy;
- borders;
- radius;
- spacing rhythm;
- motion character;
- iconography;
- tone.

This document only defines the **mobile adaptation**.

The target is not:

> desktop compressed until it fits.

The target is:

> the same website deliberately recomposed for a narrow viewport.

---

# 1. Research-derived mobile principles

The strongest parts of Linear's mobile marketing experience are:

- strong typography remains the dominant visual element;
- navigation becomes extremely compact;
- secondary navigation disappears behind a menu;
- layouts collapse to one clear reading column;
- visual complexity is reduced before typography is reduced;
- sections retain generous breathing room instead of becoming dense;
- UI demonstrations become focused crops or simplified compositions;
- dark surfaces and hairline borders remain consistent with desktop;
- major content remains full-width enough to feel immersive;
- touch targets become larger than their visual labels;
- mobile does not try to preserve desktop asymmetry literally.

However, do **not** copy Linear's weaknesses.

In particular:

- do not hard-crop diagrams so meaningful content disappears;
- do not allow visual text to become illegible;
- do not let a desktop illustration overflow beyond the viewport;
- do not create horizontal scrolling for normal page content;
- do not preserve desktop side-by-side structures when they stop reading clearly.

Cerato should inherit Linear's **discipline**, not its occasional mobile compromises.

---

# 2. Target viewport range

Design and QA explicitly for:

```text
320px
360px
375px
390px
393px
412px
430px
480px
```

Primary reference viewport:

```text
390 × 844
```

Also test landscape separately.

The mobile breakpoint for major layout collapse should remain approximately:

```css
@media (max-width: 767px)
```

Use intermediate adjustments where useful:

```text
<= 480px
<= 390px
<= 360px
```

Do not create dozens of arbitrary breakpoints.

---

# 3. Mobile page container

Use one consistent mobile gutter.

Default:

```css
.page-container {
  width: 100%;
  padding-inline: 16px;
}
```

For 430–767px, 20px may be used if the existing system benefits from it.

Recommended:

```css
@media (min-width: 430px) and (max-width: 767px) {
  .page-container {
    padding-inline: 20px;
  }
}
```

Never reduce page gutter below:

```text
16px
```

except for intentionally full-bleed visual canvases.

---

# 4. Full-bleed visual rule

Some illustrations may visually extend to the viewport edges.

If used:

- text must remain inside the 16px content gutter;
- meaningful card content must also stay inside a safe zone;
- only background/grid/decorative treatment may bleed;
- no readable text may be clipped by the viewport.

Example:

```text
| viewport edge                            viewport edge |
|   16px | readable visual content | 16px              |
| background grid may continue edge-to-edge             |
```

---

# 5. Mobile typography

The mobile site should preserve the same typographic confidence as desktop.

Do not make headings small merely because the viewport is narrow.

## Hero title

Use approximately:

```css
font-size: clamp(42px, 11.5vw, 48px);
line-height: 0.98–1.02;
letter-spacing: -0.022em;
font-weight: 510;
```

For 320–360px:

```css
font-size: 40–42px;
```

Avoid more than roughly:

```text
4–5 hero lines
```

If the title wraps awkwardly:

1. slightly adjust max-width;
2. use balanced wrapping;
3. slightly reduce font size;
4. do not manually insert arbitrary `<br>` elements unless the desktop copy already requires them.

Use:

```css
text-wrap: balance;
```

where supported.

---

# 6. Section headings

Large mobile section headings:

```css
font-size: clamp(32px, 9vw, 38px);
line-height: 1.04–1.08;
letter-spacing: -0.022em;
font-weight: 510;
```

Feature/card headings:

```css
font-size: 22–24px;
line-height: 1.2–1.3;
font-weight: 590;
```

Do not let all heading levels collapse into similar sizes.

---

# 7. Body typography

Primary body:

```css
font-size: 16px;
line-height: 1.55–1.65;
```

Secondary body:

```css
font-size: 15px;
line-height: 1.55–1.6;
```

UI/demo text:

```css
font-size: 11–13px;
```

Micro metadata:

```css
font-size: 10–11px;
```

Do not render meaningful illustration text below approximately:

```text
10px CSS pixels
```

If a desktop diagram cannot fit without doing that, simplify/recompose it.

---

# 8. Section spacing

Desktop uses large 96px+ rhythm.

On mobile, preserve generosity but reduce it.

Recommended:

```text
major section top/bottom: 72–88px
related subsections:      48–64px
heading → body:           16–20px
body → CTA:               24–28px
copy → illustration:      32–40px
```

For dense pages like case studies:

```text
section separation: 64–80px
```

Do not reduce the page to 32px between every section.

The mobile site should still feel premium and unhurried.

---

# 9. Header / navigation

The mobile header should be compact and calm.

## Structure

```text
Cerato logo                         Menu button
```

Do not keep desktop navigation links visible.

Do not show:

- Customers
- Services
- Company
- Start a project

all simultaneously in the mobile top bar.

Use a menu below 768px.

---

# 10. Header dimensions

Recommended:

```css
height: 56–64px;
```

Horizontal padding should align with the page gutter.

Logo should remain visually modest.

The header must not become a giant floating pill.

Keep it visually quiet.

---

# 11. Header positioning

Preferred:

```css
position: sticky;
top: 0;
```

Use the existing dark canvas/surface with subtle transparency only if already aligned with the design language.

If using backdrop blur:

- keep it subtle;
- provide an opaque fallback;
- avoid obvious glassmorphism.

On scroll, a 1px lower border may become visible.

---

# 12. Mobile menu button

Touch target:

```text
minimum 44 × 44px
```

Visible icon can remain smaller:

```text
18–20px
```

Do not use three oversized thick bars.

Use a restrained icon matching the existing icon system.

Provide:

```html
aria-label="Open menu"
aria-expanded="..."
```

---

# 13. Mobile menu

Use a full-width dropdown/overlay beneath the header.

Preferred behavior:

- dark same-canvas background;
- no unrelated decorative graphics;
- one link per row;
- large comfortable tap areas;
- subtle separators;
- primary CTA clearly separated.

Content remains:

```text
Customers
Services
Company
Start a project
```

Optionally include Contact only if that is already part of existing navigation logic.

Do not invent new links.

---

# 14. Mobile menu sizing

Each navigation row:

```text
min-height: 52–56px
```

Link type:

```text
17–18px
```

Primary CTA:

```text
44–48px minimum height
```

The menu should not feel like desktop nav wrapped vertically.

It should feel designed for touch.

---

# 15. Hero section on mobile

Keep the exact current content.

Recommended sequence:

```text
optional eyebrow
hero title
supporting paragraph
primary CTA
secondary CTA
hero illustration
```

Do not put the illustration beside text.

Everything becomes one column.

---

# 16. Hero vertical rhythm

Approximate:

```text
header bottom
↓ 64–88px
eyebrow
↓ 16px
hero title
↓ 20–24px
supporting paragraph
↓ 28–32px
CTA group
↓ 48–56px
hero illustration
```

Avoid the desktop-sized empty gap before the hero on very small screens.

Still preserve enough top breathing room that the hero does not feel cramped beneath the header.

---

# 17. Hero text alignment

Preserve the existing intended alignment.

If desktop hero is centered, mobile may remain centered.

Do not switch to left alignment arbitrarily unless the existing implementation already does so.

For centered hero:

```css
max-width: 34rem;
margin-inline: auto;
text-align: center;
```

Paragraph:

```css
max-width: 34ch;
margin-inline: auto;
```

This avoids very long mobile lines.

---

# 18. Hero CTAs

For phone widths:

Preferred at >= 375px:

```text
[ Start a project ] [ See our work ]
```

only if both fit comfortably.

Otherwise:

```text
[ Start a project           ]
[ See our work              ]
```

Recommended rule:

- allow side-by-side when no label wraps;
- switch to full-width stacked buttons below approximately 360–375px.

Touch height:

```text
44–48px
```

Button text must never wrap.

---

# 19. Hero diagram — MOBILE-SPECIFIC RECOMPOSITION

The desktop hero visual must **not** be scaled down.

Current content remains:

- Spreadsheet
- Message
- Manual note
- Request #024
- Activity

On mobile, change only layout.

## Mobile composition

Use:

```text
Spreadsheet
    ↓
Message
    ↓
Manual note

[ subtle separation ]

REQUEST #024

Activity
```

But do not use visible arrows.

The vertical reading order is sufficient.

---

# 20. Hero diagram source cards

Use a clean stacked source group.

All source cards:

```css
width: 100%;
height: auto;
```

Do not use horizontal staggering large enough to cause overflow.

A subtle stagger is allowed:

```text
Spreadsheet: 0px
Message:     10px
Manual note: 0px
```

Only if the resulting width remains within the safe area.

Preferred for <= 390px:

```text
no stagger
```

Clarity is more important.

---

# 21. Hero diagram source card content

Preserve current conceptual information but ensure every line is visible.

Spreadsheet:

```text
Spreadsheet                         #024

Customer              Status
M. Parker             Pending

Requested
Tomorrow
```

Message:

```text
Message                             #024

Can we move the booking
to tomorrow at 08:30?
```

Manual note:

```text
Manual note                         #024

Call driver
Check payment
```

No clipping.

No fixed card height.

---

# 22. Hero diagram Request card

Use the full content width.

```css
width: 100%;
```

Do not squeeze desktop columns excessively.

Convert each row to a robust two-column structure:

```text
Customer
M. Parker

Requested change
Tomorrow · 08:30

Assignment
Team 2 · Ready

Payment
Verified

Driver
D. Williams · Assigned
```

At <= 360px, labels may stack above values.

Do not allow values to become tiny merely to retain a desktop row layout.

---

# 23. Hero diagram Activity

On mobile, place Activity below Request.

Use:

```text
Activity

08:27  Request received
08:29  Driver assigned
08:30  Payment verified
```

Do not overlap it with the Request card.

No floating cards on mobile.

---

# 24. Hero illustration mobile canvas

Desktop uses a fixed visual canvas.

Mobile should be:

```css
height: auto;
```

with a subtle background grid behind the full stack.

Padding:

```text
20–24px
```

Do not create a 600px-tall empty grid.

The canvas height should be determined by content.

---

# 25. Hero illustration motion on mobile

Use less motion than desktop.

If animated:

- highlight Spreadsheet `Tomorrow`;
- highlight Message `tomorrow at 08:30`;
- highlight Request `Tomorrow · 08:30`;
- show `Updated`.

Do not animate card positions.

Do not use moving connector dots.

Do not use parallax.

On touch devices, hover-only concepts must not be required.

---

# 26. “The problem” section mobile structure

Desktop structure:

```text
left eyebrow / heading / text / visual
```

Mobile becomes:

```text
The problem
heading
body paragraphs
problem illustration
bold closing statement
```

or:

```text
The problem
heading
body paragraphs
bold closing statement
problem illustration
```

Choose one consistent DOM order.

Preferred:

```text
eyebrow
heading
copy
illustration
closing line
```

because the closing line then acts as the conclusion of both text and visual.

---

# 27. Problem illustration mobile

Do **not** keep three cards in one row.

Use:

```text
Spreadsheet      Message
        Notes
```

only at >= 390px if each remains readable.

For <= 375px, prefer:

```text
Spreadsheet
Message
Notes

3 sources · 2 different times

ORDER 184
Thursday · 10:30
Confirmed
```

All cards use full width or carefully sized two-column grid.

No horizontal scroll.

---

# 28. Problem visual typography

Ensure:

```text
source labels: 10–11px
record labels: 11–12px
warning:       10–11px
```

The conflict:

```text
3 sources · 2 different times
```

must be clearly readable.

Do not shrink it into micro text.

---

# 29. What We Build section on mobile

Desktop 2 × 2 matrix becomes:

```text
01
visual
Operational platforms
description

divider

02
visual
Business process automation
description

divider

03
visual
Customer and employee applications
description

divider

04
visual
Integrations and connected systems
description
```

Use one column.

Do not preserve the central desktop grid divider.

---

# 30. What We Build visual heights

All four visuals must remain equal height on mobile.

Use one shared token:

```css
--capability-visual-height-mobile: 160px;
```

Reasonable range:

```text
152–176px
```

Choose the exact value based on current implementation, but all four must match.

Do not let each visual have its own outer height.

---

# 31. What We Build card spacing

Recommended mobile cell:

```text
index
↓ 20–24px
visual
↓ 24px
title
↓ 10–12px
description
↓ 48–56px / divider
```

Do not compress the four capabilities into a dense accordion unless explicitly requested later.

The content should remain visible.

---

# 32. Operational platform visual on mobile

Keep three rows but simplify horizontally.

Example:

```text
TODAY

08:30  Delivery
       Assigned

09:10  Installation
       Team 2

10:45  Pickup
       Assigned
```

At narrow widths, status may stack under task name.

Do not force a tiny desktop table.

---

# 33. Automation visual on mobile

Keep:

```text
NEW REQUEST

Standard request
1,250

✓ Customer verified
✓ Limit verified
✓ Required data complete

Ready for approval
```

Use one clear column.

Avoid three right-aligned `Done` labels if they make the visual cramped.

The checkmark already communicates completion.

If `Done` remains, ensure there is space.

---

# 34. Customer / employee applications visual mobile

Desktop two views can remain side by side only if readable.

Preferred on phone:

```text
Customer view
[compact mobile-like panel]

       ↓ conceptual relationship

Internal view
[compact operation panel]
```

No arrow required.

Use vertical stacking.

The matching `Request #024` is enough to communicate the relation.

---

# 35. Integrations visual mobile

Do not preserve a desktop left/right layout.

Use:

```text
Email      Payment      Existing ERP
          [compact tags]

Custom system

09:21 Payment received
09:22 Record updated
09:22 Confirmation sent
```

The three external sources can be a 3-column row of compact chips/cards if readable.

At <= 360px:

```text
Email
Payment
Existing ERP
```

may wrap into 2 + 1.

No horizontal overflow.

---

# 36. Featured Customers mobile

Case-study cards become single column.

Each card:

```text
cover
industry / eyebrow
title
summary
facts
Read case study
```

Do not put two case studies side by side on phone.

Visual cover should use:

```css
aspect-ratio: approximately 16 / 10 or 4 / 3;
width: 100%;
```

Use the actual established case-study asset ratio where possible.

---

# 37. Case-study screenshots on mobile

Do not shrink large desktop application screenshots until their content is unreadable.

Use one of:

1. mobile-specific crop focused on the important interface area;
2. responsive device composition;
3. full-width image with intentional clipped context but no meaningful text cut off;
4. tap-to-open/fullscreen image viewer if already in project scope.

Do not introduce horizontal page scrolling.

---

# 38. Built for Complexity mobile

Keep the same concept:

```text
simple action
↓
hidden checks
↓
result
```

Use one vertical card.

Example:

```text
ASSIGN

Vehicle
Bus 12

Driver
D. Jovanović

[ Assign ]

────────────────

✓ Driver available
✓ Vehicle available
✓ Capacity valid
✓ No schedule conflict

Assignment created
```

No side-by-side validation network.

No connector graph.

Outer visual is content-driven if the current fixed desktop height would clip this.

---

# 39. How We Work mobile

Keep all content.

Present stages vertically:

```text
01 Understand
short copy

02 Design
short copy

03 Build
short copy

04 Evolve
short copy
```

Use a subtle vertical guide or separators if desired.

Do not use a horizontal stepper that requires tiny text.

Do not use swipe-only interaction.

---

# 40. Engineering mobile

Desktop layer stack remains a layer stack.

Use full width:

```text
Interfaces
Customer · Employee · Operations

Application
Product logic · APIs

Business rules
Workflows · Validation

Data & integrations
Database · External services
```

Keep layers vertical.

Technology labels may wrap naturally below.

Do not attempt to show a desktop architecture diagram.

---

# 41. Final CTA mobile

Use a strong typography-only ending.

Do not add a large illustration.

Recommended:

```text
heading
supporting copy
full-width Start a project CTA
optional secondary route
```

Primary CTA:

```text
width: 100% on <= 390px
height: 48px
```

---

# 42. Services page mobile

All existing content remains.

Structure:

```text
hero
service 1
service 2
service 3
service 4
ongoing development
closing CTA
```

Each service becomes a full-width block.

If desktop uses side-by-side label/content columns:

mobile:

```text
service number / eyebrow
heading
body
examples
```

Do not retain narrow left labels beside body copy.

---

# 43. Services examples

If examples are currently inline/columns, wrap naturally.

Preferred:

```text
Scheduling
Assignments
Records
Inventory / resources
Role workflows
Reports / exports
```

Use subtle rows/chips only if already in design language.

Do not turn them into a dense tag cloud.

---

# 44. Company page mobile

Keep:

- hero;
- philosophy;
- callout;
- principles;
- optional team placeholder/section;
- closing CTA.

Large philosophy statements should remain visually strong.

Do not make them tiny to fit one line.

Allow 3–5 mobile lines.

---

# 45. Customers page mobile

Use single-column customer cards.

Hero copy should have comfortable reading measure:

```css
max-width: 34ch;
```

Case-study facts may be:

```text
label
value

label
value
```

instead of a multi-column fact bar.

Do not reduce fact type below readable size.

---

# 46. Case-study detail page mobile

Preserve all content sections.

Recommended order:

```text
Back to Customers
industry / eyebrow
title
summary
facts
hero image
Challenge
Goal
Solution
flexible sections
Outcomes
Technology
optional testimonial
next case study
CTA
```

Do not change semantic order to imitate desktop visuals.

---

# 47. Case-study facts mobile

Desktop facts row becomes:

```css
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
```

At <= 360px:

```css
grid-template-columns: 1fr;
```

Avoid 3–4 tiny columns.

---

# 48. Case-study text width

Do not let body text span the full visual width at 430px if it becomes tiring.

Within the 16–20px gutter, this is naturally acceptable.

For quotes/callouts, maintain stronger vertical spacing.

---

# 49. Contact page mobile

Form becomes one column.

All fields:

```text
width: 100%
min-height: 48px
```

Textarea:

```text
min-height: 140–160px
```

Labels must remain visible.

Do not rely only on placeholders as labels.

If current implementation uses visible labels, preserve them.

---

# 50. Contact form context choices

If using checkboxes, radio options, or selectable project-context chips:

touch target:

```text
minimum 44px
```

Allow wrapping.

Do not create horizontally scrolling chip rows.

---

# 51. Footer mobile

Desktop multi-column footer becomes a structured stack.

Preferred:

```text
Cerato logo
Custom software built around how your business works.

Customers
Services
Company
Contact

Privacy

email
LinkedIn

© current year Cerato Systems
```

Use spacing groups rather than one long dense list.

Do not center everything unless the current design system consistently does so.

Left alignment will usually read better for utility links.

---

# 52. Footer spacing

Recommended:

```text
top padding: 64–72px
bottom padding: 32–40px
group gap: 32–40px
link row gap: 12–16px
```

---

# 53. Borders on mobile

Maintain 1px hairline separators.

Avoid putting every mobile section inside its own rounded card.

The website should still feel spacious and editorial.

Use surfaces only where they communicate hierarchy.

---

# 54. Radius

Keep the existing restrained radius system.

Do not increase radii because the UI is on a phone.

Cards should still feel like the desktop family.

---

# 55. Touch targets

Every interactive element must have:

```text
minimum effective target: 44 × 44px
```

This applies to:

- nav menu button;
- buttons;
- footer links;
- case-study links;
- form controls;
- icon buttons;
- disclosure controls.

A text link may visually be smaller, but its tappable region should remain comfortable where practical.

---

# 56. Hover states on touch

Do not require hover to reveal:

- labels;
- CTA meaning;
- diagram relationships;
- customer information;
- form affordances.

Use:

```css
@media (hover: hover) and (pointer: fine)
```

for hover-only enhancements.

Touch users must get the full meaning in the resting state.

---

# 57. Active states

On touch:

- buttons may slightly change surface/opacity on press;
- no dramatic scale;
- no bouncy spring;
- no long delayed state.

Keep interaction fast and precise.

---

# 58. Motion on mobile

Mobile motion should be **reduced relative to desktop**.

Use motion primarily for:

- menu opening;
- subtle diagram state transitions;
- page element reveal if already part of system;
- status changes.

Avoid:

- strong parallax;
- scroll-jacking;
- large transforms;
- multiple simultaneous ambient loops;
- expensive blur animations;
- continuously moving grids.

---

# 59. Reduced motion

Honor:

```css
@media (prefers-reduced-motion: reduce)
```

Disable:

- diagram loops;
- animated transitions that are not essential;
- parallax;
- auto-moving visual accents.

Keep meaningful final states visible.

---

# 60. Scroll behavior

No section should require horizontal scrolling.

Global QA:

```css
html,
body {
  max-width: 100%;
  overflow-x: clip;
}
```

But do **not** use this as a way to hide broken children.

Fix the children.

No meaningful component should extend outside the viewport.

---

# 61. Diagram overflow rule

For every mobile diagram:

```text
NO:
positioned child extending beyond visual shell
text clipped by overflow
negative x offsets creating viewport overflow
fixed desktop widths
transform: scale() used as responsive strategy
```

Use responsive internal layout.

---

# 62. Diagram card rule

All conceptual cards on mobile:

```css
min-width: 0;
max-width: 100%;
box-sizing: border-box;
```

Text:

```css
overflow-wrap: anywhere;
```

only where IDs/technical strings need it.

Normal prose should wrap naturally.

---

# 63. Mobile diagram hierarchy

Every diagram should have **one obvious dominant object**.

Hero:
`Request #024`

Problem:
`resolved ORDER 184`

Operational platform:
`active assignment row`

Automation:
`verification/result`

Customer/employee:
`shared request`

Integrations:
`Custom system event log`

Complexity:
`Assign action/result`

Engineering:
`four system layers`

Do not make all diagram cards equal prominence.

---

# 64. Mobile diagram density

Desktop can reward close inspection.

Mobile should be less dense.

Remove **decorative secondary detail first**.

Do not remove required website content.

Inside diagrams, conceptual microcopy can be simplified as long as the same idea remains.

Target:

```text
2–5 primary visual objects per diagram
```

Avoid more than:

```text
~12 meaningful micro-labels visible at once
```

where possible.

---

# 65. Mobile illustration backgrounds

Subtle grids are allowed.

On mobile:

- reduce grid opacity;
- increase grid cell size slightly if needed;
- do not let dense grid lines create visual noise;
- fade grid at the edges;
- do not animate the grid.

The content must remain the protagonist.

---

# 66. Mobile performance

Avoid making phone rendering heavier than desktop.

Requirements:

- no heavy canvas animation for diagrams;
- prefer CSS/SVG;
- lazy-load below-the-fold images;
- use responsive `sizes`;
- do not load desktop-only large image assets on small screens if a smaller alternative exists;
- avoid autoplay video;
- avoid multiple blur-heavy layers.

---

# 67. Mobile images

Use:

```css
width: 100%;
height: auto;
```

unless intentional aspect-ratio container exists.

Always reserve layout space to prevent CLS.

Do not stretch screenshots.

Use `object-fit` intentionally.

---

# 68. Forms and mobile keyboards

Use correct input types:

```text
email -> type="email"
website -> type="url"
name -> autocomplete="name"
company -> autocomplete="organization"
email -> autocomplete="email"
```

This improves phone keyboard behavior.

Do not disable zoom.

---

# 69. Never disable user scaling

Do not use:

```html
user-scalable=no
maximum-scale=1
```

The viewport should allow browser zoom.

---

# 70. Safe areas

For modern phones with notches / home indicators:

Footer or fixed overlays should account for:

```css
env(safe-area-inset-bottom)
```

If header/menu is fullscreen, also account for:

```css
env(safe-area-inset-top)
```

Do not add excessive safe-area padding when not needed.

---

# 71. Menu scroll locking

When mobile menu is open:

- prevent background page scroll;
- menu itself may scroll if content exceeds viewport;
- retain current scroll position when closing;
- Escape should close on keyboard-capable devices;
- focus should return to menu trigger.

---

# 72. Accessibility

Mobile does not reduce accessibility requirements.

Ensure:

- color contrast remains readable;
- buttons have accessible names;
- menu has correct state;
- focus visible;
- heading hierarchy unchanged;
- diagrams that convey meaning have useful text/ARIA treatment;
- decorative visuals are hidden from assistive tech where appropriate.

---

# 73. Viewport-specific copy rule

Do not shorten marketing copy for phone.

The user explicitly wants the same content.

Therefore:

- preserve all headings;
- preserve all paragraph copy;
- preserve all service descriptions;
- preserve all customer/case-study content;
- preserve all CTAs.

Only reflow.

The only simplification allowed is **inside purely conceptual diagrams**, where decorative/example microcopy may be reorganized to fit.

Do not change the business message.

---

# 74. No mobile carousel as a layout shortcut

Do not convert content sections into swipe carousels just because phone width is limited.

Avoid carousels for:

- What We Build;
- Services;
- How We Work;
- customer case studies.

Use vertical scrolling.

A phone page can be long.

Long is better than hidden.

---

# 75. No horizontal scroll cards

Do not use `overflow-x: auto` for normal section cards.

Linear-style mobile polish comes from strong vertical composition, not from forcing desktop rows into swipe strips.

---

# 76. Mobile rhythm between text and visuals

When a section contains copy + visual:

Desktop may use side-by-side.

Mobile always follows:

```text
eyebrow
heading
body
visual
optional supporting copy / CTA
```

Recommended copy-to-visual gap:

```text
32–40px
```

Do not put the visual immediately against body copy.

---

# 77. Section labels / eyebrows

Desktop side-rail labels such as:

```text
The problem
```

must become ordinary top labels on mobile.

Use:

```text
13–15px
secondary text
```

Then:

```text
16–20px gap
```

to heading.

Do not reserve an empty side column.

---

# 78. Desktop grid borders on mobile

If desktop sections use a 2 × 2 matrix with central borders:

On mobile:

- remove central vertical border;
- use horizontal separators between stacked items;
- do not keep rectangular quadrants with awkward partial borders.

For What We Build:

```text
item
----------------
item
----------------
item
----------------
item
```

Outer border may remain if it works visually, but inspect carefully.

---

# 79. Mobile shadows

Keep shadows minimal.

Dark UI should rely on:

- surface difference;
- border;
- spacing;
- contrast.

Do not introduce larger mobile shadows to separate stacked cards.

---

# 80. CTA consistency

Primary `Start a project` must behave consistently across pages.

Mobile:

```text
44–48px height
clear text
no wrapping
```

Where it is the final major CTA:

```text
width: 100%
```

is preferred.

In header/menu it may remain content-width if the composition supports it.

---

# 81. Link affordance

Inline links remain visually clear.

Do not rely solely on hover underline.

Where link has arrow:

```text
See our work →
Read case study →
Explore our services →
```

arrow should remain visible on mobile.

---

# 82. Customers / case-study navigation

`Back to Customers` must have comfortable tap target.

`Next case study` should become:

```text
Next customer story
title
→
```

full-width block.

Do not place tiny left/right navigation arrows at screen edges.

---

# 83. Empty placeholders on mobile

If case studies are still placeholders:

- do not render giant blank image boxes;
- use tasteful placeholder surface with clear `Case study coming soon`;
- preserve the intended card size;
- no fake screenshot.

---

# 84. Mobile breakpoint behavior summary

## >= 768px
Tablet rules from existing design system.

## 430–767px
Single-column marketing layout.
20px horizontal gutters where appropriate.
Hero ~46–48px.
Visuals simplified.

## 375–429px
16px gutters.
Hero ~42–46px.
Stack most CTA groups if needed.
Diagrams fully mobile-specific.

## 320–374px
16px gutters.
Hero ~40–42px.
All CTA groups stack.
Diagram rows become vertical.
No two-column fact grids where readability suffers.

---

# 85. Orientation change

Do not assume width only at page load.

Layouts should respond cleanly when phone rotates.

Avoid JS calculations that permanently lock diagram sizes.

Prefer CSS responsive layout.

---

# 86. QA — no overflow

At each test width:

```text
320
360
375
390
393
412
430
480
```

verify:

- no horizontal scrollbar;
- no clipped card;
- no text outside card;
- no illustration beyond viewport;
- no offscreen CTA;
- no menu overflow;
- no fixed-width desktop component.

This is a release-blocking criterion.

---

# 87. QA — typography

Verify:

- hero remains visually powerful;
- no orphaned one-word lines where avoidable;
- body line length feels comfortable;
- no microcopy becomes illegible;
- button labels never wrap;
- section titles do not collide with viewport edges.

---

# 88. QA — touch

Verify on real/touch emulation:

- menu button is easy to tap;
- CTAs >= 44px;
- form inputs >= 44px;
- case-study cards do not rely on tiny inline links;
- no hover-only information;
- no accidental tap targets closer than roughly 8px where confusion is likely.

---

# 89. QA — diagrams

For every diagram:

Ask:

1. Is the main idea understandable within 2 seconds?
2. Is every meaningful text label readable?
3. Does any card overlap another?
4. Is any content clipped?
5. Is this a true mobile composition rather than a shrunk desktop diagram?
6. Is there one dominant object?
7. Can decorative detail be removed to improve clarity?
8. Does the static state work without animation?

If any answer fails, revise.

---

# 90. QA — page-by-page

Check all routes:

```text
/
 /customers
 /customers/[case-study]
 /services
 /company
 /contact
 /privacy
```

Do not only optimize the homepage.

---

# 91. Mobile design review screenshots

Before considering the mobile implementation complete, capture screenshots at:

```text
390 × 844
430 × 932
375 × 812
360 × 800
```

For the homepage, capture:

1. header + hero;
2. hero diagram;
3. problem section;
4. What We Build;
5. Customers;
6. Complexity;
7. How We Work;
8. Engineering;
9. final CTA + footer.

Inspect them as static compositions.

If something only looks correct while scrolling in DevTools, it is not polished enough.

---

# 92. Important Linear-inspired lesson

The mobile site should preserve the **feeling** of the desktop site:

- confident typography;
- dark calm canvas;
- restrained surfaces;
- strong visual hierarchy;
- large readable content;
- deliberate whitespace;
- subtle motion;
- precise borders;
- simple navigation.

It should **not** preserve desktop geometry.

That distinction is critical.

---

# 93. Final instruction to Codex

Do not treat mobile as a final responsive pass.

Implement it as a deliberate second composition of the same website.

Keep **all Cerato Systems content exactly the same**.

For every desktop multi-column section:

1. identify the reading hierarchy;
2. convert it to one vertical phone narrative;
3. preserve typography strength;
4. simplify the visual before shrinking it;
5. ensure all diagram content fits;
6. ensure every interactive target works by touch;
7. preserve the Linear-inspired dark, precise, understated visual language.

Most importantly:

> **No diagram on mobile may be implemented by simply scaling the desktop diagram down.**

Hero, Problem, What We Build, Complexity, and Engineering must each have explicit mobile layout rules as defined above.

The finished site should feel like Cerato was designed for the phone from the beginning, not adapted afterward.
