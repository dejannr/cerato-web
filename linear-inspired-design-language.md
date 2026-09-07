# Linear-Inspired Web Design Language

> **Purpose:** A practical design book for coding agents (Codex, Cursor,
> Claude Code, etc.) to reproduce the visual language of Linear's public
> marketing website.
>
> **Reference date:** September 2026
>
> **Status:** Unofficial, observational specification. Linear's internal
> design system is not public. Values below combine Linear's official
> public brand guidance with measurements/observations of the live
> `linear.app` site and independent design-system extractions. Treat
> this as a reproduction guide, not an official Linear design-system
> document.

------------------------------------------------------------------------

## 0. Codex: read this first

When implementing UI from this file:

1.  Prefer **restraint over decoration**.
2.  Use the tokens in this document. Do not invent random colors, radii,
    shadows, or spacing.
3.  The default visual environment is **near-black**, not pure black.
4.  Typography is the main visual hierarchy. Use **Inter Variable**,
    subtle weight differences, tight display tracking, and generous
    whitespace.
5.  Surfaces should usually be separated by **1px low-contrast borders
    and small background shifts**, not heavy shadows.
6.  Keep saturation scarce. Accent colors must communicate state,
    action, or brand---not fill empty space.
7.  Avoid generic "SaaS template" styling: no giant gradients
    everywhere, excessive glassmorphism, oversized pills, thick borders,
    or colorful card grids.
8.  Interfaces should feel **dense, precise, quiet, technical, and
    fast**.
9.  Prefer small, deliberate motion. UI should never bounce or feel
    playful.
10. If an exact value is not specified, choose the closest token rather
    than introducing a new one.

------------------------------------------------------------------------

# 1. Design character

Linear's visual language can be summarized as:

-   dark-native
-   neutral-first
-   typography-led
-   highly structured
-   compact but not cramped
-   low visual noise
-   subtle depth
-   hairline borders
-   restrained accent usage
-   precise alignment
-   product UI used as marketing imagery
-   minimal ornament
-   fast, short transitions

The page should feel like a high-end engineering/product tool rather
than a conventional marketing template.

## Core rule

**Structure creates the visual interest.**

Do not compensate for weak layout with gradients, shadows,
illustrations, or decorative blobs.

------------------------------------------------------------------------

# 2. Color system

## 2.1 Core dark palette

``` css
:root {
  --bg: #08090a;
  --surface-0: #0f1011;
  --surface-1: #151617;
  --surface-2: #1c1c1f;

  --text-primary: #f7f8f8;
  --text-secondary: #8a8f98;
  --text-tertiary: #62666d;

  --border-subtle: #23252a;
  --border-default: #26262a;

  --accent: #5e6ad2;

  --danger: #eb5757;
  --warning: #f2994a;
  --success: #4cb782;
}
```

### Usage

  Token                      Value Use
  -------------------- ----------- -----------------------------
  `--bg`                 `#08090a` main page canvas
  `--surface-0`          `#0f1011` subtle elevated region
  `--surface-1`          `#151617` controls / nested panels
  `--surface-2`          `#1c1c1f` stronger panel/card
  `--text-primary`       `#f7f8f8` headings, important labels
  `--text-secondary`     `#8a8f98` body copy, descriptions
  `--text-tertiary`      `#62666d` metadata, quiet labels
  `--border-subtle`      `#23252a` most separators
  `--accent`             `#5e6ad2` selected/action/brand state

## 2.2 Official public brand neutrals

Linear's public brand page currently specifies:

``` css
--brand-mercury-white: #f4f5f8;
--brand-nordic-gray: #222326;
```

Use these when reproducing explicit Linear-brand assets or monochrome
brand treatments.

## 2.3 Color philosophy

Do:

-   use near-black instead of `#000`
-   create hierarchy using tiny luminance changes
-   use off-white rather than harsh pure white for large text
-   keep secondary copy visibly quieter
-   reserve violet/indigo for meaningful emphasis
-   let screenshots/product UI introduce additional color

Do not:

