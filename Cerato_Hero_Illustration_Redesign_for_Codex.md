# Cerato Systems — Hero Illustration Redesign for Codex
## Replace the current “scattered work → structured operation” implementation

### Scope

Apply this revision **only to the large hero illustration** directly below the homepage hero copy and CTAs.

Keep the current idea:

> scattered information → one structured operational record

Do **not** replace the idea with another concept.

The problem is the current execution, not the concept.

Use the supplied Linear-inspired design-language file as the visual source of truth.

---

# 1. What is wrong with the current implementation

The current hero illustration has several composition problems:

1. The illustration canvas is large, but the actual UI elements occupy too little of it.
2. The three left-side fragments feel randomly placed rather than intentionally fragmented.
3. The right-side structured record is too small to feel like the clear “after” state.
4. The center `ORGANIZED` marker feels like a diagram label rather than part of a premium website visual.
5. There is no strong visual path from the fragmented state to the structured state.
6. Too much empty grid is visible around the content.
7. The left and right sides do not have enough contrast in organization.
8. The composition currently looks like:
   `three floating cards + divider + one card`
   rather than a transformation.
9. The illustration is visually smaller than the hero headline even though it occupies a huge rectangle.
10. The content inside the cards is too small relative to the overall canvas.

The redesign should make the idea understandable in approximately **one second**:

> “messy business information becomes one clear operational record.”

---

# 2. Main redesign principle

Do not make this a network diagram.

Do not use a literal arrow.

Do not add more concepts.

Instead, create a **before / transformation / after composition** inside one continuous canvas.

The composition should feel like a product demonstration, not a flowchart.

The visual story is:

```text
FRAGMENTED WORK
      →
STRUCTURED OPERATION
```

But this should be communicated through layout, hierarchy, and subtle motion — not by writing those words prominently.

---

# 3. Overall desktop composition

Use the full hero illustration width.

Recommended proportions:

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   LEFT STATE                  TRANSITION                 RIGHT STATE          │
│   ~38%                        ~12%                       ~50%                  │
│                                                                              │
│   fragmented                  subtle flow                organized record     │
│   information                                           + useful context      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

Recommended outer visual height:

```css
--hero-system-visual-height: 380px;
```

Reasonable desktop range:

```text
360–400px
```

Do not increase the section height beyond what is necessary.

The current canvas height is acceptable, but the content inside it must become substantially larger.

---

# 4. Outer canvas

Keep the existing dark grid treatment if it matches the design-language file.

The canvas should:

- use the same dark background as now;
- have the current subtle grid or an even quieter version;
- avoid a prominent outer border if the current site treats it as an open visual region;
- clip content cleanly;
- keep approximately 32–40px internal padding on desktop.

Conceptually:

```css
.hero-system-visual {
  position: relative;
  width: 100%;
  height: 380px;
  overflow: hidden;
  padding: 36px 40px;
}
```

Do not center all content in the middle of the rectangle.

Use the whole canvas deliberately.

---

# 5. LEFT SIDE — fragmented information

The left side should show **three different representations of the same operational issue**.

Keep:

1. Spreadsheet
2. Message
3. Manual note

However, do not scatter them randomly.

Create a controlled staggered stack.

Recommended layout:

```text
┌──────────────────────────────┐
│ Spreadsheet                  │
│                              │
│ Customer          Status     │
│ M. Parker         Pending    │
│                              │
│ Requested change             │
│ Tomorrow                     │
└──────────────────────────────┘
             ↓ offset 26px

        ┌────────────────────────────┐
        │ Message                    │
        │                            │
        │ Can we move the booking    │
        │ to tomorrow at 08:30?      │
        └────────────────────────────┘
             ↓ offset back left

   ┌───────────────────────────┐
   │ Manual note               │
   │                           │
   │ Call driver               │
   │ Check payment             │
   └───────────────────────────┘
```

These should overlap slightly in vertical space or be staggered with controlled offsets.

The goal is:

- related;
- fragmented;
- slightly inefficient;
- still visually clean.

Do not make them look chaotic.

---

# 6. Increase the left-card scale

The current cards are too small.

Target approximate widths:

