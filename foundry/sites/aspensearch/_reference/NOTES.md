# aspensearch — recreation notes

Original: https://aspensearch.com/ (landing page only; precaptured, no other pages asked for).
Fictional stand-in: **Corvo Talent**, a search firm placing quant researchers, engineers
and ML people. All copy, names, firms and quotes are invented.

## Design language

- **A hard tile grid.** The page is a wall of square-cornered tiles on a 2-column grid
  (720 + 720 at 1440), each column split again into quarters (360). Tiles touch; 1px ink
  hairlines (`#232323`) separate them. No radius anywhere, no shadows: depth comes only from
  flat colour blocks and the halftone "windows".
- **Palette roles:** white paper `#fff`; ink `#232323` (text, hairlines, dark tiles, filled
  buttons); mint `#a1ffcb` (the one brand accent: tiles, name bars, the CTA arrow box);
  greys `#d9d9d9` (tiles) and `#e0e0e0`; 65% ink for secondary mono text. Client tiles use
  deep brand blues (navy, ocean, teal, indigo).
- **Halftone windows.** Many tiles are holes onto one fixed WebGL halftone canvas (dot
  screen of a big rotating 3D logo). That is media → placeholder (see Media).
- **Type:** one neo-grotesk at weight 450 with -4% tracking everywhere, from 12px up to
  180px display words that scale with the window (13.8vw on phones, 12.5vw on desktop); a
  mono at 12–14px uppercase for labels, lists, counters and buttons.
- **Rhythm:** 20px gutter inside tiles (`p-5`), tiles of half a window (desktop row =
  (100svh − header)/2 ≈ 420px), body copy 16/20.8, lead copy 24px (phone) → 38px (desktop).

## Type

| Original | Class | Ours | Why |
|---|---|---|---|
| Suisse Int'l (400/450/600) | neo-grotesk, normal width, large x-height | **Host Grotesk Variable** (already in the repo) | closest open neo-grotesk in width and x-height; variable, so the 450 weight exists |
| Suisse Int'l Mono 400 | monospaced grotesk, dotted zero | **Source Code Pro Variable** | neutral mono with a dotted zero and similar width; already installed |

