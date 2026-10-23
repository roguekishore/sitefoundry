# zetta-joule — reference notes

Original: a small-modular-reactor company landing page (Webflow, GSAP ScrollTrigger + Lenis, three.js scene,
Swiper/Splide carousels). Our fictional stand-in: **Hearthgrid**, high-temperature modular reactors.
Items are named `zetta-joule-*` (the folder slug); the visible brand is Hearthgrid.

## Design language

- **Palette roles.** Three moods on one page: a *white / pale-blue* "day" (`#fff`, `#f1f5f8`) with navy copy
  (`#3d5e86`); an *instrument* dark (`#1b1b1b` bands, warm grey `#524f4b` cards, pure black footer and
  callout card); and a *sky gradient* in the hero (`#628ad1` → peach `#fff0e2`). One accent: pale sky blue
  `#d3e7ff` (CTA, button icon squares, dots, CTA card); the stronger `#628ad1` is only for chart bars,
  tab underline and hero sky.
- **Type scale (1440 / 390).** Hero 200px / 64px, weight 250, line-height 1, tracking −0.03em. Section headings
  48px / 24px (h3), weight 250. Statements 32px / 24px, lh 1.2. Lead paragraphs 20px lh 1.3. Body 16px.
  UI and captions 14px weight 500, −0.01em. Tiny caps labels 12px uppercase.
- **Spacing rhythm.** 40px gutters at 1440 (16px at 390), 12-column grid with 16px gaps; labels sit in
  columns 1–4, statements in 5–12, "split" headings left (1–6) with body in 9–12. Sections start ~128px
  from their top edge (80px at 390).
- **Shapes.** Everything is 4px radius (images, buttons, cards); the video frame 6px. Square, quiet, instrument-like.
- **Depth.** Flat. No shadows. Hairlines at white 20% on dark, `#cfcdc9` on light. Depth comes from big
  photography, a dark callout box over an image, and a footer that slides up from under the page.

## Type

| Original | Class | Use | Our font |
|---|---|---|---|
| **Geist** (variable, weights 200–400; headings at 250) | geometric-leaning neo-grotesk, normal width, large x-height, thin cuts very even | hero, h2/h3, statements, lead paragraphs, footer heading | **Geist Variable** (`@fontsource-variable/geist`): the original's own face, open licence |
| **Inter** (300/400/500) | neo-grotesk, normal width, large x-height | body 16px, buttons, nav, captions, chart labels | **Inter Variable** (`@fontsource-variable/inter`): the original's own face |
| (no mono used) | | caps labels are Inter 12px uppercase | Geist Mono not needed; `--typeface-mono` = system mono |

## Section map

Heights measured at 1440 / 390 (window 900 / 844). None is flagged "sized by the window" by the capture;
the hero is 900 at 1440 and 757 at 390, so it gets fixed rem heights (not `svh`).

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header | `zetta-joule-header` | overlays hero | wordmark + white rounded hamburger; panel menu | wordmark left, 7 centred links (text-roll on hover), light-blue CTA right | – | hides on scroll down, returns on scroll up with a dark bar |
| 1 | hero | `zetta-joule-hero` | 757 / 900 (fixed) | 64px two-line heading, subtitle, reactor image cropped at the bottom | 200px staggered words (“Powering / the [image] World”), reactor in front of the text, subtitle bottom-left with a left hairline | reactor render 864×1536 (centred, bleeds off the bottom) | image drifts down 0→92px while scrolling out |
| 2 | mission | `zetta-joule-mission` | 1086 / 2131 | label, 24px statement, button, 20px paragraph, then full-bleed video (390×488) with overlay hairline + definition | label col 1–4, statement 5–12, button; left paragraph + 901×498 video; the video then expands (pinned) to full-bleed with definition text | video 901×498 | label letters stagger in; statement lines rise; **pinned video expands to full window**; definition fades up |
| 3 | technology | `zetta-joule-technology` | 1164 / 1374 | heading, body, full-width button, image 390×488, black text block below | heading left, body 9–12, image 1360×890 with a black callout box inside bottom-left | aerial photo | statement rise; image parallax −64→64px |
| 4 | reactor | `zetta-joule-reactor` | 1389 / 2340 | label, statement, tag, spec list, four feature blocks stacked, reactor image last | label+statement, then a pinned stage: tag top-left, specs top-right, reactor centred, four features around it fade in | three.js reactor canvas 1360×765 | label chars; statement lines; **pinned stage**; features rise 20px, staggered |
| 5 | heat | `zetta-joule-heat` | 957 / 934 | heading, body, tab select (“Cities & Infrastructure ⌄”), chart scrolls sideways with a slider | heading left + body right, 4 underlined tabs, dotted-grid bar chart 0–1200 °C | – (chart is built) | tab colour hover 0.2s; chart swaps per tab |
| 6 | sectors | `zetta-joule-sectors` | 1008 / 1197 | label + statement, one card per view (image over grey text card), prev/next squares | label + statement, track of [image 449 + text card 562] slides bleeding right, floating next arrow | 8 photos 449×642 (390: 326×229) | cards rise 32px staggered |
| 7 | service | `zetta-joule-service` | part of 1677 / 2572 | 24px heading, illustration, two paragraphs, button | heading top-left, paragraphs + button bottom-left, 1000px illustration at right | isometric illustration 1590×1049 | heading/paragraph lines rise |
| 8 | team | `zetta-joule-team` | rest of 7 | label, statement, one portrait per view + arrows | label, statement, grid 4 up: 6 portraits (328×458) + light-blue CTA card (2 columns) | 6 portraits | items rise 32px |
| 9 | workforce | `zetta-joule-workforce` | 722 / 1020 | heading, body, button, strip of photos bleeding both sides | heading left, body right, photo strip alternating 332×464 / 680×464 | 10 photos | strip drifts left on scroll (≈−14rem) |
| 10 | cta | `zetta-joule-cta` | part of 1523 / 1612 | mark, 20px text, button, two photos side by side | mark top-left, text and button on the left, two portrait photos right; bottom corners rounded | 2 photos 443×595, 328×595 | photos parallax −30→28px |
| 11 | footer | `zetta-joule-footer` | rest | heading, two link columns, socials, dotted band, legal, giant wordmark | same on a wider grid | – | slides up 105px→0 as it enters |

