# Design capture: https://mubien.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Mubien | Branding, motion and digital products (page 844px tall, window 390×844)

**Fonts:** `base` ×39

**Loaded faces:** base normal normal · base 700 normal

**Font sizes:** `13px` ×33 · `28.0563px` ×6

**Weights:** `400` ×39

**Size / line height:** `13px / 13px` ×17 · `13px / 18.005px` ×16 · `28.0563px / 35.0704px` ×6

**Letter spacing:** `normal` ×39

**Text colours:** `rgb(255, 255, 255)` ×17 · `rgb(29, 29, 29)` ×16 · `rgb(161, 161, 161)` ×6

**Backgrounds:** `rgb(255, 255, 255)` ×356 · `rgb(248, 248, 248)` ×104 · `rgb(221, 221, 221)` ×24 · `rgba(231, 231, 231, 0.6)` ×23 · `rgba(200, 200, 200, 0.5)` ×23 · `rgb(29, 29, 29)` ×9 · `rgb(238, 238, 238)` ×7 · `rgba(255, 255, 255, 0.2)` ×3 · `rgb(200, 200, 200)` ×0

**Borders:** `1px solid rgb(238, 238, 238)` ×1 · `1px solid rgb(29, 29, 29)` ×1

**Radii:** `8px` ×14 · `50%` ×8 · `100%` ×2 · `16px` ×1 · `64px` ×1 · `4px` ×1

**Gradients:** `linear-gradient(90deg, rgb(221, 221, 221), rgb(29, 29, 29), rgb(221, 221, 221))` ×1

**Transitions:** `color 0.55s cubic-bezier(0.66` ×8 · `transform 0.4s linear(0 0%` ×4 · `background, color, border-color 0.4s cubic-bezier(0.771` ×2 · `background 0.4s cubic-bezier(0.771` ×2

**:root variables (1):** `--csk-rev: "csk-6b3d8e28-f1cd-4986-a997-7c178cbf519f"`

### Sections

1. `header` at 764px, 64px tall, position fixed — “Mubien Brands” · original-390-section-01.png

### Media slots

- section -: canvas (WebGL/2D), 390×844 (aspect 0.46), fit auto, **fills the window height**
- section -: video autoplay loop, 334×188 (aspect 1.78), fit cover, radius 8px

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art) · 11 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateX -301→-358px, at scroll 0–0px · e.g. div.navSLL
- section -: reveal on entering view — opacity 1.00→0.00, translateY 0→-35px, at scroll 0–0px · 4 elements · e.g. span “AVATR”; span “-”; span “Vision”
- section -: reveal on entering view — translateY 0→-23px, at scroll 0–0px · e.g. span.homeN “01”
- section -: reveal on entering view — translateY 13→-10px, at scroll 0–0px · e.g. span.homeN “02”
- section -: reveal on entering view — translateY 26→3px, at scroll 0–0px · e.g. span.homeN “03”
- section -: reveal on entering view — translateY 39→16px, at scroll 0–0px · e.g. span.homeN “04”
- section -: reveal on entering view — translateY -26→29px, at scroll 0–0px · e.g. span.homeN “05”
- section -: reveal on entering view — translateY -13→-36px, at scroll 0–0px · e.g. span.homeN “06”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `textGrad` on span “Slide to contact us”: 4000ms, loops forever (backgroundPositionX, backgroundPositionY)

**:hover rules in the CSS (first 20):**

- `.sizes:hover { opacity: 1; }`
- `.HLP:hover { opacity: 1; }`
- `.aBtn:hover.aBtn-dk { color: rgb(29, 29, 29); background: 0px 0px; }`
- `.aBtn:hover.aBtn-lt, .aBtn:hover.aBtn-gr { color: rgb(255, 255, 255); background-color: rgb(29, 29, 29); border: 1px solid rgb(29, 29, 29); }`
- `.aBtn:hover::before { pointer-events: all; }`
- `.aBtni:hover { color: rgb(255, 255, 255); background: rgb(29, 29, 29); }`
- `.aBtni:hover svg :not(g) { fill: rgb(255, 255, 255); }`
- `.aPag:hover { background: rgb(238, 238, 238); }`
- `.aPost:hover { border: 1px solid rgb(161, 161, 161); }`
- `.aPost:hover .aPostIM img, .aPost:hover .aPostIM video { transform: scale(1.1); }`
- `.aPost:hover .aPost_btn { opacity: 1; transition: opacity 1ms cubic-bezier(0.771, 0.029, 0.189, 1.007); }`
- `.aPost:hover .aPost_btn::before { transform: scaleX(1); }`
- `.cskCTA:hover .h2 { color: rgb(200, 200, 200); }`
- `.cskCTA:hover .ctaLink { color: rgb(29, 29, 29); }`
- `.cskCTA:hover .ctaLink::before, .cskCTA:hover .ctaLink::after { opacity: 1; transform: translate(0px); }`
- `.rad_el:hover, .rad_el:has(input:checked) { color: rgb(29, 29, 29); border-color: rgb(29, 29, 29); }`
- `.chk_lbl a:hover { opacity: 0.5; }`
- `.frm_err button:hover { color: rgb(29, 29, 29); }`
- `.nav_brg:hover::after { opacity: 1; transform: scale(1); }`
- `.nav_lnk:hover .nav_lnkHLD { transform: scale(0.9); }`

### The site's own links

`/blog` Updates Latest news · `/archive` Archive More work · `/work` Work Selected projects · `/about` Studio About us

