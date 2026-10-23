# lithic — recreation notes

Original: https://lithic.com/ (precaptured 2026-10-23; landing page only, no other pages asked for).
Fictional stand-in company: **Corvane**, a card-issuing and payments API. All copy is ours.

## Design language

- **Palette roles.** White page, black ink. One hot orange (`#f60`) for the main actions only.
  Each band gets its own pale tint, all of them washes of a brand colour: faint bronze
  `#f6f3ee` (trust cards, testimonial cards), mint `#ebfef6` (the sandbox strip, developer
  band), lavender `#f6f1fe` with a deep amethyst `#5c2999` ink (the platform tabs), peach
  `#fff2ed` (closing CTA). Two big **black rounded panels** (hero, services) carry white type, a
  light-bronze `#eec07a` accent and `white/10` glassy cards. Secondary text is a flat grey
  `#888`; card sub-lines on bronze surfaces are dark bronze `#665233`.
- **Type.** One grotesk for everything, only two weights (400 body, 500 everything else), tight
  heads (-0.02em). Scale: h1 64/1 (40 on phones), h2 32/1.2 (24), h3 24/1.2 (20), h4 20/1.2
  (16), lead 24/1.4 (16), body 16/1.4 (14), small 14/1.4.
- **Spacing rhythm.** Content column 1184px (128px side margins at 1440, 20px on phones).
  Sections are separated by ~80px; card gaps are 24px; card padding 40px (24 on phones).
- **Layout grid.** Centred heads over full-width rows; the trust bento is two rows of unequal
  pairs (702+458, 380+780). Dark and coloured "panels" are rounded 24px boxes inset 24px from
  the window edge (hero, services, developer band, CTA) or sitting in the 1184 column
  (trust cards, sandbox strip, tabs).
- **Shapes.** 24px radius on every panel and card, pills (160px) on every button, 16px on
  small things. Hairline 1px `white/10` borders on dark cards.
- **Depth.** Almost flat. Only the floating UI cards inside the tabs visual carry a soft
  `0 16px 32px black/10`. The signature texture is thin **contour lines** (concentric rings)
  in each band's own colour.

## Type

| Original | Classification | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| ABC Monument Grotesk (400, 500) | grotesque / neo-grotesk, slightly squared bowls, flat terminals | normal | medium-high | **Host Grotesk** (`@fontsource-variable/host-grotesk`, already in the workspace) | closest open neo-grotesk on width, x-height and the flat, slightly squarish 500; not a default face |
| — (code only, inside media) | mono | | | DM Mono (`@fontsource/dm-mono`) for `--typeface-mono` | a plain open mono; the original shows mono only inside screenshots |

## Section map

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | top bar | `lithic-header` | content (72 / 65) | wordmark · dark "Dashboard" pill · burger | wordmark + 4 nav links left; "Contact us" + dark pill right | — | hover colour |
| 2 | hero | `lithic-hero` | content (640 / 804), not window-sized | black panel inset 20px, centred 40px head over 4 lines, lead, two stacked pills | black panel inset 24px, centred 64px head on 2 lines, 24px lead, two pills side by side | full-panel background artwork → placeholder wash | button hover |
| 3 | logos | `lithic-logos` | content (254 / 310) | marquee of wordmarks | 32px centred head, marquee 1184 wide with faded edges | logos → plain-text fictional names | marquee loop 45s |
| 4 | trust bento | `lithic-trust` | content (659 / 464) | four stacked bronze cards | 2 rows: 702+458, 380+780, 220 tall | ISO badge 112×140 → circle placeholder; network + investor logos → text names | — |
| 5 | sandbox strip | `lithic-shortcut` | content (291 / 204) | mint card, head then 3 links stacked | mint card 124 tall: head left, 3 arrow links in a row | — | link hover orange |
| 6 | platform tabs | `lithic-platform` | content (958 / 770) | 32px head; lavender card: 2×2 tab grid on top, text, visual below, ring bottom-right | lavender card 500 tall: text left, visual centre, tab list right (24px), progress ring bottom-right | three stacked UI cards (259×139, 333×77, 259×103, r 21.6) → three white rounded placeholders | autoplay tabs + ring progress |
| 7 | services | `lithic-services` | content (1971 / 1286) | black panel; centred text, phone visual, centred head, five stacked cards | black panel: text left + phone visual top-right bleeding; centred head; 2 wide cards, 3 narrow cards | phone 736×524 (1.40) → placeholder | card hover bg white/10→/20 |
| 8 | testimonials | `lithic-testimonials` | content (616 / 752) | intro left (~190px), card peeking in from the right, arrows below | intro left 282px, cards 576×384 running off the right edge, arrows under the right end | avatar 48px → circle placeholder; customer logo → text | carousel (arrows) |
| 9 | developers | `lithic-developers` | content (614 / 514) | mint panel: head, text, two links stacked, visual at the bottom bleeding right | mint panel inset 24: text left, visual 700×434 bleeding off right and bottom | screenshots → one dark rounded placeholder (1.61) | link hover |
| 10 | closing CTA | `lithic-cta` | content (262 / 330) | peach panel, 24px head left, pill below | peach panel inset 24, 282 tall: head and pill centred in one row | — | button hover |
| 11 | footer | `lithic-footer` | content (1056 / 396) | 2-column link grid, wordmark, legal, socials | 6 link columns; bottom row wordmark · centred legal · socials | — | link hover grey→black |

