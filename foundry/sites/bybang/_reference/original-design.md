# Design capture: https://bybang.co/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Estudio Bang | Architecture, Interiors, Objects & Digital Media (page 52666px tall, window 390×844)

**Fonts:** `Geist` ×13 · `Geist Mono` ×4

**Loaded faces:** Geist 400 normal · Geist 500 normal · Geist 600 normal · Geist 700 normal · Geist Mono 500 normal · Geist Mono 700 normal

**Font sizes:** `14px` ×8 · `46.8px` ×4 · `41px` ×3 · `23.589px` ×1 · `10px` ×1

**Weights:** `400` ×9 · `500` ×4 · `700` ×3 · `600` ×1

**Size / line height:** `14px / 17px` ×8 · `46.8px / 76px` ×4 · `41px / 29.52px` ×3 · `23.589px / 23.589px` ×1 · `10px / 17px` ×1

**Letter spacing:** `-0.28px` ×8 · `-1.872px` ×4 · `-1.23px` ×3 · `-0.94356px` ×1 · `-0.2px` ×1

**Text colours:** `rgb(46, 46, 46)` ×8 · `rgb(255, 255, 255)` ×6 · `rgba(0, 0, 0, 0)` ×2 · `rgba(20, 20, 20, 0.3)` ×1

**Backgrounds:** `rgb(255, 255, 255)` ×8916

**Transitions:** `height, left, top, width 1.12s cubic-bezier(0.65` ×216 · `transform 0.9s cubic-bezier(0.22` ×212 · `opacity 0.26s cubic-bezier(0.65` ×212 · `opacity 0.24s ease` ×2 · `filter, opacity, transform 0.76s cubic-bezier(0.65` ×2

**:root variables (19):** `--bg: #f5f5f2` · `--panel: #e1e1e1` · `--panel-dark: #d7d7d0` · `--text: #141414` · `--muted: rgba(20, 20, 20, .3)` · `--border: rgba(20, 20, 20, .08)` · `--accent: #946ec4` · `--shadow: 0 24px 80px rgba(11, 12, 11, .12)` · `--mono: "Geist Mono", ui-monospace, monospace` · `--sans: "Geist", "Helvetica Neue", Arial, sans-serif` · `--stable-viewport-height: 100vh` · `--site-bg: #ffffff` · `--site-ink: #141414` · `--site-muted: rgba(20, 20, 20, .3)` · `--site-faint: rgba(20, 20, 20, .2)` · `--site-grid-edge: 32px` · `--site-grid-gap: 32px` · `--site-card-shadow: 442px 694px 231px rgba(0, 0, 0, 0), 283px 444px 211px rgba(0, 0, 0, .01), 159px 250px 178px rgba(0, 0, 0, .03), 71px 111px 132px rgba(0, 0, 0, .04), 18px 28px 72px rgba(0, 0, 0, .05)` · `--site-card-shadow-muted: 442px 694px 231px rgba(0, 0, 0, 0), 283px 444px 211px rgba(0, 0, 0, 0), 159px 250px 178px rgba(0, 0, 0, 0), 71px 111px 132px rgba(0, 0, 0, 0), 18px 28px 72px rgba(0, 0, 0, 0)`

### Sections

1. `header` at 37443px, 0px tall, position fixed

### Media slots

