# aat-architecten (aat-architecten.be): recreation notes

Captured in advance (precapture.json, landing page only; no other pages were asked for).
Recreated as **BREM · Architects**, a fictional architecture studio: own name, own copy, own
project names, own address and numbers.

**The 1440 capture is blind.** Every 1440 frame shows only the header, the loading dot, the
"Projecten" head with its link, and the footer: the loading screen and GSAP pre-states hide
everything else. The 390 capture is complete. Desktop layout is therefore **(inferred)** from
the 1440 media sizes, the type clamp variables in `:root`, the section heights, and the visible
header and footer (see "Decisions").

## Design language

- **Palette roles.** Pure white page (`#fff`, background), one warm near-black ink
  (`rgb(29,29,27)`, foreground) and one light grey (`#ababab`, muted-foreground) that does all
  the secondary work: nav links, the section head "Projecten", project categories, inactive
  footer links. A single `#ddd` hairline sits above the footer. Nothing else: no accent colour,
  no fills, no shadows. Photos carry all the colour.
- **Type scale.** One neo-grotesk at one weight (400) everywhere; hierarchy comes from size and
  the ink/grey pair, never from weight. The site's own clamp scale:
  h3 `clamp(24px, 1.8vw + 1rem, 40px)` (the hero statement: 24/30 at 390, 40/50 at 1440),
  h4 `clamp(20px, 1.3vw + .8rem, 32px)` (the "Projecten" head: 20 at 390, 31.52/39.4 at 1440;
  the about paragraph), h5 20px (project titles and categories, nav links at 1440),
  16px (footer contacts at 390, link labels), 13px (header descriptor and footer small print
  at 390). Letter-spacing normal throughout.
- **Spacing rhythm.** Sections are separated by 96px at 390 and 256px at 1440 (the site's
  `--g-spacing` = 96px, scaled up on desktop). Gutter 24px at 390, 40px at 1440.
- **Grid.** 12 columns over 1360px with 40px gaps at 1440: project cards are 4 columns
  (427px) and 8 columns (893px). The header and footer share a five-column rhythm: logo, then
  columns starting at 27%, 45%, 68% and 91% of the content width.
- **Shapes and depth.** Everything square (radius 0), flat, no shadows. Links are underlined by
  a 1px ink rule 230px wide with the arrow pushed to its right end.

## Type

| Original | Kind | Open font used | Why |
|---|---|---|---|
| Suisse Intl (400 only) | neo-grotesk sans, normal width, large x-height, single-storey g, straight-legged R | **Hanken Grotesk Variable** (`@fontsource-variable/hanken-grotesk`, already installed) | the closest installed OFL grotesk on width and x-height, with the same calm, slightly squarish rounds at 400; Arimo (Arial metrics) is too mechanical, Instrument Sans too narrow. No new package needed |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | loading screen | `aat-architecten-loader` | fixed overlay, window | white cover with a 20px ink dot in the centre | same | – | dot fades, cover fades out after ~1s (load) |
| 1 | header | `aat-architecten-header` | content (104 / 110) | wordmark + hairline divider + 13px descriptor left; grey "Menu" right, **fixed** top-right while the header scrolls away | absolute over the hero: wordmark + 20px descriptor in the first 27%, then grey links "Projecten / Over / Contact →" 108px apart | – | nav grey→ink 0.6s cubic-bezier(.4,0,.2,1); menu overlay fades |
| 2 | intro / hero | `aat-architecten-hero` | 390: content (644); **1440: 100svh (window-sized)** | 24/30 statement (5 lines), then a 269×342 portrait image right of centre with a small "scroll" label at its bottom-left | (inferred) statement at 40px in the left half under the header, "scroll" bottom-left; image 562×861 at the right, the window's height minus 39px | 1 image (0.79 at 390, 0.65 at 1440, fills window height) | image clip reveal on load (1440); clip scrubbed as it leaves (390) |
| 3 | projects | `aat-architecten-projects` | content (2212 / 1656) | grey 20px head; cards stacked full width: image (portrait 342×446 or landscape 342×216), 20px ink title, 20px grey category; "Alle projecten →" line link at the end | grey 31.5px head left, line link right on the same line; (inferred) 12-col grid: portrait 4 cols (427×563) + landscape 8 cols (893×563), then two portraits 4 cols | 4 images | each card's opacity 0→1 scrubbed as it enters |
| 4 | about | `aat-architecten-about` | content (640 / 804) | small portrait 114×159 at the left; 20/27.5 paragraph below whose first line is indented by the image's width; "Meer over ons →" line link | (inferred) same composition at the h4 size (31.5/39.4), image 185×258, paragraph ~8 columns wide | 1 image | paragraph lines rise 30px out of masks, staggered, on entering view; image and link opacity scrubbed |
| 5 | footer | `aat-architecten-footer` | content (546 / 489) | #ddd hairline on top; wordmark; address, mail + phone, socials stacked at 16px; small print row (© / privacy / cookies) and a registration + maker-mark row at 13px | five columns (wordmark · nav with the current page in ink, others grey · address · mail + phone · socials) at 20/38, small-print row at 16px on the same columns | – | contact links ink→grey on hover; nav grey→ink |
| – | smooth scroll | `aat-architecten-smooth-scroll` | – | – | – | – | Lenis |

