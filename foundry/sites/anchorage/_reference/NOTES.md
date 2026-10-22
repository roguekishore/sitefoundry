# anchorage — study notes

Source: https://www.anchorage.com/ (captured in advance, 2026-10-21; landing page only, no
other pages asked for). Fictional stand-in: **Strata Reserve**, a regulated digital-asset
bank for institutions (wordmark "strata / reserve", lucide `Layers` as its mark).

## Design language

- **Palette roles.** Pure black page (#000) with near-white text; a cool cobalt blue
  (#5580f6) as the one brand colour (announcement bar, "Get in touch" button, stat labels,
  footer social icons, hover colour of links); a lilac (#ac96ff) used very sparingly (the
  hairline rings around the accordion numbers, the far end of the CTA gradient). Panels are
  a charcoal-to-black vertical gradient (#313235 → #000). The contact section sits on a
  slightly lifted near-black (#141415) with form fields one step lighter (white at 8%).
  Secondary text is a cool grey (#a2a4a9); hairlines #4b4b4d. Large soft blue glows bloom
  out of the black at the page sides (right behind the platform cards, left behind the
  stats).
- **Type scale (1440 / 390).** Hero display 96 / 48 px, light-regular weight with a
  metallic left-to-right silver gradient. Section heads 40 / 32 px medium; the regulation
  card's head is bigger (51 px). Accordion titles 30 / 28 px; stat figures huge and light
  (~112 / 56 px) with a white-to-blue vertical gradient. Body is Inter 16 px/1.6 medium
  (500 is the site's default weight); subtitles 20–27 px Inter medium. Eyebrow 12 px bold
  caps. Footer links are tiny at desktop (11.2 px) and 16 px on phones.
- **Spacing rhythm.** Generous: ~120–160 px between sections at desktop, 64–80 px on
  phones. Content column is narrow (940 px) and centred; header, form and footer use a
  wider 1110–1140 px.
- **Layout grid.** Centred single column; a two-up card bento + one full-width card;
  three stats in a row (also three across at 390, squeezed); accordion rows on a 2-column
  grid (number + title | subtitle + toggle).
- **Shapes.** 8 px radius on cards and the CTA band, 4 px on buttons, 2–4 px on fields,
  fully round on the checklist pills and the number rings.
- **Depth.** No drop shadows; depth comes from the panel gradients and the blue glows.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Esrebondgrotesque (ES Rebond Grotesque), headings + display | geometric-leaning grotesque | normal width, large x-height, round bowls, straight-legged `y` | **Hanken Grotesk Variable** | a grotesque with geometric round bowls, normal width and a large x-height; light weights read like the hero's thin display; already in the workspace |
| Inter, body, labels, buttons | neo-grotesk | normal, large x-height | **Inter Variable** | the original uses Inter itself |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement bar | anchorage-announcement | content (71 / 60 px) | centred text wraps to two lines | one centred line: label, a small acquired-company wordmark, link | — | link hover |
| 2 | header | anchorage-header | content (overlay, sticky) | floating rounded box inset 10 px, 24 px from top; logo + hamburger | full-width black bar with bottom hairline, then on scroll it shrinks into a floating 1140 px rounded box 24 px down | — | scrubbed with scroll (bar → floating box); link hover |
| 3 | hero | anchorage-hero | content; its art is window-sized (1440×926 canvas, 390×533 at phones) | eyebrow, 2-line title, subtitle; no product cards | eyebrow, 1-line metallic title, subtitle, two staggered dashboard cards | background art slot; two card slots (340×418, 348×428) | — (art moves inside the canvas: placeholder) |
| 4 | investors | anchorage-logos | content | heading, marquee (2 big names visible) | heading, marquee of 6 wordmarks | — | loop: marquee leftward |
| 5 | platform | anchorage-platform | content | heading, paragraph, 3 stacked cards | heading, paragraph, 2-up cards + one wide card | one slot in each of the two upper cards | regulation figure counts up; checklist pills stagger in |
| 6 | stats | anchorage-stats | content, ~555 px between hairlines | heading 2 lines, 3 squeezed figures in a row | heading, three figures across | — | figures count up and fade in, staggered |
| 7 | products accordion | anchorage-accordion | content | number ring left, title + subtitle stacked, toggle top right; open list full width under | number ring, title, subtitle, toggle in one row; open list in the right column | — | expand/collapse (max-height 0.4s ease-in-out), plus ↔ minus |
| 8 | clients | anchorage-logos | content | as 4 | as 4 | — | loop: marquee leftward |
| 9 | CTA | anchorage-cta | content (230 / 318 px) | full-width band, 2-line title | 940 px band, one line | — | button hover |
| 10 | contact form | anchorage-contact | content (~1009 / 1698 px) | one column | 3-column field grid, textareas span 2, checkbox list in the third | — | field / button hover |
| 11 | footer | anchorage-footer | content (~1469 / 3380 px) | everything stacked | mark + five link columns, contact rows + socials, legal text, bottom bar | — | link hover → blue |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header (≥1024) | scrubbed with scroll | full-width bar → floating box: max-width 100% → 1140 px, drops 24 px, radius 0 → 8 px, side borders appear | over the first ~160 px of scroll | CSS `animation-timeline: scroll(root)`, `animation-range: 0 160px`, in `@supports` |
| logos (×2) | loop | track slides left continuously | ~45 s per loop, linear | CSS `@keyframes` marquee in the block's css (list rendered twice) |
| platform: regulation figure | entering view | number counts up from ~25% to its value | ~1.6 s, ease-out | `anchorage-count` component (motion `useInView` + `animate`), `hydrate: visible` |
| platform: checklist pills | entering view | each pill fades in and slides 24 px from the right, staggered | entry 10% → cover 30%, +8% per pill | CSS `view()` reveal |
| stats | entering view | figures count up (4+ → 5+ seen mid-way); the third is still hidden in a scroll frame → staggered fade/rise | ~1.6 s ease-out; stagger | `anchorage-count` + CSS `view()` fade/rise 24 px with per-item range offset |
| accordion | click | panel opens (max-height 0.4 s ease-in-out), plus → minus | 0.4 s ease-in-out | `grid-template-rows: 0fr → 1fr` transition, React state, `hydrate: visible` |
| hovers | hover | nav link: bg white 10%; blue button → darker blue; footer links → blue; text links → opacity 0.5; outline "Send" → lilac fill; | all 0.3s ease | Tailwind `transition-* duration-300 ease-[ease]` |

Not rebuilt: the hero canvas (an animated glowing arc, WebGL) and the counting numbers
inside the dashboard mock-ups: both are media and become placeholders.

## Media slots

| slot | size / frame | placeholder |
|---|---|---|
| hero art | full width; window height at ≥1024, 390×533 on phones; sits behind header and hero text | soft radial `glow` light at the top fading into the page |
| hero card left | 340×418, radius 12, 1px border, lilac→blue edge | `bg-card` panel, border `highlight/50`, rounded-xl |
| hero card right | 348×428, offset 68 px higher | same |
| platform card 1 media | ~365×330, inset from the card's left, bordered | `bg-muted/40` panel with border, rounded-lg |
| platform card 2 media | ~385×360, full card width minus padding | same |

## Decisions

- The regulation card's money figure and its three check pills are kept as real UI
  (content through props): they are small badge-like chrome with their own motion. The two
  dashboard mock-ups (hero cards, platform cards) are product screenshots → placeholders.
- The accordion: the captures show different rows open at different moments (01 in one,
  03 in another), consistent with click-to-open where several may be open. Ours: each row
  toggles on click; `defaultOpen` lists which start open (demo: the first).
- Customer/investor logos become fictional names typeset in four styles (plain, spaced
  caps, heavy, stacked), so the row keeps the original's mixed-wordmark rhythm.
- Footer social icons: lucide has no brand icons; the demo passes neutral lucide icons.
- The blue side glows are decoration (not media) and are built as blurred `glow`/`primary`
  radial lights inside the platform and stats blocks.
- Static HTML shows every number at its final value; the count-up only runs once
  JavaScript has hydrated and the figure enters the view.

## Round 1 (ours vs original)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| announcement | wraps to 3 lines (108 px vs 71): copy too long | ok | link hover ok | yes: shorter copy |
| header | box, hamburger match | nav links set in Inter; original sets them (and the button) in the bold display face | bar → floating box on scroll ✓ (scroll-linked) | yes: font-display bold |
| hero | matches (no panels, art glow, 2-line title) | panels match size/offset; art placeholder is a soft glow, not the arc (media) | — | n/a |
| logos | ok; slides ✓ | ok; slides ✓ | loop ✓ | — |
| platform | ok | cards 16 px narrower each side (940 px column included the gutter); intro wrapped to 3 lines | count-up ✓, pills slide in from right staggered ✓ | yes: 60.75rem column, shorter intro |
| all section heads | Hanken 500 reads lighter than Rebond 500 | same | — | yes: 550 |
| glows | the stats glow painted over the accordion heading (a later, non-positioned section) | same | — | yes: platform/stats clip their own glow (overflow-clip) |
| stats | ok | ok | count-up ✓; staggered rise ✓ | — |
| accordion | ok | ok | toggle ✓ | — |
| CTA | ok | ok | — | — |
| contact | ok | areas list and message box sat ~15/30 px low (spanning item stretched the rows) | — | yes: rows auto/auto/1fr |
| footer | ok | columns 16 px left of the original; email values side by side instead of stacked; **overflows at 1024** (fixed rem columns) | hover ✓ | yes: fr columns in one grid, values stacked |

## Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| announcement | two lines, 83 px (original 71) | one line ✓ | — | close enough |
| header | ✓ | display-face bold links ✓; floats into the 1140 px box ✓ | scroll-linked ✓ | — |
| platform | ✓ | heading "One ledger. Every desk." wrapped to two lines (list of lines always broke) | count-up mid-way and pills arriving match the original's frame | yes: lines break only on phones |
| glows | clipping the blur left a hard edge at the stats section top | same | — | yes: radial gradients that fade out inside their own section; the right-hand glow is a little fainter than the original's |
| stats | ✓ three across, labels in cobalt | ✓ | count-up + staggered rise ✓ | — |
| accordion | ✓ (matches the 390 scroll frame almost line for line) | ✓ | toggle ✓ | — |
| CTA / contact / footer | ✓ | ✓; footer columns line up with the original's 311 px start | hovers ✓ | — |
| overflow | 360 ✓ | 768 ✓, 1024 ✓ | | |

Window-sized check: the original's capture marks no section "sized by the window" (only its
hero canvas fills the window at 1440); ours makes the hero art slot `h-svh` at ≥1024 to match.

Re-theme check: anchorage-platform and anchorage-accordion under `sample-ember` (light) read
correctly: serif heads, warm panels, ember icon tile, green ring on the numbers.

Left as is: the hero art (an animated glowing arc) and every product mock-up are
placeholders; Splide's marquee in the original is JS, ours is CSS at 45 s per lap.
