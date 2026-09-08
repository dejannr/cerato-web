# Cerato Systems — Mobile “What We Build” Carousel Redesign for Codex

## Objective

Redesign ONLY the mobile version of the four “What We Build” capabilities so they behave like the Linear mobile card rail shown in the supplied reference screenshot.

The desktop 2×2 capability matrix is approved and MUST remain unchanged.

The existing four Cerato diagrams are approved and MUST remain conceptually unchanged.

This specification changes only the **mobile presentation and interaction model**.

The target mobile behavior is:

> one large feature card in focus, with part of the next card visible on the right, horizontally swipeable, with smooth snapping between cards.

This should feel like a premium horizontal card rail, not a generic carousel widget.

---

# 1. Core mobile behavior

Below the mobile breakpoint, replace the stacked capability layout with a horizontally scrollable card rail.

Structure:

```text
[ CARD 01       ][ partial CARD 02 ]
        swipe →

[ CARD 02       ][ partial CARD 03 ]
        swipe →

[ CARD 03       ][ partial CARD 04 ]
        swipe →

[ CARD 04       ]
```

At rest, the first card should occupy most of the viewport width while the next card “peeks” into view.

This visible next-card edge is important because it teaches the user that the section is horizontally swipeable.

Do not hide all non-active cards completely.

---

# 2. Desktop protection

Desktop remains EXACTLY as currently approved.

Desktop:

```text
2 × 2 capability matrix
```

Mobile:

```text
horizontal swipeable card rail
```

Do not try to make one layout serve both modes.

Use explicit responsive variants if necessary.

---

# 3. Breakpoint

Use the mobile rail below approximately:

```css
@media (max-width: 767px)
```

Use the project's existing breakpoint if it is close.

Do not apply the carousel to desktop.

---

# 4. Section background

Use the normal Cerato page background.

Do NOT place the carousel inside a giant gray outer panel.

Structure:

```text
page background

section intro

horizontal card rail
```

The cards themselves provide the visual surfaces.

No nested section card around the carousel.

---

# 5. Card width

The key Linear-like behavior comes from showing one dominant card and part of the next.

At approximately 390px viewport width:

```text
viewport width: 390px
page gutter: ~16px
card width: ~84–88vw
```

Recommended:

```css
--capability-card-width-mobile: 86vw;
```

or:

```css
flex-basis: min(86vw, 340px);
```

This should leave approximately:

```text
28–45px
```

of the next card visible.

The exact amount may vary slightly by viewport.

Do not make cards 100vw wide.

If the next card is not visible at rest, the interaction will not feel like the Linear reference.

---

# 6. Card height

Target:

```text
310–340px
```

Preferred:

```text
~325px
```

All four cards should share the same outer height.

Do not allow one card to become substantially taller due to title wrapping.

If one long title needs more room, use the same slightly taller shared height for all four.

Do not clip copy.

---

# 7. Card structure

Each card contains:

```text
number
visual
title
description
```

Conceptually:

```text
┌──────────────────────────────┐
│ 01                           │
│                              │
│                              │
│        DIAGRAM               │
│                              │
│                              │
│ Operational platforms       │
│                              │
│ Bring people, workflows,     │
│ business rules, and          │
│ operational data into one    │
│ purpose-built system.        │
└──────────────────────────────┘
```

The illustration and copy must feel like one composition.

---

# 8. Card surface

Use the existing Cerato / Linear-inspired surface language:

- near-black lifted surface;
- subtle 1px border;
- restrained radius;
- no large shadow;
- no glow;
- no glassmorphism;
- no strong gradient.

The reference effect comes from proportion, spacing, and cropping of the next card — not decorative effects.

---

# 9. Carousel rail structure

Recommended:

```css
.capabilities-rail {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 16px;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
}
```

Each card:

```css
.capability-card {
  flex: 0 0 min(86vw, 340px);
  scroll-snap-align: start;
}
```

