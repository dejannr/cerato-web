# Cerato Systems — Linear-Inspired Motion System for Codex
## Website-wide animation and interaction specification

### Purpose

Integrate a refined motion system across the existing Cerato Systems marketing website.

The visual design, content, responsive layout, diagrams, case-study structure, and page architecture are already established.

This document defines **how the site should move**.

The target is not to make the website “more animated.”

The target is to make it feel:

- precise;
- responsive;
- calm;
- polished;
- technically sophisticated;
- deliberately paced;
- alive without being distracting.

The motion should support the same impression as Linear:

> the interface responds immediately, supporting elements recede, important elements gain focus, and larger visual demonstrations unfold with controlled timing.

Do NOT copy Linear proprietary assets or exact animation choreography.

Use the motion principles and interaction quality as inspiration.

---

# 1. Research basis

The current Linear design philosophy emphasizes:

- reducing visual noise;
- allowing primary content to retain focus while navigation/supporting UI recedes;
- making the interface feel familiar and fluid;
- consistency in small interaction details;
- careful attention to hover and transition timing;
- many small acts of polish rather than large theatrical animation.

Linear has publicly described even a mismatched hover fade as a quality problem; one documented example expected a hover-out fade of approximately **150ms** rather than an instantaneous state reset.

Third-party analysis of the current Linear website also identifies a compact motion vocabulary around approximately:

```text
100ms
160ms
400ms
```

with ease-out and ease-in-out curves.

Treat those values as useful inspiration, not as an assertion that every Linear animation uses those exact numbers.

The implementation for Cerato should therefore use a small, consistent motion system rather than component-specific random timings.

---

# 2. Core motion philosophy

Every animation must do at least one of these jobs:

1. communicate hierarchy;
2. explain a state change;
3. guide attention;
4. clarify a diagram/workflow;
5. make interaction feedback feel immediate;
6. preserve continuity between states.

If an animation does none of these, remove it.

Do NOT animate something merely because it enters the viewport.

---

# 3. Motion hierarchy

Use three motion levels.

## Level A — microinteraction

For:

- buttons;
- links;
- nav items;
- menu icon;
- card hover;
- borders;
- background/surface states;
- focus;
- active states.

Timing:

```text
100–180ms
```

These should feel nearly instantaneous.

---

## Level B — component transition

For:

- mobile menu opening;
- content reveal;
- carousel progress;
- tab/state transition;
- diagram state change;
- card image emphasis;
- small layout transition.

Timing:

```text
220–420ms
```

These should feel smooth but not slow.

---

## Level C — narrative illustration

For:

- hero conceptual diagram;
- automation sequence;
- problem conflict → resolved state;
- business-rule validation;
- integration events.

Active sequence:

```text
~1.2–2.2s
```

Then remain idle for several seconds.

Do NOT run constant high-frequency animation.

---

# 4. Recommended implementation stack

Use a layered approach.

## 4.1 Primary animation library: Motion for React

Install/use:

```bash
npm install motion
```

Import:

```tsx
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
```

Use Motion for:

- viewport reveals;
- coordinated component sequences;
- layout transitions;
- mobile menu;
- diagram state transitions;
- opacity/transform animation;
- scroll-linked effects only where genuinely useful.

Use the modern `motion` package rather than adding the legacy `framer-motion` package to a new implementation.

---

## 4.2 CSS transitions for simple interaction states

Do NOT use Motion for every hover.

Use CSS for:

- button background;
- border color;
- text color;
- icon opacity;
- small translate;
- card border;
- navigation state.

Example:

```css
transition:
  color 160ms var(--ease-out),
  background-color 160ms var(--ease-out),
  border-color 160ms var(--ease-out),
  opacity 160ms var(--ease-out),
  transform 160ms var(--ease-out);
```

This keeps interaction code light.

---

## 4.3 Native browser APIs

Use:

- CSS scroll snap for mobile capability carousel;
- Intersection Observer / Motion `useInView`;
- native sticky positioning;
- native scrolling.

Do not add a carousel library for the mobile What We Build rail.

Do not add a smooth-scroll library unless the existing site already requires one.

---

# 5. Do NOT add GSAP by default

GSAP is powerful but unnecessary for the current website.

The Cerato site does not require:

