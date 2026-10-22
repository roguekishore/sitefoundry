# sharplink — notes

Captured in advance (`precapture.json`, landing page only; no other pages were asked for).
The fictional company is **Ferrowell** (ticker FRWL on the fictional "Northgate Exchange"), a
listed treasury company that holds and stakes **LMN**, the asset of the fictional "Lumen"
network. No text, logo, 3D render, chart, illustration or photo is copied.

## Design language

- **Palette:** an institutional "steel and sky" palette. Light screens sit on warm paper
  (`#f7f7f5`) under a fixed pale steel-blue wash (`#c4d5e7`, a radial from the top of the
  window); text is pure black. Dark screens are pure black with off-white text (`#f3f3f3`)
  and a slightly lifted panel (`#0a0a0a`). Light and dark are joined by **tall vertical
  gradients**: paper → pale blue → a saturated mid blue (`≈#2f66b3`) → deep navy → black (and
  back), which scroll at their own speed. One electric blue (`#0e76ff`) is kept for tiny
  marks: the 6px squares that start every section rule, the arrow box of the main button,
  the "target" square, hover fills.
- **Type:** Archivo at 500 for everything big, with tight negative tracking; Archivo Narrow
  500, 13px, uppercase, +0.08em, for every label, button and date. Big jumps: 88px hero
  (52 on phones), 68px section titles (44), 44px statements (24–32), 32px list titles,
  19px lead text, 16px body, 13px labels.
- **Spacing rhythm:** a strict 3-column grid at 1440 (443px columns, 28px gutters and
  margins, columns drawn as **dotted vertical guides**), 4 columns of 16px gutters on phones.
  Sections start on a dotted horizontal rule with a blue square at its left end, then a label,
  then a title. Generous vertical space (~110–120px) inside sections.
- **Shapes and depth:** completely square (radius 0), no shadows. Depth comes from
  translucent fills (black 3% / 10% on light, off-white 10% on dark, a 45% charcoal glass
  behind the header), dotted hairlines (black 15%), and the big gradient bands.
- **Buttons:** 34px tall, a label box plus a separate 34px square arrow box 2px away. The
  main one is off-white with a blue arrow box; on hover the arrow box slides across to the
  left and the label shifts right (0.5s, easeInOutCirc). Tinted ones go from 10% to 18% fill
  in 0.25s.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Archivo (300–900, mostly 500) | neo-grotesk / grotesque sans with a slightly squared, technical feel | normal width, large x-height | **Archivo Variable** (`@fontsource-variable/archivo`, `wdth` file) | the original's own face is open-licence (OFL), so it is the closest possible match |
| Archivo Narrow (500, labels/buttons) | same design, narrow cut | narrow (~80%), large x-height | the same Archivo Variable at `font-stretch: 80%` (its width axis runs 62–125%) | one variable file covers both cuts; no second package; a theme without a width axis simply shows its normal width |
| mono | — | — | `ui-monospace` stack | the site uses no mono face |

## Section map

