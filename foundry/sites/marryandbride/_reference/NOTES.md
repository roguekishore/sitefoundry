# marryandbride — recreation notes

Original: https://marryandbride.com/ (a German label for hand-knitted bridal knitwear).
Captured in advance (`precapture.json`); the site was not opened from this machine.
Recreated as **Wollweise**, a fictional bridal knitwear atelier (English copy, own wording).

## Design language

- **Palette:** pure white paper, warm near-black ink (rgb 20,20,19), a warm grey for
  secondary text (rgb 99,99,94), one warm charcoal for the only filled button
  (rgb 33,32,28) and a near-black announcement bar. Hairlines are a translucent warm brown
  (rgba 25,21,1,.29). No accent colour: the photos (warm creams, ivory knitwear) carry the
  colour. Placeholders therefore are warm greige, and the photo-with-white-text slots (hero,
  collection cards) are dark ink-tinted surfaces so their white type still reads.
- **Type:** two families. A refined text serif (Tobias, weights 300/400) for every heading,
  the giant footer wordmark and the long "story" paragraphs; a geometric-ish low-contrast
  sans (DM Sans) for labels, prices, nav and body. Labels are UPPERCASE with +0.07em
  tracking. Sizes are fluid (13.8px at 1440, 12.5px at 390 for labels/body).
  Scale at 1440 / 390: labels 13.8/12.5 · eyebrow 11.2/10.4 · body 13.8 (lh 1.5) ·
  card titles 21/18 · section heading 32/26 · feature title 40/31 · story paragraph
  26/21.7 (lh 1.5) · category words 94/54 (lh 1.1) · footer wordmark ≈19.5vw, weight 300.
- **Spacing rhythm:** a tight 17px gutter at 1440 (15px at 390), 9px gaps between product
  tiles, generous empty white above section headings (~90px at 1440), nothing between
  full-bleed split sections (they butt against each other).
- **Grid:** full-bleed. Half/half splits (720/720) at 1440 for hero, category list,
  collection features and the craft story; 4-up product grid; a horizontal reel of
  collection cards flush with the left edge, cut by the right edge.
- **Shapes and depth:** square corners everywhere (2px only on tiny UI), no shadows, one
  hairline-bordered box (the social links). Flat, editorial, photo-led.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Tobias (300/400) | transitional text serif, moderate contrast, sharp wedge serifs, refined | normal width, medium x-height | **Newsreader Variable** (opsz axis, weights 300/400) | closest open serif on contrast, width and x-height; its display optical size gives the same calm, slightly literary headline feel; already in the workspace |
| DM Sans (300–600) | geometric low-contrast sans | normal, large x-height | **DM Sans Variable** | the original uses this open font itself (`@fontsource-variable/dm-sans`) |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement bar | `marryandbride-announcement` | content (40px / 30px) | black bar, one centred uppercase message, × at right | same, 30px | – | messages crossfade in turn |
| 2 | header | `marryandbride-header` | content (48 / 58px) | menu icon left, centred serif wordmark, heart + bag with counts right; over the hero | 2 links left, wordmark centre, 2 links + 2 icons right; over the hero, white | – | hides on scroll down (translateY -100%), returns on scroll up |
| 3 | hero | `marryandbride-hero` | **window: 100svh − 28px** | one full-bleed photo, eyebrow + serif uppercase title + dark button bottom left | split 50/50: video left, photo right; text block bottom-left of the right half | video 720×872, photo 720×872 (cover, window height) | pinned (sticky) under the rest of the page, which slides over it |
| 4 | bestseller | `marryandbride-bestseller` | content | serif heading + "view all"; horizontal swipe row of cards 225px wide | heading row; 4-up grid, 9px gaps | 4 × 2:3 product photos | hover: card photo crossfades to a second photo (inferred) |
| 5 | category words | `marryandbride-categories` | 390: content · **1440: window, 100svh** | three big serif words centred, no image | words centred in the left half, photo in the right half | 3 × 720×900 photos (one per word) | hover a word → its photo crossfades in (inferred from 3 photos + 3 words) |
| 6 | intro line | `marryandbride-intro` | content | eyebrow + serif paragraph with underlined links | same, max ~650px | – | – |
| 7 | feature: collection one | `marryandbride-collection-feature` | content (photo 4:5 at half width = 900px) | photo (390×422), title, body, discover link, 2 product tiles | photo left half; right half: 2 tiles top, title/body/link bottom, inset 100px from the middle | 1 × 4:5 photo + 2 × 2:3 tiles | – |
| 8 | feature: collection two | `marryandbride-collection-feature` (reverse) | same | same order as 7 | mirrored: content left, photo right | same | – |
| 9 | craft story | `marryandbride-story` | content (4:5 photo at half width) | photo 390×409, centred serif paragraphs | photo left, centred serif paragraphs in right half | 1 photo | – |
| 10 | collections reel | `marryandbride-collections` | content | heading; reel of 2:3 cards 217px wide, flush left | heading; reel of 343px cards, flush left, cut at right | 2:3 collection photos with white labels | horizontal native scroll (swipe) |
| 11 | follow box | `marryandbride-follow` | content | hairline box: serif title + 3 underlined links | same, 360px wide, centred | – | – |
| 12 | footer | `marryandbride-footer` | content | giant wordmark, about text, 2 link columns, payment row, legal/social/copyright rows centred | giant wordmark full width; about left (3/5), "About" + "Service" columns; payments row; hairline; legal · social · copyright row | – | – |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| announcement | loop | messages swap with an opacity crossfade | ~4s each, opacity 0.5s ease | small React interval (block already hydrates for its close button), opacity transition; reduced motion: no fade |
| header | scroll | translateY 0 → −100% when scrolling down past the top; slides back on scroll up and turns solid (paper bg, ink text) away from the hero | transform 0.4s ease-out | React scroll listener, `hydrate: load` |
| hero | pinned | stays stuck at the top while all following sections (paper bg) slide over it | – | `position: sticky; top: 0` on the hero; page wraps the rest in a `relative z-10 bg-background` layer |
| buttons | hover | opacity 1 → 0.7 (plain buttons/links) · SHOP NOW bg charcoal → black | 0.2s / 0.3s ease-out | Tailwind `transition` + `hover:` |
| product cards | hover | second photo fades in over the first (inferred: Woo shop pattern; not in the capture) | all 0.4s ease-out | CSS `group-hover:opacity-100` on an optional `hoverMedia` slot |
| category words | hover | the word's photo crossfades in (inferred) | 0.4s ease-out | React state on mouseenter/focus, `hydrate: visible` |
| bestseller (390), collections reel | swipe | native horizontal scroll | – | `overflow-x-auto` + snap |

