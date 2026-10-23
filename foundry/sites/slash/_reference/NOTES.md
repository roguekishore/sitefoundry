# Slash (slash.com) — recreation notes

Recreated as **Ferro**, a made-up business bank for founders (cards, accounts, treasury).
Landing page only (no other pages were asked for; precapture lists none).

## Design language

- **Palette roles.** Near-black page `#040406` (a cool, faintly blue black). Cards are a
  dark slate gradient (`#121317` → `#0b0c0e`, 201deg) with a hairline `#1c1d22` border and
  10px corners. White is the ink *and* the action colour (white pill buttons with near-black
  text). Secondary text is cool grey: `#acafb9` for section subs, `#9194a1` for links and
  labels, `#5e616e` for legal small print. One warm note: brushed gold for the stat figures
  (`#ae9357` → `#fff0cc` → `#ae9357`, 103deg) over an amber `#cd8939` glow, and copper
  `#cc9166` for article categories. The closing CTA fades from black to a warm umber.
- **Type scale.** A high-contrast display serif (IvyPresto) for every heading, with one
  word or phrase set in its italic ("A *strong* financial foundation"); Inter for all the
  rest. Desktop headings 88 / 64 / 52px, lines at ~1.0–1.12, no extra tracking; phones 36px
  (hero 32, quotes 24). Body 16/22 with -0.02em tracking, section subs 20px, card copy
  16–18px with a white medium-weight lead-in followed by grey text in the same paragraph.
- **Spacing rhythm.** Sections are separated by big top padding (~210px desktop, ~100px
  phone) and almost no bottom padding; heading → sub 24px, sub → cards 56px, cards gap
  12–24px.
- **Layout grid.** 1152px content column (144px margins at 1440), 20px gutters on phones.
  Pricing narrows to 960px. Centered headings for product sections; left-aligned for
  customers, pricing, FAQ, insights.
- **Shapes.** 10px cards, 12px video tiles, 8px article thumbs, full pills for buttons,
  chips and the CTA email field; the hero email field is a 10px box with a 6px white button
  inside.
- **Depth.** Flat: no drop shadows on cards; depth comes from the gradient card surface and
  the lit artwork. Header is a translucent black bar with a hairline under it.

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| IvyPresto Display (400 + italic) | high-contrast transitional display serif, sharp wedge serifs, calligraphic italic | normal, a touch narrow; small-to-mid x-height | **Newsreader Variable** (opsz axis, roman + italic) | open, has a display optical size (opsz 72) with similar contrast and a real italic; closer in width than Playfair (wider, bigger x-height) or Instrument Serif (condensed). Fraunces is too soft/wonky. |
| Inter | neo-grotesk sans | normal, large x-height | **Inter Variable** | the original uses Inter itself |

