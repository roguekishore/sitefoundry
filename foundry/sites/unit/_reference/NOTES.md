# unit.co → `unit` recreation notes

Captured in advance (precapture.json, landing page only, no other pages asked for).
Fictional company used for content: **"Corbel"**, a financial-infrastructure
API (a corbel is a load-bearing bracket; nothing like "Unit"). Customers, publications and people
in the demos are all invented.

## Design language

- **Palette roles.** Pure white page and pure black ink. A cool, faintly green off-white
  (#eff6f6) is the one band colour (customer stories, insights, the embed card, chips, the
  footer field); a lighter one (#f9fbfb) fills the four product cards. Secondary text is a
  dark slate-teal (#4b5a59). Black is the action colour (solid pill CTAs, compliance badges,
  the closing band). Colour only arrives as pastel: the hero's blurred aurora video
  (mint, cyan, lilac), the product cards' hover tints (lilac #e6e2ff, aqua #c4fffd, lime
  #f5ffbf, mint #ceffe5), a mint status dot (#6cfdc0) and cyan glows (#46f6ff).
- **Type scale (1440 → 390).** One weight (400) everywhere. Hero 64/1.0 → 35; section
  heads 48/1.1 and 40/1.1 → 28/26; card titles 26 → 19; lead 22/18 → 17.5/15.75; body 16,
  small 14, meta 12–13. Tracking slightly negative on big type, slightly positive (+0.01em)
  on 14–16px text.
- **Spacing rhythm.** Content 1280px wide (80px side margins at 1440, 20px at 390). Sections
  breathe: ~144–165px between blocks on desktop, ~64–80px on phones. Cards pad 32px (20px
  phone); chips and gaps 8–24px.
- **Grid.** 12-column feel: 6-up logo grid, 4-up stats, 2×2 product cards, 40/60 split for
  the pinned platform tour, 1:2 split for insights.
- **Shapes.** Pills everywhere (999px buttons, chips, badges, 34px circular arrow buttons);
  cards are nearly square-cornered (4px product cards, 8px elsewhere). 1px hairlines at
  black/10 (cards, header) and black/20 (outline buttons).
- **Depth.** Flat. No shadows on the page itself; depth comes from tinted surfaces and the
  one dark panel with its coloured glow.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Suisse International 400 (600 loaded, unused) | Swiss neo-grotesk | normal width, large x-height | **Host Grotesk Variable** (already installed) | the closest open neo-grotesk in proportions; variable so a 420–450 step is available if 400 reads light (it usually does vs Suisse) |
| Fira Mono 400 (code snippets inside product media) | humanist mono | normal | **Fira Mono** (`@fontsource/fira-mono`, added) | the original's own open font |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `unit-header` | 51 / 64px | wordmark + menu button | wordmark, 4 nav links, Sandbox link, outline pill | — | sticky; link hover opacity .6 |
| 2 | hero | `unit-hero` | content (532 at 1440, 392 at 390) | pill badge full width, 35px head, sub, black pill | centred: badge, 64px three-line head, 22px sub, black pill | aurora video behind (1440×532 / 390×392, cover) | badge/button hovers |
| 3 | logos | `unit-logos` | content (174) | 3×4 grid | 6×2 grid, chevron dot top-right of each cell | — (wordmarks) | logos swap in place with blur + scale 0.8→1 (loop); cell hover bg |
| 4 | stats | `unit-stats` | content (457) | hairline, 22px label, 2×2 numbers, network tiles, line, 2 black badges | hairline, label, 4 numbers 48px, row: tiles + line + badges | 3 small network tiles (52×38) | uptime link hover |
| 5 | products | `unit-products` | content (1729) | head 28px, cards stacked | head 48px two lines, 2×2 cards 628×615 | one illustration per card (626×398, contain, bottom) | card hover tint .6s |
| 6 | customers | `unit-customers` | content (998), muted band | centred head, 3 tabs scroll, card stacked (image above) | centred 40px head, 4 tabs with underline, white card: image 522×480 left, statement/chips/quote right | panel image 522×480 r4, 40px avatar | tabs autoplay, active underline, panel crossfade |
| 7 | platform | `unit-platform` | 2333 at 1440 (pinned stretch) | head, outline pill, dark panel, swipe row of 3 tabs | 40/60 split pinned: head, pill, 3 tab items with left progress line; dark panel 770×576 with list card | dark glow backdrop (the panel) | pinned; tab progress lines fill; panels crossfade; timed on phones |
| 8 | embed | `unit-embed` | content (492) | muted card: text, button, screenshot below bleeding right | muted 1280×348 card, text left, screenshot bleeding right/bottom with cyan glow | screenshot 630×400, glow canvas 548×348 | button hover |
| 9 | showcase | `unit-showcase` | content (727) | head 2 lines, cards 316 wide swipe | head + prev/next circles, cards 351×426 overflowing right | brand tile 295×199 r8 per card | track scroll; prev dims .5 at start |
| 10 | insights | `unit-insights` | content (744), muted band | head, 2 list posts, black pill, 2 cards stacked | 1/3 list column, 2 white cards 395×488 | card image 347×229 r8 | — |
| 11 | cta | `unit-cta` | content (418 / 242), black | centred 28px head, white pill | centred 40px head, white pill | — | button hover |
| 12 | footer | `unit-footer` | content (1121) | 2-col link groups, newsletter, social, certs, centred wordmark, legal, fine print | 4 + 2 link columns, right column newsletter/social/certs, wordmark + legal row, fine print | 2 cert seals (48px circles) | submit hover mint, social hover |

## Motion inventory

| section | trigger | what changes | timing / easing | how |
|---|---|---|---|---|
| header | scroll | sticks to top (64px, hairline under) | — | `sticky top-0` |
| header links | hover | opacity 1 → .6 | .3s cubic-bezier(.165,.84,.44,1) | Tailwind `transition-opacity` |
| buttons (solid) | hover | bg black → black/80; chevron swaps for an arrow sliding in from −8px | .425s cubic-bezier(.625,.05,0,1) | Tailwind group-hover, `ease-[…]` |
| buttons (outline) | hover | bg → white/20, border black/20 → black/60, same arrow | .425s same | same |
| hero badge | hover | border black/10 → black | .425s same | Tailwind |
| logo cells | loop | each cell's logo hands over to a second with opacity + blur + scale .8→1 | ~1s cubic-bezier(.075,.82,.165,1), every few seconds, staggered | CSS `@keyframes` in `unit-logos.css` |
| logo cells | hover | cell bg → foreground/5, chevron dot bg → white | .325s cubic-bezier(.075,.82,.165,1) | Tailwind |
| stats uptime | hover | opacity → .5 | .325s | Tailwind |
| product cards | hover | bg #f9fbfb → pastel tint (one per card) | .6s cubic-bezier(.165,.84,.44,1) | Tailwind, tone per card from chart tokens |
| customers tabs | timer / click | active tab opacity .5 → 1, underline fills, panel crossfades | ~7s per story, .625s fade | React state (`hydrate: visible`), CSS keyframe for the underline fill |
| platform | pinned scroll (1440) | stage sticks; tab k's left line fills top→bottom; list panel k crossfades to k+1 | scrubbed | `motion/react` `useScroll` on the tall wrapper (`hydrate: visible`) |
| platform | timer (390) | same tabs advance on a timer, swipe row follows | ~5s per tab | same block, interval on phones |
| showcase | click | track scrolls one card; prev at .5 when at start | smooth scroll | React (`hydrate: visible`), native scroll-snap |
| footer submit | hover | bg → mint | .325s | Tailwind |

Not rebuilt (inside media): the hero aurora video, the embed card's WebGL glow, the code
snippets that scroll inside the product illustrations (`ui-code` translateY).

## Media slots → placeholders

- hero aurora video → soft radial washes from `glow`, `chart-1`, `highlight` on the
  background, blurred, same full-bleed box (no blob shapes of the original's).
- product illustrations (×4) → `bg-muted`-to-transparent surface at 626×398 (aspect 1.57),
  flush with the card's bottom.
- customer story image → 522×480 rounded-4 `accent` surface; avatar → 40px muted square.
- platform backdrop → the dark panel itself with a glow wash along its foot; the list card on
  it is UI and is built.
- embed screenshot → 630×400 card-coloured frame with a hairline, bleeding off right/bottom,
  cyan wash behind.
- showcase brand tiles → 295×199 rounded-8 tiles in rotating chart tones.
- insight images → 347×229 rounded-8 muted surfaces.
- network marks → three 52×38 foreground tiles; cert seals → two 48px circles.

## Decisions

- Fictional brand "Corbel" set as a lowercase wordmark in the display font (the original's
  logo is a custom lowercase wordmark; ours is just type).
- Light is the faithful mode. The dark panel (platform) and closing band force a `dark`
  island so they stay dark under the light theme and re-theme with any theme's dark tokens.
- Product-card hover tints come from `chart-1…4` at low opacity (lilac, cyan, lime, mint).
- Platform pin built with motion's `useScroll` rather than the CSS-only recipe: the same
  block has to run on a timer on phones, so one React state drives both.
- Insights uses a slightly narrower container (1228px) like the original.

## Verify

Captures of ours were taken with a /tmp copy of `capture.mjs` that stubs Vite's live-reload
socket (other sessions' edits kept reloading the shared gallery and killing the stock script).

### Round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| whole page | page 397px wide at 360 (and 771 at 768): the customer card's stacked tab panels stretched their picture box, whose aspect ratio then widened it; the emulated phone zoomed out, so the sticky header looked missing in every frame | fits | — | yes: one-column grids with `content-start`, picture `w-full` |
| type | Host Grotesk with the original's +0.01em tracking read loose and wide | same | — | yes: positive tracking removed everywhere |
| hero | matches | 560 vs 532 tall: subtitle and button gaps ~12px too big each | badge/button hovers match | yes |
| logos | matches (3×4, dots, swap loop) | wordmarks a touch big (22px) | blur/scale swap loop ✓, cell hover ✓ | yes: 20px |
| stats | matches | statement wrapped to 3 lines | uptime hover ✓ | yes: wider measure |
| products | matches | card 627 vs 615 tall | hover tints ✓ (0.6s) | yes |
| customers | matches after the overflow fix | matches (996 vs 998) | autoplay underline + crossfade ✓ | — |
| platform | tab row didn't follow the timed tab | matches; pin and panel crossfades at the same scroll positions as the original (4500–5400px) | pinned ✓ | yes (round 2) |
| embed | matches | screenshot frame 476 wide vs 412 | — | yes |
| showcase | matches | descriptions wrapped to 3 lines (narrow measure) | arrows ✓, prev at half opacity ✓ | yes |
| insights | matches | list items ~15px taller each, so the cards stretched (518 vs 488) | — | yes |
| cta | matches | matches (416 vs 418) | hover ✓ | — |
| footer | doubled hairline above the wordmark bar | link pitch 36 vs 31px | — | yes |

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| whole page | fits at 360/768/1024; sticky header shows in every frame | fits | — | — |
| hero | matches | 540 vs 532 | — | accepted (our headline wraps differently) |
| products | matches | 1682 vs 1729 (narrower stand-in font wraps less) | — | accepted |
| platform | panel caught blank mid-switch (outgoing panel hid instantly); tab row scrolled to the wrong offset | matches | timer ✓ | yes: visibility transitions with opacity; scroll offset from bounding boxes; re-shot alone at 390 after 6s: tab 2 aligned, its line filling, its card shown |
| customers | same tab-row offset fix | matches | ✓ | yes |
| all others | match | match | ✓ | — |

Re-theme check: `unit-products` and `unit-platform` under `sample-ember` (serif display,
warm palette) and `unit-customers` in the unit dark mode all read correctly; the platform
panel stays a dark island.

### What still differs

- Content (fictional Corbel copy) wraps differently from the original's lines, so some
  headings have two lines where the original has three.
- Logos and tab names are typeset wordmarks; product illustrations, story pictures, the hero
  video, the embed screenshot/canvas, brand tiles, article images, network marks and seals are
  placeholders of the same size and place.
- Host Grotesk is a little rounder and wider than Suisse International.
