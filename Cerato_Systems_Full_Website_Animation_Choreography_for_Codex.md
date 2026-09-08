# Cerato Systems — Full Website Animation Choreography for Codex
## Whole-site motion map: triggers, hover states, scroll behavior, diagrams, pages, and mobile rules

### Objective

Animate the **entire Cerato Systems website** in a controlled, Linear-inspired way.

The site should not have only a few isolated animated diagrams.

Instead, almost every part of the experience should have some form of motion response:

- page entrance;
- section entrance;
- buttons;
- links;
- navigation;
- cards;
- diagrams;
- screenshots;
- case-study transitions;
- form controls;
- mobile menu;
- mobile carousel;
- footer links.

However:

> **Every animation must have a purpose.**

The website should feel constantly polished and responsive, but it should rarely feel like it is “playing animations.”

The motion character should be:

- precise;
- understated;
- quick;
- layered;
- calm;
- continuous across the whole website;
- consistent with the supplied Linear-inspired design language.

---

# 1. Animation stack

Use:

```text
Motion for React
+
CSS transitions
+
IntersectionObserver / useInView
+
CSS scroll snap
```

Install:

```bash
npm install motion
```

Use:

```tsx
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion
} from "motion/react";
```

Use Motion for:

- viewport-triggered entrances;
- grouped stagger;
- menu transitions;
- diagram sequences;
- controlled layout transitions;
- page-content entrance.

Use CSS transitions for:

- hover;
- active;
- focus;
- border changes;
- button transforms;
- link arrows;
- input states.

Use native scrolling / CSS scroll snap for:

- mobile capability carousel.

Do not add GSAP, Three.js, Lenis, Locomotive Scroll, or another heavy animation system unless a later specific requirement actually needs it.

---

# 2. Global motion vocabulary

Create shared tokens.

```css
:root {
  --motion-instant: 100ms;
  --motion-fast: 160ms;
  --motion-medium: 280ms;
  --motion-slow: 420ms;
  --motion-narrative: 650ms;

  --ease-out:
    cubic-bezier(0.25, 0.46, 0.45, 0.94);

  --ease-standard:
    cubic-bezier(0.4, 0, 0.2, 1);

  --ease-emphasized:
    cubic-bezier(0.22, 1, 0.36, 1);
}
```

Most site motion should use:

```text
100ms
160ms
280ms
420ms
```

Narrative diagrams can use longer total sequences, but individual transitions should still remain controlled.

---

# 3. Core animation categories

Use six categories.

## A. Page entrance

Used once when a route first renders.

## B. Section reveal

Triggered when major homepage/page sections enter viewport.

## C. Microinteraction

Hover, press, focus, active states.

## D. Diagram choreography

Explains workflows and system behavior.

## E. Scroll interaction

Used sparingly for progress or active-state emphasis.

## F. Mobile interaction

Menu transitions, carousel snapping, tap states.

---

# 4. Page entrance — every route

Every route should have a small entrance.

Apply to:

```text
/
 /customers
 /customers/[slug]
 /services
 /company
 /contact
 /privacy
```

Use:

```text
opacity: 0 → 1
translateY: 8px → 0
duration: ~280–360ms
```

Important:

- Do not delay route navigation.
- Do not use a full-screen overlay.
- Do not fade the whole page from black for 1 second.
- The static HTML must remain readable if JS is unavailable.

The entrance should feel like content settling into place.

---

# 5. Global section reveal system

Every major section should reveal, but not identically.

Create 3 reusable reveal patterns.

## Reveal A — editorial

For text-led sections.

```text
opacity 0 → 1
y 12px → 0
duration 420ms
```

Use for:

- section eyebrow;
- section title;
- section body;
- CTA.

Stagger:

```text
60ms
```

---

## Reveal B — visual-first

For sections with diagrams/screenshots.

Sequence:

```text
heading/copy
↓ 80–100ms
visual
```

Visual uses:

```text
opacity 0 → 1
y 10px → 0
scale 0.995 → 1
duration 420–500ms
```

