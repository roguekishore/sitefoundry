# plumeform — recreation notes

Original: https://plumeform.com/ (landing) + /pricing + /about, captured in advance
(`precapture.json`). Both extra pages were found. Recreated as a fictional company,
**tidewell**: a quiz and lesson-check builder for teachers (not a survey tool), with its
own copy. Wordmark: lowercase "tidewell" in Manrope with a lucide `Waves` mark.

## Design language

- **Palette roles.** Warm paper (`#faf9f5`) page, white cards, near-black blue-green ink
  (`#161c1e`) for headings and the light-mode CTA, slate body text (`#464d50`). The brand
  is a deep teal ("plume": `#0b6b5f` → `#005a51` → `#00463f`) with a pale mint family
  (`#d3eee8`, `#b4e0d6`, `#6ec2b3`) for badges, hover fills and glows. Dark bands are an
  almost-black green (`#061210`) lit by a WebGL "fluted glass" canvas (vertical teal flutes).
  Soft colour clouds (mint, sky `#cde3f2`, peach `#fde4cb`, honey `#f5e8b8`) float behind
  every light panel.
- **Rhythm.** Bands alternate light / dark. Large vertical air: ~110–120 px section padding
  at 1440, feature rows ~700 px apart. Content column 1104 px (169 px side margins at 1440),
  24 px gutter on phones.
- **Type scale.** H1 72 px (60 at 390) extra-bold, tight (-0.03em), line-height ~1.1.
  H2 48 px (36 at 390), bold, -0.025em, line-height ~1.05. Body 16/26, lead 20/32.
  Eyebrows 11.5 px uppercase, tracking 0.22em, semibold. Panel labels 10 px, 0.16em.
  PRO badges 9 px, 0.14em, on mint pills.
- **Shapes.** Pills everywhere (buttons, nav, chips, toggles). Cards 28 px radius, inner
  fields 10 px, hero frame 33 px. Hairline borders (white 12 % on dark, `#e2ded7` on light).
- **Depth.** Light panels: a white 94 → 74 % gradient with a white 72 % border, inset 1 px
  highlight and a long soft drop (0 20 46 -30). Dark glass cards: white 7 → 3 % gradient,
  white 10 % border, inset top highlight, deep green drop shadow (0 20 50 -30).
- **Header.** A floating pill (inset 8 px top), sticky, glass; it turns dark over dark
  bands and light over light ones.

## Type

| Original | Class | Width / x-height | Ours |
|---|---|---|---|
| Manrope 200–800 | geometric-grotesque sans, open shapes | normal width, tall x-height | **Manrope Variable** (`@fontsource-variable/manrope`, already in the workspace): it is the original's face and is open-licence, so no substitution |
| Instrument Serif italic (one element: likely the hand-drawn "← us" in the comparison table) | display serif italic | condensed | **not used**: one decorative glyph; set in Manrope italic instead to avoid a new package for a single word |
| ui-monospace (a code chip, a request line) | mono | – | the theme's system mono stack |

## Section map (landing)

