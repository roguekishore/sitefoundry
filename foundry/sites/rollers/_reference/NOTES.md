# rollers — recreation notes

Original: https://rollers.com.au/ (precaptured 2026-10-21; landing page only, no other pages asked for).
Fictional stand-in: **Stonebank**, a family-run civil plant hire firm (compactors, water tankers,
graders, site cabins) with depots in invented inland towns. All copy is ours.

## Design language

- **Palette roles.** White page, charcoal ink (#25282a) for text, hairlines and the dark bands;
  one loud safety orange (#e75301) for half of every headline, the CTAs, big figures and the
  arrow squares; an olive grey (#64665c) for muted paragraphs and every button's hover; a mid
  denim blue (#507bba) band for the sub-brand with a navy (#212b69) second headline line.
  Dark bands (why-us, testimonial/CTA, footer) carry a faint diagonal sawtooth pattern.
- **Type scale (1440 → 390).** h1 68/75 → 33/36; h2 68/75 → 33/36 (Aeonik "Medium" file shown
  at 400, so it reads ~500); h3 statements 44/53 → 25/30 (Helvetica Neue, tracking +0.01em);
  list titles 32/38 → 21/25 (Helvetica); big figures 90/99 → 40/44 (Helvetica); ledes 24/31
  → 18/24; body 18/27 → 14/21; eyebrow chips 14px uppercase.
- **Two-tone headings.** Nearly every heading is one sentence split into a charcoal part and an
  orange part (or white + orange on dark, white + navy on blue).
- **Grid.** Full-bleed bands, 40px side gutter at 1440 (30px at 390), no max width. Sections
  are cells of a ruled grid: 1px charcoal hairlines across the full width between bands and
  vertical rules splitting halves, thirds, or a 360px side column. The rules draw in as you
  scroll (horizontals grow from the left, verticals from the top).
- **Spacing rhythm.** ~110px top padding in most bands at 1440 (eyebrow at y=110), 60–70px at
  390; content blocks are packed tight with large empty cells around them.
- **Shapes.** Square imagery with no radius; orange CTAs have 3px corners; dark/white
  secondary buttons are full pills (50px). Square 48px orange arrow tiles on cards.
- **Depth.** Flat. One faint shadow on the header (0 6px 12px / 5%). No card shadows.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Aeonik Pro (Regular + Medium) | geometric neo-grotesk, flat terminals, round bowls | normal width, large x-height | **Hanken Grotesk Variable** (already in the repo) | the closest open grotesk with geometric round bowls, flat terminals and a large x-height; its 500 matches Aeonik Medium's colour |
| Helvetica Neue Roman | neo-grotesk | normal width, large x-height, tight | **Arimo Variable** (already in the repo) | metric-compatible Helvetica/Arial family; same closed apertures and tight fit for the 90px figures and the h3 statements |

Token use: `--typeface-display` and `--typeface-body` are both Hanken Grotesk (the original
sets headings and running text in Aeonik). The Helvetica pieces read a theme-only extra
variable, `font-[family-name:var(--typeface-grotesk,var(--typeface-body))]`, like lunchline's
`--typeface-hand`: under any other theme they fall back to its body face.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header | rollers-header | 64px bar (+65px of top bars on phones) | grey phone bar + orange tagline bar scroll away, then a sticky bar: dark logo cell (mark + wordmark) and an orange Menu cell | fixed 64px bar: dark logo cell (mark + wordmark, 255px), orange tagline cell to 720px, white cell with phone, orange Menu cell | — | wordmark collapses after ~100px of scroll (logo cell 255→120px); link hovers |
| 1 | hero | rollers-hero | **window**: 100svh − 64px header (780 at 390; 900 incl. header at 1440) | video fills; centred play button; h1 + lede at bottom-left | video fills; centred play button; h1 + lede bottom-left; card (image 380×221 + button strip) bottom-right; vertical "SCROLL" cue at right | video (cover, fills window), card image 380×221 | showreel button scrubbed out (opacity 1→0, scale 1→0.8 over scroll 174–574px); scroll cue loops |
| 2 | who we are | rollers-intro | content (472) | eyebrow, 33px two-tone heading | eyebrow, 68px two-tone heading, ~1000px wide | — | words rise 75px + fade, staggered |
| 3 | about | rollers-about | content (696) | image 330×246, h3, two paragraphs, buttons | two halves split by a vertical rule; image 640×476 left, h3 + paragraphs + buttons right | image 640×476 | h3 words rise; image, paragraphs, buttons fadeInUp; rules draw in |
| 4 | what we do | rollers-what-we-do | content (417) | square tile 330, eyebrow, heading | 360px side cell with a 280 square tile, rule, eyebrow + heading | brand tile 280×280 | words rise; tile fades up |
| 5 | services | rollers-services | content (630) | statement, then 3 items each under a rule | statement left half; right half a stack of 3 ruled items (title 32px orange) | — | statement words rise; items fadeInUp |
| 6 | stats | rollers-stats | content (1080 at 1440) | three stacked figures 40px | three ruled columns, figures 90px in a staircase (top / middle / bottom) | — | figures pinned (sticky) in their columns; words rise 99px; captions fade up |
| 7 | banner | rollers-banner | content (16:9 image) | 390×219 | 1440×810 | photo 16:9 | fades up |
| 8 | fleet intro | rollers-fleet-intro | content (492) | eyebrow, heading, card 330 (image + orange bar link) | heading in a 1080px cell, a 360px side cell holding a 280×190 image + orange "view" bar | image 280×190 | words rise; card fades up |
| 9 | fleet | rollers-fleet | content (1625 + 197) | 4 cards stacked, ruled; button | 2 ruled columns, right one offset ~290px; cards image 650×448, title, 48px arrow tile; then a ruled button row | 4 photos 650×448 | columns parallax (left −50→50px, right 50→−50px, scrubbed); cards fadeInUp; button fadeInRight |
| 10 | why us | rollers-why | content (1002) | dark band; eyebrow, heading, lede; 6 items stacked | dark band; heading left, 24px lede right; 2×3 grid of numbered items under white rules | pattern only | words rise; items fadeInUp |
| 11 | division | rollers-division | content (1198) | blue band; eyebrow, heading, buttons; image; text; 3 features stacked | blue band; heading + stacked buttons right; ruled row: image 884×442 + 24px text; ruled row of 3 features | photo 884×442 (decorative rings skipped) | words rise; text and features fadeInUp |
| 12 | from the yard | rollers-stats (reused) | content (1080) | "FROM THE YARD" stacked 40px | the three words in a ruled staircase, 90px | — | pinned columns; words rise |
| 13 | news | rollers-news | content (404 + 197) | 3 cards stacked; button | 3 ruled columns, cards image 400×276 with a chip, title 18px, arrow tile; ruled button row | 3 photos 400×276 | cards fadeInUp; button fadeInRight |
| 14 | testimonial + CTA | rollers-closer | content (~860 of the 1955 crop) | dark band; orange quote card, white CTA card stacked | dark band; orange quote slider 520px left; white CTA card right with centred 68px heading | client avatar circle 80px | quote slides autoplay with dots; words rise |
| 15 | footer | rollers-footer | content (~1090) | logo + tagline stacked; 2-col link groups; 2-col depots; legal | logo left, tagline right; 4 link columns; 5 depot columns; legal row | — | link hovers (white → orange) |

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | scrubbed (first ~100px) | wordmark collapses, logo cell 255→120px (desktop only) | ~0.3s feel | CSS `animation-timeline: scroll()` on the wordmark's max-width + opacity, range 0–120px |
| header / all | hover | buttons: background → olive grey; links: colour → orange | 0.45s ease (buttons), 0.2s linear (links) | Tailwind `transition-colors duration-450` / `duration-200 ease-linear` |
| hero | scrubbed | play button opacity 1→0, scale 1→0.8 | scroll 174–574px | CSS `animation-timeline: scroll(root)`, range 174px–574px |
| hero | loop | scroll cue dot slides down its line and fades | 2s infinite | CSS `@keyframes` |
| all headings | entering view | each word opacity 0→1, translateY 75px→0 (36px on phones), staggered | ~0.6s, one-shot in the original | `rollers-words`: CSS view timeline per word, range `entry` + fixed px, 30px stagger |
| paragraphs, buttons, images, cards | entering view | fadeInUp (opacity 0→1, rise) | 1500ms | `rollers-rise`: CSS view timeline, 40px rise over 220px of scroll |
| fleet / news buttons | entering view | fadeInRight (from the right) | 1500ms | `rollers-rise` with `from="right"` |
| ruled bands | entering view | hairlines draw: horizontals scaleX 0→1 from left, verticals scaleY 0→1 from top | ~1s | `rollers-rule`: absolutely placed 1px line on a view timeline |
| stats / yard | pinned | figures hold in place while their column scrolls past | 6–7 half-screens | `position: sticky` inside tall columns |
| fleet | scrubbed | left column −50→50px, right column 50→−50px | across the section | CSS view timeline `cover 0% cover 100%` on each column |
| testimonial | loop (autoplay) | slides move sideways; dots track | ~5s per slide | React state + interval, CSS translate transition; `hydrate: visible`; paused under reduced motion |

Motion inside media (the hero video, the showreel) is the placeholder's business.

## Media slots → placeholders

- hero video (fills the window, cover) → `bg-muted` surface with a charcoal gradient at the
  bottom for legibility; `media` prop.
- hero card image 380×221 → `bg-muted` box, 4px top corners.
- about photo 640×476 (1.34) → `bg-muted`.
- brand tile 280×280 → `bg-primary` square with an optional bold caption (the original's tile
  is brand art with a slogan; we keep the slogan as text, no logo shape).
- banner 1440×810 (16:9) → `bg-muted`.
- fleet intro image 280×190 → `bg-muted`.
- fleet photos 650×448 (1.45) → `bg-muted`.
- division photo 884×442 (2:1) → a lighter tint of the band (`bg-background/15`).
- news photos 400×276 (1.45) → `bg-muted`.
- testimonial avatar 80px circle → `bg-secondary` circle with initials.
- division band's big ring art and the dark bands' sawtooth pattern: the rings are brand
  artwork and are skipped; the sawtooth is a plain repeating CSS gradient (texture, not art).

## Decisions

- Header in flow and `sticky` instead of `fixed`, and the hero is `100svh − 4rem`: the visual is
  the same (the original's video starts under a 64px opaque bar) and the hero needs no top gap.
- Dark bands use the `dark` class on the section so they stay charcoal in both modes and take
  the theme's dark palette (under other themes too). The white CTA card inside the dark band
  uses `bg-foreground text-background` inside that scope.
- The original's buttons: orange = 3px rectangle (primary), charcoal / white = pill (secondary).
  Kept as two button variants in `rollers-button`.
- The Menu opens a right-hand sliding panel (the original's "sliding bar"); built with state,
  so the header hydrates on load.
- Fictional stats: "SINCE 1987", "450+", "3 STATES"… all our own.

## Comparison round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | logo cell stopped short of the Menu cell (white gap); wordmark pushed the bar 1px past 360 | matches (cells, widths, tagline tracking, phone, Menu) | wordmark tucks on scroll ✓ | yes: logo cell flex-1 + min-w-0, wordmark 28px under 640 |
| header menu | the parked panel (translate-x-full) widened the page at 768/1024 | same | — | yes: panel inside a fixed overflow-clip layer |
| hero | headline/lede sat ~100px too low (original keeps ~118px under the lede on phones) | matches; card and scroll cue in place | play button fades + scales 1→0.8 over 174–574px ✓; cue loops ✓ | yes: pb 7.5rem on phones |
| intro / about / what we do | match in height (256/768/588 vs 260/740/590) | 471/696/423 vs 472/696/417 | words rise 75px ✓, rise 40px ✓, rules draw ✓ | — |
| words reveal | later words still faded mid-screen (14px stagger × 20 words) | same, less so | slower than the original's one-shot reveal | yes: 6px stagger over 150px |
| stats | ok | "SINCE 1987" broke onto two lines; "THREE STATES" overflowed the column at 768 | sticky staircase verified with a scroll script (capture's list shows it as reveals only) | yes: "Est. 1987", 48/72/90px steps |
| fleet | ok | grid 1524 vs 1625 tall (cells' padding) | parallax ±50px ✓, fadeInRight ✓ | yes: right first cell pb 10rem, left second cell pt 10rem |
| why / division | ok | 1058 / 1249 vs 1002 / 1198 (our copy runs a line longer) | ✓ | — (content) |
| dark bands | texture read as continuous diagonal stripes | same | — | yes: masked low teeth per 56×70 tile |
| footer | depot address lines too far apart | same | link hovers ✓ | yes: street + town as one paragraph |
| closer | ok | ok | slider translates ✓ (autoplay) | — |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all big headings | Hanken 500 read lighter than Aeonik Medium | same | — | yes: headings at weight 550, tracking −0.015em |
| hero | headline block now ~30px lower than the original's (our lede is one line longer) | matches | ✓ | — (content) |
| fleet | ok | 1821 vs 1822 tall | parallax ✓ | — |
| why | texture now reads as rows of low teeth like the original | same | ✓ | — |
| overflow | 360 / 768 / 1024 fit | — | — | — |
| motion list | header tuck, play fade/scale, word rise 75px, fade-up 40px, fadeInRight 60px, fleet ±50px drift, slider translate all present | | stats/yard pinning is sticky (verified by script: figures hold at 104px while columns scroll); capture lists them as reveals | — |

Re-theme check: rollers-why and rollers-about under `sample-ember` take its palette and serif/sans
faces cleanly (the grotesk falls back to the body face). Dark mode: the charcoal bands meet a
charcoal page, the white CTA card and orange stay; acceptable as the sibling.

### Still different (on purpose or by limits)

- Typefaces are open substitutes (Hanken Grotesk for Aeonik Pro, Arimo for Helvetica Neue);
  Aeonik's body text is a shade darker than Hanken's 400.
- The blue band's large ring artwork and the original's R-shaped brand tile art are left out;
  the tile is a plain orange square with its slogan as text.
- Every photo/video is a flat placeholder (hero video, card photo, team photo, banner, fleet,
  news, division photo, client avatars).
- The original's reveals are one-shot (JS, time-based 1.5s); ours are scroll-linked CSS and
  reverse when you scroll back up.