## Motion inventory

| Section | Trigger | What changes | Timing / easing | Build |
|---|---|---|---|---|
| header | scroll direction | translateY 0→−100% (hidden) on scroll down, back on scroll up; bar background fades in | 0.3s ease (`top 0.3s`) | small scroll listener in the header (`hydrate: load`) |
| header | hover | link text rolls: duplicate line slides up | 0.3s cubic-bezier(.165,.84,.44,1) | two stacked spans + translate on `group-hover` |
| hero | scrubbed | reactor image translateY −3→92px | linear, hero exit | CSS `view()` timeline on the image wrapper |
| mission | entering view | label letters opacity 0→1, one by one | linear scrub, offset per char | `zetta-joule-statement` chars with `animation-range` offset by `--i` |
| mission, technology, reactor, sectors, team, workforce, service | scrubbed / entering | statement + body lines opacity 0→1, rise 30–40px, staggered by line | linear scrub, `entry 0%`→`cover 35%` | `zetta-joule-reveal` “lines” (rise + top-to-bottom mask sweep stands in for per-line stagger) |
| all buttons | entering view | opacity 0→1, rise 16px | linear scrub | `zetta-joule-reveal` “rise” |
| mission | pinned + scrubbed | video translate (−105,230)→0, then grows to full window; definition fades up 25–30px | scrub over the pinned range | sticky stage in a 260svh wrapper, named view timeline, `clip-path: inset()` keyframes (desktop only) |
| technology | scrubbed | image translateY −64→64px | linear | CSS `view()` on the frame, placeholder 120% tall |
| reactor | pinned + scrubbed | stage pinned 1 screen+; four feature blocks opacity 0→1, rise 20px | scrub | sticky stage, named view timeline, `cover` ranges staggered |
| heat | hover | tab colour 182→229 grey | 0.2s | `transition-colors` |
| sectors | scrubbed | cards opacity 0→1, rise 32px | linear | `zetta-joule-reveal` rise (on the track wrapper: the track itself scrolls, so a timeline on its children would not run) |
| sectors | click | next/prev slide | scroll-snap, smooth | `scrollBy` (`hydrate: visible`) |
| team | scrubbed | portraits opacity 0→1, rise 32px | linear | reveal on the list wrapper |
| workforce | scrubbed | photo strip translateX 0→−14rem | linear | CSS `view()` on the strip |
| cta | scrubbed | photos translateY −30→28px | linear | CSS `view()` on each frame, placeholder 112% tall |
| footer | scrubbed | translateY 105→0 | linear | CSS `view()`, `entry` range |
| (skipped) | | Lenis smooth scrolling, three.js reactor explode scrub, hero letter-by-letter on load, sector image sideways parallax | | Lenis: not a block's job; 3D belongs to the placeholder; sideways parallax would need a view timeline inside a horizontal scroller, which CSS can't do |

## Media slots → placeholders