Use the project's actual naming and tokens.

---

# 10. Hide scrollbar visually

The rail should not look like a desktop overflow container.

Hide the visual scrollbar while preserving native scrolling.

Example approach:

```css
scrollbar-width: none;
```

and corresponding WebKit scrollbar hiding.

Do NOT disable scrolling.

Do NOT replace native touch scrolling with drag-only JavaScript.

---

# 11. Native swipe first

Use native horizontal touch scrolling.

Do not implement a heavy custom carousel library unless the project already uses one.

Preferred behavior:

- touch swipe;
- momentum;
- scroll snap;
- no forced animation after every tiny movement;
- no drag handle;
- no left/right arrow buttons on phone.

The interaction should feel natural.

---

# 12. Snap behavior

Use:

```css
scroll-snap-type: x mandatory;
```

Each card:

```css
scroll-snap-align: start;
```

The active card should settle cleanly into position after a swipe.

Do not center cards if doing so hides the next-card teaser.

Start alignment is preferred.

---

# 13. Rail edge padding

The first card should align with the normal page gutter.

Example:

```css
padding-left: 16px;
padding-right: 16px;
```

But the carousel section wrapper should allow the right side to visually show the next card.

Do not clip the rail to the same width as a normal static content column.

A common structure:

```text
section text = normal page gutter
carousel rail = full-width overflow region
cards = begin at same left gutter
```

This is important.

---

# 14. Full-bleed rail pattern

Recommended:

```text
viewport
| 16px gutter | CARD 01                | 10px | CARD 02 peek ...
```

The rail may extend visually to the right edge of the viewport.

Do not add a matching 16px clipping boundary that hides the next card.

At the final card, retain sufficient right padding so it can settle comfortably.

---

# 15. Card number

Place `01`, `02`, `03`, `04` near the upper-left inside each card.

Recommended:

```text
top: 14–16px
left: 16px
```

Typography:

```text
10px
tertiary
monospace if already established
```

The number should not create extra vertical whitespace.

---

# 16. Diagram region

Keep the existing diagrams.

The visual region should occupy approximately:

```text
160–175px
```

of the card.

The diagrams should be integrated directly into the card.

Avoid:

```text
feature card
  → giant nested diagram card
    → inner interface
```

Prefer:

```text
feature card
  → conceptual diagram surfaces
```

Internal UI panels may retain their own borders.

---

# 17. Diagram consistency

All four cards must use the same visual-region height.

The content can differ internally, but the outer visual balance must remain consistent.

Target:

```css
--capability-diagram-height-mobile: 165px;
```

Reasonable range:

```text
155–175px
```

Do not let individual diagrams determine card height.

---

# 18. Operational Platforms card

Keep the existing TODAY diagram.

Do not change its conceptual content.

Use:

```text
TODAY

08:30  Delivery       Assigned
09:10  Installation   Team 2
10:45  Pickup         Assigned
```

The active row remains the focus.

Fit it cleanly inside the shared visual area.

---

# 19. Business Process Automation card

Keep the existing NEW REQUEST visual.

Maintain:

```text
NEW REQUEST
Standard request
verification checks
Ready for approval
```

Fit it into the same visual height as Card 01.

Slightly tighten internal vertical spacing if necessary.

Do not reduce readability.

---

# 20. Customer and Employee Applications card

Keep the current approved conceptual diagram.

Fit it to the shared mobile visual height.

Do not make this card taller because the visual has more internal elements.

---

# 21. Integrations and Connected Systems card

Same rule.

Keep the current diagram content.

Use the common visual region and card dimensions.

---

# 22. Copy region

After the diagram:

```text
diagram
↓ 18–22px
title
↓ 8–10px
description
```

Horizontal copy padding:

```text
16–20px
```

Bottom padding:

```text
18–22px
```

---

# 23. Titles

Use:

```text
19–21px
line-height: ~1.2
```

