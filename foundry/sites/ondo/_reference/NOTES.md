# ondo — recreation notes

Original: https://ondo.finance/ (landing page only; captured in advance, `precapture.json` lists no
other pages and none were asked for). Fictional stand-in: **Corvane**, a tokenized-markets
company with three products (Corvane Equities, Tidemark, Ballast).

The capture has **no scroll frames**, and most section crops below the products bento show
their content hidden (reveals that hadn't fired). Those sections' layouts are inferred from
the 390 crops (which show more), the section headings in `original-design.json`, the media
list and the animation names. Inferences are marked *(inferred)*.

## Design language

- **Palette:** strictly greyscale with pure black and white. White page; `#f0f0f0` panels
  (the products bento frame, carousel peeks, light buttons); `#dedede` hairlines and inactive
  cards; ink `#000`, secondary text `#626262`, tertiary `#b1b1b1`. Dark bands are pure black
  (`#000`) with `#0d0d0d` cards behind `rgba(255,255,255,.12)` hairlines, `#313131` for the
  news card, `#1d1d1d` for the dark "Discover" button. One sparing colour: a deep purple
  `#450e78` on a small outlined figure badge, and purple dots in the stat charts.
- **Type:** two families doing two jobs. A geometric grotesk for headings, UI and the giant
  numerals (weight 500 nearly everywhere, tight negative tracking: -4px at 150px), and a
  flared text serif for every paragraph, the stat values ($1.34B, 450+) and the serif stat
  labels. A small mono for ticker-style figures. Headings are often **two-tone**: first line
  black, second line grey (`#818181`/`#626262`) in the same size.
- **Type scale (1440 / 390):** hero 60/40px (words) · section display 60/40px · stat numerals
  150/96px · card titles 36/28px · sub-heads 28/20px · body serif 20/18px and 16/15px · UI
  16/14px · small 12px.
- **Spacing rhythm:** big quiet bands — ~170px above a small label, content ~120px later.
  44px page margins at 1440 (content 1352px), 16px on phones. Cards pad 24px; bento gaps 12px.
- **Layout grid:** centered compositions for hero, labels and the Nexus band; a 50/50 split
  for the stats band (heading left, numbers in the right half); bento 2-column (left product
  accordion, right stats 1 wide + 2 half).
- **Shapes:** radius 8 (buttons, nav), 12 (icon tiles), 16 (images), 24 (cards), 32 (the bento
  frame); pills for chips; circles for pagination numbers (36px, 3px faint ring).
- **Depth:** flat. The only shadow is the huge soft one under the floating nav
  (`0 9px 80px rgba(24,24,24,.07)` + two tighter layers).

## Type

| Original | Class / traits | Open stand-in | Why |
|---|---|---|---|
| Gellix (UI, labels, footer) | geometric grotesk, normal width, generous x-height, double-storey a, single-storey g | **DM Sans Variable** | the closest open geometric grotesk on width, x-height and those letterforms; already installed |
| OndoSans (hero words, display, numerals) | custom geometric grotesk with ink-trap notches, normal width | **DM Sans Variable** (same) | same skeleton; the notches are a logo-ish detail we don't copy; tight tracking kept |
| Arizona (serif paragraphs, stat values) | flared transitional text serif, medium contrast, moderate x-height | **Newsreader Variable** | transitional text serif with similar contrast and colour on the page; installed |
| A2 (badge, "+$0.0003 today") | small monospace | **DM Mono** | plain mono, pairs with DM Sans; installed |

The serif has no foundry token: the theme sets `--ondo-serif`, and blocks read it as
`var(--ondo-serif, var(--typeface-display))`, so other themes fall back to their display face.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | floating nav | `ondo-header` | 58px bar, fixed | full-width black bar: mark, "Launch App" light button, menu icon | centred black bar 792px wide, 12px from top, radius 8: wordmark, 4 nav items, light button; huge soft shadow | — | load: bar opens from the middle, items fade in from the left; hover bg white/10 0.25s |
| 2 | hero | `ondo-hero` | **125svh** (window-sized) | "Welcome to the" above, a 300px square stacked-frame video, "Open Economy" below, serif paragraph centred | words left and right of a 453px square stacked-frame video, serif paragraph centred below | 3 nested videos (453 / 390 / 276 squares, radius ~40) | load: frames shrink in from big (1→.53/.46/.34), words slide out from the centre (±260px x / ±175px y), paragraph fades up 40px; "Scroll to explore" hint fades as you scroll |
| 3 | latest news | `ondo-news` | content (685) | dark #313131 card: image on top, meta, title, Read More; two ticker rows of headlines below | 1216px dark card centred with 48px grey peeks either side: image 570×347 left, text right, progress ring top-right | news image 570×347 r16 | 6s autoplay with a progress ring; slide in/out 0.4s; tickers loop 20s/15s |
| 4 | products | `ondo-products` | content + pinned scroll (~733px + 274vh) | label, heading, then each product as its own grey panel: product card + 3 stat cards | label, two-tone heading, then a sticky grey bento: product accordion left (one open, two collapsed rows), stats right (TVL wide, two halves) | 3 stat chart slots per product, product icon | pinned: the open product changes as you scroll through; content fades up 0.4s; heading reveal *(inferred)* |
| 5 | stats | `ondo-stats` | content (962) | two-tone heading, then 3 rows: giant numeral + serif label, hairline | heading left half; rows in the right half | — | digits roll up to their value as the band enters view |
| 6 | testimonials | `ondo-testimonials` | content (913) | horizontal carousel: active card black, others grey peeking; square prev/next | same, cards from the left margin *(inferred)* | portrait 100×100 r8 per quote | prev/next slide 0.15s ease, active card turns black |
| 7 | beliefs | `ondo-beliefs` | content (900) | label, statement, 3 numbered circles centred | label + statement left *(inferred)*, circles bottom-right | — | 3 statements cross-fade on a timer; circles fill for the active one |
| 8 | institutional grade | `ondo-principles` | content (947) | black; photo band behind the heading fading to black; cards carousel | black; heading top-left *(inferred)*, row of 5 cards: active white 488px wide, others 243px dark | background photo/video | active card widens (accordion), its text fades up 0.4s, titles 0.25s; prev/next |
| 9+10 | Nexus | `ondo-nexus` | content (957) + 80svh visual (900) | black; label, two-tone 40px heading, gap, serif paragraph, light button, tall black visual | same, centred, 60px heading | the visual below (black, nothing captured) | reveals on entering view *(inferred)* |
| 11 | perspective | `ondo-insights` | content (838) | heading, stacked article cards | two-tone heading + "View all" right, 3 article cards *(inferred)* | 3 article images | staggered reveal *(inferred)* |
| 12 | closing | `ondo-cta` | content (699) | full-bleed photo with heading + button *(inferred)* | 1352×699 photo card r24 with heading and button over a bottom gradient | photo | reveal *(inferred)*; image slight scale-in |
| 13 | footer | `ondo-footer` | content (2257) | link columns 2-up, legal text full width, bottom bar | 6 link columns, legal text in two halves under hairlines, bottom bar with © + links + 2 icons | — | link hover to ink 0.2s |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | load | bar clip opens from centre, items slide 40px from left + fade | 0.6s / 0.3s, ease-out | CSS keyframes, fill both |
| header | hover | nav item bg → foreground/10 | 0.25s cubic(.4,0,.2,1) | Tailwind transition |
| header | hover | Launch App bg → 80% | 0.2s | Tailwind transition |
| hero | load | three frames scale from ~1.9× / 2.2× / 2.9× to 1 | 1.15s ease-out | CSS keyframes |
| hero | load | "Welcome to the" slides from +260px x (desktop) / +175px y (phone) to 0; "Open Economy" mirrored | 1.15s ease-out | CSS keyframes with a per-breakpoint custom prop |
| hero | load | paragraph opacity 0→1, rise 40px | 0.8s, delay 0.9s | CSS keyframes |
| hero | scrubbed | "Scroll to explore" hint fades out | first 30% of the band | CSS scroll() timeline |
| news | loop / timer | progress ring stroke-dashoffset full→0, then next slide | 6s | React state + CSS keyframes keyed per slide; hydrate |
| news | slide change | outgoing slides right, incoming in from left, content fade-in | 0.4s | CSS keyframes keyed per slide |
| news | loop | two headline tickers (phone) | 20s / 15s linear infinite | CSS keyframes |
| products | heading entering view | fade + rise 40px | entry → 40% | CSS view() |
| products | pinned | open product changes per third of the scroll | 0.4s content fade-up | sticky + `motion/react` useScroll; hydrate |
| stats | entering view | each digit rolls up from 0 | scrubbed over entry | CSS view() with a per-digit custom prop |
| testimonials | click | track slides; active card black | 0.15s ease (the site's transform 0.15s) | React state, CSS transitions; hydrate |
| beliefs | timer | statement cross-fades (opacity, rise 12px) | 6s cycle, 0.4s fade | React state + CSS keyframes; hydrate |
| principles | click | active card widens, text fades up | 0.4s / 0.25s | React state, CSS transitions + keyframes; hydrate |
| nexus, insights, cta | entering view | fade + rise 40px, staggered cards | entry 0% → entry 100% | CSS view() |
| footer | hover | link colour → ink | 0.2s ease | Tailwind transition |

## Media slots → placeholders

- hero: three nested square frames (radius 40/36/28) → muted surfaces, each a slot.
- news: 570×347 r16 image per slide → `bg-background` frame inside the dark card with a mid-grey.
- products: product icon tile (black 58px r12) is UI — built with lucide icons; chain coin
  logos → small token-coloured dots; stat charts → faint muted slots of the same size.
- testimonials: 100×100 r8 portrait → muted square; company logo → plain-text company name.
- principles: the photo/video band behind the heading → muted gradient fading into black.
- nexus: the tall black visual → a faint card surface, 80svh.
- insights: 16:10 r16 article images → muted.
- cta: the 1352×699 r24 photo → muted with the bottom gradient.

## Decisions

- One sans (DM Sans) for both Gellix and OndoSans: they share the geometric skeleton and the
  extra family would add weight for a detail (ink traps) that reads as branding.
- The announcement banner that slides away above the nav was not captured (only its motion);
  left out.
- The news section's "See the Latest…" heading is not visible in either capture; kept as a
  visually hidden heading for screen readers.
- The legal text in the footer is very long on the original (it makes the footer 2257px); ours
  keeps the layout with shorter fictional disclaimers, so the footer is shorter.
- Dark bands (header, news card, principles, Nexus) force the theme's dark colours with the
  `dark` class, so they stay black in light mode, as on the original.
- Light mode is the faithful mode; the dark sibling turns the white bands black and keeps the
  greys.
