# Paxos — recreation notes

Source: https://paxos.com/ (captured in advance, landing page only; no other pages asked for).
Fictional company used in the content: **Keelstone** (a regulated ledger / tokenisation trust
company), partner **Tillwave** (a payments app). No text, logos, art or video from the original.

## Design language

- **Palette roles.** White page. Ink is a deep blue-green slate `#19282f` (headings, body,
  the solid pill buttons). Secondary text is a neutral grey `#828385`; card body copy a
  darker slate grey `#43494e`. Media frames sit on a cool pale grey `#e9ebef`; asset cards
  on a near-white blue-grey `#f6f8fb` (at 40%) with a 1px pale hairline. Two soft brand
  lights wash the hero card and the closing band: a pale aqua-cyan (from `#0094d8`) at the
  top-left and a lime (`#a1d62c`) at the bottom-right, both at very low strength.
- **Type scale (1440 / 390).** Hero 64/66 → 35/38; section titles 48/54 → 28/34; card and
  timeline titles 32/38 and 24/30 → 24/29 and 20/21; leads 18/24; body 16/22–23 → 14.4/19;
  footer 12/22, footer heads grey. Weight 400 almost everywhere (titles too), 500 only for
  the ticker wordmarks and small labels. Tight negative tracking on all titles (-0.01 em).
- **Spacing.** 100px side margin at 1440 (content 1240px), 20px at 390. Sections breathe
  with ~120px vertical room; inside cards 20–30px padding. Gaps between grid cards are tight
  (10px) on the asset row, wide (120px) between the two product cards.
- **Grid.** 12-col feel: hero text 5 cols over an art slot that bleeds right; product cards
  2×; asset cards 4×; timeline 3×; regulation 2× (text | image).
- **Shapes.** 8px radius on every frame (hero card, image frames, asset cards, video);
  pills (fully round) on all buttons, 32–34px tall. No shadows anywhere; depth comes only
  from pale fills and 1px hairlines.

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Feature Deck (titles) | neo-grotesk display, slightly quirky | normal width, tallish x-height | **Hanken Grotesk Variable** (400) | closest open neo-grotesk with normal width and tall x-height; flat terminals, single-storey feel at display sizes. Already installed. |
| Geist (body, UI; ×88, the main computed face) | neo-grotesk/geometric sans | normal, tall x-height | **Geist Variable** | the original's own face, open licence, installed |
| Geist Mono (loaded, little visible use) | mono | — | **Geist Mono Variable** | same family |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header (sticky, 80/102px band) | `paxos-header` | content (≈80 / 102px) | wordmark + menu button | wordmark · 5 nav items centred · pill CTA | — | hides (up 100px, fade) once scrolled past ~450px, returns on scroll up |
| 1a | hero card | `paxos-hero` | content (550px card at 1440, ~570 at 390) | centred title/lead/button, art slot below, cropped by card | 8px-radius gradient card, text left 5 cols, art slot right bleeding to bottom | art 1161×540 (cover) — placeholder | none (static) |
| 1b | "trusted by" logo row | `paxos-logos` | content (~74px) | label hidden, marquee | label left, marquee of 6 names | — | marquee loop, 54.6 s at 1440 / 19.8 s at 390 |
| 2 | product pair | `paxos-products` | content (934 / 1461) | title left 28px; cards stacked, image 350×400 | centred 48px title; 2 cards, images 560×400 on `#e9ebef` | 2 product renders, square art inside grey frame — placeholder | none |
| 3 | asset cards | `paxos-assets` | content (819 / 1665) | left title, 4 stacked cards, banner stacked | centred title + grey lead; 4 cards 302×360 in a row; full-width banner card | token marks → lucide icon in a coloured disc + ticker text | link colour transitions |
| 4 | regulation | `paxos-regulation` | content (841 / 1088) | title, lead, image 350×180, then 3 timeline entries stacked | text left / image 559×400 right; 3-col year timeline with hairlines | 1 image — placeholder | none |
| 5 | partner film | `paxos-partner` | content (1016 / 484) | lockup, left 24px title, video 350×199 | lockup, centred 48px title, video 992×565 | video → placeholder with a play glyph | none |
| 6 | closing band | `paxos-cta` | content (534 / 305) | left aligned title + 2 pills | full-bleed gradient wash, centred 32px title + dark/outline pills | backdrop image (soft gradient) → token gradient | none |
| 7 | footer | `paxos-footer` | content | newsletter first, then 2-col link groups, wordmark, legal | hairline; 5 link columns + newsletter right; big wordmark + socials + legal | — | link colour transitions |

The cookie banner (fixed, bottom) is not part of the design and is left out.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scroll down past ~450px / scroll up | translateY 0 → -100px, opacity 1 → 0 | ~0.3 s ease | small `useEffect` scroll listener toggling a data attribute; CSS transition; `hydrate: load`. Static HTML shows the bar. |
| logo row | loop | translateX of the list, linear, forever | 54.6 s (1440), 19.8 s (390) | CSS `@keyframes` on a doubled list (`-50%`), duration a prop; paused under reduced motion |
| links / nav | hover | colour change | 0.4 s cubic-bezier(0.44,0,0.56,1) | Tailwind `transition-colors duration-[400ms]` |
| pill buttons | hover | (Framer default) slight fade | 0.15 s ease | `hover:opacity-85`/`hover:bg-*` transition 150ms |

Nothing else moves on the original: no scroll reveals were seen in the frames or in the capture.

## Media slots

- hero art (stacked glass cubes) → `media` prop; placeholder = a soft `glow`/`highlight`
  wash block at the art's place and size (right 46% of the card, bottom aligned).
- product renders (2) → `media` per card; placeholder = `bg-muted` frame 560×400 radius 8.
- regulation image → `media`; placeholder = deeper gradient surface 559×400 radius 8.
- partner video → `media`; placeholder = `bg-foreground/80` frame with a play icon, aspect 1.75.
- closing band backdrop → built from tokens (soft glow/highlight gradient), `backdrop` prop can replace it.

## Decisions

- The header was not visible in the original's captures (the space was empty at 1440 and
  390); its nav names come from the capture's sticky element ("Products Assets Company
  Transparency Developers"). Layout inferred: wordmark left, nav centre, pill right.
- The logo row is its own block (`paxos-logos`) so it can be reused; customer logos are
  plain-text fictional names.
- Token wordmarks on the asset cards are design-relevant chrome (an icon disc + bold
  ticker) so they are built with lucide icons and chart colours, not drawn logos.
- Footer: link groups as props; the original's large logo becomes an icon + wordmark.