No new packages.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | aspensearch-header | 61px, sticky | logo square · city time · mint "Menu" half | logo square · city time · (50%) nav · theme switch · dark Contact 200px | — | sticky; city time flips with scroll; nav roll hover |
| 2 | hero | aspensearch-hero | window-sized (rows = (100svh−61)/2, 205% of window) | 2×2 tiles (word, halftone, halftone, grey word), dark headline tile, mint tile with marquee | 2 cols × 4 rows: word / halftone, halftone / [dark intro + mint hires], halftone / grey "word", dark headline 1.4 rows / halftone | 4 halftone windows | load rise; headline lines rise 120px on view; marquee loop |
| 3 | about | aspensearch-about | content (1528 / 1979) | label, 24px statement, 3 stats stacked full width (200 each) | label left col, 38px statement right col; stats as offset tiles (dark 360×200, mint 720×800, grey 360×400) | — | line reveal; odometer digits scrubbed |
| 4 | services | aspensearch-services | content | heading (53px), copy + button, dark rows: number + icon slot, title, copy, list | grey 720×840 heading tile left; dark column right with 4 rows of 420 | 4 icon slots 176² | heading lines rise 88px; line reveal |
| 5 | clients | aspensearch-clients | content | halftone square, label, word, copy, button, list rows 101px | word tile + halftone (585), then label/counter quarter + copy quarter + logo panel, list of 121px rows right | halftone, one logo slot per client | active row follows scroll (dark fill, logo panel and counter follow); hover fill rises 0.8s |
| 6 | testimonials | aspensearch-testimonials | content (840 desktop) | label+counter, quote 24px, name/role + small photo, dark position/company strip, arrows | 360 label/arrows/photo · 720 quote · 360 dark facts + halftone | photo, halftone | progress bar autoplay; quote line reveal; arrow hover |
| 7 | team | aspensearch-team | content | label, word, sub, copy, stacked cards (photo 4:5 + mint name bar) | word / sub row (420), label + arrows / copy row, 4 cards per view over a halftone | photo per card, halftone backdrop | per-card scrubbed parallax (±90…314px); carousel arrows |
| 8 | cta | aspensearch-cta | window-sized: 153% of window | halftone field, word blocks 34px | halftone field, word blocks 132px (LET'S · START · A / CONVERSATION · mint arrow) | halftone field | words rise on view, staggered |
| 9 | footer | aspensearch-footer | content (840 desktop ≈ 93% window) | stacked rows: tagline, nav, clocks, email, link, mint panel, dark wordmark panel | top row: tagline 720 · nav 360 · clocks 360 + email/link strip; bottom row dark wordmark 720 · mint CTA 720 | — | bottom row sticky-revealed under the top row; hover fills |

## Motion inventory

| section | trigger | what changes | timing | ours |
|---|---|---|---|---|
| header | pinned | sticky top | — | `sticky top-0` |
| header | scrubbed | city time flips NYC ↔ LA (translateY −1 line) | whole page | CSS `scroll(root)` keyframes alternating 0 / −1lh |
| header nav | hover | dark fill, text rolls up to a copy | 0.6s cubic-bezier(.16,1,.3,1) | Tailwind group-hover translate + bg fill |
| buttons | hover | fill sweeps in from the left, text/arrow colour swap | 0.8s cubic-bezier(.16,1,.3,1) | `before:` scale-x 0→1 transition |
| hero | load | first-screen words rise | ~1s expo-out | CSS keyframes, fill both |
| hero/services/cta | entering view | display lines rise 88–123px + fade | ~1s | per-line spans on `view()` timeline |
| all copy | entering view | each line: clip + rise ~30px + opacity 0→1 | 1s, lines staggered by position | `aspensearch-reveal-text`: each word in a clip span on its own view timeline, so words on one line move together = line reveal |
| hero | loop | hires marquee | 12.8s linear infinite, pause on hover | CSS keyframes |
| about | scrubbed | odometer digits roll (translateY 0→−n·1em) | over ~1 screen | `aspensearch-odometer` on `view()` |
| clients | scrubbed | active row (dark fill), logo strip translateY, counter roll | over the list | motion `useScroll` → active index; CSS transitions 0.8s |
| clients | hover | row fill rises (scale-y 0→1), text → white | 0.8s expo-out | hover sets active index (same visuals) |
| testimonials | loop | progress bar fills then next quote | ~8s | CSS keyframes + `onAnimationEnd` |
| team | scrubbed | each card translateY +N→−N (N 90…314px) | across the section | named `view-timeline` on the section, per-card `--shift` |
| team | click | carousel shifts one card | 0.8s expo-out | translateX on a clipped track |
| cta | entering view | words rise 26–112px | ~1s | `view()` with per-word range offset |
| footer | pinned | bottom row stays put while the top row slides over it | 2 half-screens | `sticky bottom-0` under a `z-10` top row |
| — | scrubbed | 3D logo scales/rotates in the fixed canvas | — | media: not rebuilt |
| page | wheel | Lenis smooth scroll | ~1.2s ease-out | `aspensearch-smooth-scroll` (lenis), used by page.tsx, hydrate load |

## Media slots → placeholders

- Halftone windows (hero ×4, clients, testimonials, team backdrop, CTA field): `aspensearch-halftone`, a
  `bg-muted` surface with a token-coloured dot screen fixed to the window
  (`background-attachment: fixed`), so the windows read as holes onto one still layer, as in
  the original. Filled by a `media` prop when given.
- Service icons (176² line drawings): an empty dashed-hairline square.
- Client logos: one tile per client in `chart-1…5`, the name in mono (a slot per client).
- Testimonial portrait (360×420 / 100² on phones), team portraits (4:5): `bg-muted` frames.
- Footer logo lockup: our plain wordmark in the display face.

## Decisions

- Dark tiles use `bg-foreground text-background` (an inverted surface that re-themes in any
  theme); filled buttons use `bg-primary`; mint is `--highlight`.
- Light is the faithful mode. The original has a light/dark switch we couldn't capture; the
  dark sibling inverts paper and ink and keeps the mint.
- The header's theme switch toggles `.dark` on `<html>`; it's optional (`themeToggle`).

## Comparison round 1

Section heights at 1440 (ours / original): hero 1846 / 1845 (both window-sized, 205%), about
1912 / 1979, services 1683 / 1728, clients 1428 / 1426, testimonials 841 / 840, team 1289 /
1289, CTA 1377 / 1380 (both 153% of the window), footer 842 / 840. No horizontal overflow at
360/768/1024. Motion list matches: line reveals, odometer reels, headline rises (92–126px), the
client strip (−2100px), team parallax (90…314px, same values), CTA word rises, pinned footer row
(2 half-screens), sticky header, marquee loop.

Note: full-page section crops show scroll-revealed text and the fixed halftone blank below the
first screen (scroll-driven animations sit at their start state and fixed backgrounds paint
only in the first viewport in a full-page shot); the scroll frames show them correctly.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | matches (logo · time · mint Menu) | nav started at 752px, not on the middle line (time cell grew past 50%) | flip ✓, roll hover ✓ | yes: time cell = 50% − logo |
| hero | matches | first word sat ~40px too high in its tile | load rise ✓, headline rise ✓ | yes: smaller bottom padding |
| hero/all windows | halftone read as a flat light grey | same | — | yes: solid ink dots, denser offset grid |
| services | matches | middle heading line ("FRONT-RANK") overflowed the tile in Host Grotesk (wider than Suisse) | rise ✓ | yes: shorter word in the demo |
| about | matches; Host Grotesk rounder than Suisse | statement 31px ✓, offset tiles ✓ | odometer ✓ | — (font difference accepted) |
| clients | matches | matches; active row + colour panel follow the scroll | ✓ | — |
| testimonials | shorter than the original (our first quote is shorter: content) | matches | autoplay bar ✓ | — |
| team | matches (stacked cards) | matches | parallax ✓ | — |
| cta | matches | matches | rise ✓ | — |
| footer | matches | links 32px apart (original 37); arrow stroke too heavy | pinned row ✓ | yes: gap 20px; 1px absolute stroke |
