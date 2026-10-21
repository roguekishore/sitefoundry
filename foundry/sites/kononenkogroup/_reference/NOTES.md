# kononenkogroup — notes

Original: https://kononenkogroup.com/ (an architecture bureau's landing page), captured in
advance (`precapture.json`, landing page only; no other pages were asked for). Recreated as
**Aldermoor Spatial Practice**, a fictional architecture practice in Lisbon and Aarhus.

## Design language

- **Palette:** pure paper white and pure black ink, nothing else. One grey (rgb 146) for
  secondary lines (subtitles, cities, hours). Hairline grey rules in the offices table. The
  second half of the page turns fully black (people, numbers, clients, footer), with white type
  and the same grey. No accent colour at all; photos carry the colour.
- **Type:** two families, both at weight 400 only. A tight neo-grotesk for headings, labels,
  navigation, numbers; a crisp text serif for long statements, small section labels and
  figures (m², footer meta). Huge contrast in size: 12px labels next to 131px headlines.
  Everything scales with the window width (vw), the same proportions at every desktop width.
  Tracking is tight everywhere (−0.02em small, −0.03em big). Leading very tight on headlines
  (0.7–0.9), 1.1 on serif paragraphs.
- **Type scale** (390 / 1440): small 14.56 / 12px · serif paragraph 27 / 30px · sans heading
  41.6 / 60px · serif statement 37.4 / 88.5px · huge 41.6 / 131px · ray labels – / 9px.
- **Grid:** 15 columns at 1440 (78px columns, 16px gaps, 23px side gutters, pitch 94px =
  6.53vw). Everything snaps to it: facts at col 1–2, paragraphs from col 6, offices table
  col 6–12, project cards 4, 6 or 7 columns wide. At 390: one column with 16px gutters, and a
  two-column label/value grid for facts and the footer.
- **Spacing rhythm:** big air. ~130px between sections at 1440 (9vw), ~50px at 390. Serif
  statements' first line indented by one column.
- **Shapes and depth:** none. Square corners, no shadows, no borders except table hairlines.
  The client circles (50%) are the only round thing.

## Type

| original | classification | width | x-height | ours | why |
|---|---|---|---|---|---|
| `n` (sans; Neue Haas / Helvetica Now style) | neo-grotesk sans | normal | large | **Arimo Variable** | an open neo-grotesk with Helvetica-like proportions, horizontal-ish terminals, normal width and a large x-height; already installed |
| `h` (serif) | transitional text serif with wedge serifs, moderate contrast | normal | large | **Newsreader Variable** (opsz axis) | open serif with a display optical size (sharp, higher contrast at large sizes) and a generous x-height; Crimson Pro (installed) has too small an x-height |

`@fontsource-variable/newsreader` added (opsz file imported so big sizes use the display cut).

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | fixed header | `kononenkogroup-header` | 64 / 73px, fixed | 3-line wordmark left (last word serif), "Projects, Studio, Contact" top right | same, nav adds "Index," | – | blend-difference over everything; underline hover; lines rise out at page end |
| 2 | hero | `kononenkogroup-hero` | **window** (99% / 100svh) | full-bleed photo, 2-line title bottom-left (last word serif) | same | photo, window-filling, cover | photo drifts down 0→180px as the hero leaves (scrubbed); title rises on load (inferred) |
| 3 | statement | `kononenkogroup-statement` | content (546 / 1135) | centred 2-line sans heading, two centred grey paragraphs, full-bleed 3:2 photo | 131px heading, paragraphs at col 5 and col 9, full-bleed photo 1440×590 | photo | heading words rise (scrubbed), paragraph lines rise, photo parallax −144→144px inside its frame |
| 4 | about | `kononenkogroup-about` | content (1374 / 598) | facts (label/value), serif paragraph, then Achievement / Awards / Publications stacked | facts col 1–3, serif 30px paragraph col 6–14; achievement row: label col 1, awards col 5–8, publications col 10–13 | – | all lines rise 15 / 48px on entering |
| 5 | services + offices | `kononenkogroup-offices` | content (1327 / 904) | 37px serif statement (indented), "Offices" label, rows: name / city+address / ↗ | 88px serif statement, label col 5, table col 6–12 (name, city, address, ↗) with hairlines | – | statement lines rise; rows rise 36px staggered; hairlines draw in from the left |
| 6 | process (2 stages) | `kononenkogroup-process` | content (2217 / 3447) | centred heading, sketch, serif lead, label, serif body, small list | centred 60px heading, full-width sketch ~900px tall, 88px lead, sticky label col 1 + 30px body col 8–15, list col 7–8; stage 2 body on the left | 2 sketches (WebGL line drawing in the original) | heading/lead/body lines rise; sketch fades in; label sticky while the body passes |
| 7 | projects | `kononenkogroup-projects` | content (1926 / 3494) | 1-line heading, cards stacked 1.6:1, caption name + area, "See All" | 2-line heading + serif count, 8 cards scattered on the 15-col grid (7, 7, 6, 4, 7, 4, 7, 7 columns, staggered tops), centred "See All" | 8 project photos | cards rise 216–276px on entering; hover: photo 1.035, area slides up, "Visit" slides in with underline drawn after 0.3s |
| 8 | principles (desktop only) | `kononenkogroup-principles` | **window ×2** (200svh, sticky stage) | hidden | star of 8 rays with 01–08 labels around a centred 60px 2-line heading | – | pinned; star turns 180° with the scroll; heading A slides out, B rises in; page turns black |
| 9a | people | `kononenkogroup-people` (dark) | content | label + serif statement, ring of 10 photos round a centred heading, 2 grey paragraphs | label col 1, 88px statement col 1–9 indented; big gap; ring of photos (r ≈ 600px) round 131px heading; paragraphs at col 5 / col 9 | 12 team photos | statement lines rise; ring turns with the scroll |
| 9b | numbers | `kononenkogroup-stats` (dark) | content | number 41.6px sans + serif label indented, stacked | right half: 131px number + 88px serif label, dimmed to 20% | – | numbers rise; hover lifts a stat to full white (0.3s) |
| 10 | clients | `kononenkogroup-clients` (dark) | content (378 / 903) | centred serif heading only | 131px serif heading centred, 18 circles on an oval ring round it, fading from bright to dim | 18 client marks → plain-text names in circles | heading lines rise; ring spins in along the oval, fading in (scrubbed) |
| 11 | footer | `kononenkogroup-footer` (dark) | content (939 / 916) | wordmark, 2×2 link grid, giant monogram, stacked serif meta | 15-col row of label/value pairs, giant monogram full width, meta row | – | lines rise 15px |
| – | smooth scroll | `kononenkogroup-smooth-scroll` | – | – | – | – | Lenis seen in the capture |

