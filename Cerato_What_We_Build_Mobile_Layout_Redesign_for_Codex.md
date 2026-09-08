# Cerato Systems — “What We Build” Mobile Layout Redesign for Codex
## Keep all four diagrams and desktop layout unchanged; redesign only the mobile section container/layout

### Scope

Apply this revision **only to the mobile layout of the homepage “What We Build” / four capabilities section**.

The four existing diagrams are good.

Do **not** redesign their content.

Do **not** change the desktop 2 × 2 section.

Do **not** change:
- section copy;
- capability titles;
- capability descriptions;
- capability numbering;
- diagrams themselves except minor sizing needed to fit the new mobile layout;
- desktop background/borders/grid.

The issue is the **mobile section architecture around the diagrams**, not the diagrams.

---

# 1. Diagnosis of the current phone screenshot

The current implementation appears to preserve too much of the desktop 2 × 2 matrix on mobile.

This creates a large dark-gray rectangular container behind all four capabilities.

Problems visible in the screenshot:

- the gray panel feels like one giant card;
- it removes the clean page rhythm established elsewhere;
- capability boundaries become ambiguous;
- `01`, `02`, etc. float in large empty areas;
- diagrams feel embedded in arbitrary boxes;
- title/description spacing is inconsistent;
- the next capability begins before the previous one has visually finished;
- the section feels extremely long and heavy;
- the background surface competes with the diagrams;
- the desktop grid logic no longer has a purpose once everything is one column;
- the section resembles a mobile settings/dashboard panel rather than an editorial marketing section.

The diagrams are **not the problem**.

The desktop matrix is **not the problem**.

The problem is preserving the desktop matrix's outer container/surface when the layout becomes a single column.

---

# 2. Main mobile principle

On mobile, completely dissolve the desktop 2 × 2 matrix.

The section should become four independent editorial capability blocks on the normal page background:

```text
01
Operational platforms
description
diagram

────────────────────────

02
Business process automation
description
diagram

────────────────────────

03
Customer and employee applications
description
diagram

────────────────────────

04
Integrations and connected systems
description
diagram
```

Or, preferably for stronger visual rhythm:

```text
01
diagram
Operational platforms
description

────────────────────────

02
diagram
Business process automation
description
```

Use the second ordering if it matches the current desktop information order.

The important point is:

> **No giant shared gray card around all four items on mobile.**

---

# 3. Remove the mobile outer panel

At the mobile breakpoint, remove the section-level:

- gray background fill;
- outer card border;
- outer card radius;
- desktop matrix border treatment;
- vertical divider;
- quadrant-style structure.

Conceptually:

```css
@media (max-width: 767px) {
  .capabilities-grid {
    background: transparent;
    border: 0;
    border-radius: 0;
  }
}
```

Use the normal site/page background.

The diagrams themselves may keep their individual dark UI surfaces.

---

# 4. Why this matters

The four capabilities are content sections, not four parts of one application interface.

On desktop, the 2 × 2 bordered matrix gives structure.

On mobile, vertical scrolling already provides structure.

Therefore the container should disappear and the **spacing between capability blocks should become the structure**.

This is a core responsive principle:

> preserve hierarchy, not desktop geometry.

---

# 5. Mobile capability block structure

Each capability should be its own normal-flow block.

Recommended DOM/layout:

```text
.capability-item

  .capability-number

  .capability-visual

  .capability-copy
    .capability-title
    .capability-description
```

No absolute positioning.

No fixed overall item height.

No grid-row equalization on mobile.

Each block is content-driven.

---

# 6. Recommended ordering

Use:

```text
number
↓
visual
↓
title
↓
description
```

This preserves the current visual relationship and gives each capability a repeatable rhythm.

Example:

```text
01

┌─────────────────────────────────┐
│ TODAY                           │
│ 08:30 Delivery        Assigned  │
│ 09:10 Installation      Team 2  │
│ 10:45 Pickup          Assigned  │
└─────────────────────────────────┘

Operational platforms

Bring people, workflows, business rules,
and operational data into one purpose-built
system.
```

Then breathing room + separator.

---

# 7. Capability number

The current number floats inside a large gray area.

Instead make it a small editorial marker.

Recommended:

```text
font-size: 10–11px
monospace if already used
muted tertiary color
```

Spacing:

```text
number
↓ 18–20px
visual
```

Do not give the number its own large vertical zone.

---

# 8. Diagram width

Each diagram should use the full available mobile content width:

```css
width: 100%;
max-width: 100%;
```

Keep page gutters:

```text
16px at standard phone widths
```

The diagram should not be inset an additional 16–20px inside a giant capability card.

This is currently wasting horizontal space.

Use the available width.

---

# 9. Diagram height

The existing diagrams are good, but they currently appear slightly too tall because the surrounding layout is heavy.

Use one consistent mobile visual height:

```css
--capability-visual-height-mobile: 150px;
```

Acceptable range:

```text
144–160px
```

All four must use the same outer visual height.

Do not exceed approximately 165px.

The diagram's internal content should vertically center within that canvas.

---

# 10. Diagram container treatment

