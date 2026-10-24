# Ultrahuman (ultrahuman.com) — recreation notes

Captured in advance (precapture.json, landing only, no other pages asked for). Recreated as a
fictional smart-ring maker, **Kinrise** (bands "Halo Max" and "Halo Lite"), with its own copy.

## Design language

- **Palette:** a white product-store page with pure black ink. One saturated cobalt blue
  (#112baf) carries every purchase button ("Buy now", the header CTA). Secondary text is ink at
  60% (#666) and taglines ink at ~40%. Light panels are #f0f0f0; a black band (#000) with
  #1a1a1a cards holds the flagship product; white-at-10% pills on black for active tabs. A
  bright green (#44d63e) appears only in battery art (arcs, dotted rings) → `highlight`/`glow`.
- **Type:** one neo-grotesk (Geist) for everything, set tight: 16px/22px body at −0.28px,
  headings 40px/48px at −1px, product taglines 40px in grey under a 40px name, stat numerals
  56–88px at −1px…−3px. Labels: uppercase 13–16px grey, and JetBrains Mono uppercase with wide
  tracking for "A CLOSER LOOK AT…" eyebrows and HUD readouts. A promo banner uses an
  ultra-condensed italic gothic (Dharma Gothic E) at 88px, uppercase.
- **Spacing:** generous: ~120px above section headings, 40px gaps between heading and content,
  16px gutters between cards. Desktop content is 1280px (80px margins at 1440); phones use
  20–24px gutters.
- **Layout:** full-bleed media panels inset 10px from the window edge with 16px corners; centred
  section intros; a 2-column product layout (sticky media left, stacked cards right); a 4-column
  footer with hairline column rules.
- **Shapes and depth:** 16px card radius (12px for carousel photos), fully round pill buttons
  (~140×37), no shadows except a faint one on the floating header pill; the header uses a
  translucent white with backdrop blur once scrolled.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Geist (variable) | neo-grotesk sans | normal / large x-height | **Geist Variable** (`@fontsource-variable/geist`) | the original's own open font |
| JetBrains Mono | monospace | normal / tall | **JetBrains Mono Variable** | the original's own open font |
| Dharma Gothic E (italic, promo headline) | condensed gothic display | ultra-condensed / tall | **Saira Variable** at `font-stretch: 50%`, italic, weight 500 | Saira's width axis goes down to 50% (Extra Condensed) and it ships a true italic; closest open match on width, x-height and the squared rounds. Set as theme-only `--ultrahuman-condensed`; other themes fall back to their display face. |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement + header | `ultrahuman-header` | content (32 + 45/57px) | one-line notice; mark left, text CTA, locale dot, bag, menu right | notice; menu + 4 links left, wordmark centre, locale pill, bag, blue CTA right → floating pill once scrolled | — | scrubbed with page scroll: notice slides up 32px, bar becomes a 1280px rounded translucent pill, wordmark swaps to mark |
| 2 | promo banner | `ultrahuman-promo` | **90svh** at 390; 503px (aspect 1420/503) at 1440 | photo panel, copy pinned bottom-left | photo panel, copy left, circular lens + 3 HUD readouts right | photo (cover) | none |
| 3 | hero | `ultrahuman-hero` | **95svh** at 390, **100svh** at 1440 | centred copy at top, buttons side by side | copy left-middle, two buttons | photo/video (cover), white fade at the bottom | load: copy group and CTA row rise + fade, 600ms |
| 4 | science | `ultrahuman-science` | **100svh** | centred intro, 6 photo tiles in corners bleeding off edges | centred intro, 6 tiles in two overlapping pairs + singles around it | 6 photos | entering view: tiles fly out from the middle (scale .6→1, translate), intro rises 24px |
| 5 | battery | `ultrahuman-battery` | content 530px at 390; **100svh** at 1440 | stacked: label / stat / label, art below | label — stat — label in a row, ring art filling the lower half | ring render (contain), green arc canvas | entering view: title layer fades up out; labels slide in (±56px y at 390, ±96px x at 1440); stat scales .92→1 and counts up |
| 6 | signals carousel | `ultrahuman-signals` | content | white band; 290×392 cards from the left with the next peeking; dots | **black** band; 5 tabs; 769×432 centre card with neighbours peeking both sides; caption; dots | 5 photos | intro + cards rise 24/12px on entering view; tabs/dots switch with a 170ms slide; active dot fills as autoplay timer |
| 7 | flagship product (dark) | `ultrahuman-product` tone dark | content | name/tagline, media, statement card, stat card, feature list; sticky bottom bar with name + 2 buttons | name/tagline; left: sticky media + name row; right: statement card, stat card, feature list | product video, stat-card art | sticky left column (desktop) / sticky bottom bar (phone); cards rise on entering view; stat rises scrubbed |
| 8 | light product | `ultrahuman-product` tone light | content | same, light panels | same, #f0f0f0 panels | product render, stat-card art | same; the light bar wipes over the dark one on phones |
| 9 | app intro | `ultrahuman-app` | content (949 / 1032px) | centred intro, two store pills, portrait video 266×473 | centred intro, pills, 800×450 video with play button | video | intro rises 24px |
| 10 | globe | `ultrahuman-globe` | content (844 / 820px) | centred copy, 2 stats with rule, huge globe cropped below | copy + stats left, globe right with 2 glass score cards | globe canvas (round) | heading rises; glass cards fade in and shrink 1→.8 while scrolling past |
| 11 | partners | `ultrahuman-partners` | content (240 / 337px) | mono label, grey logo row drifting | hairline, mono label, 6 grey names | — (names as text) | marquee: very slow loop + translateX scrubbed by scroll |
| 12 | footer | `ultrahuman-footer` | content | accordion groups, contact, follow, app badges, legal, giant wordmark | 4 link columns with rules, 3-cell contact row, legal, giant pale wordmark | — | none |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header notice | scrubbed (page scroll 0→~100px) | translateY 0→−32px (desktop) | linear with scroll | CSS `animation-timeline: scroll()` range 0–100px, lg only |
| header bar | scrubbed (page scroll) | full width → 1280px pill, radius 0→999px, white → white/80 + blur, faint shadow; wordmark → mark | linear | same scroll() timeline on the bar; crossfade wordmark/mark |
| header bar phone | scrubbed | opaque → translucent + blur | — | scroll() timeline, background only |
| hero copy | load | opacity 0→1, rise ~24px; CTA row 100ms later | 600ms ease-out | CSS `@keyframes`, fill both |
| science tiles | entering view | from near the centre, scale .6–.9→1, opacity → 1 | scrubbed over entry | CSS view() per tile with `--from-x/--from-y` |
| science intro | entering view | opacity 0→1, rise 24px | — | shared `ultrahuman-reveal` |
| battery title | entering view | opacity 1→0, rise −24px | — | view() on the section, `entry 55%…100%` |
| battery labels | entering view | opacity 0→1, x ±96px (desktop) / y ±56px (phone) | — | same timeline |
| battery stat | entering view | scale .92→1, opacity 0→1, digits count up | — | same timeline + rolling digit strips (odometer recipe) |
| battery arc | entering view | arc draws from left | — | placeholder band clip-path inset 100%→0 on the same timeline (frame motion only) |
| signals intro, cards, captions | entering view | opacity 0→1, rise 24 / 12px | — | `ultrahuman-reveal` |
| signals carousel | click / autoplay | track slides one card, 170ms cubic-bezier(.22,1,.36,1); active dot widens and fills | 170ms; ~6s per slide | React state (`hydrate: visible`); dot fill is a CSS keyframe whose end advances the slide |
| tab hover | hover | white/60 → white | 220ms | `transition-colors duration-[220ms]` |
| product left column | pinned | media + name row stay while the cards scroll | — | `lg:sticky lg:top-[8.375rem]` |
| product phone bar | pinned | name + buttons fixed to the bottom during the block | — | `sticky bottom-0` first child of the block |
| product cards, stat | entering view / scrubbed | opacity 0→1, rise 24px | — | `ultrahuman-reveal` |
| app intro | entering view | rise 24px | — | `ultrahuman-reveal` |
| globe heading | entering view | rise 24px | — | `ultrahuman-reveal` |
| globe cards | scrubbed | opacity 0→1 then scale 1→.8 | over ~800px | view() on the card, `cover` range |
| partners row | loop + scrubbed | translateX drift with scroll; loop | very slow | outer view() translate (cover), inner 120s keyframe loop |
| page | wheel | eased gliding scroll (Lenis) | ~1.2s | `ultrahuman-smooth-scroll` |
| buttons | hover | primary/light opacity →.92; ink →.85; glass → black fill + white text; outline → faint fill | 200–275ms, cubic-bezier(.22,1,.36,1) | Tailwind transitions in `ultrahuman-button` |

Not rebuilt: the intro splash fade (`splashFade`, a loading cover), the cookie banner and the
chat bubble (third-party overlays, not design), the live-ticking night counter (JS feed; the
number is static), the green arc and dotted-ring canvases themselves.

## Media slots → placeholders

| slot | size (390 / 1440) | placeholder |
|---|---|---|
| promo photo | 370×758 / 1420×503, cover, r16 | mid-grey photo tone under a dark scrim |
| hero photo/video | 370×800 / 1420×900, cover, r16, fades to white | warm muted surface + white fade |
| science tiles ×6 | ~110–160px / 185–272px, r12 | photo tone |
| battery ring render + arc | 390×236 + 460×168 / 1450×441 + 1440×209 | muted slot + soft glow band |
| carousel photos ×5 | 290×392 / 769×432, r16 / r12 | photo tone |
| product media | 350×359 / 632×462, r16 | photo tone (dark band: grey on black) |
| stat-card art | inside the stat card | faint glow ring wash (no drawing) |
| app video | 266×473 / 800×450, r16 | muted gradient + play button (chrome) |
| globe | 1079×1017 / 701×672, round | round placeholder fading to white at the bottom |

## Decisions

- Light is the faithful mode. The flagship product band forces dark colours with the `dark`
  class. The signals carousel is white on phones and black on desktop in the original: built
  with inverted tokens at `lg:` (`lg:bg-foreground lg:text-background`), so under a dark theme
  it inverts the other way; noted in its meta.
- One `ultrahuman-product` block with `tone` covers both product bands.
- Shared pieces as components: `ultrahuman-button`, `ultrahuman-placeholder`,
  `ultrahuman-reveal` (CSS view-timeline rise), `ultrahuman-heading` (centred intro).
- HUD readouts, glass score cards, tabs, dots, store pills and the play button are UI chrome,
  so they are built; brand icons (Apple/Play/socials) become generic lucide icons.
- The giant footer wordmark is our name in Geist at weight 900 italic, pale (#f0f0f0).
- Lenis: the 1440 capture lists Lenis smooth scroll, so the page mounts a small
  `ultrahuman-smooth-scroll` component (lenis, `hydrate: load`, off under reduced motion).

## Comparison round 1

Section heights already matched (390: 77 / 762 / 812 / 844 / 520 / 825 / 1850×2 / 919 / 844 / 254 / 1422 vs
original 77 / 758 / 800 / 844 / 530 / ~850 / ~1900 / 949 / 844 / 240 / 1403; 1440: promo 503, hero/science/
battery window-tall, app 1023 vs 1032, globe 820, partners 345 vs 337). No overflow at 360/768/1024. Every
motion row shows up in ours' Motion list (header scroll morph, hero load-in, science fly-out, battery
crossfade/slide/roll/arc, reveals, sticky, globe cards, partners drift + loop). Section crops show
scroll-driven reveals at their start state (blank signals band), so those were judged on scroll frames.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| product phone bar | sat at the band's top and scrolled away; original stays pinned to the window bottom for the whole band | — | sticky bottom only holds an element whose natural spot is below the fold | yes: bar moved to the band's last child, bottom padding reduced by its height |
| product feature titles, carousel captions | regular weight, looser | same | — | yes: weight 500, −0.04em; descriptions +0.01em |
| promo headline | 3 lines: Saira at 50% still ~15% wider than Dharma Gothic | slightly wide | — | yes: theme-only `--ultrahuman-squeeze` 0.03em subtracted from tracking; shorter sample line |
| footer | — | link pitch 44 vs 42px; contact row 158 vs 139px; wordmark centred and too tall (190 vs 118px) | — | yes: links are block flex (22px line), row padding 36/28, wordmark is SVG text stretched to the full width |
| header | — | links start 8px left of the original | — | yes |
| hero / app copy | body wrapped to a 2nd line (copy longer than original) | app body orphan | — | yes: shorter sample copy |
| hero media | grey placeholder vs the original's beige photo | same | — | no: placeholder (token grey) by design |

## Comparison round 2

The round-1 fixes held: the phone product bar stays pinned at the bottom and the light band's
bar takes over from the dark one as it scrolls in; the promo offer sets in two lines at 390;
the footer wordmark spans the full 1280px. Targeted mid-scroll shots (playwright in /tmp)
confirmed the battery handover (title gone, "UP TO — 12 DAYS — PER CHARGE" in place, glow arc
swept in) and the science tiles landing as the section fills the window. Dark mode and
`sample-ember` re-theme cleanly (product band and hero checked); the signals band inverts to
white under a dark theme, as noted in its meta.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | — | 910px tall (the 10px gap above it lived inside the section): marked 101% of the window | — | yes: the gap is now the promo's bottom padding; hero reads 100% / 95% like the original |
| light product stat | "2.6" at 80px vs the original's ~64px | — | — | yes: 68px on phones |
| footer wordmark | — | italic slant ran 40px past the right margin | — | yes: textLength 1244, x −8 |
| partners | names paler than the original's grey logos | same | — | yes: ink at 45% |
| light product media | the original's render sits on white; our soft placeholder reads as a pale card | same | — | no: a placeholder has to show its frame |
| globe | — | the original's lit globe; ours a plain dark disc fading at the bottom | — | no: media placeholder |

Checks: window-sized sections match (390: 90/95/100%, 1440: 100/100/100%); no overflow at
360/768/1024; every motion row present in ours' Motion list; hover changes match (opacity .92 /
.85, glass → ink fill, outline faint fill, tab white/60 → white at 220ms).
