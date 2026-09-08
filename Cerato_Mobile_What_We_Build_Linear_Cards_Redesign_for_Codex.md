# Cerato Systems — Mobile “What We Build” Cards Redesign for Codex

## Objective

Redesign ONLY the mobile version of the four “What We Build” capabilities.

The current mobile layout takes too much vertical space.

The four existing diagrams are approved and their conceptual content should remain unchanged.

The desktop 2×2 implementation is also approved and MUST remain unchanged.

For mobile, use the supplied Linear reference as the structural inspiration:

> Each capability becomes one compact, self-contained feature card where the illustration occupies the upper part and the title + description occupy the lower part.

Do NOT copy Linear's artwork or content. Use only the composition principle.

---

# 1. Core mobile layout

Replace the current long editorial layout with four compact cards:

```text
01

┌──────────────────────────────┐
│                              │
│       EXISTING DIAGRAM       │
│                              │
│                              │
│ Operational platforms       │
│                              │
│ Bring people, workflows,     │
│ business rules, and          │
│ operational data into one    │
│ purpose-built system.        │
│                              │
└──────────────────────────────┘

02

┌──────────────────────────────┐
│                              │
│       EXISTING DIAGRAM       │
│                              │
│                              │
│ Business process automation │
│                              │
│ Replace repetitive manual    │
│ work with structured...      │
│                              │
└──────────────────────────────┘
```

The card itself should provide the structure.

Do NOT place the four cards inside another large gray container.

Use:

```text
Page background
→ individual feature card
```

Never:

```text
Page background
→ giant section card
→ capability card
→ diagram card
```

That creates excessive nesting.

---

# 2. Card width

On mobile:

```css
width: 100%;
```

Use only the normal page gutter:

```text
16px
```

Do not add another large horizontal inset around the cards.

At a 390px viewport the card should therefore be approximately:

```text
358px wide
```

This should feel substantial and visual, like the Linear reference.

---

# 3. Card height

Target:

```text
300–340px
```

Preferred:

```text
~320px
```

Do NOT allow cards to become 400–500px tall.

All four cards should have approximately the same visual height.

The entire section should feel significantly more compact than the current implementation.

---

# 4. Card structure

Divide each card conceptually into:

```text
~55–60% visual
~40–45% copy
```

For a ~320px card:

```text
visual region: 170–185px
copy region:   remaining space
```

Do not add a visible divider between these regions.

They should feel like one continuous composition.

---

# 5. Card surface

Use the existing Cerato / Linear-inspired surface treatment:

- subtle elevation from page background;
- near-black / slightly lifted neutral surface;
- 1px hairline border;
- restrained radius;
- no large shadow;
- no gradient-heavy treatment;
- no glassmorphism.

The card should feel quiet, architectural and content-led.

---

# 6. Number placement

Do NOT create a large empty area for:

```text
01
02
03
04
```

Place the number compactly near the top-left of the card.

Example:

```text
┌──────────────────────────────┐
│ 01                           │
│                              │
│       DIAGRAM                │
│                              │
│ Operational platforms       │
│ ...                          │
└──────────────────────────────┘
```

Recommended:

```text
top: 14–16px
left: 16px
```

Typography:

```text
10px
muted / tertiary
monospace if already established
```

The number is metadata, not a section heading.

---

# 7. Diagram region

Keep the existing diagrams.

However, integrate them visually into the feature card instead of putting them inside another large nested card.

The diagram region should occupy approximately:

```text
160–180px
```

Do NOT create:

```text
feature card
→ another full-width rounded diagram card
→ internal UI
```

Instead, where possible:

```text
feature card
→ diagram content directly
```

Internal conceptual UI elements can retain their own borders.

This is important.

---

# 8. Diagram positioning

The diagram should be visually centered in the upper portion of the card.

Give it approximately:

```text
16–20px horizontal inset
```

and enough top space for the number.

Suggested:

```text
number: 16px from top
diagram begins: ~42–48px from top
```

The visual should have room to breathe but not create a huge empty illustration canvas.

---

# 9. Operational Platforms

Keep the existing TODAY diagram.

Do not change its content.

It should occupy roughly:

```text
width: calc(100% - 32px)
height: ~130–145px
```

inside the visual area.

Keep:

```text
TODAY

08:30  Delivery       Assigned
09:10  Installation   Team 2
10:45  Pickup         Assigned
```

The active row remains the visual focus.

---

# 10. Business Process Automation

Keep the existing NEW REQUEST diagram.

Do not change its conceptual content.

Fit it into the same visual region as Operational Platforms.

It should not make this card taller.

If necessary, slightly tighten:

- row spacing;
- internal padding;
- vertical gaps.

Do NOT shrink typography excessively.

---

# 11. Customer and Employee Applications

Keep the approved diagram.

Fit it into the same visual region.

Do not let its internal structure determine the card height.

The outer card dimensions should remain consistent with the others.

---

# 12. Integrations and Connected Systems

Same rule.

Keep the diagram.

Fit it into the common visual region.

All four cards should look like members of one system.

---

# 13. Copy region

Place copy near the bottom of the card.

Recommended:

```text
diagram
↓ 20–24px

title
↓ 10–12px

description
```