Heights from the capture (390 / 1440). Captured section 2 holds the hero **and** the
"productivity" section; split by what the crops show.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header | `sharplink-header` | fixed bar (~74px) | wordmark left; "MENU" box + 34px hamburger box right | wordmark left; row of separate nav boxes (2px apart) + a 34px arrow box right | — | fixed; colours flip light/dark with the section under it; box hover 10→18% |
| 1 | hero | `sharplink-hero` | **100svh** (sized by the window: video fills the window) | headline 52px top, two stacked buttons, background art, then "listed on" + 19px lead at the bottom of the window; news card just below the fold | headline 88px top-left; two buttons; bottom row: "listed on" + exchange mark, 19px lead (col 2), news card (col 3) | full-bleed looping video (the 3D object over a black→blue sky) | scrubbed on exit: scale 1→0.85, opacity 1→0 |
| 2 | yield (productivity) | `sharplink-yield` | content (~1380 / ~1500) | title 44px + text; dark chart card; three feature cards stacked | 3 columns with dotted guides: title 68px + text (col 1, text lower); dark chart card 443×590 (col 2); three feature cards (col 3) | chart (canvas) inside the card; one line illustration per feature card | letters of the title reveal at random, scrubbed; chart card fades in; values rise 26px; button rises 30px + fades; feature cards slide in from 100px right, staggered |
| 3 | pillars (propositions) | `sharplink-pillars` | content (1539 / 4643) | label + title; each item: label, 32px title, text, then its own 3D render | label + 68px title; list of items (label, 32px title in col 1, 16px text at ~col 1.8); one tall 3D render pinned on the right (560×765) changing per item; paper turns blue then black down the section | 3D render per item (560×765) | pinned media; titles' letters brighten 0.4→1 as each item passes; background gradient scrubbed (parallax) |
| 4 | cta (everyone) | `sharplink-cta` | content (600 / 663) | black; inset panel; blue target square in the middle; 24px heading near the bottom; two full-width buttons | black; dotted frame with blue corner squares; inset `#0a0a0a` panel; outline mark top-left; 44px two-tone heading mid-left; buttons bottom-left; outline drawing of the render right | outline drawing of the 3D render (560×765, contain) | outline drawing revealed by a scrubbed clip; mark scales 0.96→1; heading letters reveal |
| 5 | thesis (opportunity) | `sharplink-thesis` | content (1978 / 2522) | black → blue arc → paper; label + button; 24–32px paragraph; four rows, icon above title | black top with label + button right; 44px paragraph whose words light up as you scroll; a blue arc fades to paper; four rows (90px icon, 16px title + grey text) with a big 3D render on the right | 3D render right (≈560×880); line icon per row | paragraph pinned, then fades and rises 200px; words dim→bright scrubbed; rows fade in, titles rise 22px |
| 6 | news | `sharplink-news` | content (664 / 756) | label, 44px title, button + prev/next boxes; cards in a horizontal swipe track (322px) | label + 68px title left, button right; cards in the 3 columns | 16:9 card image (443×249) | card hover: hairline border, image scale 1.08, arrow box turns blue |
| 7 | faq | `sharplink-faq` | content (1054 / 694) | title, label, button stacked; rows: index badge + plus box on top, question below | "FAQ" 68px col 1, label + button top right; rows across cols 2–3 (74px, 4px apart, black 3%) with index badge, 19px question, black plus box | — | title letters reveal; row hover fill; answer opens with a 1.2s height ease |
| 8 | footer | `sharplink-footer` | content (1058 / 818) | paper → blue → black; sign-up, nav (2 cols), social, back-to-top, listing, legal, copyright stacked | 3 columns: sign-up form / nav in 2 sub-columns / social + back to top; bottom row: listing, legal, copyright; then a giant wordmark across the width, fading to the bottom | the giant wordmark is a WebGL canvas in the original | gradient band scrubbed; link underline grows on hover |

