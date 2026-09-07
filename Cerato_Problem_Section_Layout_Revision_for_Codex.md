# Cerato Systems — “The Problem” Section Layout & Illustration Balance Revision

## Scope

Apply this revision **only to the homepage section**:

**The problem**

with the heading:

# Your business shouldn't run on workarounds.

Do not rewrite the section copy.

Do not redesign the illustration concept.

Keep the current visual idea:

- three conflicting information sources;
- one small warning/status line;
- one resolved / confirmed record.

The current content concept is correct.

The issue is **composition and scale**.

---

# 1. Current problem visible in the screenshot

The current section has good typography and a strong heading, but the right-side illustration is too small relative to:

- the heading;
- the text block;
- the overall section width;
- the amount of empty space around it.

This makes the illustration feel like a small annotation rather than an important visual proof of the section's idea.

The section currently reads approximately as:

```text
[ eyebrow ]        [ large heading                        ]

                   [ body copy ]        [ tiny visual     ]
                   [ body copy ]        [                 ]
                   [ body copy ]
                   [ bold close ]
```

The desired result is:

```text
[ eyebrow ]        [ large heading                                  ]

                   [ body copy ]          [ substantial visual      ]
                   [ body copy ]          [ with equal visual weight]
                   [ body copy ]          [                         ]
                   [ bold close ]         [                         ]
```

The illustration should feel like the **second half of the explanation**, not a footnote.

---

# 2. Preserve the existing overall page language

Keep:

- the left-side section label / eyebrow;
- the large heading;
- dark background;
- typography;
- current border treatment;
- restrained accent usage;
- the current illustration content;
- the current copy.

Do not add:

- gradients;
- extra icons;
- another diagram;
- decorative lines;
- additional metrics;
- more information sources;
- extra explanatory text.

This is a layout refinement, not a content expansion.

---

# 3. Desktop structure

At large desktop widths, use a three-part layout:

```text
LEFT RAIL          MAIN CONTENT AREA
                  ┌──────────────────────────────────────────────┐
The problem       │ Heading spanning the full main content area │
                  └──────────────────────────────────────────────┘

                  ┌───────────────────┬──────────────────────────┐
                  │ Body copy         │ Illustration             │
                  │                   │                          │
                  │                   │                          │
                  │ Bold closing line │                          │
                  └───────────────────┴──────────────────────────┘
```

The section label remains in the left rail.

The heading spans the entire main area.

Below the heading, create **two balanced columns**:

- copy column;
- illustration column.

---

# 4. Recommended desktop grid

Use the site's existing page container.

Conceptually:

```css
.problem-section {
  display: grid;
  grid-template-columns:
    minmax(180px, 0.8fr)
    minmax(0, 2.6fr);
}
```

Inside the main content area:

```css
.problem-main {
  display: grid;
  grid-template-columns:
    minmax(320px, 0.9fr)
    minmax(360px, 1.1fr);
  column-gap: 64px;
}
```

Do not copy these values blindly if the existing container system uses different tokens.

The important ratio is:

```text
copy       ≈ 42–46%
visual     ≈ 54–58%
```

The visual should be slightly wider than the copy block.

---

# 5. Heading width and alignment

The heading currently feels good.

Keep the large scale.

The heading should align with the left edge of the copy column.

It should span across both the copy and visual columns.

Recommended maximum heading width:

```css
max-width: 760px;
```

Do not force the heading into a narrower width just to line up with the paragraph text.

The line break:

```text
Your business shouldn't
run on workarounds.
```

is good.

Preserve a similar two-line composition on large desktop.

---

# 6. Space between heading and lower content

The current lower content begins a little too close to the heading visually.

Use a deliberate gap.

Recommended desktop:

```text
heading bottom
↓
40–48px
↓
copy + illustration row
```

Use the nearest existing spacing token.

This should create a clear separation between:

- the statement;
- the explanation.

---

# 7. Illustration sizing

This is the most important change.

The current illustration is too small.

On large desktop, target approximately:

```css
width: 100%;
max-width: 420px;
min-width: 360px;
```

with an outer visual height around:

```css
height: 220–240px;
```

Recommended target:

```css
--problem-visual-height: 232px;
```

The exact width should follow the layout column.

Do not simply scale the current visual using `transform: scale()`.

Recompose the internal elements inside a larger shared canvas.

---

# 8. Illustration container

Use one containing canvas for the complete illustration.

Conceptually:

```css
.problem-visual {
  width: 100%;
  height: var(--problem-visual-height);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

The illustration does **not** need a visible outer border.

The internal source cards and final record remain the visible UI elements.

The illustration should feel like a composition floating naturally in the section.

---

# 9. Internal composition — top row

Keep the three current source cards:

- Spreadsheet
- Message
- Notes

But make them use the full available visual width.

Recommended:

```css
.problem-sources {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}
```

Each source card should have the same height.

Recommended source-card height:

```css
height: 112px;
```

or an equivalent size that fits the visual.

The three cards must align perfectly:

```text
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Spreadsheet  │ │ Message      │ │ Notes        │
│              │ │              │ │              │
│ ORDER 184    │ │ Order 184... │ │ ORDER 184    │
│ Thursday     │ │              │ │ 09:00 ?      │
│ 09:00        │ │ 10:30        │ │ confirm time │
│ Pending      │ │              │ │              │
└──────────────┘ └──────────────┘ └──────────────┘
```

Do not let one card become taller because its content wraps.

---

# 10. Increase internal readability slightly

The current illustration text is visually too tiny compared with the rest of the page.

Do not make it large.

But increase it enough that the concept can be understood without leaning in.

Suggested relative sizes:

```text
source label:       10–11px
record title:       11–12px
record metadata:    10–11px
status text:        10–11px
```

If the current design system uses rem values, use equivalent tokens.

The illustration should remain secondary to the section copy, but not illegible.

---

# 11. Warning / conflict line

Keep the line:

**3 sources · 2 different times**

This is important because it explains the visual immediately.

Its current placement is too detached.

Position it as a direct bridge between the fragmented top row and the resolved record.

Recommended:

```text
source cards
↓
12–14px
3 sources · 2 different times
↓
12–14px
resolved record
```

Center it relative to the visual.

Do not position it arbitrarily near the right edge.

The warning should visually belong to the transformation.

---

# 12. Resolved record

The final record should be visually stronger than each individual source card.

Use full illustration width.

Recommended:

```css
width: 100%;
height: 64–72px;
```

Example:

```text
┌────────────────────────────────────────────────────┐
│ ORDER 184                              Confirmed   │
│ Thursday · 10:30                                   │
└────────────────────────────────────────────────────┘
```

Keep the restrained violet border and green confirmed state.

Do not increase the accent strength dramatically.

The hierarchy should be:

```text
fragmented cards    = quiet
conflict indicator  = warning
resolved record     = clean / confident
```

---

# 13. Vertical alignment with body copy

The top edge of the illustration composition should align with the top of the first body paragraph.

Not with the heading.

Not with the second paragraph.

The lower copy + visual row should begin on the same baseline.

Conceptually:

```text
Spreadsheets, messages...      ┌─────────────┐
                               │ Spreadsheet │
                               ...
```

This makes the section feel structurally intentional.

---

# 14. Balance the total heights

The copy block and visual block should have similar total perceived height.

Current copy height is approximately four paragraph groups plus the bold closing line.

The visual should occupy a comparable vertical area.

Do not make the visual taller than the copy by a large amount.

Do not leave it as a compact 190px block beside a 330px text block.

Target:

```text
copy visual height ≈ 300–330px
illustration occupied height ≈ 230–260px
```

The illustration may be vertically centered within the lower row if needed.

---

# 15. Closing line

Keep:

**We turn those workflows into software.**

This is a strong endpoint.

Do not attach it to the visual.

Keep it in the copy column.

Use the same spacing from the preceding paragraph as now or slightly increase it.

Recommended:

```text
body paragraph
↓
28–32px
↓
bold closing line
```

This line should remain the textual conclusion.

The resolved record is the visual conclusion.

They should reinforce one another.

---

# 16. Section vertical spacing

The current section has a large amount of blank space at the bottom.

Some breathing room is good, but do not let the section become unnecessarily tall.

On large desktop, target the section content to feel vertically centered within a reasonable section block.

Recommended total vertical padding:

```css
padding-block: 96px 104px;
```

or the nearest equivalent from the existing spacing system.

Do not use viewport-height sizing.

Do not use:

```css
min-height: 100vh;
```

for this section.

The section should be content-sized.

---

# 17. Left rail

Keep:

**The problem**

in the left rail.

It should align vertically with the top of the heading.

Do not center it vertically against the whole section.

Recommended:

```text
The problem       Your business shouldn't
                  run on workarounds.
```

This alignment is already good and should be preserved.

---

# 18. Responsive behavior

## Large desktop — >= 1200px

Use:

```text
left rail + main area
main area:
  heading full width
  copy + illustration side by side