- pinned cinematic scroll scenes;
- complex canvas timelines;
- path morphing;
- elaborate 3D sequences;
- scroll-jacking.

Motion + CSS is sufficient.

Only introduce GSAP later if a specific animation cannot be implemented cleanly with Motion.

Do not install GSAP preemptively.

---

# 6. Do NOT use a heavy WebGL / Three.js motion layer

The website's illustrations are UI/system-based.

Do not introduce:

- Three.js;
- WebGL;
- shader animations;
- animated particle backgrounds;
- 3D scenes.

These would change the character of the site and increase performance cost.

---

# 7. Global motion tokens

Create centralized motion tokens.

Suggested:

```css
:root {
  --motion-xs: 100ms;
  --motion-sm: 160ms;
  --motion-md: 280ms;
  --motion-lg: 400ms;

  --ease-out:
    cubic-bezier(0.25, 0.46, 0.45, 0.94);

  --ease-standard:
    cubic-bezier(0.4, 0, 0.2, 1);

  --ease-emphasized:
    cubic-bezier(0.22, 1, 0.36, 1);
}
```

Use the existing design-language timing tokens if they already define equivalent values.

Do not create dozens of easing curves.

---

# 8. Motion rule: animate opacity and transform first

Prefer:

```text
opacity
transform
clip-path only sparingly
```

Avoid frequent animation of:

```text
width
height
top
left
box-shadow blur
filter blur
background gradients
```

because these are more expensive and often visually louder.

When layout size changes are necessary, use Motion layout animation rather than manual frame-by-frame dimensions.

---

# 9. Global entrance behavior

Do NOT create a generic:

```text
every section fades up 40px
```

animation everywhere.

That becomes repetitive and cheap.

Instead, use a subtle base reveal only for major content groups.

Recommended:

```text
opacity: 0 → 1
translateY: 10–16px → 0
duration: 400ms
```

Trigger:

```text
once: true
amount: ~0.2
```

Use a slight stagger for related elements.

Example:

```text
eyebrow
heading
body
CTA
```

stagger:

```text
40–70ms
```

Do not stagger every paragraph line.

---

# 10. Reveal thresholds

Content should begin appearing shortly before it reaches the visual center.

Use approximately:

```tsx
viewport={{ once: true, amount: 0.2 }}
```

For large sections:

```text
amount 0.1–0.2
```

For small cards:

```text
amount 0.25–0.35
```

Do not make users wait until content is fully centered before it becomes visible.

---

# 11. Header animation

The sticky header should feel calm.

On initial load:

- logo/navigation visible immediately;
- do not animate header in from off-screen.

On scroll:

- background becomes slightly more opaque;
- bottom hairline becomes slightly more visible;
- change occurs smoothly over ~160ms.

Do not shrink the entire header aggressively.

Do not use a floating morphing pill effect.

---

# 12. Desktop navigation hover

For nav links:

Rest:

```text
secondary text
```

Hover:

```text
primary text
```

Duration:

```text
~160ms
```

Optional:

- tiny opacity/contrast shift;
- no animated underline sweeping across.

Keep nav interaction understated.

---

# 13. Primary button interaction

For `Start a project`:

Hover:

```text
translateY: -1px
```

plus subtle surface contrast change.

Active:

```text
translateY: 0
scale: 0.99–0.995
```

Duration:

```text
100–160ms
```

Do not use:

```text
scale 1.05
large glow
spring bounce
```

The button should feel mechanically precise.

---

# 14. Secondary button interaction

For dark/outline CTAs:

Hover:

- border slightly brighter;
- surface slightly lifted;
- text brighter.

Optional arrow:

```text
translateX: 2px
```

Duration:

```text
160ms
```

Arrow should return with the same timing.

Never make hover-out instantaneous.

---

# 15. Link arrow motion

For links such as:

```text
See our work →
Read case study →
Explore our services →
```

On hover:

```text
arrow translateX(2–3px)
```

Text color transition:

```text
160ms
```

Do not animate the entire link group significantly.

---

# 16. Hero text entrance

The hero should have the strongest entrance on initial page load.

Sequence:

```text
0ms    hero heading starts
60ms   supporting paragraph
120ms  CTA group
220ms  hero diagram begins appearing
```

