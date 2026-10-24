# resend — recreation notes

Original: https://resend.com/ (captured in advance by `precapture.mjs`; not opened here).
Landing page only; no other pages were asked for (`precapture.json` lists none).
Fictional stand-in: **Tern**, an email API for engineers (SDKs, a visual editor, React
templates, deliverability tooling). Own name, copy, people, publications and code samples.

## Design language

- **Palette roles.** Pure black page (#000) everywhere; near-white ink (#f0f0f0) for titles
  and labels, cool grey (#a1a4a5) for body copy. Hairlines are a cool white at ~19%
  (`rgba(214,235,253,.19)`), fainter ones at ~14%. Cards are black with that hairline, a soft
  grey light at the top edge and a fade to black at the bottom; testimonial cards a dark
  graphite gradient (#141517→#191b1e). One brand accent: a lilac-violet (#9281f7) for the
  second word of "Integrate tonight", code strings and the selected SDK. Status colours only
  inside product UI (green delivered, blue opened, red bounced, amber). Everything else is
  greyscale: the depth comes from light, not colour.
- **Headings are lit, not flat:** every section heading and both serif titles are a
  white→half-white diagonal gradient clipped to the text (`to right bottom, #fff 30%,
  #fff8`), so their last letters dim.
- **Type scale.** Hero title: high-contrast display serif 96/96 (64/64 at 390), tracking
  −1%. Closing title: same serif 76.8px. Section titles: a grotesk 56/67 (48/58 at 390),
  tracking −0.05em, weight 400. Card titles 20/26 grotesk with slight positive tracking.
  Body: Inter 16/24 and 18/27 for leads, 14/22 in cards; UI chrome 12–14px. Code: a neutral
  mono at 14/20 (12/16 in the React window).
- **Spacing rhythm.** 96px top/bottom per section at 1440 (≈58px at 390). Icon tile →
  title 32px, title → lead 20px, lead → content 64px. Content column 1232px (x=104…1336),
  with the hero text indented a further 64px.
- **Layout grid.** Mostly centred stacks (icon tile, title, lead, a wide panel). Feature
  pairs in two 600px columns with a 32px gap; deliverability in a 3×3 grid; footer an
  address column + five link columns. At 390 everything stacks; SDK icons and code tabs
  scroll sideways.
- **Shapes.** 16px cards and panels, 12px buttons, 24px "frames" (a rounded top border with
  a glow at its centre that opens the logos, deliverability and quote sections), 6–8px
  chips, full pills for badges.
- **Depth.** No drop shadows. Light: radial grey glows at the top of frames, a light streak
  on the code panel's top edge, a violet line on the editor's, a white glow around the
  primary button on hover.

## Type

| original | classification | width / x-height | ours | why |
|---|---|---|---|---|
| Domaine Display (hero + closing titles) | high-contrast display serif, sharp wedge serifs | normal-narrow, moderate x-height | **Newsreader Variable** (opsz axis, 400) at −0.035em | sharp, high-contrast display cut at opsz 72; ~6% wider than Domaine after tracking (Instrument Serif was 16% narrower and much more condensed in feel; Fraunces too soft and wide) |
| ABC Favorit (section and card titles) | neo-grotesk with geometric quirks: single-storey g, slanted t, light-feeling 400 | normal | **Instrument Sans Variable** (wdth file) 400 | measured: "Integrate tonight" 383px vs 386px at 56px/−0.05em; same single-storey g and light colour (Space Grotesk 8% wider and quirkier; Host Grotesk heavier) |
| Inter (body, UI) | neo-grotesk | normal, large x-height | **Inter Variable** | the original uses it |
| Commit Mono (code, logs) | neutral monospace | normal | **Commit Mono** (`@fontsource/commit-mono`, OFL) | the original's face, open licence |

The serif goes in a theme-only variable `--resend-serif` (falls back to `--typeface-display`
in other themes), since the tokens have one display face and the grotesk is the one used
by nine of the eleven titles.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `resend-header` | 74 / 58px, sticky | wordmark + menu button | wordmark left; seven links (six with chevrons) centred; log in + bordered button right | – | slides down + fades in on load (1s); hairline + blur appear once scrolled; chevron dips 2px on hover |
| 2 | hero | `resend-hero` | content (757) at 390; **100% of the window** at 1440 | 3D object (225²) on top, centred badge, 64px serif title, lead, full-width button + text link | text column left (x=168), 3D object right (591×502), light-streak backdrop | backdrop image (window-filling), 3D object | badge border rainbow rotates (30s loop); primary button hover glow |
| 3 | logos | `resend-logos` | content (561 / 567) | frame top; lead; 2×3 logo grid; link | frame top; centred lead; 6×2 logos; link | – (logos → text wordmarks) | link chevron nudges on hover |
| 4 | "Integrate tonight" | `resend-integrate` | content (1248 / 1296) | icon tile; title (2nd word violet); SDK tiles scroll sideways; code panel with scrolling tabs | same, 13 SDK tiles in a row; 1024px code panel, tab bar + copy button, 18 numbered lines, two footer links | icon tile 170² | SDK tile + tab hover colour; selecting a tab swaps code |
| 5 | "First-class developer experience" | `resend-experience` | content (1525 / 967) | title, lead; card → text, card → text | left title + lead; two 600px cards side by side, each a 320px visual + icon/title/text/link | – (visuals are UI built from chips) | test-mode log: new "HTTP 200" line fades in on top; webhook feed: new event slides down from −20…−70px and fades in, ~1s, repeating |
| 6 | "Write using a delightful editor" | `resend-editor` | content (1310 / 1358) | icon tile, title, lead; editor window narrower | same; 1108px editor window: toolbar, From/To/Subject fields, banner image, white email canvas; bottom fades to black | icon tile 170², banner 662×214 | – |
| 7 | "Go beyond editing" | `resend-beyond` | content (1468 / 899) | stacked cards | two cards side by side, same card shape as #5 | 2 screenshots 534×228 r16 | – |
| 8 | "Develop emails using React" | `resend-react` | content (1300 / 1367) | icon tile, title, lead, two buttons stacked; window with file tabs + preview | window: traffic lights + device toggles; file list, code, rendered preview | icon tile 170², preview pane | – |
| 9 | "Reach humans, not spam folders" | `resend-deliverability` | content (1709 / 941) | frame; title; nine icon+title rows (icon inline) | frame; left title (2nd half dimmer); 3×3 feature grid | – | each feature rises 20px + fades in on entering view, 9 items |
| 10 | quote | `resend-quote` | content (568 / 631) | frame; 100px round mark; 24px quote; avatar + name; subtle pill CTA | same, centred, narrower; the pill CTA is hidden until hover | mark (logo) → lucide icon, avatar 40² | CTA opacity 0→1 on hover (0.5s) at desktop |
| 11 | "Everything in your control" | `resend-control` | content (933 / 1352) | icon tile, title, lead, three stacked tab cards, screenshot | three tab cards in a row (active one has a glowing bottom line), 1232×659 screenshot r16 | icon tile 170², dashboard 1232×659 | clicking a tab card swaps the screenshot |
| 12 | "Beyond expectations" | `resend-testimonials` | content (726 / 685) | title, lead; card track | centred title + lead; endless row of 450px quote cards fading to black at their bottoms | 2 avatars per card (company + person) | track drifts left forever (180s loop), pauses on hover |
| 13 | closing CTA | `resend-cta` | content (540 / 702) | serif title 4 lines, full-width button | serif 76.8px 2 lines, button; a giant cropped wordmark below (desktop only) | – | giant wordmark fades in on entering view (2s) |
| 14 | footer | `resend-footer` | content (1367 / 597) | frame line; address, socials, status pill; 2-col link groups | address column + five link columns | – | status dot pulses (1.5s loop); link hover colour 0.2s |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | load | translateY −100% → 0, opacity 0 → 1 | 1s ease-out | CSS `@keyframes resend-header-drop`, fill both |
| header | scrolled (pinned) | sticky; hairline + backdrop appear after the first screen | scrubbed over ~100px | `position: sticky` + CSS `animation-timeline: scroll()` range 0–120px on the bar's border/background |
| header | hover | link colour grey → white 0.15s; chevron translateY 2px | 0.15s cubic-bezier(.4,0,.2,1) | Tailwind `transition` + `group-hover:translate-y-0.5` |
| hero badge | loop | conic rainbow border turns | 30s linear infinite | CSS `@keyframes resend-hero-spin` on a square behind the pill (w-[300%], see spinning-rim memory) |
| buttons | hover | primary: bg → white 90%, ink → black, white glow (3 shadows); ghost: grey → white | 0.2s cubic-bezier(.4,0,.2,1) | Tailwind `hover:` + `transition-[color,background-color,box-shadow] duration-200` in `resend-button` |
| link chevrons | hover | chevron translateX 2px | 0.2s | `group-hover:translate-x-0.5` |
| integrate | hover / click | SDK tile + tab: grey → white text and border; tab click swaps code | 0.2s | React state (`hydrate: visible`) + transitions |
| experience | loop | test log: a new line fades in on top (650ms); webhook feed: new event slides from −20…−70px and fades .3→1 (1050ms), older ones push down | every ~2.5s | `motion/react` `AnimatePresence` + `layout` with a timer, off under reduced motion (`hydrate: visible`); static HTML shows the full list |
| deliverability | entering view | opacity 0 → 1, translateY 20px → 0, 9 items | per item, staggered by column | CSS `animation-timeline: view()`, range `entry 10%` → `entry 100%`, per-item offset; inside `@supports` |
| quote | hover (desktop) | subtle CTA opacity 0 → 1 | 0.5s | `lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500` |
| control | click | active tab card gets a glowing bottom line, screenshot swaps | 0.2s | React state (`hydrate: visible`), grid-stacked slots crossfade |
| testimonials | loop | track translateX 0 → −50% (two copies) | 180s linear infinite; paused on hover | CSS `@keyframes resend-testimonials-drift` + `group-hover:[animation-play-state:paused]` |
| cta wordmark | entering view | opacity 0 → 1 | ~2s | CSS view timeline, range `entry 0%` → `cover 40%` |
| footer status | loop | dot halo opacity pulse | 1.5s infinite | CSS `@keyframes resend-footer-pulse` |

The capture's "reveal" rows in section 5 (translateY 0→0, opacity 1→0 at 2700–3600) are the
webhook/test feeds ticking while sampled, not scroll reveals: the timer feed covers them.

## Media slots → placeholders

- hero backdrop (window-filling image of light streaks) → a soft diagonal wash of
  `foreground/6` to transparent from the top-right, over the black page.
- hero 3D object (canvas 591×502; 225² video at 390) → `resend-placeholder` (muted surface,
  hairline, r16) at that size.
- section icon tiles (170² videos of glossy 3D icons) → 170² slot holding a 146² rounded
  muted tile with a faint `highlight` glow under it.
- editor banner 662×214, beyond screenshots 534×228 r16, dashboard 1232×659 r16 (342×184 at
  390), React preview pane, avatars → `resend-placeholder` at the same sizes and radii.
- customer logos and the quote's company mark → plain-text fictional wordmarks and a lucide
  icon in the round mark.

## Decisions

- Dark is the faithful mode; light is a sibling (white page, graphite ink, the same violet a
  step darker). The editor's email canvas is `bg-foreground` (white on the dark theme), so
  in light mode it inverts to a dark page: noted in the block.
- Repeated pieces are components: `resend-button` (primary / ghost, optional chevron),
  `resend-heading` (icon slot + lit title + lead), `resend-frame` (rounded-top glowing
  frame), `resend-placeholder` (media slot surface), `resend-feature-card` (visual + icon,
  title, text, link) used by #5 and #7.
- Section padding: `py-section` at lg, `0.6 × --section-y` on phones (the original's 390
  rhythm is ~58px).
- The serif hero/closing titles read the theme-only `--resend-serif`.
- The product UI inside cards (#5 logs and webhook feed, #4 code, #6 editor chrome, #8 code
  window) is built: it is text, chips and buttons, and it carries the section's motion. The
  images inside them stay placeholders.

## Comparison round 1 (ours vs original, dark, 390 and 1440)

Heights at 1440 (original → ours): header 58 → 59, hero 900 (window) → 900 (window), logos
567 → 610, integrate 1296 → 1279, experience 967 → 987, editor 1358 → 1395, beyond 899 → 891,
react 1367 → 1369, deliverability 941 → 946, quote 631 → 652, control 1352 → 1381,
testimonials 685 → 684, cta 702 (incl. 80px of footer glow) → 622, footer 597 → 624.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| whole page | **overflowed to 497px at 360**: the feature cards (grid items with `min-width:auto`) grew to their unbroken log lines and chips | – | – | yes: `min-w-0` on the card, `grid-cols-1` on the pairs |
| header | ✓ | wordmark ~40% smaller and lighter than the original's | drop-in ✓, hairline/blur on scroll ✓ (ScrollTimeline), chevron dip ✓ | yes: 26px bold wordmark |
| hero | ✓ object on top, centred, full-width button | lead sat 48px under the title vs ~20px | rim spins 30s ✓, button glow ✓ | yes: lead mt 4px |
| logos | ✓ | logo rows 28px lower and link 43px lower than the original | link chevron ✓ | yes: tighter grid/link margins |
| all section titles | – | words ran together ("Toolsengineers"): Instrument Sans' space is narrower than Favorit's at −0.05em | – | yes: `word-spacing: 0.06em` |
| integrate | ✓ tiles and tabs scroll sideways | light streak on the panel's top edge missing (clipped at `-top-px` by the panel's own clip) | tab/tile hover ✓ | yes: streak at `top-0` |
| experience | (overflow above) | ✓ cards, glow, fades, chips | feeds tick ✓ (checked separately: both lists rotate every 2s/3s once on screen) | – |
| editor | ✓ | lead wrapped to 3 lines (40rem cap) | – | yes: leads given as line lists drop the cap at lg; shorter demo line |
| beyond | ✓ | ✓ | – | – |
| react | ✓ file tabs + preview | ✓ | – | – |
| deliverability | ✓ | ✓ | rise 20px + fade on entering view, 9 items ✓ | – |
| quote | ✓ | quote 365px wide (text-balance) vs 495px → 4 lines vs 3 | pill CTA opacity 0 at rest on desktop ✓ (hover 0.5s) | yes: no balance |
| control | ✓ | lead wrapped to 3 lines; tab labels too tight ("Everymessagetraced") | tab crossfade ✓ | yes: lead lines; tracking −0.02em |
| testimonials | ✓ | lead wrapped to 3 lines; card bottoms still visible (original fades them out fully) | drift 180s ✓, pauses on hover ✓ | yes: lead lines; stronger bottom mask |
| cta | ✓ | ✓ wordmark cropped by the footer line | wordmark fades in on entering view ✓ | – |
| footer | link rows 44px apart vs 40px | same | status pulse ✓ | yes: `leading-5` on rows |

## Comparison round 2

Heights at 1440 now: logos 578 (567), integrate 1279 (1296), experience 987 (967), editor
1368 (1358), beyond 891 (899), react 1369 (1367), deliverability 946 (941), quote 652 (631),
control 1354 (1352), testimonials 657 (685), cta 622, footer 603 (597). At 390 every section is
within ~5% except the quote (612 vs 568: our pill CTA sits a little lower) and the footer
(1430 vs 1367: our longest group has seven links in a 2-column grid, like the original).
Overflow at 360 / 768 / 1024: fits. Hero still marked "sized by the window" at 1440 only, as
in the original.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ | ✓ serif title, lead, buttons, object slot in place | ✓ | – |
| section titles | ✓ | ✓ spaces read as in the original | – | – |
| logos | ✓ | ✓ rows at 250/346 vs 238/334 | ✓ | – |
| editor, control, testimonials | ✓ | ✓ leads on two lines | ✓ | – |
| quote | ✓ | ✓ 3-line quote | ✓ | – |
| testimonials | ✓ | ✓ card bottoms fade into the page | ✓ | – |
| footer | ✓ | ✓ | ✓ | – |

Motion check against the inventory: header drop-in (1s CSSAnimation) ✓, header hairline on
scroll (ScrollTimeline) ✓, badge rim loop 30s ✓, deliverability reveal 20px/opacity on a
ViewTimeline ✓, testimonial drift 180s + hover pause ✓, CTA wordmark fade (ViewTimeline) ✓,
footer status pulse 1.5s ✓, quote CTA hover fade ✓, button glow and link colour hovers at
0.2s/0.15s cubic-bezier(.4,0,.2,1) ✓, chevron nudges ✓. The two feeds (motion/react) are not in
the capture's list because they start only once on screen; checked with a scripted scroll:
the first rows change after 3.3s.

Re-theme check: `resend-integrate` and `resend-hero` (sample-ember, light) and
`resend-deliverability` (sample-ember, dark) take the theme's serif, colours and radii
cleanly; the violet accent becomes ember's highlight green.

Left as is:
- the serif is Newsreader, ~6% wider than Domaine Display after tracking: "Letters that land"
  is our own copy anyway, so the line count is what matters, and it holds.
- the original hero shows a 3D cube over light streaks, the icon tiles glossy 3D icons, the
  React pane a rendered email, the dashboard a screenshot: all placeholders of the same size.
- the original's SDK tiles switch a set of framework tabs per SDK; ours does the same from
  the props (demo: Node.js has three tabs, the rest one).
