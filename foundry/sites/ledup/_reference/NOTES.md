# ledup — recreation notes

Original: https://ledup.pt/ (a Portuguese LED lighting maker). Captured in advance
(`precapture.json`); landing page only, no other pages asked for. Our fictional company is
**Calvera**, an architectural lighting maker; all copy is our own, in English.

The 1440 capture is partly blind: the site runs GSAP ScrollSmoother, so the full-page shot
and the section list are empty and there are no `original-1440-section-NN` crops. Desktop is
read from the six 1440 scroll frames, the media-slot sizes and the motion list; anything only
inferred is marked "(inferred)".

## Design language

- **Palette:** a near-white page (`#fafafa`) with pure white panels and cards, one warm
  chocolate-brown ink (`#4b423b`) for headings and body, a dusty taupe (`#a1948c`) for small
  labels, a greige (`#8c847e`) for paragraphs and outlines, a pale warm grey (`#e2dedb`) for
  hovers and the switch bar, a light grey pill (`#eeeeee`) behind the nav. Buttons are a
  translucent brown (`rgba(95,73,58,.64)`, reads as taupe `#8b7b71`) with white text. Two dark
  surfaces: the brown "values" band (`#4f4741` stepping lighter row by row to `#736c67`) and a
  brown-gold video footer. One warm orange gradient (the store count card).
- **Type:** Poppins throughout, mostly 400 with 500 headings, one 200 (rendered from 275)
  display line in the footer. Scale at 1440: hero 57.6/1.2, section headings 36/1.2 (500),
  body 14/1.6, labels 14, footer heading 51.8 (200). At 390: hero 36, headings 28–36, body 14.
- **Spacing rhythm:** generous: ~160px between sections at 1440 (~80px at 390); cards 28px
  apart at 1440, 16px at 390. Content is 1280px wide at 1440 (gutters 80px); 15px gutters on
  phones.
- **Shapes:** big soft radii: 50px on the hero's bottom corners, the projects panel and the
  footer's top (24px hero bottom on phones); 20px on cards, images and the values band; pills
  (999px) for nav, buttons and switches; 60px circle arrow buttons.
- **Depth:** almost flat; product cards carry a faint 20px grey haze shadow that deepens and
  lifts 6px on hover. A frosted (blurred, translucent) nav pill.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Poppins (100–900) | geometric sans | normal width, large x-height | **Poppins** (`@fontsource/poppins` 200/300/400/500/600, OFL) | it is open-licence, so the original face itself is the closest match |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | fixed header | `ledup-header` | content | wordmark left, two-line burger right, no bar | wordmark · centred frosted nav pill (4 links, first with chevron) · Contacto pill + 2 circle buttons | — | fixed; nav pill hover bg 0.1s |