Heights at 1440 / 390. None of the sections is "sized by the window" (the hero is 1093 /
961 px in a 900 / 675 px window: content-sized). The stats band's canvas "fills the window
height" at 1440 only because the band is ~886 px tall in a 900 px window; the band itself
is content-sized.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | floating nav pill | `plumeform-header` | 52 (sticky, top 8) | brand · Start free · burger | brand · 6 links (3 with chevrons) centred · Log in · Start free | – | sticky; tone flips light/dark over bands; hover fills |
| 2 | hero (dark) | `plumeform-hero` | 1093 / 1234 | centred H1 3 lines, lead, CTA, tall phone-shaped frame 338×680 | centred H1 2 lines, lead, CTA, wide frame 1100×675 scaled 0.84 | fluted canvas → `backdrop`; embedded survey → `media` | aurora-in, rise, halo spin loop, frame grows with scroll |
| 3a | note under the hero | `plumeform-split` intro | in 3 | centred small line + underlined link | same | – | reveal |
| 3b–d | three feature rows (two ways · logic · results) | `plumeform-split` | 2332 / 2975 | text then panel, stacked | text 5 cols / panel 446 px, alternating sides | each panel's demo → `media` | reveal (rise 22 + blur), clouds float 12 s + scrubbed drift |
| 4 | quality checks (dark) | `plumeform-card-grid` (centred) | 1040 / 2045 | centred heading, CTA + note, cards stacked | centred heading, CTA + note in a row, 3×2 glass cards | canvas → `backdrop` | reveal, cards staggered |
| 5 | embed | `plumeform-embed` | 1190 / 1894 | heading, body, two panels stacked with ↓ | heading left / body right, two panels with → between | site mock, dashboard mock → `media` ×2 | reveal, cloud drift |
| 6 | question types (dark) | `plumeform-types` | 1638 / 2063 | intro, chip groups, card stack, 2-col list | intro 2 cols; chips left / stacked demo card right; 5-col list | demo card → `media` | reveal; chip hover |
| 7 | compare + open text | `plumeform-split` (2 rows, bullets) | 1917 / 2834 | stacked | panel left / text right, then text left / panel right | ×2 `media` | reveal, clouds |
| 8 | make it yours (dark) | `plumeform-looks` | 1384 / 2708 | list of layouts, preview card, bento stacked | wide heading; layout list + preview card; bento "54" + swatches; 3 small cards | preview → `media` | reveal; tab swap-in 340 ms |
| 9 | integrations | `plumeform-integrations` | 1301 / 2071 | heading, body, diagram, chip rows | heading left / body right, wide diagram, two chip rows | diagram → `media` | reveal, clouds |
| 10 | at a glance (dark) | `plumeform-stats` | 886 / 1243 | heading, stat cards stacked | heading, bento: tall "100", "21", "$15", wide "0" | canvas → `backdrop` | reveal, cards staggered |
| 11 | pricing | `plumeform-pricing` | 2003 / 3054 | heading, plans stacked, scrolling table | heading + side link; Free / Pro cards; comparison table | – | reveal; billing toggle swap |
| 12 | import (dark) | `plumeform-card-grid` (start) | 792 / 1246 | heading, cards stacked | heading with PRO, 3 cards | canvas → `backdrop` | reveal |
| 13 | FAQ | `plumeform-faq` | 622 / 930 | heading, accordions | heading, full-width accordions | – | reveal; + turns × |
| 14 | templates + CTA card | `plumeform-templates` + `plumeform-cta` | 1461 / 2045 | heading, chips, cards; dark CTA card | heading, chips, 3-col cards; 1104×553 dark CTA card in a mint band | thumbnails → `media`; canvas → `backdrop` | reveal; card hover lift |
| 15 | contact | `plumeform-contact` | 715 / 1288 | text, topic pills, form card | text left / form card right, clouds behind | – | reveal |
| 16 | footer | `plumeform-footer` | 843 / 1761 | teal gradient card inset 8 px, columns 2-up | teal gradient card inset 16 px, rounded top, 5 columns | – | reveal |

## Section map (pricing page)

| # | section | block | height | 390 | 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `plumeform-header` | 52 | | | – | sticky |
| 2 | plans + comparison | `plumeform-pricing` (h1, compare heading, "long version" links) | 2834 | stacked | 2 cards + table | – | toggle swap |
| 3 | FAQ | `plumeform-faq` | in 2 | | full-width accordions | – | + → × |
| 4 | CTA card | `plumeform-cta` | 753 | | dark 1104×561 card in mint band | canvas → `backdrop` | reveal |
| 5 | footer | `plumeform-footer` | 843 | | | | |

## Section map (about page)

