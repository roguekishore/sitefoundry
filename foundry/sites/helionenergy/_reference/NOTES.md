# helionenergy — notes

Original: https://helionenergy.com/ (landing page only; precaptured, no other pages asked for).
Recreated as the fictional **Vantor**, a fusion-power company with two machines, *Kiln* (the
working prototype) and *Basin* (the first plant, being built). All copy is ours.

## Design language

- **Palette.** A cool, pale steel page (#eef2f5 "off-white") with deep navy ink (#1c2b44) for
  text, filled buttons and the nav pill (#192738). Two near-black bands (#0f0f15): the machines
  section and the footer, plus the careers band which darkens as it scrolls in. Hairlines are a
  lilac-grey #cfcfdf on light, #3b3b3b on dark. The only colour is the plasma magenta of the
  WebGL art (#ff33ff), which never appears in UI: it becomes the theme's `glow`/`highlight`.
  White (#fff) only for the Careers pill.
- **Type.** One neo-grotesk (Inter) for everything readable, set tight: display headings all
  caps at weight 500, line height 0.92, −1% tracking; secondary headings in sentence case at
  −5% tracking. A mono (Geist Mono) for the nav, eyebrows (`[ LABEL ]` in brackets), dates and
  footer links, always uppercase, 12–14px, line height 1.
- **Scale (fluid, 390 → 1440):** display 32 → 55px; h4 (Recent updates, careers heading)
  20 → 33px; h5 (card titles, fusion captions) 18 → 22px; news titles 16 → 19px (lh 1); body
  15px / 1.35; small 13px / 1.38; mono 12px eyebrows, 14px nav and footer.
- **Spacing.** 12-column grid, 20px gaps, gutter 10px at 390 and 56px (3.5rem) at 1440.
  Section top padding 95 → 133px to the eyebrow. Very airy: pinned and stacked sections give
  each idea a whole screen.
- **Shapes.** Small radii: 8px media cards, 6px video frames, 4–5px buttons and nav pill,
  2px square arrow buttons. A rounded-full pill only for the fusion section's CTA. No shadows;
  depth comes from the dark bands, 40% scrims over photos, and the WebGL glow.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Inter (variable) | neo-grotesk sans | normal / tall | **Inter Variable** (`@fontsource-variable/inter`) | the original's own face; open licence (the skill's "unless the original uses it") |
| Geistmono | monospace, geometric grotesk mono | normal / tall | **Geist Mono Variable** (`@fontsource-variable/geist-mono`) | the original's own face; open licence |
| General Sans (loaded, not seen in computed text) | — | — | not used | never rendered in the captured page |

Both packages were already in the root `package.json`; no `pnpm add` needed.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | fixed header | `helionenergy-header` | 56 / 50px, fixed | mark left, white 34px menu square right | mark + centred navy mono pill of 7 links + white Careers pill, group centred | — | mark fades out on scroll; link hover opacity |
| 2 | hero | `helionenergy-hero` | **100svh** | 32px caps heading bottom-left, first line indented 1.5em | 55px heading bottom-left, first line indented 2.3em | full-bleed video (cover) | none (video only) |
| 3 | how fusion works | `helionenergy-steps` | **450svh** wrapper, 100svh sticky stage | eyebrow + heading top centre, caption + pill button + Skip at bottom | same, centred | full-stage WebGL art (dark→light gradient backdrop with plasma) | pinned 3.5 screens; 3 captions cross-fade with blur; heading drifts 10→−10px; button rises 30px + unblurs on entry; pill's surface clips away on exit |
| 4 | clean, safe, scalable | `helionenergy-pillars` | content at 390 (1625px); **311svh** at 1440 | heading, then 3 stacked groups: eyebrow, line, 16:9 picture, small text, all centred | heading sticky near top; 3 rows (label left, 648×366 picture centre, text right), each sticky so the next slides over it | 3 × 16:9 photos | stack: covered card scales to ~0.9 and lifts 32px; labels fade + rise 20px in, fade out as the next arrives |
| 5 | careers CTA | `helionenergy-careers` | **100svh** | eyebrow top-left; heading, 330×223 video card, outlined button stacked centred | heading left, 381×258 card centre, button right, one row | video card (aspect 1.48) | band turns from page-light to dark as it scrolls in; button surface wipes in; label rolls on hover |
| 6 | machines | `helionenergy-machines` | content (1434 / 1071px) | eyebrow + 3-line heading centred; 2 cards 370×480 stacked | 2-line heading; cards 879 + 429 wide, 480 tall | 2 card photos/videos under 40% scrim | photo zooms 1.1→1 on entry; arrow-button fill wipes with scroll |
| 7 | recent updates | `helionenergy-news` | content (2205 / 1303px) | 2-col header (heading / intro + button), rows: title, date, picture 1.27, + text, arrow right | header row, hairline; rows of 4 cols title · 3 cols picture · 4 cols text · arrow | 3 × pictures 317×250 (1.27) | picture zoom-in reveal; arrow fill wipe; hover |
| 8 | footer | `helionenergy-footer` | content (673 / 728px) | newsletter, link groups in 2 cols, socials, giant wordmark | newsletter left, link groups in cols 10–12, socials spread, full-width wordmark | — | link hover underline, socials opacity |

Section 4 is only window-sized on desktop (311% there, content-sized at 390), and that's what we build: the
sticky stack is `lg:` only.

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header mark | scrubbed (scroll root) | opacity 1→0 over the first ~300px | linear | CSS `animation-timeline: scroll(root)`, range 0–300px |
| header links | hover | opacity 1→0.6 | 0.2s ease-out | Tailwind `transition-opacity duration-200 ease-out hover:opacity-60` |
| Careers pill / buttons | hover | background tint | 0.2s | Tailwind transitions |
| fusion stage | pinned | 100svh stage held for 3.5 screens | — | `sticky top-0 h-svh` inside a `h-[450svh]` wrapper |
| fusion captions | scrubbed | 3 captions in one place: opacity 0↔1 + blur 8px↔0 | linear on scroll | named `view-timeline` on the wrapper, per-caption ranges as inline custom props (pinned-crossfade recipe) |
| fusion heading | scrubbed | translateY 10→−10px | linear | same timeline, `cover 0% cover 100%` |
| fusion button | entering view | opacity 0→1, rise 30px, blur 6→0 | over wrapper `entry 50%–100%` | CSS view timeline |
| fusion pill surface | leaving | clip-path inset wipes the pill's white surface away | `exit 40%–90%` | CSS view timeline |
| pillars stack (lg) | pinned / scrubbed | each row sticky at 50svh−140px; covered picture scales 1→0.92, lifts 32px | scroll | `position: sticky` siblings + an absolutely placed sensor per row with `view-timeline-name`, shared with `timeline-scope` |
| pillars labels | entering / leaving | opacity 0→1 + rise 20px; then fade out | scroll | same sensors; reduced motion: static |
| careers band | entering view | page-light → dark ground (dark layer opacity 0→1) | `entry 40%–55%` | CSS view timeline on a `dark` overlay layer |
| careers button | entering view | button surface wipes in (clip-path) | `entry 60%–100%` | shared `helionenergy-button` with `reveal` |
| buttons | hover | label rolls up and the copy below rolls in (translateY −100%) | 0.4s ease | CSS transition in `helionenergy-button` |
| machines / news media | entering view | scale 1.1→1 | `entry 0%–100%` | CSS view timeline on the placeholder layer |
| arrow buttons | scrubbed | fill wipes in from the left (clip-path inset) | `entry 100%–cover 50%` | CSS view timeline in `helionenergy-arrow-button`; hover fills instantly |
| footer links | hover | underline; socials opacity 0.6 | 0.2s | Tailwind |

Not rebuilt: the fixed WebGL canvas (plasma spheres and field lines) and the page-transition
curtain — media/art. Lenis smooth scroll: the capture shows it, but the batch notes say it only adds
a strip artefact to captures and this page reads fine without it; skipped (decision below).

## Media slots → placeholders

- hero video, full-bleed 100svh: dark `bg-card` surface with a soft glow wash from the bottom.
- fusion stage art, full-bleed: a plain vertical gradient (navy → page) with one soft, round glow in
  the middle; no spheres, no field lines.
- pillars: 3 × 16:9 photos, 8px radius, `bg-muted` with a faint glow wash.
- careers: one 1.48 video card, 6px radius.
- machines: 2 card photos under a 40% scrim, 8px radius.
- news: 3 × 1.27 pictures, 8px radius.

## Decisions

- **Gutter** 10px at 390 → 56px at 1440: `clamp(0.625rem, 4.381vw - 0.443rem, 3.5rem)`.
- **Section padding** 95 → 133px: `clamp(5.9375rem, 5.056rem + 3.619vw, 8.3125rem)`.
- **Careers band darkening:** the section crops (scroll 0) show it light, the scroll frames dark:
  a scroll-triggered page-colour change. Built as a `dark` overlay layer fading in on entry, so the
  content is always in `.dark` tokens. Without scroll timelines it is simply dark.
- **Pillars stack ranges** assume a ~900px window (rows stick at 50svh−140px, rows 690px apart);
  shorter windows still stack, with slightly early/late label fades.
- **Footer wordmark** is the fictional name set in Geist Mono and stretched with SVG `textLength`, not
  the original's logotype.
- **Lenis skipped:** native scrolling keeps the CSS scroll timelines exact, and the original's feel
  survives without it.
- The original's mobile social row orders links in two rows (YouTube/Instagram, then ©/X/LinkedIn);
  ours wraps in source order.
