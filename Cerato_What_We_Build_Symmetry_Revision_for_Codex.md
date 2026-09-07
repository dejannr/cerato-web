# Cerato Systems — “What We Build” Symmetry & Illustration Sizing Revision

## Scope

Apply this revision **only to the four “What we build” capability cells** shown in the current implementation:

1. Operational platforms
2. Business process automation
3. Customer and employee applications
4. Integrations and connected systems

Do not redesign their visual language or change their content concept.

The current illustrations are good stylistically. The problem is **layout consistency**:

- the four illustration frames have different heights;
- the visual weight differs noticeably from cell to cell;
- headings begin at different vertical positions;
- the top row feels heavier/taller than the bottom row;
- the 2 × 2 grid therefore feels less deliberate than it should.

The goal of this revision is to make the entire block feel **architectural, balanced, and symmetrical** while preserving the existing illustrations.

---

# 1. Primary rule: all four illustration frames must have exactly the same outer height

On desktop, every capability illustration must use one shared fixed visual height.

Use a shared CSS variable/token:

```css
--capability-visual-height: 184px;
```

The exact implementation may differ, but **all four outer illustration containers must resolve to the same height**.

Recommended desktop target:

```css
height: 184px;
min-height: 184px;
max-height: 184px;
```

Do not allow the contents of any illustration to determine the outer frame height.

The four frames should visually form a perfect 2 × 2 matrix.

---

# 2. Why 184px

The current “Business process automation” visual is approximately the tallest and already feels proportionally correct relative to the cell width.

Use that visual as the height reference.

Do **not** make the other three illustrations shorter.

Do **not** shrink the automation visual merely to match the shortest current illustration.

Instead, give all four the same generous visual canvas and compose their internal content inside it.

---

# 3. The capability cell itself must use the same internal structure

Each of the four cells should follow the same vertical template:

```text
INDEX
↓
ILLUSTRATION
↓
TITLE
↓
DESCRIPTION
```

Implement every desktop cell using the same grid/flex structure rather than letting content flow independently.

Conceptually:

```css
.capability-cell {
  display: grid;
  grid-template-rows:
    auto
    var(--capability-visual-height)
    auto;
}
```

The title + description may be grouped into the final row.

Recommended structure:

```html
<article class="capability-cell">
  <div class="capability-index">01</div>

  <div class="capability-visual">
    ...
  </div>

  <div class="capability-copy">
    <h3>...</h3>
    <p>...</p>
  </div>
</article>
```

Do this consistently for all four.

---

# 4. Use identical vertical spacing in all four cells

The screenshot currently has slightly different perceived spacing because the graphics have different heights.

Normalize it.

Recommended desktop rhythm:

```text
cell top
  34–36px
index
  24–26px
illustration
  24px
title
  10–12px
description
cell bottom
```

Use the site's existing spacing tokens where possible.

The important requirement is not the exact pixel number but that **the same spacing values are reused for all four cells**.

Do not special-case individual cards unless absolutely necessary.

---

# 5. Align all illustration tops and bottoms

In each row:

- illustration 01 and 02 must start on exactly the same y-coordinate;
- illustration 01 and 02 must end on exactly the same y-coordinate;
- illustration 03 and 04 must start on exactly the same y-coordinate;
- illustration 03 and 04 must end on exactly the same y-coordinate.

More importantly, because all four cells use the same internal template, the **relative position of the illustration inside every cell must also be identical**.

The visual block should look like:

```text
01                        02
┌───────────────────┐     ┌───────────────────┐
│                   │     │                   │
│                   │     │                   │
│                   │     │                   │
└───────────────────┘     └───────────────────┘

Operational platforms     Business process automation
...

03                        04
┌───────────────────┐     ┌───────────────────┐
│                   │     │                   │
│                   │     │                   │
│                   │     │                   │
└───────────────────┘     └───────────────────┘

Customer...               Integrations...
```

The four rectangles must read as the same component family.

---

# 6. Do not stretch the inner illustrations unnaturally

Equal outer height does **not** mean every internal graphic should be vertically stretched.

The outer illustration frame is fixed at 184px.

The internal composition can use different layouts, but must be positioned deliberately inside that frame.

Use:

```css
.capability-visual {
  height: var(--capability-visual-height);
  position: relative;
  overflow: hidden;
}
```

Then compose inner content using one of:

- full-height layout;
- vertically centered layout;
- top/bottom aligned structure;

depending on the illustration.

The outer frame remains identical.

---

# 7. Specific treatment for each current illustration

## 01 — Operational platforms

Current visual is too short compared with 02.