Scale should be almost imperceptible.

---

## Reveal C — grid/list

For:

- customer cards;
- services blocks;
- principles;
- case-study facts.

Use:

```text
opacity 0 → 1
y 8–10px → 0
```

Stagger items:

```text
50–70ms
```

Maximum stagger chain:

```text
4–5 items
```

Do not stagger 12+ elements individually.

---

# 6. Trigger rules

Use viewport triggers.

Typical:

```tsx
viewport={{ once: true, amount: 0.2 }}
```

For large sections:

```text
amount: 0.1–0.18
```

For cards:

```text
amount: 0.25–0.35
```

Do not repeatedly replay large entrance animations when the user scrolls back.

Use:

```text
once: true
```

for section reveals.

Diagram loops can reactivate only when in view.

---

# 7. Header — whole website

The header should feel alive even when subtle.

## Initial state

No dramatic entrance.

Logo and navigation appear immediately.

---

## Scroll state

After the page scrolls roughly:

```text
24–40px
```

transition:

- header background slightly more opaque;
- bottom border becomes slightly more visible;
- optional backdrop blur becomes slightly stronger.

Duration:

```text
160–220ms
```

Do not resize header aggressively.

---

# 8. Desktop navigation hover

For each nav link:

Rest:

```text
muted / secondary
```

Hover:

```text
primary text
```

Optional:

```text
translateY(-1px)
```

maximum.

Duration:

```text
160ms
```

Hover-out must use the same duration.

No sweeping underline.

No large animated capsule.

---

# 9. Logo hover

Very subtle.

On desktop pointer hover:

```text
opacity: 0.88 → 1
```

Optional mark:

```text
rotate: 0 → -2deg
```

only if it looks natural.

Duration:

```text
160ms
```

Do not make the logo playful.

---

# 10. Primary CTA animation

For `Start a project`.

Hover:

```text
translateY(-1px)
surface/border contrast increases
arrow translateX(2px) translateY(-1px)
```

Press:

```text
translateY(0)
scale(0.99)
```

Duration:

```text
100–160ms
```

No bounce.

No glow.

---

# 11. Secondary CTA animation

For:

```text
See our work
Explore our services
Read case study
```

Hover:

- border slightly brighter;
- text brighter;
- arrow moves 2–3px.

Duration:

```text
160ms
```

---

# 12. Homepage hero — entrance

This is the strongest initial choreography.

Sequence:

### 0ms
Hero title.

```text
opacity 0 → 1
y 16px → 0
duration 500ms
```

### 70ms
Supporting paragraph.

```text
opacity 0 → 1
y 12px → 0
duration 420ms
```

### 140ms
CTA group.

```text
opacity 0 → 1
y 8px → 0
duration 360ms
```

### 240ms
Hero illustration.

```text
opacity 0 → 1
y 10px → 0
scale .995 → 1
duration 500ms
```

Do not animate words/letters individually.

---

# 13. Hero diagram — desktop

Use the approved desktop illustration.

After entrance, run a short narrative sequence.

### Idle
All content visible.

### Step 1
Spreadsheet matching value subtly highlights.

### Step 2
Message matching value highlights.

### Step 3
Final Request value highlights.

### Step 4
`Updated` / `Status updated` becomes active.

### Settle
Everything returns to normal.

Total active:

```text
1.4–1.8s
```

Idle:

```text
5–7s
```

Do not move cards.

Do not use connector particles.

---

# 14. Hero diagram — mobile

Use the compact mobile-specific version.

Animate only:

```text
source fragments
→ request card
→ updated state
```

Shorter sequence:

```text
~1.0–1.3s
```

Idle:

```text
6–8s
```

No elaborate looping.

---

# 15. Problem section — entrance

Trigger when ~15–20% visible.

Sequence:

```text
eyebrow + heading
↓ 70ms
body copy
↓ 90ms
diagram
↓ 90ms
closing statement
```

All movements:

```text
y 8–12px
```

No large slide.

---

# 16. Problem diagram

Use the approved desktop/mobile composition.