-   make every CTA purple
-   use multiple saturated brand colors in the same section
-   put colorful gradients behind ordinary cards
-   use pure white borders
-   make every card a visibly separate rectangle

------------------------------------------------------------------------

# 3. Typography

## 3.1 Primary typeface

**Inter Variable**

Recommended stack:

``` css
font-family:
  "Inter Variable",
  Inter,
  "SF Pro Display",
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Recommended OpenType settings:

``` css
font-feature-settings: "cv01", "ss03";
font-variation-settings: "opsz" 32;
```

Use the variable font when available. Linear-like typography depends on
intermediate weights such as `510` and `590`.

## 3.2 Monospace

Linear uses Berkeley Mono in some code/product contexts. Berkeley Mono
is commercial.

For a free implementation, use:

``` css
font-family:
  "JetBrains Mono",
  "IBM Plex Mono",
  "SFMono-Regular",
  ui-monospace,
  monospace;
```

Do not use monospace decoratively. Use it for code, IDs, literal values,
technical metadata, and keyboard shortcuts.

------------------------------------------------------------------------

# 4. Type scale

Use this as the default responsive scale.

``` css
:root {
  --font-display-xl: 72px;
  --font-display-lg: 64px;
  --font-display-md: 56px;
  --font-display-sm: 48px;

  --font-h1: 40px;
  --font-h2: 32px;
  --font-h3: 24px;
  --font-h4: 20px;

  --font-body-lg: 17px;
  --font-body: 15px;
  --font-body-sm: 13px;
  --font-micro: 12px;
}
```

### Recommended styles

#### Marketing hero

``` css
.hero-title {
  font-size: clamp(48px, 5vw, 64px);
  line-height: 1;
  font-weight: 510;
  letter-spacing: -0.022em;
}
```

For especially large displays, `72px` is acceptable on wide screens.

#### Large section title

``` css
.section-title {
  font-size: clamp(36px, 4vw, 56px);
  line-height: 1.08;
  font-weight: 510;
  letter-spacing: -0.022em;
}
```

#### Product/feature heading

``` css
.feature-title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 590;
  letter-spacing: -0.012em;
}
```

#### Body

``` css
.body {
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: -0.011em;
  color: var(--text-secondary);
}
```

#### Small UI

``` css
.ui-small {
  font-size: 13px;
  line-height: 19px;
  font-weight: 400;
}
```

#### Micro metadata

``` css
.micro {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
}
```

## Weight rules

Prefer:

-   `400` --- normal body/UI
-   `510` --- marketing/display headings
-   `590` --- emphasized UI headings
-   `680` --- rare strong emphasis

Avoid defaulting to `700` everywhere. Linear's typography feels refined
partly because headings are medium rather than conventionally bold.

------------------------------------------------------------------------

# 5. Spacing system

Base unit: **4px**

``` css
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```

## Layout rhythm

Typical usage:

-   icon ↔ label: `6–8px`
-   related UI controls: `8–12px`
-   title ↔ body: `12–16px`
-   card padding: `16–24px`
-   related content groups: `24–32px`
-   large marketing blocks: `48–64px`
-   section separation: `80–128px`
-   major homepage sections: approximately `96px+`

Do not make every gap the same.

------------------------------------------------------------------------

# 6. Container and grid

Recommended desktop shell:

``` css
.page-container {
  width: min(1200px, calc(100% - 48px));
  margin-inline: auto;
}
```

For large visual/product demonstrations, allow controlled breakout
beyond the text column.

### Breakpoints

``` css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1440px;
```

### Grid

Use 12 columns on desktop where useful.

``` css
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
gap: 24px;
```

Linear-like pages often use asymmetry: text may occupy 4--5 columns
while a product visual occupies 7--8.

------------------------------------------------------------------------

# 7. Border radius

Keep geometry controlled.

``` css
:root {
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-control: 6px;
  --radius-md: 8px;
  --radius-card: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}
