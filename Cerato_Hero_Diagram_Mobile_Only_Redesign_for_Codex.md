# Cerato Systems — Hero Diagram Mobile-Only Redesign for Codex
## Keep desktop exactly as-is; replace only the phone composition

### Scope

Apply this change **only to the hero illustration on phone/mobile breakpoints**.

The desktop hero illustration is approved and must remain unchanged.

Do not alter:
- desktop layout;
- desktop card sizes;
- desktop content;
- desktop animation;
- hero headline;
- hero paragraph;
- hero CTAs;
- any other homepage diagram.

This specification replaces only the current mobile hero diagram implementation.

---

# 1. Why the current mobile version fails

The current phone implementation is technically responsive, but visually it is wrong.

It currently stacks:
1. Spreadsheet card
2. Message card
3. Manual note card
4. Large Request #024 card
5. Activity card

This creates a diagram almost as tall as the phone viewport.

The result is that:
- the illustration dominates the entire first screen;
- the user has to scroll through a large block of conceptual UI before reaching the next content;
- the relationship between the source cards and the final record is not immediately clear;
- the source cards look like normal application cards rather than fragmented inputs;
- the Request card becomes a long form rather than a visual conclusion;
- Activity adds more height without adding enough value;
- the visitor sees details before understanding the idea;
- the diagram feels like a mobile dashboard, which Cerato does not have.

The desktop composition works because there is horizontal space to contrast:

> fragmented sources → structured record.

On a phone, that contrast must be communicated **more abstractly and much more compactly**.

Do not stack the desktop components vertically.

---

# 2. New mobile idea

Use a completely different mobile composition:

> **three compact source fragments merge into one concise operational record**

The entire visual should fit inside approximately:

```text
220–280px height
```

Preferred target:

```css
--hero-mobile-visual-height: 250px;
```

At 390px viewport width, the user should be able to see the entire diagram at once without scrolling inside it.

This is the most important requirement.

---

# 3. Mobile composition overview

Use this structure:

```text
┌─────────────────────────────────────┐
│                                     │
│  Spreadsheet   Message   Note       │
│  [fragment]    [fragment] [fragment]│
│                                     │
│             ·   ·   ·               │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ REQUEST #024          Updated │  │
│  │                               │  │
│  │ M. Parker                     │  │
│  │ Tomorrow · 08:30              │  │
│  │ Team 2 · Ready                │  │
│  │ Payment verified              │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

No Activity card on mobile.

No full source cards.

No large stacked form.

No arrows.

No connectors.

The visual should communicate the idea through **compression and hierarchy**.

---

# 4. Remove these elements from the mobile version

Hide these mobile-only:

```text
full Spreadsheet card
full Message card
full Manual note card
Activity panel
long Request field layout
driver row
status footer row
```

Important:

This is allowed because these are **conceptual illustration micro-details**, not website content.

The business message remains unchanged.

Desktop keeps all of them.

Do not remove any marketing copy from the page.

---

# 5. Source fragments should become compact input fragments

The three source elements should no longer look like full application cards.

They should look like small fragments of information.

Each should be approximately:

```text
width: 30–32% of available row
height: 68–76px
```

Use one row of three equal fragments.

At 320–350px, if three equal fragments become unreadable, use a slightly narrower type scale and minimal content.

Do **not** wrap into multiple rows unless absolutely necessary.

The point is to visually show multiple sources simultaneously.

---

# 6. Spreadsheet fragment

Use only:

```text
Spreadsheet

M. Parker
Pending
```

Optional tiny metadata:

```text
#024
```

Do not include:
- Customer label;
- Status label;
- Requested;
- Tomorrow;

inside the mobile source fragment.

Those details are unnecessary at this size.

---

# 7. Message fragment

Use only:

```text
Message

Move booking
to 08:30?
```

Optional:

```text
#024
```

Do not include the full sentence.

The microcopy should remain obviously conceptual.

---

# 8. Manual note fragment

Use only:

```text
Note

Call driver
Check payment
```

Optional:

```text
#024
```

Use `Note`, not necessarily `Manual note`, if the shorter label fits the existing tone better.

Desktop remains `Manual note`.

---

# 9. Source fragment styling

Use the same Cerato visual language:
- near-black surface;
- 1px hairline border;
- restrained radius;
- muted secondary text;
- tiny `#024` metadata;
- no icons required;
- no shadows;
- no gradients.