## Motion inventory

| section | trigger | what changes | timing / easing | build |
|---|---|---|---|---|
| loading screen | load | white cover with a centred dot holds, then the dot shrinks and the cover fades out | ~1.1s total, power2-out | `aat-architecten-loader`: CSS `@keyframes` with fill both; `display:none` under reduced motion |
| hero image | load (after the cover) | clip-path inset(100% 0 0 0) → inset(0): the photo wipes up into place | 1.5s, cubic-bezier(.4,0,.2,1)-like expo-out, 0.9s delay | CSS `@keyframes` with fill both |
| hero image (below 1024) | scrubbed with scroll, 279–868px | clip-path eats the photo from the top as it leaves the screen (direction inferred: the scroll frame shows the bottom unclipped) | linear with the scroll | CSS `animation-timeline: view()`, `exit` range |
| "Menu" (below 1024) | pinned | stays fixed at the top-right of the window while the header scrolls away | – | `position: fixed` |
| project cards | scrubbed with scroll, entering | opacity 0 → 1 over the card's entry | linear with the scroll | CSS view timeline, `entry 0% entry 100%` (cards are never the last thing on the page) |
| about paragraph | entering view (once) | each line rises 30px out of its own mask, line after line | ~1.2s expo-out, ~80ms per line | `aat-architecten-line-reveal`: words measured into lines after hydration, an IntersectionObserver flips them in; CSS transitions with a per-line delay; static HTML shows the text |
| about image + link | scrubbed with scroll, entering | opacity 0 → 1 | linear with the scroll | CSS view timeline, fixed px range (`entry 0px entry 240px`) |
| header nav, footer nav | hover | grey → ink | 0.6s cubic-bezier(.4,0,.2,1) | Tailwind `transition-colors` |
| footer contacts | hover | ink → grey | 0.6s | Tailwind `transition-colors` |
| line links ("Alle projecten", "Meer over ons") | hover | the rule wipes out to the right, then a new rule draws in from the left 0.3s later | 0.6s cubic-bezier(.4,0,.2,1) each | `aat-architecten-line-link`: two pseudo-element rules with `scale-x` and `transform-origin` transitions |
| page | wheel | smooth gliding scroll | Lenis | `aat-architecten-smooth-scroll` (`lenis`, already installed) |

## Media slots and placeholders

| slot | original | placeholder |
|---|---|---|
| hero photo | 269×342 (0.79) at 390; 562×861 at 1440, the window height minus 39px | `bg-muted` box, same sizes; `media` prop |
| project photos | portrait 0.76 (342×446 / 427×563), landscape 1.585 (342×216 / 893×563) | `bg-muted` boxes at those ratios; `media` per project |
| about photo | 114×159 at 390, 185×258 at 1440 (0.72) | `bg-muted` box; `media` prop |

## Decisions

- **Logo:** the original's angular wordmark is not copied; ours is the name "BREM" in the theme
  font, wide-tracked, followed by the same hairline divider and descriptor structure.
- **Desktop hero (inferred):** the 1440 capture shows only the loader. The image is 562 wide and
  861 tall in a 900 window. With the original's nav ending at ~865px, a photo at the right
  gutter (838px) would run under "Contact", so it is drawn **flush with the window's right
  edge** (39vw, max 35rem: 878px→1440 at 1440), from the top, the window height minus 2.5rem;
  the statement takes the left part and the "scroll" label sits at the bottom-left, mirroring
  the 390 composition. Between 1024 and 1279px the photo starts under the header instead.