- section -: background image, 125×149 (aspect 0.84), fit cover
- section -: background image, 125×168 (aspect 0.74), fit cover
- section -: background image, 125×149 (aspect 0.84), fit cover
- section -: background image, 311×418 (aspect 0.74), fit cover
- section -: background image, 311×466 (aspect 0.67), fit cover
- section -: background image, 172×231 (aspect 0.74), fit cover
- section -: background image, 172×230 (aspect 0.74), fit cover
- section -: background image, 125×149 (aspect 0.84), fit cover
- section -: background image, 218×261 (aspect 0.84), fit cover
- section -: background image, 218×293 (aspect 0.74), fit cover
- section -: background image, 172×257 (aspect 0.67), fit cover
- section -: background image, 125×149 (aspect 0.84), fit cover
- section -: background image, 125×149 (aspect 0.84), fit cover
- section -: background image, 265×356 (aspect 0.74), fit cover
- section -: background image, 172×115 (aspect 1.50), fit cover
- section -: background image, 125×168 (aspect 0.74), fit cover
- section -: background image, 172×205 (aspect 0.84), fit cover
- section -: background image, 218×261 (aspect 0.83), fit cover
- section -: background image, 125×168 (aspect 0.74), fit cover
- section -: background image, 172×230 (aspect 0.74), fit cover
- section -: background image, 218×146 (aspect 1.50), fit cover
- section -: background image, 125×149 (aspect 0.84), fit cover
- section -: background image, 172×231 (aspect 0.74), fit cover
- section -: background image, 172×230 (aspect 0.74), fit cover
- section -: background image, 125×149 (aspect 0.84), fit cover
- section -: background image, 218×261 (aspect 0.84), fit cover
- section -: background image, 218×293 (aspect 0.74), fit cover
- section -: background image, 172×257 (aspect 0.67), fit cover
- section -: background image, 125×149 (aspect 0.84), fit cover
- section -: background image, 125×149 (aspect 0.84), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 112→0px, while pinned, at scroll 23353–23774px · e.g. p.site-clock “BCN 18 : 43 BUE 13 : 43”
- section -: scrubbed with the scroll — opacity 1.00→0.00, at scroll 23353–36978px · 2 elements · e.g. span.clock-label__colon “:”; span.clock-label__colon “:”
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 34871–34871px · 6 elements · e.g. span.clock-label__roll-value “41”; span.clock-label__roll-value “41”; span.center-wordmark__piece “estudio”
- section -: fixed, at scroll pinned for 199 half-screens · 5 elements · e.g. div.center-wordmark “estudiobang”; div.center-wordmark.center-wordmark--bang-overlay “estudiobang”; aside.cookie-banner “cookie? yes no legal”
- section -: scrubbed with the scroll — translateY -2068→0px, at scroll 23774–24628px · 4 elements · e.g. button.mosaic-item; button.mosaic-item; button.mosaic-item
- section -: scrubbed with the scroll — translateY -2388→0px, at scroll 23353–24628px · e.g. button.mosaic-item
- section -: scrubbed with the scroll — translateY -2419→0px, at scroll 23774–25050px · e.g. button.mosaic-item
- section -: scrubbed with the scroll — translateY -2369→0px, at scroll 23353–24628px · e.g. button.mosaic-item
- section -: reveal on entering view — opacity 0.00→1.00, translateY 79→0px, at scroll 23353–23353px · e.g. button.mosaic-item
- section -: reveal on entering view — opacity 0.00→1.00, translateY 92→0px, at scroll 23353–23774px · 175 elements · e.g. button.mosaic-item; button.mosaic-item; button.mosaic-item
- section -: reveal on entering view — opacity 0.00→1.00, translateY 82→0px, at scroll 23353–23353px · e.g. button.mosaic-item
- section -: reveal on entering view — opacity 0.00→1.00, translateY 84→0px, at scroll 23353–23774px · e.g. button.mosaic-item
- section -: reveal on entering view — opacity 0.00→1.00, translateY 85→0px, at scroll 23353–23774px · e.g. button.mosaic-item
- section -: reveal on entering view — opacity 0.00→1.00, translateY 86→0px, at scroll 23353–23774px · e.g. button.mosaic-item
- section -: reveal on entering view — opacity 0.00→1.00, translateY 81→0px, at scroll 23353–23353px · e.g. button.mosaic-item
- section -: scrubbed with the scroll — opacity 0.00→1.00, translateY 92→0px, at scroll 23353–47122px · 28 elements · e.g. button.mosaic-item; button.mosaic-item; button.mosaic-item
- section -: reveal on entering view — translateY 17→0px, at scroll 23353–23353px · 2 elements · e.g. span.clock-label__roll-value “43”; span.clock-label__roll-value “43”
- section 1: reveal on entering view — translateY -128→0px, at scroll 23353–23774px · e.g. button.site-nav__mobile-toggle “menu”

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on button.mosaic-item: 780ms (opacity)

