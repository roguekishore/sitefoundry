# Brex: study notes

Recreated as the fictional company **Kiln** (a business card and spend platform). Landing page only
(`precapture.json` lists no other pages; none were asked for).

## Design language

- **Palette roles.** A white page with a cool grey layer (`#f3f3f7`) for alternate bands and cards,
  a barely-there `#f9f9fb` for the hero, and a lavender-grey (`#e5e6f0`) for the panels that hold product
  illustrations. Ink is `#15191e`, secondary text `#60646c`, logos `#8b8d98`. One brand colour: a hot
  vermilion orange `#ff3d00` for every CTA, link, stat figure and the play icon; hover goes lighter
  (`#ff6b18`). The dark band (`#000710`, near-black blue) is used only for the announcement strip, the
  closing CTA and the footer. Hairlines are a blue-grey at 15% (`rgba(66,87,138,.15)`).
- **Type scale (1440 / 390).** hero 72/72 / 36/36 · section heading 48/48 / 30/36 · feature heading
  36/36 / 30/36 · card title 24/29 both · stat figure ~48 · body 16/24 · small 14/21 · legal 12/16.
  Weights 400 body, 500 headings and buttons. Headings are tracked tight (-0.02em, hero about -0.03em).
- **Spacing rhythm.** Content spans 72 → 1368 px at 1440 (gutter 72 desktop, 24 phone). Section bands are
  about 64 px above the heading and 80 px below the content. Feature rows sit in a narrower 1080 px column
  with a 108 px gap between a 486 px panel and the text.
- **Shapes.** Radius 12 px for cards, panels, the CTA button and the email form; 8 px for header buttons;
  6 px for journal images; round 50 px arrow buttons. Flat: no shadows at rest, a soft
  `0 4px 16px rgba(0,0,0,.12)` on product-card hover.
- **Depth.** Almost none: depth comes from tone (white → grey → lavender panels → white cards inside).

## Type

| Face in the original | Classification | Width / x-height | Used for | Open font used |
|---|---|---|---|---|
| Inter | neo-grotesk sans | normal width, large x-height | everything | **Inter Variable** (the original uses Inter, so it is kept) |
| Flecha | contemporary text serif, soft contrast, ink-trap-free | normal, medium x-height | testimonial quotes | **Newsreader Variable**: same soft-contrast text-serif feel, similar proportions |
| Space Mono | geometric mono | wide | tiny labels inside the product illustrations | **Space Mono** (same). Used by `--typeface-mono`; the illustrations are placeholders so it barely shows |

## Section map (1440 px; heights from the capture)

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement strip | `brex-banner` | 50 (content) | two centred lines on dark | one line, 14px | – | none |
| 2 | header | `brex-header` | 60 (content), sticky | menu icon + wordmark left, orange button right | wordmark, 3 chevron menus + 2 links left; sign in, demo, orange button right | – | sticky; hover opacity |
| 3 | hero | `brex-hero` | **sized by the window: 93svh** (840 at 900) | text, email form, play link, then image band 390×258 | text left (72px h1), image bleeding off the bottom right (rounded top-left) | hero photo | none (static) |
| 4 | "Trusted by" + logos | `brex-logos` | content (128 + 208) | heading 2 lines, 4-column logo grid, 3 rows | heading, 2 rows × 6 logos | logos become plain-text names | none |
| 5 | "The card is just the start" | `brex-products` | content (176 + 452) | heading, 5 stacked grey cards | heading, 5 cards 246 wide in a row | one illustration per card | card hover shadow |
| 6 | "Solutions for every stage" | `brex-solutions` | content (128 + 545), grey band | 3 stacked cards, image 342×214 | 3 columns, image 416×260 | 3 photos | link hover |
| 7 | "Supercharge" + 5 feature rows | `brex-features` | content (152 + 5 rows of 422–486) | each row: panel (342×252) over text | alternating panel left / right, 486×358 panel in a 1080 column | 5 product panels | link arrow hover |
| 8 | stats | `brex-stats` | content (176 + 213 + 111 note) | centred heading, 3 stacked stats | heading, 3 columns, orange figures | – | none |
| 9 | testimonials | `brex-testimonials` | content (703), grey band | accordion rows with orange progress line; open row shows image + serif quote | 3 tabs on top, image left (648×482), logo + serif quote + attribution right | customer video/photo | autoplay with progress, 400ms crossfade |
| 10 | closing CTA | `brex-cta` | **sized by the window: 53svh** | image band 390×286 on top, dark text block below | dark left half with text, image right half | photo | button hover |
| 11 | "Trending insights" | `brex-journal` | content (160 + 639) | heading, 246px cards in a snap carousel, round arrows | 316px cards, 80px gap, bleeding off the right edge | 9 article images | arrow buttons scroll one card |
| 12 | footer | `brex-footer` | content (1561: lots of legal text) | logo; 2×2 link columns; social + store badges; legal text | logo + 4 link columns on a 5-column grid; social + store row; legal text | store badges become text pills | link hover opacity |

## Motion inventory