Keep the three schedule rows, but allow the containing panel to fill the common 184px frame.

Recommended internal layout:

```text
TODAY
────────────────────────────

08:30   Delivery       Assigned

09:10   Installation   Assign to Team 2

10:45   Pickup         Assigned
```

Increase the internal vertical breathing room slightly.

Do not enlarge typography.

Use additional vertical padding and slightly more row height rather than scaling the entire graphic.

The illustration should feel calm and spacious.

---

## 02 — Business process automation

This is currently closest to the desired height.

Use it as the reference composition.

Do not substantially increase its information density.

Its existing structure works:

```text
NEW REQUEST                    Automatic
────────────────────────────────────────

Standard request                      1,250

✓ Customer verified                   Done
✓ Limit verified                      Done
✓ Required data complete              Done

────────────────────────────────────────
Ready for approval
```

Fit it cleanly inside the shared 184px frame.

If necessary, reduce tiny internal gaps by a few pixels rather than changing font size.

---

## 03 — Customer and employee applications

The visual currently feels shorter because the two nested interface cards occupy only part of the available height.

Keep the two-view concept.

Inside the common 184px frame:

- vertically center the pair of interface panels;
- allow the panels to become slightly taller;
- keep equal top and bottom breathing room;
- preserve the connection between them.

Recommended structure:

```text

    ┌─────────────────┐      ┌─────────────────────────┐
    │ Your request    │      │ REQUEST #024            │
    │                 │      │                         │
    │ Pickup          │ ───  │ Pickup      Tomorrow... │
    │ Tomorrow · 9:00 │      │ Confirmed               │
    │                 │      │ Assigned to Team 2      │
    │ Confirmed       │      │                         │
    └─────────────────┘      └─────────────────────────┘

```

Do not simply increase the outer padding around the existing tiny panels.

Use the additional space to make the inner cards themselves feel intentional and properly proportioned.

---

## 04 — Integrations and connected systems

This currently has the least vertical visual weight.

Do not add new concepts or more integrations.

Keep:

- Email
- Payment
- Existing ERP
- Custom system
- three event-log rows

But use the common 184px canvas more effectively.

Recommended composition:

```text
┌────────────┐
│ Email      │ ─┐
├────────────┤  │
│ Payment    │ ─┼──  Custom system
├────────────┤  │
│ Existing   │ ─┘
│ ERP        │      09:21  Payment received
└────────────┘      09:22  Record updated
                  09:22  Confirmation sent
```

Vertically center the integration source stack and event log together inside the frame.

Do not add empty decorative rows simply to create height.

The extra room should come from:
- better vertical centering;
- slightly more panel padding;
- slightly more spacing between the three source items;
- balanced whitespace above and below.

---

# 8. Equalize the four capability cells, not just the illustrations

At desktop widths where the section is a 2 × 2 grid, the four outer cells should also feel equal.

Use equal grid tracks:

```css
.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 1fr;
}
```

Each cell should stretch:

```css
.capability-cell {
  height: 100%;
}
```

Do not let the first row become significantly taller simply because one description wraps differently.

The 2 × 2 matrix should feel mathematically deliberate.

---

# 9. Copy area alignment

The titles should start at the same relative vertical position inside every card.

This matters as much as the graphic height.

After the illustration frame, use the same gap before the heading:

```css
gap after visual: 24px;
```

Then:

```text
Title
10–12px
Description
```

Do not move a title upward just because its graphic contains less content.

Do not use arbitrary negative margins.

---

# 10. Description area

Descriptions currently vary in line count.

That is fine.

Do not force the paragraph text itself to occupy the same number of lines.

Instead:

- align title baselines;
- maintain identical title-to-description spacing;
- let the description wrap naturally;
- use equal outer cell heights.

If useful, give the description area a small minimum height so neighboring cards preserve bottom rhythm.

For desktop, something roughly equivalent to two or three body-text lines is reasonable.

Do not truncate copy.

---

# 11. Horizontal sizing

The current screenshot already has good horizontal proportions.

Preserve the approximately full-width illustration treatment inside each cell.

All four visual containers should use:

```css
width: 100%;
```

and the same horizontal inset from the capability-cell edges.

Do not make one illustration narrower than another.

In particular:

- 03 should not look like two tiny floating cards inside a huge empty container;
- 04 should not feel visually compressed to the left.

Use the full internal canvas while preserving restrained whitespace.

---

# 12. Shared component requirement

Do not implement four unrelated wrappers.

Create one reusable illustration shell, e.g.:

```tsx
<CapabilityVisual>
  {visual}
</CapabilityVisual>
```

