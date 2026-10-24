# Hermeus: recreation notes

Original: https://hermeus.com/ (landing page only; precaptured, the site was not opened).
Fictional stand-in: **Aldervane**, a small company building reusable high-speed test aircraft.
All copy, names and the wordmark are ours.

## Design language

- **Palette: greys and one amber.** Four flat greys carry the whole page, each band a step
  apart: `#d9d9d9` (hero ground, Mission band, buttons on the product band), `#ececec` (the
  site's base background, the product band), `#ffffff` (the two news bands), `#f8f8f8`
  (news cards, buttons on white, the footer). Text is a warm near-black `#454343`, nav and
  button labels pure black, quiet text (footer links, dates) `#aeaeae`, hairlines `#aeaeae`.
  The one colour is amber `#f2a500`: the giant "Mission" word, the hotspots on the plane,
  the category squares on cards, and every hover (link text and button fills turn amber).
- **Type: one Helvetica clone (TeX Gyre Heros)** at few sizes: 12px uppercase tracked
  captions/nav/footer links (+0.06em), 24px section labels, 18px body, 14px uppercase
  buttons tightened (−0.03em), a 92px bold display word (−0.03em), a 24px bold news
  headline. Phones scale everything down (9 / 15 / 13 / 51px).
- **Layout:** a 1290px column inside 75px gutters (20px on phones). Every section opens
  with the same index label: a tiny number, a 24px name, a full-width grey hairline. Two
  columns at desktop (heading left half, copy right half), single column on phones.
- **Rhythm:** sections pad ~75px top/bottom at 1440 (~36px on phones); the Mission band
  has more air on top (~120px).
- **Shapes and depth:** square corners everywhere, no shadows, no borders except the
  hairlines. Buttons are flat grey slabs with tiny black crop-mark ticks at their four
  corners. Depth comes only from the grey steps between bands.

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| TeX Gyre Heros (Helvetica clone), 400/700 | neo-grotesk sans | normal | large (Helvetica) | **Arimo Variable** (`@fontsource-variable/arimo`, already installed) | Arimo is metric-compatible with Arial, which was drawn to Helvetica's advance widths, so line lengths and wraps match TeX Gyre Heros almost exactly; same neo-grotesk build and x-height. Only a few letter details differ (R leg, G spur, t). |
| Texgyreheroscn (condensed) loaded but not seen on the landing page | — | — | — | not used | |
| Inter (loaded, not used on the visible landing page) | — | — | — | not used | |

Mono token: system monospace stack (the page shows no mono text of its own).

## Section map

Heights at 390 / 1440 from the capture.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | news strip | `hermeus-announcement` | 26 / 36px content | amber dot + NEWS, one truncated headline line with →, × | same, headline centred | — | close (×) hides it |
| 1a | header | `hermeus-header` | 58 / 94px, over the hero | wordmark left, hamburger right | wordmark left, 7 uppercase links right | — | sticky over hero + film, then scrolls away (slides up 94px) |
| 1b | hero | `hermeus-hero` | **window** (100svh) | grey ground, cut-out aircraft image filling it, 2-line headline at mid-height left | same, 1-line headline at ~73% height | hero image, fills window (cover) | headline chars blur/scramble in on load and keep flickering (loop) |
| 1c | film | `hermeus-film` | 312 / 810px (aspect 1.25 / 16:9) | full-bleed video | full-bleed video | video, full width | — (motion is the video's own) |
| 2 | mission | `hermeus-mission` | 266 / 429 content | label, amber "Mission" word, copy below | label; word left half, copy right half | — | label + copy scrub in (fade, rise 16px); word chars rise 111px staggered on entering view |
| 3 | product | `hermeus-product` | 489 / 973 content | label, copy, button, stage: giant two-line grey word behind the aircraft cut-out, chevron arrows at the sides | copy left / button right on one row; stage with 5 amber + hotspots | aircraft image 1290×501 (2.58) | scrub reveals; hotspot pulse rings loop |
| 4 | news feature | `hermeus-news-feature` | 562 / 1250 content | label, full-bleed 16:9 image, bold headline, copy, button | label, 1290×726 image in the column, headline (half width), copy, button | image 16:9 | scrub reveals (label, media, text, button) |
| 5 | recent news | `hermeus-news-grid` | 561 / 833 content | label + MORE NEWS button, horizontal card rail (312px cards, peek) | label + button; 3 cards (square image + grey body: title, category square, date) | 3 square images | scrub reveals |
| 6 | footer | `hermeus-footer` | 416 / 520 content | wordmark, address, flag; 3 link columns; legal lines; giant wordmark | wordmark/address left, 3 columns right; legal row; giant wordmark across the column, cut at the bottom | small flag image | link hover amber |

Components: `hermeus-section-label` (index label with hairline), `hermeus-button`
(crop-mark button), `hermeus-media` (placeholder slot), `hermeus-reveal` (scrubbed
fade-and-rise wrapper), `hermeus-smooth-scroll` (Lenis).

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| page | wheel | smooth scroll glide (Lenis seen) | Lenis default ~1.2s exp ease-out | `hermeus-smooth-scroll` (lenis), hydrate load, off under reduced motion |
| header | pinned | sticky at the top while the hero and film scroll by, then pushed up 94px as the Mission band arrives | scrubbed | `position: sticky` inside a wrapper holding header + hero + film (page.tsx); the hero is pulled up under it |
| hero headline | load + loop | each character blurs/scrambles in (blur ~8px, opacity, slight skew), and random characters keep blurring out and back | ~0.9s per char, scattered delays; flicker cycle several seconds | CSS `@keyframes` per char span, pseudo-random delays from the index; static HTML shows text; reduced motion: none |
| section labels | scrubbed | number fades in and rises 16px; name rises out of a clip line; hairline draws left→right | linear with scroll over ~400px (line ~800px) | CSS `view-timeline` on the label, `animation-range: entry 0px entry 400px` |
| content (copy, buttons, media, card list) | scrubbed | opacity 0→1, translateY 16→0 | ~450px of scroll from entering | `hermeus-reveal` wrapper: `animation-timeline: view()` |
| "Mission" word | entering view | each char rises 111px (≈1.2em) into a clip line, staggered | ~400px, stagger ~25px per char | named view timeline on the heading, per-char range offsets |
| product hotspots | loop | amber ring pulses out from each + (scale up, fade) | ~2s ease-out, infinite | CSS `@keyframes` |
| links | hover | text colour → amber | 0.2–0.25s ease-in-out | `transition-colors duration-250 ease-in-out hover:text-primary` |
| buttons | hover | fill → amber | 0.25s ease-in-out | same, `hover:bg-primary` |
| product hotspots | hover | (fill changes) | 0.25s | darken ring / scale on hover |

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero image | cut-out aircraft render covering the window | full-bleed soft grey light from the right on the hero ground (`hermeus-media` look `soft`) |
| film | autoplay video, 390×312 / 1440×810 | flat mid-grey surface, full bleed |
| product aircraft | cut-out aircraft 1290×501 (2.58:1) | soft grey oval-less gradient band of that box (no plane shape) |
| news feature image | 16:9, 1290×726 | flat grey surface |
| recent news images | 3 squares 417px | flat grey squares |
| footer flag | 30×18 flag image | small grey slot |

## Decisions

- Light is the faithful mode. Dark is a sibling: graphite bands in the same four steps,
  light grey text, the same amber.
- The original's wordmark logo is replaced by a plain bold uppercase wordmark in Arimo;
  the footer's giant logo by the same word stretched to the column width (SVG
  `textLength`), in the band's next grey.
- The "Mission Plane" backdrop is canvas-drawn text in the original; ours is real text
  (props) in the display face.
- The product stage is a small slider in the original (arrows on phones): ours switches
  slides with the arrows (hydrate: visible); the + hotspots are buttons with labels.
- The desktop edge squares in the original's stage (left/right at mid-height) read as the
  slider's controls there; ours shows them as amber square prev/next buttons on desktop and
  as light chevrons on phones.