- **Desktop projects (inferred):** the classes `--1`, `--2` and the 4- and 8-column widths
  suggest a 12-column grid filled in order; the cards span 4 (portrait) or 8 (landscape) columns
  and simply flow, so the demo's row 2 holds two portraits at columns 1–4 and 5–8.
- **Desktop about (inferred):** the 390 composition (image, then a paragraph indented by the
  image's width) at the h4 size, the paragraph capped at ~56rem.
- **Section rhythm:** `--section-y` is 3rem at phones (96px between sections, as measured) and
  8rem from 1024px (256px between sections, as measured at 1440); 5rem between.
- **Mobile menu:** the closed menu isn't captured; ours opens a full-window white overlay with
  the links at the hero-statement size in grey, ink on hover.
- **Language:** the copy is English (the original is Dutch) so the user can read it.

## Round 1 (ours vs original)

The 1440 original is blind apart from the header, the projects head row and the footer, so
desktop rows compare against the inferred layout and those three visible pieces.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| about | the line-reveal words inherited the paragraph's `text-indent`, so every word started 114px in: one word per line, a 2100px-tall section and 6px of sideways overflow at 360 | same, 2359px tall | line reveal itself ran (translateY 105%→0, staggered) | yes: `indent-0` on each word mask |
| header | wordmark 100px wide vs the original's 63px (four wide-tracked capitals) | 145px vs 103px | – | yes: 26px / 38px, tracking 0.18em |
| footer | 588px vs 546: address group starts 23px lower, small print 36px lower | matches (columns at 411 / 659 / 968 / 1278 vs 411 / 658 / 967 / 1277) | hovers match (ink→grey, grey→ink, 0.6s) | yes: tighter gaps (72px, 72px, 28px) |
| hero | statement 5 lines at 24/30, photo 269×342 at the same place, "scroll" at its bottom-left: matches | (inferred) window-tall; nav ends 813px, photo flush right from 878px | load wipe and phone crop attached (clip-path, view timeline) | – |
| header (desktop) | – | links 96px apart instead of 108 so they clear the photo; nav baseline ~4px above the descriptor's | colour 0.6s matches | kept (decision) |
| projects | head, card sizes (342×450 / 342×216), caption spacing and link match | 427×562 portrait + 893×563 landscape in one row, then two portraits; head row matches the visible original | opacity scrubbed in on entry, as the original | – |
| all | – | – | the original's 360/768/1024 all fit; ours overflowed at 360 (the indent bug) | yes |

Decision noted after round 1: from 1024–1279px the hero photo starts under the header (top
110px), because the nav would otherwise run into it; from 1280px it starts at the top.

## Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | wordmark 80px wide vs 63 (four letters against three glyphs); 104px row, "Menu" fixed at the same place | wordmark 118px vs 103; descriptor at 192 vs 185, links in the 27% column | – | accepted (a four-letter name) |
| hero | fold matches the original's: statement 5 lines, photo top at 370 vs 366, same size and offset | – | – | – |
| projects | matches (section crops show the cards blank because they are scroll-scrubbed; the scroll frames show them, as with the original's 1440 crops) | matches the inferred grid | opacity scrubbed on entry: present | – |
| about | indent = photo width (114px), 20/27.5, 10 lines; link 160px wide on its rule | h4 size 31.5/39.4, indent 184px, 6 lines at ~56rem | lines rise from masks with an 80ms stagger; photo and link fade with scroll | – |
| footer | 564 vs 546 (line height 28 vs 27.5, small print ~16px lower) | matches | hovers match | accepted |
| fit | 360 / 768 / 1024 fit | | | |

Stopping here: each section pair reads the same at a glance apart from content and placeholders,
and every motion row shows up in ours-design.md (loader + hero wipe keyframes, hero crop and
card/photo/link fades on view timelines, the line reveal's translateY, the 0.6s colour hovers).

## Re-theme check

`aat-architecten-projects` and `aat-architecten-footer` under `sample-ember` (dark): warm dark
page, cream ink, sand-grey secondary lines, brown placeholders; the wordmark picks up ember's
serif display face. Both read correctly; nothing is tied to white.