Conceptually:

```css
.capability-visual {
  width: 100%;
  height: var(--capability-visual-height);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-...);
  overflow: hidden;
  position: relative;
}
```

All four visuals must use this exact outer shell.

Any variation should happen **inside** it.

This prevents future drift.

---

# 13. Border and background consistency

The screenshot already has the right direction.

Preserve the existing design language.

Ensure all four illustration shells use exactly the same:

- border color;
- border opacity;
- radius;
- background;
- shadow treatment, if any;
- clipping behavior.

Do not make Automation brighter or Customer/Employee darker.

Differences should come from content, not container styling.

---

# 14. Visual density balance

After equalizing dimensions, check perceived density.

The goal is not only mathematical equality.

At a glance, none of the four should feel:

- empty;
- overcrowded;
- tiny;
- vertically compressed.

Target perceived density:

```text
01  medium
02  medium
03  medium
04  medium
```

The current implementation feels approximately:

```text
01  medium
02  high
03  low-medium
04  low
```

Correct this primarily through layout and spacing, **not by adding more concepts**.

---

# 15. Keep the design restrained

Do not solve the symmetry problem by adding:

- extra charts;
- additional status rows;
- more labels;
- decorative icons;
- gradients;
- large glows;
- filler graphs;
- meaningless data.

The current content is enough.

This is a **composition problem**, not a content problem.

---

# 16. Responsive rules

## Large desktop

At `>= 1024px`:

```text
2 columns × 2 rows
all illustration frames = 184px
equal cell heights
```

## Tablet

At approximately `768–1023px`:

Keep two columns if the existing design comfortably supports it.

Illustration height may reduce slightly through one shared token, e.g.:

```css
--capability-visual-height: 168px;
```

Again, all four must remain identical.

## Mobile

At the single-column breakpoint:

```text
1 column
```

Use one common mobile visual height, approximately:

```css
--capability-visual-height: 160px;
```

or whatever value best fits the existing type scale.

All four remain equal on mobile as well.

Do not retain 184px if that causes poor proportions on narrow screens.

The key rule is:

> one shared visual height per breakpoint.

---

# 17. Avoid fixed page-height hacks

Do not achieve symmetry by:

- setting a fixed height on the entire section;
- scaling the whole grid with transforms;
- using absolute positioning for the copy;
- clipping paragraph text;
- adding arbitrary blank spacer divs;
- hardcoding different margins per capability.

Use proper CSS grid/flex layout.

---

# 18. QA checks

After implementation, inspect the section at:

- 1440px;
- 1280px;
- 1024px;
- 768px;
- 430px;
- 390px.

At desktop, verify:

### Illustration geometry

- 01 height == 02 height == 03 height == 04 height.
- All illustration widths follow the same container rule.
- All four border radii match.
- All four illustration top/bottom edges align relative to their cards.

### Copy alignment

- 01 and 02 headings begin on the same horizontal line.
- 03 and 04 headings begin on the same horizontal line.
- The gap between illustration and title is identical.
- Title-to-description gap is identical.

### Grid balance

- left and right columns are equal width;
- top and bottom rows feel equally weighted;
- the central horizontal divider sits naturally between the rows;
- the central vertical divider cleanly divides equivalent cells.

### Visual balance

Blur your eyes / zoom the page out.

The four quadrants should read as **four equal pieces of one system**, rather than four individually composed cards.

---

# 19. Screenshot-specific correction

Use the current screenshot as the before-state.

The visible problems to correct are:

### 01
The illustration ends significantly earlier than 02.

Increase its illustration frame to the shared height and distribute its schedule rows within that canvas.

### 02
Use this illustration as the approximate height reference.

### 03
The pair of sub-panels is vertically shallow.

Give the common shell the same height and vertically center / proportion the two inner interfaces within it.

### 04
The integration visual is currently the shortest and feels top-heavy.

Give it the shared shell height and center the source stack + event log composition vertically.

### Overall
The title blocks should no longer appear at different heights because of illustration-size differences.

The section should become visibly more symmetrical without becoming more decorative.

---

# 20. Final acceptance criterion

The desktop section should feel like a precisely constructed **2 × 2 capability matrix**.

The observer should notice the four ideas, not four different card heights.

The final visual hierarchy should be:

```text
01 / 02 / 03 / 04
       ↓
four equal visual canvases
       ↓
four aligned headings
       ↓
four naturally wrapping descriptions
```

Preserve the existing illustration content and visual language.

**Do not redesign the graphics. Normalize their canvas, internal spacing, and cell geometry until the whole section is perfectly balanced.**
