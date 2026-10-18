# Halo Dental — design notes

Source: https://halodental.com/ (captured 2026-10-18). Content in the recreation is for a
fictional intraoral optical instrument company, **Velo Optics** (and its **Velo Lumen Probe**).

## Design language

**Alternating stark black, warm stone, and crisp white bands.** Halo Dental's landing page
is built from high-contrast full-width bands:
1. A rounded dark hero (`#000000`) framed by a subtle outer page margin (`8px` radius around
   the hero card at the top of the viewport) with an oversized display wordmark bleeding to
   the bottom-left edge and a studio-lit vertical cylinder in the centre.
2. A warm off-white stone band (`#f5f1ee`, `--color-grey-100`) for the product showcase
   ("The Digital Mirror"), pairing a left specification column (hairline-divided icon rows)
   with a large square media stage and vertical thumbnail switcher on the right.
3. A stark black band (`#000000`) for the brand mission ("Rebranding dentistry"), featuring
   a large warm amber-to-orange-red horizontal gradient headline (`linear-gradient(90deg, #ffa41c, #ff362a)`),
   a rounded square portrait slot on the left, and concise white body copy + vermilion CTA
   on the right.
4. A warm stone band (`#f5f1ee`) for press & editorial coverage ("Latest news"), structured
   as full-width horizontal hairline-divided rows (`1px solid rgba(0,0,0,0.3)`), each with
   a 16:9 media/logo card (`4 cols`), article title (`3 cols`), summary (`4 cols`), and a
   top-right `32px` square white arrow button (`1 col`), with the fourth item faded into a
   white gradient mask above a bordered "View more" button.
