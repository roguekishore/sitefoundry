# attio — recreation notes

Captured in advance (`precapture.json`, landing page only, 2026-10-21). Recreated as
**Tessel**, a made-up "self-running CRM" company; all copy, names and figures are ours.

## Design language

- **Palette.** A white page (#fff) inside a 1392px frame drawn by two full-height hairlines
  (24px in from the window edges at 1440; gone on phones). Near-black text (#1c1d1f);
  second clauses of every heading in a cool slate grey (#6e7480); light greys for panels:
  #fafafa for the big platform band, #f2f3f4 for media wells and hover fills. One blue
  (#2b63e6) for badges (blue text on a 10% tint), the stat rules and the growth curve.
  A lavender wash (glow) behind the hero's app window. The middle of the page
  (Universal Context → developers), the closing CTA and the footer are a #111 dark band
  with 3.5%-white vertical pinstripes every 8px, slate-grey secondary text, a navy badge tint
  and #1c1d1f → #2e3238 gradient tiles.
- **Type scale (1440 / 390).** Hero 64/40px semibold, tracking -0.03em, leading 1.0–1.1.
  Section headings 40/32px medium, two-tone (dark lead + grey rest). Chapter statements
  24px medium, two-tone. Sub-feature titles 18px, text 16px grey. Body/UI 14–15px medium.
  Display word "Universal Context" ~96/48px semibold. Quote: a text serif at 48/32px.
  Stats 32px regular. Badges 14px medium.
- **Spacing rhythm.** Sections open with ~150px (desktop) / ~90px (phone) above the badge;
  heading → body 24px; 128px framed "gap rows" between some bands. Inner content sits 59px
  inside the frame at 1440, 33px at 390.
- **Layout grid.** The frame is a column of hairline-bordered cells: logo grid 5×2,
  the platform section is a 348px sticky rail + a content column, sub-features split 50/50,
  context features 5-up, changelog 4-up.
- **Shapes and depth.** Radii 8px (buttons, inputs), 12px (cards), 23px (app tiles). Depth is
  hairlines plus very soft multi-layer shadows (navy at 1–18%), never heavy drop shadows.
  Buttons: outline white with a grey border that darkens on hover; primary near-black with a
  faint top light (radial gradient) that brightens on hover; 0.3s cubic-bezier(0.2,0,0,1).

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| Inter (body, UI) | neo-grotesk sans, normal width, tall x-height | **Inter Variable** (`@fontsource-variable/inter/opsz.css`) | the original uses Inter itself |
| Inter Display (headings) | Inter's display optical size, tighter spacing | **Inter Variable, opsz axis** | the opsz file switches to the display cut at large sizes (`font-optical-sizing: auto`) |
| Tiempos Text (quote) | text serif, sturdy, moderate contrast, large x-height (closed) | **Newsreader Variable** | open text serif with the same sturdy, slightly condensed text feel and big x-height; already installed |
| JetBrains Mono (inside product UI only) | mono, normal width, tall x-height | **Source Code Pro Variable** | installed; JetBrains Mono would mean adding a package while other sessions have package.json open. Only used for tiny code marks here |

The serif is exposed as a site variable `--attio-serif` in the theme (blocks use
`var(--attio-serif, var(--typeface-display))`, so other themes fall back to their display face).

## Section map

Heights from the capture; none are "sized by the window" — all content-sized, except the
quote's pinned stage, which we size by the window (sticky stage = one screen).

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement + nav | `attio-header` | 100 / 116px, sticky | black bar (text truncated) + logo/hamburger | black bar + logo, 5 links, Sign in + Start | – | sticky; turns dark over dark bands; link hover pills |
| 2 | hero | `attio-hero` | 825 / 1207 content | centred pill, 40px h1, sub, email + "Send me a demo", "Talk to sales →"; app window bleeds right | pill, 64px h1, sub, two buttons; 1080px app window on a lavender pinstripe wash | app window (1080×620, r12, frame + shadow) | text sticky & fades/blurs as the window scrolls over it; window scales 1→0.95; wash brightens |
| 3 | logo grid | `attio-logos` | 291 / 194 | 2×3 cells | 5×2 cells, ↗ on some | – | hover fill |
| 4 | platform | `attio-platform` | 5266 / 6479 | intro; sticky horizontal tab strip; chapters stacked | intro; 348px sticky rail with 5 chapter names (active dark + blue rule); content column of chapters: statement, media well, 2-up sub-features | 5 media wells (~760×655), 7 sub-feature panels (~430×300) | sticky rail, active chapter follows scroll; media wells fade+rise 16px+unblur on entering |
| – | gap row | `attio-gap` | 128 | framed empty band | same | – | – |
| 5 | self-building | `attio-onboard` | 1149 / 1097 | left-aligned badge/heading/button; record card bleeding right | centred; pinstripe band behind the top of a 1150px record card cut by the section foot | record card (1150×~460 visible, r12) | card fades/unblurs in |
| 6a | Universal Context intro + 5 features | `attio-context` | ~1650 / ~1100 | display title, arc, features stacked centred | title over a glowing horizon arc; 5-up hairline cells (icon top, text bottom) | horizon arc (decorative glow) | title fades/unblurs in; arc scales 0.84→1 and fades in, scrubbed |
| 6b | signals | `attio-signals` | ~1400 / 806 | centred heading, art, 3 progress tabs + text | left: badge, two-tone heading, See more, 3 tabs (active has text + progress rule); right: 695×808 canvas | wormhole canvas → placeholder | tabs auto-advance with a filling progress line |
| 6c | connectivity | `attio-stack` | ~545 / 573 | centred, 4 tiles visible | centred heading, sub, button; row of 96px app tiles with edge fade | – (tiles are UI with lucide icons) | tile row drifts sideways with scroll (scrubbed, ~40px) |
| 6d | SDK | `attio-developers` | ~540 / 465 + 128 gap | centred heading/button; art below | dashed-grid frame; left box heading + button, right line-art | line-art logo → placeholder | – |
| 6e | quote | `attio-quote` | pinned ~1.6 screens | serif 32px centred | serif 48px centred, dotted backdrop, name + role | – | pinned; words fill from grey to black as you scroll |
| 7 | scale | `attio-scale` | 708 / 760 | badge, heading, 2×2 stats, curve below | left text + stats; growth curve sweeping to the top right over vertical hairlines | – (curve is a drawn line) | curve draws in with scroll and turns blue; stats fade/unblur in |
| 8 | customers | `attio-customers` | 903 / 937 | heading, 4 mark-only tabs, photo, text | heading; 4 logo tabs (active grey); split: text bottom-left, photo right | photo 695×429 (r0) | tab switch cross-fade; photo unblurs on entering |
| – | gap row | `attio-gap` | 128 | | | | |
| 9 | changelog + newsletter | `attio-changelog` | 979 / 930 | heading; entries scroll sideways; centred newsletter stacked | heading; 4 ruled columns; hairline ruler; newsletter row | – | – |
| – | gap row | `attio-gap` | 128 | | | | |
| 10 | closing CTA | `attio-cta` | 401 / 417 | dark, heading, email form, "Talk to sales →" | dark, 56px 2-line heading, two buttons | – | – |
| 11 | footer | `attio-footer` | 1072 / 685 | logo, 2-col link groups, socials, legal stacked | logo left, 4 columns, socials + legal row | – | link colour hover |

Components: `attio-button` (outline / primary / ghost / dark-outline, sizes), `attio-badge`
(blue tinted label), `attio-heading` (two-tone statement in four sizes).

## Motion inventory

| section | trigger | what changes | timing | how |
|---|---|---|---|---|
| header | pinned | sticky for the whole page | – | `position: sticky` at page level |
| header | scroll position | bar turns dark over the dark bands | 0.3s | IntersectionObserver on `[data-header-tone="dark"]`, toggles `.dark` (hydrate load) |
| header / all buttons | hover | outline border grey → darker; primary top-light brightens; nav link grey pill | 0.3s cubic-bezier(0.2,0,0,1) | Tailwind transitions |
| hero | scrubbed (0→450px scroll) | text block (sticky under header) opacity 1→0 + blur 0→6px | linear with scroll | CSS `animation-timeline: scroll()` with a px range |
| hero | scrubbed | app window scale 1→0.95 | linear | same |
| hero | scrubbed | lavender wash opacity 0.4→0.7 | linear | same |
| hero | loop | pill's little light sweeping along its bottom edge | ~3s | CSS keyframes |
| hero | load | text and window rise 16px + fade in | 0.6s, staggered | CSS keyframes, fill both |
| logos | hover | cell fill white → grey | 0.2s cubic-bezier(0,0,0,1) | Tailwind |
| platform | pinned | chapter rail sticky under header (tab strip on phones) | – | `position: sticky` |
| platform | entering chapter | active chapter name dark + blue left rule; others pale | 0.3s | IntersectionObserver (hydrate visible) |
| platform | entering view | media wells opacity 0→1, translateY 16→0, blur 4→0 | ~0.6s of scroll (entry 0–240px) | CSS view() timeline |
| platform | entering view | sub-feature panels scale 0.96→1 + fade | entry 0–240px | CSS view() timeline |
| onboard | entering view | record card fade + unblur | entry | CSS view() |
| context | entering view | "The only CRM with" + title fade + unblur | entry 0–300px | CSS view() |
| context | scrubbed | horizon arc scale 0.84→1, opacity 0→1 | entry → cover 40% | CSS view() |
| signals | loop (timed) | tabs auto-advance, progress line fills ~6s | 6s linear | React state + CSS keyframes (hydrate visible) |
| stack | scrubbed | tile row translateX 0→-40px | cover | CSS view() |
| quote | pinned | stage sticky ~1.5 screens | – | sticky inside a taller wrapper |
| quote | scrubbed | each word muted → foreground in reading order | contain 0–70% | CSS named view-timeline on the wrapper, per-word ranges |
| scale | scrubbed | curve draws left → right (stroke-dashoffset), grey under, blue over | entry → cover 50% | CSS view() |
| scale | entering view | stats fade + unblur | entry | CSS view() |
| customers | click | tab switches story; image + text cross-fade | 0.3s | React state (hydrate visible) |
| customers | entering view | photo slot unblurs | entry | CSS view() |
| footer | hover | link colour → foreground | 0.15s | Tailwind |

Skipped: motion inside the product screenshots (rows streaming in, kanban cards gliding,
typing prompts, radar rings, chart bars) — that's media. Stat count-up (2.5B → 2.6B) is a
small number ticker; skipped as noise, noted.

## Media slots → placeholders

Hero app window, 5 platform media wells, 7 sub-feature panels, onboarding record card,
the signals canvas, the SDK line-art, the customer photo. Each is a `ReactNode` prop; empty,
it is a token surface (`bg-muted`/`bg-secondary`, or a soft glow gradient in the dark band)
with the original's size, radius, border and shadow. The horizon arc in the context intro is
a decorative glow (a big disc with a glow rim, scaled by scroll); it's a slot too.

## Decisions

- Light is the faithful mode; the dark bands, CTA and footer force `.dark` on themselves,
  and carry `data-header-tone="dark"` so the header can follow.
- The chapter rail and the customer tabs need state → `hydrate`. Everything else is CSS.
- 128px gap rows are their own tiny block (`attio-gap`) so the page can space bands like the
  original without each block guessing its neighbours.
- Hero on phones swaps the buttons for an email field + "send me a demo" + text link, as the
  original does.

## Comparison round 1

Heights matched within ~5% everywhere (1440: hero 1228 vs 1207, platform 6580 vs 6479,
quote 1350 vs 1351, scale 760 vs 760; 390 similar). No overflow at 360/768/1024. Every
motion row shows up in ours (scrubbed hero text, sticky rail with active chapter, pinned
quote inking in, curve drawing, tab progress, tile drift, header turning dark at 1440).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ok | headline tracked tighter than the original (-0.04em) | the wash stayed a band; the original's wash spreads down to the logos as you scroll | yes: -0.03em; wash moved to the section, desktop clip-path grows 50% → 100% with scroll, stronger lavender |
| header | stayed light over the dark band in the 390 scroll frames | ok | – | yes: listens to scroll on document in the capture phase |
| platform | intro text 16px from the edge (original 33px) | ok | ok | yes: px-8 |
| context | ok | horizon rim showed as coloured corners at the intro's foot | ok | yes: rim masked to fade out toward the sides |
| developers | ok | text box stopped 58px short of the centre line | – | yes: box runs to the split |
| scale | ok | stat columns narrower (236 vs 264px), text closer to the rule | ok | yes |
| customers / changelog / CTA | my copy ran a line or two longer than the original's | same; CTA wrapped to 3 lines | – | yes: shorter sample copy |
| footer | ok | wordmark centred vertically instead of top-left | – | yes: self-start |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ok | ok | wash now spreads lavender down to the logo grid as the window settles, as in the original's scroll frames | – |
| header | turns dark over the dark band | ok | ok | – |
| developers | ok | box meets the centre line | – | – |
| scale | ok | columns 264px, text 24px off the rule | curve draws, stats unblur in turn | – |
| all | no overflow at 360 / 768 / 1024 | | | – |

Left as is: the rail's chapter names are a touch lighter than the original's; logo wordmarks
are plain text (by rule); the stat count-up is skipped. Re-theme check: `attio-platform` and
`attio-signals` captured under `sample-ember`: colours, fonts and page width all follow the
theme (the signals band stays dark because it forces `.dark`, as noted in its meta).
