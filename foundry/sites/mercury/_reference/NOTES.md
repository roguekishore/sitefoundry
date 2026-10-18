# Mercury — design notes

Source: https://mercury.com (captured 2026-10-18). Content in the recreation is for a
fictional business-banking company, **Larkspur**.

Scope from the user: **the sections and the clean feel, not the animations.** The original
fades and slides almost everything in on scroll, auto-advances its feature tabs and
testimonial carousel, and plays short product videos in the cards. None of that is
recreated. What's kept is interactive state that changes what you *see* (clicking a
feature tab opens it, clicking a testimonial bar shows that story) plus quiet hover colour
changes.

## Design language

**One calm, dark, ink-blue page.** Everything after the hero sits on a single near-black
with a violet tint (`#171721`). No bands, no gradients between sections, no glow. Depth
comes from two slightly lighter steps: `#1e1e2a` for cards (spotlight, CTA cards) and
`#272735` for tiles inside cards. The only saturated colour is the periwinkle-blue CTA
(`#5266eb`). Section changes are marked by a single 1px hairline rule above the heading
(`rgba(175,178,206,.36)`), never by colour.

**Palette roles**
- page `#171721`; card `#1e1e2a`; inner tile `#272735`
- text `#ededf3` (never pure white); muted text `#c3c3cc` (only a little dimmer: Mercury's
  secondary copy is soft, not grey)
- primary `#5266eb` on pills, with white text
- secondary pills: a translucent lavender (`rgba(175,178,206,.2)`) over the page
- tiny pale-blue bullet dot (`#cdddff`) on the open feature tab → our `highlight`
- art panels use *light* surfaces against the dark page: warm paper `#efeee9`, misty blue
  `#d3e1e8`, and a soft slate `#3a3c4a`. The contrast of pale, frosted, blurred art on the
  ink page is a big part of the feel.

**Type.** Arcadia (Mercury's own, closed) at unusually light-medium weights: display
320–480, text 360–500. The page never uses bold except a few labels. Sizes (390 → 1440):
hero 36 → 65px (lh 1.1, weight ~420); centred statements 28 → 42px; section headings
24 → 32px (lh 1.15); spotlight card titles 21 → 28px; feature titles 14 → 18px weight 480;
body 14 → 18px (lh 1.35) weight 360–400; big stat numbers 36 → 65px; footer links 16px;
fine print 10 → 12px with a slight +0.02em tracking.

**Spacing rhythm.** Content column 1024px wide (208px margins at 1440), a 24px gutter on
phones. Sections are separated by ~120px on desktop and ~80px on phones. Inside a section:
heading → 40px → grid; grid gap 32px; card media → 24px → title → 4px → text.

**Shapes.** Pills everywhere for actions (fully round, 40px tall on desktop, 36px on
phones). 12px radius for every card and art panel. 4px for tiny chips (the "SaaS" tag).
Small round 40px icon buttons with an arrow inside spotlight cards.

**Depth.** Flat. No borders on cards; cards are just a step lighter than the page. The
only shadows are inside the light art panels (soft, blurred, frosted UI floating).

**Header.** Transparent over the hero: emblem + letter-spaced wordmark on the left,
centred nav with small chevrons, "Log in" text + primary pill on the right. Phones: emblem +
wordmark + a three-line burger.

**Hero.** A full-bleed photograph (misty valley at dawn with a desk on a hilltop) with a
dusk-pink to blue-grey sky. Centred headline, two-line sub, an email field shaped as a pill
with the primary pill *inside* it on the right, then a translucent "Launch demo" pill. A
small dark translucent disclaimer bar sits at the bottom. On phones the email field goes
full width and the two pills sit side by side under it. We draw our own dawn valley with
SVG ridges and CSS mist.

## Section list (what we build)

| Item | Original section |
|---|---|
| `mercury-header` | transparent top bar |
| `mercury-hero` | dawn-valley hero, email pill form, disclaimer bar |
| `mercury-tabs` | "Everything you do with money" / "Get started fast" / "Stop losing money to fees": heading, hairline-separated tab list (open tab: dot + bold title + text + underlined link), a media panel beside it (either side). Used three times. |
| `mercury-stories` | "Loved by …": centred statement, logo row, big image card with quote overlay and tag, three progress bars |
| `mercury-features` | "Banking's been a headache" / "Run your business" / "Standard protection": hairline, heading, 2 or 3-column grid of art panels with title and text |
| `mercury-quote` | centred big pull quote with name and role |
| `mercury-stats` | centred statement + four big numbers split by vertical hairlines (stacked with horizontal hairlines on phones) |
| `mercury-press` | "In the spotlight": hairline, heading, three dark cards (logo tile, title, round arrow button) |
| `mercury-cta` | centred statement + two pills, then two side-by-side cards with title, text and a secondary pill |
| `mercury-footer` | four link columns (two on phones) in two rows, hairline, "Disclaimers" label beside numbered fine print |

Components: `mercury-button` (primary / secondary / link pills), `mercury-heading`
(hairline + heading; sizes for hero, statement, section, card), `mercury-art` (stand-in
art panels: dawn valley, frosted rings, beam, globe, lens, ripple, coverage bars,
fingerprint, toggles), `mercury-mock` (UI built from divs: accounts list, card, bill,
invoice form, upload bar, transfer rules, role picker), `mercury-mark` (the emblem +
wordmark).

## Decisions

- **Dark is the faithful mode.** Light is a sibling: `#f4f5f9` page, white cards, ink text,
  same blue. Art panels flip with it (they're drawn from `foreground` mixes, so on a light
  theme the "pale" panels become ink panels — still an inverse panel against the page).
- **Font: Hanken Grotesk** (open) stands in for Arcadia. It is a similarly wide, soft
  grotesk and is variable down to 100, so Mercury's in-between weights (360, 420, 480)
  can be set exactly. Geist Mono for the few figures that want mono (Mercury uses IBM
  Plex Mono, also open, but it barely shows on the landing page).
- **No motion.** Per the user. Tabs and the story carousel are click-to-switch, not timed.
- **Logo row** is a static row that scrolls sideways on phones with faded edges (the
  original is a slow marquee).
- The hero photo, testimonial photos and product videos are replaced by our own CSS/SVG
  art and div-built UI mocks. Press logos become plain typeset wordmarks of made-up
  publications.
- The huge legal footnote block is kept as a *pattern* (label + numbered fine print) with
  short placeholder notes.

## After comparison (390 and 1440)

Fixed: hero headline size (Hanken runs wider than Arcadia, so 60px stands in for 65px),
heading weights raised (Hanken looks lighter at the same number), desktop section padding
set to 0.6 × `--section-y`, the first tab section grouped instead of spread, fingerprint
and beam art redrawn, light-mode paper panels darkened so they show on the off-white page.

Still different, on purpose:
- the first tab section's picture doesn't bleed off the right edge of the screen, and its
  text column isn't pulled wider than the page column;
- the hero is a drawn valley, not a photograph, and has no desk on the hill;
- the page is ~7% shorter on desktop, mostly from the much shorter legal footnotes;
- no scroll-in fades, auto-advancing tabs or carousel, marquee or video (per the brief).