No scroll reveals: the capture saw none (the page shows everything in place; the
`animation-timeline` CSS it found belongs to the cookie panel).

## Media slots → placeholders

- hero video (desktop left half) and hero photo: ink-tinted surfaces (`bg-foreground/80` and
  `/65`), cover the window height; white text over them reads like the original's.
- product photos 2:3: `bg-muted` (warm greige), NEW badge on top.
- category photos 4:5 / window-high: `bg-muted`, a slightly different tint per word so the
  hover crossfade is visible.
- feature photos 4:5 (390: 390×422) and tiles 2:3: `bg-muted`.
- story photo 4:5 (390: ~0.95): `bg-muted`.
- collection cards 2:3: ink-tinted (`bg-foreground/70`) because white labels sit on them.

## Decisions

- Fictional brand "Wollweise" (an atelier name, no ampersand pattern), English copy.
- The cookie consent panel (covers the 390 captures) is not part of the design: skipped.
- 390 hero is hidden behind the cookie panel and blurred; layout inferred from 1440 and the
  390 media slot list (one full-bleed photo, 816px = window height).
- Payment logos become plain-text method names (no third-party logos).
- The giant footer wordmark is sized in vw to span the width for our nine-letter wordmark;
  its size is a prop-free design constant, the text is a prop.
- Header: the capture shows only the hide-on-scroll; returning solid is our choice so the
  white header text stays readable over paper sections.

## Comparison round 1

Heights already match the original within ~10px per section at both widths; hero is marked
"sized by the window" (97%) and the category split 100% at 1440, as on the original; no
horizontal overflow at 360/768/1024. Motion list shows the announcement crossfade, the header
sliding up on scroll down and the hero pinned (sticky) for the whole page, matching the
original's rows; hover shows button bg change (0.3s) and 0.7 opacity on links (0.2s).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| footer | link rows 39px apart (inherited line-height) vs 27; about text too wide | rows 39 vs 29.5px; ~110px gap under the wordmark vs ~50 | – | yes: leading-none on the list, tighter wordmark leading and margins |
| footer | payment labels too large | same | – | yes: 0.8rem |
| headings | Newsreader 400 reads heavier than Tobias | "Most loved", "Every collection" heavier | – | yes: weight 350 |
| hero title | wraps to 2 lines, heavier | heavier than the thin original | – | yes: weight 300, 1.75rem on phones |
| collection title | heavier | heavier | – | yes: weight 300 |

## Comparison round 2

Recaptured after round 1. Follow box + footer now 895px at 1440 (original 875) and 886 at 390
(original 887); link rows 31px apart (original 29.5). Section heights elsewhere unchanged and
within ~10px. Motion rows unchanged and matching. No overflow at 360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| footer | – | ~75px from wordmark to about text vs ~50 | – | yes: mt-6 |
| collections reel | the fifth card's sliver at the right edge is narrower than the original's (cards are 23.8vw) | same | – | kept: matches the original's card width, it is the same reel |
| hero | layout inferred (390 capture hidden by a cookie panel) | matches | pinned, header hide: match | – |
| all | Newsreader still a touch rounder/softer than Tobias | same | – | kept: closest open serif |

Re-theme: `marryandbride-collection-feature` under `sample-ember` light and
`marryandbride-bestseller` under `sample-ember` dark both read correctly (ember's paper, ink,
fonts). Our own dark mode: warm-black page; the hero placeholders turn light with dark text
(the inverse tint), which stays readable.