## Section map (landing)

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | announcement bar + nav (fixed) | `slash-header` | 36 + 56/64px, fixed | bar text truncated + link; wordmark + burger | centered bar; wordmark, 6 links (3 with chevrons) centered, Sign in + outline pill right | — | fixed; link hovers; to-top button fades in after one screen |
| 1 | hero | `slash-hero` | **100svh** at desktop; content at 390 (~830px) | rating chip, 32px headline w/ rotating word, sub, email box; media 390×459 below; caption + logo marquee | content left at y≈196, media full-bleed cover behind, caption + marquee at the bottom | full-bleed render (1440×900 cover; 390×459 at phone) | rotating word loop; logo marquee 45s |
| 2 | customers | `slash-customers` | content (760) | heading, sub, one 350×197 card (swipe for more), stats | heading left, 3 video tiles 578/263/263×350 (hovered grows), stats row + tag + "read story" | 3 video tiles 12px | hover: tile grows (flex 0.7s), others grey 60% + 70% opacity |
| 3 | foundation | `slash-foundation` | content (1502) | centered 36px heading, cards stacked | centered 88px heading, 2 cards 570×443 + 1 full 1152×418, disclaimer | 3 card renders | — (cards static) |
| 4 | capabilities | `slash-capabilities` | content (930) | stacked cards | 3 cards 368×418 | 3 card art (canvas) | — |
| 5 | quotes | `slash-quotes` | content (584) | 24px quote, avatar row, dots | 52px quote max ~830, avatar row, dots | avatars | loop: quotes cross-fade with a 16px rise; dots follow |
| 6 | stats | `slash-stats` | content (199) | 2×2 centered | 4 in a row, centered | — | — (gold gradient text, amber glow) |
| 7 | tools | `slash-tools` | content (1326) | stacked cards | 88px heading; row 323/482/323 + row 570/570 | 5 card art | — |
| 8 | security | `slash-security` | content (929) | accordion, the open item's art inside it | art 480×444 left, accordion right | 1 art per item | accordion open/close; chevron flips |
| 9 | pricing | `slash-pricing` | content (928) | stacked plans | 52px heading left in 960 column, rule, 2 plans | — | button hovers |
| 10 | investors | `slash-investors` | content (456) | label, rows clipped at both edges | label, 3 + 4 names centered | — | — |
| 11 | FAQ | `slash-faq` | content (609) | heading, sub, list | heading left 4/12, list right 7/12 with rules | — | accordion |
| 12 | insights | `slash-insights` | content (935) | heading, track of 320-wide cards bleeding right, arrows under | heading + arrows right, track of 340-wide cards bleeding to window edge | 8 thumbs 16:9, 8px | arrows scroll the track (smooth) |
| 13 | CTA | `slash-cta` | content (602) | 36px heading, pill email field | 64px heading, 520-wide pill field | — | — (black → umber gradient) |
| 14 | footer | `slash-footer` | content (1442) | wordmark, 2-col link groups, badge + socials, legal | wordmark + 5 columns, copyright row with socials + store badge, rule, footnotes | — | link hovers |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scroll (fixed) | bar + nav stay at the top | — | `position: fixed` |
| header | scrolled past one screen | to-top button: opacity 0→1, rise 16px→0 | short | CSS `animation-timeline: scroll()` over 70–100vh, in `@supports` |
| header / footer / links | hover | white → grey `#9194a1`; outline pill border `#464853` → `#9194a1`; white button bg → `#c7c9d1`; "Learn more" arrow nudges 4px right | 150ms `cubic-bezier(.4,0,.2,1)` | Tailwind `transition-colors duration-150` + `group-hover:translate-x-1` |
| hero | loop | the last word of the headline slides up to the next word (3 words) | ~2.5s per word | CSS `@keyframes` on a stacked word list (translateY by one line) |
| hero | loop | logo row scrolls left forever | 45s linear | CSS marquee keyframes, list doubled |
| customers | hover | hovered tile grows (flex 1→2.2), others greyscale 60% + opacity 70% | 700ms `cubic-bezier(0,0,.2,1)` | CSS `:has(:hover)` in the block's `.css` |
| quotes | loop | the quote cross-fades: out with drop 16px, in with rise 16px→0; dots widen | ~6s each | CSS `@keyframes` with per-item delays |
| security / FAQ | click | accordion item opens, chevron flips | 200ms | React state (`hydrate: visible`), grid-rows transition |
| insights | click | arrows scroll the track by one card | smooth | `scrollBy` in a click handler (`hydrate: visible`), CSS scroll-snap |
| hover zooms | hover | small `scale-[1.02]` on article thumbs | 300ms | Tailwind |

Skipped: the hero's video (placeholder), the capabilities canvases (placeholders), a fixed
legal pop-up that fades out after one screen (site chrome, not design).

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero render | 1440×900 cover (window), 390×459 on phones | `slash-placeholder` "lit" tone: soft grey light from the upper right fading to the page, full-bleed |
| customer videos | 578/263×350, r12 | dim slate surface + bottom black gradient for the caption |
| avatars | 32–40px circles | dim circle |
| foundation / capabilities / tools / security art | card top areas, r10 | "card" tone: faint glow wash inside the card |
| article thumbs | 340×192, r8 | dim surface 16:9 |

## Decisions

- Header + announcement bar in one block (they are one fixed unit in the original).
- The customer tiles grow on hover (CSS) instead of the original's timed rotation; static
  HTML shows the first tile large.
- Logos (customers, investors) are plain-text fictional names, styled as a muted silver
  wordmark row.
- Shared pieces as components: `slash-placeholder`, `slash-heading` (serif heading with an
  italic run + sub), `slash-button` (white / outline pills), `slash-email-field` (box and
  pill variants), `slash-feature-card` (card with art slot and copy).
- Section top padding: `pt-section` on phones, `2 × --section-y` at `lg`.