```

Usage:

-   tiny status element: `2–4px`
-   badge: `4px`
-   input/button/product control: `6–8px`
-   standard card: `8–12px`
-   large showcase frame: `12–16px`
-   pill only for genuinely pill-shaped controls

Avoid applying `20–32px` rounding to every container.

------------------------------------------------------------------------

# 8. Borders and separators

Borders are one of the most important parts of the language.

Default:

``` css
border: 1px solid var(--border-subtle);
```

Prefer borders over shadows.

Good patterns:

``` css
border-top: 1px solid rgba(255,255,255,.08);
border-bottom: 1px solid rgba(255,255,255,.06);
```

For internal product mockups, separators can be even quieter:

``` css
border-color: rgba(255,255,255,.05);
```

------------------------------------------------------------------------

# 9. Shadows and elevation

Linear's aesthetic is predominantly flat.

Use elevation in this order:

1.  background shift
2.  border
3.  subtle highlight
4.  shadow only when floating above content

Recommended floating shadow:

``` css
box-shadow:
  0 8px 32px rgba(0, 0, 0, 0.35);
```

Optional tighter overlay:

``` css
box-shadow:
  0 4px 12px rgba(0,0,0,.22),
  0 12px 32px rgba(0,0,0,.28);
```

Do not give every card a shadow.

------------------------------------------------------------------------

# 10. Surface recipe

A typical Linear-like panel:

``` css
.panel {
  background: #0f1011;
  border: 1px solid #23252a;
  border-radius: 12px;
}
```

Nested area:

``` css
.panel-inner {
  background: #151617;
  border: 1px solid rgba(255,255,255,.05);
  border-radius: 8px;
}
```

Product-demo surfaces can use multiple nearly indistinguishable dark
levels to create depth.

------------------------------------------------------------------------

# 11. Buttons

## Primary light CTA

Marketing pages often work well with a neutral light CTA rather than
making every button violet.

``` css
.button-primary {
  min-height: 40px;
  padding: 0 18px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 9999px;

  background: #e5e5e6;
  color: #08090a;

  font: inherit;
  font-size: 14px;
  font-weight: 510;

  transition:
    background-color 180ms cubic-bezier(.22,1,.36,1),
    transform 180ms cubic-bezier(.22,1,.36,1);
}
```

Hover should be subtle: a slight luminance shift, not a dramatic glow.

## Secondary button

``` css
.button-secondary {
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #26262a;
  border-radius: 9999px;
  background: transparent;
  color: #f7f8f8;
}
```

## Product controls

Product UI controls should generally use `6–8px` radius instead of
marketing pills.

------------------------------------------------------------------------

# 12. Cards

Cards should not look like isolated dashboard widgets unless they need
to.

Default:

``` css
.card {
  padding: 24px;
  background: #0f1011;
  border: 1px solid #23252a;
  border-radius: 12px;
}
```

Preferred hierarchy:

-   border
-   surface shift
-   internal spacing
-   typography

Avoid:

``` css
/* NOT Linear-like */
box-shadow: 0 20px 80px purple;
border: 2px solid #555;
background: linear-gradient(...);
```

------------------------------------------------------------------------

# 13. Navigation

Navigation should be visually quiet.

Desktop guidance:

-   height around `64px`
-   centered max-width container
-   small-to-medium text
-   muted default links
-   white/off-white hover
-   one clear signup/open-app action
-   no oversized nav elements
-   minimal separators

Example:

``` css
.nav-link {
  font-size: 14px;
  line-height: 20px;
  color: var(--text-secondary);
  transition: color 150ms ease;
}