5. A crisp white band (`#ffffff`) for the newsletter signup ("Keep connected to our team
   and progress"), splitting a 2-line display heading on the left and a minimal bordered
   input + consent checkbox + muted submit button on the right.
6. A rounded dark footer (`#000000`, `8px` radius) with 3 navigation columns on the left,
   2 action buttons (dark bordered + vermilion primary) on the right, a wide horizontal
   technical line-drawing slot with concentric sonic rings across the middle, and legal
   fine print at the bottom.

**Palette roles**
- Light mode (faithful):
  - `--background`: `#f5f1ee` (warm stone `--color-grey-100`, primary light surface)
  - `--foreground`: `#000000` (pure black ink)
  - `--card`: `#ffffff` (pure white for newsletter band, press logo cards, and arrow buttons)
  - `--card-foreground`: `#000000`
  - `--primary`: `#ff5e2b` (signature vermilion orange `--color-orange` for primary CTAs)
  - `--primary-foreground`: `#000000` (Halo uses black text on its orange buttons!)
  - `--secondary`: `#e8e4e1` (`--color-grey-200`, warmer stone for disabled/quiet buttons)
  - `--secondary-foreground`: `#000000`
  - `--muted`: `#e8e4e1`
  - `--muted-foreground`: `#413a3a` (`--color-grey-700`, warm charcoal for secondary copy)
  - `--accent`: `#ff5e2b`
  - `--accent-foreground`: `#000000`
  - `--border`: `rgba(0, 0, 0, 0.3)` (crisp 30% black hairlines dividing spec rows and news items)
  - `--input`: `rgba(0, 0, 0, 0.3)`
  - `--ring`: `#ff5e2b`
  - `--highlight`: `#ffa41c` (`--color-yellow`, start of the warm headline gradient)
  - `--glow`: `#ff362a` (`--color-red`, end of the warm headline gradient)
- Dark mode (used by the `.dark` sections — Header, Hero, Mission, Footer — and as the
  full-page dark sibling):
  - `--background`: `#000000` (pure black)
  - `--foreground`: `#ffffff` (pure white)
  - `--card`: `#0a0a0a` (`--color-grey-900`)
  - `--card-foreground`: `#ffffff`
  - `--primary`: `#ff5e2b` (vermilion orange CTA)
  - `--primary-foreground`: `#000000` (black text on orange button)
  - `--secondary`: `#241f1f` (`--color-grey-800`, dark Translucent/charcoal utility buttons)
  - `--secondary-foreground`: `#ffffff`
  - `--muted`: `#241f1f`
  - `--muted-foreground`: `#968b88` (`--color-grey-500`)
  - `--border`: `rgba(255, 255, 255, 0.22)`
  - `--input`: `rgba(255, 255, 255, 0.22)`
  - `--ring`: `#ff5e2b`
  - `--highlight`: `#ffa41c`
  - `--glow`: `#ff362a`

**Type.** Original uses `Nuckle` (a clean, wide geometric grotesk) at weight `400` across
all headings and body copy. Since Nuckle is proprietary, we use `@fontsource-variable/inter`
(already installed in workspace) with slightly tight tracking on display sizes to match
Nuckle's clean geometric posture.
- Giant hero brand wordmark (desktop): `18rem`–`21rem` (`~300px`), weight `400`, line-height `0.82`, tracking `-0.04em`.
- Hero tagline ("We All Shine"): `49.96px` on 390px (`leading-none`), `63.94px` on 1440px (`leading-none`).
- Mission gradient display heading ("Rebranding dentistry"): `39.55px` on 390px, `99.9px` (`6.25rem`) on 1440px, line-height `0.95`.
- Section headings ("The Digital Mirror", "Latest news", "Keep connected..."): `39.55px` (`2.47rem`, lh `1.1`) on 390px, `63.94px` (`4rem`, lh `1.0`) on 1440px, weight `400`.
- News item titles: `24.98px` on 390px, `27.97px` (`1.75rem`, lh `1.1`) on 1440px, weight `400`.
- Footer column headings: `20.8px` on 390px, `23.98px` (`1.5rem`, lh `1.1`) on 1440px, weight `400`.
- Body & spec list text: `14.57px` on 390px, `16px` (`1rem`, lh `1.5` for body, `1.2` for specs) on 1440px.
- Buttons & nav links: `14px` on 390px, `16px` on 1440px, weight `400`.
- Fine print / input floating label: `12px` (`0.75rem`, lh `1.5`).

**Spacing rhythm & layout grid.**
- 12-column layout (`--page-width: 86rem` / `1376px`, `--page-gutter: 1.25rem` on mobile, `2.5rem` on desktop; `--section-y: 5.5rem`).
- Top hero and bottom footer have an `8px` outer frame margin (`m-1.5 lg:m-2 rounded-lg`) on the page so their rounded dark corners show against the light backdrop.
- Radius (`--radius`): `0.5rem` (`8px`) for cards/frames, `0.25rem` (`4px` = `rounded-md`) for buttons, thumbnails, and inputs.

## Media slots & placeholders

Per rule 3 of `recreate-site`, every photo, product render, press logo graphic, and
technical illustration is exposed as a `ReactNode` prop and defaults to a token-styled
placeholder surface matching the original's exact size, aspect ratio, radius, border, and
frame:
1. **Hero central hardware column (`media?: ReactNode`)**: vertical cylindrical hardware
   silhouette in the centre of the dark hero (`rounded-lg`, subtle vertical metallic sheen
   using `bg-muted/40` and `border-border/30` with an embossed double-oval mark).
2. **Product showcase gallery (`items[].media?: ReactNode`, `items[].thumbnail?: ReactNode`)**:
   large `1:1` square dark showcase frame (`aspect-square rounded-lg bg-foreground text-background`)
   with a small award badge in the bottom-right corner, paired with `68×68px` (`rounded-md`)
   interactive thumbnail slots on the right (desktop) or bottom (mobile).
3. **Mission team portrait (`media?: ReactNode`)**: `1:1` square rounded card (`w-52 sm:w-56 aspect-square rounded-lg bg-muted/30 border border-border/30`) on the left of the mission text.
4. **News item media (`items[].media?: ReactNode`)**: `16:9` rectangular slot (`aspect-[16/9] rounded-lg bg-card border border-border/20`) on the left of each press row, holding either a clean typographic publication mark or a dark product placeholder.
5. **Footer horizontal instrument diagram (`diagram?: ReactNode`)**: wide horizontal capsule
   wireframe + concentric target rings in the lower right of the dark footer, rendered with
   subtle `border-border/40` geometry.

## Section & component list

| Item | Type | Role |
|---|---|---|
| `halodental-theme` | `theme` | Warm stone (`#f5f1ee`), pure black (`#000`), crisp white (`#fff`), vermilion (`#ff5e2b`), and warm amber-to-red gradient tokens |
| `halodental-button` | `component` | `4px`-radius rectangular buttons: primary vermilion, white, outline-dark, outline-light, muted, and icon-square |
| `halodental-header` | `block` | Transparent dark overlay top bar with double-oval mark, centred 6-item nav, right "Reserve now" white button + language & accessibility square buttons, mobile burger `<details>` menu |
| `halodental-hero` | `block` | Full-viewport rounded dark hero with central vertical hardware slot, giant lower-left brand wordmark (desktop), "We All Shine" tagline, and mobile split-icon "Play the video" button |
| `halodental-product` | `block` | Warm stone 2-column showcase: heading, lead paragraph, 4 hairline-divided icon spec rows, primary CTA, and interactive square media stage + 3 thumbnails |
| `halodental-mission` | `block` | Dark band with oversized warm gradient heading (`from-highlight to-glow`), square portrait slot, body copy, and primary CTA |
| `halodental-news` | `block` | Warm stone press section: header row with outlined "View Media Room" button, 4 hairline-divided press rows with 4th row faded under a bottom mask, and centred "View more" button |
| `halodental-newsletter` | `block` | Crisp white 2-column band: 2-line display heading on left, bordered email input with notched top label + checkbox consent + muted submit button on right |
| `halodental-footer` | `block` | Rounded dark footer: 3 nav columns + 2 right action buttons, horizontal instrument diagram with concentric rings, and bottom legal/copyright bar |
