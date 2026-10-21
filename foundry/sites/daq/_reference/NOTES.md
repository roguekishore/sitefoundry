# daq: recreation notes

Original: https://daqconsulting.com/ (landing page only; precaptured, no other pages asked for).
Ours: **Vekta Advisory**, a fictional data-and-AI engineering consultancy. All copy is ours.

## Design language

- **Palette roles.** Pure black page (`#000`, panels `#050505` / white 2%), white ink at four
  strengths: 100% (headings, active), 72% (nav, body on panels), 58% (mono labels, body), 20–30%
  (ghost numbers, outlines). Hairlines are white 10% (cards, header rule), 5% (page frame lines
  and the backdrop grid), 20% (outlined buttons). The only "colour" is the dark blue-grey of
  the WebGL liquid behind the hero, manifesto and footer. One inverted element: the white
  "Start Project" button with black text, and the white arrow square of the footer CTA.
- **Type scale.** Display is Inter at extremes: weight 100 uppercase for the first line of a
  headline, 700 for the payoff word (`WE ARCHITECT` / `INTELLIGENCE.`), tracking −0.025em,
  line-height ≈ 0.8 at the hero (8vw, 115px at 1440, 48px floor), 1.04 for 4.8vw section
  headings (69px). Sentence-case h2s at 5.6vw (80px) weight 400. Body 13–15px. Every label is
  a monospace at 9–10px, uppercase, tracking 0.2–0.3em, bold for active.
- **Spacing rhythm.** 32px gutter at desktop (16px at 390), sections padded ~100px top. The
  page spans the full window (no max width): text starts at x=32 at 1440.
- **Grid.** A 12-column hairline grid on the fixed backdrop, and vertical frame lines at the
  gutters through the manifesto. Neural core: 300px step list + panel filling the rest.
  Footer: four columns 3/2/4/3 with vertical dividers.
- **Shapes and depth.** Square everywhere (radius 0; the only `9999px` radii are tiny dots).
  No shadows: depth is the backdrop showing through transparent sections, a bottom vignette
  into black, and translucent black (55%) behind the scrolled header.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Inter (100–900) | neo-grotesk sans | normal / tall | **Inter Variable** | the original uses it; the 100 and 700 extremes are the look |
| `ui-monospace` (SF Mono on Mac) | mono, grotesk-like | normal / tall | **Source Code Pro Variable** | neutral, normal-width mono with SF Mono's tall x-height and a bold for active labels; already installed |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | fixed liquid backdrop | `daq-backdrop` | 100svh, fixed | fills window | fills window | WebGL canvas → placeholder | none of ours (the canvas loops) |
| 1 | header | `daq-header` | 96px → 66px scrolled, fixed | logo + two-line burger | logo · centred nav (Services ▾, 3 links) · sound toggle · white CTA | — | shrinks + gains black 55% bg and rule on scroll; logo letters rise on load |
| 2 | hero | `daq-hero` | 100svh (window) | headline 48px, mono intro, outlined button, left | headline 8vw two lines, mono intro, button; left half | (backdrop) | load: lines rise 38px, mono intro slides from −100px; scrubbed: content fades 1→0 and drops 128px while the hero leaves |
| 3 | manifesto | `daq-manifesto` | 250svh (window), sticky inner | label + rule; 27px uppercase paragraph | label+rule left, 4 keyword tags right; 69px paragraph | (backdrop) | pinned; keywords fill from outline to solid one after another and tags light 25%→100%; at the end the block fades to 15% and rises 40px |
| 4 | neural core | `daq-core` | 230svh (window), sticky inner | eyebrow, h2, steps, panel stacked | steps left (300px), panel right | architecture diagram → placeholder inside the panel | pinned; the active step advances with scroll (description opens, left bar moves, status label + dashes follow) |
| 5 | capabilities | `daq-capabilities` | 430svh at lg (pinned track); content at 390 | heading, five stacked cards | heading, horizontal track of 50vw cards, progress tabs | — | lg: pinned, track scrubs left 0→−(track−window); progress line fills; active tab lights; card titles fill left→right (clip). 390: titles fill as each card enters |
| 6 | footer | `daq-footer` | 100svh at lg (window); content at 390 | CTA stacked, 2+1+1 link columns | CTA headline left / text + CTA box right; four columns | (backdrop) | hovers only |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scrolled past 20px | height 96→66, side padding 9%→gutter, bg transparent→black/55 + blur, rule appears | 0.5s cubic-bezier(.4,0,.2,1) | `useEffect` scroll listener toggles `data-scrolled`; Tailwind transitions (hydrate load) |
| header | load | wordmark letters rise 10px, fade in | ~0.6s stagger | CSS keyframes, fill both |
| header | hover | nav links 72%→100% | 0.3s | `transition-colors` |
| hero | load | each headline line rises 38px; intro slides in from −100px with fade; button fades | 1.1s cubic-bezier(.19,1,.22,1) staggered | CSS keyframes, fill both |
| hero | scrubbed | content opacity 1→0, translateY 0→128px | over the hero's exit | CSS `view-timeline` on the hero, `exit 0% exit 100%` |
| hero | hover | button border 20%→60%, underline scaleX 0→1 | 0.5s | Tailwind `group-hover` |
| manifesto | pinned | sticky inner for 150vh | — | `position: sticky` in a 250svh section |
| manifesto | scrubbed | keywords outline→solid one after another; tags 25%→100% | spread over the pin | CSS named view timeline, per-word `animation-range` slices |
| manifesto | scrubbed | whole block opacity 1→0.15, rises 40px | end of pin | same timeline, `contain 85% exit 45%` |
| core | pinned + scrubbed | active step 1→4: description opens, others 58%, bar segment moves, status label and dash change | per quarter of the pin | `motion/react` `useScroll` → active index (hydrate visible) |
| core | hover | — (stage hover lives inside the diagram) | — | not rebuilt (media) |
| capabilities | pinned + scrubbed (lg) | track translateX 0→−(width−window); progress line scaleX 0→1; active tab white | whole pin | CSS named view timeline, `contain 0% contain 100%`, `translateX(calc(-100% + 100vw))` |
| capabilities | scrubbed | card title fill clip-path inset(0 100% 0 0)→inset(0) | lg: per card slice; 390: as card enters | CSS: lg per-card range on the section timeline; 390 `view()` on the card |
| capabilities | hover | card border 10%→40%, bg 2%→4%, explore arrow nudges | 0.7s | Tailwind transitions |
| footer | hover | links 58%→100%, arrow nudges; CTA box border; TOP | 0.15–0.3s | Tailwind transitions |
| page | wheel | Lenis smooth scroll | — | `daq-smooth-scroll` (lenis, hydrate load) |

