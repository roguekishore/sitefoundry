# anduril: recreation notes

Original: https://www.anduril.com/ (landing page only; captured in advance, not opened here).
Our fictional company: **Northwatch**, a maker of autonomous field systems. Products and copy
are invented (Tern, Pike, Meshwork, Kestrel, Gale, Ridgeline, Deepline; "Foundry Nine",
"Yardline OS", "Works One"…).

## Design language

- **Palette roles.** A near-black page (#010101) with white text carries the top half: the
  window-tall hero film and a bento of product tiles. The bottom half turns into flat
  full-bleed colour bands: a cool **stone grey** (#8e9291) with black text for the two
  "platform" rows, a **warm cream** (#f1f0ea) for news, an **olive drab** (#505544) and the
  grey again for the two-up editorial pair, then black for the footer. A single **lime**
  (#dff140, with a lime glow shadow) is in the CSS but barely seen: our `primary`/`glow`.
  Hairlines are the text colour at 30%.
- **Type scale.** One family (Helvetica Now Display) at 400/500/700. Big titles are not huge:
  56px platform names, 40px section heading, 32px article headline, 24px tile names, 18px
  footer links, 15px links and taglines, 12px uppercase labels with +0.04em tracking. Display
  sizes run tight (line-height 1.05–1.15, −0.02em). Phones: 36 / 32 / 27 / 24 / 18 / 13px.
- **Spacing rhythm.** Edge-to-edge layout: no max width, a 32px gutter on desktop and 20px on
  phones. Tiles sit 18px apart on desktop, 6px on phones. Bands are 48–80px padded.
- **Layout grid.** Everything after the hero snaps to halves: the news image, footer columns
  and editorial panels all start at the 50% line; the platform rows split ~42/58.
- **Shapes and depth.** 2px corners on every media frame, no shadows, no cards with
  borders. Depth comes only from the black page and the photographic tiles with a long,
  eased bottom scrim under their labels.

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| HelveticaNowDisplay (closed) 400/500/700 | neo-grotesk | normal | large | **Instrument Sans Variable** (already in the repo) | the closest open neo-grotesk: Helvetica-like R/a/G, flat terminals, large x-height and tight default spacing; Hanken is rounder and geometric, Public Sans wider and more humanist |
| Elios (loaded, not seen in use) | display | – | – | not used | no visible text uses it |

## Section map (landing)

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | fixed header | `anduril-header` | 72px bar | wordmark left, two-line menu button right; full-screen black menu | wordmark left, six nav links centred, Search + Company+ right | – | hides upward on scroll down, back on scroll up; nav text roll on hover |
| 1 | hero film | `anduril-hero` | **96svh** (window-sized) | film full-bleed under the bar, 390×(96svh−72) | film inset by the 32px gutter, 2px corners, from under the bar to the section end | 1 video, cover | optional uppercase caption that decodes in (text scramble) and fades on a loop |
| 2 | featured tile | `anduril-feature` | content (474px desktop / 368px phone) | one 350×350 square tile | one 3:1 wide tile (1361×454) | 1 video | fade in on entering view; hover shows tagline (scramble) + arrow |
| 3 | product bento | `anduril-products` | content (1426+64 / 2518+56) | seven 350×350 squares stacked, 6px apart | 3 columns, 18px gaps: three squares; a tall tile over two rows + a 2:1 wide tile; two squares | 7 images | tiles fade in on entering view; tagline scramble on view (phone) / on hover (desktop) |
| 4 | platform rows | `anduril-platforms` | content (612 / 865) | hairline, title 36px, uppercase line, grey link, 1.89:1 image | hairline; text left 42% (title top, uppercase line at the bottom), 4.25:1 image right | 2 images | rows fade in; hover turns the row black with grey text and shows the link (desktop) |
| 5 | news | `anduril-news` | content (608 / 745) | heading 2 lines + All Articles right; image first, then date, headline, excerpt, Read More | heading left / All Articles at the 50% line, hairline, text left half, 16:9 image right half | 1 image | image fades in on entering view; link underline re-draws on hover |
| 6 | editorial pair | `anduril-editorial` | content (648 / 842) | two bands stacked: olive then grey | two half-width bands side by side | 2 images | heading, link, image and big "part" label slide in from the left (−35 / −65px) with a fade; hairline draws from the left |
| 7 | footer | `anduril-footer` | content (534 / 727) | wordmark, four accordion rows (+), copyright and legal links | wordmark left; three link columns from the 50% line; copyright + legal bottom left, contact bottom right | – | link colour on hover |

Shared components: `anduril-wordmark` (lucide emblem + bold uppercase wordmark),
`anduril-link` (text + ↗ with an underline that re-draws on hover), `anduril-product-tile`
(media tile with scrim, name, tagline and arrow), `anduril-scramble` (text that decodes in),
`anduril-smooth-scroll` (Lenis).

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | scroll direction | bar translateY 0 → −72px (hidden) going down, back going up | 0.5s cubic-bezier(.215,.61,.355,1) | small scroll listener in the header (`hydrate: load`) toggling a data attribute; CSS transition |
| header nav | hover | label rolls up, its copy rolls in; opacity dips | 0.2s ease-out (transform, opacity) | two stacked copies in an `overflow-clip` inline-block; Tailwind `group-hover:` translate |
| page | wheel | smooth scrolling (Lenis) | – | `anduril-smooth-scroll` (lenis), used in page.tsx |
| hero | load / loop | caption decodes letter by letter, holds, fades | ~1s decode, 12s cycle | `anduril-scramble` (JS) + CSS keyframe loop on the caption |
| feature + bento tiles | entering view | opacity 0 → 1 | 1s cubic-bezier(.19,1,.22,1) | CSS `animation-timeline: view()`, `entry 0px → entry 260px` |
| tiles (phone) | entering view | tagline decodes (scrambled letters settle) | ~0.8s | `anduril-scramble` with `trigger="view"` (IntersectionObserver) |
| tiles (desktop) | hover | tagline + arrow open under the name (height, margin, opacity), tagline decodes | 0.5s cubic-bezier(.215,.61,.355,1) | grid-rows 0fr → 1fr + opacity; scramble `trigger="hover"` on the tile |
| platform rows | entering view | opacity 0 → 1, rows staggered | 1s expo-out | CSS view timeline, second row +40px later |
| platform rows | hover (desktop) | background → black, text → grey, link draws in | color 0.3s ease-out | Tailwind `group-hover:` |
| news image | entering view | opacity 0 → 1 | 1s expo-out | CSS view timeline |
| links | hover | underline re-draws from the left (scaleX 0 → 1) | 300ms | CSS keyframes in `anduril-link.css` |
| editorial | entering view | heading/link: opacity 0→1, translateX −35→0; image: −65→0; label: −35→0 later; hairline scaleX 0→1 from left | ~1s expo-out | CSS view timelines, staggered ranges, `overflow-x-clip` on the band |
| footer links | hover | colour → grey | 0.3s ease-out | Tailwind transition |

Not rebuilt: the fixed full-window `<canvas>` (WebGL page effect, scrubbed with the scroll):
it is media-like and invisible in every capture.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero film | video, cover, 1361×864 desktop (window height) / 390×810 phone | `bg-muted` surface filling the section below the bar, 2px corners |
| feature tile | video, 3:1 desktop / 1:1 phone | muted surface in the tile frame, scrim + label over it |
| bento tiles ×7 | photos/renders, 1:1, 1:2 (tall), 2:1 (wide) | muted surfaces in the tile frames |
| platform rows ×2 | renders 4.25:1 desktop / 1.89:1 phone | foreground/15 surface (reads on the grey band) |
| news image | 16:9 render | muted surface |
| editorial ×2 | illustrations 1.8:1 | current-colour/15 surfaces |

## Decisions

- Tokens: `background` near-black / `foreground` white (dark = faithful); `secondary` = stone
  grey band with black text; `card` = cream news band; `accent` = olive band with white text;
  `muted` = the dark surface for placeholders; `primary`/`highlight`/`glow` = lime.
- `--page-gutter: clamp(1.25rem, 2.2vw, 2rem)` gives 20px on phones and 32px at 1440, so the
  edge-to-edge layout needs no extra breakpoints; `--page-width: 120rem` (effectively full).
- `--radius: 2px` (`rounded-lg`).
- Header nav hover: the capture reports opacity 1 → 0.5 and a duplicated label ("Sea Sea"):
  read as a text roll with a dip; built that way.
- The hero caption (seen once, at 390, mid-scramble over the film) is optional; the demo
  passes one so the motion is visible. It shows for ~4s of every 12s.
- Desktop hides tile taglines and platform links until hover (as the original); phones
  always show them.

## Comparison round 1

Section crops of ours show CSS view-timeline reveals at their start (blank), so content was
judged on the scroll frames. Heights (orig → ours), 1440: hero 864 → 864, feature 474 → 479,
bento 1426+64 → 1502, platforms 612 → 618, news 608 → 615, editorial 648 → 651, footer 534 → 590.
390: hero 810 → 810, feature 368 → 368, bento 2518+56 → 2568, platforms 865 → 936,
news 745 → 769, editorial 842 → 835, footer 727 → 799.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | match (wordmark, two-line menu button) | match | hides on scroll down (frames show it gone) | – |
| hero | match: full-bleed, 96svh, caption decoding | match: gutter inset, 2px corners | caption loop + decode present | – |
| feature / bento | match (squares 6px apart, tagline + arrow) | match (3 squares, tall + 2:1, 18px gaps, ~96px black after) | fade-in on view; tagline decodes on view / on hover | – |
| platforms | ~70px too tall (pt 40 vs 33, image gap 48 vs 37) | kicker tracking looks wider than the original's | rows fade in; hover row inverts to black with grey text and draws the link, as the original | yes: tighter padding/gaps, tracking 0.04 → 0.02em |
| news | +24px, acceptable | match | image fades in | – |
| editorial | match | match (mid-slide frame matches the original's mid-slide) | slide-in −35/−65px, rule draws | – |
| footer | wordmark too big, accordion starts ~40px low, legal links at 24px line spacing (orig ~17px) | legal links too loose; long email overflowed its column (page 861px wide at 768, 1073px at 1024) | link colour hover | yes: phone-size wordmark, tighter accordion top, list line-height on the ul, email wraps anywhere |

## Comparison round 2

Heights now: 1440 footer 545 (534), 390 platforms 904 (865), 390 footer 710 (727). No horizontal
overflow at 360/768/1024. Hero still "sized by the window: 96%" at both widths, as the original.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| footer | match | sample email wrapped in its column; column labels sat above the wordmark's middle | – | yes: shorter sample email, columns 10px lower |
| platforms | ~40px taller than the original (Instrument Sans' kicker and title lines run slightly taller) | match | – | left as is |
| all | – | – | every inventory row shows in ours' Motion list (header hide, tile/row/image fades, editorial slides −35/−65px, link underline-in, caption loop); hover: row invert and footer link colour match | – |

Re-theme check: `anduril-platforms` (sample-ember light) and `anduril-products` (sample-ember
dark) render in that theme's fonts, colours and radius with nothing hard-coded.

What still differs: no nav dropdowns (the original's "Company +" and section menus open mega
menus not captured); the WebGL page canvas isn't rebuilt; media are placeholders.