| section | trigger | what changes | timing / easing | built with |
|---|---|---|---|---|
| header | scroll | stays pinned, white with a hairline | – | `position: sticky` |
| buttons (all) | hover | background `#ff3d00` → `#ff6b18` (border too) | 0.5s ease | Tailwind `transition-colors duration-500` |
| text links | hover | colour `#ff3d00` → a warmer orange; arrow nudges right | 0.125s linear (colour) | `hover:` classes |
| nav / footer links | hover | opacity 1 → 0.8 | 0.125s linear | `hover:opacity-80` |
| product cards | hover | shadow none → `0 4px 16px rgba(0,0,0,.12)` | 0.25s ease-out | `hover:shadow-*` |
| testimonials | auto + click | panel crossfades (opacity), an orange progress line fills while a customer is active, then the next one opens | 400ms fade; ~8s per customer | state + CSS `@keyframes` in `brex-testimonials.css`; off under reduced motion |
| journal | click arrows | track scrolls one card; previous arrow is faded at the start | smooth | `scrollBy` + scroll-snap |
| integrations panel | loop | a row of white logo cards drifts sideways | – | inside a media slot: not rebuilt |

No reveals on entering view, no parallax and no smooth-scroll library were found, so none were built
(the capture's "opacity 1 → 0 reveal" is the testimonial panels swapping).

## Media slots

Hero photo (desktop 700×840 bleeding right; phone 390×258), 5 product-card illustrations (246×139–324),
3 solution photos (416×260), 5 feature panels (486×358, lavender panel with an illustration), testimonial
photo (648×482) and customer logo, CTA photo (half window, 1440×480), 9 journal images (316×178),
footer store badges. All become token-coloured placeholders at the same size and radius with no drawing of
the subject. Customer and press logos are plain-text names of invented companies.

## Decisions

- Inter is kept because the original uses it. Newsreader stands in for Flecha (not open licence).
- The announcement strip and the header are two blocks: only the header is pinned in the original.
- The testimonial block builds the accordion (phone) and the tabs (desktop) from one list so the states
  stay in step; the phone accordion is the same tablist with a stacked layout.
- Dark parts (banner, CTA, footer) force the theme's `dark` colours with a `dark` class, like the Ramp
  recreation, so they stay dark in the faithful light mode.
- Hover orange maps to the `highlight` token; the product-card hover shadow uses a neutral
  `shadow-foreground/15`.
- Product-card background guessed between `#f3f3f7` and `#f9f9fb` (`bg-muted/60`): the capture has no
  per-card colour value and the JPEG tones are ambiguous.

## Comparison round 1 (ours vs original, 390 and 1440)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| banner | – | 55px tall vs 50; text weight 500 vs 400 | hover opacity matches | yes: py and weight |
| header | matches (60px, menu icon, orange button 90px wide) | button was 106px wide vs 148; wordmark-to-nav gap 51px vs 30; link gaps 46px vs 38 | sticky ✓; hover: opacity | yes: `lg:px-9`, gaps |
| hero | 566px tall vs 584; play link gap | headline too light (500 vs the original's heavier look) and sub too wide (needed -0.02em tracking); photo placeholder faded out at its corners | – | yes: semibold h1, tracking, taller phone band, stronger placeholder tone |
| logos | heading wrapped to 2 lines at 1440 and the band was 384px vs 336 | same (copy too long) | – | yes: shorter demo copy |
| products | height ok (cards 324px) | headings lighter than original | card hover shadow ✓ | yes: semibold 48px headings |
| solutions | ok | placeholders disappeared into the grey band | link arrow nudge ✓ | yes: photo tone now `accent` based |
| features | ok | rows 470px vs ~440; heading weight | link hover ✓ | yes: `lg:py-12`, semibold 36px |
| stats | ok | columns at 166/546/926 vs 142/544/945 | – | yes: 1204px container, 16px gap |
| testimonials | accordion + orange progress line ✓ | tabs spread over the full width (orig: centred 1050px) and section 14px short | autoplay/crossfade ✓ (400ms, 8s) | yes: tablist `max-w-[65.5rem]`, top padding |
| cta | ✓ | heading weight; window-sized 53svh ✓ | button hover ✓ | yes |
| journal | ✓ | ✓ (782 vs 799px) | arrows scroll one card ✓ | – |
| footer | social icons overlapped the store pills | ✓ (columns, legal, spacing match) | link hover ✓ | yes: `gap-3` on phones |

Differences left on purpose: hero photo and every illustration are placeholders; customer logos are
plain-text names; the "integrations" marquee inside a media panel is not rebuilt; legal text is shorter
than the original's so the footer is about 1200px tall instead of 1561px.

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all sections | heights within a few px of the original except the footer (shorter legal copy) | heading and title weights now read the same as the original at a glance | `ours-design.md` Motion list shows: header pinned, testimonials fade 400ms + 8s fill, hover colour/shadow/opacity changes with the same durations (0.5s buttons, 0.15s links, 0.25s card shadow) | – |
| overflow | fits at 360, 768, 1024 | | | – |
| sized by the window | – | hero (93%) and CTA (53%) are marked "sized by the window" in ours too | | ✓ |
| re-theme (`sample-ember`, dark) | colours, fonts and radii follow the theme; hero text can overlap the photo slot when a theme's display face is much wider | | | noted |
