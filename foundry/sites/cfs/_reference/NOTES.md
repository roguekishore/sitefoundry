# cfs (cfs.energy) — recreation notes

Captured in advance (`precapture.json`, landing page only, no other pages asked for).
Fictional stand-in: **Brightwater Fusion Works**, a company building compact fusion
power plants. All copy is ours.

## Design language

- **Palette roles.** Three flat fields and one accent, no gradients except a dark scrim on
  the hero photo:
  - warm putty/tan page `#ccc8c3` (rgb 204 200 195) with graphite text `#333`;
  - deep navy `#152536` for the quote card and the footer band, a darker navy `#101c29`
    for the cookie notice;
  - one burnt orange `#cf6d46` for every accent: active dots, 3px rules under photos, the
    tick before each section title, the circle of the arrow buttons, link underlines,
    footer icons, the quote mark;
  - white for text on navy and on the hero photo, and for hairline boxes on the photo.
- **Type scale.** Two families only. A neo-grotesk in **light (300)** for display:
  63px/1.2 section and hero titles at 1440 (34px/1.2 at 390), 46px footer call, 30px/1.5
  quote; 16px/1.5 regular for reading. A **monospace** for all UI and small labels at
  14px: nav, labels (`01`, `Execution`), buttons, footer address and links (14/28).
- **Spacing rhythm.** Gutter 35px at 1440, 17px at 390. Section padding about 120px at
  1440 (60px at 390). Elements step 20 / 40 / 60 / 80px.
- **Grid.** A 4-column grid with 20px gaps across 1370px (327.5px columns): hero pillars
  sit in columns 1-3; breakthrough's big photo spans 1-3 and the small ones sit in 4;
  values sit one per column.
- **Shapes.** Square corners everywhere (radius 0). Only circles: 70px outlined orange
  rings round the arrow of each text button. 1px hairlines (white on photo/navy, graphite
  on tan) and 3px orange rules.
- **Depth.** Flat; the only shadow is the cookie notice (`0 18px 42px rgba(0,0,0,.4)`).

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| NB International (300/400) | neo-grotesk sans, single-storey g, double-storey a | normal-wide, large x-height | **Mona Sans Variable** | measured "A breakthrough for" at 63px/300: original 548px, Mona 542 (−1%), Hanken 525, Manrope 534, DM Sans 540; Mona's neutral grotesk shapes and single-storey g are the closest |
| NB International Mono (400) | grotesk monospace | 0.643em advance (wide for a mono) | **Azeret Mono Variable** | the only installed grotesk mono with the same 0.643em advance: "Commonwealth Fusion Systems" at 14px = 243px both; Space Mono matches width but its quirky y/g are a different voice; DM/Plex/JetBrains are 0.6em (11% narrower) |

Weights: display 300 per the capture; Mona reads slightly lighter, so round 1 checks
whether 350 is closer (see font-substitute memory). Mono at 400 might read heavier in
Azeret; checked in round 1.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | boxed nav over the hero | `cfs-header` | 74px box, 17px from edges (70px box, 35px from edges at 1440) | one box: wordmark mark + 2-line mono name, a 74px menu cell with a 3-bar icon | one box: mark + name cell (570px), 5 equal 160px nav cells divided by 1px white lines | none (mark = lucide icon) | hover: cell inverts to white with navy text, 150ms |
| 1 | hero | `cfs-hero` | **100svh** (window-sized at both widths) | photo fills; title 34px at bottom-ish, pillars stacked (label + 3-line text), 60px between | photo fills; title 63px/1.2 light, max ~800px, bottom-left; pillars in grid cols 1-3 below it, ~50px from bottom | one: full-bleed background photo, cover | load fade 500ms; photo scale 1→1.05 scrubbed; pillars fade out over the first half-screen; active dot pulses (2s loop) |
| 2 | breakthrough | `cfs-breakthrough` | content (1517 at 1440 ≈ 120 top + content + 120 bottom) | title 34px, body 16/24 one column, then photo 01 full width (356×238), 02 (171×114) + 03 (199×145, bleeding right) side by side, circle link | title 63px with an orange 15px tick from the page edge; photo 01 cols 1-3 (1022×681, 3px orange rule under), 02 col 4 (327×218, rule), 03 below it bleeding off the right edge (~819×598, no frame: a line drawing); then body in 2 text columns (~430px each, 48px gap); circle link | 01 photo, 02 photo, 03 drawing on tan | circle link hover arrow +2px |
| 3 | values | `cfs-values` | content (1396 at 1440) | title, photo full-bleed (390×~420), navy quote card overlapping its bottom by ~40px with orange top rule, centred 24px quote; 4 values stacked; circle link | title; photo cols 1-2.5 (844×755); navy quote card (672×653) from x 733 to the right gutter, 50px lower, orange 3px left rule, centred quote 30/1.5, orange 80px vertical rule, mono name/role; 4 values in the 4 columns (mono label, 16px text indented 40px behind a 1px rule); circle link | one photo (844×755) | circle link hover |
| 4 | footer | `cfs-footer` | content (900 at 1440, 1472 at 390) | navy; all centred: 30px call, "Follow" label, 4 orange icons, short rule, apply circle link, hairline, mark, address, legal, contacts, links | navy; 46px call centred; one row: follow label · 4 icons · 50px rule · apply circle link; hairline across; 4 columns: mark (col 1), address + legal (at x 267), contacts (x 730), links (x 1193); links underlined orange | none | link underline orange→white 150ms; icons none |
| – | cookie notice | `cfs-cookie-notice` | 160px card, fixed bottom-right 25px (full width minus 7px at 390) | fixed card over the page bottom | fixed card 320px wide, 25px from right/bottom | none | slides in 420ms on load; orange top bar grows 560ms; button hovers |

