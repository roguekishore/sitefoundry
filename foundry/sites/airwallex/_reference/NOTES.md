# Airwallex recreation: notes

Landing page only (no other pages asked for; `precapture.json` lists none). The original was
captured in advance; it was never opened from this machine.

Fictional company for the content: **Fernhold**, a global business-finance platform
(multi-currency wallets, company spend, collecting payments, invoicing, build APIs). Copy is
our own, in the original's voice and length; customer names and publications are made up.

## Design language

- **Palette:** white page with near-black ink `#1A1D21`; two greys for text (`#42474D` body,
  `#545B63`/`#878E99` quieter). One brand violet `#612FFF` for every action (filled buttons,
  text links, highlighted hero words), hover a lighter `#7043FF`. Brand orange-red `#FF4F42`
  in the logo mark. Pale lavender `#F0EFFF` for the announcement bar, cool grey `#F6F7F8` for
  the footer and fields. Two dark bands (`#1F2225` page, `#2F3237` panels) for the product
  universe and the customers reel. Five saturated 135° gradients, one per product family:
  orange (`#FF4F42→#FF8E3C`), violet→magenta (`#612FFF→#D200A3`), blue→purple
  (`#072FFF→#8415F3`), teal→blue (`#0BE2D6→#0558FA`), magenta→red (`#E31AB6→#F80F55`); the
  stat numbers reuse them as gradient text.
- **Type:** one geometric sans everywhere (LL Circular) in 400/500/700. Display 48px/60 hero,
  40px/50 section heads, 700; at 390 they drop to 24px and 28px/35. Body 16/24 (desktop),
  14–16 on phones; 20/30 hero lede; 14px caps eyebrows with 0.4px tracking.
- **Spacing rhythm:** generous: ~120px above and below content in light bands at 1440,
  ~80px at 390. Two content widths: nav/hero/solutions/universe span 1344px (48px gutters);
  the feature rows, network, customers heading, CTA and footer sit in a narrower 1120px
  column (160px in from the edge). 24px phone gutter (16px in the footer).
- **Shapes:** 6px radius on buttons and the email field, 16px on the product cards and dark
  panels, full pills for the product tabs. Hairline `#E8EAED` borders.
