# bridge — recreation notes

Original: https://bridge.xyz/ (landing page only; captured in advance, no other pages asked for).
Fictional stand-in company: **Orrery** ("a Halden company"), a stablecoin-rails platform for
developers. All copy is ours.

The capture's cookie banner (TrustArc "We value your privacy", Source Sans Pro, dark-blue
buttons) covers part of the hero at both widths. It is a third-party overlay, not the site's
design: not rebuilt. The 390 hero text is hidden under it in every frame, so its layout is
inferred from the 1440 hero and the 390 type sizes in the capture (57px heading).

## Design language

- **Palette roles:** white page, near-black ink `#030712`, one bright sky blue `#40cfff` for the
  announcement bar, the primary button and the small square before each section label;
  a quiet mid grey `#9b9b9b` for secondary text (hero mono line, CTA second sentence);
  `#eeeeee` hairlines between cards; `#f7f7f7` icon tiles. Colour otherwise only comes from the
  blurred sky/seafoam photographic backdrops (hero top, CTA band) that fade into white.
- **Type scale:** one neo-grotesk in regular weight everywhere (no bold), tight tracking at
  display sizes: hero 83px/1.0 (−0.035em) → 57px on phones; section headings 56px/1.0 (−0.03em)
  → 42px; card titles 25.6px/1.19 (−0.0375em); body 15px/1.4 (−0.02em); intro paragraphs
  16px/1.4; CTA lines 32px/1.1. A light mono at 13–14px for section labels, the hero subline and
  the phone "Menu" label.
- **Spacing rhythm:** 80px side gutters at 1440 (16px on phones); sections separated by ~80px,
  the two feature sections carry ~190px of air underneath; cards pad 30px.
- **Layout grid:** feature sections split in halves: heading + intro on the left half, a 2×2
  grid of cards on the right half, each card hung on a 1px left hairline (top hairline on
  phones, stacked). Logos centred 5/5/3; phones 1 then 2 per row.
- **Shapes:** almost square: 3–4px button radii, 4px icon tiles, 8px CTA card. Buttons are flat
  (fill or 1px black outline), no shadows anywhere.
- **Depth:** none, except the translucent blurred header and the photographic backdrops.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| ABC Diatype (Regular 400) | neo-grotesk with slightly geometric rounds | normal width, medium-tall x-height, tight spacing | **Hanken Grotesk Variable** | same neutral grotesk skeleton, normal width, similar x-height and round `o`/`e`; already installed |
| ABC Diatype Mono (400) | grotesk mono, light colour | normal | **DM Mono 400** | a light, low-contrast grotesk mono like Diatype Mono (Space Mono and Plex Mono are heavier/quirkier) |

Not Inter/Geist: the original isn't either.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | announcement bar | `bridge-announcement` | content (33–35px) | one centred line + arrow, sky fill | same | – | none |
| 1 | header | `bridge-header` | content (88 / 70px) | wordmark stacked (name / tagline) left, mono "Menu" + 2-line icon right | wordmark inline, centred nav (Products ⌄ Solutions ⌄ Docs │ Resources ⌄), outlined "Request a demo ↗" right | – | sticky, translucent + backdrop blur; link/button hovers |
| 2 | hero | `bridge-hero` | content (598+682 / 503+354) | backdrop strip top, 2-line 57px heading centred, mono subline, sky button, tall vertical flow diagram | backdrop ~300px fading to white, 83px one-line heading centred, mono 2-line subline, sky button, full-width 288px diagram strip | backdrop image; flow-diagram embed (390×~480 / 1440×288) | button hover |
| 3 | logos | `bridge-logos` | content (756 / 438) | left heading 3 lines, 1 + 2-per-row logos, outlined button | centred one-line heading, 5/5/3 logos, outlined button | (logos → plain-text names) | button hover |
| 4 | products | `bridge-feature-grid` | content (1691 / 813) | label, heading, intro, cards stacked with top hairlines | label; left half heading + intro; right half 2×2 cards on left hairlines | 4 icon tiles (lucide) | heading hover grey, card hairline hover, link underline grows |
| 5 | solutions | `bridge-feature-grid` (again) | content (1444 / 667) | same | same, titles wrap to 2 lines | 4 icon tiles | same |
| 6 | CTA | `bridge-cta` | content (698 / 692) | backdrop band, white card inset 15px, heading + grey line + link stacked | backdrop band, white card inset 144px, two lines left, link top-right | backdrop image (2000×736 cover, faded top/bottom) | link underline |
| 7 | footer | `bridge-footer` | content (809 / 755) | wordmark + 2 link columns side by side, fine print, Legal/Privacy split | wordmark, two link columns, fine print bottom-left, Legal/Privacy bottom-right | – | link hover; current link underlined |