The cookie banner is a consent overlay, not part of the page design: not rebuilt.

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| whole page | wheel | Lenis smooth scrolling | Lenis default | `sharplink-smooth-scroll` (hydrate: load), off under reduced motion |
| backdrop | scroll | pale wash is fixed to the window | — | `sharplink-backdrop`: `fixed inset-0 -z-10` radial gradient |
| header | scroll | stays fixed; light/dark colours follow the section beneath | instant | `fixed`; an effect reads `data-sharplink-tone` under the bar and toggles `.dark` on the header (hydrate: load) |
| header / tinted buttons | hover | fill 10% → 18% | 0.25s easeInOutQuad | `transition-colors duration-250 ease-[cubic-bezier(.455,.03,.515,.955)]` |
| main button | hover | arrow box slides right → left, label shifts right 36px | 0.5s easeInOutCirc | `sharplink-button`: absolute arrow box, `right` + `translate` transitions |
| hero | scrubbed (exit) | scale 1→0.85, opacity 1→0, drifts down (looks pinned) | over the first screen of scroll | CSS view timeline on the hero, `animation-range: exit 0% exit 100%` |
| yield / pillars / cta / faq titles | scrubbed (entry) | letters 0→1 opacity in a scattered order | over ~40% of a screen | `sharplink-text-reveal` (letters): per-letter view() animation, pseudo-random range offsets |
| yield chart card | entering view | opacity 0→1; values rise 26px in a mask; button rises 30px + fades | ~half a screen | CSS view() reveal |
| yield feature cards | entering view | translateX 100px→0, opacity 0→1, staggered | ~half a screen | CSS view() with per-card range offset |
| pillars media | pinned | the render stays put while the list scrolls; it swaps per item | — | `sticky` column; each media crossfades on its item's named view timeline (`timeline-scope`) |
| pillars titles | scrubbed | letters 0.4 → 1 as the item crosses the window | — | `sharplink-text-reveal` mode `dim` |
| pillars / thesis / footer bands | scrubbed | the gradient band moves at its own speed (parallax) | linear with scroll | CSS view() on an oversized gradient layer, translateY |
| cta media | scrubbed (entry) | outline drawing revealed top-down (clip) | entry → cover 50% | CSS view(), `clip-path: inset()` |
| cta mark | entering view | scale 0.96→1 | short | CSS view() |
| thesis paragraph | pinned + scrubbed | words dim (35%) → full as you scroll; then the block fades and rises 200px | — | sticky wrapper; `sharplink-text-reveal` mode `words`; exit animation on the sticky block |
| thesis rows | entering view | opacity 0→1, title rises 22px | ~half a screen | CSS view() |
| news card | hover | hairline border; image scale 1.08; arrow box → blue | 0.5s | Tailwind `group-hover:` transitions |
| news (phones) | click | prev / next move the swipe track | smooth scroll | small handler (hydrate: visible) |
| faq row | hover / click | fill 3% → 6%; answer opens with height ease | 0.25s / 1.2s cubic-bezier(.25,1,.5,1) | native `<details>`, `::details-content` height transition + `interpolate-size` |
| footer links | hover | underline grows from 0 to full width | 0.3s | `after:` pseudo with width transition |

