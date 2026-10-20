# growthbook — recreation notes

Original: https://www.growthbook.io/ (captured in advance, 2026-10-20; `precapture.json` lists no
other pages, and none were asked for: landing page only).

Fictional stand-in: **Northvane**, an experimentation / feature-flag / product-analytics
platform. All copy, customer names and numbers are invented.

## Design language

- **Palette roles.** A near-white page (`#fafafa`) with deep navy text (`#151e3d`), one brand
  violet (`#6e56cf`, hover `#5643b8`) for every solid button, links on hover and small icons. A
  pale lavender band surface (`#f6f2fd`) for two sections (case studies, SDKs). Dark moments are
  navy (`#151e3d`: testimonials, CTA card, footer), a deeper violet-black (`#1a1238`) for the
  case-study cards, and a violet→navy diagonal gradient band for the stats and deployment cards.
  Teal / mint (`#008573`, `#a1ded2`) is the second colour: the mint wash under "latest" posts, a
  teal card, the "half the cost" pin. Secondary text is a muted blue-grey (`#8b8b9c`), body copy a
  softer navy (`#303052`).
- **Signature details.** (1) Thin vertical page-frame rules at the container edges (x=80 and
  x=1360 at 1440; x=16 at 390), sometimes a middle rule at x=720. (2) A short multicolour
  "rail" (navy → violet → white → blue → navy → green → mint) riding the left rule and the left
  edges of cards, moving down as you scroll. (3) Mono eyebrows (IBM Plex Mono 14px) with a small
  violet line icon.
- **Type scale.** Inter, weight 400 almost everywhere (the headings are *light-feeling* regular
  weight, not bold). 1440: hero 68/1.1, section headings 56/1.2, card headings 48/1.2, stats
  40/1.3, quotes 20/1.75, lead 18/1.5, body 16/1.65, UI 14. 390: hero 44/1.1, headings 36/1.3,
  card headings 28, stats 36, body 14–16.
- **Spacing rhythm.** Sections breathe: 80px top/bottom in the banded sections, ~160px between
  feature rows. Content sits 36–40px inside the frame rule.
- **Layout grid.** 1280px container, two columns (text ~540 / media 578) for feature rows;
  three-up cards for case studies; five link columns in the footer. Phones stack everything,
  full-width 58px buttons.
- **Shapes and depth.** 8px button radius, 12px card/media radius (16px media on phones).
  Almost flat: hairline borders (`#d2d2db`, outline buttons `#b1b1be`) and one whisper shadow
  (`0 4px 20px rgb(0 0 0 / 4%)`) on tiles and the GitHub pill.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Inter (300–700, mostly 400) | neo-grotesk sans | normal width, tall x-height | **Inter Variable** (`@fontsource-variable/inter`) | the original uses Inter itself, so it is the faithful choice, not a default fallback |