| 1 | hero slider | `ledup-hero` | **window: 80svh** at 390, window minus ~16px at 1440 | photo fills, rounded bottom 24px; 36px heading + 14px line low in the frame; 01/02 tabs at the bottom | same, heading 57.6px at left, line 16px; rounded bottom 50px | background photo per slide (cover, fills the window) | slides cross-fade (0.8s) every few seconds |
| 2 | highlights bento | `ledup-highlights` | content | centred label + 28px heading (paragraph hidden); 7 cards stacked 360×160 | centred label, heading, two-line paragraph; two bento rows: 408/299/190/299 × 260, then 299/626/299 × 300 | media cards (bg photo), product cards (150×150 product shot), store-count card (video bg) | label/heading/paragraph rise 22–45px + fade; cards rise 40px + fade, staggered; product cards lift 6px on hover |
| 3 | projects reel | `ledup-projects` | content | white panel, radius 50; label + 36px heading; a swipeable row of 312×234 cards peeking; a short progress bar | text bottom-left (label, heading, paragraph), a rotating "drag" ring badge, the reel at right of 480×360 cards (60px gap) | 4 project photos 4:3 | block rises 24px + fade; badge ring rotates (loop) |
| 4 | about + zones | `ledup-about` | content | centred label, 36px heading, outline pill button; a 390×450 photo with a switch bar of 5 zones under it | centred label, heading, 3-line paragraph, button; a full-bleed 1440×720 photo + switch bar | day photo, lit photo | text rises 24px + fade; photo + bar **scale 0.7→1 scrubbed** while entering; switch bar fades in after; switches toggle |
| 5 | values accordion | `ledup-values` | **window: 88svh** at 390; content at 1440 (~674px) | dark brown card, radius 20: active item's photo + 18px title, then 5 stacked rows (01.–05.), each a shade lighter, overlapping like tabs | 1190px card: title + paragraph left, two staggered 274×320 photos right; rows 56px | 2 photos per item | rows expand / collapse on click (0.5s) |
| 6 | footer | `ledup-footer` | content (540 at 1440, 578 at 390) | brown video panel, rounded top 50px; 28px thin heading; 4 accordion rows with + and hairlines; centred legal line | 52px thin heading; 4 link columns; legal line at bottom-left | background video (cover) | link colour 0.18s on hover; accordions open |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| page | scroll (1440) | ScrollSmoother glides the whole page | — | `ledup-smooth-scroll` (Lenis), `hydrate: load` |
| header | fixed | stays at the top over everything | — | `position: fixed` |
| header nav | hover | link pill bg transparent → `#e2dedb` | 0.1s ease-in-out | `hover:bg-secondary transition-colors duration-100` |
| header Contacto / circles | hover | bg → darker brown `rgba(68,60,54,.8)` | 0.1s | `hover:bg-foreground/80` |
| hero | loop | slides cross-fade (two slides, tabs 01/02) | 0.8s ease | React state + interval, opacity transition (`hydrate: load`; static HTML shows slide 1) |
| highlights heading | entering view | label rise 22px, heading 43–67px, paragraph 45px; fade 0→1 | ~0.5s ease | `ledup-reveal` (CSS view timeline, fixed px range) |
| highlights cards | entering view | rise 40px + fade, staggered | ~0.5s | `ledup-reveal` with a per-card step |
| highlights product cards | hover | translateY −6px, shadow deepens | 0.28s cubic-bezier(.22,1,.36,1) | Tailwind `hover:-translate-y-1.5 hover:shadow-…` |
| highlights arrow circles | hover | circle fills pale grey (`rgba(227,227,227,.89)`) | — | `group-hover:bg-background/90` |
| projects | entering view | text block + reel rise 24px + fade | ~0.5s | `ledup-reveal` |
| projects badge | loop | the ring of text spins | slow, linear | CSS `@keyframes` rotate 18s (inferred speed) |
| projects reel | drag / swipe | horizontal scroll; progress bar follows | — | native scroll-snap row; bar is a CSS `scroll()` timeline on the reel |
| about text | entering view | rise 24px + fade (paragraph fade only) | ~0.5s | `ledup-reveal` |
| about photo | scrubbed | scale 0.7 → 1 as it comes up the window | linear with scroll | CSS view timeline, `entry 0px → entry 600px` |
| about switch bar | scrubbed / after | opacity 0 → 1 once the photo is full size | — | CSS view timeline, later range |
| about switches | click | knob slides, track darkens, the zone lights | 0.3–0.4s ease | React state, `hydrate: visible` |
| values rows | click | item expands, others collapse | 0.5s ease | `grid-template-rows` 0fr→1fr transition, React state |
| about Saber Mais | hover | outline → filled taupe, text white | 0.12s ease-in-out | `ledup-button` outline variant |
| footer links | hover | white/85 → white | 0.18s | `transition-colors duration-200` |
| footer accordions (390) | click | panel opens, + turns | — | `<details>` (no JS) |

## Media slots → placeholders

- hero background (per slide): full-bleed `bg-muted` with a soft top-left `highlight` wash, rounded bottom.
- highlight media cards (Fichas / Revendedores / Catálogo): `bg-muted` surface with the original's dark bottom scrim (`foreground/60 → transparent`) so the white label reads.
- product shots (150×150, contain): a `bg-muted` rounded square of that size.
- store-count card video: a warm `highlight → glow` gradient surface.
- project photos (4:3, radius 16): `bg-muted`.
- about day photo + lit photo: `bg-muted`; the lit layer is a `glow` wash that fades in as zones switch on.
- values photos (318×240 phone / 274×320 desktop, radius 20): `bg-background/10` on the dark card.
- footer video: the band itself (`bg-foreground` with soft `glow` and `highlight` light).