**:hover rules in the CSS (first 18):**

- `.studio-top-nav a:not(:hover) { opacity: 0.34; }`
- `.studio-anchor-nav a:hover { background: rgba(255, 255, 255, 0.07); color: rgb(255, 255, 255); }`
- `.studio-sidebar-actions .ghost-button:hover, .studio-command-actions .link-button:hover, .studio-grid input:hover, .studio-grid input:focus, .studio-textarea textarea:hover, .studio-textarea textarea:focus, .gallery-edit`
- `.project-kind-control__option:hover, .project-kind-control__option[aria-selected="true"] { background: rgb(222, 222, 222); }`
- `.add-project-button:hover { opacity: 1; background: rgb(246, 246, 246) !important; }`
- `.studio-icon-button:hover { background: rgba(20, 20, 20, 0.08) !important; }`
- `.site-language__option:hover, .site-language__option--active { opacity: 1; }`
- `.site-nav--home .site-nav__link, .site-nav__link:hover, .site-nav__link--active { opacity: 1; }`
- `.cookie-banner:hover .cookie-banner__question, .cookie-banner:focus-within .cookie-banner__question { opacity: 0; pointer-events: none; }`
- `.cookie-banner:hover .cookie-banner__choices, .cookie-banner:focus-within .cookie-banner__choices { opacity: 1; pointer-events: auto; }`
- `.mosaic-item:hover .mosaic-item__media { transform: scale(1.04); }`
- `.contact-input:hover, .contact-input:focus, .contact-reason__trigger:hover, .contact-reason--open .contact-reason__trigger, .contact-reason__option:hover { background: rgba(20, 20, 20, 0.05); }`
- `.contact-submit:hover, .contact-submit:focus { background: rgb(0, 0, 0); outline: none; }`
- `.contact-submit--error:hover, .contact-submit--error:focus, .case-contact-button--error:hover, .case-contact-button--error:focus { background: rgb(199, 22, 29); }`
- `.about-team-member:hover, .about-team-member:focus-within, .about-team-member--expanded { background: rgba(0, 0, 0, 0.05); }`
- `.about-team-member__summary:hover, .about-team-member__summary:focus-visible { background: transparent; }`
- `.about-team-member__social:hover { opacity: 1; transform: scale(1.12); }`
- `.case-contact-field input:hover, .case-contact-field input:focus, .case-contact-reason__trigger:hover, .case-contact-reason--open .case-contact-reason__trigger, .case-contact-reason__option:hover { background: rgba(20, 2`

## 1440px — Estudio Bang | Architecture, Interiors, Objects & Digital Media (page 56160px tall, window 1440×900)

**Fonts:** `Geist` ×24 · `Geist Mono` ×4

**Loaded faces:** Geist 400 normal · Geist 500 normal · Geist 600 normal · Geist 700 normal · Geist Mono 500 normal · Geist Mono 700 normal

**Font sizes:** `14px` ×8 · `10px` ×7 · `18px` ×6 · `74px` ×4 · `41px` ×3

**Weights:** `400` ×15 · `600` ×6 · `500` ×4 · `700` ×3

**Size / line height:** `14px / 17px` ×8 · `10px / 17px` ×7 · `18px / 18px` ×6 · `74px / 76px` ×4 · `41px / 29.52px` ×3

**Letter spacing:** `-0.28px` ×8 · `-0.2px` ×7 · `-0.72px` ×6 · `-2.96px` ×4 · `-1.23px` ×3

**Text colours:** `rgb(46, 46, 46)` ×14 · `rgb(255, 255, 255)` ×11 · `rgba(0, 0, 0, 0)` ×2 · `rgba(20, 20, 20, 0.3)` ×1

**Backgrounds:** `rgb(255, 255, 255)` ×20012