Do not force long titles onto one line.

Examples:

```text
Customer and employee
applications
```

```text
Integrations and connected
systems
```

Natural wrapping is correct.

---

# 24. Descriptions

Keep the EXACT current descriptions.

Use approximately:

```text
15px
line-height: 1.5–1.6
```

Do not shorten business copy.

Do not clamp text.

All content must remain visible inside the card.

---

# 25. Card spacing

Use a small gap between cards:

```text
8–12px
```

Recommended:

```text
10px
```

Too much gap will weaken the visible “next card” cue.

Too little gap will make cards visually merge.

---

# 26. Next-card teaser

At the initial position on a 390px phone, Card 02 should visibly occupy approximately:

```text
24–45px
```

of the right side of the viewport.

The user should clearly see:

- the border/surface of the next card;
- possibly a sliver of its illustration or number.

Do not show enough of the next card that text becomes awkwardly readable.

It should be a teaser.

---

# 27. Do not show previous-card teaser on initial state

Card 01 begins aligned to the left page gutter.

When the user swipes to later cards, the previous card may naturally peek from the left depending on snap behavior.

Do not artificially center all cards just to show both neighbors.

Prefer calm left-aligned snapping.

---

# 28. No pagination dots by default

Do not add large pagination dots underneath unless user testing shows swipe discoverability is poor.

The visible next-card teaser is the primary affordance.

If progress indication is desired, use something extremely restrained.

Preferred optional treatment:

```text
01 / 04
```

or a tiny progress line.

But default implementation should omit extra carousel chrome.

---

# 29. No arrow buttons on phone

Do not show desktop-style:

```text
← →
```

buttons on the phone.

Native swipe should be primary.

If keyboard accessibility requires programmatic navigation, controls may exist for keyboard users outside the touch-first composition, but do not clutter the phone UI.

---

# 30. Tap behavior

Cards are informational.

Do not make the entire card tappable unless it already has a meaningful destination.

Do not create fake carousel interaction where tapping a card changes slides.

Swipe/scroll controls the rail.

---

# 31. Section vertical footprint

This carousel exists partly to make the mobile section much shorter.

At 390px:

```text
section intro
↓ 36–44px
carousel ~325px
↓ 56–72px
next section
```

Do not stack all four cards vertically.

Only one card-height region should contribute to the visible section height.

Horizontal scrolling contains the four capability cards.

---

# 32. Section intro

Keep the existing What We Build heading and intro copy exactly as-is.

Use normal mobile content width.

Then:

```text
intro copy
↓ 36–44px
carousel
```

Do not put intro copy inside the carousel.

---

# 33. Carousel must not cause page-level horizontal scrolling

Important:

The rail itself may scroll horizontally.

The page must not.

Use careful containment:

```css
overflow-x: auto;
max-width: 100%;
```

Do not create an element wider than the viewport outside the rail.

No page-level horizontal scrollbar.

---

# 34. Touch behavior

Ensure vertical page scrolling still works naturally.

Do not use:

```css
touch-action: none;
```

The browser should distinguish horizontal swipe inside the rail from vertical page scroll.

If touch-action is specified, use an appropriate non-blocking value such as:

```css
touch-action: pan-x pan-y;
```

or allow native default behavior.

---

# 35. Reduced motion

Scroll snapping should still work.

Do not add autoplay.

Do not automatically advance cards.

Do not cycle slides.

The user controls the rail.

This is essential.

---

# 36. No autoplay

Do NOT implement:

- automatic sliding;
- timed carousel progression;
- infinite loop;
- auto-rewind;
- bouncing at edges.

This is a static marketing content rail controlled by the user.

---

# 37. Edge behavior

Card 04 should stop naturally.

Do not loop back to Card 01.

At the final position, add enough right padding that Card 04 is not glued directly to the viewport edge.

Recommended final rail padding:

```text
16px
```

---