Skipped: the vertex labels drifting over the footer wordmark and everything inside the 3D
renders, videos and chart canvas (media). The hidden pinned video in the thesis section stays
at opacity 0 in the original the whole time: not rebuilt.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero background | looping video, full window, cover: a metal 3D object over a black → blue sky | `media?: ReactNode`; empty: a vertical gradient (black → navy → `glow` → pale) filling the window, no object drawn |
| yield chart | line-chart canvas (≈ 386×200) inside the dark card | `chart?: ReactNode`; empty: `bg-foreground/5` rect with a dotted hairline |
| yield feature art | dotted line illustration (≈ 190×160) at the right of each card | `media?: ReactNode` per card; empty: `bg-foreground/5` square |
| pillars render | 560×765 transparent 3D render per item | `media?: ReactNode` per item; empty: 0.73-aspect soft `glow`→transparent surface with dotted outline |
| cta drawing | 560×765 outline drawing (contain) | `media?: ReactNode`; empty: dotted-outline 0.73-aspect frame |
| thesis render | large 3D render on the right (≈ 640×880) | `media?: ReactNode`; empty: soft `foreground/5` surface |
| thesis icons | 90px dotted line icons | `icon?: ReactNode`; demo uses lucide icons |
| news images | 16:9 cover image | `image?: ReactNode`; empty: black → `glow` gradient surface (like the original's art frame) |
| footer wordmark | WebGL wordmark canvas | built as text: the company name in Archivo, gradient-filled, cropped at the bottom |

## Decisions

- **Dark parts use the `.dark` class** on their wrapper, so their tokens switch to the theme's
  dark set even on a light page; under another theme they follow that theme's dark mode.
  Bands that blend light into dark capture the light tokens first (`--sl-paper`,
  `--sl-pale`) on the light parent, so the gradient can run from one to the other.
- **Light is the faithful mode** (the page is mostly paper with dark bands). Dark mode turns
  the paper black and the pale wash navy; the bands still run through the same blue.
- Labels use `font-stretch: 80%` on the body face instead of a separate narrow family.

## Comparison rounds

Section crops of both sites are taken before each reveal runs (the original's yield, pillars
and thesis crops are as blank as ours), so the comparison leans on the scroll frames.
Heights (1440, original → ours): hero 900 → 900 (window-sized in both), yield 1380 → 1056,
pillars 1539 → 1544, cta 600 → 602, thesis 1978 → 2204, news 756 → 785, faq 694 → 740,
footer 818 → 824; page 8664 → 8655. At 390: page 12950 → 12668. No horizontal overflow at
360 / 768 / 1024.

### Round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | colours lagged one frame behind the section under it (dark bar over paper in fast scrolls) | same | tone switch ran on the next animation frame, after the capture's screenshot | yes: updates straight from the scroll event |
| hero | news card sat on a black strip; the original's sits on the blue that carries on into the next section | news card glass too light (15% off-white); the original is a dark 45% charcoal glass | exit scale/fade/drift matches (scrubbed, 1→0.85, 0→405px) | yes: blue strip fading to the backdrop under the phone card; card is background/40 glass |
| yield | — | feature-card art placeholders read as heavy grey blocks; the original's art is faint dotted line work | letters, values rise 26px, button lift 30px, cards slide 100px: all present | yes: faint dotted frames |
| yield | — | section 1056 tall vs 1380: the original's extra height is a GSAP pin distance | — | no (content height kept; the pin isn't part of the inventory) |
| pillars | matches (label, title, text, media under each item; band to black) | matches; placeholder in place of the pinned render | dim 0.4→1 focus, letters, band drift, media crossfade: present | — |
| cta | matches (frame, inset panel, target square, full-width buttons) | matches | clip uncover + mark settle present | — |
| thesis | the arc stopped in a visible edge at the bottom of the stage | fine | pinned words light-up, then fade and rise 200px: present | yes: the arc fades out at the stage's bottom (mask) |
| news | matches (swipe track, prev/next) | three cards where the original has one (content) | hover outline, zoom, blue arrow: present | — |
| faq | matches | matches | row hover present | — |
| footer | sign-up row overflowed its column (grid item min-width) | wordmark narrower than the page (1108 vs 1384px); nav/social columns sat on the column edge, the original indents them 28px | band rise present | yes: min-w-0 form; wordmark 26.5vw; columns indented |

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | blue now carries on under the news card and fades into the next section, as in the original | dark glass card matches | — | — |
| header | dark bar over the pale bottom of the thesis stage and over the pale top of the footer | same | the stage and footer are marked dark as a whole, but look light at those edges | yes: the bar takes the tone of the last marked region crossing its middle line; those pale stretches carry a light mark |
| footer | fits now | wordmark overshot (clipped at the right) | — | yes: 24.5vw |
| yield, pillars, cta, news, faq | match | match | all inventory rows present in our capture's motion list | — |

### Round 3

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | light over the thesis list and the footer's pale top, dark over hero / pillars band / cta / thesis stage | same | tone follows the page as in the original frames | — |
| footer | fits | wordmark spans the page (≈85–1375px) | — | — |
| all | — | — | hover list matches the original's: nav and tinted buttons 10%→18% in 0.25s, main button label slides ≈36px with the arrow box | — |

Stopped here: each section pair reads as the same design apart from content and media
placeholders; motion checks pass (hero window-sized, every inventory row in our motion list,
no overflow at 360 / 768 / 1024).

Remaining, on purpose: the yield section is ~320px shorter at 1440 (the original's extra height
is a GSAP pin distance with nothing in it), the thesis section ~220px taller (our pinned stage
is 150svh), and the news grid shows three cards where the original has one.

Re-theme: `sharplink-hero` and `sharplink-faq` checked in the gallery under `sample-ember`
(light and dark): colours, display face and page width all follow the theme.