The diagram itself may retain:

- dark surface;
- hairline border;
- restrained radius.

But avoid nested-card syndrome.

Do not render:

```text
large gray capability card
  → dark diagram card
     → inner UI card
```

Mobile should instead be:

```text
page background
  → diagram visual
     → inner conceptual UI
```

Only one meaningful surface hierarchy around the diagram.

---

# 11. Diagram internal padding

Recommended:

```text
12–14px
```

At <= 360px:

```text
10–12px
```

Do not shrink the actual diagram content excessively.

Use more of the available width.

---

# 12. Title placement

After each diagram:

```text
visual
↓ 20–24px
title
```

Title:

```text
22–24px
line-height: ~1.15–1.22
```

The current title is visually jammed against surrounding elements in places.

Give it deliberate separation.

---

# 13. Description placement

Use:

```text
title
↓ 10–12px
description
```

Description:

```text
15–16px
line-height: 1.55–1.65
```

Use normal text color hierarchy.

Do not allow the description to visually run into the next capability number.

---

# 14. Space between capability blocks

This is what replaces the gray matrix.

After description:

```text
description
↓ 40–48px
separator
↓ 40–48px
next number
```

Recommended total visual distance between items:

```text
~80–96px including separator spacing
```

This sounds large, but on a premium mobile marketing page it prevents the section from becoming one continuous slab.

---

# 15. Separators

Use one subtle full-content-width hairline separator between capabilities.

Example:

```css
border-top: 1px solid var(--hairline);
```

Do not box each capability.

Do not use a gray background strip.

Do not use thick section borders.

Separator opacity should be very low.

There should be no separator after the final capability unless required by the following section boundary.

---

# 16. First capability top spacing

After the section introduction copy:

```text
section intro
↓ 48–56px
01
```

The screenshot currently shows the first capability beginning too close to the preceding text and partly hidden near the sticky header region.

Ensure the section content remains in normal document flow.

No negative margins.

No sticky overlap.

---

# 17. Sticky header overlap bug

The supplied screenshot shows preceding section text very close to / partially obscured by the sticky header.

Audit scroll positioning and section spacing.

The sticky header must never visually cover normal content during initial layout.

Use appropriate top spacing.

For anchor navigation, if relevant:

```css
scroll-margin-top: calc(var(--header-height) + 24px);
```

Do not solve this by making the header non-sticky unless necessary.

---

# 18. Section introduction

Keep the existing “What We Build” heading and intro content exactly as-is.

On mobile:

```text
eyebrow
heading
intro
↓ 48–56px
capability 01
```

Do not place the intro inside the capability background panel.

There should be no panel.

---

# 19. Recommended full mobile section rhythm

Conceptually:

```text
WHAT WE BUILD

Systems designed around
the operation.

We build software for businesses...
...

            52px

01

[ Operational platforms diagram ]

            22px

Operational platforms

Bring people, workflows, business rules,
and operational data into one purpose-built
system.

            44px
────────────────────────────────────
            44px

02

[ Automation diagram ]

            22px

Business process automation

Replace repetitive manual work with structured
workflows that make important processes easier
to follow and control.

            44px
────────────────────────────────────
            44px

03

[ Customer / employee diagram ]

...

04

[ Integrations diagram ]

...
```

This should feel like four mini editorial sections.

---

# 20. Preserve desktop

At desktop/tablet widths where the 2 × 2 matrix works:

**do not change it.**

Keep:
- shared outer border;
- matrix;
- gray/dark section surface if currently approved;
- 2 × 2 geometry;
- equal rows;
- desktop diagram dimensions.

This specification applies only when the layout becomes one column.

---

# 21. Breakpoint

Recommended:

```css
@media (max-width: 767px)
```

At this breakpoint:

```text
2 × 2 matrix
→
four independent vertical blocks
```

If current tablet portrait layout also looks cramped, the independent layout may begin earlier, around:

```text
<= 820px
```

but do not change wider desktop unnecessarily.

---

# 22. Do not make each item a new card

Important:

Removing the outer gray panel does **not** mean replacing it with four separate gray cards.

Do not do:

```text
[ giant card for capability 1 ]

[ giant card for capability 2 ]

[ giant card for capability 3 ]

[ giant card for capability 4 ]
```

That would create the same problem four times.

Capability items should mostly live directly on the page background.

Only the illustration itself needs a visual surface.

---

# 23. Background

Use the normal Cerato near-black page background continuously through the section.

The section should visually integrate with the rest of the homepage.

Do not alternate gray slabs for every capability.

The hierarchy comes from:

- number;
- illustration;
- typography;
- spacing;
- separator.

---

# 24. Operational Platforms diagram

Keep its current content.

Do not redesign it.

Only ensure it fits the shared mobile canvas.

Use full width.

Maintain:

```text
TODAY
08:30 Delivery       Assigned
09:10 Installation   Team 2
10:45 Pickup         Assigned
```

The current visual itself is successful.

---

# 25. Business Process Automation diagram

Keep its current content.

Do not redesign it.

Maintain:

```text
NEW REQUEST
Standard request
verification checks
Ready for approval
```