```text
Spreadsheet: 220–240px
Message:     210–230px
Manual note: 190–210px
```

Approximate heights:

```text
Spreadsheet: 120–130px
Message:      92–104px
Manual note:  92–104px
```

Use consistent internal padding:

```text
14–16px
```

Use illustration text that is clearly readable at normal laptop viewing distance.

Do not enlarge the typography so much that it competes with the hero copy.

---

# 7. Make the left-side data visibly inconsistent

The fragmented state should contain a subtle inconsistency.

Example:

### Spreadsheet

```text
M. Parker
Tomorrow
Pending
```

### Message

```text
Can we move the booking
to tomorrow at 08:30?
```

### Manual note

```text
Call driver
Check payment
```

The point is not to show a blatant error.

The point is that the information is distributed across multiple places and requires a person to mentally combine it.

Do not add more data sources.

Three is enough.

---

# 8. Add a quiet shared identity marker

To make it obvious that the fragments belong to the same work item, use one small shared identifier.

For example:

```text
#024
```

or:

```text
Request 024
```

Show it very subtly in all three fragments.

Do not make it prominent.

This is a useful visual trick:

the visitor subconsciously notices that the same thing exists in multiple places.

Example:

```text
Spreadsheet       #024
Message           #024
Manual note       #024
```

Use tertiary text.

---

# 9. TRANSITION AREA — remove “ORGANIZED”

Remove the current vertical line and the word:

```text
ORGANIZED
```

It feels too literal and diagram-like.

Replace it with a **quiet convergence zone**.

This should consist of:

- 2–3 subtle horizontal/curved connector paths from the left;
- the paths converge into one point;
- one small active pulse can travel toward the right;
- after convergence, use one single path entering the structured record.

Conceptually:

```text
Spreadsheet ─────╲
                  ╲
Message ───────────●──────────── Structured record
                  ╱
Manual note ─────╱
```

Do not render this as a bright node diagram.

Connections should be faint.

The convergence point can use the restrained Cerato accent.

---

# 10. Connector treatment

Recommended:

```css
default line:
rgba(255,255,255,.06)

active line:
rgba(94,106,210,.32)
```

Line thickness:

```text
1px
```

No arrowheads.

No large circular node.

The convergence point should be approximately:

```text
4–6px
```

The transition should feel almost architectural.

---

# 11. RIGHT SIDE — make this the hero of the illustration

The structured record should be much larger than it is now.

The right side is the **result**, so it should have the strongest visual hierarchy inside the illustration.

Target width:

```text
340–390px
```

Target height:

```text
230–260px
```

It should occupy most of the available right side.

Do not leave a large amount of empty canvas around it.

---

# 12. Redesign the structured record as a compact operational panel

Keep it conceptual.

Do not make it look like a full SaaS dashboard.

Recommended content:

```text
REQUEST #024                             Updated

Customer
M. Parker

Requested change
Tomorrow · 08:30

──────────────────────────────────────

Assignment
Team 2                         Ready

Payment
Verified

Driver
D. Jovanović                  Assigned

──────────────────────────────────────

● Status updated
```

This is better than the current sparse four-row card because it feels like the information has actually been brought together.

Important:

- use one dominant record;
- use 5–6 meaningful rows maximum;
- do not add charts;
- do not add fake KPIs;
- do not add tabs/navigation.

---

# 13. Add one small secondary contextual element on the right

The current right side feels too empty because there is only one card.

Add **one** small supporting element connected to the main record.

Preferred option:

### Activity strip

A small compact panel attached below/right:

```text
ACTIVITY

08:27  Request received
08:29  Driver assigned
08:30  Payment verified
```

Alternative:

### Status summary

```text
3 checks complete
No conflicts
Ready
```

Use only one.

Preferred: **Activity strip**.

This makes the right side feel like an operational system without turning it into a dashboard.

---

# 14. Right-side composition

Recommended:

```text
                    ┌────────────────────────────────┐
                    │ REQUEST #024          Updated  │
                    │                                │
                    │ Customer          M. Parker    │
                    │ Change       Tomorrow · 08:30  │
                    │                                │
                    │ Assignment       Team 2 Ready  │
                    │ Payment             Verified   │
                    │ Driver              Assigned   │
                    │                                │
                    │ ● Status updated               │
                    └────────────────────────────────┘

                              ┌──────────────────────┐
                              │ Activity             │
                              │ 08:27 Request        │
                              │ 08:29 Assigned       │
                              │ 08:30 Verified       │
                              └──────────────────────┘
```

