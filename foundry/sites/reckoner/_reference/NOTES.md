# reckoner: notes

Original: https://reckoner.com/ (an alternative-credit asset manager, WordPress + GSAP +
Lenis). Captured in advance (`precapture.json`, landing page only; no other pages asked for).
Recreated as **Wexmoor Credit Partners**, a fictional credit manager with its own copy.

## Design language

Quiet, private-bank calm. One deep merlot band (the hero, `#3b1515`) over a warm linen page
(`#f9f7f4`); everything else is linen, white and hairlines of sand (`#dcd2ba`).

- **Palette roles:** linen page · charcoal text `#202020` (secondary text at 70%) · white
  cards · merlot for the hero and for every button hover · sand for filled buttons and
  borders · ivory `#f3f1ea` as the card hover · camel `#c3b39c` for the faded tail of
  headings and the soft glow inside the eyebrow square · crimson `#8e1717` used sparingly
  (logo mark in the footer, the parent-company line, footer link hover).
- **Type scale** (desktop px, scaled with the window from 1.111vw): 110 display (hero, 1.0
  line height) · 32 section statements (1.1, -0.02em) · 22 card titles (1.2, -0.02em) ·
  16 form · 14 body/UI (1.4, +0.01em) · 12 small print. Phones: 48 hero, 22 statements,
  22 card titles, 14 body. Weights 400 for statements and titles, 500 hero and buttons,
  600 nav links. Eyebrows are 14px uppercase at +0.02em.
- **Spacing rhythm:** page gutter 50px desktop / 20px phone; sections are 140px apart
  vertically (each pads 140 top and bottom) on desktop, ~84px on phones. Cards sit 20px
  apart, pad 30px (20 on phones).
- **Layout grid:** full-bleed 12-ish column, content 50→1390 at 1440. Strategy cards form
  a centred 2-up block 886px wide; value cards a 3-up row across the full width; the footer
  splits 50/50 with a vertical hairline.
- **Shapes:** square corners everywhere (buttons, cards, inputs). Only the tiny eyebrow
  square has 3px. `--radius: 3px` so `rounded-sm` comes out square here and soft elsewhere.
- **Depth:** none. No drop shadows; only hairlines and the white-on-linen contrast. The
  one shadow is an inset camel glow inside the eyebrow square.

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| Mona Sans (400/500/600) | neo-grotesk sans with grotesque details (GitHub, OFL) | normal | tall | **Mona Sans Variable** (`@fontsource-variable/mona-sans`) | the original face itself is open-licence |
| Geist (nav and a few buttons, 500) | neo-grotesk sans | normal | tall | Mona Sans (body) | there's no third font token; at 14px the two read the same. Geist Mono is the mono token |

## Section map

Window: 390×844 and 1440×900. "Sized by the window" checked against the shorter-window
heights: the first captured section shrinks by exactly 900−675 / 844−633, the hero.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header | `reckoner-header` | content (82px phone / 90px desktop) | wordmark left, 40px menu square right, merlot, fixed | wordmark left; a translucent nav tray right (3 links with chevrons + linen "Contact" button), floats over the hero | none | fixed on phones; hover tints |
| 1 | hero | `reckoner-hero` | **100svh** | 48px title centred under the header, 3 lines | 110px title, two lines, left, centred in the window above a 90px bottom row; faint vertical side label at the right edge | background chart artwork (fills the hero, cover) | scroll-cue arrow loops; button hovers |
| 2 | strategies | `reckoner-strategies` | content (py 140 / 84) | eyebrow + 22px centred statement; cards stacked full width | eyebrow + 32px centred statement (max ~840px, last words camel); two bordered cards 433×348 centred, 20px apart | 120×120 line-art per card | statement fades in on entering view; card hover → ivory |
| 3 | about | `reckoner-about` | content | eyebrow + 22px left statement; white cards stacked | eyebrow + 32px left statement (max ~870px); three white cards 433×355 | 120×120 (80×80 phone) line-art per card | statement fades in; cards fade + rise 24px, staggered |
| 4 | footer | `reckoner-footer` | content (685 desktop / 1078 phone) | single column: wordmark, tagline, nav, subscribe, contacts, social, legal | 50/50 split by a hairline; left: wordmark top, parent line + copyright + legal links + nav column at the bottom; right: tagline, underline email field + sand Subscribe, contacts 2-up at the bottom | none | link hover crimson + underline; button hover merlot |

