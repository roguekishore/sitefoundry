# K2 Space recreation: notes

Recreated as the fictional **Hecto Orbital**, a builder of heavy satellite buses. Landing page only
(no other pages were named). Captured in advance (`precapture.json`, pages: none extra).

## Design language

- **Palette:** pure black ground (#000) with one soft grey ink for everything (#c5c5c5 text,
  #c1c1c1 headings). Depth comes from near-black planes, not shadows: #141414 news cards,
  #1b1b1b alternate list rows and inactive tabs, #252525 square buttons (hover #2e2e2e/#313131).
  Quiet text (dates, "Learn more" links) is #5e5e5e and lights up to #c5c5c5 on hover. The only
  colour is in the footage (deep factory blue); the CSS has a brand blue #2d62ff it never shows.
- **Type:** one face (Telegraf), one visible weight, **line-height 1.0** almost everywhere
  (even 19px paragraphs), normal tracking except the giant hero line (−0.027em). Sizes are fluid
  with the window on desktop (Webflow rem = 16px × vw / 1728): 213px hero (14.8vw), 72px display
  (5.03vw, lh 0.9), 47.6px section titles and intro (3.31vw), 32px slide titles (2.25vw),
  26.7px news titles (1.85vw), 19px body (1.32vw), 13.3px dates (0.93vw). Phones: 92 / 34 / 28 /
  24 / 16 / 12px.
- **Grid:** a 35px (2.43vw) gutter at 1440, 20px on phones. Body copy columns start at 66.7%
  of the width (list paragraphs, Learn more). Footer columns at 50% / 66.7% / 84%.
- **Shapes:** square everything (radius 0). Hairline corner brackets (hero frame, hotspot
  markers) are the one ornament.
- **Rhythm:** big black air between sections (150–320px at 1440), full-bleed media below each
  heading. Sections butt together with no borders.

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Telegraf (PangramPangram, paid; only the 600 face is loaded, so all text renders in it) | geometric-leaning neo-grotesk, double-storey a, single-storey g | slightly wide, large x-height | **Archivo Variable** (`standard.css`, weight + width axes) at `font-stretch: 107%`, weight 560 for display, 500 for body | Archivo is a neo-grotesk with a large x-height and a width axis; measured line widths at 107% land within ~2% of Telegraf's (683 vs 673px for a 47.6px title, 384 vs 382px for a 19px line). Mona Sans was ruled out (single-storey a); Hanken/Host Grotesk are too narrow. |

The stretch lives in a theme-only var `--k2space-stretch: 107%` that blocks read with a 100%
fallback, so under other themes nothing is stretched.

## Section map

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header | k2space-header | 70/100px bar, fixed | wordmark + two-line menu button | wordmark left, 4 links centred, live mission clock right ("T+207d 23h 21m 47s / name") | — | fades out and lifts 59px over scroll 80–180px; links 0.8 opacity on hover |
| 1 | hero | k2space-hero | **100svh** | "Build / Bigger" 92px, two lines, centred in a 320×225 corner-bracket frame | one line 213px centred, brackets 35px in from the sides, 334px tall frame | full-bleed video (cover) | none (video only) |
| 2–4 | intro statement | k2space-intro | content: 174 + text + 96px (390); 210 + 211 + 152px (1440) | 34px, 9 lines | 47.6px, 4 lines, ~66% wide | — | lines scrubbed in: opacity 0→1, rise 17/24px, as each line passes ~75%→50% of the window |
| 5 | "The frontier runs on hardware" slider | k2space-slider | content (797 / 689) | title 34px two lines, 332×663 portrait slides from x=0, no gap | title + two 56px square arrow buttons; 1080×576 slides from x=0, no gap, the 2nd peeking | 4 slide images | title line scrub; slide images scale 1.15→1 + blur→0 scrubbed while entering |
| 6 | "…biggest satellites on orbit" | k2space-showcase | content (1104 / 1090) | 34px three lines, 390×760 image | 47.6px two lines (forced break), 200px air above, 1440×720 image | 1 image + 2 corner-bracket hotspots | line scrub; image scale 1.15→1 + blur; hotspots fade in |
| 7 | numbered list | k2space-list | content (712 / 728) | rows 224px: "01 Title" 28px on one line, paragraph below | rows 229px: number at gutter, title at 151px, paragraph at 66.7%; alternating #1b1b1b / black | — | each row fades in and rises 15px on entering view |
| 8 | orbits | k2space-orbits | content at 390 (933); **pinned** at 1440 (3700px: heading + a ~3 screen pinned stage) | heading 34px, planet 195px square in a ring, 3 tab buttons, paragraph | heading 72px; stage: planet 411px centred zooms out from 3× and 411px lower, then tabs fade in and the paragraph steps LEO→MEO→GEO as you scroll (inferred layout: tabs bottom-left, paragraph at 66.7%) | planet video (square) | heading scrub; planet scale 3→1 + rise; tabs fade in; active orbit follows scroll |
| 9 | quote | k2space-quote | **80svh (390) / 100svh (1440)** | quote 34px centred, attribution, button | quote 72px centred 3 lines, attribution 19px, 202×61 button | full-bleed image | image scale 1.15→1 + blur; quote + attribution rise 15px; button rises after |
| 10 | Recent News | k2space-news | content (481 / 716) | 28px title; 295×225 cards | 47.6px title + arrows; 598×370 #141414 cards, 19px gap, from the gutter | — (publication logos become plain text names) | title rises 15px on entering view; card links hover grey→light |
| 11a | closer | k2space-closer | content: 320 air + title + 320 + image | 34px centred two lines, 390×675 image | 72px centred one line, 1440×720 image | 1 image | line scrub; image scale 1.15→1 + blur |
| 11b | footer | k2space-footer | content (376 at 1440) | wordmark, two-column link grid, tiny copyright | wordmark left; columns at 50/66.7/84%; copyright bottom right | — | links 0.8 opacity on hover |

Shared components: **k2space-line-reveal** (the scrubbed line-by-line heading reveal),
**k2space-button** (square #252525 button / arrow button), **k2space-media** (placeholder frame
with the scale-and-unblur scrub), **k2space-wordmark** (plain text wordmark + lucide icon).

## Motion inventory

| section | trigger | what changes | timing | how |
|---|---|---|---|---|
| header | scrubbed with scroll | opacity 1→0, translateY 0→−59px | scroll 80–180px | CSS `animation-timeline: scroll(root)`, range 80px–180px; `visibility: hidden` at the end |
| header links / footer links | hover | opacity 1→0.8 | 0.2s ease | `transition-opacity duration-200 hover:opacity-80` |
| header clock | loop (1s) | elapsed time since launch ticks | every second | `useEffect` + `setInterval` (`hydrate: load`) |
| intro, slider title, showcase title, orbits title, closer | scrubbed with scroll | each line opacity 0→1, rise 24px (17px phones; 36–38px on the 72px titles) | as the line moves from ~75% to ~48% of the window | k2space-line-reveal: every word is an inline-block with its own `view()` timeline, so all words on one line share a position and reveal together (line by line without measuring lines); range `cover 22% cover 46%` |
| slider / showcase / quote / closer images | scrubbed with scroll | scale 1.15→1, blur 6px→0 | from the frame's top at ~80% of the window until it reaches the top | k2space-media `scrub`: `view()` on the frame, range `entry 0% cover 50%`, frame `overflow-clip` |
| showcase hotspots | entering view | opacity 0→1 | quick | `view()` range `entry 0% entry 100%` with a per-marker delay offset |
| list rows | entering view | opacity 0→1, rise 15px | ~100px of scroll | `view()` range `entry 0px entry 120px`; number, title and paragraph share the row's timeline |
| orbits planet (desktop) | pinned + scrubbed | scale 3→1, translateY 28.5vw→−2.85vw | first ~30% of the pin | sticky stage inside a 400svh wrapper; named `view-timeline` on the wrapper, `contain 0% contain 30%` |
| orbits tabs (desktop) | scrubbed | opacity 0→1 | contain 34%–46% | same named timeline |
| orbits active orbit | pinned (scroll position) | LEO → MEO → GEO paragraph and tab highlight | thirds of contain 46%–100% | JS: scroll listener maps the wrapper's progress to an index (desktop); tab click scrolls there on desktop, switches directly on phones; paragraph crossfade 0.3s |
| quote | entering view | quote + attribution opacity 0→1, rise 15px; button a little later | ~100px | `view()` `entry` ranges |
| news title | entering view | opacity 0→1, rise 15px | ~100px | `view()` `entry 0px entry 120px` |
| slider / news arrows | hover / click | #252525 → #313131 bg 0.2s; scrolls the track by one card | 0.2s | `hover:bg-accent`, `scrollBy({left})` on a scroll-snap track (`hydrate: visible`) |
| Learn more / Read full article | hover | colour #5e5e5e → #c5c5c5 | 0.2s ease | `transition-colors hover:text-foreground` |
| buttons | hover | #252525 → #2e2e2e | 0.2s | `hover:bg-accent` |

Smooth scrolling: the capture lists **Lenis**, so the page uses a `k2space-smooth-scroll`
component (`hydrate: load`).

Skipped: motion inside the videos (the factory film, the planet). GSAP's per-line split uses
real line boxes; ours reveals by line position, which looks the same.

## Media slots

| slot | ours |
|---|---|
| hero video, full window | k2space-media fill, muted surface with a deep glow wash from the bottom, `cover` |
| 4 slider photos (1080×576 / 332×663) | k2space-media, same sizes, scale+blur scrub |
| showcase render (1440×720 / 390×760) | k2space-media, same aspect, scrub; hotspot brackets on top (layout chrome) |
| planet video (411 / 195px square) | round k2space-media placeholder (no planet drawing) inside a thin ring with four tick dots (HUD chrome) |
| quote photo, full window | k2space-media fill, scrub |
| closer photo (1440×720 / 390×675) | k2space-media, scrub |
| publication logos | plain bold text names of fictional publications |

## Decisions

- Wordmark: "HECTO" + lucide `Orbit` icon + "ORBITAL" in wide-tracked capitals, not their logo.
- Dark is the faithful mode. Light sibling: pale grey paper (#ececea), graphite ink, the same
  square buttons in a light grey. Hero, quote and closer media bands carry the `dark` class so
  their text stays light over footage in both modes.
- The original's orbits stage at 1440 is blind in the capture (the full-page shot drops it and
  the scroll frames stop at the list), so its desktop layout is **inferred** from the 390 layout,
  the motion list (planet zoom, tabs fade) and the section height.
- `--page-gutter` is `max(1.25rem, 2.43vw)`: 20px on phones, 35px at 1440 like the original.

## Comparison round 1

Heights all within ~5% (390: hero 844/844, slider 795/797, showcase 1152/1104, orbits 943/933,
quote 675/675, news 481/481, closer+footer 1587/1595; 1440: slider 690/689, showcase 1095/1090,
orbits 3668/3700, quote 900/900, news 718/716). Window-sized: hero 100svh both widths, quote
80svh/100svh, as the original. Motion list: header leave 0→−59px, line reveals 24/37px, media
scale 1.15→1 + blur, list rise 15px, planet translateY 410→−41px with scale 3→1, tabs fade,
pinned stage: all present, same kinds and directions.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | body type read lighter than Telegraf (only its 600 face loads, so every word is that weight) | same | — | yes: font-medium → 560 everywhere |
| header | wordmark too thin next to the original's line logo | clock had a gap before "/ name" (min-width) | — | yes: wordmark 400 weight, clock width removed |
| list | rows had a 224px min height; the original sizes rows by content (3-line row is shorter) | rows 229px min; original 229/229/211 | — | yes: content-sized rows (pb 64px / 8.8vw), link row 58px |
| footer | — | wordmark centred in the row instead of top-aligned; address wrapped to 3 lines | — | yes: self-start, shorter address |
| footer | — | page overflowed 15px at 1024 (last column's e-mail) | — | yes: min-w-0 + overflow-wrap, shorter e-mails |
| orbits | original's planet sits in thin elliptical orbit lines; ours a single ring with 4 ticks | desktop layout inferred | — | no: the orbit lines are illustration, kept as HUD ring |
| media | placeholders instead of footage | same | — | by design |
