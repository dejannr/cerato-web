# Cerato Systems — Hero Illustration Final Polish Specification
## Fix clipping, overflow, connectors, spacing, and composition

### Scope

Apply this revision **only to the large hero illustration** beneath the homepage hero CTAs.

This is a refinement of the current implementation shown in the latest screenshot.

Keep the core concept:

> several fragmented sources of operational information become one clean, structured operational record.

Keep the existing Cerato / Linear-inspired visual language.

Do **not** change the hero headline, paragraph, CTAs, or overall page layout.

---

# 1. Diagnosis of the current screenshot

The current version is substantially better conceptually, but several implementation details make it feel unfinished.

### A. The left cards overlap each other

The Spreadsheet, Message, and Manual note cards physically cover one another.

This creates several problems:

- Spreadsheet content is clipped by the Message card.
- Message content is clipped by the Manual note card.
- The cards look like accidental `position:absolute` collisions rather than intentional fragmentation.
- Important text disappears.
- The composition feels broken instead of sophisticated.

**No content card in the final version may overlap another content card.**

---

### B. Content overflows inside the cards

The Spreadsheet card contains more rows than its fixed height can safely display.

This is visible around the bottom of the card.

The card height must always be sufficient for its content.

Never hide meaningful card content behind:

- another card;
- `overflow: hidden`;
- a fixed height that is too small;
- the edge of the illustration canvas.

---

### C. The connector lines are visually poor

The current diagonal lines:

- are too literal;
- resemble an architecture diagram;
- intersect awkwardly with the cards;
- terminate at one obvious node;
- draw attention away from the actual content;
- create unnecessary geometry.

**Remove the connector lines entirely.**

Also remove the center node.

Do not replace them with arrows.

Do not replace them with curved Bézier lines.

Do not replace them with dotted lines.

The final static illustration should contain **no visible source-to-destination connector lines**.

---

### D. The composition is horizontally stretched

The three conceptual areas are currently:

```text
left cluster     empty/lines      main record      activity
```

This makes the composition feel spread across the canvas rather than cohesive.

The final composition should behave as **two major groups**:

```text
FRAGMENTED SOURCES            STRUCTURED OPERATION
```

The transformation should be implied by:

- left-to-right reading direction;
- spacing;
- contrast;
- alignment;
- optional subtle motion.

Not by diagram lines.

---

### E. The Activity card feels detached

The Activity panel is useful, but it currently sits too far from the main structured record.

It should visually belong to the structured system.

Treat it as a secondary surface attached to or closely associated with the main record.

---

# 2. Final composition

Use a clean two-column composition inside the illustration.

Recommended desktop proportion:

```text
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   FRAGMENTED SOURCES              STRUCTURED OPERATION                    │
│                                                                           │
│   ┌────────────────────┐          ┌───────────────────────────────────┐    │
│   │ Spreadsheet   #024 │          │ REQUEST #024            Updated  │    │
│   │ ...                │          │                                   │    │
│   └────────────────────┘          │ Customer                M. Parker │    │
│                                   │ Requested change Tomorrow · 08:30 │    │
│      ┌────────────────────┐       │ Assignment         Team 2 · Ready │    │
│      │ Message       #024 │       │ Payment                 Verified │    │
│      │ ...                │       │ Driver                 Assigned  │    │
│      └────────────────────┘       │                                   │    │
│                                   │ ● Status updated                  │    │
│   ┌────────────────────┐          └───────────────────────────────────┘    │
│   │ Manual note   #024 │                        ┌─────────────────────┐    │
│   │ ...                │                        │ Activity            │    │
│   └────────────────────┘                        │ ...                 │    │
│                                                 └─────────────────────┘    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
```

This is directional, but it is **not a flowchart**.

---

# 3. Use a real layout system — not absolute positioning for the main cards

The current overlap likely comes from absolute positioning.

Do not use arbitrary absolute `top/left` values for the three source cards.

Use CSS Grid/Flex for the major composition.

Conceptually:

```css
.hero-illustration-inner {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(56px, 7vw, 104px);
  align-items: center;
  height: 100%;
}
```

Then:

```css
.fragmented-group {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
```

and:

```css
.structured-group {
  position: relative;
}
```

Absolute positioning may be used **only for small decorative/supporting details** after the core layout is stable.

The three source cards must remain in normal document flow.

---

# 4. Left group — controlled stagger, zero overlap

The source cards should be staggered horizontally, but never overlap vertically.

Recommended pattern:

```text
Spreadsheet
████████████████████

        Message
        ████████████████████

Manual note
██████████████████
```

Use margins/transforms only horizontally:

```css
.source-card:nth-child(1) {
  align-self: flex-start;
}

.source-card:nth-child(2) {
  align-self: flex-end;
}

.source-card:nth-child(3) {
  align-self: flex-start;
  margin-left: 18px;
}
```