Not recreated: the cookie-consent banner (a third-party overlay, not the site's design) and
a hidden video popup (`p_vid--popup`, the capture's 864×150 "video loop" is inside it; it
never shows on the page).

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | scroll (phones) | stays fixed at the top on merlot | — | `fixed` below `lg`, `absolute` from `lg` (desktop scrolls away, as captured) |
| header | hover | nav link background → camel 16.5% | 0.5s ease | `transition-colors duration-500 hover:bg-glow/15` |
| header | hover | Contact button linen → sand | 0.5s ease | button `primary` variant, `hover:bg-glow` |
| hero | loop | scroll-cue arrow drifts down and fades | 500ms each way, infinite; pauses on hover | CSS `@keyframes reckoner-hero-cue`, `animation-play-state: paused` on hover |
| hero | hover | buttons → linen fill, charcoal text | background, border, colour 0.5s ease | Tailwind transitions in `reckoner-button` |
| strategies / about | entering view | statement opacity 0→1 | ~420px of scroll | CSS view timeline, `entry 40px → entry 340px` |
| strategies | hover | card background → ivory | 0.5s ease | `transition-colors duration-500 hover:bg-accent` |
| strategies / footer | hover | sand button → merlot, linen text | 0.5s ease | `reckoner-button` `secondary` variant |
| about | entering view (scrubbed) | cards opacity 0→1, translateY 24→0, staggered | first card leads the others by ~450px of scroll at 1440 | CSS view timeline per card, `entry 0px → entry 260px`, +60px per card from `lg` |
| footer | hover | link → crimson + underline | 0.5s | `hover:text-highlight hover:underline` |
| footer | hover | social arrow nudges 0.125em | 0.5s | `group-hover:translate-x-[0.125em]` |
| page | wheel | Lenis smooth scroll | — | `reckoner-smooth-scroll` (lenis, hydrate load), on page.tsx |

Motion inside media (the hero's candlestick artwork) is the placeholder's business.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero background | candlestick-chart artwork filling the hero (cover) | `media` prop; empty → a soft camel glow (radial gradient from `--glow`) on the merlot, full bleed |
| strategy card art | 120×120 thin line drawing, camel | `art` prop; empty → 120×120 `bg-muted` square with a sand hairline |
| value card art | 120×120 (80×80 phone) line drawing, slate | `art` prop; empty → same-size `bg-muted` square |

## Decisions

- **Light is the faithful mode**; `.dark` is the merlot world (merlot page, linen text,
  linen buttons), which is also what the hero and header wrap themselves in. The dark
  sibling of the whole page reads as "all hero colours".
- Token mapping: `primary` = merlot (light) / linen (dark) — every button hover lands on
  it; `secondary` = sand (light) / linen 10% (dark) — filled buttons; `accent` = ivory card
  hover; `border` = sand; `glow` = camel (eyebrow glow, heading tails, placeholder light);
  `highlight` = crimson.
- `--section-y` and `--page-gutter` use `clamp()` so they track the original's vw-based
  scale: 84→140px and 20→50px.
- **Hero bottom row is inferred.** The capture's cookie banner covers the bottom of the
  hero at both widths. The capture lists hover rules for two hero buttons ("Our
  Strategies" filled 10% linen, "Our ETFs" outlined) and a looping scroll-down cue
  (`scdAnimation`, `.scd`), and the title is centred in the space above ~90px at 1440, so
  we put the two buttons bottom-left and the cue bottom-right.
- Header wordmark: a lucide icon + the name in the display face + a tracked small-caps
  line. No dot-grid mark (that's their logo shape).
- Desktop dropdowns open on hover/focus (CSS only); the phone menu is a full-height merlot
  panel with 22px links (the size the capture found in the hidden phone menu).
- The scroll-cue loop is 500ms each way (alternate), the capture's 500ms duration.
- The social icon in the footer is a lucide `Users` square, not the network's logo.
- `package.json`/`pnpm-lock.yaml` were committed with other sessions' pending font
  additions in them (pnpm rewrites the whole file; they were already there).