Shared components: `kononenkogroup-lines` (words rising from masks), `kononenkogroup-link`
(underline drawn on hover), `kononenkogroup-media` (media slot / placeholder).

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| all text | entering view | every line rises from behind a mask (translateY ≈ its own height: 15px small … 125px statements) | 1.1s cubic-bezier(0.17, 0.84, 0.44, 1) | `kononenkogroup-lines`: each word in an `overflow: clip` mask that is its own view timeline, `entry 0px → entry 200px`, same easing |
| header | always | `mix-blend-mode: difference` white type | – | Tailwind `mix-blend-difference text-background` (normal blend in dark mode) |
| header links | hover | underline scaleX 0→1 from the left; on the active link it retracts to the right | 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) | `kononenkogroup-link`, Tailwind transitions |
| header | scrubbed (page end) | wordmark and nav rise out (0→−22px) as the footer arrives | – | CSS `scroll(root)` timeline, last window of the page |
| hero | load | title lines rise (inferred: the capture starts after load) | 1.1s same ease | lines `trigger="load"` (CSS keyframes) |
| hero | scrubbed | photo drifts down 0→180px (20%) as the hero leaves | linear | CSS view timeline `exit` range |
| statement photo | scrubbed | photo moves −144→144px inside its frame | linear | oversized inner layer, view timeline `cover` |
| offices rows | entering view | rows rise 36px, staggered; hairline draws in from the left | same ease | CSS view timeline per row, `transform-origin: left` scaleX |
| process sketch | entering view | the drawing appears (WebGL) | – | placeholder fades in (view timeline) |
| process label | pinned | small label stays at the top left while the body passes | – | `position: sticky` |
| projects cards | entering view | card rises 216–276px | same ease | CSS view timeline, translateY 15vw → 0 |
| project card | hover | photo scale 1.035; area slides up −101%; "Visit" slides in, its underline draws after 0.3s | 0.6s same ease | Tailwind `group-hover` transitions |
| principles | pinned + scrubbed | star of rays turns 180° (labels upright); heading A slides up out, B rises in; page turns black | linear | sticky stage in a 200svh wrapper, view timeline on the wrapper, registered `@property` angle; a dark copy of the stage fades in |
| people ring | scrubbed | ring of photos turns | linear | view timeline rotate on the ring, slots counter-placed |
| stats | hover | stat 20% → 100% white | 0.3s ease | Tailwind `lg:opacity-20 hover:opacity-100` |
| clients ring | scrubbed | 18 circles travel along an oval into place, opacity 0 → their trail value, scale to their trail value | linear | registered `@property` angle animated by a view timeline; positions with CSS `cos()`/`sin()` |
| page | scroll | Lenis smooth scrolling | – | `kononenkogroup-smooth-scroll` (lenis) |

Skipped: the rays of the star bend as it turns (WebGL-like line curvature); we rotate straight
rays. The sketches drawing themselves is media.

## Media slots

