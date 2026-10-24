# Saronic — recreation notes

Source: https://saronic.com/ (landing page only; precaptured 2026-10-24, `pages: []`).
Recreated as the fictional **Ternway**, a builder of crewless patrol and cargo vessels.

## Design language

- **Palette roles.** Two "weathers": a pale steel-white paper (#f2f6fa "sunlight") for the
  fleet and shipyard sections and the docked header bar, and a slate band (#44505c
  "midnight200") for news cards, the software section and the hero tint. Ink is a deep
  navy-black (#162029), also the footer ground. One loud accent, a sonar lime (#acff24),
  fills every primary button and the join card. Secondary buttons are translucent slate over
  media, or a 10%-ink tint on the lime. Hairlines are 20% white on dark, 10% ink on light.
- **Type scale.** A Swiss neo-grotesk for everything readable, a grotesk mono for every
  caption, eyebrow, nav item and button label (always uppercase, 12px, no tracking).
  Display sizes are fluid (vw) on desktop: section headings 32px → 3.75vw (54px at 1440),
  line-height 1.12, -0.02em; leads 20px → 1.96vw (28px), lh 1.25, weight 450; hero headline
  24px → 2.43vw (35px), lh 1.2, weight 450; hero eyebrow mono 16px → 1.49vw (21.5px).
  News titles 24px → 40px fixed, bodies 16px → 18px.
- **Spacing rhythm.** 4/8 base (spacing-01…12 = 2,4,8,16,24,32,40,64,80,120,160,200).
  Sections pad 80px top and bottom on phones and 160px at desktop. Content column 1280px
  (80px margins at 1440), 16px gutters on phones; header/announcement use 24px. News cards
  sit inset 20px / 40px. Heading blocks: eyebrow → 16 → title → 32 → lead → 64 → media.
- **Layout grid.** Mostly one column with a right-hand action: heading + lead on the left
  half, the lime button parked at the right edge level with the title. News cards are a 50/50
  split (text left, picture right) that stacks text-over-picture on phones. Hero copy starts
  at 60% of the width, bottom-aligned 80px from the window bottom.
- **Shapes and depth.** Small radii: 4px buttons and news cards, 8px media frames and vessel
  cards. Flat everywhere except vessel cards (1px + 24px soft shadow, deepening on hover).
  Dark bottom gradients under card names; a slate wash over the hero and a left-to-right wash
  over the conditions video.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Suisse Int'l 400/450/500 | Swiss neo-grotesk | normal width, large x-height | **Host Grotesk Variable** (installed) | the repo's established Suisse stand-in (aspensearch, column, unit): same neutral squared shapes, normal width, big x-height; variable, so 450 exists |
| Suisse Int'l Mono | grotesk mono, ~0.625em advance | normal, large x-height | **Source Code Pro Variable** (installed) | neutral sans mono without slabs; its 0.6em advance gets +0.025em tracking to match the original's line lengths |

No new packages.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement | `saronic-announcement` | 48 / 64px | lime bar, label + clipped message, X in a hairline cell | icon, label, message, small tint button, X at the right | — | close (click) |
| 2 | header | `saronic-header` | 64px, sticky | logo left, MENU + two-line burger right | CAREERS \| MENU right; logo hidden over the hero (the big wordmark is the logo) | — | sticky; transparent over the hero → pale bar with a centre hairline once the hero has passed; hover opacity .8 |
| 3 | hero | `saronic-hero` | **window** (100svh incl. the bars) | full-bleed video, copy at the bottom: eyebrow, 3-line headline, 2 buttons | giant full-width wordmark at the top; copy column from 60% width, 80px off the bottom | video 100% × window, cover | load rise of copy; scrubbed: wordmark + copy fade out, video pinned + dims to .2 as the hero leaves |
| 4 | news (rescue) | `saronic-news` | content (661 / 700) | bordered slate card: eyebrow + dot, title, body, button; picture below 4:3 | 50/50 card 620 tall: text top/bottom-justified, picture right 680×620 | image | button hovers |
| 5 | fleet | `saronic-fleet` | content (1294 / 1647) | heading, button, lead, 3 stacked 4:3 cards | heading row with button right, 2 cards 4:3 + 1 full-width 2.33:1 | 3 images | card hover: shadow deepens, image scale 1.03, "view details" rolls |
| 6 | news (contract) | `saronic-news` | content (662 / 700) | as 4 | as 4 | image | as 4 |
| 7 | shipyard | `saronic-feature` (light) | content (683 / 1328) | heading, button, lead, 16:9 frame | heading row, 1280×720 frame | video | — |
| 8 | software | `saronic-feature` (dark) | content (719 / 1364) | as 7 on slate | as 7 on slate | video | — |
| 9 | conditions | `saronic-conditions` | aspect 3:4 / 3:2 (520 / 960) | full-bleed video, copy vertically centred | same, copy left ~640px | video, cover | — |
| 10 | join | `saronic-join` | aspect (536 / 960) | 3:2 picture on top, lime block below | 3:2 full-bleed picture, lime card 460px bottom-right, inset 40 | image | button hover |
| 11 | footer | `saronic-footer` | content (1325 / 803) | links list, connect, join cell, address cell, big mark cell, © | 3 columns with hairlines: mark / join / address · technology links · company links + connect + pointer readout | — | link hover .5→.75 opacity; mark cell hover tint; pointer X/Y readout |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | pinned | sticks to the top through the page | — | `position: sticky; top: 0` with `-mb-16` so it overlays the hero |
| header | scroll threshold | transparent/light text → pale bar, ink text, hairline under it and at the centre | 0.3s ease | React state from a passive scroll listener (scrollY ≥ window height − 128), class swap with `transition-colors`; `hydrate: load` |
| header links | hover | opacity 1 → .8 | 0.3s ease | `hover:opacity-80 transition-opacity duration-300` |
| hero copy | load | eyebrow, headline, buttons fade in and rise 24px, staggered | 1s / 1.1s / 1.2s, cubic-bezier(.25,.25,0,1) | CSS `@keyframes saronic-hero-rise`, fill both, delays |
| hero wordmark + copy | scrubbed | opacity 1 → 0 over the second half of the hero leaving (scroll 450–900 at 1440) | linear | `animation-timeline: view()` on the hero, `animation-range: exit 50% exit 100%` |
| hero video | scrubbed / pinned | stays put while the page slides over it; opacity 1 → .2 | linear | same timeline: `translateY(0 → 100%)` inside an `overflow-clip` hero, opacity → .2 |
| buttons | hover | scale 1.02; label slides up out and back in from below; arrow nudges 2px | 0.25s ease; 0.3s + 0.6s (delay .3s) | Tailwind `hover:scale-[1.02]`; CSS keyframes `saronic-button-out/in` on `:hover`; `group-hover:translate-x-0.5` |
| vessel cards | hover | shadow 0 8 24/.08 → 0 14 36/.16; image scale 1.03; "view details" rolls | 0.4s cubic-bezier(.25,.25,0,1) | Tailwind transitions + `saronic-fleet-out/in` keyframes |
| footer links | hover | opacity .5 → .75 | instant ("all") | `opacity-50 hover:opacity-75` |
| footer mark cell | hover | background → 5% white | — | `hover:bg-accent` |
| footer readout | pointer move | X / Y chips show the pointer position | live | `pointermove` listener in `useEffect`; `hydrate: visible` |

No reveal-on-scroll animations were seen outside the hero (sections are in place in every
scroll frame). The 1440 "fixed div" in the footer is a small pointer glyph sitting at the
footer's bottom-right; it moves with the footer in the frames, so it's built static.

## Media slots → placeholders

| slot | original | ours |
|---|---|---|
| hero video | 100% × window, cover | `bg-muted` (dark scope) under the slate wash, fills the hero |
| news pictures | 680×620 right half / 4:3 below on phones, radius 0 4 4 0 / 0 0 4 4 | `bg-muted` in the same frame |
| vessel pictures | 4:3 ×2 + 2.33:1 full width, radius 8, shadow | `bg-muted` (dark scope) with the bottom gradient and name on top |
| shipyard / software video | 16:9, radius 8 | `bg-muted` 16:9 |
| conditions video | full-bleed 3:4 / 3:2 | `bg-muted` (dark scope) under the left wash |
| join picture | full-bleed 3:2 | `bg-muted` 3:2 |

## Decisions

- **Light is the faithful mode.** The page's paper, header bar and "light" sections are
  #f2f6fa with ink text; dark bands carry the `dark` class so the theme's `.dark` tokens
  (slate #44505c ground, #162029 card for the footer) apply to them in both modes. The
  `.dark` page is then a slate sibling: every section on slate, footer on ink.
- **Brand marks.** No logo shapes: the hero's giant lockup is the plain word in Host Grotesk
  800, stretched to the full width with SVG `textLength` (the original's wordmark is an
  extended face). The small header mark and the footer's big mark are lucide
  `Navigation2`, which is a generic arrowhead, not their slash.
- **Header switch in JS, not CSS.** The over-hero state needs light text in both page modes,
  which only a `dark` scope gives; a class can't be swapped by a CSS scroll timeline, so a
  small scroll listener does it (the original also swaps a class).
- **Hero height.** The original hero is 100% of the window *including* the announcement bar
  that overlays it. Ours sits under the in-flow announcement, so it is
  `calc(100svh − 3rem)` / `calc(100svh − 4rem)` (`belowBar`), ending at the window's bottom.
- **One feature block** for the shipyard and software sections (`tone: light | dark`), one
  news block used twice.
- **Mobile labels.** The hero's second button reads shorter on phones (the original
  switches "SPECIFICATIONS" → "SPECS"): buttons take an optional `shortLabel`.
- Social icons in the footer are lucide generics passed in as props (lucide 1.x has no brand
  icons, and theirs aren't ours to copy).