**Transitions:** `height, left, top, width 1.12s cubic-bezier(0.65` ×216 · `transform 0.9s cubic-bezier(0.22` ×212 · `opacity 0.26s cubic-bezier(0.65` ×212 · `opacity 0.24s ease` ×8 · `filter, opacity, transform 0.76s cubic-bezier(0.65` ×2 · `opacity, width, height 0.18s ease` ×1 · `background-color, border-radius, clip-path, opacity, transfo 0.32s ease` ×1

**:root variables (19):** `--bg: #f5f5f2` · `--panel: #e1e1e1` · `--panel-dark: #d7d7d0` · `--text: #141414` · `--muted: rgba(20, 20, 20, .3)` · `--border: rgba(20, 20, 20, .08)` · `--accent: #946ec4` · `--shadow: 0 24px 80px rgba(11, 12, 11, .12)` · `--mono: "Geist Mono", ui-monospace, monospace` · `--sans: "Geist", "Helvetica Neue", Arial, sans-serif` · `--stable-viewport-height: 100vh` · `--site-bg: #ffffff` · `--site-ink: #141414` · `--site-muted: rgba(20, 20, 20, .3)` · `--site-faint: rgba(20, 20, 20, .2)` · `--site-grid-edge: 32px` · `--site-grid-gap: 32px` · `--site-card-shadow: 442px 694px 231px rgba(0, 0, 0, 0), 283px 444px 211px rgba(0, 0, 0, .01), 159px 250px 178px rgba(0, 0, 0, .03), 71px 111px 132px rgba(0, 0, 0, .04), 18px 28px 72px rgba(0, 0, 0, .05)` · `--site-card-shadow-muted: 442px 694px 231px rgba(0, 0, 0, 0), 283px 444px 211px rgba(0, 0, 0, 0), 159px 250px 178px rgba(0, 0, 0, 0), 71px 111px 132px rgba(0, 0, 0, 0), 18px 28px 72px rgba(0, 0, 0, 0)`

### Sections

1. `header` at 39955px, 24px tall, position fixed · original-1440-section-01.png

### Media slots