## Media slots

- **Liquid WebGL backdrop** (fixed, full window): `daq-backdrop` `media` prop; empty it is a
  `bg-muted` surface with a soft `glow` radial wash and the hairline grid + bottom vignette
  (the grid and vignette are layout, built for real).
- **Architecture diagram** inside the neural-core panel: `diagram` prop; empty it is a
  `bg-muted/40` box with a dashed inner frame, same proportions (≈ 16:7 at lg, 4:3 at 390).

## Decisions

- The backdrop is its own block (fixed, behind everything) because the original shows *one*
  fixed canvas through three transparent sections. Hero, manifesto and footer are
  transparent by default; each takes `className` so a page can give them a background when no
  backdrop is used. Their demos render the backdrop so they look right alone.
- The neural core uses JS (`motion`) because its active step changes layout (description
  opens); everything else that scrolls is CSS scroll-driven, so it works without hydration.
- The sound toggle is kept as UI chrome (visual on/off state only; we have no audio).
- Light mode is a sibling: warm paper white with black ink, same hairline logic.

## Round 1 (ours vs original, dark)

Heights match the original rule for rule: hero 100svh, manifesto 250svh, core 230svh,
capabilities 430svh at 1440 (content at 390), footer at 1440 = window. Motion list matches
row for row (header fixed, hero exit fade 0→128px, manifesto pin + tags 0.25→1 + leave
1→0.15/−40px, core step descriptions, capabilities pin + track translateX + clip fills).
No horizontal overflow at 360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| core | closed step descriptions kept their height (grid 0fr needs min-h-0), so steps 3–4 floated 80px apart | same | — | yes |
| core | diagram slot 4:3, far taller than the original's ≈16:9 | — | — | yes |
| capabilities | — | track travelled −2447px vs −2973px (the original slides on until the last card's right edge is ~64% across) | translateX distance | yes: `calc(-100% + 64vw)` |
| footer | link columns split 50/50; original's first column is wider (≈58%) | link rows 44px apart vs 38px; small print 40px vs 29px, so the columns started 47px higher | — | yes |
| backdrop | grid lines every 30px (12 columns on a phone); the original reads as a few wide columns | — | — | yes: 4 columns below 1024px |
| manifesto | — | wraps differently (our own copy) | — | n/a (content) |
| capabilities | titles in the full-page crop are unfilled (they fill on entry; the crop is taken unscrolled) | — | original fills once with a 1.1s timed clip; ours is scrubbed over 300px of entry | kept (scroll-driven, no JS) |

## Round 2

Round-1 fixes confirmed: steps collapse to a 31px rhythm with only the active one open (390 and
1440 match the original's scroll-04/05 frames), the phone diagram is 16:9, the track now
travels −2966px (original −2973px), footer columns line up with the original's.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| footer | — | at a 675px window ours ran past the window (CTA band padded by --section-y), the original squeezes to fit (680px) | — | yes: the band pads 48px at desktop and grows with flex-1 |
| header | — | sound toggle and CTA are ours (labels differ), placement matches | hover 72%→100% / 0.3s matches | n/a |
| hero | intro wraps as one paragraph (the original breaks after its first sentence) | — | load rise, slide-in and exit fade (0→128px over 420–1320px vs 432–1338px) match | n/a (content) |
| backdrop | placeholder is a flat blue-grey with a glow wash where the original shows liquid WebGL | same | the canvas's own motion is media | placeholder by design |

Re-theme check: `daq-capabilities` and `daq-core` under `sample-ember` (light) read correctly:
cream cards with warm hairlines, the serif display font takes the headings, the scroll fill,
tab light and step rail all follow the tokens.