Do **not** use negative vertical margins.

Do **not** translate cards vertically into one another.

Minimum vertical gap between card borders:

```text
12px
```

Preferred:

```text
14–16px
```

---

# 5. Source-card sizing

Do not give all source cards the same fixed height.

They contain different amounts of content.

Use content-driven height.

Recommended widths:

```text
Spreadsheet: 230–245px
Message:     220–235px
Manual note: 205–220px
```

Use:

```css
height: auto;
min-height: ...;
```

Suggested minimums:

```text
Spreadsheet: 118px
Message:      92px
Manual note:  92px
```

But allow the content to make the card taller.

**Never set `max-height` on these cards.**

---

# 6. Spreadsheet card — simplify its content

The current Spreadsheet card tries to show too much.

This is why it overflows.

The visual does not need multiple additional rows.

Use exactly this conceptual structure:

```text
Spreadsheet                                  #024
────────────────────────────────────────────────

Customer                 Status
M. Parker                Pending

Requested
Tomorrow
```

That is enough.

Do not add another row below `Tomorrow`.

Do not show content that cannot comfortably fit.

The card is demonstrating fragmentation, not spreadsheet functionality.

---

# 7. Message card

Use:

```text
Message                                      #024
────────────────────────────────────────────────

Can we move the booking
to tomorrow at 08:30?
```

The entire message must be visible.

Do not clip the second line.

Allow the card to grow vertically if the text wraps differently at a breakpoint.

---

# 8. Manual note card

Use:

```text
Manual note                                  #024
────────────────────────────────────────────────

Call driver
Check payment
```

Keep it intentionally simple.

---

# 9. Internal card layout rules

Every source card should use:

```css
display: flex;
flex-direction: column;
```

Use consistent internal padding:

```text
14–16px
```

Header:

```text
title                                #024
```

Then divider.

Then content.

Do not absolutely position text within cards.

Do not use fixed pixel coordinates for individual labels.

Use grid/flex rows.

---

# 10. Overflow rules

For every content-bearing card:

```css
overflow: visible;
```

or normal content flow.

If the outer illustration needs clipping because of decorative background effects, clipping may occur only at the **outer canvas boundary**.

No meaningful UI content should touch that boundary.

Create a safe zone:

```text
minimum 28–32px between any content card and the outer canvas edge.
```

At desktop, prefer:

```text
36–40px.
```

---

# 11. Remove all connector geometry

Delete:

- the two/three diagonal source lines;
- the horizontal line into the record;
- the blue convergence dot;
- any SVG path whose purpose is to connect the source cards to the record.

The illustration should look better **without any lines between the two groups**.

This is intentional.

Do not assume that a transformation requires a connector.

---

# 12. How to communicate transformation without lines

Use four signals.

## Signal 1 — Reading direction

Fragmented cards are on the left.

Structured record is on the right.

---

## Signal 2 — Organization contrast

Left:

- different widths;
- staggered alignment;
- smaller cards;
- muted borders.

Right:

- one dominant rectangle;
- strict row alignment;
- clearer border;
- coherent information hierarchy.

---

## Signal 3 — Repeated information

Use the same information on both sides:

```text
#024
M. Parker
Tomorrow / Tomorrow · 08:30
```

The visitor naturally understands that the right record contains the information from the left.

---

## Signal 4 — Optional animation

If animation is used, briefly highlight matching data from left to right.

No physical connector is required.

---

# 13. Optional transition cue — only if the center feels too empty

First implement the illustration **with nothing between the groups**.

Evaluate it.

If the center genuinely needs a transition cue, use only a tiny typographic/system indicator such as:

```text
•••
```

or three tiny progressively brighter dots.

Example:

```text
fragmented cards        ·  ·  ●        structured record
```

Rules:

- maximum diameter: 3–4px each;
- low contrast;
- no text label;
- no enclosing circle;
- no line;
- no arrow.

This is optional.

Prefer empty breathing room over unnecessary visual explanation.

---

# 14. Structured record — preserve, but tighten

The main REQUEST #024 card is currently the strongest element.

Keep its general design.

Refine it so all rows are structurally consistent.

Recommended:

```text
REQUEST #024                                      Updated
────────────────────────────────────────────────────────

Customer                                      M. Parker
Requested change                      Tomorrow · 08:30

────────────────────────────────────────────────────────

Assignment                              Team 2     Ready
Payment                                      Verified
Driver                            D. Williams     Assigned

────────────────────────────────────────────────────────

● Status updated
```

Use a proper two/three-column row grid.

Example:

```css
.record-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  column-gap: 10px;
}
```

Do not manually position values.

---

# 15. Main record sizing

Recommended desktop:

```text
width: 350–380px
min-height: 238px
```