# 38. Narrow phones

At <= 360px:

Use slightly larger proportional width so the card remains useful:

```css
flex-basis: 88vw;
```

This still leaves a small next-card teaser.

Internal padding may reduce to:

```text
14–16px
```

Do not shrink diagram text below readability.

---

# 39. Wider phones

At 430px:

Use approximately:

```text
82–85vw
```

so that a meaningful but restrained part of the next card remains visible.

Do not allow cards to become excessively wide.

Recommended max:

```text
350–360px
```

---

# 40. Accessibility

The rail must remain keyboard accessible.

Requirements:

- scroll container can receive keyboard navigation if appropriate;
- cards remain in DOM order;
- content reading order is 01 → 02 → 03 → 04;
- do not hide off-screen cards with `display:none`;
- screen readers should read all capability content naturally.

Do not use ARIA carousel roles unless implementing them correctly and they materially improve accessibility.

Native scroll containers are preferable.

---

# 41. Focus behavior

If a focusable link/button exists inside an offscreen card, focusing it should scroll that card into view naturally.

Do not trap focus.

Do not programmatically jump the carousel unexpectedly.

---

# 42. Visual reference interpretation

The supplied Linear reference should be interpreted structurally as:

- one tall narrow card;
- large illustration region;
- copy underneath;
- next card partially visible;
- horizontal swipe/scroll;
- restrained border and surface;
- no carousel chrome dominating the UI.

Do NOT copy:

- Linear's exact illustration;
- typography content;
- proprietary shapes;
- card dimensions literally.

Use the Cerato design language and existing diagrams.

---

# 43. Recommended implementation skeleton

Conceptually:

```tsx
<section>
  <SectionIntro />

  <div className="capabilityRail">
    <CapabilityCard index="01" />
    <CapabilityCard index="02" />
    <CapabilityCard index="03" />
    <CapabilityCard index="04" />
  </div>
</section>
```

CSS concept:

```css
.capabilityRail {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 16px;
  padding-inline: 16px;
  scrollbar-width: none;
}

.capabilityRail::-webkit-scrollbar {
  display: none;
}

.capabilityCard {
  flex: 0 0 min(86vw, 340px);
  scroll-snap-align: start;
  min-width: 0;
}
```

Adapt to the project's classes/tokens.

---

# 44. QA widths

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

Verify:

1. Card 01 is dominant.
2. Card 02 visibly peeks from the right.
3. Swipe feels native.
4. Cards snap cleanly.
5. No page-level horizontal overflow.
6. Every card has the same height.
7. Every diagram is readable.
8. Every title/description is visible.
9. No autoplay.
10. No arrow clutter.
11. Card 04 settles with right breathing room.
12. Desktop remains unchanged.

---

# 45. Screenshot acceptance test

At 390px, the initial state should visually resemble:

```text
| 16px | [ CARD 01                         ] [CARD 02...
```

Card 01 should take approximately 85–88% of the viewport width.

A visible sliver of Card 02 should communicate:

> swipe horizontally to see more.

This visual affordance must be obvious even in a static screenshot.

---

# 46. Final instruction to Codex

The user explicitly wants the mobile “What We Build” section to behave like the supplied Linear mobile card carousel.

Therefore:

- Desktop 2×2 layout stays unchanged.
- Mobile becomes a horizontal swipeable card rail.
- One card is dominant.
- The next card is partially visible on the right.
- Cards use native horizontal scrolling + CSS scroll snap.
- No autoplay.
- No infinite looping.
- No large arrows.
- No giant shared gray panel.
- Each card contains its existing Cerato diagram + title + exact description.
- Cards should be approximately 320–340px high and about 84–88vw wide.
- Use a small 8–12px gap.
- Preserve the normal page background.
- Make the interaction feel native, restrained and Linear-like.

The key visual target is:

> **one focused capability card + a visible slice of the next card.**

That is the mobile interaction model.