- **Depth:** mostly flat; floating UI shots carry `0 4px 16px rgb(0 0 0 / 12%)`; cards lift
  with `0 2px 12px rgb(0 0 0 / 12%)` and scale 1.01 on hover.

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| AxLLCircular (LL Circular) 400/500/700 | geometric sans, normal width, round bowls, fairly large x-height, single-storey `a` absent (Circular has a double-storey a) | **Figtree Variable** | the closest open geometric with Circular's friendly round forms and similar x-height; already installed. Weights kept at 400/500/700 (Figtree's 700 is close to Circular Bold; no step-up needed) |
| IBM Plex Mono 400 | mono | **IBM Plex Mono** (`@fontsource/ibm-plex-mono`, installed) | the same open font |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement + nav | `airwallex-header` | content (49+56 / 40+80) | lavender bar, 2-line text + close; nav: wordmark, small violet button, burger | bar centred one line; nav: wordmark, 4 links, language chip, Log in, outline See demo, violet Get started | – | sticky (both bars) |
| 2 | hero | `airwallex-hero` | content (686 / 597) | stacked: h1 24px, lede, field, full-width button, consent; device shot below | 2 columns: text 500px left; 800×533 device shot right, bleeding to the edge; 3 dots under it | 1 carousel of 3 device shots (800×533) | crossfade loop + dot progress |
| 3 | trust line + logos | `airwallex-logos` | content (195 / 191) | 2-line bold line, logos marquee | 1-line bold line, logos marquee with edge fades | – (logos → text names) | marquee loop 30s |
| 4 | why / solutions | `airwallex-solutions` | content (2188 / 838) | eyebrow, h2 28px, para, 5 stacked gradient cards (~312px) | eyebrow, h2 40px, para, 5 gradient cards in a row (256×356) | 5 card screenshots (224×167) | hover lift; reveal on entering view |
| 5 | product universe (dark) | `airwallex-universe` | content (1072 / 1359) | h2, sub, accordion of 5 pills; open one shows a swipe row of cards | h2, sub, 5-tab pill bar; panel: intro + phone left, bento of 3 cards right | phone (284×550), 3 card shots | tab/accordion switch; card hover "Learn more" |
| 6 | edge statement | `airwallex-statement` | content (414 / 312) | centred h2 + para | centred h2 + wide para | – | – |
| 7–9 | feature rows ×3 | `airwallex-feature` | content (677/642/642 / 494) | text, shot, full-width button | shot left / text right, alternating | 1 shot each (≈470×350) | – |
| 10 | local network + stats | `airwallex-network` | content (1034 / 734) | h2, para, 4 stacked stats | text left, globe canvas right (bleeds off the edge), 4 stats in a row | globe canvas (≈560 square) | – (canvas spins: media) |
| 11 | customers (dark) | `airwallex-customers` | content (742 / 994) | h2, swipe row of quote cards (quote on top, photo below) | h2, two rows of 452×314 photo cards drifting left | photo per card | marquee loop 96.8s; hover zoom 1.05 |
| 12 | apply CTA | `airwallex-cta` | content (409 / 430) | centred h2, sub, full-width button | h2 + sub left, 240px button right | – | – |
| 13 | footer | `airwallex-footer` | content (1609 / 912) | wordmark, 2 store badges, 2 columns of link groups, legal | wordmark + badges row, 5×2 grid of groups, rule, copyright + socials, legal | – | link hover colour |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scroll | announcement bar and nav stay at the top | – | one `sticky top-0` wrapper around both |
| header | hover | text links → violet; See demo bg → violet 3%; Get started → lighter violet | 0.25s ease | `transition-colors duration-250` + `hover:` |
| announcement | hover | link underline grows from 0 to full width (background-size 0→100% 2px) | 0.2s ease | background-image underline + `hover:bg-size-[100%_2px]` |
| hero | loop | 3 device shots crossfade; the active dot is a wider pill that fills | ~5s per slide | CSS `@keyframes` 15s, three staggered delays (slides and dots share the cycle) |
| hero | hover | "Take a product tour" chevron nudges 4px right | 0.3s ease | `group-hover:translate-x-1` |
| logos | loop | row scrolls left forever, faded at both edges | 30s linear | CSS `@keyframes` translateX(-50%) on a doubled list; mask-image fades |
| solutions | entering view | cards fade in and rise (captured as opacity changes on the card text) | ~0.3s each, staggered | CSS `animation-timeline: view()`, range offset per card |
| solutions | hover | card scales 1.01 and gains `0 2px 12px` shadow | 0.3s | `transition-[transform,box-shadow] duration-300 hover:scale-[1.01] hover:shadow-…` |
| universe | click | tab pill fills with the product's gradient; the panel swaps (phones: accordion opens) | instant | React state; `hydrate: "visible"`; static HTML shows the first tab |
| universe | hover | card's arrow grows a "Learn more" label | 0.3s ease-out | `group-hover:` max-width + opacity |
| customers | loop | two rows of photo cards drift left; row 2 offset | 96.8s linear | CSS `@keyframes` on doubled rows (the capture's "scrubbed translateX" is this loop sampled over time) |
| customers | hover | photo zooms 1.05; quote fades in over it (desktop) | 0.3s ease | `group-hover:scale-105`, `group-hover:opacity-100` |
| footer | hover | link text → violet | 0.25s | `hover:text-primary` |

Not rebuilt: the globe canvas's own spin and the device screenshots' inner animation (media);
the cookie banner (not part of the design).

## Media slots

- hero: 3 device shots in one 800×533 frame (3:2) → `airwallex-placeholder` (soft muted
  surface) per slide; slot props `slides`.
- solutions: 5 product screenshots peeking up from each card's bottom (224×167, white,
  6px top radius) → a white-at-85% surface.
- universe: phone (284×550, 40px radius, dark bezel) and 3 card shots → muted surfaces.
- feature rows: 1 composite shot each (≈470×350) → placeholder with the floating-card shadow.
- network: the globe canvas → a square muted placeholder, bleeding off the right edge, hidden
  on phones as in the original.
- customers: a photo per card (452×314 desktop, 293×205 phone) → muted placeholder.
- logos and customer logos → plain-text names.

## Decisions

- The dark bands put `dark` on the section so they read the theme's `.dark` colours, as the
  original keeps them dark on a light page; under another theme they use that theme's dark.
- The five product gradients map onto tokens: highlight→chart-1 (orange), primary→chart-2
  (violet→magenta), chart-3→chart-4 (blue→purple), chart-5→chart-3 (teal→blue),
  chart-2→destructive mix (magenta→red). Blocks pick a `tone` per item.