## Motion inventory

| section | trigger | what changes | timing / easing | build |
|---|---|---|---|---|
| hero content | load | opacity 0→1 | 500ms ease | CSS keyframe `cfs-hero-fade`, fill both, `motion-reduce:animate-none` |
| hero photo | scrubbed with scroll | scale 1→1.05 as the hero scrolls away | linear, over the hero's exit | `animation-timeline: view()` range `exit 0% exit 100%` in `@supports`, under `overflow-clip` |
| hero pillars | scrubbed with scroll | opacity 1→0 by half a screen of scroll | linear | view timeline on the hero, range `exit 0% exit 50%` |
| hero active dot | loop | transform pulse | 2s infinite | CSS keyframe scale 1→1.35→1 with a fading ring |
| header cells / mark | hover | bg transparent→white(foreground), text white→navy | 150ms cubic-bezier(.455,.03,.515,.955) | Tailwind `transition-colors duration-150 ease-[…]` |
| circle links | hover | arrow translateX 0→2px | 150ms same curve | `group-hover:translate-x-0.5` |
| footer links | hover | underline orange→white | 150ms | `transition-colors hover:border-foreground` |
| cookie notice | load | slide in (translateY 24px→0) + fade | 420ms | CSS keyframe |
| cookie top bar | load | scaleX 0→1 from left | 560ms | CSS keyframe |
| cookie buttons | hover | accept orange→white with navy text; decline border/text →white | 150ms | Tailwind transitions |

The capture's "translateY 0→450, translateX 0→720" on a hero div sampled at one point is
a centring transform (half the window), not a motion; not rebuilt.

## Media slots → placeholders

| slot | size (1440) | size (390) | placeholder |
|---|---|---|---|
| hero background photo | 1440×100svh, cover | 390×100svh | `bg-muted` (dark scope) under a radial scrim from `background` |
| breakthrough 01 photo | 1022×681 (1.5) + 3px orange rule | 356×238 | `bg-muted` + `border-b-[3px] border-primary` |
| breakthrough 02 photo | 327×218 (1.5) + rule | 171×114 | same |
| breakthrough 03 drawing | 819×598 (1.37), bleeds off the right edge, no frame | 199×145 | `bg-foreground/5` with a dashed hairline (a drawing on tan, no frame) |
| values photo | 844×755 (1.12) | 390×~420 full-bleed | `bg-muted` |

## Decisions

- Mark: a lucide `Atom` icon in place of the sunburst logo (no logo shapes).
- Socials: lucide icons (Twitter-less: `AtSign`, `Linkedin`, `Youtube`, `Instagram`).
- The header is its own block, absolutely placed over the hero (`overlay`, default on);
  the hero leaves no space for it, like the original.
- The hero, header, quote card, footer and cookie notice carry `dark` so tokens flip in
  that subtree: white text and navy fields in the faithful (light) theme.
- Cookie notice is its own block (`cfs-cookie-notice`): a recurring piece of the design
  with its own motion. Dismissing needs state, so `hydrate: "idle"`.
- Menu at 390: a `<details>` disclosure (no JS) that drops the nav cells below the box.
- Light mode is faithful (tan page); dark mode turns the page navy with the same orange.

## Comparison round 1

Heights: 1440 hero 900 (window) / breakthrough 1533 / values 1417 / footer 898 against
900 / 1517 / 1396 / 900; 390 hero 844 (window) / 1250 + 1711 / 1486 against 844 / 2988
together / 1472. Motion list: load fade, view-timeline scale 1→1.05 and pillar fade at
scroll 450, 2s pulse, cookie slide and bar, every hover (cells invert, underlines
orange→white, cookie buttons) all present. No overflow at 360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | mark 36px against the original's ~55px sunburst | same | – | yes: icon 48px |
| hero | title 3 lines starting at 325 vs 4 lines at 255 (shorter copy); pillars 60px apart vs 45, label→text 35 vs 29 | title wraps with a one-word last line | – | yes: copy length closer to the original, gap-y 36px, mt-3 |
| all titles | Mona 300 reads lighter than NB International 300 | same | – | yes: weight 350 (titles, hero, footer call, quote) |
| breakthrough | – | figure 03 sat 110px low: the right column spanned 3 grid rows and its rows stretched | – | yes: self-start on the column |
| breakthrough | – | figures 11px low, text 8px low | – | yes: mt 56px for both |
| values | – | everything ~10px low (follows the title) | – | accepted |
| cookie notice | matches (full width, 7px inset) | matches (320px, 25px inset) | slide + bar | – |
| footer | matches | matches | underline hover | – |
