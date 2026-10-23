# Vast → "Corvane" (vastspace): reference notes

Original: a commercial space-station company. Fictional stand-in used in the demo content:
**Corvane**, station **Lumen-1**. Landing page only (no other pages were asked for).

## Design language

- **Palette (all warm, one hot accent).** Meteorite black `#2a2c2f` (text, buttons), warm white
  `#fdfcf4` (page), warm grey `#ece8e3` (updates/press band, sign-up panel), moon rock `#b3aba3`
  (statement band, arrow buttons), asteroid dust `#897f75` (quiet text), solar orange `#ff5623`
  (tiny squares, the dial's needle, links in the cookie banner). Footer frame is pure black, with
  white and warm-grey panels floating in it. Green `#2da046` exists but isn't visible on the page.
- **Type.** Big, tight, medium-weight (500) neo-grotesque display: 76px hero (line-height ~0.86,
  letters nearly touching), 48px section titles (lh 1), 20px card titles, 16px body (lh 1.36).
  A **mono** for every label: 12px uppercase with a little tracking ("PRESS RELEASE ■ OCTOBER 6, 2026").
- **Layout.** 40px side margins at 1440 (16px at 390); content 1360 wide. 3-column grids with 60px gaps.
  Sections are tall and airy (120px top padding on the grey band). Almost no radius: 2px on buttons
  and inputs, pills only for tiny things. No shadows except the white nav bar (soft grey lift).
- **Shapes/depth.** Flat colour bands. Hairlines (`#b3aba3` at 40%) between press cards. A "dial" of
  tick marks around the station. Corner "+" crop marks on the statement band. Glassy grey caption
  cards on the slider photos (gradient from translucent grey to dark).

## Type

| Original | Classification | Used here |
|---|---|---|
| **Owners** (500) – hero and titles | wide-ish neo-grotesque, tight, large x-height | **Instrument Sans** (variable, weight 500): same neo-grotesque skeleton, slightly wide, large x-height, single-storey g |
| **Owners Text** (400/500, italic) – body, statement | same family cut for text; slightly wider, a touch quirky | Instrument Sans 400 |
| **Phonic** (400) – 12px labels | grotesque cut in a mono-looking uppercase with tracking (the captures render as typewriter-like caps) | **IBM Plex Mono**: neo-grotesque mono, closest to the uppercase label look |
| Vast Numbers | custom numerals for the spec table | IBM Plex Mono |

Not Inter/Geist/etc. (the original doesn't use them). Instrument Sans is the nearest open face
with the same width and x-height.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| 0 | nav | `vastspace-header` | fixed, 80px bar | logo left, two-line burger right; transparent over the hero (white), turns into a full-width white bar after scrolling | logo, four links, "Shop", white button; transparent over the hero, then a white bar inset 28px; hides on scroll down, returns on scroll up | none | state change on scroll, hide/reveal -108px, link hover wash |
| 1 | hero | `vastspace-hero` | **100svh** (sized by window) | full-bleed media, headline 48px bottom-left | full-bleed media, 76px headline bottom-left (max ~600px wide, 4 lines) | background image/video, cover, fills window | load rise of headline lines; media drifts down as the page scrolls (parallax) |
| 2 | statement | `vastspace-statement` | content: 509px / 720px | 32px text in a 358px column | 48px text, 815px column starting at x=80 | none | words go from asteroid-dust to white as they enter (scrubbed); "+" crop marks in the corners |
| 3 | station | `vastspace-station` | 900px at both | giant word (97px) at top, label, dial with 3D slot, 32px headline, link | giant word (345px) centred, dial 600px with the 3D slot in it, label top-left, spec table top-right, headline + link bottom-left | 3D station inside the dial | chevron in the link loops (1300ms) |
| 4 | progress | `vastspace-progress` | content: 931 / 1062 | title, 344×600 slides with 16px gap (next peeks), tick progress | title, 1084×701 slides (next peeks), caption left, ticks centre, arrows right | 30 photos (placeholders) | horizontal snap scroll, ticks follow it |
| 5 | updates | `vastspace-updates` | content: 3722 / 1681 | one column of 358px squares | 3 columns, 413px squares, 60px gaps | 6 square photos | images ease from slightly larger as they enter |
| 6 | press | `vastspace-press` | content: 749 / 856 | one quote card (300px) with the next peeking, arrows; logo marquee | 3 quote cards with hairlines; marquee of outlet names | none (outlet names are plain text) | marquee loops; the logo row also shifts sideways with the scroll (144 → -144px) |
| 7 | footer | `vastspace-footer` | content: 1105 / 779 | black frame, sign-up panel, white panel stacked | black frame, sign-up panel (title left, form right), white panel split by a vertical hairline | flag image | none |

Skipped on purpose: the cookie-consent banner (a third-party plug-in, not the design).

## Motion inventory

| section | trigger | what changes | timing / easing | built with |
|---|---|---|---|---|
| nav | scroll | transparent → white inset bar (28px margin, soft lift); on mobile full-width bar | 0.65s `cubic-bezier(.62,.05,.01,.99)` | small `useEffect` scroll listener (state), Tailwind transitions; `hydrate: load` |
| nav | scroll direction | translateY 0 → -108px when scrolling down after the hero, back on scroll up | 0.65s same ease | same listener |
| nav links | hover | text white → dark, with a wash filling behind | 0.5s same ease | Tailwind `transition` + `hover:` |
| hero | load | headline lines rise 100% from a clip, staggered 80ms | 0.9s same ease | CSS keyframes, `both` |
| hero | scrubbed | media translateY 0 → 20% as the hero leaves | linear | CSS `animation-timeline: view()` `exit` |
| statement | scrubbed | 16 words: colour asteroid-dust → white, staggered through the entry | linear | CSS view timeline on the section + per-word `animation-range` |
| station | loop | chevron in "Learn more" slides 0 → 4px and back, opacity pulses | 1300ms infinite | CSS keyframes (own .css) |
| progress | scroll/drag/arrow | track scrolls by one slide; ticks: active = orange square | native snap, smooth | `scroll-snap` + small scroll listener; `hydrate: visible` |
| updates | entering view | image scale 1.08 → 1 | linear, entry 0–60% | CSS view timeline |
| press | loop | marquee of outlet names, 60s linear | infinite | CSS keyframes |
| press | scrubbed | marquee wrapper translateX 144 → -144px over the section's pass | linear | CSS view timeline |
| buttons | hover | `filter: brightness(.9)`, 0.5s same ease | | Tailwind |

Smooth scrolling (Lenis) is on the original; the capture shows nothing the page depends on, so it
isn't rebuilt (it would be one more component; mention to the user if wanted).
Motion inside media (the 3D station slowly turning, the hero video) is not rebuilt.

## Media slots

Hero background (image/video, cover, 100svh) · 3D station in the dial · 30 slider photos
(1084×701 desktop, 344×600 mobile) · 6 update photos (square) · footer flag (59×31).
All are `ReactNode` props; empty they render `vastspace-placeholder` (muted surface, same shape).

## Decisions

- Light is the faithful mode; dark is a sibling (near-black page, warm-white text).
- Text on photos is `text-highlight-foreground` (white in both modes) so it stays readable on media.
- The footer's black frame uses `bg-chart-5` (black in both modes); there's no black token.
- `--page-width: 90rem` with `px-gutter` (clamp 1rem → 2.5rem) gives 1360px content at 1440.
- Header is `fixed`; blocks after it start at the top of the page like the original.

## Comparison round 1 (first pass vs original)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | burger, white-bar-on-scroll match | logo/links within ~15px of the original; CTA text shorter (fictional copy) | bar state, hide on scroll, link hover match the frames | – |
| hero | headline lighter than the original and 3 lines high | same: weight 500 read too light | load rise, drift: present | weight 600, tracking -0.055em: yes |
| statement | 477 tall vs 509 (shorter copy) | 720 ✓; text lighter than original | word colour reveal present | min-h 509/720, weight 560: yes |
| station | dial drew rays out to the square's corners | same; giant word 5% too tall (cap height 250 vs 240) | chevron loop present | mask closed at 100%, word 20.7rem: yes |
| progress | slides 312px wide (percent of the track, not the window) | slides 1024 vs 1084; section 1025 vs 1062 | snap + ticks work | widths in vw: yes (1064 vs 1062) |
| updates | ✓ | section 1595 vs 1681; titles lighter | image zoom present | bottom padding 12.25rem, titles medium: yes |
| press | ✓ | quote column 356px wide vs 320, quote 10px too low | marquee loop + scrubbed shift present | right padding 4.5rem, mt-4: yes |
| footer | form 15px lower than original, spacing below columns 55px short | form column started at 632 (original 594), link column 8px right, socials misplaced | hover opacity | grid 40/60, no column gap, socials as 32px boxes: yes |
| all | 360 and 768 overflowed (footer grid min-content) | – | – | white panel splits at 1024, `minmax(0,…)` columns: yes |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero, statement, station, progress, updates | match in place, size and rhythm (copy differs) | match; section heights 900 / 720 / 900 / 1064 / ~1680 | Motion list shows hero rise + drift, word colour, chevron loop, zoom, marquee; hover brightness .9 | – |
| press | ✓ | ✓ (height follows the longest quote) | ✓ | – |
| footer | 1138 tall vs 1105 (spacing under columns, 1.5rem) | 780 vs 779 ✓ | ✓ | gap-y on sign-up panel tightened: yes |
| overflow | fits at 360, 768, 1024 | – | – | – |

Still different on purpose: photos, 3D object and video are placeholders; the dial's ticks are
plain radial dashes (the original's tilt a little); brand icons in the footer are generic lucide
icons (lucide has no brand marks); the original's cookie banner is not rebuilt; smooth scrolling
(Lenis) is not rebuilt. Re-theming checked under `sample-ember` (dark): header, station and
updates re-colour and stay legible.