- The universe tabs reuse each product's tone for the active pill (the capture shows only the
  first, orange, active).
- Desktop customer cards show the quote on hover (the capture finds it hidden at rest; the
  phone layout shows it above the photo). Rows pause on hover so the quote can be read
  (a choice of ours).
- The app-store badges become plain dark pills with text (no store logos).

## Comparison round 1

Heights (original → ours), 1440: hero 597 → 633, logos 191 → 197, solutions 838 → 850,
universe 1359 → 1366, statement 312 → 324, rows 494 → 475, network 734 → 766, customers
994 → 954, CTA 430 → 416, footer 912 → 1005. 390: hero 686 → 691, solutions 2188 → 2053,
universe 1072 → 1097, rows 677/642/642 → 666/642/642, network 1034 → 1038, customers 742 →
764, CTA 409 → 374, footer 1609 → 1822. All window-independent in both (no section is
"sized by the window" in the original).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | – | at 1024 the row overflowed (page 1059px): links, language chip, Log in and two buttons don't fit | sticky ✓, hover colours ✓ | yes: tighter gaps at lg, language and Log in from xl |
| hero | email field collapsed to ~20px (flex-1 in a column) | lede 22px too low (48px gap vs 40), section 36px taller | crossfade + dot loop ✓ | yes: flex-1 only at lg, lede gap 40px, less bottom padding |
| logos | ✓ | ✓ | marquee 30s ✓ | – |
| solutions | ✓ (cards ~10px shorter each) | ✓ | rise on entering view ✓ (shows as reveal 0→1, 32px), hover scale 1.01 + shadow ✓ | – |
| universe | ✓ | lower cards' captions sat at different heights (bottom-aligned); original starts them 300px down | panel fade ✓, Learn more grow ✓ | yes: captions start after the shot |
| statement | ✓ | ✓ | – | – |
| feature rows | ✓ | ✓ | – | – |
| network | ✓ | globe slot smaller and higher than the original's (which runs past the band's bottom); caption 7px too far below the figure | – | yes: 800px slot from the top edge; 12px gap |
| customers | ✓ | ✓ | two drifting rows ✓ (loop 96.8s), hover zoom + quote ✓ | – |
| CTA | 35px shorter | ✓ | – | – |
| footer | 213px taller | 93px taller: links spaced 38px vs 31.5px (inherited 24px line) | hover violet ✓ | yes: links set at 14px/1.3 |

## Comparison round 2

Heights now (original → ours), 1440: hero 597 → 621 (→ ~601 after the dot fix below), logos
191 → 197, solutions 838 → 850, universe 1359 → 1366, statement 312 → 324, rows 494 → 475,
network 734 → 762, customers 994 → 954, CTA 430 → 416, footer 912 → 930. 390: hero 686 →
702, solutions 2188 → 2173, universe 1072 → 1097, network 1034 → 1038, customers 742 → 764,
footer 1609 → 1682 (our link lists are the same length; the gap is our longer group names
wrapping). No horizontal overflow at 360, 768 or 1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | ✓ | ✓, fits at 1024 now | ✓ | – |
| hero | ✓ (lede runs 3 lines: our copy is longer) | lede 20px lower than the original; the device frame sets the band's height, with the dots 16px under it where the original tucks them into the image's bottom margin | ✓ | yes: lede gap 32px, dots 6px under the frame |
| solutions | cards were 312px against the original's ~336px | ✓ | ✓ | yes: 336px cards on phones |
| universe | ✓ | ✓ (lower captions aligned) | ✓ | – |
| network | ✓ | ✓ globe slot in place, bleeding past the band's bottom like the original | – | – |
| rest | ✓ | ✓ | ✓ | – |

Re-theme check: `airwallex-solutions` (sample-ember, dark), `airwallex-network` and
`airwallex-universe` (sample-ember, light) all take the other theme's colours and fonts;
the gradients become ember's chart colours, the universe band reads ember's dark scope.

Stopping here: each section pair reads as the same design at a glance (apart from copy and
the placeholders), the motion list matches the inventory (hero crossfade and dots 15s loop,
logos 30s marquee, solutions view-timeline rise, universe panel fade and Learn-more grow,
customers 96.8s drift, hover lifts and colour changes).
