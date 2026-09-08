# Cerato Systems — Problem Diagram Mobile-Only Redesign for Codex
## Keep desktop unchanged; make the phone visual compact and immediately understandable

### Scope

Apply this change **only to the “Your business shouldn't run on workarounds” illustration on mobile**.

Do not change:
- desktop version of this diagram;
- section copy;
- section heading;
- closing statement;
- any other diagram.

The current phone implementation is too tall and too literal.

---

# 1. Problem with the current mobile implementation

The current mobile visual stacks the conceptual UI like this:

```text
Spreadsheet | Message
      Notes
conflict message
ORDER 184 result
```

Although technically responsive, it has several visual problems:

- it consumes too much vertical space;
- the three source cards are too large for the amount of information they contain;
- the triangular 2 + 1 layout creates awkward dead space;
- `Notes` looks like a third application panel rather than one of several fragmented sources;
- the orange conflict message floats between unrelated blocks;
- the resolved ORDER 184 card feels detached rather than like the result of consolidation;
- the visitor has to read each card to understand the point;
- the visual competes with the already substantial text above it.

On desktop, the existing visual works because the sources and resolved state can coexist horizontally.

On mobile, do not reproduce that geometry vertically.

---

# 2. New mobile concept

The mobile visual should communicate only:

> **The same order exists in several conflicting places → one clear record.**

Use a compact **fragment strip + resolved record**.

Target total visual height:

```text
170–220px
```

Preferred at 390px:

```text
~190px
```

This diagram should be significantly smaller than the hero mobile diagram.

---

# 3. Recommended composition

Use:

```text
┌────────────────────────────────────────┐
│                                        │
│  Spreadsheet    Message        Notes   │
│  Thu · 09:00    → 10:30        09:00? │
│  Pending                               │
│                                        │
│       3 sources · 2 different times    │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │ ORDER 184             Confirmed  │  │
│  │ Thursday · 10:30                 │  │
│  └──────────────────────────────────┘  │
│                                        │
└────────────────────────────────────────┘
```

This should be read in one glance.

No large source cards.

No triangular card layout.

No arrows/connectors.

No stacked third card.

---

# 4. Source row

Represent the three fragmented sources as **compact equal-width cells** in one row.

Use:

```css
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 6px;
```

Each cell:

```text
height: approximately 58–68px
```

Do not use the current ~120px source cards.

---

# 5. Spreadsheet fragment

Use only:

```text
Spreadsheet

Thu · 09:00
Pending
```

Do not repeat:

```text
ORDER 184
```

inside every source fragment.

The common context is already communicated by the final record and surrounding visual.

---

# 6. Message fragment

Use only:

```text
Message

Changed to
10:30
```

Highlight `10:30` subtly.

Do not use the full:

```text
Order 184 changed to 10:30
```

The mobile illustration needs semantic compression.

---

# 7. Notes fragment

Use only:

```text
Notes

09:00?
confirm
```

The question mark is enough to communicate uncertainty.

Do not use:

```text
ORDER 184
```

again.

Do not use `confirm time` if it causes awkward wrapping; `confirm` is sufficient conceptual microcopy.

---

# 8. Fragment styling

All three fragments should share:

- equal width;
- equal height;
- identical padding;
- identical border/radius;
- aligned top edges.

They should look intentionally related.

Use quieter styling than the final result:

```text
muted border
muted title
small values
no shadow
```

The source row should read as one fragmented-information group, not three independent cards.

---

# 9. Conflict indicator

Immediately below the three fragments, show:

```text
3 sources · 2 different times
```

Do not place it far below.

Do not surround it with another card.

Do not add an icon unless one already exists in the site's visual vocabulary.

Use restrained warning color.

Recommended spacing:

```text
source row
↓ 10–12px
conflict indicator
↓ 12–16px
resolved record
```

---

# 10. Resolved record

Use one concise full-width card:

```text
ORDER 184                              Confirmed

Thursday · 10:30
```

That is all.

Do not add additional rows.

Do not turn it into another large application panel.

The result should be visually stronger than the source fragments through:

- slightly stronger border;
- restrained accent treatment;
- clearer type;
- full width.

---

# 11. Visual hierarchy

The diagram should read:

### First
Three small conflicting fragments.

### Second
`3 sources · 2 different times`

### Third / strongest
One clean `ORDER 184` record.

This tells the story without requiring connectors.

---

# 12. Overall sizing

At approximately 390px viewport:

```text
diagram inner width: 100%
source row:          60–64px
conflict area:       ~16px
result card:         58–64px
gaps:                ~28–36px total
```

Total:

```text
~175–195px
```

Including outer padding:

```text
do not exceed ~220px
```

---

# 13. Outer diagram container

Use:

```css
height: auto;
min-height: 0;
padding: 16px 0;
```

