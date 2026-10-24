# formenergy: notes

Recreated as **Tidewell Power**, a made-up maker of week-long salt batteries for the grid,
built in a converted rail works in the fictional town of Calder Falls. Landing page only
(no other pages were asked for; `precapture.json` lists none). Captured in advance; the
original was not opened.

## Design language

An industrial corporate page with a calm, square rhythm. A full-bleed factory video sits
behind a white uppercase condensed headline; after it the page is a stack of plain
alternating bands, light grey `#f4f4f4` and white, each a two-column split of a photo and a
short text column, then a full-bleed darkened photo band, a news row and a black footer.

- **Palette roles:** page white and grey `#f4f4f4` bands; text black (`#000`, buttons
  `#202020`); one warm orange `#faaf40` used only for hairlines, button outlines, tag
  badges, the 2px rule across the top of the hero, the footer social boxes and every hover
  colour; black `#000` footer and dark overlays on photos. Nothing else is coloured.
- **Type scale (1440 / 390):** hero 86 / 43px condensed uppercase with ~0.04em tracking;
  section titles 36 / 29px condensed semibold uppercase, line-height 1; body 20/28 and
  16/22.4 Roboto Light; hero lead 24 / 17.6px Roboto Regular; news titles 22 / 17.6px
  Roboto Medium at line-height 1; every label (nav, buttons, tags, sources, dates, footer
  headings, legal links) is Roboto Mono Medium uppercase-ish at 12–14px with 1–2px tracking.
- **Spacing rhythm:** each band has ~110px above and below its content at 1440, ~38px at
  390. Inside a band, title → body ~60px, body → button ~38px.
- **Layout grid:** content 1276px wide at 1440 (82px side margins), split ~49% media /
  gap 92px / ~44% text, text column vertically centred against the media. At 390 one column
  with 30px margins: media first, then title, text and a full-width button.
- **Shapes:** photos 6px radius (mosaic tiles 5px), buttons 3px with a 2px orange outline,
  news cards 5px with a square top-left corner under their tag badge (badge 3px top corners).
- **Depth:** none. Flat bands, no shadows, contrast comes from band tone and dark photos.
- **Section heading device:** a 60px (40px on phones) 1px orange rule to the left of the
  uppercase condensed title, 20px gap (on phones the long title has its rule above it).

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| Roboto | neo-grotesk, normal width, tall x-height | Roboto (`@fontsource-variable/roboto`) | the original's face is open (Apache 2.0) |
| Roboto Condensed | condensed neo-grotesk | Roboto Condensed (`@fontsource-variable/roboto-condensed`) | open, same face |
| Roboto Mono | monospaced grotesk | Roboto Mono (`@fontsource-variable/roboto-mono`) | open, same face |

`font-display` = Roboto Condensed (hero and section titles), `font-sans` = Roboto,
`font-mono` = Roboto Mono.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `formenergy-header` | content (sits over the hero) | wordmark top-left, hamburger right | wordmark left, six mono uppercase links with carets right | none (logo → plain wordmark) | hover to orange 0.4s; dropdowns on hover; phone menu toggle |
| 2 | hero | `formenergy-hero` | content, 535 / 758px (not window-sized) | 4-line title, lead with left rule, bottom-weighted | 2-line title at x=112, lead 720px wide with left rule | full-bleed video (cover) | none of its own (the video loops) |
| 3 | technology split | `formenergy-split` (media left, grey band) | content | image 331×210, title, text, full-width button | image 628×500 left, text column right, centred | image 628×500 r6 | button hover fill |
| 4 | factory split | `formenergy-split` (media right, white band) | content | image, rule above title, text, button | text left, image 628×500 right | image 628×500 r6 | button hover fill |
| 5 | about | `formenergy-about` | content | 2×2 mosaic (195+126 / 126+195 × 150), then text | mosaic 628×490 left (373+245 / 245+373 × 240, 10px gaps), text right | four images r5 | button hover fill |
| 6 | hiring | `formenergy-hiring` | content (597px at 1440) | full-bleed darkened photo, text over it, full-width button | photo band, text in the left half | full-bleed photo (cover) | button hover fill |
| 7 | news | `formenergy-news` | content | one column of cards (218px) | 4 cards 310×350, 12px gaps; centred mono "read more" link | none | link hover to orange |
| 8 | footer | `formenergy-footer` | content (606 / 1129px) | everything centred and stacked | 4 columns: wordmark + tagline, menu, contact, social boxes; rule; legal row | none | link and social-box hover to orange |