But make the fragments intentionally quieter than the final record.

Suggested hierarchy:

```text
fragment border opacity: lower
fragment background: quieter
fragment text: muted
```

The final Request card should be clearly stronger.

---

# 10. Transformation cue

Do not use arrows.

Do not use connector lines.

Do not use the word:

```text
Organized
```

Use only a tiny transition cue between the source row and the result.

Preferred:

```text
·  ·  ●
```

or three vertically arranged subtle dots.

Example:

```text
       ·
       ·
       ●
```

The final dot may use the restrained Cerato accent.

Maximum vertical space:

```text
18–24px
```

This cue is optional if spacing alone makes the transformation obvious.

Do not let it become a diagram object.

---

# 11. Final Request card should be concise

The current mobile Request card is too long.

Replace it with a **summary card**, not a form-like record.

Use:

```text
REQUEST #024                             Updated
──────────────────────────────────────────────

M. Parker

Tomorrow · 08:30

Team 2 · Ready

Payment verified
```

That is enough.

The final card should visually answer:
- who;
- when;
- assignment;
- payment state.

Do not show:
- label/value pairs for every row;
- driver;
- activity;
- multiple dividers;
- long vertical field structure.

This keeps the idea clear.

---

# 12. Final Request card dimensions

At a 390px viewport:

```text
available width: viewport - 32px page gutters
card width: 100% of illustration inner width
height: approximately 112–128px
```

Do not make the card taller than approximately:

```text
132px
```

unless required for accessibility.

Use content-driven height within this limit through concise microcopy.

---

# 13. Request card internal layout

Recommended:

```text
header row:
REQUEST #024                Updated

main line:
M. Parker

compact info row:
Tomorrow · 08:30

compact state row:
Team 2 · Ready        Payment verified
```

At <= 350px:

```text
Team 2 · Ready
Payment verified
```

may stack.

Do not reduce text below readable size just to keep the row horizontal.

---

# 14. Visual hierarchy

The mobile diagram must read in this order:

### 1
Final Request card

### 2
Three source fragments collectively

### 3
Transition cue

The source fragments should be visible but clearly secondary.

This is important because the value is the **structured outcome**, not the tools themselves.

---

# 15. Entire visual height

The complete mobile illustration should stay within:

```text
220–280px
```

Preferred at 390px:

```text
240–255px
```

Suggested breakdown:

```text
top padding             18px
source fragments         72px
gap                      12px
transition cue           18px
gap                       8px
request card            118px
bottom padding           18px
```

Adjust slightly as needed.

Do not exceed approximately 280px at standard phone widths.

---

# 16. Mobile outer canvas

Use:

```css
.hero-system-visual {
  height: auto;
  min-height: 0;
}
```

Do not preserve desktop fixed height.

Inside:

```css
.hero-system-visual-mobile {
  padding: 18px 14px;
}
```

The outer visual may have a subtle grid, but it must not add excessive empty space.

The illustration should feel like one compact object.

---

# 17. Width handling

At mobile:

```css
width: 100%;
max-width: 100%;
min-width: 0;
box-sizing: border-box;
```

Source row:

```css
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 6px;
```

At <= 350px:

```css
gap: 4px;
```

Do not use horizontal scrolling.

Do not position fragments outside the viewport.

---

# 18. Mobile fragment typography

Recommended:

```text
fragment title:       9–10px / semibold
fragment body:        9–10px
fragment metadata:    8–9px
request title:        10–11px / semibold
request body:         11–12px
request state:        10–11px
```

If the project already has compatible microtype tokens, use those.

Never go below approximately:

```text
8px
```

for purely decorative metadata.

Meaningful text should remain >= 9–10px.

---

# 19. Animation on mobile

Simplify dramatically.

Preferred sequence:

1. three source fragments appear;
2. `M. Parker`, `08:30`, and payment/check information briefly gain subtle emphasis;
3. Request card receives a quiet accent border/state;
4. `Updated` appears;
5. settle.

Total active animation:

```text
1.2–1.6 seconds
```

Then a long idle pause.

Do not animate the fragments moving into the Request card.

Do not morph cards.

Do not animate vertical layout.

---

# 20. No expandable Activity on hero mobile

The current implementation shows:

```text
Activity
Click to view activity
```

Remove this entirely from the mobile hero diagram.

Do not replace it with an accordion.

The hero illustration is not an interactive demo.