Do not make the card excessively tall.

Let the content determine the final height.

The main record should remain the largest single object in the illustration.

---

# 16. Activity panel — visually attach it to the system

Keep Activity, but bring it closer.

Do not leave a large independent gap.

Preferred treatment:

```text
                    REQUEST CARD
              ┌───────────────────────┐
              │                       │
              │                       │
              └───────────────────────┘
                               ┌──────────────────┐
                               │ Activity         │
                               │ ...              │
                               └──────────────────┘
```

The Activity card can overlap the main card's **outer visual footprint** slightly, but it must never cover meaningful content.

A safe overlap is approximately:

```text
12–18px
```

on the main card's lower-right outer edge.

Alternatively, position it immediately to the right with:

```text
12–16px gap
```

If the canvas is not wide enough, put Activity below the main card.

---

# 17. Activity panel content

Keep it minimal:

```text
Activity

08:27   Request received
08:29   Driver assigned
08:30   Payment verified
```

Do not add more rows.

Increase readability slightly from the current implementation.

The Activity card should remain clearly secondary.

---

# 18. Better use of the canvas

Do not spread objects all the way from one canvas edge to the other.

Create one centered composition with a maximum internal width.

Conceptually:

```css
.hero-illustration-inner {
  width: min(100% - 72px, 860px);
  margin-inline: auto;
}
```

Adapt this to the actual container.

The key idea:

> The background canvas can be wide. The information composition inside it should be tighter.

This is important.

The current version uses too much horizontal distance between related objects.

---

# 19. Recommended desktop geometry

For a visual canvas around 940px wide:

```text
outer safe padding:
36–40px

usable composition width:
~820–850px

fragmented group:
~250px

gap / transition breathing room:
~70–90px

structured group:
~430–470px
```

Do not use the entire width just because it is available.

---

# 20. Vertical centering

Vertically center the **complete composition** in the canvas.

Do not independently center each card.

The left cluster and structured group should have approximately the same perceived vertical center.

Example:

```text
       [Spreadsheet]                 ┌───────────────┐
          [Message]                  │               │
       [Manual note]                 │ Request       │
                                     │               │
                                     └───────────────┘
                                          [Activity]
```

The visual mass should balance around the center line.

---

# 21. Canvas height

The current canvas can be slightly shorter once the layout is tightened.

Recommended desktop:

```css
height: 360px;
```

Acceptable:

```text
350–380px
```

Do not leave a 400px+ canvas if the actual content only requires ~280px.

The illustration should feel intentional, not empty.

---

# 22. Background grid

Keep the subtle grid, but reduce its role.

It should be almost invisible.

Recommended behavior:

- strongest around the center;
- optionally fade toward the outer edges;
- no grid line should visually align in a way that looks like a connector.

If practical, use a subtle mask:

```css
mask-image: radial-gradient(
  ellipse at center,
  black 35%,
  transparent 90%
);
```

Use the equivalent appropriate implementation.

Do not add glow.

---

# 23. No clipping anywhere

Add a QA rule:

At every supported breakpoint, inspect each card and verify:

```text
Spreadsheet:
- header visible
- #024 visible
- Customer visible
- Status visible
- M. Parker visible
- Pending visible
- Requested visible
- Tomorrow visible

Message:
- full sentence visible

Manual note:
- both note lines visible

Request:
- all rows visible

Activity:
- all three events visible
```

If any content is clipped, the implementation fails QA.

---

# 24. No card-to-card collisions

At every breakpoint:

```text
minimum distance between independent source-card borders: 12px
```

No source card may cover another.

No Activity card may cover Request content.

No card may extend outside the outer visual canvas.

No text may render outside its card.

---

# 25. Animation — remove moving connector pulse

Because the connector lines are removed, remove the current center pulse animation.

If animation is desired, use **content-state animation** instead.

Recommended sequence:

### 1
Left cards are visible.

### 2
The value:

```text
Tomorrow
```

in Spreadsheet receives a very subtle highlight.

### 3
The phrase:

```text
tomorrow at 08:30
```

in Message receives the same subtle highlight.

### 4
On the right:

```text
Requested change    Tomorrow · 08:30
```

briefly receives the accent.

### 5
`Updated` / `Status updated` appears.

### 6
Settle.

This tells the story much better than a dot traveling along a line.

---

# 26. Animation restraint

Do not animate card positions.

The source cards should not physically fly into the structured record.

Do not:

- slide them across the screen;
- shrink them into the request;
- morph card rectangles;
- rotate;
- bounce.

Only animate state/highlight/opacity.

This keeps the illustration sophisticated.

---

# 27. Responsive — tablet

At widths where the desktop layout becomes tight:

```text
fragmented group     structured record
```

can remain side by side, but:

- reduce horizontal staggering;
- hide the Activity card if necessary;
- reduce the gap;
- preserve readable card widths.

Never solve space pressure by allowing overlaps.

---

# 28. Responsive — mobile

Do not attempt the desktop two-column composition.

Use a vertical story:

```text
Spreadsheet
Message
Manual note

small breathing space / optional dots

REQUEST #024

Activity (optional)
```

All cards should use:

```css
width: 100%;
max-width: none;
```

within the mobile illustration container.

Do not stagger enough to create horizontal overflow.

A very small `8–12px` horizontal offset is acceptable, but not required.

---

# 29. Mobile height

The mobile illustration should be content-driven.

Do not force it into the desktop fixed height.

Use:

```css
height: auto;
```

with appropriate padding.

This is important because stacking the cards requires more vertical room.

---

# 30. Implementation architecture

Create clear layout components.

Conceptually:

```tsx
<HeroSystemVisual>
  <FragmentedSources>
    <SpreadsheetCard />
    <MessageCard />
    <ManualNoteCard />
  </FragmentedSources>

  <StructuredOperation>
    <RequestCard />
    <ActivityCard />
  </StructuredOperation>
</HeroSystemVisual>
```

Do not put all cards into one absolute-positioned coordinate system.

The layout system should guarantee that content cannot collide.

---

# 31. CSS architecture

Prefer:

```text
Grid for:
- main left/right composition;
- record rows;
- spreadsheet data columns.

Flex for:
- source stack;
- card internals;
- activity rows.

Absolute positioning only for:
- optional decorative accents;
- optional Activity overlap;
- background elements.
```

This will prevent the current overflow problems.

---

# 32. Visual hierarchy

The final hierarchy should be:

### Level 1
Structured Request card

### Level 2
Three fragmented source cards as one collective group

### Level 3
Activity panel

### Level 4
Background grid / optional transition dots

Currently the lines compete at approximately Level 2.

That must be removed.

---

# 33. Border hierarchy

Use subtle border differences.

Source cards:

```text
quiet neutral border
```

Request card:

```text
slightly stronger border
very restrained Cerato accent
```

Activity:

```text
quiet neutral border
```

Do not give all cards equal visual prominence.

Do not use strong box shadows.

---

# 34. Final static-state target

Even with all animation disabled, the composition should immediately read:

```text
┌─────────────┐
│ Spreadsheet │
└─────────────┘
       ┌─────────┐
       │ Message │              ┌──────────────────────┐
       └─────────┘              │ REQUEST #024         │
┌─────────────┐                 │                      │
│ Manual note │                 │ organized data       │
└─────────────┘                 │                      │
                                └──────────────────────┘
                                         [Activity]
```

There should be **no need for an arrow or connector** to understand it.

---

# 35. Specific changes from the current screenshot

## Delete

- all diagonal connector lines;
- horizontal connector line;
- center blue dot;
- overlapping card positions;
- fixed card heights that clip content;
- excessive distance between Request and Activity.

## Keep

- Spreadsheet / Message / Manual note concept;
- shared `#024`;
- REQUEST #024;
- M. Parker;
- requested change;
- assignment;
- payment;
- driver;
- Updated / Status updated;
- Activity;
- dark grid canvas.

## Change

- source cards → non-overlapping staggered stack;
- card height → content-driven;
- source group → tighter;
- main composition → centered within canvas;
- Request → visually dominant;
- Activity → attached/near Request;
- transformation → implied through repeated data and hierarchy;
- animation → field-to-field highlight rather than connector movement.

---

# 36. Final QA at 1440px

Take a screenshot after implementation.

Check visually:

1. Can every word in Spreadsheet be read?
2. Can every word in Message be read?
3. Can every word in Manual note be read?
4. Are there zero overlapping source cards?
5. Are there zero visible connector lines?
6. Is Request the dominant object?
7. Does Activity clearly belong to Request?
8. Is the entire composition centered?
9. Is there comfortable but not excessive empty space?
10. Does the grid remain background-only?
11. Does the left cluster feel fragmented without feeling broken?
12. Does the right group feel organized without looking like a fake dashboard?
13. Does the transformation make sense without labels or arrows?

If any answer is no, do not consider the component finished.

---

# 37. Final instruction to Codex

The current concept is correct.

Do not redesign it again.

The final polish should come from **removing visual machinery**, not adding more.

The desired visual is:

> three clean, non-overlapping fragments on the left and one dominant, structured operational record on the right.

The visitor should understand the relationship because the same request information appears on both sides.

No connector lines are necessary.

No center node is necessary.

No transformation label is necessary.

No card should ever cover another card.

No text should ever be clipped.

Use normal Grid/Flex layout so the component remains robust across breakpoints.

The result should feel **calm, precise, spacious, and inevitable** — as if the scattered information naturally resolves into the structured record.