or equivalent existing spacing tokens.

If the desktop diagram has a surrounding grid/background, simplify it substantially on mobile.

Do not create a large empty canvas.

The visual should be content-sized.

---

# 14. Do not use the current 2 + 1 arrangement

Explicitly remove this mobile geometry:

```text
[ Spreadsheet ] [ Message ]

        [ Notes ]
```

It creates unnecessary vertical height and makes Notes appear more important.

All three sources must belong to the same row whenever viewport width permits.

---

# 15. 320–350px fallback

At very narrow phones, keep three columns but shorten microcopy further:

```text
Sheet
09:00
Pending
```

```text
Message
10:30
```

```text
Note
09:00?
```

However, prefer `Spreadsheet` at widths where it fits.

Do not allow title text to overflow.

If needed, use:

```text
Sheet
```

only below ~350px.

This abbreviation applies only to conceptual diagram microcopy.

---

# 16. Typography

Suggested mobile diagram scale:

```text
source title:       9–10px
source value:       10–11px
source secondary:   9–10px
conflict message:   10px
result title:       10–11px semibold
result value:       11–12px
result status:      10px
```

Do not use tiny 7–8px meaningful text.

The diagram should remain readable without zooming.

---

# 17. Animation

If this diagram animates, use one extremely simple state sequence.

### Initial

```text
Spreadsheet: 09:00
Message: 10:30
Notes: 09:00?
```

### Conflict

Briefly emphasize:

```text
2 different times
```

### Resolve

The final card receives subtle emphasis:

```text
ORDER 184
Thursday · 10:30
Confirmed
```

Then settle.

Do not animate cards moving.

Do not animate arrows.

Do not animate lines between sources.

Do not loop continuously without a long idle period.

---

# 18. Relationship to the section copy

The text above this diagram already explains fragmentation in detail.

Therefore the illustration must **not repeat the whole explanation**.

Its job is only to provide a fast visual proof:

```text
many conflicting sources
→
one reliable record
```

This is why the mobile version should be much simpler than desktop.

---

# 19. Spacing relative to section content

The screenshot currently has a large body-copy block followed by a substantial diagram.

Make the transition deliberate.

Recommended:

```text
last body paragraph
↓ 28–36px
diagram
↓ 24–32px
bold closing statement
```

If the bold closing statement currently appears before the diagram in the actual DOM, keep the site's established semantic order; do not change copy solely for this redesign.

But do not allow accidental text overlap such as the partially visible white text in the supplied screenshot.

All section text must have its own normal-flow space.

---

# 20. Critical overlap fix

The supplied screenshot shows a piece of white text partially hidden behind/above the diagram near its top edge.

This must never happen.

Do not use negative margins or absolute positioning that allows the diagram to cover section copy.

Require:

```css
position: relative;
margin-top: ...;
```

with normal document flow.

No marketing text may sit underneath the illustration.

This is release-blocking.

---

# 21. Desktop isolation

Desktop is approved.

Do not modify its layout to achieve this mobile version.

Use a dedicated mobile rendering/layout variant if necessary:

```tsx
<DesktopProblemVisual />
<MobileProblemVisual />
```

Reuse conceptual data where practical.

CSS visibility can switch variants at the existing mobile breakpoint.

---

# 22. What not to do

Do not:

- vertically stack the three full source cards;
- use the current 2 + 1 card layout;
- make Notes a large standalone card;
- repeat ORDER 184 four times;
- add connector lines;
- add arrows;
- use an accordion;
- use horizontal scrolling;
- make source cards tappable;
- create a carousel;
- preserve desktop micro-detail;
- scale the desktop visual down;
- exceed ~220px total visual height;
- overlap the illustration with section copy.

---

# 23. QA

Test at:

```text
320px
360px
375px
390px
393px
412px
430px
```

At every width verify:

1. All three source fragments are visible simultaneously.
2. No source fragment exceeds ~70px height.
3. No text clips.
4. No horizontal overflow.
5. Conflict indicator is immediately associated with the source row.
6. ORDER 184 is clearly the dominant result.
7. Entire diagram stays around 170–220px.
8. No section text is covered by the diagram.
9. No interaction is required to understand it.
10. Desktop is visually unchanged.

---

# 24. Final instruction to Codex

Keep the desktop Problem diagram exactly as it is.

For mobile, replace the current large card arrangement with a **compact information comparison**:

```text
[ Spreadsheet ] [ Message ] [ Notes ]
       09:00        10:30      09:00?

        3 sources · 2 different times

[ ORDER 184                     Confirmed ]
  Thursday · 10:30
```

The mobile diagram should function almost like a visual sentence.

It should take **roughly 190px**, not a large portion of the phone screen.

Do not reproduce application UI detail.

Communicate only the important contrast:

> fragmented and conflicting information above; one clear record below.