| # | section | block | height | 390 | 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `plumeform-header` | 52 | | | | sticky |
| 2 | intro + person card | `plumeform-about-intro` | ~780 | stacked | H1 60 px, lead; white card: name left, text right | – | reveal |
| 3 | CTA card | `plumeform-cta` | ~680 | | dark card 1104×523 | canvas → `backdrop` | reveal |
| 4 | footer | `plumeform-footer` | 843 | | | | |

## Motion inventory

| section | trigger | what changes | timing | ours |
|---|---|---|---|---|
| header | pinned | sticky top 8 px for the whole page | – | `position: sticky` |
| header | scroll position | light ↔ dark glass depending on the band beneath | instant + 0.2 s colour | small effect checks `[data-tone="dark"]` bands under the header and toggles `.dark` (hydrate load) |
| hero backdrop | load | opacity 0→1, scale ~1.06→1 ("aurora-in") | 1600 ms ease-out | CSS keyframes |
| hero h1, lead | load | rise in place (translateY ~18→0, no fade) | 650 ms | CSS keyframes, staggered 80 ms |
| hero CTA, frame | load | opacity 0→1 + rise | 650 ms, delayed | CSS keyframes |
| hero frame halo | loop | conic gradient ring (honey → mint) spins behind the frame edge | 3 s linear infinite | CSS keyframes on a ring element |
| hero frame | scrubbed | scale 0.84→~1 (0.76→ at 390) while scrolling the first screen; its glow fades | over the first ~900 px | CSS `animation-timeline: scroll(root)` |
| all bands | entering view | opacity 0→1, translateY 22→0, blur → 0; lists staggered | ~450 px of scroll | `plumeform-reveal` (view timeline, `entry 0px → entry 220px`, +40 px per step) |
| light panels | loop | colour clouds float | 12 s ease-in-out infinite | CSS keyframes |
| light panels | scrubbed | clouds drift up ~40 px and shrink 1.09→1.02 across the trip | whole view | CSS view timeline (`cover`) |
| dark bands | entering view | canvas fades in | quick | backdrop placeholder fades in (view timeline) |
| looks tabs, billing toggle | click | new content swaps in (opacity + 6 px rise) | 340 ms | CSS keyframe replayed by React `key` |
| buttons | hover | translateY −1 px, fill darkens/turns mint | 0.2 s ease | Tailwind `hover:` |
| nav links | hover | colour to full, faint fill | 0.2 s | Tailwind |
| chips | hover | border white 12→30 %, text to full | 0.2 s cubic-bezier(.4,0,.2,1) | Tailwind |
| cards (templates) | hover | lift, border, shadow | 0.3 s cubic-bezier(.2,.8,.2,1) | Tailwind |
| inside demos | – | spinner, chips flying into a chart, live bars | – | **not rebuilt** (media) |

## Media slots → placeholders

- fluted-glass WebGL canvases (hero, quality, types, looks, stats, import, CTA cards): a
  `backdrop` slot; empty → the band's dark surface with one soft `glow` radial light. No flutes.
- embedded survey in the hero frame: `media`; empty → a `foreground`-coloured (paper) surface
  inside the haloed frame, same 33 px radius and size.
- every light demo panel (format toggle, branching, live chart, embed site + dashboard,
  cross-tab, open-text themes, integrations diagram, contact form is *built*): `media`; empty
  → the glass panel frame with an empty muted inner area of the original's aspect ratio.
- question-type demo card stack, looks preview, template thumbnails: `media`; muted surfaces.

## Decisions

- **Mock UI is media.** The original's panels are working mini-apps (toggles, charts, flows).
  They are product UI, so they become placeholders inside the real panel frame; the layout
  chrome around them (chips, tabs, pills, badges, the plans, the table, the form) is built.
- **Dark bands force `.dark`** (like huly): the light mode is the faithful one and the dark
  bands stay dark in it. The dark theme mode makes everything dark (sibling).
