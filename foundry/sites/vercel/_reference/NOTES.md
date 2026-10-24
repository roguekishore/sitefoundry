# Vercel (https://vercel.com/): recreation notes

Captured in advance (precapture.json); the original was not opened from this machine.
Landing page only (no other pages asked for).

Fictional company: **Halyard**, a cloud for agents and the apps they build. Customers in the
case studies are made up too (Pagewright, Relaylane, Docksmith), and so are the logo names.

## Design language

- **Palette:** near-monochrome. Page `#fafafa`, raised windows and buttons `#ffffff`, ink
  `#171717` for headings, primary buttons and links that matter; body/secondary text
  `#4d4d4d`; faint text `#8f8f8f`; hairlines `#ebebeb` (cards `#e6e6e6`). One blue
  (`#0070f3`) used once, on the status line in the footer; a light blue (`#52aeff`) only in
  artwork. Primary button hover lifts to `#383838`, white button hover to `#f2f2f2`.
- **Type:** one grotesk (Geist) everywhere plus Geist Mono for the phone hero's rotating line
  and the status line. Big headings are tight: 64px/64px (hero), 56px/56px at −0.06em;
  phones 48px and 32px/40px at −0.05em. Statements 24px/32px at −0.04em in two tones (lead
  in ink, rest in grey). Everything else is 14px/20px; feature links 14px medium with
  +0.2px tracking. Weights: 400 body, 450 statements, 500 headings/links/buttons.
- **Spacing:** a 24px gutter on every width, content full-bleed to 1392px at 1440. Sections
  are spaced by ~240px of air at 1440, ~100–200px on phones. Lists breathe at 28px a line.
- **Layout grid:** hero is three zones (text left, media centred under it, a 360px column
  on the right). Case studies alternate: a 921px media column against a ~333px text column,
  the heading above the media. "Recently shipped" is a 2-column bento (one tall card, two
  stacked). Footer is a 6-column link grid (2 columns on phones).
- **Shapes:** pill buttons (fully round) in the hero and CTA; 6px buttons in the header;
  8px/6px windows; bento cards 6px with a 1px `#e6e6e6` border and no fill change.
- **Depth:** almost none: 1px rings (`0 0 0 1px rgba(0,0,0,.08)`) and a 2px soft drop on
  windows; media windows fade into the page at their bottom (gradient to `#fafafa`).

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| GeistSans (variable 100–900) | neo-grotesk, geometric leanings | normal | tall | **Geist Variable** (`@fontsource-variable/geist`) | the original's own open-licence (OFL) face; already in the workspace |
| Geist Mono | monospace grotesk | normal | tall | **Geist Mono Variable** (`@fontsource-variable/geist-mono`) | same family, OFL |
| GeistPixel* | pixel display | — | — | not used | loaded but not seen on the landing page |

Geist is allowed here because the original uses it.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `vercel-header` | 64px, sticky | mark left, two-line menu button right | mark, 4 nav items (2 with chevrons), 3 buttons right (demo, log in, sign up) | — | sticky; hairline under it appears once the page scrolls; link/button hover |
| 2 | hero | `vercel-hero` | 1440: **sized by the window** (`100svh − 64px`, 836 of 900); 390: content (~700) | 390×400 media on top, centred 48px title, mono rotating line, two full-width pill buttons, logo marquee | title + two pills left, 1080×720 media centred behind, three-line list in a 360px right column, 7 logos spread along the bottom | hero art (WebGL canvas) 1080×720 / 390×400 | phone line cycles 3 phrases (200ms fade); phone logo marquee 40s loop |
| 3 | case: agents | `vercel-case` (align start) | content (~930 pitch) | heading, 2 overlapping windows, statement, features | heading top-left (≈430px wide), media 921 left, text column right (from 1083) vertically centred | front window 535×450, back window behind-left | none of its own (media internals only) |
| 4 | case: apps | `vercel-case` (align end) | content | same as 3 (two windows) | heading + media on the right (from 496), text column left | one 921×516 window (two on phones) | — |
| 5 | case: platforms | `vercel-case` (align start) | content | same as 3 | as 3, one window | one 921×516 window (two on phones) | — |
| 6 | recently shipped | `vercel-shipped` | content (926) | heading, 3 stacked cards | heading, bento: tall card left (686×580), two 280px cards right | corner art 112² (tall card), right-side art in the other two (685×280 canvas) | card border hover (inferred) |
| 7 | closing CTA | `vercel-cta` | content (688) | centred 32px heading on 2 lines, two pills stacked | centred 56px heading, two pills in a row | — | copy button swaps its label (200ms fade) |
| 8 | footer | `vercel-footer` | content (846 / 1958) | 2-column link groups | 6 columns × 2 rows of link groups, mark, status line + theme switch | — | link hover grey → ink 100ms |

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | pinned | stays at top (sticky) | — | `position: sticky` |
| header | scrubbed (first 64px of scroll) | bottom hairline transparent → `#ebebeb` | over 0–64px | CSS `animation-timeline: scroll()` on the border colour, in `@supports` |
| header + footer links | hover | colour `#4d4d4d` → `#171717` | 100–150ms `cubic-bezier(0.4,0,0.2,1)` | `transition-colors` + `hover:` |
| buttons | hover | white → `#f2f2f2`; ink → `#383838` | 150ms same curve | `transition-colors` + `hover:` |
| hero (phone) | loop | one of three phrases shown at a time, each fading in | 200ms fade-in; ~3s each (interval inferred) | CSS `@keyframes`, three spans in one grid cell with staggered delays |
| hero logos (phone) | loop | strip slides left forever | 40s linear | CSS marquee, list duplicated (`aria-hidden` copy) |
| hero logos (1440) | — | static row | — | flex `justify-between` |
| CTA copy button | click | label fades to "Copied" | 200ms | React state + CSS fade, `hydrate: "visible"` |
| case/shipped media | load/view | clip-path and translate inside the art | — | not rebuilt (inside media) |
| below-fold sections | — | blank in section crops: lazily mounted by the site, not a designed reveal | — | not rebuilt (scroll frames show them static) |
| footer status | load | "Loading status…" fades to the status | — | not rebuilt (static status line) |

## Media slots → placeholders

- Hero art (canvas): a 1080×720 (phones 390×400) slot centred behind the hero; empty, a soft
  radial `foreground/10` haze in the middle so the slot reads, no shape drawn.
- Case windows: ringed `bg-muted` windows (8px top corners, ring + 2px drop) that fade out at
  their bottom into the page, the same sizes as the screenshots; the layered pair overlaps
  like the original (back one lower and to the left).
- Shipped cards: corner square → soft `glow → highlight` gradient; side art → `bg-muted`
  area fading out towards the text.

## Decisions

- Name **Halyard**; mark = lucide `Hexagon` filled (not a triangle: that is their logo).
- `--page-width: 87rem` (1392px) and `--page-gutter: 1.5rem` give the 24px full-bleed of the
  original at 1440.
- `--section-y: 7.5rem` is the desktop case padding; phones use `py-12`.
- The first case gets extra top padding from the page (`lg:pt-52`), as the original's first
  case sits further below the hero than later cases sit below each other.
- Theme switch icons in the footer are built as plain buttons (no behaviour), like UI chrome.
- Shipped-card hover (border darkens) is inferred from the site's `group-hover:border-*`
  rules; not seen in a capture.
