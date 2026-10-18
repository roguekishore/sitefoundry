# Clerk — design notes

Source: https://clerk.com (captured 2026-10-18). Content in the recreation is for a fictional
product, **Latch**, a sign-in and user-management service for developers.

## Design language

**Calm developer tool, built from small precise parts.** Almost everything is 13px; only the
headings get big. Light page, two near-black bands, no loud colour except a violet accent.

**Bands with shoulders.** White hero → near-black auth band → light-grey sections →
near-black SDK band → light-grey testimonials and footer. The dark bands don't have straight
edges: the light section above dips into them (and the one below rises into them) as a wide
tab with 45° shoulders, 44px deep, lined up with the content column. That shape is the
site's signature (`clerk-band`).

**Palette roles**
- page `#f7f7f8`; hero and cards white; text `#131316`; body `#5e5f6e`; quieter `#747686`
- dark bands `#131316`; dark cards `#212126` with a faint top-lit gradient and a 2.5% white
  inner ring; dark body text `#9394a1`
- brand violet `#6c47ff` (eyebrows, active dots) → lilac `#9785ff` on dark; a second accent,
  cyan `#5de3ff`, for one eyebrow on dark
- buttons are graphite (`#2f3037` → `#131316` gradient with an inner top highlight), not violet
- the sign-up card sits on a slowly turning violet → cyan blurred glow

**Type**
- Suisse Int'l (closed) for everything; Söhne Mono (closed) for commands and codes.
- hero: 56px / 64px bold, −0.035em; phones 32px semibold. Section headings 32px / 40px
  semibold, −0.015em, often two short lines.
- eyebrows 13px medium in violet; body 15–16px / 24px; cards 13px titles (medium) and 13px /
  20px text; nav 13px medium. Footer 13px.

**Spacing rhythm.** 1200px content column at 1440 (120px margins), 24px gutters on phones.
Sections ~128px top and bottom on desktop, ~80–96px on phones. Cards 8px apart.

**Shapes.** 16px card radius; 12px header bar and command bar; 6–8px buttons and fields;
pills for segmented controls. Hairlines are 1px at 6–8% of the text colour.

**Depth.** Light: layered soft shadows (1px, 3px, 6px, 24–68px blurs, each 4–5%), never
heavy. Dark: inset highlights, sunken wells and chips — skeuomorphic mock UI (code boxes,
dials, server racks, phones) drawn very low-contrast.

**Motion.**
- header: sticky, frosted; turns dark while it floats over a dark band.
- hero: product tabs and a segmented pill switch the mock card; the email field types itself
  in; the glow behind the card turns slowly.
- logos: each slot swaps between two customer logos with a fade, blur and lift.
- dark cards: illustrations wake up on hover (digits fill the code boxes, a focus ring
  appears, icons brighten, dots drift).
- testimonials: two columns drift upward at different speeds, masked top and bottom.
- links: tiny play caret nudges right on hover.

## Blocks and components

| Item | What |
|---|---|
| `clerk-button` | graphite gradient / white hairline / violet buttons, optional play caret |
| `clerk-arrow-link` | 13px link with a nudging caret |
| `clerk-heading` | eyebrow, heading (section or hero size), paragraph, link; optional fade-out text on dark |
| `clerk-card` | the bento card: illustration + 13px title and text, row/col spans |
| `clerk-art` | 15 card illustrations from divs and lucide icons |
| `clerk-band` | the notched dark band wrapper |
| `clerk-command` | copyable agent prompt: folder-tab style and pill style |
| `clerk-auth-card` | mock sign-up / sign-in form with a typing field |
| `clerk-header` | announcement strip + floating sticky bar that darkens over dark sections |
| `clerk-hero` | headline + command, tabbed showcase with ghost neighbours and segmented pill |
| `clerk-logos` | 5-slot logo row (2×2 on phones) with staggered logo swaps |
| `clerk-features` | heading + 3-column dense masonry of cards; dark (notched band) or light tone. Used twice |
| `clerk-billing` | copy + checklist beside a browser-window mock with plan cards |
| `clerk-frameworks` | notched band, one or two centred headings over hairline icon grids with dashed guides |
| `clerk-testimonials` | heading, pill, featured quote + two drifting columns of post cards |
| `clerk-footer` | logo in dotted crop marks, five link columns, hairline, copyright, socials |

## Decisions

- **Fonts:** Inter Variable for Suisse Int'l (both neo-grotesques; Inter at bold with −0.035em
  sets the hero very close). Geist Mono for Söhne Mono. Inter's optical-size axis would be
  closer still, but its `opsz` file declares the same family name as the standard Inter
  build other themes import, so it's not used.
- **One features block for two sections.** The auth band and the multi-tenancy section are
  the same layout (heading over a dense 3-column card grid); `tone` switches dark band vs
  light page. Spans fill in reading order with `grid-flow-row-dense`, which reproduces the
  original's column-major masonry on desktop.
- **The header's dark switch** looks at what's under the bar on scroll (any `.dark`
  ancestor), so it works with any dark block, not just ours.
- **Photos → initials.** Avatars and the roles grid use initials on tinted gradient tiles;
  customer logos are made-up wordmarks from lucide icons and type; framework logos are
  lucide line icons.
- **Not recreated:** the floating chat button, the dropdown mega-menus, and the hero ghost
  panels' exact contents (ours show the neighbouring mock cards instead of a profile page).
- **Spacing between teams and billing** is trimmed on the page (`className` on billing), as
  the original runs those two sections together.