- section -: background image, 232×277 (aspect 0.84), fit cover
- section -: background image, 320×383 (aspect 0.84), fit cover
- section -: background image, 320×383 (aspect 0.84), fit cover
- section -: background image, 144×194 (aspect 0.74), fit cover
- section -: background image, 320×430 (aspect 0.74), fit cover
- section -: background image, 232×347 (aspect 0.67), fit cover
- section -: background image, 144×194 (aspect 0.74), fit cover
- section -: background image, 408×272 (aspect 1.50), fit cover
- section -: background image, 320×430 (aspect 0.74), fit cover
- section -: background image, 232×277 (aspect 0.84), fit cover
- section -: background image, 496×300 (aspect 1.65), fit cover
- section -: background image, 144×194 (aspect 0.74), fit cover
- section -: background image, 320×430 (aspect 0.74), fit cover
- section -: background image, 408×489 (aspect 0.83), fit cover
- section -: background image, 144×194 (aspect 0.74), fit cover
- section -: background image, 232×277 (aspect 0.84), fit cover
- section -: background image, 320×430 (aspect 0.74), fit cover
- section -: background image, 320×214 (aspect 1.50), fit cover
- section -: background image, 144×194 (aspect 0.74), fit cover
- section -: background image, 232×277 (aspect 0.84), fit cover
- section -: background image, 408×489 (aspect 0.83), fit cover
- section -: background image, 144×194 (aspect 0.74), fit cover
- section -: background image, 320×430 (aspect 0.74), fit cover
- section -: background image, 320×214 (aspect 1.50), fit cover
- section -: background image, 232×347 (aspect 0.67), fit cover
- section -: background image, 144×194 (aspect 0.74), fit cover
- section -: background image, 408×272 (aspect 1.50), fit cover
- section -: background image, 320×430 (aspect 0.74), fit cover
- section -: background image, 232×277 (aspect 0.84), fit cover
- section -: background image, 496×300 (aspect 1.65), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 112→0px, while pinned, at scroll 423–872px · e.g. p.site-clock “BCN 18 : 45 BUE 13 : 45”
- section -: scrubbed with the scroll — opacity 0.72→1.00, at scroll 423–39447px · 2 elements · e.g. span.clock-label__colon “:”; span.clock-label__colon “:”
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 25971–25971px · 8 elements · e.g. span.clock-label__roll-value “43”; span.clock-label__roll-value “43”; span.center-wordmark__piece “estudio”
- section -: reveal on entering view — translateY 122→0px, at scroll 423–872px · e.g. p.site-copyright “Copyright Estudio Bang® 2026|Legal & Pri”
- section -: fixed, at scroll pinned for 199 half-screens · 5 elements · e.g. div.center-wordmark “estudiobang”; div.center-wordmark.center-wordmark--bang-overlay “estudiobang”; aside.cookie-banner “cookie? yes no legal”
- section -: reveal on entering view — translateY -1350→0px, at scroll 423–872px · e.g. button.mosaic-item
- section -: scrubbed with the scroll — translateY -1393→0px, at scroll 423–1322px · e.g. button.mosaic-item
- section -: scrubbed with the scroll — translateY -1444→0px, at scroll 423–1322px · e.g. button.mosaic-item
- section -: scrubbed with the scroll — translateY -1723→0px, at scroll 872–26230px · e.g. button.mosaic-item
- section -: reveal on entering view — translateY -1705→0px, at scroll 423–872px · e.g. button.mosaic-item
- section -: scrubbed with the scroll — translateY -1728→0px, at scroll 423–1322px · e.g. button.mosaic-item
- section -: scrubbed with the scroll — translateY -1962→0px, at scroll 423–1322px · e.g. button.mosaic-item
- section -: scrubbed with the scroll — translateY -2515→0px, at scroll 872–26230px · e.g. button.mosaic-item
- section -: reveal on entering view — opacity 1.00→0.00, translateY 17→0px, at scroll 423–26230px · 3 elements · e.g. span “AISEED”; span “Training”; span “Cortaderas”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 18→0px, at scroll 872–872px · 15 elements · e.g. span “Cortaderas”; span “Norte”; span “Revolve”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 0→0px, at scroll 423–1322px · 74 elements · e.g. span “Qubaa”; span “Landscape”; span “Interventions”
- section -: scrubbed with the scroll — opacity 1.00→0.00, translateY 0→0px, at scroll 423–26230px · 10 elements · e.g. span “BREMAR”; span “Apartments”; span “Interventions”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 6→0px, at scroll 423–26230px · 2 elements · e.g. span “Norte”; span “Waves”
- section -: scrubbed with the scroll — opacity 1.00→0.00, translateY 17→0px, at scroll 423–47995px · 2 elements · e.g. span.clock-label__roll-value “44”; span.clock-label__roll-value “44”
- section -: reveal on entering view — translateY 0→18px, at scroll 423–423px · 2 elements · e.g. span “Cortaderas”; span “Norte”
- section 1: reveal on entering view — translateY -128→0px, at scroll 423–872px · 6 elements · e.g. button.site-nav__link.site-nav__link--desktop “Home,”; button.site-nav__link.site-nav__link--desktop “about,”; button.site-nav__link.site-nav__link--desktop “projects,”

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on button.mosaic-item: 0ms (opacity)

**On hover:**