- **Header tone** needs a little JS (hydrate load). Static HTML renders the light pill; the
  page passes `initialTone="dark"` because it opens on the dark hero.
- **Reveals** use one shared CSS component (`plumeform-reveal`) with fixed-px ranges ending
  on `entry` (see memory: a percentage range leaves tall first-screen cards half-faded).
- **Headings** at 700 (H2) / 800 (H1): the capture lists 800 ×18 and 600/700 often; by eye
  the H2s read as bold rather than extra-bold.
- **Section padding** one token, `--section-y: 7rem`; feature rows add their own gap.
- **Competitor names** in the comparison table are invented.
- **Pages** `pricing` and `about` built from the same blocks plus `plumeform-about-intro`.

## Comparison rounds

Capture caveat: the original's section crops and ours are blank below the first screen
(both use scroll reveals that a full-page screenshot never triggers), so pairs were
compared on the scroll frames, and the lower landing blocks (templates, contact) through
single-block previews (`preview.html?item=…`) plus the pricing and about pages.

### Round 1 (landing 1440 19 327 px vs 19 216 · 390 28 356 vs 29 391)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | same pill and contents | pill 1152 px wide, original 1104 | sticky ✓, tone flips light/dark ✓ | yes: inner width = page width − 2 gutters |
| hero | halo ring broken at the corners of the tall phone frame | dark band ran 71 px into the next section (frame's negative margin collapsed through the band) | load rise ✓, halo spin ✓, scrubbed grow 0.84→0.92 ✓, glow fade ✓ | yes: ring 260 % wide on phones; band `flow-root` |
| hero | 4 px sideways overflow at 360 (frame glow) | – | – | yes: band `overflow-x-clip` (vertical stays visible so the frame still overruns) |
| feature rows | panel full width (342), original 300 | ✓ layout, gaps, panel size | reveal ✓, clouds float + drift ✓ | yes: panel max 18.75rem on phones |
| quality cards | ✓ | ✓ 3×2, CTA row | reveal + stagger ✓, backdrop fade ✓ | – |
| embed | ✓ | heading wrapped to 3 lines (our copy longer) | ✓ | yes: shorter copy |
| answer types | ✓ | demo card rode up into the link | ✓ | yes: card starts level with the chip groups |
| looks | ✓ | heading wrapped to 2 lines (original 1); band 155 px taller | swap-in ✓ | yes: heading 46rem, bento gap 5rem |
| stats, pricing (landing) | ✓ | Pro card a touch greyer than the original's teal | toggle swap ✓ | yes: dark chart-1 chroma up |
| pricing page | ✓ | H1 wrapped to 2 lines (original 1) | – | yes: h1 variant 50rem wide |
| footer | ✓ | header turned dark over it; the original stays light | – | yes: footer no longer marks itself dark |
| contact | ✓ | placeholders and typed text bold (inherited from the label) | – | yes: inputs `font-normal` |
| about | ✓ | person card split 50/50 and 43 px taller; original ~40/60 | – | yes: 2fr / 3fr, less padding |
| halo colours | – | ring olive/teal; original bright honey + cyan | – | yes: dark chart-2/4 brighter (panel clouds dim to 20 % in dark mode) |

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ frame, ring, CTA | ✓ 1116 px band (original 1093), header 168→1272 | ✓ | – |
| feature rows | ✓ | ✓ (scroll frame 2 lines up with the original's) | ✓ | – |
| all | fits at 360 / 768 / 1024 on all three pages | – | – | – |

Remaining, by choice: the fluted-glass canvases are soft glow placeholders; every mock-UI
panel is an empty placeholder of the original's size; headings are our (shorter or longer)
copy, so some line breaks differ; the templates cards were never visible in the capture, so
their design follows the site's card language rather than a seen layout.

Re-theme check: `plumeform-card-grid` and `plumeform-pricing` under `sample-ember` take its
serif, browns and orange cleanly (captures `ours-ember-*`).
