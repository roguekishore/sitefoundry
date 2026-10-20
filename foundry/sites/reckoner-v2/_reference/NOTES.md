# reckoner-v2 — notes

Captured in advance (`precapture.json`, landing page only; no other pages were asked for).
The fictional company is **Calder Grove Credit Partners** (alternative-credit manager, owned
by the fictional "Thornfield Holdings"). No text, logo, chart art or illustration is copied.

## Design language

- **Palette:** a quiet, institutional, paper-and-wine palette. The first screen is a deep
  merlot (`#3b1515`) with linen text (`#f9f7f4`); the rest of the page is linen paper with
  near-black charcoal text (`#202020`). Pure white cards (`#fff`) sit on the paper in the
  About block. Sand (`#dcd2ba`) is the button fill and the hairline colour; a darker tan
  (`#c3b39c`) is the one emphasis colour (the last words of a headline, the inset shadow of
  the little eyebrow box). Crimson (`#8e1717`) only marks the parent-company line and link
  hovers in the footer. Secondary text is charcoal at 70%, placeholder text at 50%.
- **Type:** one grotesk, Mona Sans, mostly at 400. Sizes are few and big-jumped: 110px hero
  (48px on phones), 32px section statements (22px on phones), 22px card titles, 14px for
  everything else (nav, buttons, body), 12px legal. Large text has slight negative tracking
  (-0.02em); line height ~1.1 for display, 1.4 for body.
- **Spacing rhythm:** generous: ~144px between sections on desktop (~88px on phones), 30px
  card padding, 20px gaps between cards. Gutter 50px desktop / 20px phone, content runs the
  full 1440 width.
- **Grid:** strategies: a centred 885px pair of cards; about: three equal columns across the
  page; footer: two halves split by a sand hairline, each half with its own sub-grid.
