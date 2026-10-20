# mute-jetson: notes

Source: https://www.mute.design/jetson/ (pre-captured 2026-10-20T08:16:55Z by
`tools/claude-batch/precapture.mjs`).

## Status: stopped before step 2. The capture is a bot-check page, not the site

Every file in this folder shows Cloudflare's "Performing security verification" challenge
("Just a moment..." page title, a "Verify you are human" checkbox, a Ray ID footer), not
the Jetson page itself:

- `original-390-*.png` / `original-1440-*.png`: the challenge page only. The page is one
  window tall (844 / 900 px) and has no scroll frames.
- `original-design.md`: `system-ui` + `monospace` at 12/16/24/40 px, text `rgb(49,49,49)`,
  links `rgb(0,0,238)`, two "sections" (the challenge box and Cloudflare's footer),
  "While scrolling: nothing changed". These are Cloudflare's styles. The `:hover` rules
  listed may come from the real site's CSS, but they're only link colours, which isn't
  enough to build on.
- `precapture.json` lists no other pages.

The batch rules say not to open the original or run `capture.mjs` against it, so there's
nothing faithful to recreate. Building a "Jetson" page from guesswork would go against the
point of this directory ("steering from a real inspiration"). Decision: no theme, no blocks
and no page.

## Needs the user's decision

1. Re-capture the page from a machine or browser session that gets past Cloudflare's check
   (for example, a precapture run with a real, logged-in browser profile, or screenshots
   saved by hand into this folder), then run `/recreate-site https://www.mute.design/jetson/ mute-jetson`
   again. The folder holds only `_reference/`, so it still counts as new.
2. Or pick another inspiration URL for this slot.