| slot | size / aspect | placeholder |
|---|---|---|
| hero photo | full window | `bg-muted` fill, cover |
| statement photo | 390×260 (1.5) / 1440×590 (2.44) | `bg-muted`, full bleed, parallax layer |
| process sketches ×2 | 359×224 / 1394×880 (≈1.6) | `bg-muted` panel |
| project photos ×8 | 1.6 on phones; 643×405, 549×405, 361×525 at 1440 | `bg-muted` |
| team photos ×12 | 68px / 15vw squares | `bg-muted` (dark) |
| client marks ×18 | 126px circles | light circle with the fictional name in text |

## Decisions

- Dark sections (people, numbers, clients, footer) carry the `dark` class on their root, so they
  read the theme's dark tokens even on a light page; that is how the original switches to black
  without hard-coded colours. In another theme they become that theme's dark mode.
- The principles star, which only exists at desktop on the original, is `hidden lg:block`.
- The site is fluid (vw type). We keep vw sizes but floor the smallest text at 10px so 1024px
  screens stay legible.
- Project cards use one shared grid row at desktop with a `margin-top` per card (in vw), so the
  scattered layout keeps the original's overlaps and the section still gets its height from
  content.
- `package.json` also carried another session's uncommitted `@fontsource/inria-serif` line when
  I added Newsreader; committing package.json takes both (harmless, same file).

## Comparison round 1

The capture's `ours-*-section-NN.png` crops freeze CSS scroll-driven animations part-way (text
shows half-risen, the clients ring looks absent), so settled frames were also taken with a small
Playwright script against the gallery (scroll to each section top, wait 0.7s); the clients ring,
star and stats were confirmed there.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all serif statements | words spread far apart | same (statements 30% taller, process 4511px vs 3447) | – | yes: `text-indent` was inherited by every word's inline-block mask; masks now reset it |
| all text | – | tops of unrisen letters peeked above the masks | rise distance too short for 0.82 leading | yes: words start `100% + 0.5em` down (lines, principles, header) |
| hero | serif last word sat higher than the sans | same | – | yes: masks align on the baseline, not the top |
| about | – | facts wrapped into the 4th column (dt/dd in a 4-col grid) | – | yes: labels pinned to column 1 |
| projects | 8 cards (original shows 6 on phones) | matches | rise, hover ok | yes: `phoneCount` (default 6) |
| offices | long addresses wrap to 2 lines | one address wrapped | rows rise, hairlines draw ✓ | yes: address spans 3 columns, demo addresses shortened |
| sans headings | Arimo reads wider than the original grotesk | same (0.41em vs 0.36em per character) | – | yes: big sans tracking −0.03em → −0.045em |
| people ring | 12 slots overlap at 17.4vw | ok | ring turns ✓ | yes: phone slot 14.5vw |
| clients | 304px vs 378px | 903 ✓; ring ✓ (probe) | ring spins in ✓ | yes: phone padding 26vw → 30vw |
| footer | ok | "Privacy & terms" wrapped in its 1-column cell | header rises out at page end ✓ | yes: demo label shortened |
| heights | statement 558/546, about 1323/1374, offices 1347/1327, process 2118/2217, projects 1942/1926 | hero 900 ✓, statement 1115/1135, about 665/598, offices 977/904, process 3579/3447, projects 3533/3494, principles 1800 = 200% window ✓, clients 903 ✓, footer 900/916 | – | within ~10% |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| statement photo | ok | ok | parallax ±84px vs the original's ±144px | yes: layer 150% tall, ±16% → ±142px |
| offices | ok | arrows dropped to a second row when the address spanned 3 columns; 1101px | rows rise 36px ✓, hairlines draw ✓ | yes: address back to 2 columns (short demo addresses); 963px vs 904 |
| hero | – | serif word on the sans baseline ✓ | drift 0→180px ✓ (identical to the original) | – |
| projects | 6 cards ✓ | scatter ✓ | cards rise 216px ✓ (identical) | – |
| principles | hidden ✓ | 1800px = 200% window ✓ | star 0→180°, numbers upright, heading swap ±83px ✓, fades to black ✓ | – |
| people | ring of 12 no longer overlaps ✓ | ✓ | ring turns 40°→−40° | – |
| clients | 335px vs 378 | 903 ✓ | ring spins in, fades 0→1, per-circle scale/opacity from the oval ✓ | – |
| header | ✓ | ✓ | rises out (0→−19px) as the footer arrives ✓ | – |
| overflow | 360 ✓ | 768 ✓, 1024 ✓ | – | – |

Re-theme check: `kononenkogroup-offices` and `kononenkogroup-stats` previewed under
`sample-ember`: warm paper and ember type, the stats' dark scope picks up ember's dark tokens;
both read correctly.

Remaining differences: Arimo is still a touch wider and rounder than the original's grotesk
(tracking tightened to compensate); the star's rays stay straight (the original bends them as it
turns); the sketches and photos are flat placeholders; text reveals are scrubbed over a fixed
200px of scrolling instead of the original's 1.1s timed reveal on entry.