Fit it into the same visual height as 01.

If necessary, reduce internal vertical gaps slightly.

Do not reduce readability.

---

# 26. Customer & Employee Applications diagram

Keep the approved current diagram.

Fit it into:

```text
same width
same outer visual height
same top/bottom visual padding
```

as 01 and 02.

Do not allow this capability to become taller because its diagram has different content.

Recompose only internal spacing if needed.

---

# 27. Integrations diagram

Keep the approved current diagram.

Same rules.

The four diagram **canvases** must align visually even though their internal content differs.

---

# 28. Equal visual canvases, unequal content blocks

Important distinction:

All four diagram containers:

```text
same height
same width
same outer treatment
```

But capability items themselves:

```text
height: auto
```

because descriptions/titles may wrap differently.

Do not force all four entire mobile capability sections to equal height.

That is a desktop grid concern, not a mobile concern.

---

# 29. Long title wrapping

`Customer and employee applications` and `Integrations and connected systems` may wrap.

That is fine.

Do not reduce title font size specifically for longer titles.

Use natural wrapping.

Keep title width at 100%.

Use:

```css
text-wrap: balance;
```

where appropriate.

---

# 30. Description width

Use full available text width.

Do not constrain description to the narrow width inherited from a desktop column.

On ~390px viewport:

```text
content width ≈ 358px
```

The description should use that width.

This will reduce unnecessary height.

---

# 31. Remove desktop cell padding on mobile

Desktop cells likely use generous 28–32px internal padding.

Do not retain that inside a now-full-width mobile matrix cell.

At mobile, capability item outer horizontal padding should be:

```text
0
```

because the page container already supplies 16px gutters.

This is important.

Avoid:

```text
16px page gutter
+ 24px cell padding
= 40px wasted on each side
```

The screenshot currently feels too narrow partly because of nested spacing.

---

# 32. Vertical padding

Do not use one giant padding value on the former grid container.

Instead use per-item rhythm.

Example:

```css
.capability-item {
  padding: 0;
}

.capability-item + .capability-item {
  margin-top: 44px;
  padding-top: 44px;
  border-top: 1px solid ...;
}
```

This is much cleaner.

---

# 33. Mobile background acceptance criterion

At a glance, the visitor should **not perceive one giant rectangle** containing all four capabilities.

They should perceive:

```text
one normal page section
containing four clearly separated ideas
```

This is the main goal.

---

# 34. Scroll experience

The section is naturally long because it contains four capabilities.

That is okay.

Do not try to shorten it using:

- carousel;
- accordion;
- tabs;
- horizontal swipe.

Instead make the long scroll pleasant through clean spacing and rhythm.

The user should always know when one capability ends and the next begins.

---

# 35. Optional number + title relationship

If the current `01` above the diagram feels too detached after removing the gray container, a subtle alternative is:

```text
01  Operational platforms

[ diagram ]

description
```

However, preferred first implementation remains:

```text
01
diagram
title
description
```

because it mirrors the approved desktop composition.

Only use the combined number/title treatment if visual QA shows the number feels orphaned.

---

# 36. No sticky capability elements

Do not make:
- numbers sticky;
- diagrams sticky;
- titles sticky.

This is a straightforward editorial scroll section.

---

# 37. No per-item animation dependency

Existing subtle diagram animation may remain.

Do not animate the whole capability block sliding dramatically into view.

If section reveal motion already exists, keep it restrained.

The layout must look complete in static screenshots.

---

# 38. Mobile width QA

Test:

```text
320
360
375
390
393
412
430
```

Verify:
- outer gray matrix panel is gone;
- no nested horizontal padding;
- diagrams use available width;
- all four diagrams have identical outer height;
- titles have sufficient top margin;
- descriptions have sufficient line-height;
- next number never collides with previous description;
- separators have balanced whitespace;
- no horizontal overflow;
- no sticky header overlap.

---

# 39. Screenshot QA

At 390px, capture:

### Screenshot A
Section intro + capability 01.

### Screenshot B
End of capability 01 + beginning of 02.

### Screenshot C
03.

### Screenshot D
04 + transition to next homepage section.

Review them as a continuous scroll.

There should be no point where two capability blocks visually merge.

---

# 40. Final instruction to Codex

The four diagrams are approved.

**Do not redesign them.**

The desktop 2 × 2 capability matrix is approved.

**Do not redesign desktop.**

For mobile only:

1. remove the giant shared gray panel;
2. remove the desktop matrix borders/geometry;
3. place all four capabilities directly on the normal page background;
4. make each capability an independent editorial block;
5. keep the order `number → diagram → title → description`;
6. use subtle horizontal separators and generous whitespace between blocks;
7. give all four diagrams the same ~150px mobile canvas height;
8. remove redundant nested horizontal padding;
9. use the full mobile content width;
10. never let the sticky header cover section content.

The mobile experience should feel like:

> **four clear ideas presented one after another**

not:

> **a desktop four-cell component stretched into one enormous vertical card.**

The diagrams provide the visual structure. The page background, typography, whitespace, and separators should provide the section structure.