The secondary card may slightly overlap the main card boundary or sit closely adjacent, according to the site's design language.

Do not place it far away.

---

# 15. Visual contrast between “before” and “after”

This is important.

The left side should feel:

- fragmented;
- slightly dimmer;
- less aligned;
- disconnected.

The right side should feel:

- structured;
- aligned;
- slightly brighter;
- more complete.

Do this using subtle differences only.

Recommended:

### Left

```text
border opacity: lower
text hierarchy: more muted
cards: staggered
```

### Right

```text
border opacity: slightly stronger
accent border on main record: very subtle
spacing: precise
rows: aligned
status: clear
```

Do not make the right card glow.

Do not brighten the whole right half dramatically.

---

# 16. Use alignment as the main “after” signal

The right side should visually contrast with the left because everything is aligned.

For example:

```text
Customer           M. Parker
Requested change   Tomorrow · 08:30
Assignment         Team 2
Payment            Verified
Driver             Assigned
```

Use consistent row heights and column alignment.

The visitor should visually feel:

> “this information now has a place.”

---

# 17. Remove excessive empty space

The current screenshot has too much dead space:

- around the left cards;
- between left and center;
- between center and right;
- around the right card.

Use approximately:

```text
80–85% of the inner canvas width
```

for actual illustration content.

The grid should remain visible around the composition, but not dominate it.

The visual should feel full without feeling crowded.

---

# 18. Animation — use a single transformation story

If animation is enabled, use only this sequence:

### State 1 — fragmented

All three left cards are visible.

The right structured record is present but slightly quieter.

### State 2 — event

The shared identifier `#024` or one subtle highlight appears across the left fragments.

### State 3 — convergence

One subtle pulse travels from the three sources into the convergence point.

### State 4 — structured update

On the right:

```text
Requested change
Tomorrow · 08:30
```

updates/highlights briefly.

Then:

```text
Status updated
```

appears.

### State 5 — settle

Everything becomes static.

Total active animation:

```text
~1.6–2.2 seconds
```

Then idle for several seconds before repeating.

Do not constantly animate.

---

# 19. Do not animate the cards floating

Never use:

- bobbing;
- drifting;
- floating;
- random parallax;
- bouncing;
- card rotation.

The fragmented state is communicated through structure, not playful movement.

---

# 20. Optional cursor interaction

If subtle pointer interaction already exists elsewhere on the site:

Hovering a left card may:

- slightly increase its border contrast;
- highlight its corresponding field in the right-side record.

Example:

Hover `Message`:

```text
Requested change
Tomorrow · 08:30
```

briefly becomes more visible.

This would be excellent if implemented cleanly.

Do not require it if it makes the component fragile.

---

# 21. Typography inside the illustration

The current internal typography is too small.

Target approximate visual sizes:

```text
card eyebrow/title:       11px / semibold
field labels:             10–11px
field values:             11–12px
status:                   10–11px
main record title:        11–12px / semibold
activity metadata:        10px / monospace optional
```

Use existing site tokens where possible.

The illustration should remain clearly subordinate to the hero heading.

---

# 22. Main structured record spacing

Recommended internal rhythm:

```text
16px outer padding

header
12px
divider
10–12px

rows:
28–32px each

divider
10px

status footer
```

Do not pack everything tightly.

The right-side panel should feel calm and deliberate.

---

# 23. Background grid

The current grid is a good idea but is slightly too visually present relative to the tiny content.

After increasing the content scale:

- keep the grid;
- reduce its contrast if necessary;
- make sure it disappears behind the UI rather than competing with it.

The grid should imply precision.

It should not be the main visible object.

---

# 24. Do not add an explicit BEFORE / AFTER label

Do not write:

```text
BEFORE
AFTER
```

Do not write:

```text
MESSY
ORGANIZED
```

Do not write:

```text
FRAGMENTED
CONNECTED
```

