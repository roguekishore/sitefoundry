# warp — recreation notes

Captured in advance (`precapture.json`, landing page only, no other pages asked for). The
390 frames carry the original's "desktop app" bottom sheet (an email prompt fixed to the
bottom of the window) and a sound toggle fixed bottom-left; both are promos/audio features
and are not recreated.

Fictional company for the copy: **Lathe**, an open platform for running fleets of coding
agents ("lines" instead of factories), with a desktop shell app and a command-line agent.

## Design language

- **Palette roles.** A very pale lavender-white page (#fbf9fe) under a faint dot grid
  (ink dots at 7–16%, 1.2px on a ~24px pitch), with white panels. Ink is a violet-black
  (#1a1522) at 100 / 78 / 62 / 40 / 20% for text tiers. The brand is an electric
  ultramarine (#2a1eff): active tabs, the scrolled sub-navigation bar, code keys, the case
  study band, the deepest "layer" row, working cells. A pale citron (#eef17c) fills only the
  "book a demo" button. Blue tints at 5 / 14 / 30% build the layer stack; a soft violet
  (#9b8cf8) draws chart lines.
- **Type scale (1440 / 390).** H1 56 / 34px mono, regular, line height ~1.04, tracking
  -0.01em. Section H2 34px mono regular with very open leading (56px lines) when it wraps.
  Card titles 19px geometric sans, semibold, tight. Lead 16px mono with +0.45px tracking;
  section lead 14px; body 13px / 1.65; UI labels 12–13px uppercase with +0.08em tracking;
  figure captions 9–11px uppercase with wide tracking. Big figures 34px mono.
- **Spacing rhythm.** Every section: a full-width hairline on top with tick marks at six
  column guides, ~60px to the tag line, 24px tag→H2, 16px H2→lead, 36px lead→content, ~60px
  bottom. Panels pad 24–32px.
- **Grid.** A 1180px frame (130–1310 at 1440) drawn as faint vertical lines, content inset
  24px inside it (1132px). At 390 the frame sits 8px from the window edge and content 24px.
  Six equal columns mark the ticks.
- **Shapes.** Square: buttons, tabs, panels and figures have 0–4px corners; chips and status
  pills are full pills; avatars round. Figures are "plates": a 1px ink frame, a title bar
  with a small `‹›` box left, a rule, `[ fig. n · title ]` centred, a rule, a `⊞` box right,
  and an inner 1px ink frame over a dot grid holding a white card with a 12px radius.
- **Depth.** Flat. Hairlines (ink 16%) and solid 1px ink frames do all the work; one soft
  shadow (0 8px 22px ink 10%) under a floating card.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Azeret Mono (as "azeretSemiMono"; H1, H2, body, UI, code) | monospace grotesk with slab-ish i/l/r/f | normal mono width (~0.54em advance), large x-height | **Azeret Mono Variable** (`@fontsource-variable/azeret-mono`) | it is the same open (OFL) family the original loads, so the closest possible match |
| theFuture 400/500/700 (card titles, story titles, layer names) | geometric sans, Futura-descended but with a double-storey a | normal width, medium x-height, tight | **Figtree Variable** 600 at -0.02em | open geometric sans with a double-storey a and the same round o/b/p; already in the repo |
| matter / Instrument Serif / Inter (loaded, barely used) | — | — | not used | under 3 uses on the page |

Token mapping: `--typeface-body` and `--typeface-mono` = Azeret Mono, `--typeface-display`
= Figtree (the card-title face). H1/H2 use `font-mono`, since the original sets its big
headings in the mono.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | top bar | warp-header | 64px, sticky | wordmark, citron "book a demo", menu button | wordmark, 4 menus + pricing, sign in, citron + ink buttons; past the first screen a blue bar of `[C] Configuration…` jump links + white CTA slides in | — | sticky; nav↔subnav swap after one screen (desktop); scroll progress line; hover blue |
| 2 | hero | warp-hero | **window** (909 at 900, 851 at 844), clipped | 3-line H1, lead 4 lines, 2 buttons side by side, figure clipped by the window | 2-line H1, lead 1 line, buttons, figure plate 1132 wide: 8×28 status cells, legend, totals | background canvas (dot field) → CSS dot grid | rise-in on load; working cells pulse (loop) |
| 3 | logo strip | warp-logos | 158px | caption, marquee | caption, marquee with edge fades | customer logos → plain-text names | marquee loop 38s leftward; reveal |
| 4 | configuration | warp-config | content, 1667 / 1164 | heading, lead, outline button below; tabs stacked as a list; description; plate with code only | heading + button right; 8-tab bar edge to edge of the frame; description; plate with file list (left third) + code with line numbers | — (code is UI, built) | section reveal; tag types in; tab switch (click) |
| 5 | SDLC | warp-sdlc | content, 1182 / 1034 | heading, 6 stacked numbered rows | heading; rows left half, product shot right half (565×765) | right-half screenshot → placeholder (hidden on phones, as in the original) | reveal; the highlighted row steps through the list (loop) |
| 6 | quality loop | warp-quality | content, 1578 / 806 | heading; plate with 3 metric columns stacked | plate with 3 metric columns | 3 line charts → placeholders | reveal |
| 7 | case study | warp-case | content, 650 / 471 | blue band; tag, title, text, white button, image under | blue band with white dot grid; text left, image right (544×340) | benchmark chart image → placeholder | reveal |
| 8 | enterprise stories | warp-stories | content, 1480 / 979 | heading; 2 stacked story cards | heading; 2 square-image story cards | 2 square photos (556) → placeholders | reveal; image scale on hover |
| 9 | layers | warp-layers | content, 1098 / 714 | heading; plate with 4 stacked layer cards | plate with 4 full-width rows, tint deepening to solid blue | — | reveal; active row outline steps through rows (loop) |
| 10 | governance | warp-governance | content, 1811 / 1230 | heading; plate: cost card, roster card, then the computer-use panel stacked | plate: cost card + roster card side by side, below a wide panel with text left and a browser shot right + agent reply | cost area chart, browser-window shot → placeholders | reveal; browser shot fades in; reply rises; typing dots loop |
| 11 | everywhere | warp-everywhere | content, 1905 / 839 | heading, blue lead; 3 stacked product cards | 3 product cards in one bordered row | 3 square product images → placeholders | reveal |
| 12 | FAQ | warp-faq | content, 798 / 659 | heading 2 lines; questions wrap | heading; 9 ruled rows `> question … [+]` | — | reveal; open/close (details) |
| 13 | footer | warp-footer | content, 787 / 335 | mark + tagline and 5 columns in a 2-up grid | mark + tagline, 5 columns, rule, copyright | — | link hover |

## Motion inventory

| section | trigger | what changes | timing / easing | build |
|---|---|---|---|---|
| every section's content | entering view | opacity 0→1, rise 12px | ~450px of scroll | CSS `view()` timeline, `entry 0px entry 240px`, in `@supports` + no-preference (warp-section) |
| section tag | entering view | the label types out (max-width 0→full, steps), then `[.]` turns to `[ONLINE]` | 900ms type + 1300ms status | CSS `view()` timeline on the tag: width in steps, then status swap (warp-section) |
| header | scroll past one screen (desktop) | main nav slides up 64px, blue sub-nav slides down from -64px | instant-ish, 1 screen | CSS `scroll(root)` timeline, range `calc(100svh - 80px)` → `100svh` |
| header | pinned | stays at the top | — | `sticky top-0` |
| scroll progress | scrubbed | 2px blue line at the window bottom grows with page scroll | linear | CSS `scroll(root)` scaleX 0→1, fixed bottom-0 |
| margin notes | fixed | vertical "LATHE · HOME · 2026" at both window edges (desktop) | — | `fixed` in the header block |
| hero | load | headline, lead, buttons, figure rise 12px + fade | 600ms, staggered 80ms | CSS keyframes, fill both |
| hero cells | loop | working cells pulse opacity 1→.4 | 1800ms | CSS keyframes, staggered delays |
| logos | loop | track slides left | 38s linear infinite | CSS keyframes on a doubled list |
| SDLC rows | loop | grey highlight moves row to row | ~3.5s per row | CSS keyframes per row, delays |
| layers | loop | active row gets a blue outline and its chips go from 40% to full | ~3s per row | CSS keyframes per row, delays |
| governance | entering view | browser shot fades in; reply message rises 16px | view timeline | CSS `view()` |
| governance | loop | three typing dots blink | 1100ms | CSS keyframes |
| governance | loop | marquee of names inside the browser shot | 26s | inside media → not rebuilt |
| buttons / links | hover | ink → blue text and border; citron → blue with white text; ink fill → blue | 150ms ease | Tailwind `transition-colors duration-150` |
| config tabs | hover / click | hover tint ink 5%; click switches the panel | 300ms cubic-bezier(.4,0,.2,1) | Tailwind + React state (`hydrate: visible`) |
| story cards | hover | image scale 1.02 | 500ms | `group-hover:scale-[1.02]` |
| FAQ | click | `[+]` → `[−]`, answer shows | — | `<details>` |

Skipped: the hero's background canvas animation (media); the configuration "callout"
that slides in at 1440 (it never appears in a frame, so its look is unknown); status text
cycling inside the agent roster (content animation inside a figure).

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero background | canvas, full window | CSS dot grid + white-to-clear top fade (design, not art) |
| SDLC product shot | image 565×765 (0.74), dot-grid frame | `warp-media` surface, fills the right half, hidden < lg |
| quality charts ×3 | small line charts ~300×110 | `warp-media` strip, 110px tall, gridline-free muted surface |
| case study chart | image 544×340 (1.6) on a white plate | `warp-media` aspect 1.6 |
| story photos ×2 | images 556×556 (1:1), cover | `warp-media` square |
| governance cost chart | area chart ~450×160 | `warp-media` 160px tall |
| governance browser shot | HTML mock browser 486×316 | `warp-media` aspect ~1.54 with a 1px border |
| product images ×3 | images 376×376 (1:1) | `warp-media` square |

## Decisions

- **The hero's status grid is built**, not a placeholder: it is an abstract matrix of
  small squares in four states (an index of the design, like a dot grid), not a picture of a
  product. Cell states come from a prop or a deterministic default pattern.
- The configuration file list and code are built: code in a mono face is typography.
  Tab content (description, files, code) comes in as props per tab.
- The quality / governance charts are placeholders (they are drawings of data); the
  numbers, labels and rows around them are built.
- Shared pieces: `warp-button`, `warp-section` (the hairline-and-ticks frame, side tabs,
  typed tag, heading, reveal), `warp-plate` (the figure frame), `warp-media`
  (placeholder), `warp-mark` (wordmark).
- `--page-width` 73.75rem (1180px frame); content is inset 24px inside it.

## Comparison round 1

Captured with a copy of `capture.mjs` that stubs Vite's reload socket (other sessions edit
the shared gallery). Section crops show the scroll reveals at their start, so sections were
judged on the scroll frames.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all text | lines ~20% longer than the original's | same: H1 two lines but wider, lead wrapped to 2 lines | — | yes: Azeret Mono's advance is 0.64em, the original's narrowed "semi mono" 0.54em; every mono style tightened by ~0.1em (H1 52px −0.07em, H2 32px −0.09em, body −0.07em, uppercase 0) |
| headings | H2 34px with 56px lines | same | — | yes: H2 32px on 56px lines, weight 380 to match the lighter original |
| section tag | `[.` and a gap where the status would be | same | pending glyph and status were stacked, so the brackets held the status's width | yes: both clipped to their own width; brackets close up |
| logos | — | — | marquee crawled; the original also speeds up with page scroll (moved ~800px across the scroll pass) | yes: tripled list, 38s loop plus a one-set drift on `scroll(root)` |
| layers | chips almost invisible on pale rows | chips faint; rows 70/73/79/85px in the original, ours equal | chip fade looped on phones too | yes: chips white with a blue hairline; per-row heights; fade loop desktop only |
| FAQ | rows 54px vs 52px | same | — | yes: 14px row padding |
| footer | — | link pitch 31px vs 26px (inline links inherited 24px lines) | — | yes: list sets 13px / 1.45 |
| hero | fits the window (original clips its figure; our copy is a line shorter) | matches; figure top 415 vs 406 | load rise + pulse present | n/a |
| header | — | menu → jump bar swap and progress line present, same as the original | scroll-linked, at one screen | n/a |
| heights | — | config 1183/1164, lifecycle 1054/1034, scoring 800/806, case 464/471, stories 1000/979, layers 678/714, oversight 1234/1230, everywhere 855/839, FAQ 685/659, footer 355/335 | — | layers and FAQ fixed above |
| hover | — | ink/outline/citron buttons → blue in 150ms; tabs tint 300ms; arrow nudge | matches | n/a |
| overflow | fits at 360 / 768 / 1024 | — | — | n/a |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| product trio | cards ran off the right edge (the long install command set the grid column's width; hidden by the section's overflow clip, so the overflow check passed) | — | — | yes: `grid-cols-1` + `min-w-0` on every single-column grid in the site |
| all blocks under other themes | — | the ~0.1em squeeze made ordinary body faces cramped (checked in sample-ember) | — | yes: blocks write spacing as `original − var(--warp-squeeze, 0em)`; only the warp theme sets the squeeze (0.1em) |
| typed tag under other themes | — | the label clipped its last letter (max-width assumed the warp spacing) | — | yes: width allows 1ch + 0.2em per character |
| lifecycle rows, story titles | — | titles lighter than the original's bold geometric | — | yes: Figtree 700 |
| scoring | chart slots 108px vs ~80px on phones | matches | — | yes: 80px on phones, 108px from lg |
| heights at 390 | config +73, lifecycle +100, scoring +156 (with the chart fix about +90): our titles are a line longer in Lathe copy | 1440 within ±36px everywhere | — | left: copy length, not layout |
| motion | — | reveal 12px rise per section, typed tag with `[.]` → `[ONLINE]`, header swap at one screen, progress line, logo drift + loop, row highlight loops, shot fade + reply rise, dots blink — all present in ours' Motion list | same kinds and directions as the original | n/a |

At a glance, each section pair now reads as the same design (layout, rhythm, type, colour,
frames), with Lathe copy and plain placeholders where the original has photos, charts and
screenshots.
