# Raycast → recreation notes

Original: https://www.raycast.com/ (captured in advance, 390 and 1440). Recreated as a made-up
product, **Tessel** ("a keyboard-first launcher"); every word, name and number in the demos is invented.
Slug and block names stay `raycast-*`.

## Design language

Dark only (the original has no light mode). A near-black page (`#07080a`) with one family of cool greys
for everything else: raised panels `#111214`, hairlines at 6–10 % white, text in white, `#9c9c9d` and
`#6a6b6c`. Colour is rationed: one **red** (`#ff6363` for the eyebrow and links, a deep crimson for the
streak artwork behind the hero, the community band and the footer) and, inside the extension cards only,
a tint per card (indigo, blue, green…). Everything is flat panels with a hairline ring, a faint top-left
white gradient (`rgba(255,255,255,.03→.1)`) and, on keys and buttons, a pile of inset highlights that
makes them feel like physical keycaps. Large soft glows (`rgba(215,201,175,.05) 0 0 20px 5px`) instead of
drop shadows.

- **Type scale:** body 14 px (mobile) / 16 px, letter-spacing 0.2 px; section headings are *two-tone* at
  20 px / 1.2 (first sentence white, 600; second sentence grey, 500) and centred; hero h1 32 px → 56 px,
  semibold, 1.15; big card titles 16–18 px; the developer block uses a 48 px light-weight h2 and mono body.
- **Spacing rhythm:** 8 px base (`--spacing-1` = 8 … `--spacing-13` = 224). Sections start ~168 px (mobile)
  / ~224 px (desktop) under the previous one, then a 20 px heading, then ~64–100 px to the content.
- **Grid:** container 1204 px (`--container-width`), 24 px side padding on phones; the AI cards use a
  narrower 1020 px column, the community cards 900 px.
- **Shapes:** 12 px panels, 20 px extension cards, ~40 px AI cards, full-pill tabs/buttons, 11 px keycaps.
- **Depth:** keycap = dark gradient + inset highlights + 1 px black ring; panels = 1 px ring at 6–10 % white
  and a low-alpha top-left gradient; hover on the white button = background goes from `#e6e6e6` to white.

## Type

