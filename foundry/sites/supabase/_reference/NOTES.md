# Supabase recreation: notes

Source: https://supabase.com/ (precaptured 2026-10-24, landing page only; no other pages asked).
The capture shows the site in its **light** mode, so light is the faithful mode here.

Fictional company for the content: **Tidepool**, a managed SQL backend ("the SQL backend
that grows with you"). Wordmark is plain lowercase text in the display face next to a lucide
`Waves` icon tinted with the theme's highlight. Customer, publication and handle names are
all made up.

## Design language

- **Palette:** an almost-white ground (#fdfdfd) with pure white cards; near-black ink
  (oklch 0.1) for headings and emphasised words, mid grey (oklch 0.52, ~#6f6f6f) for
  everything else. One brand green does the work: a deep green (#0f7e4f, oklch 0.525 0.12
  157.5) for primary buttons and the second hero line, and a bright mint (#3ecf8e) only for
  the logo mark and lit dots. Hairlines are ink at ~8% (oklch 0.1 / 0.08), a stronger ~15%
  for outline buttons and inputs. The only loud colour is the customer-story card (a
  pink→orange gradient) and its dark brand strips (navy, deep teal, black, blue).
- **Two-tone headings** are the signature: every section title is two phrases, one ink and
  one grey (or ink + green in the hero), stacked on two lines on desktop, flowing on phones.
- **Type scale:** 46px hero (34px on phones), 34px section titles on desktop (22px on
  phones), 22px for the "use one or all" line and the story quote, 16px lead, 14px body,
  13px mono code, 12px small buttons. Medium weights only: 450 body, 500 titles; nothing bold.
- **Spacing rhythm:** sections ~96px top/bottom on desktop, ~64px on phones; each section is
  closed by a full-bleed 1px hairline. Content column 1088px (68rem) centred, 24px gutter.
- **Layout grid:** a 4-column grid with 12px gaps drives the product bento and the templates;
  two-column text/visual splits for hero, frameworks and open source.
- **Shapes and depth:** 16px card corners, 8–12px on smaller cards, 6px buttons, full pills
  for tabs and the "read docs" chip. Almost flat: hairline borders, a 1px soft shadow on
  buttons, a medium shadow appears on bento cards on hover. Header is 90% opaque with blur.

## Type

| Original | Class | Width | x-height | Ours |
|---|---|---|---|---|
| Manrope (headings, quote) | geometric-leaning grotesk | normal | tall | **Manrope Variable**: it is the original and open (OFL), already installed |
| Inter (body, nav, buttons) | neo-grotesk | normal | tall | **Inter Variable**: the original uses it; weight 450 is available in the variable font |
| Source Code Pro (code, terminal) | monospace | normal | medium | **Source Code Pro Variable**: the original, open |

No substitution needed.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | sticky header | supabase-header | 65px | wordmark left, hamburger right | wordmark, 3 dropdown nav items + 3 links, star count + Sign in + green CTA right | – | sticky, translucent blur; right group fades in on load; nav hover → green, chevron flips |
| 2 | hero | supabase-hero | content (386px desk) | heading 34px 2 lines, lead, two buttons | heading left half, lead right half aligned to its bottom, buttons under heading | – | – |
| 3 | product bento | supabase-products | content (949px) | 7 stacked cards: icon + title + description only | 4-col grid, 2 rows of ~400px: first card spans 2 (with 3-item check list), then 1+1; row 2: 4 single cards; each card has an illustration slot; closing 22px two-tone line | 7 illustration slots (desktop only) | card hover shadow |
| 4 | logo band | supabase-logos | content (270px) | label, then 3×4 grid of grey wordmarks inside a full-bleed bordered band | label, 6×2 grid inside a band with vertical side rules at the 1280 frame | – | – |
| 5 | dashboard | supabase-dashboard | content, frame clipped by section bottom (862px) | heading 22px, 3 pill tabs, browser frame cropped to ~half | heading 34px, tabs, 1088px browser frame (3 dots) cut off at the section's bottom edge | video 16:9 per tab | tab hover border; tab switches media |
| 6 | frameworks | supabase-frameworks | content (696px) | heading, code card full width (6 icon tabs, code scrolls sideways) | heading left (framework name swaps), 544px code card right | – | tabs switch code + name |
| 7 | templates | supabase-templates | content (898px) | heading, underlined link, stacked cards | heading + link right; 2 wide cards with browser-frame preview, 4 small cards | 2 preview screenshots | card hover border |
| 8 | customer stories | supabase-stories | content (812px) | heading, link, tall gradient card, 4 64px strips stacked | heading + link; 480px-tall row: wide gradient card + 4 narrow strips | 1 portrait avatar | strips expand on hover/focus (flex-grow) |
| 9 | community | supabase-community | content (909px) | centred heading, text, button; 2 columns of post cards visible, left-aligned | 5 columns 287px wide, arched offsets (0/60/100/60/0), outer columns cut by the page edge, faded at the edges and bottom | avatars | columns drift vertically (marquee 35s / 30s reverse); cards fade + unblur + rise on entering view |
| 10 | open source | supabase-open-source | content (373px) | centred text + button, dot-matrix counter below | text left, dot-matrix counter right with a radial fade | – | dots light up on entering view |
| 11 | closing CTA | supabase-cta | content (375px) | centred two-tone heading on 2 lines, buttons | one-line two-tone heading, buttons | – | – |
| 12 | footer | supabase-footer | content (1097px) | trust row (stacked), wordmark, social icons, newsletter, 2-col link lists, bottom bar | trust row, then wordmark/social/newsletter left + 6 link columns, bottom bar with theme icon | – | link hover colour |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | pinned | sticky top, 90% bg + backdrop blur | – | `sticky top-0` + `bg-background/90 backdrop-blur` |
| header right group | load | opacity 0→1 | 300ms | CSS keyframe `supabase-header-fade`, fill both |
| header nav | hover | colour ink → green, chevron rotates 180° | 200ms cubic-bezier(0.22,1,0.36,1) | Tailwind `transition` + `group-hover:rotate-180` |
| buttons | hover | green darkens (0.525→0.485 L); outline buttons get a 3% ink wash | 200ms cubic-bezier(0.22,1,0.36,1) | `hover:bg-primary/90` / `hover:bg-foreground/3` |
| bento cards | hover | medium drop shadow appears | 150ms | `transition-shadow hover:shadow-md` |
| dashboard tabs | hover / click | border → grey; active tab ink border; media swaps | 150ms | Tailwind transition + React state (`hydrate: visible`) |
| frameworks tabs | hover / click | icon colour; code + heading word swap | 150ms | React state |
| customer stories | hover / focus | hovered strip grows, featured shrinks | ~500ms ease-out | CSS `flex-grow` transition in the block's .css |
| community columns | loop | vertical drift, alternate directions | 35s / 30s linear infinite | CSS `@keyframes supabase-community-drift` |
| community cards | entering view | opacity 0→1, blur 6px→0, rise per column (60/100px) | view timeline, entry 0% → cover 30% | CSS `animation-timeline: view()` in `@supports` |
| open source dots | entering view | lit dots fade in, staggered by column | view timeline | CSS scroll-driven, delay via range offset per column |

Skipped: the `pulse` 600ms loop on a 6px dot sits inside the Realtime card's illustration (a
typing indicator), which is a media slot; the ~450ms opacity animations on tweets are the
original's own card swaps, folded into the drift loop.

## Media slots

- Bento: 7 illustration slots (elephant / email grid / globe / file grid / cursors / cube /
  API list) → `supabase-placeholder` panels filling the lower part of each card (desktop
  only, as the original hides them on phones).
- Dashboard: one 16:9 video per tab → placeholder inside the browser frame.
- Templates: two preview screenshots inside browser frames → placeholder.
- Stories: customer brand marks → lucide icons; the portrait avatar → round placeholder.
- Community: avatar per card → round placeholder.

## Decisions

- Radius token 0.5rem: rounded-2xl = 16px bento cards, rounded-xl = 12px small cards,
  rounded-md = 6px buttons, as measured.
- `--section-y` is the phone padding (4rem); desktop blocks use 1.5× of it (6rem).
- Story strips use dark-scope tokens (`dark bg-card`, `bg-background`, `bg-secondary`) and
  one `bg-glow` blue, so they stay dark on the light page and re-theme; the featured card is a
  chart-4 → chart-5 gradient (pink → orange), same in both modes.
- Code syntax colours: keyword chart-1 (purple), identifier chart-2 (deep green),
  string chart-3 (amber), punctuation muted-foreground at 70%.
- Customer and framework logos are lucide icons; logo-band wordmarks are plain text names.
- The mobile menu is a `<details>` disclosure so the header needs no JavaScript.
