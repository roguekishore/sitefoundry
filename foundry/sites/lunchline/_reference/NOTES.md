# lunchline: notes

Recreating the landing page of lunchlinepartners.com (precaptured 2026-10-21; no other pages
asked for). The fictional company is **ferrybank holdings**, a small operator-investor
partnership whose story starts on a morning commuter ferry. All copy, names, portfolio
companies and people are invented.

## Design language

- **Palette:** warm, papery and calm. Alabaster cream (#f6f4e8) is the page; charcoal
  (#272727) is the ink and the footer band. One deep evergreen (#104647) panel carries the
  "formula" chalkboard. Two sands step the contact band: lichen (#e9e7d6) on the left, beige
  (#d1ceb9) under the form. Citron olive (#8b8d73) draws every hairline and the small
  numbers. A slate navy (#405566) marks role labels. White only for the polaroid frame and
  form fields.
- **Type scale:** light (300) is the voice: 82px hero at 1440 (48 on phones), 56px section
  headings (38 / 24 on phones), 40px card titles, 28px lead paragraphs. Bold (700) only for
  tiny tracked eyebrows (16px, +0.08em, uppercase), the philosophy quotes (28px) and the
  scribble-underlined links (LINKEDIN, SUBMIT). A handwriting face fills the whiteboard
  formula, the polaroid caption, partner names, "meet …" tags and the "exited" badge.
- **Spacing rhythm:** ~104px section padding at 1440, ~40–48px on phones. 56px gutters at
  1440, 16px on phones. Page content 1328px wide (full 1440 minus gutters).
- **Layout grid:** halves. Approach, contact and footer split exactly at the centre with a
  citron hairline; philosophy's list starts a quarter in; partnerships is a 2-column table
  of bordered cells.
- **Shapes and depth:** square everything (2px radius at most). Flat: the only shadow is the
  polaroid's soft 0 4px 12px. Lines do the structuring: each band's top rule draws itself in.

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Non Sans (300/400/700) | neo-grotesk with geometric touches (single-storey g, double-storey a, cut t) | normal width, large x-height | **Hanken Grotesk Variable** (already installed) | same skeleton (double a, single g), airy at 300, compact and dark at 700; not a default face |
| Reenie Beanie | handwriting (marker) | narrow, small x-height | **Reenie Beanie** (`@fontsource/reenie-beanie`, OFL) | it is an open font: the same face |
| system-ui (story paragraph, nav) | the site's fallback (Segoe UI on Windows) | | Hanken Grotesk | the original appears to fall back by accident; one family reads cleaner |

The handwriting face has no token. The theme sets `--typeface-hand` and blocks read
`font-[family-name:var(--typeface-hand,var(--typeface-display))]`, so other themes fall back
to their display face. **Decision for the user:** add `--typeface-hand` to the base tokens?

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | lunchline-header | 76 / 104 fixed | cream glass bar, wordmark left, square sand menu button, hairline under | transparent over the hero: wordmark top-left, nav bottom-right on a 1px rule with a thick bar over the active link; turns cream once past the hero | none | lg: hides on scroll down, shows on scroll up; backdrop wipes in (clip) past the hero; active link follows scroll |
| 2 | hero | lunchline-hero | content (580) / **100svh** | heading 48, lead 24, then a 1.32 video band full width | window-sized video, dark tint, heading top-left 82px, lead 32px bottom-right from 58% | video 398×301 / 1440×900 cover | splash fades out; letters rise on load (staggered, growing distance); scroll button appears |
| 3 | story | lunchline-story | content (1156 / 752) | heading 38, paragraph 18, polaroid full width | text in the left half, polaroid centred in the right half | photo 342×433 / 294×374 in a white frame with a handwritten caption | heading letters rise scrubbed; polaroid fades and rises 32px |
| 4 | managing partners | lunchline-partners | content (1779) / **window (924 ≥ 100svh)** | heading, then per partner a square portrait, handwritten name, role, bio, LINKEDIN | full-bleed group photo; heading top-left with a scribble underline; "+ meet …" tags on each person open a cream bio card | photo 1440×924 cover; portraits 390×390 | heading rise; tag + hover tint; card opens |
| 5 | philosophy | lunchline-philosophy | content (597 / 847) | eyebrow, heading 24, numbered list full width | eyebrow, heading 56 (2 lines), list from 25% across | none | heading rise; rows fade in from 24px right, staggered; + turns to × on open |
| 6 | approach | lunchline-approach | content (1071 / 707) | text block, then the evergreen board full width | two halves: text left, evergreen board right | none (the formula is type) | heading rise; formula lines wipe in left→right, scrubbed, one after another |
| 7 | partnerships | lunchline-partnerships | content (2044 / 1703) | eyebrow, one column of bordered cells | centred eyebrow, 2-column bordered table, last row half-empty | 7 logos 240×72 / 333×100 | cells tint white/50 on hover with a "visit" tag; top rule draws in |
| 8 | contact | lunchline-contact | content (866 / 572) | sand intro, then beige form, single column | halves: sand intro (blurb + LinkedIn at the bottom) / beige form, 2-col fields | none | heading rise; top rule draws in |
| 9 | footer | lunchline-footer | content (594 / 364) | wordmark, 2-col links, icon, copyright, credit row | halves: giant wordmark + copyright / links, legal, icon, credit + back to top | none | wordmark fades in; links dim the others on hover; back-to-top arrow lifts 3px |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| page | load | splash layer opacity 1→0 | ~0.5s after load, 0.5s ease | CSS keyframes in the hero (`lunchline-hero-splash`) |
| header (lg) | scroll direction | translateY 0 → -120% | 0.5s cubic-bezier(.215,.61,.355,1) | JS scroll listener toggles `data-hidden` |
| header (lg) | leaving the hero | cream backdrop clip inset(0 0 100% 0) → inset(0); text to ink | 0.3s ease-out cubic | JS toggles `data-solid`, CSS transition |
| header | scroll position | active-link bar moves | 0.3s | JS scroll spy |
| hero | load | heading + lead opacity 0→1; letters translateY (9→104px, growing per letter) → 0 inside a word mask | 0.9s ease-out, 25ms stagger | CSS keyframes (`lunchline-letter-rise` load mode) |
| hero | load | scroll button rises and fades in | 750ms | CSS keyframes |
| hero | hover | scroll button arrow +4px down | 0.3s | Tailwind transition |
| story, partners, philosophy, approach, contact headings | scrubbed | letters rise per letter (growing distance, capped ~1em) through a word mask; heading fades in | over ~1 screen | CSS view timeline on the heading (`lunchline-letter-rise` scroll mode) |
| story | entering view | polaroid opacity 0→1, translateY 32→0 | entry 0–220px | CSS view() |
| partners (lg) | hover | + square tint beige/50 | 0.3s | Tailwind transition |
| partners (lg) | click | bio card opens; + rotates to × | 0.3s fade | `<details>` + CSS keyframes |
| philosophy | entering view | rows opacity 0→1, translateX 24→0, staggered | entry 0–220px (+40px per row) | CSS view() |
| approach | scrubbed | formula lines clip-path wipe left→right, one after another | ~1.5 screens | CSS view() per line, range offset per line |
| approach, partnerships, contact, footer | entering view | top hairline scaleX 0.86→1 | entry | `lunchline-draw-rule` component, CSS view() |
| partnerships | hover | cell bg → white/50; a "visit" tag appears | 0.15s | Tailwind transition (tag is fixed in the corner, not cursor-following) |
| footer | entering view | wordmark opacity 0→1 | entry | CSS view() |
| footer | hover | other links dim to 0.32; back-to-top arrow -3px | 0.3s cubic | Tailwind group-hover |
| contact | hover | privacy link opacity 0.6 | 0.3s | Tailwind |

Not rebuilt: the cookie banner (third-party consent widget, not the design); the header's
small logo icon fading in after a screen and a half (an icon swap of their logo).

## Media slots → placeholders

- hero video: `media` slot; phones a 1.32 band, desktop fills the window (cover), with the
  same dark tint layer on top. Placeholder: a soft foreground→primary gradient.
- story photo: `media` slot inside the white polaroid frame, aspect 0.79. Placeholder: bg-muted.
- partners group photo (desktop, fills the section) and one square portrait per partner
  (phones). Placeholder: a soft gradient from highlight to muted.
- 7 portfolio logos: `logo` slot 240×72 / 333×100. Placeholder: bg-muted/70.

## Decisions

- One block per visual section; three shared components: `lunchline-letter-rise` (the
  per-letter heading reveal), `lunchline-draw-rule` (the self-drawing top hairline) and
  `lunchline-scribble-link` (bold tracked link with a hand-drawn underline).
- Partner bios on desktop use `<details>`: no JavaScript, keyboard-accessible.
- Philosophy accordion also uses `<details>`.
- The hand-drawn underlines are a single simple stroke (an SVG path), the same everywhere;
  the formula's arrow is a lucide icon. They're layout chrome, not artwork.
- The partnerships hover tag sits in the cell's corner instead of following the cursor (CSS
  only; following the cursor needs JS for a small gain).
- Desktop hero text on the media uses `text-background` over a `bg-foreground` tint, so it
  inverts sensibly in the dark theme.

## Comparison round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| page | 8px sideways overflow (philosophy rows waiting 24px to the right) made the phone browser zoom out, so the fixed header looked shifted up | fits | — | yes: `overflow-x-clip` on philosophy and on the board |
| header | matches (glass bar, hairline, square sand button) | matches; hides on scroll down, wipes in cream past the hero | hide / wipe / active bar all show in the Motion list | — |
| hero | matches (48px heading, 24px lead, 1.32 band) | window-sized (marked so), heading top-left 82px, lead bottom-right | letters rise on load; splash fades | — |
| story | heading ran 4–5 lines (longer copy) | polaroid stretched to the text column's height (494 vs 446); caption small; polaroid 46px left of the original | polaroid rise 32px shows | yes: shorter heading, `self-start`, caption 2rem / 1.85rem, figure set from the right |
| partners | matches (square portrait, hand name, tracked role, bio, scribble link) | photo section 922px (orig 924), tags placed on the photo | heading rise scrubbed | scribble nudged under descenders |
| philosophy | matches | matches (list from 25%, 92px rows) | rows fade in from 24px right, staggered | — |
| approach | aside line wrapped (copy and 40px size) | handwritten lines smaller than the original's (~45 vs ~64px) | lines wipe in, scrubbed | yes: aside 2rem on phones, terms 4.1rem / aside 2.9rem on wide screens, note larger, clip widened so the note isn't cut |
| partnerships | matches | matches; hover tint + tag | top rule draws in | — |
| contact | submit's scribble wider than its label (button centred text) | same | — | yes: scribble absolutely under the label |
| footer | wordmark too big (267 vs 229px wide) | wordmark too big (482 vs 334px) | wordmark fades in; dim-on-hover | yes: 3.6rem / 5.3rem |

## Comparison round 2

Heights now (ours vs original): 390 — hero 659/580 (ours includes the 92px header room the
original counts outside), story 1126/1156, partners 1693/1779, philosophy 611/597, approach
957/1071, partnerships 2037/2044, contact 942/866, footer 594/594. 1440 — hero 900/900
(window-sized in both), story 712/752, partners 922/924, philosophy 883/847, approach
668/707, partnerships 1661/1703, contact 572/572, footer 364/364. No overflow at 360, 768
or 1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| story | matches | polaroid now 446 tall, centred where the original's is | rise shows | — |
| philosophy | matches | 36px taller (bottom padding) | rows slide in from 24px, staggered | yes: pb 7rem |
| approach | board ~110px shorter (our sum has one line fewer than theirs) | the hand now matches the original's size; note sits clear of the wipe | lines wipe in left→right, scrubbed (clip-path changes in the Motion list) | accepted: content difference |
| contact | heading 3 lines vs 2 (longer copy) | matches | top rule draws in | yes: shorter demo heading |
| footer | matches | wordmark now close to the original's width | fade + dim-on-hover | — |
| all | | | every inventory row shows up in ours-design.md's Motion list: header hide (translateY 0→-120px) and backdrop clip, hero letter rise and splash, letter rises scrubbed, polaroid fade+rise 32px, rows translateX 24→0, board clip-path, rule scale 0.86→1, footer fade | — |

Re-theme check: `lunchline-approach` and `lunchline-partnerships` under `sample-ember` keep
their layout and switch colour cleanly; the handwriting falls back to ember's display serif
(no `--typeface-hand` there), which still reads as a note.

Dark mode (sibling): coherent; the footer and the desktop hero invert (cream with dark
text), as their notes say.