| IBM Plex Mono 400 | monospace (grotesk-flavoured) | normal, tall x-height | **IBM Plex Mono** (`@fontsource/ibm-plex-mono`, 400 + 500) | open licence, the exact face |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement + nav | `growthbook-header` | content (158 / 120) | 3-line centred bar; logo, GitHub pill, burger | 38px violet bar; logo, 5 links (3 with chevrons), GitHub pill, Sign in, outline + primary buttons | — | sticky; hides upward on scroll down at desktop; hover colour |
| 2 | hero | `growthbook-hero` | content (905 / 1065) | centred 44px headline, stacked full-width buttons, full-bleed panel | centred 68px two-line headline, two 176×58 buttons, 1280×595 gradient panel with a segmented 3-tab switch and a screenshot overlapping its bottom | screenshot 860×443 (390×338 phones) per tab; panel backdrop | tab hover/active |
| 3 | trusted-by logos | `growthbook-logos` | content (~230) | caption + marquee | caption + marquee | — | marquee loop |
| 4 | one platform, three rows | `growthbook-features` | content (~2400) | heading; per row: eyebrow, heading, body, full button, square media | 68px heading; rows text-left / 578² media right | 3 × 578×578, r12 (358², r16 phones) | rail down the left rule |
| 5 | case studies | `growthbook-case-studies` | content (~908) | heading, outline button, one card + peek | lavender band, frame rules L/M/R, heading + button right; 3 cards 400×466 | customer logos (text) | rail; logo blur→sharp on entering view; carousel autoplay |
| 6 | stats + deployment | `growthbook-deploy` | content (973 / 1515) | stats stacked with rules; 2 cards stacked | violet→navy band; 3 stats with left rules; two white cards 630×496 | 2 × 80px icons | rail on card edges |
| 7 | integrations | `growthbook-integrations` | content (~760) | text, then 3 horizontal rows of tiles | text left, 3 columns of faded tiles right | tiles (text names) | columns drift vertically in a loop (rows horizontally on phones) |
| 8 | why us | `growthbook-why` | content (~760) | heading, horizontal tabs (underline), card carousel | heading; vertical tab list left, card carousel 317×396 right | card art | tab switch; carousel autoplay |
| 9 | speed and scale | `growthbook-scale` | content (~900) | text, then chart area | text left, chart area right with vertical grid + two pins | the curves illustration | pins glow pulse |
| 10 | latest posts | `growthbook-resources` | content (811 / 1509) | stacked cards | featured 488×275 left, three rows 219×122 right; mint wash | 4 thumbnails | thumbnail zoom on hover |
| 11 | SDKs | `growthbook-sdks` | content (655 / 1054) | text, buttons, then panel | lavender band, frame L/M/R; text left, white panel right (select, icon, code) | — | select switches snippet |
| 12 | testimonials | `growthbook-testimonials` | content (768 / 841) | arrows, one quote | navy gradient; arrows top-right; quotes 470 wide, inactive dimmed | customer logos (text) | carousel via arrows; rail on active quote |
| 13 | CTA | `growthbook-cta` | content (865 / 706) | backdrop band, navy card: art top-right, text, stacked buttons | navy card 1280×607 on a gradient band; art right | arrow art 480², backdrop | glowing bottom outline floats (15s loop) |
| 14 | footer | `growthbook-footer` | content (715 / 1473) | logo, blurb, 2-col link grid, socials, badges, legal | blurb + socials + badges left, 5 columns right, mono legal row | — | link hover |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scroll (pinned) | sticky; at desktop slides up 120px on scroll down, back on scroll up | 0.4s ease | `position: sticky` + small `useEffect` reading scroll direction; `hydrate: load` |
| header / everywhere | hover | links navy → violet; primary bg → `#5643b8`; outline border → foreground | 0.25s ease | Tailwind `transition-colors duration-250 ease` |
| hero tabs | hover / click | inactive tab bg white/10 → navy/20; active white pill | 0.3s | Tailwind transitions + React state |
| logos | loop | marquee translateX | ~100s linear infinite | CSS `@keyframes` in `growthbook-logos.css` (60s for our shorter list) |
| features, case studies, deploy, integrations, testimonials | scrubbed with scroll | multicolour rail travels down the left rule | follows scroll | `growthbook-rail`: CSS view timeline on the wrapper, `top` 0 → bottom |
| case studies | entering view | customer logo blur(8px) → sharp, fade | entry 0–40% | CSS `animation-timeline: view()` |
| case studies, why | loop (Swiper autoplay) | carousel slides one card | ~4s | `growthbook-track` with `autoplay`; `hydrate: visible`; off with reduced motion |
| integrations | loop | tile columns drift (vertical; horizontal on phones) | 40–55s linear | CSS `@keyframes`, alternate directions |
| scale | loop | pin halo pulses | 3s | CSS `@keyframes` |
| resources | hover | thumbnail scale 1 → 1.05 | 0.4s ease | Tailwind `group-hover:scale-105` |
| testimonials | click | track moves; inactive quotes at 45% opacity | 0.4s | `growthbook-track` arrows + active index |
| CTA | loop (`tagFloat`) | bright segment of the outline slides along the bottom edge | 15s | CSS `@keyframes` on `left` |

Not rebuilt: the Cookiebot banner/widget and chat bubble (third-party overlays, not design);
Lenis smooth scroll (capture lists it, but plain scrolling keeps blocks independent; a
`smooth-scroll` component would only add weight; see Decisions).

## Media slots → placeholders

| slot | size / frame | placeholder |
|---|---|---|
| hero screenshot (per tab) | 860×443 (≈ 1.94:1), radius 12 top, overlapping the panel bottom | `bg-card` slab with a hairline, 1.94:1 |
| hero panel backdrop | 1280×595, r12; full-bleed on phones | soft gradient from `glow` to `highlight` |
| feature media ×3 | 578×578, r12 (r16 phones) | square soft gradient (`glow`/`primary`/`highlight` mixes) |
| case-study / testimonial logos | ~24px wordmarks | plain-text fictional names |
| deploy icons ×2 | 80×80 | lucide icon in a soft tile |
| integration tiles | 200×170 | text name + lucide icon, faded |
| why card art | bottom-left ~150² | soft translucent square |
| scale curves | ~520×600 | empty grid with two pins (UI chips) |
| post thumbnails | 488×275, 219×122 (16:9-ish), r12 | `bg-muted` gradient surface |
| CTA arrow art | 480×479 | soft square glow surface |
| CTA backdrop | full width band | soft gradient |

## Decisions

- **Light is the faithful mode.** Navy sections (testimonials, CTA card, footer) and the
  violet stats band add the `dark` class to themselves so the theme's `.dark` tokens (navy) apply
  there in either mode; white cards inside them use `bg-foreground text-background`.
- **Primary stays `#6e56cf` in both modes** so violet buttons on navy match the original.
- **Code block** uses navy (`bg-foreground`) rather than the original's charcoal `#2b2b2b`: there
  is no neutral-charcoal token, and navy reads as the site's own dark. Syntax colours use the
  chart tokens (lime `chart-4` for strings).
- **No Lenis.** Smooth scrolling is a site-wide feel, not a section's design; the gallery and
  any later site can add it. Listed under "needs a decision" in the report.
- **Carousels** are native horizontal scroll-snap tracks (swipeable, keyboard-scrollable) with a
  small autoplay; no Swiper.
- Gutter: `--page-gutter` 1rem (390 capture: rule at x=16); blocks double it from `md`.