.nav-link:hover {
  color: var(--text-primary);
}
```

------------------------------------------------------------------------

# 14. Hero composition

A Linear-like hero should usually contain:

1.  restrained announcement/eyebrow, optional
2.  large medium-weight title
3.  short muted description
4.  one or two compact CTAs
5.  significant negative space
6.  product visualization rather than generic stock illustration

Recommended text width:

``` css
.hero-copy {
  max-width: 760px;
}
```

Description:

``` css
.hero-description {
  max-width: 620px;
  font-size: 17px;
  line-height: 26px;
  color: var(--text-secondary);
}
```

------------------------------------------------------------------------

# 15. Product mockups

This is central to Linear's marketing language.

Product visuals should feel like real software:

-   sidebars
-   tables/lists
-   issue IDs
-   status chips
-   avatars
-   thin dividers
-   tiny icons
-   muted metadata
-   realistic dense content
-   restrained colors
-   small radii
-   careful clipping

Do not create empty fake dashboards containing four giant KPI cards.

Product UI typography should be approximately:

-   `12–15px`
-   line height `16–22px`
-   weight `400–510`
-   muted labels
-   bright active row/title

------------------------------------------------------------------------

# 16. Status chips and badges

Keep chips compact.

``` css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 22px;
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
}
```

Prefer tinted text/dot + restrained background over saturated filled
pills.

------------------------------------------------------------------------

# 17. Icons

Icon style:

-   simple
-   geometric
-   thin/medium stroke
-   typically `14–18px` in product UI
-   `18–20px` for general controls
-   no cartoon styling
-   use consistent stroke width

Recommended libraries if exact Linear icons are unavailable:

-   Lucide
-   Radix Icons
-   custom minimal SVG

Do not mix icon families casually.

------------------------------------------------------------------------

# 18. Motion

Motion should communicate responsiveness.

Core token:

``` css
--motion-fast: 180ms cubic-bezier(0.22, 1, 0.36, 1);
--motion-default: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

Use for:

-   hover color
-   opacity
-   small transforms
-   menu appearance
-   accordion expansion
-   active indicator
-   subtle product-demo transitions

Good:

``` css
transition:
  opacity 180ms cubic-bezier(.22,1,.36,1),
  transform 180ms cubic-bezier(.22,1,.36,1);
```

Avoid:

-   springy bounce
-   long 700ms transitions
-   huge parallax
-   rotating decorative objects
-   animation on every element

Respect:

``` css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

------------------------------------------------------------------------

# 19. Gradients and lighting

Use gradients rarely and softly.

Acceptable:

-   faint radial illumination behind a hero product
-   subtle surface fade
-   mask/fade at viewport edges
-   low-opacity accent bloom for one focal moment

Example:

``` css
background:
  radial-gradient(
    circle at 50% 20%,
    rgba(94,106,210,.10),
    transparent 38%
  ),
  #08090a;
```

The gradient must not become the design.

------------------------------------------------------------------------

# 20. Images and media

Prefer:

1.  product UI
2.  purposeful diagrams
3.  carefully art-directed brand imagery
4.  restrained customer/company marks

Avoid generic stock photography unless the page specifically requires
it.

Screenshots should generally sit inside dark frames or merge naturally
into the canvas.

------------------------------------------------------------------------

# 21. Section architecture

A strong Linear-like landing page can follow:

``` text
Navigation
Hero
Product showcase
Customer/logo proof
Manifesto / positioning statement
3-part value proposition
Feature section
Feature section
Feature section
AI / automation showcase
Build / review / ship showcase
Customer story
Final CTA
Footer
```

Each major feature section should have a reason to exist visually.
Alternate layout structure rather than alternating random background
colors.

------------------------------------------------------------------------

# 22. Responsive behavior

## Desktop

-   generous horizontal whitespace
-   1200px-ish primary container
-   asymmetric multi-column layouts
-   large typography
-   product demos allowed to dominate

## Tablet

-   reduce display type
-   preserve two-column layouts where readable
-   reduce section spacing from `96–128px` toward `64–96px`

## Mobile

``` css
.hero-title {
  font-size: 44px;
  line-height: 1.02;
}

.section-title {
  font-size: 34px;
}