| Face | Class | Width / x-height | Where | Our font |
|---|---|---|---|---|
| Inter (variable, 100–900) | neo-grotesk / UI sans | normal width, large x-height | everything | **Inter Variable** (it *is* the original's face, so no substitute) |
| Geist Mono (the file is named `GeistMono`) | geometric mono | normal, large x-height | eyebrow, labels ("Favorite Feature:"), community counts, developer block, small print under buttons | **Geist Mono Variable** (same) |

Instrument Serif and VT323 are loaded by the original but I found no visible use; skipped.

## Section map

Heights at 1440 / 390. "content" = height comes from padding + content (the capture marks no section as
sized by the window; the hero is 967 px in a 900 px window and 615 px in 844, so it is content-sized too).

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header | `raycast-header` | fixed, 76 px bar | floating rounded bar (16 px inset), wordmark left, hamburger right | 1204 px floating rounded bar: wordmark, 9 links centred, "Log in", white download button | – | fixed; hover colour on links; mobile menu opens a panel |
| 1 | hero | `raycast-hero` | content (615 / 967) | red diagonal-streak art fills the box; centred h1, lead, pill with spinning border | same, plus download button, mono OS line and "install via" line | 1 canvas (streak art) | load: heading + lead fade-in-up 1000 ms stagger; pill border rotates 3 s loop |
| 2 | take shortcuts | `raycast-showcase` | content (1067 / 1375) | heading, full-bleed 390×386 window, dock of 5 icon buttons, caption | heading, 1204×733 framed window, dock under it, caption | 1 image per dock item (window shot) | dock buttons switch window + caption; tooltip above the active key; stars drift in the frame (media) |
| 3 | not about saving time | `raycast-key-features` | content (709 / 720) | keyboard grid above, heading + button below | heading + button left (x 142), keyboard right with 4 tiles | none (keys are built) | tiles scrub opacity 0.2 → 1 as they enter, keys dim |
| 4 | extension for that | `raycast-extensions` | content (1124 / 1257) | heading, scrolling pill tabs, one card + peek of the next, link + round arrows | heading left, pill tabs right, 3.3 cards 360 px, link left, arrows right | 2 per card (app icon, artwork 300×300) | cards slide in (700 ms); tabs switch the set; arrows scroll the track; card glow on hover |
| 5 | virtual assistant | `raycast-ai-agent` | content (1466 / 1389) | eyebrow, h2, lead, 3 stacked cards | same, wide card on top, two cards below, 1020 px column | chat window (wide), quick AI list (built text), extensions (empty frame) | Quick AI prompt cursor blinks (prompts do not cycle: static text); list fades at the bottom |
| 6 | professionals | `raycast-testimonials` | content (874 / 1100) | people row (centre active, edges clipped), quote, mono label rows | row, hairline fading at the ends, 2 columns split by a vertical line | 3 avatars | active person changes every 5 s with a progress bar; quote fades in |
| 7 | don't repeat yourself | `raycast-snippets` | content (1432 / 1143) | 3 stacked cards, media above text | wide card (text left, media right), two cards below | 2 shots (composer, search list); keycaps built | – (hover ring only) |
| 8 | what else | `raycast-notes` | content (1151 / 986) | media on top, chip, long paragraph | text left, media right | 1 image (notes window) | the paragraph brightens word by word while scrolling; first sentence glows |
| 9 | stay in the loop | `raycast-community` | content (1006 / 795) | heading, 2 stacked cards, snap-scrolling video row, youtube link | heading, 2 cards side by side (900 px), row of 230×129 thumbnails with faded ends, link | backdrop streak, 6 thumbnails | thumbnails scroll sideways (snap), hover brightens |
| 10 | build the perfect tools | `raycast-developers` | content (3316 / 3182) | one-column grid of cells: heading+text, then each figure then its text | 3-column hairline grid (356 px cells, dotted floor), figures and texts alternate | 6 isometric figures | FIG labels; arrow nudges on hover |
| 11 | take the short way | `raycast-cta` | content (732 / 1244) | cropped keyboard behind heading | keyboard with a glowing `command` + space bar, heading + button below | – | keys glow (loop, slow breathe) |
| 12 | footer | `raycast-footer` | content (2199 / 1239) | streak art, 2-col link grid, newsletter stacked | 6 link columns, newsletter row | streak art | link colour hover |

Components: `raycast-button` (white keycap button), `raycast-heading` (two-tone heading), `raycast-placeholder`
(media stand-in), `raycast-keyboard` (the key grid used twice), `raycast-eyebrow` (mono red label).

## Motion inventory

| section | trigger | what changes | timing | built with |
|---|---|---|---|---|
| hero | load | heading and lead fade in and rise (`H3BVAa_fade-in-up`), lead delayed | 1000 ms ease-out | CSS keyframes, `both` fill |
| hero pill | loop | conic border highlight rotates (`rotating2`) | 3 s linear infinite | CSS keyframes with `@property` angle |
| header links / buttons | hover | colour grey → white; button #e6e6e6 → white | 0.2 s ease-in-out | Tailwind transitions |
| showcase | click | dock key becomes the big raised key, window and caption swap, tooltip above | 0.4 s | React state, CSS transitions |
| key features | scrubbed | each tile opacity 0.2 → 1 while it crosses the viewport | per tile, staggered | CSS `animation-timeline: view()` |
| extensions | entering view | cards slide in from the right and fade (`slideIn`) | 700 ms, 60 ms stagger | CSS view timeline (entry) |
| extensions | click | arrows scroll the track by one card; tabs swap the set | smooth | `scrollBy` in an event handler |
| extensions | hover | card glow grows | 0.3 s | Tailwind |
| ai agent | loop | the Quick AI prompt cursor blinks (`blink` 1.1 s); prompts do not cycle (skipped) | 1.1 s step | CSS keyframes |
| testimonials | loop | person row advances, progress bar fills (`progress`) | 5 s | React timer + CSS progress keyframes |
| notes | scrubbed | each word of the paragraph goes grey → white across the scroll | per word offset | CSS view timeline with per-word range |
| community | hover / drag | thumbnails brighten | 0.3 s | Tailwind + scroll-snap |
| developers | hover | arrow nudges 3 px | 0.3 s | Tailwind |
| cta | loop | command + space keys breathe a red glow | 3 s ease-in-out | CSS keyframes |
| footer / links | hover | colour grey → white | 0.3 s | Tailwind |

Skipped: the three.js/WebGL hero canvas, the icon animations inside extension cards, and the pinned
header-over-content behaviour beyond a plain fixed bar (the capture's "pinned" entry is the header).
No smooth-scroll library was seen, so none is built.

## Media slots

| slot | size | placeholder |
|---|---|---|
| hero streak art | full hero box, 1200×967 | `raycast-placeholder` glow tone: red radial wash, no stripes |
| showcase window | 1300×733 (390×386 on phones), radius 12 | muted panel with ring |
| extension app icon / artwork | 36 px / 300×300 | muted rounded square / muted panel |
| chat window (AI) | 1020×~400 | muted panel |
| AI extensions card | 485×500 | empty framed panel (as the original) |
| avatars | 48 px circle | muted circle |
| snippets composer / quicklinks list | ~460×220 | muted panel |
| notes window | 633×633, radius 9 | muted panel |
| community backdrop | 1440×600 | glow wash |
| video thumbnails | 230×129, radius 12 | muted panel |
| FIG_01…06 isometric figures | 712×486 and 356×356 cells | the dotted cell floor only |
| footer streak | 1440×200 | glow wash |

## Decisions

- Dark is the faithful mode; `:root` is a light sibling in the same spirit (white page, ink text, same red).
- Inter and Geist Mono are the original's own faces; both packages were already in the repo.
- The keyboard (key grid) is built as a component: it is page layout (it carries the four feature tiles and
  frames the closing CTA), not product artwork; only letters and tiles come in as props.
- Not a single logo: brand rows (Slack, X, YouTube, extension app icons) use lucide icons or placeholders.
- Header uses state for the phone menu (hydrate); the pill's rotating border needs `@property`, with a plain
  ring fallback where unsupported.

## Verification round 1 (first capture of ours vs original)

Heights are 1440 original → ours (390 in brackets).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | bar fine; page was 438px wide at 360 (AI cards' nowrap prompt widened their grid column) | nine links ran 100px wider than the original's and nearly touched "Sign in" | – | cards `min-w-0`; demo labels shortened |
| hero | 615 → 678: gap lead→pill 234 vs 164 | 967 → 907: title fit on one line (copy shorter), button/notes lower than the original | load rise shows in the Motion list | title capped at 34rem so it wraps to two lines; pill/button gaps remeasured |
| showcase | dock keys 4px apart, bar narrower than 332px | 1375 → 1390; dock bar 305 vs 330 wide | – | dock gap 8px, padding 12px |
| key features | tab key pushed the first tile to x 207 (original: tile at x 24) | keyboard rows 120px too high | tiles scrub (listed) | `desktopOnly` key flag; board top moved |
| extensions | ok | heading and tabs inset 24px from the 1204 column | slide-in listed | rows widened to the column + gutter |
| AI agent | title wrapped to 4 lines; page overflow | 1389 → 1536: 112px of bottom padding the original does not have (it belongs to the next section's top) | cursor blink listed | padding, title width, prompt shortened |
| testimonials | roles truncated | active card 78px tall (original 96); quote 24px (original ≈22); column 1104 wide (original 1068) | progress line + quote fade listed | all three set |
| snippets | description 14px (original 16px) | ok | – | text-base on phones |
| notes | 956 vs 1151: no section padding | media 546px (original 633, bleeding right) | word scrub listed | py-section; media widened |
| community | ok | ok | – | – |
| developers | 3849 vs 3316; cells tall | title wrapped to 4 lines and spilled; doubled 2px lines; ends 260px early | – | rows now share 1px lines; shorter title; 416px top and bottom |
| cta | 536 vs 732: no room for the footer art | 1244 → 1220; bottom row faded, glow weak | glow loop listed | bottom padding, stronger glow, mask only at the top |
| footer | link pitch 41px (original 37) | columns 20px left, link pitch 41, newsletter field too wide | – | `li` flex, column grid 1016px with 58px gaps |

## Verification round 2

Section heights, original → ours at 1440 (390): hero 967 → 985 (615 → 610) · showcase 1375 → 1390 (1067 → 1105) ·
key features 720 → 720 (709 → 709) · extensions 1257 → 1242 (1124 → 1114) · AI 1389 → 1409 (1466 → 1542) ·
testimonials 1100 → 1128 (874 → 926) · snippets 1143 → 1164 (1432 → 1368) · notes 986 → 986 (1151 → 1180) ·
community 795 → 854 (1006 → 1060) · developers 3182 → 3302 (3316 → 3657) · CTA 1244 → 1252 (732 → 712) ·
footer 1239 → 1247 (2199 → 2186). No horizontal overflow at 360, 768 or 1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ok | title two lines, button and notes in place | rise ×3 and pill spin in ours' Motion list | yes |
| AI agent | +76: title/lead one line longer than the original's | +20 | blink listed | shortened title and lead |
| testimonials | row, quote and rows match | card 96 tall, column 1068 | quote fade + progress listed | quote mark nudged left off the first letter |
| snippets | keycaps overflowed at 360 | ok | hover ring only | smaller caps, `min-w-0` |
| notes | section padding 168 as the original | media bleeds right | per-word scrub listed | clipped so 1024 does not scroll sideways |
| developers | still ~340px taller (cells are taller than the original's) | 120px taller | – | padding cut; not chased further |
| CTA | 712 vs 732 | keyboard, glow and heading in place | glow loop listed | – |
| footer | pitch 37 | columns at x 212 | – | – |

Checked under `sample-ember` (light): testimonials re-themes cleanly (cream page, brown ink, cards follow tokens).
Still differs: the hero art (a crimson wash instead of the stripe artwork), media placeholders in every window,
developer-grid height, the pinned-header overlap frames, the Quick-AI prompt not cycling, the extension cards'
inner icon animations.