- **Shapes and depth:** flat. Square buttons (radius 0), 1px sand borders, 3px radius only on
  the eyebrow box, no drop shadows (only an inset tan glow inside the eyebrow box).
  Everything changes over a slow 0.5s ease.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Mona Sans (400/500/600) | neo-grotesk sans (GitHub's, open OFL) | normal width (variable, used at 100), large x-height | **Mona Sans Variable** (`@fontsource-variable/mona-sans`) | the original face is open-licence, so it is the closest possible match |
| Geist (500, ~11 elements: likely buttons/labels) | geometric-leaning grotesk | normal, large x-height | not used separately: the token set has one body and one display face, and at 14px the two read the same | keep tokens simple |
| Geist Mono (loaded, not seen in use) | mono | — | Geist Mono Variable as `--typeface-mono` | already installed, same family as the site loads |
| Wordmark (a transitional serif in the logo) | serif | — | not rebuilt: our wordmark is plain text in the theme's font with a lucide icon | logos are never copied |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header | `reckoner-v2-header` | 88px bar (content) | logo left; square translucent menu button right; bar stays fixed at the top with a merlot fill | logo left; right: a translucent linen/10 group holding three links with chevrons + a linen "Contact" button; scrolls away with the page | — | fixed on phones; hover tints; menu opens |
| 1 | hero | `reckoner-v2-hero` | **100svh** (sized by the window: section 1 shrinks by exactly the window difference in the shorter window) | merlot; 48px three-line headline from ~48% down; buttons under it | merlot; 110px two-line headline left at ~1/3 down; vertical small label on the right edge; lower part (hidden by the cookie banner in the capture) holds CTAs and a scroll cue | full-bleed background (the original's candlestick chart art) | scroll cue loops; button hovers |
| 2 | strategies | `reckoner-v2-strategies` | content (py ~144px) | centred eyebrow + 22px statement; cards stacked full width | centred eyebrow + 32px statement (max ~840px, tan last words); two 433px sand-outlined cards side by side, centred | one 120×120 illustration per card | statement fades in on entering view; card hover fill |
| 3 | about | `reckoner-v2-about` | content (py ~144px) | left eyebrow + 22px statement; white cards stacked | left eyebrow + 32px statement (max ~880px); three white cards across the page, ~355px tall | one 120×120 illustration per card (80×80 on phones) | statement fades in; cards rise 24px + fade in, staggered |
| 4 | footer | `reckoner-v2-footer` | content (685px desktop / 1078px phone) | one column: wordmark, statement, links, subscribe, contacts, social, parent line, legal | two halves split by a sand hairline; left: wordmark top, parent line/legal/sitemap at the bottom; right: statement, subscribe row, social + contacts at the bottom | — | link hovers (underline + crimson), button hover |

The captured "sections" were only two (one wrapper div + footer); split by what the crops show.
The cookie banner (CookieYes) is a third-party overlay, not the site's design: not rebuilt.
The 864×150 "video loop" is inside a fixed video pop-up (`p_vid--popup`) that never shows in
the frames: not rebuilt.

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header (phones) | scroll | stays fixed at the top | — | `fixed` below `lg`, `absolute` from `lg` (it scrolls away there, as in the 1440 frames) |
| header links | hover | link bg → tan at ~16%; Contact bg linen → sand | 0.5s ease | Tailwind `transition-colors duration-500` |
| header (phones) | click | menu opens | — | React state (hydrate: load); full-width merlot panel with 22px links |
| hero CTAs | hover | outline: transparent → linen fill, charcoal text; tinted: linen/10 → linen | 0.5s ease | `reckoner-v2-button` variants |
| hero scroll cue | loop | small arrow slides down and fades (translate + opacity), 500ms; paused on hover, its gap tightens | 0.5s loop | CSS `@keyframes reckoner-v2-hero-cue` in `reckoner-v2-hero.css`; `group-hover:[animation-play-state:paused]` |
| hero announcement link | hover | text → full linen, arrow nudges 0.125em right | 0.5s ease | `transition` + `group-hover:translate-x-[0.125em]` |
| strategies + about statements | entering view | opacity 0 → 1 | done within ~half a screen | CSS `animation-timeline: view()`, range `entry 20% entry 100%`, in `@supports` |
| about cards | entering view (first card scrubbed) | opacity 0 → 1, translateY 24px → 0, staggered | over ~half a screen | CSS `view()` per card, range shifted by `--i` per card |
| strategy cards | hover | fill transparent → `#f3f1ea` | 0.5s ease | `hover:bg-muted transition-colors duration-500` |
| sand buttons (Learn more, Subscribe) | hover | sand → merlot, text → linen | 0.5s ease | `reckoner-v2-button` variant `sand` |
| footer links | hover | underline + crimson | 0.5s colour | `hover:underline hover:text-glow` (see decisions) |
| whole page | wheel | Lenis smooth scrolling | Lenis default | `reckoner-v2-smooth-scroll` component (hydrate: load), off under reduced motion |

Hero entrance: GSAP is loaded, but the fold capture shows the final state and no load-in was
recorded, so none is added.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero background | full-bleed candlestick-chart artwork across the merlot screen | `background?: ReactNode`; empty: a soft radial wash of `highlight` at the upper right over the primary surface, no drawing |
| strategy card art | 120×120 line illustration, centred | `media?: ReactNode` per card; empty: 120×120 `bg-highlight/15` square with a sand hairline |
| about card art | 120×120 line illustration (80×80 on phones), top-left | `media?: ReactNode` per card; empty: same, `bg-muted` |

## Decisions

- **Tokens:** primary = merlot (hero surface and button hover), secondary = sand (buttons),
  border = sand, highlight = tan, muted = `#f3f1ea` (card hover), card = white. Crimson has
  no role of its own in the token set, so it rides on `glow` (unused elsewhere on this site):
  the footer parent line, footer link hovers and the footer wordmark icon use `text-glow`.
- `--section-y` and `--page-gutter` are `clamp()`s so one token gives ~88px/20px on phones
  and 144px/50px at 1440, as measured.
- `--radius` is 3px (the eyebrow box); buttons and cards are square (`rounded-none`).
- Shared pieces: `reckoner-v2-button` (sand / outline / tint / light), `reckoner-v2-eyebrow`
  (the little inset box + caps label), `reckoner-v2-wordmark` (icon + name + small caps line),
  `reckoner-v2-smooth-scroll`.
- Dark mode is the sibling: warm near-black page, merlot-brown cards, linen text, the hero a
  slightly lighter merlot so it still reads as a surface; sand stays the button colour.

## Comparison rounds

Note: the capture takes section crops and the full page without scrolling, so in ours the
scroll-revealed statements and About cards show as empty there (they wait at opacity 0 for
their view timeline). The scroll frames show them in place. The original's GSAP reveals had
already fired, so its crops show the text.

### Round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | same bar height (80), logo left, square tinted menu button; tiny tagline shows colour fringing in the screenshot (8px text, subpixel AA) | group of links + linen button at the same place and size (y 20–70) | fixed on phones, scrolls away on desktop: matches | n/a |
| hero | 100svh ✓; headline starts y≈393 (orig 405), 3 lines ✓; news link arrow sat apart from wrapped text | 100svh ✓; 110px headline at y≈300 (orig 305), two lines ✓ | scroll cue loop 500ms ✓ (`reckoner-v2-hero-cue`) | arrow now inline with the text |
| strategies | height 1156 (orig ≈1156) ✓; statement 22px centred ✓; cards stacked ✓ | 883 vs 865; centred 885px card pair ✓ | statement opacity reveal on entering view ✓ | ok |
| about | stacked white cards, 80px art ✓ | 960 vs ≈935; three white cards, 124px gap under the statement ✓ | statement fade ✓; cards opacity + 24px rise, entering view ✓ | ok |
| footer | single column in the original order ✓; 1162 tall vs 1078 (sitemap rows 36px apart vs 30) | **broken**: the phone `order-*` classes also reordered the desktop halves | link hover underline + crimson ✓; Sign up sand→merlot ✓ | `lg:order-none` on every item; sitemap rows 30px; desktop bottom row 16px tighter |
| page | — | — | Lenis seen ✓; no horizontal overflow at 360/768/1024 ✓ | — |

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | matches | matches | matches | — |
| hero | 844 = window ✓; news link wraps with the arrow inline | 900 = window ✓ | cue loop ✓ | — |
| strategies | 1156 vs ≈1156 ✓ | 883 vs 865 (our second card text runs two lines) | reveal ✓ | left: content-driven |
| about | 1294 vs ≈1253 (our copy wraps one line longer) | 960 vs ≈935 | fade + staggered rise ✓ | left: content-driven |
| footer | 1144 vs 1078 (our contact email is longer and wraps the consent note) | 690 vs 685 ✓; halves, hairlines and bottom rows in place | hovers ✓ | ok |
| overflow | fits at 360 / 768 / 1024 ✓ | | | |

Section pairs now read as the same design (apart from copy and placeholders). Remaining
differences are content lengths, the hero's lower half (hidden under the cookie banner in the
original's capture, so its buttons, news link and scroll cue are inferred from the hover rules
and the looping `scdAnimation`), and the crimson accent riding on `glow`.

Re-theme check: the full page under `sample-ember` (light) and `reckoner-v2-theme` dark both
hold together: hero takes ember's primary, cards/borders/buttons follow the tokens, the
display face swaps to the theme's serif.