Adding hidden expandable content makes the visual feel like a real product UI and increases cognitive load.

Desktop Activity panel remains unchanged if currently approved.

---

# 21. Do not make the diagram interactive on mobile

The mobile hero visual should be primarily illustrative.

Do not require:
- tap;
- expand;
- swipe;
- hover;
- accordion;
- carousel;

to understand it.

The complete idea must be visible in the resting state.

---

# 22. Mobile spacing around the diagram

Maintain the existing mobile spacing from hero CTAs to diagram.

Recommended:

```text
40–48px
```

After diagram:

```text
56–72px
```

before the next major section, according to the existing mobile rhythm.

The diagram itself should be compact enough that this spacing does not make the hero overly tall.

---

# 23. Desktop must use a separate render/layout path

Do not attempt to make one identical DOM composition satisfy both desktop and mobile if that leads to compromises.

It is acceptable to use:

```tsx
<DesktopHeroSystemVisual />
<MobileHeroSystemVisual />
```

or equivalent responsive variants.

Reuse shared data/content where practical.

Do not duplicate business logic unnecessarily.

But the layout can and should be genuinely different.

This is preferable to shrinking the desktop composition.

---

# 24. Suggested implementation structure

Conceptually:

```tsx
<HeroSystemVisual>
  <div className="desktop-only">
    <DesktopHeroSystemVisual />
  </div>

  <div className="mobile-only">
    <MobileHeroSystemVisual />
  </div>
</HeroSystemVisual>
```

Mobile:

```tsx
<MobileHeroSystemVisual>
  <SourceFragments>
    <SourceFragment type="spreadsheet" />
    <SourceFragment type="message" />
    <SourceFragment type="note" />
  </SourceFragments>

  <TransitionCue />

  <CompactRequestSummary />
</MobileHeroSystemVisual>
```

Do not use JS viewport detection if CSS can handle presentation safely.

---

# 25. Breakpoint

Use mobile-specific visual below approximately:

```css
@media (max-width: 767px)
```

Desktop/tablet implementation remains unchanged above that breakpoint unless existing tablet rules already require otherwise.

If the desktop visual becomes cramped between 600–767px, mobile variant should still be used.

---

# 26. 320px fallback

At 320px, the three top fragments still need to fit.

Use extremely concise content:

```text
Spreadsheet
M. Parker
Pending
```

```text
Message
Move to
08:30?
```

```text
Note
Call driver
Check pay.
```

Only abbreviate conceptual illustration microcopy, never marketing copy.

Request:

```text
REQUEST #024     Updated

M. Parker
Tomorrow · 08:30
Team 2 · Ready
Payment verified
```

No overflow.

---

# 27. What NOT to do

Do not:
- stack five full cards vertically;
- preserve the desktop card detail;
- make source fragments accordion items;
- make the diagram scroll internally;
- use horizontal swipe;
- use a carousel;
- hide the final result behind interaction;
- add arrows;
- add connector lines;
- put the Activity card back;
- use `transform: scale()` on desktop UI;
- make text microscopic;
- show fake mobile application chrome;
- make it look like Cerato has a mobile app/product.

---

# 28. Visual acceptance test

At 390 × 844, the entire diagram should be visible in one glance.

The viewer should immediately perceive:

```text
three different inputs
          ↓
one clean operational record
```

without reading every word.

At normal viewing distance:
- source fragments are identifiable;
- Request #024 is clearly dominant;
- the diagram occupies materially less than half the viewport height;
- the next page content is not pushed far below;
- it feels like an illustration, not a dashboard.

---

# 29. QA widths

Test:

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
- diagram < ~280px tall;
- no horizontal scroll;
- no clipped text;
- all three source fragments remain in one row when possible;
- Request card remains full-width;
- no Activity card;
- no connectors;
- no card overlap;
- no internal scrolling;
- static state explains the concept.

---

# 30. Final instruction to Codex

The desktop hero illustration is approved.

**Do not change desktop.**

On mobile, stop trying to preserve the desktop diagram.

Replace it with a compact symbolic version:

> three small source fragments at the top + one concise Request summary below.

The phone visual should communicate the transformation, not reproduce every detail.

Use approximately:

```text
250px total height
```

and make the final Request card the visual focus.

The mobile hero diagram must feel like a **designed illustration**, not a vertically stacked application interface.

The result should be significantly shorter, simpler, clearer, and more immediately understandable than the current phone version.
