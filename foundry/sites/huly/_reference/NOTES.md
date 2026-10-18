# Huly — design notes

Source: https://huly.io (captured 2026-10-18). Content in the recreation is for a fictional
product, **Tessel**, an all-in-one team workspace.

## Design language

**Bands, not a single mode.** The page alternates hard-edged bands: near-black hero, pale
grey (#f6f6f6) productivity band, light virtual-office band, #111 GitHub band, light
MetaBrain + documents band, near-black CTA and footer. No dividers: the colour change is
the divider.

**Palette roles**
- page light: `#f6f6f6`; headings `#0b0d10`; body `#303236` (foreground at ~85%)
- page dark: `#090a0c` (hero, CTA, footer) and `#111111` (GitHub band); cards `#0c0c0d`
- dark text: white headings, `rgba(255,255,255,.65)` / `#95979e` secondary
- two lights, used sparingly: a **blue-violet beam** (`#5683da` → lavender) and an
  **orange ember** (`#ff8964`, `#e98463`). The beam lights the hero and GitHub band; the
  ember sits inside the CTA pill and on the watch's left arc.
- headline gradient: white → pale lavender (`#d5d8f6`) → pinkish white, clipped to text.

**Type**
- display: a geometric grotesk (Huly's own, hashed `__esbuild`), 600 for most headings,
  500 for the GitHub and CTA headings. Very tight: 80–84px with −0.04/−0.05em tracking and
  0.8–0.9 line height on desktop; 36px on phones.
- body: Inter, 18px/1.375 with −0.04em tracking in hero copy, 15–16px elsewhere; 22px
  lead paragraphs in office / documents.
- small caps labels: 11–12px Inter 700 uppercase on every pill button.
- sub-feature titles are light (400) at 28–32px, set in two short lines.

**Spacing rhythm.** Content column 1216px at 1440 (112px side margins); 20px gutters on
phones. Bands are tall: ~160px top padding on desktop, ~80px on phones. Some sections
indent their content column (office at +288px, GitHub at +128px, documents at +393px),
which gives the page its editorial, off-centre feel.

**Shapes.** Pills everywhere for actions (9999px). Feature cards 30px radius on desktop,
20px on phones, with a 4–6px pale halo ring around dark cards on light bands. Inner mock
UI uses 10–12px radii.

**Depth.** Mostly flat bands lit by glows: the hero beam, blurred pastel blobs behind the
light-band cards, radial glows behind GitHub feature icons, dotted halftone textures on
dark cards. Mock UI panels have `0 4px 16px rgba(0,0,0,.35)` shadows.

**Motion.**
- hero: a looping video of a vertical light beam hitting the product window (we do it in
  CSS: a pulsing vertical line + flare + glow wash).
- CTA pill: an orange orb inside the pill follows the pointer, resting near the right end
  (we do: rest right, slide to centre on hover, CSS only).
- phones: the product list under the hero is a slow marquee with faded edges.
- documents: caret handles blink; side notes are sticky on desktop.
- CTA watch: lit arcs sweep around the dial.
- hover: 200ms colour transitions on links.

## Blocks

| Item | What |
|---|---|
| `huly-header` | absolute, transparent over the hero; logo, nav with chevrons, star link, two outline pills; phone: two-line burger → full menu |
| `huly-hero` | dark, CSS light beam, gradient headline, glow pill, product window slot, "everything you need" strip (marquee on phones) |
| `huly-bento` | light band, big heading, 2×2 bento of dark cards (narrow/wide, wide/narrow) with mock visuals |
| `huly-office` | indented column, video-call mock, lead paragraph, three icon columns |
| `huly-github` | #111 band, repository window mock, 3×2 feature grid with glowing icons |
| `huly-metabrain` | light band, heading, staggered grid of six dark cards with mock visuals |
| `huly-knowledge` | document-editor showcase: caret handle, highlight + floating toolbar, image, code, sticky side notes |
| `huly-cta` | dark, CSS watch with sweeping arcs and light streaks, gradient heading, two pills |
| `huly-footer` | dark, one row on desktop, centred stack on phones |

Components: `huly-button` (glow / outline pills), `huly-heading` (big tight heading +
paragraph), `huly-card` (dark feature card with visual slot), `huly-window` (product
window mock used by the hero).

## Decisions

- **Font substitution:** the display face is not open. Geist (OFL) is the closest
  geometric grotesk among the candidates rendered side by side (Inter Tight, Instrument
  Sans, Figtree, Plus Jakarta…). Body stays Inter (OFL).
- **Light is the faithful mode.** The page is light-based with dark bands. Dark blocks
  (header, hero, GitHub, CTA, footer, the dark cards) add the `dark` class to themselves
  through a `tone` prop, so they stay dark under every theme, because every theme defines
  `.dark`. In dark mode the light bands go dark too: the sibling look.
- **Videos become CSS and divs.** Huly's hero, bento and office visuals are videos and
  photos; we draw mock UI from divs, CSS gradients and lucide icons. People are initials
  in gradient circles.
- **Logo:** our own simple mark (an SVG passed in from the demo), never Huly's.
- **Hover orb, not pointer tracking:** the glow pill's orb slides to the centre on hover
  in CSS instead of following the cursor with JS. Keeps the button static-HTML friendly.
- **MetaBrain's sliding carousel** (cards drift in from the sides as you scroll) becomes
  a fixed staggered grid; the scattered look is kept with column offsets.
- Syntax colours in the code block use `chart-1…5`.
