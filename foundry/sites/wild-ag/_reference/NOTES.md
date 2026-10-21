# wild-ag — notes

Original: https://wild-ag.ch/ (a Swiss property developer; Webflow + GSAP). Captured in advance
(precapture.json, landing page only, no other pages asked for). Our fictional company:
**Talgrund AG**, a property developer in the Swiss midlands. All copy is ours, in English.

## Design language

- **Palette:** warm paper-white page (#faf9f4) with a slightly pinker "light" surface
  (#f5f1ed) for whole bands (team, projects) and raised cards (partner tiles, the form card).
  Ink is a deep espresso (#2b221c) used sparingly (titles of values, list labels); body text is
  a warm grey (#6b6561). The brand is a two-stop **taupe → sand gradient** (brown #a48a7a to
  beige #cbbba0, at 15deg) used for: whole bands (hero text band, ticker band, process band),
  the info panel of every team/project card, section titles (as gradient text), the wordmark,
  the submit button. Hairlines and pill outlines are the brown at 25%.
- **Type:** two faces. Inter 500 for everything running (17px, 1.4, -0.01em), Inter 600 for
  titles (22px values, 30px card names), Inter 700 uppercase 13.5px for labels and buttons.
  Inria Serif *italic light* for section titles, uppercase, ending in a full stop
  ("PORTRAIT."), 51.5px at 1440 / 40px at 390, line-height 0.95. Headlines mix the two in
  one line: sans regular words and serif italic words, all caps (hero 60px / 46px, ticker
  126px / 98px).
- **Scale:** the original sizes everything in vw-relative ems (1.17vw at 1440, 4.36vw at 390),
  so it grows with the window. We use fixed rem steps at each breakpoint that land on the
  1440 and 390 values.
- **Layout grid:** a 1160px content column (140px margins at 1440), two equal columns of 541px
  with a 79px gap. Phones: 18px gutter, everything stacked. Two "staggered" two-column
  sections (portrait, competences) where one column starts with text and the other with an
  image, then they swap.
- **Shapes:** 16px radius on images and cards (images in cards: top corners only), pills
  (rounded-full) for buttons, inputs and list rows, and a **big 73px (55px on phones)
  bottom radius** on bands, which overlap the next section by that radius so it shows
  around their corners.
- **Depth:** flat. One very soft shadow exists in the CSS (rgba(43,34,28,.05) 0 6px 30px) but
  no visible card sits on it; nothing else is raised.
- **Rhythm:** sections pad ~120px top and bottom at 1440, ~72px on phones; 16px gaps between
  cards, 12px between list rows.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Inter (100–900) | neo-grotesk sans | normal / tall | **Inter Variable** (`@fontsource-variable/inter`) | the original uses Inter itself |
| Inria Serif 300/400 italic | transitional serif with soft, slightly bracketed serifs | normal / medium | **Inria Serif** (`@fontsource/inria-serif`, 300 + 400 italic) | it is an open (OFL) font on Google Fonts, so the same face |

The logo is a custom line drawing; ours is a plain wordmark: "TALGRUND" in Inter 200 with
wide tracking, filled with the brand gradient (`wild-ag-wordmark`).

## Section map

Heights from the capture (1440 / 390). "Window" = sized by the window.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | loader curtain | `wild-ag-loader` | fixed overlay, 100svh | gradient backdrop, paper card inset, centred wordmark | same, card inset 36px top/bottom, 73px radius | — | load: wordmark draws in, curtain lifts away (5.9s) |
| 1 | header | `wild-ag-header` | overlay | wordmark left, two-bar burger right, white on the hero video | same at the gutter (inferred: the loader hides it in every 1440 frame) + a compact sticky bar with a "Contact" pill after the hero (inferred from `div.sticky-header "KONTAKT"`) | — | burger 2nd bar to 50% on hover; sticky bar slides in after the first screen; menu overlay |
| 2 | hero | `wild-ag-hero` | window (video 100svh) + content band | video fills the window (scroll cue arrow at the bottom), then a 525px gradient band with the centred headline, one line of text, a paper pill | same: video 900px, band 424px, headline 3 lines | video, fills the window, **fixed** while the band scrolls over it | headline/lead/button rise in on entering view |
| 3 | portrait + values | `wild-ag-portrait` | content (1461 / 1960) | title + 3 paragraphs, image, values title + 4 values, image | 2 cols: [text, image] / [image, values]; values separated by 152px gradient hairlines | 2 images, 541×475 (1440) / 354×266 (390), r16 | text reveals on entering view |
| 4 | team | `wild-ag-team` | content (771 / 754) | slider: one 336px card + peek, round prev/next arrows top right | 4 cards in a row (277px wide) | 4 portraits 277×276 / 335×353, top corners r16 | arrows scroll the track; title reveal |
| 5 | statement window | `wild-ag-statement` | **window 100svh** | top 75% a window onto fixed footage (rounded bottom), then a 98px ticker line on the gradient, band bottom r55 | same, ticker 126px, r73 | video/image, fixed to the window | ticker loops; window media fixed |
| 6 | competences | `wild-ag-services` | content (1375 / 1808) | text, image, 5 numbered pill rows, image | 2 cols: [image, rows] / [text, image] | 2 images 541×486, r16 | text reveals; row hover |
| 7 | projects | `wild-ag-projects` | content (869 / 801) on light surface, bottom r73 | slider like team, card 336px, button full width | 2 cards 571px, image 309px tall | 2 images 571×309 / 335×266, top r16 | arrows; title reveal; button hover |
| 8 | partners | `wild-ag-partners` | content (581 / 452) | title, ticker of 205×168 tiles | ticker of 277×186 tiles | partner logos → plain-text names | ticker loops (14.5s) |
| 9 | process | `wild-ag-process` | content (513 / 792), gradient band, bottom r73 | text, 3 outlined pill rows | 2 cols: text / rows | — | text reveal, row hover |
| 10 | film | `wild-ag-film` | **window 108svh**, bottom r73, tucked under the process band | full-bleed video | same | video fills | — |
| 11 | contact | `wild-ag-contact` | content (700 / 916) | info, then form card | form card left (670px), info right, centred | — | text reveal; input focus; button hover |
| 12 | footer | `wild-ag-footer` | content (159 / 255) | centred stack: wordmark, legal line, socials | wordmark left, legal line + 2 round socials right; 2px hairline on top | — | link/social hover |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| loader | load | wordmark fades and un-clips left→right; then the curtain (backdrop + card) lifts up out of the window, the card's corners going round | 5.9s total (`loaderBackground`) | CSS `@keyframes`, fill-mode both, ends `visibility:hidden`; reduced motion: not shown |
| hero video | scroll | video stays fixed while the band slides up over it (`hero__video-fixed`) | — | the slot is a `clip-path: inset(0)` box with a `position: fixed` child (the clip keeps the fixed media inside its own box) |
| statement window | scroll | same fixed footage seen through a window | — | same clip-path + fixed trick |
| all section titles and paragraphs | entering view | opacity 0→1, rise ~40px (they are blank in the 390 full-page capture, i.e. hidden until scrolled to) | ~0.8s ease-out | CSS view timeline, `entry 0px → entry 240px`, +40px per stagger step (`wild-ag-reveal`) |
| statement ticker | loop | big mixed-type line slides left forever | ~30s per loop (inferred) | CSS `@keyframes` translateX(-50%) on a doubled track (`wild-ag-ticker`) |
| partners ticker | loop | tile row slides sideways forever (`ticker` 14.5s) | 14.5s linear | same `wild-ag-ticker` |
| buttons | hover | paper pill → espresso with paper text; outline pill → paper fill with ink text | 0.3s cubic-bezier(.25,.46,.45,.94) | Tailwind transition + hover |
| pill rows | hover | outline disappears (border-color → transparent), surface tints, arrow nudges right | 0.3s same ease | Tailwind transition + group-hover |
| slider arrows | hover | paper → espresso, arrow icon → paper | 0.3s | Tailwind |
| burger | hover | second bar shrinks to 50% | 0.25s | Tailwind group-hover width |
| menu links | hover | gradient text fades in over ink | 0.3s | Tailwind opacity on an overlay span |
| socials | hover | brown → sand | 0.3s | Tailwind |
| header sticky bar | scroll (inferred) | after the first screen a compact bar with a Contact pill + burger drops in | 0.3s | small scroll listener (block already hydrates for the menu) |

GSAP ScrollTrigger is loaded at 390 but nothing pinned or scrubbed shows up apart from the
ticker sampling (which is the 14.5s loop seen at different moments, not a scrub).

## Media slots

| slot | placeholder |
|---|---|
| hero video (window, fixed) | `bg-muted` → soft sand gradient surface, fills the window |
| portrait images ×2 | `bg-secondary` surface, r16, same frame size (aspect set per breakpoint) |
| team portraits ×4 | `bg-secondary`, top corners r16 |
| statement footage (fixed) | soft muted surface in the window |
| competence images ×2 | `bg-secondary`, r16 |
| project images ×2 | `bg-secondary`, top r16 |
| partner logos | plain-text names of fictional firms in the tile |
| film video | soft gradient surface, bottom r73 |
| socials | lucide icons (Linkedin, Instagram) |

## Decisions

- **English copy** for a fictional "Talgrund AG"; section titles keep the original's habit of
  one capitalised word and a full stop ("ABOUT.", "TEAM.").
- **Desktop header inferred**: the loader sits over every 1440 frame. We used the 390 layout
  (wordmark + burger) and the CSS evidence (`sticky-header` with a "Kontakt" button,
  `burger:hover` rule, full-screen `menu`).
- **The overlap of rounded bands**: the following block takes a `tuck` prop that pulls it up
  under the band by the big radius (film under process; partners under projects), so the next
  section shows around the band's corners as on the original. The band blocks are
  `relative z-10`.
- **Big radius** is `calc(var(--radius) * 3.4)` on phones and `* 4.5` from lg (55 / 72px with
  the theme's 16px radius), so it re-themes with `--radius`.
- **Sliders** on phones are native horizontal scroll-snap tracks; the arrows call
  `scrollBy` (hydrate visible). From lg they are plain grids, as on the original.
- **Ticker speed** for the statement line isn't measurable (only one sample); 30s per loop.

## Comparison round 1

The full-page section crops of ours show the text blank (the view-timeline reveals sit in
their start state in a full-page screenshot), exactly as the original's 390 crops do; text
was compared in the scroll frames. The intro curtain covers the first frames of both. Our
curtain lifts after 5.9s; the original's stayed down for the whole capture at 1440 (it
waits for the video).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | — | content column 1280px instead of 1160 (theme's page-width included the gutters, blocks pad outside it) | — | yes: page-width is the content column; header/partners containers padded outside |
| hero band | 604px vs 525 (headline a line longer) | 447 vs 424 | reveal up ✓, fixed video ✓ | yes: shorter headline copy, pt-8 pb-14 on phones |
| portrait | 1752 vs 1960: our paragraphs are shorter (content) | 1485 vs 1461 | reveals ✓ | content only |
| team | 735 vs 754 | 814 vs 771 (cards wider because of the column) | arrows ✓ | yes (column) |
| statement | 100svh ✓ | 100svh ✓; ticker size and mix ✓ | loop ✓, fixed window ✓ | — |
| services | 1707 vs 1808 (shorter copy) | 1429 vs 1375 (column) | reveals ✓, row hover ✓ | yes (column) |
| projects | 790 vs 801 ✓ | 880 vs 869 ✓ | ✓ | — |
| partners | 436 vs 452 ✓ | 579 vs 581 ✓ | 14.5s loop ✓ | — |
| process | 716 vs 792 (shorter copy) | 504 vs 513 ✓ | reveals ✓ | content only |
| film | 108svh ✓, tucked under process ✓ | ✓ | — | — |
| contact | 924 vs 916 ✓ | 694 vs 700 ✓ | ✓ | — |
| footer | 285 vs 255 | wordmark 250px wide vs 163 | — | yes: wordmark 1.6rem, tighter gaps |
| header | wordmark 160 vs 145px | (inferred) | compact bar drops in after the first screen ✓ | yes: wordmark 1.5rem / 1.75rem |

## Comparison round 2

Heights now (ours / original): 1440 — hero 1347/1324, portrait 1457/1461, team 784/771,
statement 900/900 (window), services 1375/1375, projects 877/869, partners 579/581, process
504/513, film 972/973 (108% window), contact 694/700, footer 152/159. 390 — within ~20px
everywhere except where our copy is shorter (portrait, services, process) and the hero band
(+60px: our headline wraps to one more line on phones). 360/768/1024: no overflow. Every
motion row shows up in ours' Motion list: loader keyframes (5.9s), hero/statement media
fixed for the whole page, reveals (opacity 0→1, rise 40px) in every section, both tickers
moving, compact header bar dropping in after the first screen.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | band text block 1 line taller | ✓ | ✓ | tightened lead/button gaps on phones; rest is copy length |
| header | ✓ | compact pair sits at the content edge ✓ | ✓ | — |
| team, projects | ✓ (slider + arrows) | ✓ 4 / 2 columns at 277 / 571px | arrows ✓ | — |
| footer | ✓ | wordmark ~165px ✓ | hover ✓ | — |
| all | text placement, type scale and weights match the scroll frames | ✓ | ✓ | — |

Left as is: the original's logo is a drawn line mark, ours a thin tracked wordmark; partner
logos are text in the display serif; the desktop header is inferred (see Decisions).

## Re-theme check

`wild-ag-projects` (sample-ember, light) and `wild-ag-process` (sample-ember, dark) render
with that theme's gradient, fonts and radius and stay readable: bands take `primary →
highlight`, their text `primary-foreground` (dark on ember's dark mode, which still reads).
Our own dark mode (espresso page, lifted espresso surfaces, same taupe/sand bands) checked
across the whole page.