Use:

```text
opacity
translateY 12–18px
```

Heading duration:

```text
~500ms
```

Supporting content:

```text
~400ms
```

Diagram:

```text
~500ms
```

Do not split the heading into per-word or per-character animation.

That would feel theatrical and reduce readability.

---

# 17. Hero diagram initial entrance

Desktop approved diagram:

- fragmented source group fades/raises into place;
- structured Request card appears slightly after;
- Activity appears last.

Do NOT animate the cards flying from different screen edges.

Recommended:

```text
sources opacity 0→1, y 10→0
request opacity 0→1, y 8→0
activity opacity 0→1
```

Stagger:

```text
~70ms
```

---

# 18. Hero diagram ambient sequence

After the entrance settles, the illustration may periodically demonstrate the concept.

Preferred desktop sequence:

1. Spreadsheet `Tomorrow` receives subtle accent.
2. Message `08:30` receives subtle accent.
3. Request `Tomorrow · 08:30` receives accent.
4. `Updated` and/or `Status updated` becomes slightly brighter.
5. Everything returns to rest.

Active duration:

```text
1.4–1.8s
```

Idle duration:

```text
4–7s
```

Do not animate source cards moving.

Do not run connector particles.

Do not repeatedly pulse borders.

---

# 19. Mobile hero diagram animation

Use the compact approved mobile composition.

Animation should be even simpler:

1. source fragments fade in;
2. final Request card appears;
3. one matching value highlights;
4. `Updated` appears.

Do not animate every field.

Do not autoplay frequently.

---

# 20. “The Problem” section reveal

Section copy:

- eyebrow;
- heading;
- body;
- visual.

Use a restrained stagger.

Do not reveal every paragraph separately.

Group all body paragraphs as one reveal unit.

Recommended:

```text
eyebrow + heading
↓ 80ms
body block
↓ 100ms
visual
```

---

# 21. Problem diagram animation

Concept:

```text
conflicting inputs → clear record
```

Desktop/mobile sequence:

1. source values visible;
2. conflicting times `09:00` / `10:30` receive brief warning emphasis;
3. `3 sources · 2 different times` appears;
4. final resolved record border becomes slightly stronger;
5. `Confirmed` appears.

No arrows.

No moving cards.

No shrinking/fusing effects.

The animation should clarify the information problem.

---

# 22. What We Build desktop 2×2 hover

The capability matrix should remain calm.

Desktop card/cell hover may:

- increase diagram border contrast slightly;
- increase title contrast;
- subtly dim unrelated decorative grid/background within the hovered cell.

Do NOT:

- lift entire matrix cells dramatically;
- scale cells;
- animate cell sizes;
- introduce large shadows.

Duration:

```text
160–220ms
```

---

# 23. Capability diagram ambient states

Each diagram may have one tiny behavior.

## Operational Platforms

Cycle only the active row.

Example:

```text
09:10 Installation
Unassigned → Team 2
```

Use:

- text/status fade;
- tiny highlight on the row.

Do not move whole rows.

---

## Business Process Automation

Animate checks:

```text
Customer verified
Limit verified
Required data complete
```

Each check appears:

```text
~120–160ms apart
```

Then:

```text
Ready for approval
```

becomes active.

Idle afterward.

---

## Customer and Employee Applications

Use matching-state emphasis:

- customer record highlights;
- corresponding internal record highlights.

Do not animate a connector line.

---

## Integrations

One event may enter the event log:

```text
Payment received
Record updated
Confirmation sent
```

Use opacity + 4px y motion.

No continuous streaming.

---

# 24. Mobile What We Build carousel motion

This is primarily **native scroll**, not a Motion animation.

Keep:

```css
scroll-snap-type: x mandatory;
```

Do not animate the carousel automatically.

Optional active-card effect:

As a card becomes dominant:

```text
opacity 0.85 → 1
border contrast slightly stronger
```

The peeking card should remain fully legible enough to signal continuation, but lower emphasis is acceptable.

Do not scale cards dramatically.

Maximum optional scale difference:

```text
0.99 → 1
```

Prefer opacity/border only.

---

# 25. Carousel scroll-state detection

If active-card styling is desired, use IntersectionObserver.

Do not run a `scroll` handler on every frame.

Example:

```text
threshold ~0.65
```

Update active index only when a card is mostly visible.

Use active index only for subtle styling/progress, not to force scroll positions.

---

# 26. Carousel progress indicator

Default:

No dots required.

If progress is added, use something quiet such as:

```text
01 / 04
```

or a thin progress bar.

Animate progress:

```text
160–280ms
```

Do not use large round carousel dots.

---

# 27. Customer / case-study cards

On desktop hover:

- image/screenshot may translate or scale very slightly;
- border contrast increases;
- arrow moves 2–3px;
- title brightness increases slightly.

Image scale maximum:

```text
1 → 1.015
```

Duration:

```text
~400ms
```

Use overflow clipping.

Do not zoom images aggressively.

---

# 28. Case-study image hover

For genuine customer screenshots:

Optional:

```text
scale 1 → 1.01
```

with:

```text
400ms ease-out
```

Only on devices with:

```css
@media (hover: hover) and (pointer: fine)
```

No image zoom on phone.

---

# 29. Built for Complexity diagram animation

Approved concept:

```text
simple Assign action
→ hidden checks
→ Assignment created
```

Animation:

1. button receives active state;
2. checks resolve sequentially;
3. result appears.

Check stagger:

```text
90–130ms
```

Whole sequence:

```text
~1.0–1.4s
```

Then idle.

Do not animate the form itself moving.

---

# 30. How We Work motion

This section should be simpler.

Do not animate each step with large entrance movement.

Use:

- subtle opacity reveal;
- optional thin progression line that fills as the section enters;
- active stage slightly brighter on desktop scroll if already easy to implement.

Do NOT turn it into a scroll-driven storytelling component.

It should remain editorial.

---

# 31. Engineering stack diagram

When entering viewport:

- layers appear from bottom to top OR top to bottom;
- use 50–70ms stagger;
- each layer moves only ~6–8px.

After entrance:

No ambient loop is necessary.

Technology labels may fade in last.

This diagram should feel structural, not active.

---

# 32. Final CTA reveal

Use very restrained motion.

Heading:

```text
opacity 0→1
y 10→0
```

CTA:

```text
opacity 0→1
```

No illustration animation.

The page should become calmer toward conversion.

---

# 33. Footer

No viewport reveal needed for every link.

The footer can simply exist.

Optional:

- logo/statement fade once;
- link hover transitions only.

Do not animate the footer as a large block.

---

# 34. Mobile menu animation

Use `AnimatePresence`.

Opening:

1. menu surface opacity appears;
2. menu panel translates `y: -6px → 0`;
3. links fade in with very small stagger.

Duration:

```text
220–280ms
```

Link stagger:

```text
20–30ms
```

Closing:

```text
160–220ms
```

Do not slide menu in from the right like a mobile app drawer unless the current layout specifically calls for that.

A header-attached dropdown/full-width panel is more consistent.

---

# 35. Mobile menu icon

Hamburger → close transition can morph/rotate subtly.

Duration:

```text
160–220ms
```

Avoid dramatic 180° spins.

Lines should move only enough to communicate state.

---

# 36. Page transitions

Do NOT add full-screen route transition overlays.

For navigation between:

```text
Customers
Services
Company
Contact
Case studies
```

use normal Next.js navigation.

If desired, page main content may fade:

```text
opacity 0 → 1
~220ms
```

but avoid delaying route navigation.

Perceived speed is more important.

---

# 37. Image loading transition

When an image becomes available:

```text
opacity 0 → 1
duration ~300ms
```

Do not blur from 20px to 0 unless the existing image pipeline already supports a lightweight placeholder.

Avoid expensive filter animations.

---

# 38. Focus states

Keyboard focus should appear immediately or within:

```text
100ms
```

Do not animate focus slowly.

Accessibility feedback must feel instant.

Focus ring opacity/border transition may be:

```text
100ms
```

---

# 39. Form field interaction

Contact form:

Focus:

- border slightly brighter;
- optional subtle surface change.

Duration:

```text
100–160ms
```

Error:

- error message fades in;
- no shake animation.

Success:

- success state fades in / swaps cleanly.

Do not use celebratory confetti.

---

# 40. Form submit state

Submit button:

```text
Send project inquiry
→ Sending…
```

Use text transition / spinner only if actual request is in progress.

Spinner:

- small;
- subtle;
- no full-page loading overlay.

If delivery backend is not connected, do not fake success.

---

# 41. Motion and scroll position

Do not tie large element transforms directly to scroll progress across the whole page.

Avoid:

```text
parallax every section
scale on scroll
rotating graphics with scroll
```

The Linear feeling comes from controlled interaction, not excessive scroll choreography.

---

# 42. Optional subtle parallax

If one hero background layer needs slight depth:

maximum movement:

```text
6–12px across large scroll range
```

Only desktop.

Do not apply to readable cards/text.

Do not implement unless it materially improves the composition.

Default is no parallax.

---

# 43. Spotlight / cursor effects

Do not add a large cursor-following glow globally.

If the existing design uses a subtle light response on selected large cards, it may be considered.

But default:

```text
NO global mouse spotlight.
```

Cerato should feel restrained.

---

# 44. Motion on mobile

Mobile should have approximately:

```text
50–70%
```

of desktop motion intensity.

Reduce:

- staggers;
- ambient loops;
- hover-style motion;
- background movement.

Preserve:

- menu transition;
- diagram state explanation;
- button press feedback;
- carousel snapping.

Do not run numerous animations while the user is scrolling.

---

# 45. Touch interactions

Never rely on hover on touch devices.

Use:

```css
@media (hover: hover) and (pointer: fine)
```

for:

- card hover;
- image zoom;
- arrow hover;
- spotlight effects.

Touch should get a clear static state.

---

# 46. Reduced motion

Use:

```tsx
const shouldReduceMotion = useReducedMotion();
```

and CSS:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is requested:

- remove entrance translations;
- use immediate or short opacity transitions;
- stop ambient diagram loops;
- stop non-essential sequences;
- keep final meaningful diagram state visible;
- keep native carousel scroll but avoid animated programmatic movement;
- keep essential menu state changes.

---

# 47. Visibility pausing

Ambient diagram animations must stop when:

- the diagram is outside viewport;
- the tab/document is hidden where practical.

Do not keep interval/timeline loops running for off-screen sections.

Use `useInView`.

Only activate the sequence when the component is substantially visible.

---

# 48. Ambient animation loop implementation

Do not use uncontrolled `setInterval` loops that continue forever.

Preferred:

- Motion sequence;
- controlled async loop;
- cleanup on unmount;
- stop when not in view;
- respect reduced motion.

Example conceptual state machine:

```text
idle
→ active sequence
→ settle
→ wait 5s
→ active sequence
```

Keep state deterministic.

---

# 49. Performance budget

Animation must not meaningfully hurt:

- LCP;
- CLS;
- INP;
- scroll performance.

Rules:

- transform/opacity preferred;
- avoid filter animation;
- avoid animated box shadows on large surfaces;
- do not animate huge background gradients;
- avoid dozens of simultaneous Motion components;
- do not initialize below-fold animations until needed;
- keep decorative SVGs lightweight.

---

# 50. `will-change`

Do not apply:

```css
will-change: transform;
```

globally.

Use only temporarily/locally on elements known to animate frequently.

Permanent `will-change` on many elements wastes memory.

---

# 51. Layout stability

Entrance animations must not change document layout.

Do not animate:

```text
margin-top
section height
font size
```

during load.

Reserve illustration/image dimensions before animation.

No CLS caused by animation.

---

# 52. Component motion architecture

Create shared motion presets rather than ad hoc animation objects.

Suggested:

```ts
export const motionTokens = {
  duration: {
    xs: 0.1,
    sm: 0.16,
    md: 0.28,
    lg: 0.4,
  },
  ease: {
    out: [0.25, 0.46, 0.45, 0.94],
    emphasized: [0.22, 1, 0.36, 1],
  },
};
```

Shared variants:

```text
fadeIn
fadeUp
staggerContainer
menuPanel
diagramHighlight
```

Do not define 30 variants.

---

# 53. Recommended generic reveal preset

Conceptually:

```tsx
const reveal = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
```

Use selectively.

Do not apply it to every DOM node.

---

# 54. Recommended stagger container

Conceptually:

```tsx
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};
```

Use for:

- hero groups;
- card internals where useful;
- mobile menu links.

Not for long paragraphs.

---

# 55. Avoid spring by default

Linear-like motion usually feels controlled rather than playful.

Default transitions should use bezier easing.

Use spring only for very small physical interactions where it clearly improves feel.

If spring is used:

- high damping;
- minimal overshoot.

Do not use bouncy spring presets.

---

# 56. Cursor/hover latency

Hover feedback should begin immediately.

Do not use intentional delay before hover.

Transition duration controls smoothness.

Example:

```text
pointer enters
→ transition begins immediately
→ settles ~160ms
```

Same on hover-out.

This consistency is important.

---

# 57. Hover-out consistency

Every hover animation must define the same quality on exit.

Do not implement:

```text
hover-in: 160ms
hover-out: instant
```

The documented Linear quality example specifically demonstrates why inconsistent exit animation makes interactions feel wrong.

Audit both directions.

---

# 58. Loading and hydration

Do not hide the entire page until Motion hydrates.

Initial static HTML must remain useful.

Where possible:

```text
SSR-visible static content
```

Then enhance.

Avoid initial flicker from:

```text
opacity: 0
```

before hydration unless implementation is known to be stable.

For important above-fold content, consider explicit initial behavior that avoids blank SSR.

---

# 59. Hero first-paint rule

Hero heading and CTA must never remain invisible if JavaScript fails.

Animation is enhancement.

Do not rely on JS to make primary content visible.

---

# 60. Diagram accessibility

Conceptual illustrations that communicate information should have:

- concise accessible description where appropriate;
- decorative internal micro-elements hidden from assistive tech if redundant.

Animation should not be required to understand the diagram.

Static final/rest state must communicate the concept.

---

# 61. Page-by-page motion

## Home

Most motion lives here.

Use:

- hero entrance;
- hero diagram;
- problem diagram;
- capability diagram states;
- carousel native motion;
- case-study card hover;
- complexity validation;
- subtle engineering reveal.

---

## Customers

Keep calmer.

Use:

- hero reveal;
- case-study cards;
- image hover;
- arrow interaction.

No large ambient illustration loops.

---

## Case study detail

Very restrained.

Use:

- hero/title reveal;
- screenshot fade;
- optional subtle image scale on desktop hover;
- section reveal sparingly.

The content and screenshots should carry the experience.

---

## Services

Use:

- hero reveal;
- service block reveal;
- small illustrative state transitions only if diagrams exist.

No decorative animation added solely to fill the page.

---

## Company

Mostly typography.

Use:

- hero reveal;
- philosophy callout reveal;
- values/principles subtle stagger.

No animated business diagrams unless already present.

---

## Contact

Minimal motion.

Use:

- hero reveal;
- focus;
- validation;
- submit state.

---

# 62. Mobile carousel special rule

The What We Build horizontal rail is an interaction already.

Do not also animate cards entering aggressively.

When the section first appears:

- rail can fade in;
- perhaps y 8px → 0.

Then stop.

Native user scrolling is the animation.

---

# 63. Scroll snap feel

Use:

```css
scroll-snap-type: x mandatory;
```

but do not programmatically force the active card on every scroll event.

Let the browser settle naturally.

The motion should feel physical because it is native.

---

# 64. Avoid scroll-jacking

Never intercept wheel/touch input to advance sections.

Do not turn vertical page scrolling into horizontal carousel navigation.

Users manually swipe the carousel when desired.

---

# 65. Optional diagram hover exploration

Desktop diagrams can respond to hover only when it helps explain relationships.

Example:

Hero:

Hover Spreadsheet:

- Spreadsheet border slightly stronger;
- matching Request data line slightly stronger.

Duration:

```text
160ms
```

This is optional.

Do not implement if it adds complexity or creates bugs.

---

# 66. Motion density rule

At any one moment on a normal viewport, avoid more than:

```text
2–3 independently moving regions
```

If hero animation is running, do not also run multiple background animations.

If the user scrolls into Capability diagrams, off-screen hero loops should stop.

---

# 67. Idle state is important

Most of the site should be stationary most of the time.

Recommended ambient lifecycle:

```text
brief animation
long still state
brief animation
long still state
```

Not:

```text
everything continuously moving
```

This is critical to achieve a Linear-like calm feeling.

---

# 68. Motion consistency QA

Create a motion audit.

For every interactive component record:

```text
interaction
property
duration
easing
mobile behavior
reduced-motion behavior
```

Avoid accidental values such as:

```text
137ms
250ms
350ms
700ms
```

unless there is a specific reason.

Prefer shared tokens.

---

# 69. QA — hover

Test every desktop hover:

- enter smooth;
- exit smooth;
- no flicker;
- no layout shift;
- no border causing size jump;
- no text reflow;
- no pointer dead zone created by transform.

---

# 70. QA — scroll

Scroll entire homepage slowly and quickly.

Check:

- no reveal animations lag behind fast scrolling;
- no content appears blank for too long;
- no loops continue off-screen;
- no jerky re-entry;
- animations set `once: true` where appropriate.

---

# 71. QA — mobile

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

- motion does not make page feel slower;
- no diagram reflow during animation;
- carousel remains native;
- menu is responsive;
- ambient loops are reduced;
- no hover assumptions;
- reduced motion works.

---

# 72. QA — low-end device simulation

Use browser CPU throttling.

Check:

- hero remains smooth;
- no frame drops from diagram animation;
- no long tasks caused by motion;
- carousel stays 60fps-feeling;
- scroll stays responsive.

If an animation drops frames, simplify it.

---

# 73. QA — reduced motion

Enable operating-system/browser reduced motion.

Review the entire site.

Expected:

- content visible;
- diagrams understandable;
- menu works;
- carousel works;
- no ambient loops;
- no large translate entrance;
- no loss of information.

This is release-blocking.

---

# 74. QA — screenshots

Animations cannot be used to hide poor static composition.

Pause animations / capture resting frames.

Every section must still look complete.

Especially:

- hero;
- problem;
- What We Build;
- complexity;
- engineering.

---

# 75. What NOT to implement

Do NOT add:

- page-wide smooth-scroll inertia;
- scroll-jacking;
- huge parallax;
- cursor trails;
- floating particles;
- continuous glowing borders;
- gradient waves;
- animated noise;
- 3D tilt cards;
- excessive blur transitions;
- per-character heading reveals;
- autoplay carousel;
- infinite carousel;
- bouncing buttons;
- rotating icons;
- playful elastic springs;
- full-page loading animation;
- cinematic route transitions.

These would make Cerato less Linear-like, not more.

---

# 76. The core Linear-like feeling to reproduce

The goal is not visual spectacle.

The goal is:

### Immediate
Interactions respond as soon as the user acts.

### Smooth
Nothing snaps accidentally between states.

### Consistent
Similar interactions use the same timing.

### Hierarchical
Motion increases focus on what matters and lets secondary UI recede.

### Purposeful
Diagrams animate to explain their logic.

### Calm
The interface spends more time still than moving.

### Fast
Motion never makes the user wait.

---

# 77. Implementation order

Implement in this order:

1. motion tokens;
2. button/link/nav microinteractions;
3. mobile menu;
4. base section reveal utility;
5. hero entrance;
6. hero diagram sequence;
7. problem diagram;
8. capability diagrams;
9. What We Build carousel active styling, if needed;
10. complexity diagram;
11. engineering reveal;
12. customer-card hover;
13. form interactions;
14. reduced-motion handling;
15. visibility pausing;
16. performance QA;
17. full-site consistency audit.

Do not animate everything at once.

---

# 78. Final instruction to Codex

Add motion to Cerato Systems as a **system**, not as isolated effects.

Use:

```text
Motion for React
+
CSS transitions
+
native browser scrolling / CSS scroll snap
```

Do not install a heavy animation stack unnecessarily.

Use a compact timing vocabulary approximately centered around:

```text
100ms
160ms
280ms
400ms
```

with controlled ease-out/ease-in-out curves.

Use animation heavily only where it explains the conceptual diagrams.

Use restrained reveal motion for page content.

Use immediate, consistent microinteractions for buttons, links, cards, forms, and navigation.

Pause ambient sequences when they are off-screen.

Reduce motion significantly on mobile.

Fully respect `prefers-reduced-motion`.

Most importantly:

> **The site should feel responsive and alive, but rarely look like it is “playing an animation.”**

That distinction is the target.
