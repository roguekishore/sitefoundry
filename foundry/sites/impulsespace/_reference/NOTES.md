# impulsespace — notes

Inspiration: https://impulsespace.com/ (landing page only; no other pages were asked for).
Captured in advance (`precapture.json`, `pages: []`). Our fictional company: **Halyard**, an
in-space transport outfit with three vehicles (Corvus, Lumen, Shuttle Share).

## What the capture holds (and doesn't)

The original scrolls inside its own container: the capture saw a page exactly one window tall
(844 / 900 px), and every frame shows the **first screen only**, already scrolled 422 / 450 px
(the hero's lower half, then the intro paragraph). There are no scroll frames and the section
crops below the fold are blank. What is known about the rest comes from the capture's numbers:
section heights and headings ("Our Vehicles", "Our Missions", "OUR PARTNERS", "Careers",
footer "Vehicles"), media slot sizes, font / colour / radius counts, the hover list and the
`:hover` rules. Everything below the intro is therefore **inferred** from those numbers, and
each inference is written down in the decisions at the end.

## Design language

- **Palette:** three surfaces only. Pure black (`#000`) for the hero video, the missions band
  and the partners strip; pure white for the intro, the vehicles section and careers; a warm
  off-white `#f7f7f5` for the vehicle cards and the footer. Ink is black or white at 100% with
  a 50% step (`rgba(0,0,0,.5)` / `rgba(255,255,255,.5)`) for secondary text and idle nav
  links. Hairlines `rgba(255,255,255,.15)` on black. No brand colour in the chrome: the only
  colour comes from the media (and the gradient CTA's hover light).
- **Type:** one grotesk at two weights (400, 500) and its mono for labels. A tight scale:
  40/48 (−0.8px) for headings, 22/28.6 (500) for the statement, 20/24 for card titles and
  footer links, 16/22.4 body, mono 14/21 uppercase with +1.12px (0.08em) tracking for nav,
  labels and legal links. Same sizes on phones (headings stay 40px).
- **Spacing:** generous and calm. 240px of air above the statement; ~96px section padding;
  `--gutter: 24px` with `--columnGap: 10px` in the original's `:root`; phones put text 32px
  from the edge.
- **Grid / layout:** full-bleed bands. Desktop nav is a single centred cluster (674px wide),
  not a left/right bar. The statement is a centred 626px column, left-aligned. Cards sit in a
  3-up row with a 10px gap.
- **Shapes:** 16px radius on cards and photos, pills (`9999px`) for buttons; no shadows.
- **Depth:** none from shadows; the header text is white with `mix-blend-mode: difference`
  (the phone capture shows the white wordmark turned copper over the blue sky). A
  `to top, black .8 → 0` gradient sits under text laid over photos (×2).

## Type

| Original | Classification | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| ABC Monument Grotesk 400/500 | neo-grotesk, slightly squared bowls, flat terminals | normal | medium-high | **Host Grotesk Variable** (already in the workspace) | the closest open neo-grotesk on width, x-height and the squarish 500; lithic (same face) found Host Grotesk 500 reads a step lighter, so 500 → 600 here |
| ABC Monument Grotesk Mono 400 | grotesk-styled monospace, low contrast | mono | medium-high | **DM Mono 400** (already in the workspace) | low-contrast grotesk mono with the same plain 14px texture |

No new packages.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `impulsespace-header` | 72 / 69, fixed | wordmark left at 32px, two-line burger right | one centred cluster: wordmark + 6 mono links (50% white) + chevron "more" menu | — | difference blend; link opacity .5→1 on hover |
| 2 | hero | `impulsespace-hero` | **100svh** (window-sized) | full-bleed media; title + track + label (inferred: centred a little above the middle, since the lower half of the phone frame shows no text) | full-bleed video; centred title 40px near the bottom (top at 80%), a 400px hairline track with a small vehicle marker, mono label under it | video 1440×900 / image 390×844, cover | — (video motion is the media's) |
| 3 | statement | `impulsespace-intro` | content: 240 top pad + paragraph, 0 bottom | 22px paragraph, 32px gutters, 8 lines | centred 626px column, 4 lines | — | — |
| 4 | vehicles | `impulsespace-vehicles` | content (1824 / 867) | heading, 3 cards stacked (342 wide, image 262 wide) | heading, 3 cards in a row, 10px gap, card ≈ 457×567 with the 3D canvas filling it and the vehicle render 373 square, centred | 3 renders (contain) + 3D canvases | hover: glow layer 0→.6 (0.4s), render scale to 1 |
| 5 | missions | `impulsespace-missions` | content 1329 / 1102, frame **window-sized** (862 of 900) | heading, frame ≈ window tall with the list over its foot | heading, full-bleed frame 862 tall; 15 mission names at 40px in 50% white over a bottom gradient | 1 image (726×1489 / 1776×862: bigger than its frame → scaled) | frame image scrubbed scale 1.23→1 as the frame enters (inferred from the oversize box); names wipe 50%→100% white on hover, hovered mission's image fades in |
| 6 | partners | `impulsespace-partners` | content 533 / 183 | mono label; 2×4 grid of names, each slot swapping names with a blur | mono label; one marquee row of 16 names drifting left | — | desktop: marquee loop (translateX); phones: blur swap loop |
| 7 | careers | `impulsespace-careers` | content 1232 / 908 | heading + lede + CTA, two photos stacked (326×480) | heading row (heading left, lede + CTA right), two 672 square photos | 2 photos, cover, 16px radius, bottom gradient + caption | photo scale →1 on hover (group-hover:scale-[1]); CTA gradient light |
| 8 | footer | `impulsespace-footer` | content 1248 / 736 | stacked: newsletter, 2-col link lists, legal, wordmark | newsletter left, three link columns right (20px links), legal mono row, large wordmark | — | links opacity 1→.7 (0.15s); legal mono black/50→/70 with a line sweep |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header links | hover | opacity .5 → 1 | 0.25s cubic-bezier(.4,0,.2,1) | `transition-opacity duration-250 ease-[cubic-bezier(.4,0,.2,1)]` |
| header | always | text drawn with `mix-blend-mode: difference` over whatever scrolls under | — | `mix-blend-difference` on the bar layer; menus sit outside it |
| header menus | click | "more" dropdown (desktop) / full menu (phones) | 0.2s fade | `<details>` + `:has([open])` CSS, no JS |
| vehicle cards | hover | inner glow layer opacity 0 → .6; render scale .96 → 1 | all 0.4s ease (.4,0,.2,1) | `group-hover:` classes |
| missions frame | scrubbed with scroll | image scale 1.23 → 1 as the frame enters | entry 0–100% | CSS view timeline, `@supports` |
| mission names | hover | text wipes from 50% to 100% white left→right (`wipe-hover`, mask position) ; that mission's image fades in | 0.4s | background-clip text, background-position transition; li-owned media layer `group-hover:opacity-100` |
| partners (≥lg) | loop | row translates left, seamless | ~40s linear | CSS `@keyframes` marquee, duplicated row |
| partners (phones) | loop | each slot swaps two names with blur 4px + fade | 8s, staggered | CSS `@keyframes` (clerk-logos pattern) |
| careers photos | hover | photo scale 1.04 → 1 | 0.4s | `group-hover:scale-100` |
| CTA (`gradient-cta`) | hover | two soft light blobs inside the pill fade to .8 and scale to 1 | 0.4s | `::before/::after` in the component's CSS |
| footer links | hover | opacity 1 → .7 | 0.15s | `hover:opacity-70` |
| legal links (`hover-line-sweep`) | hover | colour black/50 → /70; underline exits right, a new one sweeps in from the left | 0.15s colour, 0.4s lines | component `impulsespace-sweep-link` with two scaleX pseudo lines |

Not rebuilt: the WebGL canvases in the vehicle cards (media) and the hero video; the
`moving-gradient-btn-debug` rule (a debug class).

## Media slots → placeholders

| slot | original | ours |
|---|---|---|
| hero | full-window video (cover) | `media` prop; empty: black-to-muted placeholder filling 100svh |
| vehicle render ×3 | 373 square PNG (contain) over a 437×547 canvas | `media` per card; empty: a soft `glow` gradient square at 82% of the card width |
| missions frame | 1776×862 photo (cover, scaled) | `media` + optional `media` per mission; empty: muted surface with a faint glow |
| careers ×2 | 672 square photos (cover, 16px) | `media` per photo; empty: muted surface, same radius |

## Decisions

- **Below-the-fold layout is inferred** (see above). Heights were sized to the capture's
  section heights at both widths; layouts follow the media slot sizes (3-up cards with 437×547
  canvases → 457px cards with 10px padding; two 672 squares → 2-up careers; 326×480 on phones
  and a 1232px section → both photos stacked).
- Gutter `2rem`: phones place text and photos 32px from the edge, and 2rem gives 452px cards
  at 1440 (original ≈ 457).
- The header's dropdown and phone menu are `<details>` so the site needs no JavaScript.
- Hero content on phones sits a little above the middle (the phone capture's lower half has
  none); on desktop it is near the bottom, as captured.
- Footer contents (newsletter, link columns, legal row, a large plain-text wordmark) are
  inferred from the 736 / 1248 heights, the footer's "Vehicles" heading, the 20px link
  hovers and the mono legal links; the large wordmark is optional (prop).
- Dark bands (hero, missions, partners) are `.dark` scopes, so their tokens flip per subtree.
- Fonts weights: 500 → 600 (Host Grotesk reads lighter).