The cookie banner (fixed bottom-left) is consent chrome, not design: left out.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| logos | loop | marquee track translateX 0 → -50% | 45s linear infinite | CSS `@keyframes lithic-logos-marquee` in the block's css; off under reduced motion |
| platform tabs | loop (timer) | active tab advances; ring fills 0→360° | ~6s per tab (inferred: ring was mid-fill) | React state + interval (`hydrate: visible`); ring is a CSS conic progress keyed to the tab; content fades in 0.25s ease; no autoplay under reduced motion |
| services cards | entering view (inferred: crop showed cards mid-reveal as grey boxes) | fade + rise 24px | ~0.6s | CSS `animation-timeline: view()`, `entry 0px → entry 220px` |
| trust card (ISO / logos) | entering view / scrubbed | the original crossfades three security badges as you scroll | 450–4050px scroll | the badge is media: placeholder stays still (skipped) |
| testimonials | click | track slides one card | swiper ~0.3s | native horizontal scroll-snap track + arrow buttons calling `scrollBy({behavior:"smooth"})` (`hydrate: visible`) |
| header links | hover | colour → black / near black | 0.3s cubic-bezier(.215,.61,.355,1) | `transition-colors duration-300 ease-[cubic-bezier(.215,.61,.355,1)]` |
| hero secondary pill, arrow links | hover | text colour → orange | 0.2s | `transition-colors duration-200 hover:text-primary` |
| services cards | hover | bg white/10 → white/20 | 0.2s ease | `transition-colors duration-200 hover:bg-foreground/20` |
| footer links | hover | grey → black | 0.2s | `transition-colors hover:text-foreground` |

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero artwork | full-panel image of falling cards and contour lines | the black panel with a soft bronze radial wash (`lithic-placeholder tone="dark"`) behind the type |
| trust badge | 112×140 ISO seal (contain) | 112px circle, `bg-foreground` |
| platform visual | three floating UI cards | three white rounded panels (r 21.6) of the same sizes with the same soft shadow |
| services phone | 736×524 render, bleeding off the top-right | a rounded dark-grey placeholder of the same size and place |
| testimonial avatar | 48px photo | 48px circle `bg-foreground/10` |
| developer visual | code window + dashboard + card (700×434) | one dark rounded frame of that size, bleeding right and bottom |

Network, customer and investor logos become plain-text names of fictional firms (set in the
theme font with small style changes: caps, tracking, weight).

## Decisions

- **Contour lines** are Lithic's texture. We keep the idea (thin rings in each band's own
  colour) as a small CSS-only `lithic-contours` component built from a `repeating-radial-gradient`
  in `currentColor`; it isn't their artwork and reads as a generic pattern.
- **Dark panels in a light theme:** the hero and services blocks put `dark` on their panel so
  they read the theme's `.dark` colours (black, white ink, bronze-gold highlight) in either mode.
- Tints map to tokens: faint bronze = `muted`, mint = `secondary`, lavender = `accent` with
  amethyst `accent-foreground`, peach = `primary/7` (orange at 7% on white is `#fff2ed`),
  dark bronze sub-lines = `highlight` (gold `#eec07a` in `.dark`).
- The "Dashboard" pill is `#261e12` (darkest bronze); we use `foreground` (black). Too close to
  matter and it stays a token.
- On phones the original keeps the testimonial intro beside a card that peeks in from the
  right (the card starts at x=308). We keep that, as captured.