## 1440px — Mubien | Branding, motion and digital products (page 900px tall, window 1440×900)

**Fonts:** `base` ×39

**Loaded faces:** base normal normal · base 700 normal

**Font sizes:** `13px` ×33 · `32px` ×6

**Weights:** `400` ×39

**Size / line height:** `13px / 13px` ×18 · `13px / 18.005px` ×15 · `32px / 40px` ×6

**Letter spacing:** `normal` ×39

**Text colours:** `rgb(255, 255, 255)` ×17 · `rgb(29, 29, 29)` ×16 · `rgb(161, 161, 161)` ×6

**Backgrounds:** `rgb(255, 255, 255)` ×341 · `rgb(248, 248, 248)` ×94 · `rgb(221, 221, 221)` ×23 · `rgba(231, 231, 231, 0.6)` ×22 · `rgba(200, 200, 200, 0.5)` ×22 · `rgba(255, 255, 255, 0.2)` ×6 · `rgb(29, 29, 29)` ×5 · `rgb(238, 238, 238)` ×3 · `rgb(200, 200, 200)` ×0

**Borders:** `1px solid rgb(238, 238, 238)` ×1 · `1px solid rgb(29, 29, 29)` ×1 · `1px solid rgb(255, 255, 255)` ×1

**Radii:** `8px` ×13 · `50%` ×9 · `16px` ×2 · `100%` ×2 · `64px` ×1 · `4px` ×1 · `12px` ×1

**Gradients:** `linear-gradient(90deg, rgb(221, 221, 221), rgb(29, 29, 29), rgb(221, 221, 221))` ×1

**Transitions:** `color 0.55s cubic-bezier(0.66` ×8 · `transform 0.4s linear(0 0%` ×4 · `background, color, border-color 0.4s cubic-bezier(0.771` ×2 · `background 0.4s cubic-bezier(0.771` ×2

**:root variables (1):** `--csk-rev: "csk-6b3d8e28-f1cd-4986-a997-7c178cbf519f"`

### Sections

1. `header` at 812px, 64px tall, position fixed — “Mubien Brands” · original-1440-section-01.png

### Media slots

- section -: canvas (WebGL/2D), 1440×900 (aspect 1.60), fit auto, **fills the window height**
- section -: video autoplay loop, 319×179 (aspect 1.78), fit cover, radius 8px

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art) · 11 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateX -88→-343px, at scroll 0–0px · e.g. div.navSLL
- section -: reveal on entering view — opacity 1.00→0.00, translateY 0→-40px, at scroll 0–0px · 2 elements · e.g. span “Youtube”; span “Shopping”
- section -: reveal on entering view — translateY -21→-30px, at scroll 0–0px · e.g. span.homeN “01”
- section -: reveal on entering view — translateY 0→-9px, at scroll 0–0px · e.g. span.homeN “02”
- section -: reveal on entering view — translateY 21→12px, at scroll 0–0px · e.g. span.homeN “03”
- section -: reveal on entering view — translateY 42→33px, at scroll 0–0px · e.g. span.homeN “04”
- section -: reveal on entering view — translateY 63→54px, at scroll 0–0px · e.g. span.homeN “05”
- section -: reveal on entering view — translateY -42→-51px, at scroll 0–0px · e.g. span.homeN “06”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `textGrad` on span “Slide to contact us”: 4000ms, loops forever (backgroundPositionX, backgroundPositionY)

**:hover rules in the CSS (first 20):**

- `.sizes:hover { opacity: 1; }`
- `.HLP:hover { opacity: 1; }`
- `.aBtn:hover.aBtn-dk { color: rgb(29, 29, 29); background: 0px 0px; }`
- `.aBtn:hover.aBtn-lt, .aBtn:hover.aBtn-gr { color: rgb(255, 255, 255); background-color: rgb(29, 29, 29); border: 1px solid rgb(29, 29, 29); }`
- `.aBtn:hover::before { pointer-events: all; }`
- `.aBtni:hover { color: rgb(255, 255, 255); background: rgb(29, 29, 29); }`
- `.aBtni:hover svg :not(g) { fill: rgb(255, 255, 255); }`
- `.aPag:hover { background: rgb(238, 238, 238); }`
- `.aPost:hover { border: 1px solid rgb(161, 161, 161); }`
- `.aPost:hover .aPostIM img, .aPost:hover .aPostIM video { transform: scale(1.1); }`
- `.aPost:hover .aPost_btn { opacity: 1; transition: opacity 1ms cubic-bezier(0.771, 0.029, 0.189, 1.007); }`
- `.aPost:hover .aPost_btn::before { transform: scaleX(1); }`
- `.cskCTA:hover .h2 { color: rgb(200, 200, 200); }`
- `.cskCTA:hover .ctaLink { color: rgb(29, 29, 29); }`
- `.cskCTA:hover .ctaLink::before, .cskCTA:hover .ctaLink::after { opacity: 1; transform: translate(0px); }`
- `.rad_el:hover, .rad_el:has(input:checked) { color: rgb(29, 29, 29); border-color: rgb(29, 29, 29); }`
- `.chk_lbl a:hover { opacity: 0.5; }`
- `.frm_err button:hover { color: rgb(29, 29, 29); }`
- `.nav_brg:hover::after { opacity: 1; transform: scale(1); }`
- `.nav_lnk:hover .nav_lnkHLD { transform: scale(0.9); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/blog` Updates Latest news · `/archive` Archive More work · `/work` Work Selected projects · `/about` Studio About us