Horizontal padding:

```text
16–20px
```

Bottom padding:

```text
20–24px
```

---

# 14. Titles

Use:

```text
font-size: 19–21px
line-height: 1.2
font-weight: existing feature-heading weight
```

Do not use the larger ~24px editorial heading size from the previous mobile layout.

These are compact feature cards.

Long titles may wrap naturally:

```text
Customer and employee
applications
```

and:

```text
Integrations and connected
systems
```

Do not reduce font size individually to force one line.

---

# 15. Descriptions

Use:

```text
15–16px
line-height: 1.5–1.6
```

Keep the EXACT existing descriptions.

Do not shorten marketing content.

Use the existing muted body color.

The description should generally occupy around 2–4 lines depending on title/card.

---

# 16. Equal card heights

Aim for visually equal cards.

Use something like:

```css
min-height: 320px;
```

or a shared responsive height if the content safely fits.

Do NOT clip copy to enforce equality.

If one long title requires slightly more height, all four cards may use that shared larger height.

Preferred maximum:

```text
~340px
```

---

# 17. Space between cards

Use:

```text
12–16px
```

between cards.

NOT:

```text
80–100px
```

The cards themselves now establish separation.

This is one of the main reasons this layout will make the section shorter.

---

# 18. Section background

Use the normal page background behind the cards.

Do NOT restore the giant shared gray panel.

Structure:

```text
page background

[ card 01 ]

16px

[ card 02 ]

16px

[ card 03 ]

16px

[ card 04 ]
```

---

# 19. Optional horizontal browsing — DO NOT use

Even though the Linear reference may visually resemble horizontally arranged cards at some widths, do NOT create a horizontal carousel on phone.

All four Cerato capabilities should remain vertically accessible.

No swipe dependency.

No clipped “next card” teaser.

Use one card per row.

---

# 20. Mobile card rhythm

At 390px:

```text
Section heading
Intro

↓ 40–48px

[ CARD 01 ]

↓ 14px

[ CARD 02 ]

↓ 14px

[ CARD 03 ]

↓ 14px

[ CARD 04 ]

↓ 64–80px

Next section
```

This should dramatically reduce the current section height.

---

# 21. Do not over-pad

One of the most important implementation details:

Do NOT stack padding from multiple wrappers.

There should effectively be:

```text
16px page gutter
+
16–20px card internal padding
```

Not:

```text
16px page
+ 24px section
+ 24px grid
+ 20px card
+ 16px diagram
```

Audit the DOM/CSS for redundant nested spacing.

---

# 22. Card visual density

These cards SHOULD be somewhat dense.

That is intentional.

They are feature summaries, not full sections.

The user should be able to scroll through all four relatively quickly and understand:

```text
01 — Operational platforms
02 — Business process automation
03 — Customer/employee apps
04 — Integrations
```

The diagrams provide detail for users who look closer.

---

# 23. Do not make them look like product screenshots

The diagrams remain conceptual illustrations.

The feature cards should not imply Cerato is showing screenshots of a Cerato SaaS product.

Maintain the abstract/example UI treatment already established.

---

# 24. Desktop protection

Desktop remains EXACTLY as currently approved.

Do not apply these compact cards to desktop.

Desktop:

```text
2 × 2 matrix
```

Mobile:

```text
4 compact stacked feature cards
```

These are intentionally different compositions.

---

# 25. Breakpoint

Apply this layout below approximately:

```css
@media (max-width: 767px)
```

Use the existing project breakpoint if it is close.

---

# 26. Narrow phones

At <= 360px:

```text
card width: full available width
internal padding: 14–16px
title: ~19px
description: 15px
```

Diagram may reduce slightly in height:

```text
~150–165px visual region
```

Do not reduce meaningful diagram text below readable size.

---

# 27. QA target

At 390px width, each capability should resemble the structural feeling of the supplied Linear reference:

- one strong card;
- illustration dominant in upper portion;
- concise typography underneath;
- restrained border;
- dark surface;
- no unnecessary nested backgrounds;
- compact vertical footprint.

But it must remain unmistakably Cerato and use the existing Cerato diagrams/content.

---

# 28. Final acceptance criteria

At 390px:

- one capability card should fit comfortably within substantially less than one viewport;
- user should see most or all of a card at once;
- no giant gray section background;
- no excessive empty space around `01 / 02 / 03 / 04`;
- diagram remains clearly readable;
- title and description remain inside the same visual object;
- cards are separated by only ~12–16px;
- all four have consistent dimensions;
- no horizontal overflow;
- no clipped content;
- desktop is completely unchanged.

---

# Final instruction

The current mobile section is too editorial and vertically expensive.

Change ONLY the mobile presentation to a **Linear-inspired compact feature-card system**.

Think:

> illustration + title + description = one object

rather than:

> number + illustration + title + description = an entire standalone page section.

Keep the four existing diagrams.

Keep all existing content.

Keep desktop unchanged.

Remove the giant shared section background and instead use four individual, compact, approximately 320px-tall feature cards stacked with small gaps.

The result should feel significantly tighter, more deliberate, and closer to the density and visual hierarchy of Linear's mobile feature cards.