Hero reactor render; mission video; technology aerial photo; reactor 3D canvas; 8 sector photos; service
illustration; 6 portraits; 10 workforce photos; 2 CTA photos. Every one is a `media`/`image` prop that takes a
real element; empty, it shows `zetta-joule-placeholder` (token surface, the original's size, aspect and 4px radius).

## Decisions

- Brand: **Hearthgrid** (fictional), wordmark in Geist with a lucide flame, no stripes-in-a-circle mark.
- Forced-dark bands (heat, sectors, CTA, footer, mission video, hero text) add the `dark` class to their root,
  so they stay dark in the light theme (like the original). Under the dark mode of the page everything is dark.
- `chart-5` holds the peach end of the hero gradient; `glow` is `#628ad1`; `highlight` is the navy copy colour
  in light mode (a pale blue in dark); `primary` is the pale-blue CTA with black text, `popover` is the pure black
  (footer, callout card) in the dark scope.
- Per-line GSAP reveals can't be split by CSS: whole paragraphs use a rise plus a top-to-bottom mask sweep.
- Mobile reorders: reactor image last, chart gets a slider, team/sectors turn into snap carousels.

## Comparison round 1

Method note: the capture script's section crops are taken at scroll 0, where CSS scroll-driven reveals are
still in their "not yet entered" state (the original's GSAP reveals stay revealed once played). So section
pairs were compared with viewport screenshots taken while scrolling through our page (every 700–800px)
against `original-*-section-NN` and `original-*-scroll-NN`.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | headline "every Industry" ran off the right edge at 64px; subtitle wrapped to 4 lines (orig 3) | second-line words overflowed the right edge (Industry); subtitle 4 lines at 18rem | drift 0→92px matches | yes: words → "Heating / all / Industry", subtitle shortened, max-width 21rem |
| mission | label, statement, button, paragraph and video all in place; section 1064 vs 1086 | statement ran 2 lines wide (orig 3 lines in ~770px); definition text started at x=992 (orig 845); section 2770px with a 260svh pin (orig 2131) | label chars, lines rise, clip expansion and overlay all present | yes: statement `max-w-[49rem]`, overlay `max-w-[35rem]`, pin 210svh, ranges retimed (2229px) |
| technology | 1110 vs 1164 (our body is 5 lines vs 6, copy-length only) | placeholder wash nearly invisible on the pale panel | drift ±64px matches | yes: `wash` placeholder now glow/45 → highlight/20 |
| reactor | order tag, specs, 4 notes, model matches; 1403 vs 1389 | pin 300svh made the section 3300px (orig 2340); notes arrive at the right time | pinned + rise + staggered notes present | yes: pin 200svh, ranges 34–46 (model), 48–68 (notes) |
| heat | tabs → select, sideways chart, slider all present; 976 vs 957 | near-identical (937 vs 934), bars, ticks, dashed boxes line up with the original to within 2px | tab hover 0.2s | – |
| sectors | card, arrows, peeking second card match; 1040 vs 1008 | 1197 = 1197; arrow position and card widths match | rise was 16px, orig 32px | yes: distance 32 |
| service | heading, illustration, paragraphs, button; 769 vs 722 | pinned, next section slides over it (orig pins the same way) | lines reveal present | – |
| team | slider with arrows, CTA card last slide | grid 4-up, CTA card double width; row pitch 604 vs 591 | rise 32px present | – |
| workforce | strip bleeds both sides | 960 vs 1020 (our paragraph is 4 lines, orig 6: copy length) | drift −16rem (orig ≈ −14rem) | – |
| cta | mark, text, button, two photos side by side | identical grid (443/328 wide, 595 tall, 915 tall section) | parallax −30→28px | – |
| footer | stack matches phone capture | 954 vs 697: too tall; wordmark huge (icon 160px) | slide-up 105px present | yes: tighter spacing, wordmark `min(8vw,7rem)` |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | fold now pairs with the original: 64px two-line headline from y≈100, subtitle under it, render placeholder starts at y≈325 (orig 335) | headline, indented middle word and right-aligned tail now sit inside the page; subtitle 2 lines (orig 3, copy length) | – | yes (round 1 copy change) |
| mission | statement 4 lines (orig 5), paragraph, button and full-bleed video with hairline at 36% match | video grows from the 901px frame to the full window; definition now starts at x=848 (orig 845); the left paragraph showed through the translucent placeholder once the video had grown | clip expansion + overlay fade confirmed in the Motion list (clip-path scrub, overlay rise 28px) | yes: the `deep` placeholder now has an opaque `bg-card` base |
| footer | unchanged | height now 14077px page total vs 14080 original; wordmark 112px | slide-up 105px confirmed | yes |
| re-theme check | – | `zetta-joule-heat` and `zetta-joule-reactor` opened in the gallery under `sample-ember`: both re-colour (orange bars, serif headings, green navy-role copy) and keep their layout | – | ok |
| overflow | fits at 360, 768, 1024 | | | – |

Stop condition: each pair now reads as the same design apart from copy and media placeholders; the Motion list
of our page has a matching row (reveal, scrubbed, pinned, hover) for every row of the inventory except the
skipped items listed above (hero letter-by-letter on load was never in the capture's list; three.js model;
horizontal sector-image parallax).