## Decisions

- **Dark band and footer use `bg-foreground` / `text-background`.** The original's browns are
  the ink colour (#4b423b ≈ #4f4741), so the dark surfaces are the ink; values rows step
  lighter with `color-mix` toward the background. Under a dark theme they become pale bands.
- **Light is the faithful mode.** Dark is a sibling: espresso page, warm off-white ink, the
  same taupe buttons.
- **Reveals are scroll-driven CSS**, not time-based like the original's GSAP toggles; ranges are
  fixed px so anything in the first screen is already shown.
- **Hero load-in:** the capture shows none, so none is added.
- Desktop values layout (two staggered photos right of the text) and the badge's spin speed are
  inferred from the scroll frames.

## Comparison round 1

Section crops of ours are taken at scroll 0, so every scroll-driven reveal shows its start
state there; text was judged on the scroll frames. Original 1440 judged on its scroll frames.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | matches (80svh, rounded 24, heading low-left, tabs); sample copy ran 3 lines, pushing text up | matches (window − 16px, rounded 50) | cross-fade runs | copy shortened ✓ |
| highlights | heading wrapped to 3 lines (original 2), label ~10px low; section 85px taller | layout, widths and heights match; product names wrapped to 2 lines | reveals 40px staggered ✓, hover lift ✓ | copy shortened, top padding 68px ✓ |
| projects | first card snapped flush to the screen edge (snap ignores padding); heading 2 lines (original 3) | reel started 60px too far right, so the next photo didn't peek; heading on one line (original 2) | ring spins ✓, reveals ✓ | scroll-padding, grid right pad, narrow measure ✓ |
| about | section 127px taller: the original scales the figure from its centre, so its full-size top sits only ~22px under the button (looked like 100px at 0.7); the bar is hidden until the end | same: full-size top ~120px below the button, not 190 | scale 0.7→1 ✓; original fades the whole bar, not only the switches | origin centre, gaps 24 / 120px, caption fades, tighter bar ✓ |
| values | matches (88svh card, stacked rows, one photo) | title 3 lines (original 2) | expand on click | copy shortened ✓ |
| footer | matches (accordion rows, centred legal line) | matches | — | — |
| overflow | fits at 360/768/1024 | | | |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | heading now 2 lines, sitting where the original's does (≈410–480px) | matches | ✓ | — |
| highlights | 1468px vs 1437 (+31, the label/heading reveal offsets); cards 160px, 16px apart ✓ | matches the scroll frames row for row | ✓ | accepted |
| projects | 577px vs 579 ✓; first photo inset, next one peeks, progress bar follows | heading 2 lines bottom-left, ring above-left of the reel, next photo peeks 20px at the column edge ✓ | ✓ | — |
| about | 837px vs 806 (+31); figure grows from its centre, bar fades in last ✓ | bar 304–434 vs original 310–443 in the same frame; values card top 698 vs 707 ✓ | scale 0.7→1 scrubbed ✓, fade ✓ | accepted |
| values | ✓ | title 2 lines, paragraph and staggered photos as original ✓ | ✓ | — |
| footer | ✓ | heading, four columns, legal line in the same places ✓ | link hover ✓ | — |
| overflow | fits at 360/768/1024 | | | |

Hovers in ours' Motion list: nav pills → greige (0.1s), Contact/circles → darker (0.12s),
product cards lift 6px with the deeper shadow (0.28s, same curve), Read more fills taupe.

Re-theme: `ledup-highlights` and `ledup-values` under `sample-ember` (dark) read correctly; the
values card and photo-card scrims turn pale there (noted in meta). Our own dark mode checked
on the full page: espresso page, pale ink on the hero placeholder, taupe buttons.

Still different, on purpose: media are placeholders (hero photo, card photos and product
shots, the store-count video, project photos, the about day/lit photos, values photos, footer
video); reveals are scroll-scrubbed rather than the original's time-based GSAP toggles; the
header's mega menu is not rebuilt (the chevron link is a plain link).