The capture's big "section 2" (3477px) holds sections 3–7.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scrolled past the hero | the capture shows its inner section at translateY 0 → −200px between scroll 900 and 1350: the header is out of view once the hero is gone, and no frame shows it coming back | — | the header sits absolutely over the hero and scrolls away with it (same frames; no JS). The original may reveal it on scrolling up: not observable in a downward capture, so not built |
| header | hover | link and caret white → orange | 0.4s ease | `transition-colors duration-400` + `hover:text-primary` |
| header | hover / focus | submenu panel drops under a link with a caret | instant | CSS `group-hover` / `group-focus-within` |
| header (phone) | tap | menu opens under the bar | — | `<details>` toggle, no JS |
| splits, about, hiring | hover | LEARN MORE button: transparent → orange fill, text #202020 → black | 0.3s ease | `transition-colors duration-300` |
| news | hover | READ MORE NEWS text → orange | 0.3s | `transition-colors` |
| footer | hover | links → orange; social box border and icon → orange | 0.3s | `transition-colors` |
| hero | loop | the background video | — | media: the placeholder's business |

No scroll reveals, parallax or pinning on the content: the scroll frames show every band
already in place. The cookie bar and the accessibility widget (both fixed) are third-party
overlays, not part of the design: skipped.

## Media slots

| slot | ours |
|---|---|
| hero video, full-bleed 16:9 cropped to the hero | `media` prop; empty → dark diagonal token gradient (hero is a `.dark` scope) |
| split images 628×500 (390: 331×210), r6 | `media` prop; empty → muted-to-foreground/15 gradient, same radius and size |
| about mosaic, four tiles | `media` list prop; empty tiles → same placeholder surface, r5 |
| hiring photo, full-bleed | `media` prop; empty → dark gradient under the overlay |
| footer logo image 150×122 | not a slot: our wordmark (no logo shape) |

## Decisions

- **Light is the faithful mode.** Dark sibling: black page, `#1e1e1e` bands and cards, the
  same orange.
- **Dark bands as `.dark` scopes:** hero, hiring and footer carry the `dark` class so their
  tokens flip in place (white text, black ground) under any theme.
- **One split block for the technology and factory bands** (`mediaSide`, `tone` props),
  rather than two near-identical blocks.
- **Logo:** a plain two-line wordmark in Roboto, no box (the original's orange rounded
  square is its logo shape). Footer social icons are lucide icons.
- Hero height is a fixed content height per breakpoint (535 → 758px), because the capture
  does not mark it window-sized.

## Comparison round 1

Section heights before fixes (ours vs original): 1440 hero 758/758, body 3493/3477,
footer 611/606; 390 hero 534/535, body 3720/3695, footer 1198/1129.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | wordmark and hamburger ~10px high of the original's centre line | links at y 50 vs 64, right edge 1410 vs 1395, item gap 36 vs 31px | hover white → orange 0.4s matches | yes: more top padding, right padding 2.8rem, gap-8 |
| header | — | at 1024 the last dropdowns (hidden) stuck out 32px, page 1056px wide | — | yes: last two dropdowns open leftwards |
| hero | our title wraps in 3 lines, not 4 (content length) | matches (title 86px, lead with rule, low in frame) | none | content, left |
| splits | heading → text gap 27px vs 50 (tech) / 16 (factory) in the original: kept between | match | button fill on hover matches | — |
| about | match | match | — | — |
| hiring | match | match (597px band) | — | — |
| news | gap between stacked cards 35px vs 13px | badge 6px lower (longer title) | link → orange matches | yes: gap-y-3 |
| footer | link pitch 39 vs 35px, legal links 45 vs 30px apart, footer 69px too tall | social squares split into two far-apart rows (wrapped lines stretched over the tall grid row); wordmark wider than the original's 150px logo | link hover → orange | yes: content-start, leading-none lists, tighter legal list, smaller wordmark |