- button “ESP”: opacity: 0.2 → 1 · transition `opacity 0.24s`
- button: transform: none → matrix(1.00002, 0, 0, 1.00002, 0, 0) · transition `height 1.12s cubic-bezier(0.65, 0, 0.35, 1), left 1.12s cubic-bezier(0.65, 0, 0.35, 1), top 1.12s cubic-bezier(0.65, 0, `
- button: transform: none → matrix(1.00021, 0, 0, 1.00021, 0, 0) · transition `height 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.196s, left 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.196s, top 1.12s cubic-be`
- button: transform: none → matrix(1.00159, 0, 0, 1.00159, 0, 0) · transition `height 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.224s, left 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.224s, top 1.12s cubic-be`
- button: transform: none → matrix(1.00003, 0, 0, 1.00003, 0, 0) · transition `height 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.056s, left 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.056s, top 1.12s cubic-be`
- button: transform: none → matrix(1.00037, 0, 0, 1.00037, 0, 0) · transition `height 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.252s, left 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.252s, top 1.12s cubic-be`
- button: transform: none → matrix(1.00121, 0, 0, 1.00121, 0, 0) · transition `height 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.28s, left 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.28s, top 1.12s cubic-bezi`
- button: transform: none → matrix(1.00057, 0, 0, 1.00057, 0, 0) · transition `height 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.14s, left 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.14s, top 1.12s cubic-bezi`
- button: transform: none → matrix(1.00014, 0, 0, 1.00014, 0, 0) · transition `height 1.12s cubic-bezier(0.65, 0, 0.35, 1), left 1.12s cubic-bezier(0.65, 0, 0.35, 1), top 1.12s cubic-bezier(0.65, 0, `
- button: transform: none → matrix(1.025, 0, 0, 1.025, 0, 0); inner transform: none → matrix(1.03903, 0, 0, 1.03903, 0, 0) · transition `height 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.056s, left 1.12s cubic-bezier(0.65, 0, 0.35, 1) 0.056s, top 1.12s cubic-be`

**:hover rules in the CSS (first 18):**

- `.studio-top-nav a:not(:hover) { opacity: 0.34; }`
- `.studio-anchor-nav a:hover { background: rgba(255, 255, 255, 0.07); color: rgb(255, 255, 255); }`
- `.studio-sidebar-actions .ghost-button:hover, .studio-command-actions .link-button:hover, .studio-grid input:hover, .studio-grid input:focus, .studio-textarea textarea:hover, .studio-textarea textarea:focus, .gallery-edit`
- `.project-kind-control__option:hover, .project-kind-control__option[aria-selected="true"] { background: rgb(222, 222, 222); }`
- `.add-project-button:hover { opacity: 1; background: rgb(246, 246, 246) !important; }`
- `.studio-icon-button:hover { background: rgba(20, 20, 20, 0.08) !important; }`
- `.site-language__option:hover, .site-language__option--active { opacity: 1; }`
- `.site-nav--home .site-nav__link, .site-nav__link:hover, .site-nav__link--active { opacity: 1; }`
- `.cookie-banner:hover .cookie-banner__question, .cookie-banner:focus-within .cookie-banner__question { opacity: 0; pointer-events: none; }`
- `.cookie-banner:hover .cookie-banner__choices, .cookie-banner:focus-within .cookie-banner__choices { opacity: 1; pointer-events: auto; }`
- `.mosaic-item:hover .mosaic-item__media { transform: scale(1.04); }`
- `.contact-input:hover, .contact-input:focus, .contact-reason__trigger:hover, .contact-reason--open .contact-reason__trigger, .contact-reason__option:hover { background: rgba(20, 20, 20, 0.05); }`
- `.contact-submit:hover, .contact-submit:focus { background: rgb(0, 0, 0); outline: none; }`
- `.contact-submit--error:hover, .contact-submit--error:focus, .case-contact-button--error:hover, .case-contact-button--error:focus { background: rgb(199, 22, 29); }`
- `.about-team-member:hover, .about-team-member:focus-within, .about-team-member--expanded { background: rgba(0, 0, 0, 0.05); }`
- `.about-team-member__summary:hover, .about-team-member__summary:focus-visible { background: transparent; }`
- `.about-team-member__social:hover { opacity: 1; transform: scale(1.12); }`
- `.case-contact-field input:hover, .case-contact-field input:focus, .case-contact-reason__trigger:hover, .case-contact-reason--open .case-contact-reason__trigger, .case-contact-reason__option:hover { background: rgba(20, 2`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits
