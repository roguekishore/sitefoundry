# Design capture: https://www.cyphercapital.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Cypher Capital | Bridging capital with frontier opportunities (page 6657px tall, window 390×844)

**Fonts:** `Instrument Sans` ×79

**Loaded faces:** Instrument Sans 400 700 normal · Instrument Sans Fallback normal normal

**Font sizes:** `16px` ×29 · `40px` ×24 · `32px` ×15 · `12px` ×11

**Weights:** `500` ×78 · `700` ×1

**Size / line height:** `16px / 20.8px` ×29 · `40px / 40px` ×24 · `32px / 38.4px` ×13 · `12px / 15.6px` ×11 · `32px / 32px` ×2

**Letter spacing:** `-0.48px` ×29 · `-0.64px` ×24 · `-0.96px` ×15 · `-0.36px` ×11

**Text colours:** `rgb(255, 255, 255)` ×47 · `rgb(24, 24, 24)` ×15 · `rgba(255, 255, 255, 0.5)` ×11 · `rgba(24, 24, 24, 0.3)` ×6

**Backgrounds:** `rgb(24, 24, 24)` ×508 · `rgb(255, 255, 255)` ×202

**Borders:** `1px solid rgba(255, 255, 255, 0.2)` ×8

**Transitions:** `opacity 0.1s cubic-bezier(0` ×8 · `opacity 1.2s ease` ×5 · `opacity 1s ease` ×4 · `padding 0.3s cubic-bezier(0.3` ×3 · `transform 1s cubic-bezier(0.3` ×2 · `opacity 0.2s cubic-bezier(0` ×1 · `opacity 0.4s cubic-bezier(0` ×1 · `opacity 0.5s ease` ×1

**:root variables (150):** `--base-color-white: #fff` · `--base-color-black: #000` · `--base-color-ink: #181818` · `--base-color-paper: #eee` · `--base-color-off-white: #fbfbfb` · `--base-color-red: red` · `--base-color-blue: #00f` · `--base-color-green: #00c853` · `--base-color-yellow: #ffd600` · `--base-color-grey: gray` · `--base-color-grey-light: #d9d9d9` · `--base-color-grey-dark: #333` · `--color-background-5: #ffffff0d` · `--color-background-10: #ffffff1a` · `--color-background-20: #fff3` · `--color-background-30: #ffffff4d` · `--color-background-40: #fff6` · `--color-background-50: #ffffff80` · `--color-background-60: #fff9` · `--color-background-80: #fffc` · `--color-background-100: #fff` · `--color-foreground-5: #1818180d` · `--color-foreground-10: #1818181a` · `--color-foreground-20: #18181833` · `--color-foreground-30: #1818184d` · `--color-foreground-40: #18181866` · `--color-foreground-50: #18181880` · `--color-foreground-60: #18181899` · `--color-foreground-80: #181818cc` · `--color-foreground-100: #181818` · `--color-primary-5: #1818180d` · `--color-primary-10: #1818181a` · `--color-primary-20: #18181833` · `--color-primary-30: #1818184d` · `--color-primary-40: #18181866` · `--color-primary-50: #18181880` · `--color-primary-60: #18181899` · `--color-primary-80: #181818cc` · `--color-primary-100: #181818` · `--color-primary-110: #161616` · `--color-primary-120: #131313` · `--color-primary-130: #111` · `--color-primary-140: #0e0e0e` · `--color-primary-150: #0c0c0c` · `--color-secondary-5: #0000ff0d` · `--color-secondary-10: #0000ff1a` · `--color-secondary-20: #00f3` · `--color-secondary-30: #0000ff4d` · `--color-secondary-40: #00f6` · `--color-secondary-50: #0000ff80` · `--color-secondary-60: #00f9` · `--color-secondary-80: #00fc` · `--color-secondary-100: #00f` · `--color-secondary-110: #0000e6` · `--color-secondary-120: #00c` · `--color-secondary-130: #0000b3` · `--color-secondary-140: #009` · `--color-secondary-150: navy` · `--color-neutral-5: #8080800d` · `--color-neutral-10: #8080801a`

### Sections

1. `header` at 0px, 88px tall, position absolute · original-390-section-01.png
2. `div#main` at 0px, 5292px tall — “Bridging capital with frontier opportunities” · original-390-section-02.png, original-390-section-03.png, original-390-section-04.png
3. `footer` at 5292px, 1365px tall · original-390-section-05.png

### Media slots

- section 2: canvas (WebGL/2D), 390×1055 (aspect 0.37), fit auto
- section 2: canvas (WebGL/2D), 390×844 (aspect 0.46), fit auto, **fills the window height**

### Motion

**Libraries and media seen:** 2 canvas element(s) (WebGL/2D art) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — opacity 1.00→0.00, at scroll 1266–1266px · e.g. div.styles-module__9p3mLq__root “CypherCapital”
- section -: reveal on entering view — opacity 1.00→0.00, filter changes (e.g. blur), at scroll 422–1266px · 2 elements · e.g. span.text-module__DYGPWq__root.styles-module__9p3mLq__word “Cypher”; span.text-module__DYGPWq__root.styles-module__9p3mLq__word “Capital”
- section -: scrubbed with the scroll — opacity 1.00→0.00, translateY 0→0px, translateX 0→0px, scale 1.00→1.00, at scroll 422–1266px · e.g. span.styles-module__9p3mLq__dock
- section -: fixed, at scroll pinned for 14 half-screens · e.g. div
- section 1: reveal on entering view — opacity 0.00→1.00, at scroll 1266–1266px · e.g. span “Cypher Capital”
- section 2: reveal on entering view — translateY 40→0px, clip-path changes, at scroll 422–844px · 18 elements · e.g. span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Bridging”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “capital”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Investments”
- section 2: scrubbed with the scroll — translateY 40→0px, clip-path changes, at scroll 422–1266px · 6 elements · e.g. span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “with”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “frontier”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “opportunities”
- section 2: pinned (sticky), at scroll pinned for 6 half-screens · e.g. div
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 422–844px · 8 elements · e.g. div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Capabilities”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Institutional investment strategies acro”; div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Proprietary Investments”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 16→0px, at scroll 1266–1266px · 12 elements · e.g. div.reveal-module__nuDBzW__root “Digital Multi-Strategy Fund Multi-strate”; div.reveal-module__nuDBzW__root “AI Data Centre Fund Coming soon Institut”; div.reveal-module__nuDBzW__root “Separately Managed Accounts Bespoke mand”
- section 2: scrubbed with the scroll — opacity 0.00→1.00, at scroll 5064–5813px · 8 elements · e.g. span.styles-module__nU-CWq__word “Summarize”; span.styles-module__nU-CWq__word “this”; span.styles-module__nU-CWq__word “page”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Bridging”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “capital”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “with”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “frontier”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “opportunities”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Capabilities”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Asset”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Management”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Institutional investment strategies acro”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Digital Multi-Strategy Fund Multi-strate”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “AI Data Centre Fund Coming soon Institut”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Separately Managed Accounts Bespoke mand”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Proprietary Investments”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Proprietary”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Investments”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Principal capital deployed across high-c”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Venture Portfolio High-conviction invest”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Selected Investments Built through propr”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Infrastructure”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Powering”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “the”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “AI”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “transition:”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “global”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “data”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “infrastructure”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Storm Group, Cypher Capital’s affiliate,”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Explore AI Infrastructure Visit stormgro”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Values”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Built”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “on”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “principal”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “capital.”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Governed”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “by”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “institutional”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “standards.”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Skin in the Game Principal capital comes”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Risk-First Doctrine Liquidity, position ”: 750ms (translate, opacity)

**:hover rules in the CSS (first 14):**

- `.button-module__6YOxLq__primary:hover:not(:disabled) { background: var(--color-primary-120); }`
- `.button-module__6YOxLq__secondary:hover:not(:disabled) { background: var(--color-secondary-120); }`
- `.button-module__6YOxLq__outline:hover:not(:disabled) { border-color: var(--color-foreground-40); background: var(--color-foreground-5); }`
- `.button-module__6YOxLq__ghost:hover:not(:disabled) { background: var(--color-foreground-5); color: var(--color-foreground-100); }`
- `.styles-module__nU-CWq__link:hover { opacity: 0.7; }`
- `.styles-module__g58zra__action:hover { --pad-x: var(--spacing-xs2); }`
- `.styles-module__g58zra__action.styles-module__g58zra__primary:hover { --pad-x: var(--spacing-md); }`
- `.insight-card-module__bThvxG__link:hover .insight-card-module__bThvxG__title { text-underline-position: from-font; text-decoration: underline; }`
- `.text-link-module__GUMU6W__muted:hover { color: var(--color-foreground-100); }`
- `.tab-nav-module__BsWl4q__tab:hover { color: var(--color-foreground-100); }`
- `.wipe-button-module__-tlSna__root:hover { --pad-x: var(--spacing-md); }`
- `.action-row-module__cLECvq__root:hover .action-row-module__cLECvq__text > :first-child { text-underline-position: from-font; text-decoration: underline; }`
- `.action-row-module__cLECvq__fill:hover .action-row-module__cLECvq__text > :first-child { text-decoration: none; }`
- `.share-row-module__BJwpPq__action:hover { color: var(--color-foreground-100); }`

### The site's own links

`/` Skip to content · `/philosophy` Philosophy · `/capabilities` Capabilities · `/ai-infrastructure` AI Infrastructure · `/access-formats` Access Formats · `/digital-multi-strategy-fund` Digital Multi-Strategy Fund · `/leadership` Leadership · `/risk-management` Risk Management · `/insights` Insights · `/global-presence` Global presence · `/privacy` Privacy Policy · `/terms` Terms of Use

## 1440px — Cypher Capital | Bridging capital with frontier opportunities (page 5580px tall, window 1440×900)

**Fonts:** `Instrument Sans` ×79

**Loaded faces:** Instrument Sans 400 700 normal · Instrument Sans Fallback normal normal

**Font sizes:** `16px` ×29 · `64px` ×26 · `32px` ×13 · `12px` ×11

**Weights:** `500` ×78 · `700` ×1

**Size / line height:** `16px / 20.8px` ×29 · `64px / 64px` ×26 · `32px / 38.4px` ×13 · `12px / 15.6px` ×11

**Letter spacing:** `-0.48px` ×29 · `-1.024px` ×24 · `-0.96px` ×13 · `-0.36px` ×11 · `-1.92px` ×2

**Text colours:** `rgb(255, 255, 255)` ×47 · `rgb(24, 24, 24)` ×15 · `rgba(255, 255, 255, 0.5)` ×11 · `rgba(24, 24, 24, 0.3)` ×6

**Backgrounds:** `rgb(24, 24, 24)` ×600 · `rgb(255, 255, 255)` ×202

**Borders:** `1px solid rgba(255, 255, 255, 0.2)` ×8

**Transitions:** `opacity 0.1s cubic-bezier(0` ×8 · `opacity 1.2s ease` ×5 · `opacity 1s ease` ×4 · `padding 0.3s cubic-bezier(0.3` ×3 · `transform 1s cubic-bezier(0.3` ×2 · `opacity 0.2s cubic-bezier(0` ×1 · `opacity 0.4s cubic-bezier(0` ×1 · `opacity 0.5s ease` ×1

**:root variables (150):** `--base-color-white: #fff` · `--base-color-black: #000` · `--base-color-ink: #181818` · `--base-color-paper: #eee` · `--base-color-off-white: #fbfbfb` · `--base-color-red: red` · `--base-color-blue: #00f` · `--base-color-green: #00c853` · `--base-color-yellow: #ffd600` · `--base-color-grey: gray` · `--base-color-grey-light: #d9d9d9` · `--base-color-grey-dark: #333` · `--color-background-5: #ffffff0d` · `--color-background-10: #ffffff1a` · `--color-background-20: #fff3` · `--color-background-30: #ffffff4d` · `--color-background-40: #fff6` · `--color-background-50: #ffffff80` · `--color-background-60: #fff9` · `--color-background-80: #fffc` · `--color-background-100: #fff` · `--color-foreground-5: #1818180d` · `--color-foreground-10: #1818181a` · `--color-foreground-20: #18181833` · `--color-foreground-30: #1818184d` · `--color-foreground-40: #18181866` · `--color-foreground-50: #18181880` · `--color-foreground-60: #18181899` · `--color-foreground-80: #181818cc` · `--color-foreground-100: #181818` · `--color-primary-5: #1818180d` · `--color-primary-10: #1818181a` · `--color-primary-20: #18181833` · `--color-primary-30: #1818184d` · `--color-primary-40: #18181866` · `--color-primary-50: #18181880` · `--color-primary-60: #18181899` · `--color-primary-80: #181818cc` · `--color-primary-100: #181818` · `--color-primary-110: #161616` · `--color-primary-120: #131313` · `--color-primary-130: #111` · `--color-primary-140: #0e0e0e` · `--color-primary-150: #0c0c0c` · `--color-secondary-5: #0000ff0d` · `--color-secondary-10: #0000ff1a` · `--color-secondary-20: #00f3` · `--color-secondary-30: #0000ff4d` · `--color-secondary-40: #00f6` · `--color-secondary-50: #0000ff80` · `--color-secondary-60: #00f9` · `--color-secondary-80: #00fc` · `--color-secondary-100: #00f` · `--color-secondary-110: #0000e6` · `--color-secondary-120: #00c` · `--color-secondary-130: #0000b3` · `--color-secondary-140: #009` · `--color-secondary-150: navy` · `--color-neutral-5: #8080800d` · `--color-neutral-10: #8080801a`

### Sections

1. `header` at 0px, 88px tall, position absolute · original-1440-section-01.png
2. `section` at 0px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “Bridging capital with frontier opportunities” · original-1440-section-02.png
3. `div` at 900px, 2700px tall — “Asset Management” · original-1440-section-03.png, original-1440-section-04.png
4. `section#values` at 3600px, 900px tall — “Built on principal capital. Governed by institutional standards.” · original-1440-section-05.png
5. `section` at 4500px, 450px tall — **sized by the window: 50% of the window height** (338px in a 675px window) · original-1440-section-06.png
6. `footer` at 4950px, 630px tall · original-1440-section-07.png

### Media slots

- section 2: canvas (WebGL/2D), 1425×1125 (aspect 1.27), fit auto
- section 3: canvas (WebGL/2D), 1425×900 (aspect 1.58), fit auto, **fills the window height**

### Motion

**Libraries and media seen:** 2 canvas element(s) (WebGL/2D art) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — opacity 1.00→0.00, at scroll 900–900px · e.g. div.styles-module__9p3mLq__root “CypherCapital”
- section -: reveal on entering view — opacity 1.00→0.00, filter changes (e.g. blur), at scroll 450–900px · 2 elements · e.g. span.text-module__DYGPWq__root.styles-module__9p3mLq__word “Cypher”; span.text-module__DYGPWq__root.styles-module__9p3mLq__word “Capital”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 0→0px, translateX 0→0px, scale 1.00→1.00, at scroll 450–900px · e.g. span.styles-module__9p3mLq__dock
- section -: fixed, at scroll pinned for 11 half-screens · e.g. div
- section 1: reveal on entering view — opacity 0.00→1.00, at scroll 1350–1350px · e.g. span “Cypher Capital”
- section 2: reveal on entering view — translateY 64→0px, clip-path changes, at scroll 450–900px · 5 elements · e.g. span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Bridging”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “capital”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “with”
- section 3: pinned (sticky), at scroll pinned for 6 half-screens · e.g. div
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 900–900px · 6 elements · e.g. div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Capabilities”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Institutional investment strategies acro”; div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Proprietary Investments”
- section 3: reveal on entering view — translateY 64→0px, clip-path changes, at scroll 900–900px · 11 elements · e.g. span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Asset”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Management”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Proprietary”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 16→0px, at scroll 900–900px · 6 elements · e.g. div.reveal-module__nuDBzW__root “Digital Multi-Strategy Fund Multi-strate”; div.reveal-module__nuDBzW__root “AI Data Centre Fund Coming soon Institut”; div.reveal-module__nuDBzW__root “Separately Managed Accounts Bespoke mand”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 3600–3600px · e.g. div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Values”
- section 4: reveal on entering view — translateY 64→0px, clip-path changes, at scroll 3600–3600px · 8 elements · e.g. span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Built”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “on”; span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “principal”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 16→0px, at scroll 4050–4050px · 6 elements · e.g. div.reveal-module__nuDBzW__root; div.reveal-module__nuDBzW__root “Skin in the Game Principal capital comes”; div.reveal-module__nuDBzW__root
- section 5: reveal on entering view — translateX 130→0px, at scroll 4500–4680px · e.g. p.text-module__DYGPWq__root.styles-module__nU-CWq__label “Summarize this page with AI”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 4500–4680px · 9 elements · e.g. span.styles-module__nU-CWq__word “Summarize”; span.styles-module__nU-CWq__word “this”; span.styles-module__nU-CWq__word “page”
- section 5: reveal on entering view — translateX -114→0px, at scroll 4500–4680px · e.g. ul.styles-module__nU-CWq__list

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Bridging”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “capital”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “with”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “frontier”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “opportunities”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Capabilities”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Asset”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Management”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Institutional investment strategies acro”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Digital Multi-Strategy Fund Multi-strate”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “AI Data Centre Fund Coming soon Institut”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Separately Managed Accounts Bespoke mand”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Proprietary Investments”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Proprietary”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Investments”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Principal capital deployed across high-c”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Venture Portfolio High-conviction invest”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Selected Investments Built through propr”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Infrastructure”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Powering”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “the”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “AI”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “transition:”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “global”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “data”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “infrastructure”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Storm Group, Cypher Capital’s affiliate,”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Explore AI Infrastructure Visit stormgro”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade` on div.reveal-module__nuDBzW__root.reveal-module__nuDBzW__fade “Values”: 750ms (opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Built”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “on”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “principal”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “capital.”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “Governed”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “by”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “institutional”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-rise` on span.reveal-module__nuDBzW__root.reveal-module__nuDBzW__rise “standards.”: 750ms (clipPath, translate)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Skin in the Game Principal capital comes”: 750ms (translate, opacity)
- CSSAnimation `reveal-module__nuDBzW__reveal-fade-up` on div.reveal-module__nuDBzW__root “Risk-First Doctrine Liquidity, position ”: 750ms (translate, opacity)

**On hover:**

- a: opacity: 1 → 0.7 · transition `opacity 0.1s cubic-bezier(0, 0, 0.2, 1)`
- a “Cypher”: color: rgb(24, 24, 24) → rgb(0, 0, 0); border: rgb(24, 24, 24) → rgb(0, 0, 0); inner color: rgb(24, 24, 24) → rgb(0, 0, 0); inner border: rgb(24, 24, 24) → rgb(0, 0, 0) · transition `all`
- a “Philosophy”: color: rgb(24, 24, 24) → rgb(0, 0, 0); border: rgb(24, 24, 24) → rgb(0, 0, 0); inner color: rgb(24, 24, 24) → rgb(0, 0, 0); inner border: rgb(24, 24, 24) → rgb(0, 0, 0) · transition `all`
- a “AI Infrastructure”: color: rgb(24, 24, 24) → rgb(0, 0, 0); border: rgb(24, 24, 24) → rgb(0, 0, 0); inner color: rgb(24, 24, 24) → rgb(0, 0, 0); inner border: rgb(24, 24, 24) → rgb(0, 0, 0) · transition `all`
- a: opacity: 1 → 0.7 · transition `opacity 0.1s cubic-bezier(0, 0, 0.2, 1)`
- a “Privacy Policy”: color: rgba(24, 24, 24, 0.3) → rgb(0, 0, 0); border: rgba(24, 24, 24, 0.3) → rgb(0, 0, 0); inner color: rgba(24, 24, 24, 0.3) → rgb(0, 0, 0); inner border: rgba(24, 24, 24, 0.3) → rgb(0, 0, 0) · transition `all`

**:hover rules in the CSS (first 14):**

- `.button-module__6YOxLq__primary:hover:not(:disabled) { background: var(--color-primary-120); }`
- `.button-module__6YOxLq__secondary:hover:not(:disabled) { background: var(--color-secondary-120); }`
- `.button-module__6YOxLq__outline:hover:not(:disabled) { border-color: var(--color-foreground-40); background: var(--color-foreground-5); }`
- `.button-module__6YOxLq__ghost:hover:not(:disabled) { background: var(--color-foreground-5); color: var(--color-foreground-100); }`
- `.styles-module__nU-CWq__link:hover { opacity: 0.7; }`
- `.styles-module__g58zra__action:hover { --pad-x: var(--spacing-xs2); }`
- `.styles-module__g58zra__action.styles-module__g58zra__primary:hover { --pad-x: var(--spacing-md); }`
- `.insight-card-module__bThvxG__link:hover .insight-card-module__bThvxG__title { text-underline-position: from-font; text-decoration: underline; }`
- `.text-link-module__GUMU6W__muted:hover { color: var(--color-foreground-100); }`
- `.tab-nav-module__BsWl4q__tab:hover { color: var(--color-foreground-100); }`
- `.wipe-button-module__-tlSna__root:hover { --pad-x: var(--spacing-md); }`
- `.action-row-module__cLECvq__root:hover .action-row-module__cLECvq__text > :first-child { text-underline-position: from-font; text-decoration: underline; }`
- `.action-row-module__cLECvq__fill:hover .action-row-module__cLECvq__text > :first-child { text-decoration: none; }`
- `.share-row-module__BJwpPq__action:hover { color: var(--color-foreground-100); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Skip to content · `/philosophy` Philosophy · `/capabilities` Capabilities · `/ai-infrastructure` AI Infrastructure · `/access-formats` Access Formats · `/digital-multi-strategy-fund` Digital Multi-Strategy Fund · `/leadership` Leadership · `/risk-management` Risk Management · `/insights` Insights · `/global-presence` Global presence · `/privacy` Privacy Policy · `/terms` Terms of Use