The composition should explain that itself.

If a tiny structural label is absolutely needed, use subtle semantic labels such as:

```text
Sources
Operational record
```

But preferably use no large labels at all.

---

# 25. Desktop layout target

At approximately 1440px viewport:

```text
outer illustration width: ~940px
outer height:             ~380px

left content footprint:   ~300px
transition footprint:     ~100px
right footprint:          ~420px
```

This is only directional.

Respect the site's actual container width.

The key is the ratio, not the exact pixels.

---

# 26. Tablet behavior

At approximately 768–1024px:

Keep the left-to-right story if there is enough room.

Simplify:

- reduce left card widths;
- remove the optional Activity card if necessary;
- reduce right panel width;
- reduce transition width.

Do not shrink text below readability.

If the story becomes cramped, switch to vertical layout.

---

# 27. Mobile behavior

On mobile, completely recompose.

Do not shrink the desktop canvas.

Use:

```text
Spreadsheet
Message
Manual note

      ↓

REQUEST #024
structured record
```

Recommended vertical sequence:

```text
┌─────────────────────────┐
│ Spreadsheet             │
└─────────────────────────┘

┌─────────────────────────┐
│ Message                 │
└─────────────────────────┘

┌─────────────────────────┐
│ Manual note             │
└─────────────────────────┘

       subtle connector

┌─────────────────────────┐
│ REQUEST #024            │
│ ...                     │
└─────────────────────────┘
```

The three fragment cards may be more compact on mobile.

Do not show the optional Activity panel if it creates excessive height.

---

# 28. Content constraints

Do not invent:

- revenue;
- customer counts;
- performance metrics;
- percentages;
- AI functionality;
- analytics;
- business KPIs.

Use only generic conceptual operational fields.

Good:

- Customer
- Requested change
- Assignment
- Payment
- Driver
- Status
- Activity

---

# 29. Shared visual semantics

Use status colors sparingly.

Examples:

```text
Pending     = muted warning
Verified    = quiet success
Updated     = quiet success
Ready       = neutral / accent
```

Do not color every value.

Most text remains neutral.

---

# 30. Visual acceptance test

The redesign is successful if, at 25–50% browser zoom, the illustration still clearly reads as:

```text
several fragmented cards
            →
one larger organized operational system
```

At normal zoom, the visitor should then discover the detailed fields.

This two-level readability is important.

---

# 31. Specific corrections to the screenshot

Use the current screenshot as the before-state.

Make these concrete changes:

### Current left side
Three tiny cards placed too far apart.

### Change to
Three larger staggered cards that form one cohesive fragmented cluster.

---

### Current center
Thin vertical marker with `ORGANIZED`.

### Change to
Subtle converging connector paths with one small pulse / convergence point.

---

### Current right side
One relatively small sparse card.

### Change to
One large structured operational record plus at most one small Activity panel.

---

### Current canvas
Large amount of empty grid.

### Change to
Content should occupy most of the useful canvas while preserving breathing room.

---

### Current typography
Microcopy is difficult to read.

### Change to
Increase internal visual typography slightly without changing the hero typography.

---

# 32. Do not redesign the hero copy

Do not change:

- hero heading;
- supporting paragraph;
- CTA labels;
- CTA arrangement;
- overall hero alignment.

This revision is specifically about the visual beneath the CTAs.

---

# 33. Final direction to Codex

The illustration should look less like:

> “three cards being converted into another card”

and more like:

> “fragmented business information being consolidated into a real operational system.”

The sophistication should come from:

- scale;
- composition;
- staggered vs aligned structure;
- strong hierarchy;
- precise spacing;
- subtle connections;
- believable operational microcopy;
- restrained state animation.

Do not add complexity for its own sake.

The strongest composition is:

```text
3 substantial fragmented sources
            ↓ / converge
1 large organized operational record
+ 1 small supporting activity element
```

Make the **right-side structured state visually dominant**.

Make the **left-side fragmented state intentionally uneven but controlled**.

Remove the literal `ORGANIZED` diagram marker.

Use the existing Cerato / Linear-inspired design system throughout.

The final visual should feel like a premium software-company homepage illustration, not an architecture diagram.