Animation:

### State 1
Source fragments visible.

### State 2
Conflicting times receive a quiet warning accent.

### State 3
`3 sources · 2 different times` fades in.

### State 4
Resolved `ORDER 184` card gains stronger border.

### State 5
`Confirmed` appears.

Total:

```text
1.1–1.5s
```

Do not move fragments into result.

The story is state-change, not object movement.

---

# 17. “What We Build” intro

Section heading and intro should reveal as a group.

Use Reveal A.

Do not animate the entire capability matrix simultaneously with the heading.

Let heading settle first.

Delay capabilities:

```text
100–140ms
```

---

# 18. “What We Build” desktop matrix entrance

When the matrix enters:

- outer matrix fades in;
- four diagrams/cells reveal with slight stagger.

Recommended:

```text
01 → 02 → 03 → 04
```

Stagger:

```text
60ms
```

Each:

```text
opacity 0 → 1
y 8px → 0
```

Do not scale the matrix.

---

# 19. Capability desktop hover

Hover a capability cell:

- diagram border contrast +10–15%;
- title brightens;
- diagram's important state gets slightly stronger;
- neighboring content does NOT dramatically dim.

Optional:

```text
background surface lifts one token
```

Duration:

```text
160–220ms
```

No large elevation.

No scale > 1.005.

---

# 20. Operational Platforms diagram animation

Narrative:

```text
09:10 Installation
Unassigned
→
Team 2
```

Animation:

1. row receives subtle accent background;
2. status text crossfades;
3. accent fades back.

Total:

```text
~700–900ms
```

Idle:

```text
5–7s
```

---

# 21. Business Process Automation diagram animation

Sequence checks:

```text
Customer verified
Limit verified
Required data complete
```

Stagger:

```text
120ms
```

Then:

```text
Ready for approval
```

appears slightly brighter.

Total:

```text
~900–1200ms
```

Idle:

```text
5–7s
```

---

# 22. Customer and Employee Applications diagram animation

Use synchronized record emphasis.

Sequence:

1. customer-side request highlights;
2. matching internal request highlights;
3. assigned/confirmed status appears.

No connector line.

No moving data packet.

Total:

```text
~900ms
```

---

# 23. Integrations diagram animation

Use event-log progression.

Sequence:

```text
Payment received
↓
Record updated
↓
Confirmation sent
```

Each new row:

```text
opacity 0 → 1
y 4px → 0
```

Stagger:

```text
130ms
```

Total:

```text
~800ms
```

Idle.

---

# 24. Mobile What We Build carousel

The primary animation is the user's swipe.

Do NOT autoplay.

Use native:

```css
scroll-snap-type: x mandatory;
```

When card is >~65% visible:

- border becomes slightly stronger;
- diagram state may activate;
- card opacity 0.88 → 1.

Non-active peeking card:

```text
opacity ~0.82–0.9
```

Do not blur it.

Do not scale below ~0.99.

---

# 25. Carousel active-card animation

When a new card becomes active:

- run that card's internal diagram sequence once;
- do not replay continuously while user is swiping;
- stop previous card's sequence.

This is important.

Each swipe should feel like revealing a small interactive demonstration.

---

# 26. Featured Customers section

Section intro reveals first.

Then customer cards reveal:

```text
card 1
↓ 80ms
card 2
```

Each:

```text
opacity 0 → 1
y 10px → 0
```

---

# 27. Customer card hover

On desktop:

Image:

```text
scale 1 → 1.012
```

Card border:

```text
slightly stronger
```

Title:

```text
slightly brighter
```

Arrow:

```text
translateX 3px
```

Duration:

```text
image 400ms
UI 160ms
```

No dramatic card lift.

---

# 28. Customer card press

If entire card is clickable:

```text
scale 0.995
```

for:

```text
~100ms
```

Only on press.

Do not retain scale afterward.

---

# 29. Built for Complexity — entrance

Reveal text first.

Diagram appears 100ms later.

Diagram should not animate until fully visible enough.

Use:

```text
amount ~0.35
```

for narrative start.

---

# 30. Built for Complexity — narrative animation

Approved concept:

```text
Assign
→
4 checks
→
Assignment created
```

Sequence:

1. Assign button enters active state.
2. `Driver available` resolves.
3. `Vehicle available` resolves.
4. `Capacity valid` resolves.
5. `No schedule conflict` resolves.
6. `Assignment created` appears.

Check stagger:

```text
100–120ms
```

Total:

```text
~1.1–1.4s
```

Idle:

```text
5–7s
```

---

# 31. How We Work section

This should still animate, but more editorially.

On entrance:

```text
heading
↓
step 01
↓
step 02
↓
step 03
↓
step 04
```

Stagger:

```text
70ms
```

Each step:

```text
opacity 0 → 1
y 8px → 0
```

Optional subtle vertical guide:

```text
scaleY 0 → 1
transform-origin: top
duration ~700ms
```

No sticky storytelling.

No scroll-jacking.

---

# 32. How We Work hover

Desktop only.

Hover step:

- number/title brighter;
- supporting text increases contrast slightly;
- guide marker becomes accent.

Duration:

```text
160ms
```

---

# 33. Engineering section entrance

Reveal:

```text
heading/copy
↓ 100ms
architecture stack
```

Stack layers appear sequentially.

Use:

```text
top → bottom
```

or:

```text
bottom → top
```

Choose one and keep it consistent.

Recommended:

```text
bottom → top
```

because it suggests foundation → interface.

Stagger:

```text
60ms
```

Movement:

```text
y 6px
```

Very subtle.

---

# 34. Engineering technology labels

After stack settles:

```text
TypeScript · React · Next.js
Python · PostgreSQL
```

fade in as one group.

Delay:

```text
120ms
```

No logo animations.

---

# 35. Final homepage CTA

Reduce motion intensity here.

Reveal heading:

```text
opacity 0→1
y 8px→0
```

Body:

```text
70ms later
```

CTA:

```text
70ms later
```

No ambient animation.

The page should become visually calmer near conversion.

---

# 36. Footer entrance

Do not heavily animate footer.

Optional:

- logo/statement fade once;
- link groups fade with tiny 40ms stagger.

No large translate.

No footer background motion.

---

# 37. Customers page

Use whole-site motion consistently.

## Hero
Same editorial reveal.

## Case-study cards
Stagger 60–80ms.

## Hover
Same image/card/arrow treatment as homepage.

## Empty placeholders
No looping skeleton animations.

If placeholder exists:

```text
Case study coming soon
```

can simply fade with card.

---

# 38. Case-study detail page

Keep motion restrained.

## Hero

Sequence:

```text
back link
eyebrow
title
summary
facts
hero image
```

Use subtle stagger.

---

# 39. Case-study facts

Reveal as one grid/group.

Do not animate individual numbers dramatically.

No counters.

No counting-up metrics.

---

# 40. Case-study screenshots

On scroll entrance:

```text
opacity 0 → 1
y 10px → 0
duration 420–500ms
```

Desktop hover:

```text
scale 1 → 1.008
```

No hover zoom on mobile.

---

# 41. Case-study alternating sections

If image/text sections alternate desktop alignment:

Do not animate left section from left and right section from right.

That becomes cliché.

Use same subtle vertical reveal for both.

Consistency is more premium.

---

# 42. Case-study testimonial

If present:

- quote fades;
- attribution 80ms later.

No giant quotation-mark animation.

---

# 43. Next case study block

Hover:

- background/surface slightly brighter;
- arrow moves 3px;
- preview image scales 1.01 if present.

Duration:

```text
160–400ms depending on property
```

---

# 44. Services page

Every service block should reveal.

Use alternating *timing*, not alternating direction.

Example:

```text
service title/copy
↓ 80ms
examples/supporting structure
```

Do not slide services in from alternating sides.

---

# 45. Services page hover

If services have example rows/cards:

Hover:

- row background lifts subtly;
- border contrast increases;
- title/text slightly brighter.

Duration:

```text
160ms
```

No accordion unless already designed.

---

# 46. Company page

Hero reveal.

Philosophy statement:

```text
opacity 0 → 1
y 10px → 0
```

Principles:

```text
Understand before building
Solve the workflow
Keep complexity where it belongs
Build for real use
Stay pragmatic
```

stagger:

```text
60ms
```

Hover:

- principle title brightens;
- optional number/accent appears.

No decorative animation.

---

# 47. Contact page entrance

Sequence:

```text
eyebrow
heading
body
form
```

Form appears as one block.

Do not animate each field entrance individually.

---

# 48. Form field focus

On focus:

- border contrast increases;
- background lifts slightly;
- label becomes slightly brighter.

Duration:

```text
100–160ms
```

No glow.

---

# 49. Form validation

Error message:

```text
opacity 0 → 1
y -2px → 0
duration 160ms
```

No shake.

No red flashing.

---

# 50. Form submit

When actually submitting:

Button:

```text
Send project inquiry
→ Sending…
```

Optional small spinner.

Success:

```text
form fades to success state
duration ~280ms
```

Do not fake success if no backend exists.

---

# 51. Mobile navigation

Hamburger:

```text
hamburger → close
```

Duration:

```text
180ms
```

Panel:

```text
opacity 0→1
y -6px→0
duration 240ms
```

Links:

```text
20–30ms stagger
```

Closing faster:

```text
180ms
```

---

# 52. Mobile button press

Because hover is unavailable:

On tap:

```text
scale 1 → .99
```

Very short:

```text
~80–100ms
```

Return immediately on release.

---

# 53. Mobile card tap

Only animate on tap if card is actually clickable.

If informational:

do nothing.

Do not create meaningless press feedback.

---

# 54. Privacy page

Minimal.

Hero/title reveal.

Body content can fade in as one group.

No animation per paragraph.

---

# 55. Background movement

Default:

```text
none
```

The site should not have constantly moving gradients.

If subtle grid exists:

- static;
- maybe fade opacity on section reveal;
- do not pan/rotate.

---

# 56. Border animation

Borders are a major part of this visual language.

Use border transitions frequently but subtly.

Hover:

```text
border-color:
quiet → slightly brighter
```

Duration:

```text
160ms
```

Do not animate border width.

---

# 57. Surface animation

Cards/buttons may shift between existing surface tokens.

Use:

```text
background-color 160ms
```

Do not animate large gradients.

---

# 58. Text color transitions

Use widely.

For:

- links;
- nav;
- card titles;
- diagram statuses.

Duration:

```text
160ms
```

This creates a large amount of perceived polish with almost no visual noise.

---

# 59. Icon motion

Only animate icons when tied to interaction.

Examples:

- CTA arrow moves;
- menu icon changes;
- disclosure chevron rotates if actually used.

Do not animate decorative icons continuously.

---

# 60. Hover media query

All hover enhancements must be wrapped conceptually by:

```css
@media (hover: hover) and (pointer: fine)
```

Touch gets static clarity.

---

# 61. Scroll-progress effects

Use very sparingly.

Allowed:

- subtle How We Work guide progress;
- optional active carousel index.

Avoid:

- global page progress bars;
- large parallax;
- heading opacity tied continuously to scroll.

---

# 62. Ambient diagram rule

Only one ambient diagram per viewport should actively animate at a time.

If hero is out of view:

stop it.

If Problem enters:

run Problem.

If Capability 02 is active in carousel:

run only Capability 02.

This avoids visual noise and saves resources.

---

# 63. Viewport-based activation

For every narrative diagram:

Use:

```text
inView >= ~50%
```

to activate.

When below threshold:

- pause;
- restore stable resting state;
- do not keep timers running.

---

# 64. Animation replay rule

Section entrance:

```text
once only
```

Diagram sequence:

```text
may repeat while in view
```

but only after:

```text
4–7 second idle
```

Mobile diagrams:

prefer:

```text
run once when active
```

rather than continuous repetition.

---

# 65. Mobile animation density

Reduce desktop motion by roughly:

```text
30–50%
```

Mobile should have:

- menu motion;
- button/tap response;
- carousel swipe;
- one-shot diagram states;
- subtle reveals.

Remove:

- ambient hover-style effects;
- repeated loops where unnecessary;
- image zoom;
- extra parallax.

---

# 66. Reduced motion

Must be implemented across the full website.

When:

```text
prefers-reduced-motion: reduce
```

Then:

- no y/scale entrance transforms;
- use short opacity only;
- no diagram loops;
- final diagram states remain visible;
- menu still opens/closes;
- carousel still scrolls natively;
- no forced smooth programmatic scrolling;
- no decorative animation.

---

# 67. Performance rules

Prefer:

```text
transform
opacity
color
background-color
border-color
```

Avoid:

```text
large blur filters
animated box-shadow blur
layout properties every frame
huge clip-path sequences
```

No animation should cause layout shift.

---

# 68. Motion component architecture

Create shared primitives.

Suggested:

```text
<Reveal />
<RevealGroup />
<AnimatedLink />
<AnimatedButton />
<InViewDiagram />
```

Keep APIs simple.

Do not create an abstraction layer so large that basic CSS transitions become difficult.

---

# 69. Shared reveal variants

Suggested:

```ts
fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
```

Fast:

```ts
fadeFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.28 },
  },
};
```

Do not create a unique variant for every section.

---

# 70. Motion QA checklist

Audit every route.

For every element ask:

### Static content
Does it have an entrance if appropriate?

### Interactive content
Does hover/focus/press respond smoothly?

### Visual demonstration
Does animation explain something?

### Exit state
Does hover-out/close animate properly?

### Mobile
Does it still feel responsive without hover?

### Reduced motion
Is the information still complete?

---

# 71. Homepage animation map summary

```text
HEADER
scroll surface transition
nav hover
button hover

HERO
title reveal
paragraph reveal
CTA reveal
diagram reveal
diagram state loop

PROBLEM
section reveal
conflict → resolution animation

WHAT WE BUILD
intro reveal
matrix/card reveal
cell hover
4 diagram sequences
mobile carousel active-state animation

CUSTOMERS
section reveal
card reveal
image/card hover

COMPLEXITY
section reveal
Assign → checks → result animation

HOW WE WORK
step stagger
optional guide progress
step hover

ENGINEERING
section reveal
layer-by-layer stack entrance

FINAL CTA
restrained reveal

FOOTER
minimal fade + link hover
```

---

# 72. Other pages animation map summary

```text
CUSTOMERS
hero reveal
customer-card stagger
card/image hover

CASE STUDY
hero sequence
facts reveal
screenshot reveals
next-story hover

SERVICES
hero reveal
service-block reveal
row hover

COMPANY
hero reveal
philosophy reveal
principle stagger + hover

CONTACT
hero reveal
form reveal
focus/error/submit transitions

PRIVACY
minimal page reveal
```

---

# 73. Final quality target

The user should feel that:

- every hover has weight;
- every section enters naturally;
- every interactive state is smooth;
- every diagram teaches something;
- every page feels connected to the same motion system;
- mobile feels native rather than reduced;
- nothing bounces;
- nothing waits unnecessarily;
- nothing moves without reason.

The whole website should feel animated.

But at any random screenshot, it should still look calm.

That is the target.

---

# Final instruction to Codex

Animate the **whole Cerato Systems website**, not only the diagrams.

Use motion at three levels:

```text
1. microinteractions everywhere;
2. restrained viewport-triggered section entrances;
3. richer narrative animation inside the business-system diagrams.
```

Every major section should have an entrance.

Every meaningful interactive element should have hover/focus/press feedback.

Every conceptual diagram should have a short explanatory state sequence.

Every mobile interaction should feel native and responsive.

Do not use large cinematic effects.

Do not add scroll-jacking or heavy parallax.

Do not make the site constantly move.

The ideal result is:

> **motion is present everywhere, but attention is only drawn where it helps the visitor understand or act.**
