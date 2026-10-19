# Halo Dental — design notes

Source: https://halodental-vague-flash.com (captured 2026-10-19). Content in the recreation is for a
fictional clinical-optics company, **Sola** (**Sola Clinical Optics**), maker of the
**Sola Optical Loupe**.

## Design language

**Industrial-design editorial minimalism.** Alternating full-bleed warm stone (`#f5f1ee`),
pure black (`#000000`), and crisp white (`#ffffff`) bands on a strict 12-column grid with
generous vertical breathing room and a single vivid orange (`#ff5e2b`) accent. Every
heading, paragraph, button and label is set at weight **400** (Regular); hierarchy comes
purely from scale, contrast and whitespace rather than bold weights.

**Palette roles**
- warm stone page background: `#f5f1ee` (`--background` in light mode)
- pure white surface: `#ffffff` (`--card` in light mode, used for the newsletter band,
  news thumbnail cards, and header CTA on dark)
- warm stone secondary surface: `#e8e4e1` (`--secondary` in light mode, used for the
  newsletter submit button and inactive gallery thumbnails)
- pure black ink: `#000000` (`--foreground` in light mode, `--background` in `.dark` bands
  such as the hero, mission band, and footer)
- warm muted grey: `#968b88` (`--muted-foreground`) and `#413a3a` / `#241f1f` dark neutral
  steps
- primary accent: vivid international orange `#ff5e2b` (`--primary`), paired with black
  text (`#000000`, `--primary-foreground`) on every orange CTA button
- gradient highlight: warm amber `#ffa41c` (`--highlight`) → vivid orange-red `#ff362a`
  (`--glow`), clipped to the giant 100px mission headline (`Rebranding dentistry`)

**Type**
- Original font: **Nuckle** (Blast Foundry, commercial) at weight **400** across the entire
  page (100 and 700 faces are loaded, but every visible heading, body paragraph, button and
  caption renders at 400).
- Open substitution: **Geist** (`@fontsource-variable/geist`) at weight 400 — clean
  neo-grotesk proportions with a double-storey `a` and single-storey `g` that match Nuckle's
  horizontal rhythm.
- Scale (390px → 1440px):
  - Giant hero wordmark: hidden on 390px → `200px` (`555×203px`) at 1440px
  - Display gradient heading (`h1` scale in mission band): `50px / 50px` → `100px / 95px`
  - Section headings (`h1` in hero, `h2` in product, news, newsletter): `39.5px / 43.5px`
    → `64px / 64px`
  - News item title (`h3`): `25px / 27.5px` → `28px / 30.8px`
  - Footer column title (`h2`): `20.8px / 22.9px` → `24px / 26.4px`
  - Body copy: `14.6px / 21.9px` → `16px / 24px`
  - Buttons & nav links: `14px` → `16px`, weight `400`
  - Legal & floating input labels: `12px / 18px`

**Layout grid & spacing rhythm**
- Full-bleed 1440px canvas (`--page-width: 90rem`) with `20.8px` (`1.3rem`) horizontal
  gutter on phones and `40px` (`2.5rem`) on desktop; 12-column grid with `20px` column gap.
- Section vertical padding (`--section-y`): `62px` on phones, `120px` on desktop.
- The hero sits inside a framed inset box (`6px` inset on phones, `10px` on desktop) with
  `8px` rounded corners over the warm stone page background.

**Shapes & depth**
- Buttons, inputs and icon squares use a crisp `4px` radius (`--radius: 0.25rem`).
- Media containers, thumbnails and the hero inset frame use an `8px` radius (`rounded-lg`).
- Zero drop shadows: depth comes entirely from stark surface contrast (`#000` vs `#f5f1ee`
  vs `#fff`) and hairline `1px` borders (`border-foreground/30` on spec rows and inputs,
  `border-foreground` on secondary outline buttons).

## Media slots & placeholders

| Section | Slot | Original size & frame | Placeholder |
|---|---|---|---|
| `halodental-vague-flash-hero` | `media` | Full-bleed inside `844px` (390px) / `900px` (1440px) black `8px`-rounded hero box | Dark studio backdrop with a subtle vertical cylindrical highlight column on mobile |
| `halodental-vague-flash-product` | `media` + `thumbnails` | `348×348px` (390px) / `670×670px` (1440px) `8px`-rounded square + three `68px` / `95px` `8px`-rounded square thumbs | Dark studio square with a subtle radial glow and award badge; 1 active orange-ringed dark thumb + 2 muted stone thumbs |
| `halodental-vague-flash-mission` | `teamMedia` + `canvasMedia` | `164×164px` (390px) / `210×210px` (1440px) `8px`-rounded square + `348×412px` / `440×520px` right-hand 3D canvas slot | Warm light studio square placeholder for `teamMedia`; subtle dark wireframe/glow placeholder for `canvasMedia` |
| `halodental-vague-flash-news` | `items[].media` | `348×193px` (390px) / `325×180px` (1440px) `8px`-rounded rectangle in columns 1–3 | First row dark studio card; rows 2–4 crisp white press cards with typographic publication marks |
| `halodental-vague-flash-footer` | `media` | `815×116px` horizontal (1440px) / `106×368px` vertical (390px) technical line drawing | Fine-line geometric outline of the instrument with concentric halo rings |

## Blocks & components

| Item | Type | What |
|---|---|---|
| `halodental-vague-flash-theme` | theme | Warm stone `#f5f1ee` light page, `#000` dark bands, `#ff5e2b` orange primary, `#ffa41c`→`#ff362a` highlight gradient, Geist 400 |
| `halodental-vague-flash-button` | component | `4px`-radius 40px-tall buttons: primary orange, white, outline, muted stone, ghost icon square, and split play button |
| `halodental-vague-flash-mark` | component | Two angled pill lozenges + geometric wordmark |
| `halodental-vague-flash-header` | block | Transparent overlay top bar: mark left, 6-link centred nav, white CTA + locale/a11y squares right, native `<details>` burger on mobile |
| `halodental-vague-flash-hero` | block | Inset `8px`-rounded black hero frame (`844px` / `900px`), giant desktop wordmark left, `We All Shine`-style headline right, mobile split video button |
| `halodental-vague-flash-product` | block | 12-column product showcase: 4-col heading, copy, 4-row bordered spec list with icons + orange CTA; 7-col square media + 3-thumb strip |
| `halodental-vague-flash-mission` | block | Pure black band: 100px amber-to-orange gradient headline, square portrait slot + copy + orange CTA bottom-left, 3D canvas slot right |
| `halodental-vague-flash-news` | block | Warm stone press list: heading + outline button, 4 bordered 12-col rows (thumb, title, summary, arrow button), bottom gradient fade + "View more" |
| `halodental-vague-flash-newsletter` | block | Crisp white band: 64px heading left (7 cols), floating-label email input + consent checkbox + muted stone submit button right (4 cols) |
| `halodental-vague-flash-footer` | block | Pure black footer: three 2-col link lists, right-aligned outline + orange CTAs, technical wireframe illustration, bottom legal bar |