.page-container {
  width: min(100% - 32px, 1200px);
}
```

On mobile:

-   stack feature sections
-   keep product UI horizontally clipped or intentionally simplified
-   avoid shrinking complex desktop screenshots until text becomes
    illegible
-   preserve `16px` minimum comfortable page gutters
-   reduce decorative elements before reducing clarity

------------------------------------------------------------------------

# 23. Accessibility

Do not copy low contrast blindly.

Requirements:

-   interactive controls must have visible keyboard focus
-   body copy must remain readable
-   state must not rely only on color
-   honor reduced motion
-   maintain usable touch targets
-   use semantic HTML
-   maintain heading hierarchy

Suggested focus:

``` css
:focus-visible {
  outline: 2px solid rgba(126, 135, 255, .9);
  outline-offset: 2px;
}
```

------------------------------------------------------------------------

# 24. CSS starter tokens

``` css
:root {
  color-scheme: dark;

  /* Colors */
  --color-bg: #08090a;
  --color-surface-0: #0f1011;
  --color-surface-1: #151617;
  --color-surface-2: #1c1c1f;
  --color-fg: #f7f8f8;
  --color-muted: #8a8f98;
  --color-dim: #62666d;
  --color-border: #23252a;
  --color-border-strong: #26262a;
  --color-accent: #5e6ad2;
  --color-success: #4cb782;
  --color-warning: #f2994a;
  --color-danger: #eb5757;

  /* Typography */
  --font-sans: "Inter Variable", Inter, "SF Pro Display", system-ui,
               -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", "IBM Plex Mono", "SFMono-Regular",
               ui-monospace, monospace;

  /* Spacing */
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s5: 20px;
  --s6: 24px;
  --s8: 32px;
  --s10: 40px;
  --s12: 48px;
  --s16: 64px;
  --s20: 80px;
  --s24: 96px;
  --s32: 128px;

  /* Radius */
  --r-xs: 2px;
  --r-sm: 4px;
  --r-control: 6px;
  --r-md: 8px;
  --r-card: 12px;
  --r-lg: 16px;
  --r-xl: 24px;
  --r-full: 9999px;

  /* Motion */
  --ease-out-expo: cubic-bezier(.22, 1, .36, 1);
  --motion-fast: 180ms var(--ease-out-expo);
  --motion-default: 250ms cubic-bezier(.25,.46,.45,.94);

  /* Layout */
  --container: 1200px;
}
```

------------------------------------------------------------------------

# 25. Tailwind mapping

If using Tailwind, map the tokens instead of scattering arbitrary
values.

Conceptual mapping:

``` js
{
  colors: {
    linear: {
      bg: "#08090a",
      surface: "#0f1011",
      surface2: "#1c1c1f",
      text: "#f7f8f8",
      muted: "#8a8f98",
      dim: "#62666d",
      border: "#23252a",
      accent: "#5e6ad2"
    }
  },
  borderRadius: {
    xs: "2px",
    sm: "4px",
    control: "6px",
    md: "8px",
    card: "12px",
    lg: "16px"
  }
}
```

Agent rule: prefer semantic classes/components over repeated arbitrary
values such as `bg-[#0f1011]`.

------------------------------------------------------------------------

# 26. Component recipes

## Feature card

``` css
.feature-card {
  padding: 24px;
  background: var(--color-surface-0);
  border: 1px solid var(--color-border);
  border-radius: var(--r-card);
}

.feature-card__eyebrow {
  margin-bottom: 12px;
  color: var(--color-dim);
  font-size: 12px;
}

.feature-card__title {
  color: var(--color-fg);
  font-size: 20px;
  line-height: 28px;
  font-weight: 590;
}

.feature-card__body {
  margin-top: 8px;
  color: var(--color-muted);
  font-size: 15px;
  line-height: 24px;
}
```

## Product row

``` css
.product-row {
  min-height: 40px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255,255,255,.05);
  font-size: 13px;
}

.product-row:hover {
  background: rgba(255,255,255,.025);
}
```

## Input

``` css
.input {
  min-height: 36px;
  padding: 0 10px;
  color: var(--color-fg);
  background: #151617;
  border: 1px solid #26262a;
  border-radius: 6px;
  font-size: 13px;
}

.input:focus {
  border-color: rgba(94,106,210,.7);
  outline: none;
}
```

------------------------------------------------------------------------

# 27. Content style

Copy should also follow the design.

Preferred:

-   short declarative headings
-   restrained confidence
-   product-specific language
-   concrete capabilities
-   minimal exclamation marks
-   little hype
-   sentence-case headings
-   technical terms when appropriate

Avoid:

-   "Revolutionize your workflow!!!"
-   generic "unlock your potential"
-   excessive marketing superlatives
-   long centered paragraphs
-   emoji-heavy UI copy

------------------------------------------------------------------------

# 28. What makes a page NOT Linear-like

Reject an implementation if it has several of these:

-   pure `#000` canvas everywhere
-   default 700-weight Inter headings
-   giant blue/purple gradients
-   glass cards everywhere
-   large blurry shadows on every panel
-   20px+ radius on every object
-   excessive pill buttons
-   rainbow feature icons
-   oversized dashboard KPI cards
-   centered layout for every section
-   too much empty space inside product UI
-   body text brighter than necessary
-   random spacing values
-   animations longer than \~300ms for ordinary UI
-   generic stock illustrations
-   bright borders
-   every section placed in its own colored rectangle

------------------------------------------------------------------------

# 29. Visual QA checklist for Codex

Before considering a page finished, verify:

-   [ ] Inter Variable is actually loaded.
-   [ ] Display headings use \~510 weight rather than generic bold.
-   [ ] Display tracking is negative.
-   [ ] Main background is near-black `#08090a`.
-   [ ] Primary text is off-white, not harsh pure white everywhere.
-   [ ] Secondary copy is visibly muted.
-   [ ] Accent color is scarce.
-   [ ] Most panel separation uses subtle borders/background shifts.
-   [ ] Shadows are absent unless an element genuinely floats.
-   [ ] Spacing follows the 4px-based scale.
-   [ ] Controls use compact radii.
-   [ ] Product UI feels information-dense and realistic.
-   [ ] Icons use one consistent family.
-   [ ] Hover effects are subtle.
-   [ ] Motion is short and restrained.
-   [ ] Desktop layout has clear alignment/grid logic.
-   [ ] Mobile layout is intentionally redesigned, not merely shrunk.
-   [ ] Focus states and reduced-motion behavior are implemented.
-   [ ] No arbitrary visual token was introduced without a reason.

------------------------------------------------------------------------

# 30. Implementation priority

When matching the style, prioritize in this order:

1.  **Typography**
2.  **Background / neutral palette**
3.  **Layout and spacing**
4.  **Borders and surfaces**
5.  **Product-demo density**
6.  **Component geometry**
7.  **Accent usage**
8.  **Motion**
9.  **Decorative effects**

If the first five are correct, the page will already feel substantially
closer to Linear.

------------------------------------------------------------------------

# 31. Sources and confidence

This document is a synthesized implementation guide, not an official
Linear specification.

Primary reference:

-   Linear homepage: `https://linear.app/`
-   Linear brand guidelines: `https://linear.app/brand`

Independent measurements consulted:

-   DesignMD Linear specimen --- measured May 17, 2026
-   DesignSystems.one Linear extraction
-   Reseed linear.app extraction
-   DesignMunk Linear design export

### Confidence levels

**High confidence** - Inter Variable - near-black `#08090a` family -
off-white primary text - muted gray secondary text - restrained
borders - 4px-derived spacing rhythm - intermediate variable font
weights - negative display tracking - dark product-UI-driven visual
language

**Medium confidence** - exact individual surface colors across every
current page - precise radius assignment for every component - exact
shadow values - exact section spacing on every viewport

Linear changes its website over time. For pixel-critical reproduction,
inspect the specific current page/viewport in browser DevTools and treat
this file as the governing design philosophy/token baseline.

------------------------------------------------------------------------

# 32. Final instruction to coding agents

> Build interfaces that feel precise, quiet, fast, and intentionally
> engineered. Use typography and structure to establish hierarchy. Keep
> the palette neutral and the accent scarce. Prefer borders and subtle
> surface changes to shadows. Keep radii and controls compact. Use
> realistic product UI as the primary visual material. When uncertain,
> remove decoration rather than adding it.
