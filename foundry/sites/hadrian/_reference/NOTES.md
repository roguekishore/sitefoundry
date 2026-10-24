# Hadrian (hadrian.co): recreation notes

Recreated as **Kestrel Works** ("KESTREL"), a made-up maker of self-running machining plants.
Captured in advance (`precapture.json`, landing only; no other pages asked for).

## Design language

- **Palette.** One deep navy page (#002548) for everything, white ink, a single saturated
  gold (#f3a000) for eyebrows, the platform frame, the marquee and the one solid button, a
  pale sky blue (#70b8fd) only for the hero's chamfered frame, and a richer blue (#14406f)
  for the gradient behind media. Grey (white at ~55%) for secondary footer links.
- **Type.** Three cuts of one family: a neutral grotesk (Söhne) at 400 for headings and
  body, set tight (−0.02 to −0.03em, line height 1 on headings, 1.07 on body); its mono for
  every label, button, nav item and the clock strip, always uppercase; its wide cut (Breit)
  only for the wordmark, the marquee and the footer company name.
  Scale (390 → 1440): hero 30 → 72px; section heading 30 → 64px; card titles 30 → 36px;
  platform paragraph 18 → 30px; body 18 → 20px; eyebrows 14px mono; buttons 14–16px mono.
- **Rhythm.** Big quiet gaps: 140px above the platform frame, 144px top and bottom in the
  model band, 64px around the careers box. Content gutter 16px on phones, 60px at 1440;
  the hero frame alone runs wider (16 → 24px gutter).
- **Grid.** 1440 wide, 1320 content. Hero subtitle sits on column 8 of 12; platform text row
  splits 1:3; model cards three equal columns with 16px gaps.
- **Shapes.** Square everything (buttons, boxes, cells), 1px hairlines in white or gold. The
  one soft shape is the hero frame: rounded top corners and the bottom corners chamfered at
  ~45° (88px tall; 95px in at desktop, 25px on phones) like a machined part.
- **Depth.** None: no shadows. Layering comes from the hero staying pinned behind the page
  while the opaque sections slide over it, and a dark veil over the model band's video.

## Type

| Original | Kind | Open stand-in | Why |
|---|---|---|---|
| Söhne (Klim) 400 | neo-grotesk, normal width, medium-high x-height | **Hanken Grotesk** (variable) | same neutral Akzidenz-like build, a real 400, already this repo's Söhne stand-in (stripe); a touch wider |
| Söhne Mono 400 | grotesk-styled mono, no slabs on caps | **DM Mono** 400/500 | grotesk mono without IBM Plex's slab serifs; similar narrow-ish advance |
| Söhne Breit (wide) | wide grotesk, heavy | **Encode Sans Expanded** 600/700 | a genuinely wide grotesk with no font-stretch needed, so it re-themes cleanly |

Tokens: `font-sans` = Hanken (headings and body), `font-mono` = DM Mono, `font-display` =
Encode Sans Expanded (wordmark, marquee, footer company name only).

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | hadrian-header | 76 / 100px, fixed | wordmark left, MENU box right | wordmark, centred clock strip (8 bordered mono cells), MENU box | – | hides upward after ~half a screen of scroll (0.2s ease-in-out), back on scroll up; MENU opens a panel |
| 2 | hero | hadrian-hero | **100svh** (window), pinned behind the page | 2-line heading, subtitle under it, chamfered frame fills the rest (42px left below), two stacked outline buttons in it | heading left, subtitle on col 8 at heading top, frame full width (24px gutter), two side-by-side outline buttons near its foot | hero video 356×467 / 1390×484, cover | words fade in on load (500ms each, staggered), subtitle fades in (300ms); while scrolling the words fade out and sink (15px / 36px) |
| 3 | platform | hadrian-platform | content (~805 / ~920px) | gold box: video 16:9, eyebrow row with gold rule, paragraph 18px | gold box: video 1318×480, row split 1:3, gold eyebrow left (vertical gold rule), 30px paragraph right | video 356×200 / 1318×480 | box contents hidden in the full-page capture → a fade/rise on entering view (inferred) |
| 4 | model | hadrian-model | content (839 ≈ one phone screen / 692px) | eyebrow, heading, three stacked cards (title, white rule, body) | eyebrow, 64px heading, three cards in a row | full-bleed video under a 60% veil | – |
| 5 | careers | hadrian-careers | content (543 / 591px) | white box: gold marquee band, heading 2 lines, body, gold button; image behind the copy | white box: marquee band, copy left, image on the right half fading in from the left | image 356×338 / 659×382 | marquee loops leftward, edges fade |
| 6 | footer | hadrian-footer | content (386 / 248px) | everything centred and stacked | two rows: wordmark / mono nav; company name / grey links + flag + country | – | links white → gold on hover (150ms) |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scrubbed by scroll direction | translateY 0 → −100% past ~47% of a screen, back on scroll up | 0.2s ease-in-out | small `useEffect` scroll listener toggling a class; `hydrate: load` |
| header MENU | click | panel with links | – | React state |
| header / footer links | hover | white → gold | 150ms cubic-bezier(.4,0,.2,1) | `transition-colors hover:text-primary` |
| hero words | load | opacity 0 → 1 per word, staggered | 500ms each, ~80ms apart | CSS `@keyframes`, fill both, per-word delay |
| hero subtitle | load | opacity 0 → 1 | 300ms after the words | CSS `@keyframes` |
| hero words | scrubbed with scroll | opacity 1 → 0, translateY 0 → 15px (390) / 36px (1440) | scroll 47svh → 97svh (390) / 147svh (1440) | CSS `animation-timeline: scroll(root)` with ranges set per breakpoint |
| hero | pinned | hero stays fixed behind the page for its whole length | – | `position: sticky; top: 0` on the hero; later blocks are `relative bg-background` and slide over |
| hero buttons | hover | faint white wash | 150ms | `hover:bg-foreground/5` |
| platform box | entering view (inferred) | opacity 0 → 1, rise 32px | entry 0% → entry 60% | CSS `view()` |
| careers marquee | loop | translateX 0 → −50% | ~28s linear infinite | CSS `@keyframes` |
| careers button | hover | gold dims slightly | 150ms | `hover:bg-primary/85` |
| page | smooth scrolling | Lenis seen | – | `hadrian-smooth-scroll` component (Lenis), `hydrate: load` |

The capture logged the marquee as "scrubbed" (−336px over 489px of scroll); the frames 20px
apart show a 56px shift, far more than the scroll moved, so it is a time loop (possibly sped
by scroll velocity). Built as a plain CSS loop.

## Media slots → placeholders

- hero video → `hadrian-placeholder` rich-blue → navy diagonal gradient, clipped by the chamfered frame
- platform video (2.75:1 desktop, 16:9 phones) → same gradient, inside the gold box
- model band video (full bleed) → muted surface under the veil
- careers image (right half / whole box on phones) → gradient that fades out to the left

## Decisions

- **Hero pinned with `sticky`, not `fixed`.** The capture shows two `fixed inset-0` layers for
  the page's whole length and the hero gone (covered) one screen down. Sticky inside the page
  gives the same layering without taking it out of the flow; it needs the following blocks to
  be opaque (`relative bg-background`), which they are.
- **Hero scroll fade uses `scroll(root)`**, so it assumes the hero is the first thing on the
  page (it is, here and in the gallery).
- **Model band is a `.dark` scope** so its white text over the veil stays white in the light
  sibling.
- **Veil colour**: the original's `rgba(0,0,0,.6)` is not a token; built as `bg-background/60`
  (a navy veil). Over a placeholder the difference doesn't show.
- **Clock strip**: each cell takes an IANA time zone and ticks every 30s once hydrated; the
  static HTML shows the sample times.
- **Gutters**: `--page-gutter` 1rem on phones, 3.75rem from 1024px (theme media query); the
  hero frame uses its own 1rem / 1.5rem as the original does.

## Comparison round 1

Page height 3462 vs 3459 (1440), 3393 vs 3417 (390). Sections line up within a few px apart
from those below.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | wordmark 147px wide vs 130 | 194 vs 175, a touch heavy | hides at 814/868px vs 396/423 (threshold 0.47 window missed the first half-screen sample) | yes: smaller wordmark, semibold, hides past 0.4 window |
| hero | – | Hanken's word spaces wider than Söhne's; subtitle wrapped to 2 lines (copy longer) | words start fading at 814/868 vs 396/423; subtitle (desktop) half-gone at 420 vs gone | yes: −0.035em tracking, −0.06em word spacing; shorter subtitle; fade from 25svh, subtitle 10–40svh |
| hero | pinned 5 half-screens vs 7–8 | same | sticky ends with `main`, the original's fixed layer lasts to the footer; looks the same (all later sections are opaque) | no (no visible difference) |
| platform | 815 vs 805 tall | 1028 vs 1028 | reveal 0→1, 32px, 394–814 | – |
| model | 844 vs 839 | 661 vs 692: card copy one line shorter each | – | yes: card copy lengthened to the original's 3/3/4 lines |
| careers | 485 vs 543: 48px padding vs 64; heading is medium (500) on phones; body narrower (5 lines); button 40px tall; marquee caps ~10% narrower than Breit | 597 vs 591 | marquee loop ✓ | yes: py-16, medium heading on phones, narrower body, taller button, marquee 15px / 20px |
| footer | 405 vs 386; mono links are 16px on phones; wordmark too big/heavy | 277 vs 248: 13px too low, rows 13px too far apart | hover gold ✓ | yes: padding and gaps, 16px links, wordmark 2.25rem semibold |