## Motion inventory

| section | trigger | what changes | timing | how |
|---|---|---|---|---|
| header | scroll (pinned) | stays at the top after the announcement bar scrolls away; content behind is blurred | – | `position: sticky; top: 0` + `backdrop-blur` on `bg-background/60` |
| buttons (sky) | hover | fill → slightly darker sky (rgb 57,186,229) | 0.25s ease | `transition-[filter] duration-250 hover:brightness-90` (the darker sky is ~90% brightness of the token, so it re-themes) |
| outlined button (white) | hover | fill white → near-white `#f9fafb` | 0.25s ease | `hover:bg-secondary` |
| outlined button (header) | hover | transparent → grey wash rgba(201,201,201,.16) | 0.25s ease | `hover:bg-foreground/5` |
| "View …" links / CTA link | hover | underline grows 0 → 100% width under the label | 0.4s cubic-bezier(0.165,0.84,0.44,1) | span with `w-0 group-hover:w-full transition-[width]` |
| section headings | hover | text → neutral grey `#c4c4c4` | – (instant in CSS; we use 0.25s) | `hover:text-muted-foreground transition-colors` |
| feature cards | hover | hairline colour change | border-color 0.25s ease | `hover:border-foreground/25 transition-colors` |
| hero flow diagram | loop | the embed animates chips along dashed paths | – | inside media: placeholder only |

GSAP ScrollTrigger is loaded but the capture saw no reveals or scrubbed elements (every scroll
frame shows content fully in place); only the pinned navbar. No entrance animations invented.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero backdrop | blurred sky/seafoam photograph, ~300px tall, fading into white | `bridge-placeholder tone="sky"`: soft glow → highlight wash fading to background |
| hero flow diagram | animated embed of currency chips on dashed paths, 1440×288 / 390×~480 | `bridge-placeholder tone="flat"` (bg-muted, 4px radius) at that size |
| CTA backdrop | blurred sky photograph strip, 2000×736 cover, white fades top and bottom | `tone="sky"` band with a vertical mask fade |
| customer logos | 13 brand logos | plain-text fictional names in the display face |
| card icons | 38px tiles with small line icons | lucide icons in a muted 38px tile (UI chrome) |

## Decisions

- One `bridge-feature-grid` block serves both the Products and Solutions sections (identical
  layout); page.tsx uses it twice with different content.
- Components: `bridge-button` (sky / outline / ghost-outline / underline link), `bridge-section-label`
  (sky square + mono), `bridge-wordmark` (lucide icon + name + tagline, inline or stacked),
  `bridge-placeholder`.
- The header sits in the flow (sticky); the hero takes `underHeader` to pull itself up under it
  so the backdrop runs behind the translucent header as in the original.
- Gutter is breakpoint-based like the original (16px → 40px → 80px), set in the theme with
  media queries.
- Hover colour for the sky button uses `brightness-90` instead of a second blue token: the
  original's hover is exactly the sky at ~90% brightness.

## Round 1 (ours vs original)

Heights at 1440 (ours / original incl. the gap before): hero 864 / 857 · logos 438 / 438 ·
products 893 / 893 · solutions 738 / 747 · CTA 687 / 731 · footer 808 / 755. At 390: hero
1054 / 1300 (inferred, the original's hero is under the cookie banner) · logos 749 / 756 ·
products 1769 / 1771 · solutions 1532 / 1524 · CTA 698 / 738 · footer 843 / 809.
Overflow: fits at 360/768/1024. Header pinned (sticky) in both.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | backdrop behind header paler than the photo | white wash at 50% hides the backdrop more than the original's near-clear bar | nav links greyed on hover, original shows no nav hover | yes: bg-background/25, nav hover removed |
| announcement | – | – | hover underline not in the original | yes: removed |
| hero | ~246px shorter than the original's hero + diagram (inferred) | diagram placeholder wider (136–1304) than the original's chip span (196–1226); backdrop paler | button hover brightness 0.9 = original's darker sky | yes: taller phone diagram and padding, lg:px-[12.25rem], stronger wash |
| logos | matches (1 + 2-per-row, left heading) | matches (5/5/3, centred) | outline hover → secondary | – |
| feature grid | matches | card columns at 720/1040 vs 728/1054 (8px) | underline grows; heading greys on hover | left as is (8px) |
| CTA | 40px less air above the card | 44px less air above the card; band paler/greener than the original's sky streaks | link underline | yes: more top padding; stronger wash |
| footer | link rows 52px apart vs 43px | same; 53px taller overall | – | yes: 21px lines + 22px gaps, smaller gap to the small print |