```

Illustration target:
approximately `380–420px` wide.

---

## Medium desktop / tablet landscape — 900–1199px

Reduce the gap.

Possible:

```css
copy / visual ratio ≈ 1fr / 1fr
```

Illustration can reduce to:

```css
--problem-visual-height: 210px;
```

Keep copy and visual side by side as long as both remain readable.

---

## Tablet / mobile — < 900px

Stack:

```text
The problem

Your business shouldn't
run on workarounds.

Body copy

Illustration

We turn those workflows into software.
```

However, preserve logical reading order.

Recommended mobile DOM/order:

```text
eyebrow
heading
body paragraphs
illustration
closing statement
```

Alternatively, if the closing line is semantically part of the body, it may remain before the illustration, but be consistent.

Do not shrink the desktop illustration to unreadable size.

Reflow it.

---

# 19. Mobile illustration

On mobile, do not keep all three source cards in three narrow columns.

Use either:

### Preferred

Three compact cards stacked or horizontally scroll-free in a 2 + 1 arrangement:

```text
┌────────────┐ ┌────────────┐
│Spreadsheet │ │ Message    │
└────────────┘ └────────────┘

      ┌────────────┐
      │ Notes      │
      └────────────┘

3 sources · 2 different times

┌────────────────────────────┐
│ ORDER 184       Confirmed  │
└────────────────────────────┘
```

or a simple stacked arrangement.

Do not use horizontal scrolling for this illustration.

The concept must remain immediately understandable.

---

# 20. Preserve content simplicity

Do not add more records.

Do not add:

- CRM;
- email inbox;
- WhatsApp;
- calculator;
- ERP;
- five different spreadsheets;
- arrows between every card.

Three sources are enough.

One conflict is enough.

One resolved record is enough.

This illustration succeeds because it demonstrates one concrete problem.

---

# 21. Avoid arrows

Do not add arrows from each top card to the bottom record.

The vertical composition already communicates:

```text
fragmented
↓
conflict
↓
resolved
```

Use spacing and hierarchy instead of literal arrow graphics.

If movement is animated, a subtle shared highlight may travel downward, but no permanent arrow is needed.

---

# 22. Optional subtle animation

If the current site supports motion, use one restrained sequence:

1. top cards appear in their normal state;
2. conflicting times receive a subtle emphasis;
3. the warning line appears;
4. the final record border/status becomes active;
5. settle.

Total duration:

approximately 1.5–2 seconds.

Long idle pause.

Do not loop constantly.

Respect `prefers-reduced-motion`.

Animation is optional.

The static composition must already work perfectly.

---

# 23. Visual hierarchy target

At a glance, the section should read in this order:

1. **Heading**
2. **Body explanation**
3. **Fragmented-vs-resolved illustration**
4. **Closing statement / confirmation**

The illustration must be visible enough to participate in the hierarchy, but never compete with the heading.

---

# 24. Specific correction based on the current screenshot

The current screenshot shows:

- a strong heading;
- a well-positioned left rail;
- body copy with good width;
- an illustration that is roughly half the visual weight it should have;
- too much empty space to the right and below the visual;
- very small internal visual typography;
- a conflict line that feels detached from the cards;
- a resolved record that is too shallow/small to act as a satisfying conclusion.

Correct these issues by:

1. widening the illustration column;
2. increasing the visual composition to approximately 380–420px;
3. using a 220–240px visual canvas;
4. making all three source cards equal height;
5. slightly increasing inner visual type;
6. centering the conflict line between source and result;
7. making the resolved record full-width and stronger;
8. aligning illustration top with body-copy top;
9. reducing unnecessary bottom whitespace.

---

# 25. QA checklist

Inspect at:

- 1440px;
- 1280px;
- 1024px;
- 768px;
- 430px;
- 390px.

On desktop verify:

- left label aligns with heading top;
- heading remains approximately two lines;
- body and visual begin at the same y-position;
- visual width is substantial;
- three source cards are equal height;
- source cards use equal gaps;
- conflict line is centered;
- final record spans the visual width;
- body column and visual column feel balanced;
- closing statement remains easy to find;
- there is no excessive empty space below the illustration.

At mobile verify:

- no tiny three-column cards;
- no horizontal overflow;
- no unreadable microcopy;
- the conflict/resolution story remains obvious.

---

# 26. Final acceptance criterion

The section should feel like a **single editorial composition**, not:

```text
large text + tiny diagram
```

The right-side illustration should have enough size and weight that the visitor naturally understands:

> the same business information is scattered, inconsistent, and manually reconciled — custom software turns it into one dependable record.

Keep the illustration simple.

Keep the existing design language.

Do not add more content.

**Increase composition quality through scale, alignment, spacing, and hierarchy — not through complexity.**
