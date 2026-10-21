# Design capture: https://daqconsulting.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Data & AI Engineering Consulting | DAQ Consulting (page 8245px tall, window 390×844)

**Fonts:** `Inter` ×105 · `ui-monospace` ×66

**Loaded faces:** Inter 100 900 normal · Inter Fallback normal normal

**Font sizes:** `10px` ×51 · `27.2px` ×40 · `12px` ×21 · `14px` ×13 · `30.4px` ×10 · `13px` ×8 · `9px` ×8 · `16px` ×5 · `8px` ×4 · `20px` ×4 · `48px` ×2 · `38.4px` ×2 · `33.6px` ×2 · `32px` ×1

**Weights:** `400` ×72 · `100` ×34 · `500` ×26 · `300` ×22 · `700` ×11 · `600` ×4

**Size / line height:** `10px / 15px` ×51 · `27.2px / 28.288px` ×40 · `12px / 12px` ×18 · `30.4px / 31.92px` ×10 · `9px / 13.5px` ×8 · `13px / 19.5px` ×7 · `14px / 22.75px` ×6 · `8px / 6px` ×4 · `14px / 20px` ×4 · `16px / 24px` ×3

**Letter spacing:** `-0.68px` ×40 · `1.4px` ×22 · `1.8px` ×18 · `normal` ×13 · `2px` ×12 · `-0.76px` ×10

**Text colours:** `rgba(255, 255, 255, 0.58)` ×64 · `rgb(255, 255, 255)` ×53 · `rgba(0, 0, 0, 0)` ×25 · `rgba(255, 255, 255, 0.5)` ×16 · `rgba(255, 255, 255, 0.72)` ×9 · `rgba(255, 255, 255, 0.55)` ×2 · `rgb(16, 16, 16)` ×1 · `rgba(255, 255, 255, 0.85)` ×1

**Backgrounds:** `rgba(255, 255, 255, 0.02)` ×630 · `rgb(0, 0, 0)` ×200 · `rgba(0, 0, 0, 0.55)` ×200 · `rgb(5, 5, 5)` ×133 · `rgba(8, 8, 8, 0.35)` ×24 · `rgb(255, 255, 255)` ×23 · `rgba(255, 255, 255, 0.1)` ×1 · `rgba(255, 255, 255, 0.15)` ×0 · `rgba(255, 255, 255, 0.4)` ×0 · `rgb(113, 113, 122)` ×0 · `rgb(161, 161, 170)` ×0

**Borders:** `1px solid rgba(255, 255, 255, 0.1)` ×8 · `1px solid rgba(255, 255, 255, 0.05)` ×2 · `1px solid rgba(255, 255, 255, 0.2)` ×1 · `1px solid rgba(255, 255, 255, 0.58)` ×1

**Gradients:** `radial-gradient(circle at 50% 0px, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0) 70%)` ×1 · `linear-gradient(rgba(255, 255, 255, 0.05) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, rgba(0, 0, 0, 0) 1px)` ×1

**Transitions:** `transform 0.5s cubic-bezier(0.19` ×23 · `all 0.5s cubic-bezier(0.4` ×13 · `color, background-color, border-color, text-decoration-color 0.5s cubic-bezier(0.4` ×12 · `color, background-color, border-color, text-decoration-color 0.7s cubic-bezier(0.4` ×10 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.4` ×9 · `all 0.3s cubic-bezier(0.4` ×8 · `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×3 · `-webkit-mask-position, mask-position 0.45s ease` ×2

**:root variables (1):** `--foreground-rgb: 255,255,255`

### Sections

1. `header` at 0px, 96px tall, position fixed · original-390-section-01.png
2. `div` at 0px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “We Architect Intelligence.” · original-390-section-02.png
3. `section` at 844px, 2110px tall — **sized by the window: 250% of the window height** (1583px in a 633px window) · original-390-section-03.png, original-390-section-04.png
4. `section#neural-core` at 2954px, 1941px tall — **sized by the window: 230% of the window height** (1456px in a 633px window) — “The Neural Core.” · original-390-section-05.png
5. `section` at 4895px, 2163px tall — “Engineered for Scale.” · original-390-section-06.png, original-390-section-07.png
6. `footer` at 7058px, 1186px tall — “Bring the complexity.Let’s build.” · original-390-section-08.png

### Media slots

- section -: canvas (WebGL/2D), 390×844 (aspect 0.46), fit auto, **fills the window height**
- section -: background image, 390×844 (aspect 0.46), fit auto, **fills the window height**

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — opacity 1.00→0.00, at scroll 422–422px · e.g. div
- section -: reveal on entering view — translateY -50→0px, translateX -56→0px, at scroll 422–422px · e.g. div
- section -: reveal on entering view — opacity 1.00→0.00, translateX -103→0px, at scroll 422–422px · e.g. p.overflow-hidden.font-mono “Data & AI Engineering”
- section -: reveal on entering view — translateY -11→0px, at scroll 422–422px · e.g. span.block “Data & AI Engineering”
- section -: scrubbed with the scroll — opacity 1.00→1.00, while pinned, at scroll 1666–7153px · e.g. div.fixed.inset-0
- section 1: fixed, at scroll pinned for 19 half-screens · e.g. header.fixed.top-0 “DAQ Consulting, home DAQ CONSULTING CONS”
- section 1: reveal on entering view — opacity 0.00→1.00, translateY 10→0px, at scroll 422–422px · e.g. span “DAQ CONSULTING CONSULTING”
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 0→119px, at scroll 422–1243px · e.g. div.relative.z-20 “We Architect Intelligence. WE ARCHITECT ”
- section 2: reveal on entering view — translateY 38→0px, at scroll 422–422px · 2 elements · e.g. div.text-[clamp(3rem,8vw,9rem)].font-sans “WE ARCHITECT”; div.text-[clamp(3rem,8vw,9rem)].font-sans “INTELLIGENCE.”
- section 3: pinned (sticky), at scroll pinned for 2 half-screens · e.g. div.sticky.top-0 “MANIFESTO INTELLIGENCEREQUIRESSTRUCTURE.”
- section 3: reveal on entering view — opacity 1.00→0.15, translateY 0→-40px, at scroll 2087–2508px · e.g. div.relative.z-10 “MANIFESTO INTELLIGENCEREQUIRESSTRUCTURE.”
- section 3: reveal on entering view — opacity 0.25→1.00, at scroll 821–821px · 4 elements · e.g. li.flex.items-center “Structure”; li.flex.items-center “Governed”; li.flex.items-center “Scalable”
- section 4: reveal on entering view — opacity 1.00→0.00, at scroll 3349–3771px · e.g. p.text-[13px].leading-relaxed “Every source lands raw and immutable. No”
- section 4: reveal on entering view — opacity 0.00→0.00, at scroll 3349–4193px · e.g. p.text-[13px].leading-relaxed “Cleansed, deduplicated, modelled. One sc”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 3771–4193px · e.g. p.text-[13px].leading-relaxed “Metadata drives orchestration. Every run”
- section 5: scrubbed with the scroll — clip-path changes, at scroll 4615–5459px · 10 elements · e.g. span.absolute.inset-0 “Data Engineering”; span.absolute.inset-0; span.absolute.inset-0 “AI Engineering”
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 422–422px · e.g. span “DAQ CONSULTING CONSULTING”

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on span.absolute.inset-0 “Data Engineering”: 1100ms (clipPath)
- Animation `` on span.absolute.inset-0: 1100ms (clipPath)
- Animation `` on span.absolute.inset-0 “AI Engineering”: 1100ms (clipPath)
- Animation `` on span.absolute.inset-0 “Analytics”: 1100ms (clipPath)
- Animation `` on span.absolute.inset-0 “Migration”: 1100ms (clipPath)
- Animation `` on span.absolute.inset-0 “Managed Services”: 1100ms (clipPath)

**:hover rules in the CSS (first 20):**

- `.group:hover .stroke-text { color: rgb(255, 255, 255); -webkit-text-stroke-color: transparent; }`
- `.hover\:border-white:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); }`
- `.hover\:border-white\/25:hover { border-color: rgba(255, 255, 255, 0.25); }`
- `.hover\:border-white\/40:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.hover\:border-white\/60:hover { border-color: rgba(255, 255, 255, 0.6); }`
- `.hover\:bg-white\/\[0\.025\]:hover { background-color: rgba(255, 255, 255, 0.024); }`
- `.hover\:bg-white\/\[0\.04\]:hover { background-color: rgba(255, 255, 255, 0.04); }`
- `.hover\:bg-white\/\[0\.06\]:hover { background-color: rgba(255, 255, 255, 0.06); }`
- `.hover\:text-white:hover { --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity,1)); }`
- `.hover\:text-white\/80:hover { color: rgba(255, 255, 255, 0.8); }`
- `.hover\:decoration-white:hover { text-decoration-color: rgb(255, 255, 255); }`
- `.group\/track:hover .group-hover\/track\:-translate-y-0\.5 { --tw-translate-y: -.125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew`
- `.group\/track:hover .group-hover\/track\:translate-x-0\.5 { --tw-translate-x: .125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y`
- `.group:hover .group-hover\:-translate-x-1 { --tw-translate-x: -.25rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--t`
- `.group:hover .group-hover\:-translate-y-0\.5 { --tw-translate-y: -.125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var`
- `.group:hover .group-hover\:-translate-y-1 { --tw-translate-y: -.25rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--t`
- `.group:hover .group-hover\:-translate-y-full { --tw-translate-y: -100%; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--`
- `.group:hover .group-hover\:translate-x-0\.5 { --tw-translate-x: .125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(-`
- `.group:hover .group-hover\:translate-x-1 { --tw-translate-x: .25rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--tw-`
- `.group:hover .group-hover\:translate-y-0 { --tw-translate-y: 0px; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--tw-sca`

### The site's own links

`/` DAQ Consulting, home DAQ CONSULTING CONS · `/case-studies` Outcomes · `/about` About · `/careers` Careers · `/contact` Start Project · `/data-engineering` DATA ENGINEERING · `/ai-engineering` AI ENGINEERING · `/analytics` ANALYTICS · `/migration` MIGRATION · `/managed-services` MANAGED SERVICES · `/privacy` PRIVACY POLICY · `/terms` TERMS OF USE

## 1440px — Data & AI Engineering Consulting | DAQ Consulting (page 9993px tall, window 1440×900)

**Fonts:** `Inter` ×110 · `ui-monospace` ×84

**Loaded faces:** Inter 100 900 normal · Inter Fallback normal normal

**Font sizes:** `10px` ×66 · `69.12px` ×40 · `12px` ×20 · `9px` ×10 · `15px` ×10 · `46.08px` ×10 · `13px` ×9 · `14px` ×8 · `16px` ×6 · `8px` ×4 · `115.2px` ×2 · `20px` ×2 · `80.64px` ×2 · `83.52px` ×2

**Weights:** `400` ×94 · `100` ×34 · `500` ×27 · `300` ×22 · `700` ×11 · `600` ×4

**Size / line height:** `10px / 15px` ×66 · `69.12px / 71.8848px` ×40 · `12px / 12px` ×18 · `46.08px / 48.384px` ×10 · `13px / 19.5px` ×8 · `9px / 13.5px` ×7 · `14px / 20px` ×5 · `15px / 24.375px` ×5 · `16px / 24px` ×4 · `8px / 6px` ×4

**Letter spacing:** `-1.728px` ×40 · `1.4px` ×23 · `2px` ×22 · `1.8px` ×18 · `normal` ×14 · `-1.152px` ×10

**Text colours:** `rgba(255, 255, 255, 0.58)` ×76 · `rgb(255, 255, 255)` ×59 · `rgba(0, 0, 0, 0)` ×25 · `rgba(255, 255, 255, 0.5)` ×16 · `rgba(255, 255, 255, 0.72)` ×9 · `rgba(255, 255, 255, 0.55)` ×2 · `rgba(255, 255, 255, 0.74)` ×2 · `rgba(255, 255, 255, 0.7)` ×2 · `rgb(0, 0, 0)` ×1 · `rgb(16, 16, 16)` ×1 · `rgba(255, 255, 255, 0.85)` ×1

**Backgrounds:** `rgba(255, 255, 255, 0.02)` ×1000 · `rgb(0, 0, 0)` ×200 · `rgb(5, 5, 5)` ×200 · `rgba(0, 0, 0, 0.55)` ×200 · `rgb(255, 255, 255)` ×35 · `rgba(8, 8, 8, 0.35)` ×25 · `rgba(255, 255, 255, 0.1)` ×3 · `rgba(255, 255, 255, 0.05)` ×3 · `rgba(255, 255, 255, 0.2)` ×0 · `rgba(255, 255, 255, 0.15)` ×0 · `rgb(113, 113, 122)` ×0 · `rgb(161, 161, 170)` ×0

**Borders:** `1px solid rgba(255, 255, 255, 0.1)` ×6 · `1px solid rgba(255, 255, 255, 0.05)` ×2 · `1px solid rgba(255, 255, 255, 0.2)` ×1 · `1px solid rgba(255, 255, 255, 0.3)` ×1 · `1px solid rgba(255, 255, 255, 0.58)` ×1

**Radii:** `9999px` ×22

**Gradients:** `radial-gradient(circle at 50% 0px, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0) 70%)` ×1 · `linear-gradient(rgba(255, 255, 255, 0.05) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, rgba(0, 0, 0, 0) 1px)` ×1

**Transitions:** `transform 0.5s cubic-bezier(0.19` ×23 · `color, background-color, border-color, text-decoration-color 0.5s cubic-bezier(0.4` ×17 · `all 0.5s cubic-bezier(0.4` ×14 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.4` ×13 · `all 0.3s cubic-bezier(0.4` ×10 · `color, background-color, border-color, text-decoration-color 0.7s cubic-bezier(0.4` ×10 · `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×4 · `-webkit-mask-position, mask-position 0.45s ease` ×2

**:root variables (1):** `--foreground-rgb: 255,255,255`

### Sections

1. `header` at 0px, 96px tall, position fixed — **sized by the window: 11% of the window height** (64px in a 675px window) · original-1440-section-01.png
2. `div` at 0px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “We Architect Intelligence.” · original-1440-section-02.png
3. `section` at 900px, 2250px tall — **sized by the window: 250% of the window height** (1688px in a 675px window) · original-1440-section-03.png, original-1440-section-04.png
4. `section#neural-core` at 3150px, 2070px tall — “The Neural Core.” · original-1440-section-05.png, original-1440-section-06.png
5. `section` at 5220px, 3873px tall — “Engineered for Scale.” · original-1440-section-07.png, original-1440-section-08.png
6. `footer` at 9093px, 900px tall — **sized by the window: 100% of the window height** (680px in a 675px window) — “Bring the complexity.Let’s build.” · original-1440-section-09.png

### Media slots

- section -: canvas (WebGL/2D), 1440×900 (aspect 1.60), fit auto, **fills the window height**
- section -: background image, 1440×900 (aspect 1.60), fit auto, **fills the window height**

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art)

**While scrolling** (sampled every half screen):

- section -: scrubbed with the scroll — opacity 1.00→1.00, while pinned, at scroll 1783–8985px · e.g. div.fixed.inset-0
- section 1: fixed, at scroll pinned for 22 half-screens · e.g. header.fixed.top-0 “DAQ Consulting, home DAQ CONSULTING CONS”
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 0→128px, at scroll 432–1338px · e.g. div.relative.z-20 “We Architect Intelligence. WE ARCHITECT ”
- section 3: pinned (sticky), at scroll pinned for 2 half-screens · e.g. div.sticky.top-0 “MANIFESTO STRUCTURE GOVERNED SCALABLE DE”
- section 3: reveal on entering view — opacity 1.00→0.15, translateY 0→-40px, at scroll 2236–2677px · e.g. div.relative.z-10 “MANIFESTO STRUCTURE GOVERNED SCALABLE DE”
- section 3: reveal on entering view — opacity 0.25→1.00, at scroll 889–889px · 4 elements · e.g. li.flex.items-center “STRUCTURE”; li.flex.items-center “GOVERNED”; li.flex.items-center “SCALABLE”
- section 4: reveal on entering view — opacity 1.00→0.00, at scroll 3574–4022px · e.g. p.text-[13px].leading-relaxed “Every source lands raw and immutable. No”
- section 4: reveal on entering view — opacity 0.00→0.00, at scroll 3574–4471px · e.g. p.text-[13px].leading-relaxed “Cleansed, deduplicated, modelled. One sc”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 4022–4471px · e.g. p.text-[13px].leading-relaxed “Metadata drives orchestration. Every run”
- section 4: reveal on entering view — opacity 1.00→1.00, at scroll 3122–4925px · e.g. div “HOVER A STAGE TO INSPECT”
- section 5: pinned (sticky), at scroll pinned for 6 half-screens · e.g. div.sticky.top-0 “02 / SYSTEM CAPABILITIES ENGINEERED FOR ”
- section 5: scrubbed with the scroll — translateX 0→-2973px, at scroll 5374–8525px · e.g. div.flex.gap-[3vw] “Data Engineering Data Engineering Reliab”
- section 5: reveal on entering view — scale 0.96→1.00, at scroll 432–432px · e.g. span.absolute.left-0

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on div “Tap a stage to inspect”: 300ms (opacity)
- Animation `` on div “HOVER A STAGE TO INSPECT”: 350ms (opacity)

**On hover:**

- button “Services”: color: rgba(255, 255, 255, 0.72) → rgb(255, 255, 255); inner color: rgba(255, 255, 255, 0.72) → rgb(255, 255, 255) · transition `color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bez`
- a “Outcomes”: color: rgba(255, 255, 255, 0.72) → rgb(255, 255, 255) · transition `color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bez`
- a “About”: color: rgba(255, 255, 255, 0.72) → rgb(255, 255, 255) · transition `color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bez`
- button “SOUND SOUND ON OFF”: color: rgba(255, 255, 255, 0.74) → rgb(255, 255, 255); inner color: rgba(255, 255, 255, 0.74) → rgb(255, 255, 255) · transition `color 0.18s cubic-bezier(0.16, 1, 0.3, 1)`
- a “EXPLORE THE CORE”: border: rgba(255, 255, 255, 0.2) → rgba(255, 255, 255, 0.6); inner transform: matrix(0, 0, 0, 1, 0, 0) → matrix(0.992764, 0, 0, 1, 0, 0) · transition `color 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.5s cubic-bez`
- g: opacity: 0.3 → 1 · transition `0.5s cubic-bezier(0.4, 0, 0.2, 1)`
- g: opacity: 0.3 → 1 · transition `0.5s cubic-bezier(0.4, 0, 0.2, 1)`
- a “Data Engineering Data Engineering Reliab”: border: rgba(255, 255, 255, 0.3) → rgba(255, 255, 255, 0.392) · transition `color 0.7s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.7s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.7s cubic-bez`
- a “AI Engineering AI Engineering Production”: border: rgba(255, 255, 255, 0.1) → rgba(255, 255, 255, 0.38) · transition `color 0.7s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.7s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.7s cubic-bez`
- button “TOP”: color: rgba(255, 255, 255, 0.58) → rgb(255, 255, 255); inner color: rgba(255, 255, 255, 0.58) → rgb(255, 255, 255) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`

**:hover rules in the CSS (first 20):**

- `.group:hover .stroke-text { color: rgb(255, 255, 255); -webkit-text-stroke-color: transparent; }`
- `.hover\:border-white:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); }`
- `.hover\:border-white\/25:hover { border-color: rgba(255, 255, 255, 0.25); }`
- `.hover\:border-white\/40:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.hover\:border-white\/60:hover { border-color: rgba(255, 255, 255, 0.6); }`
- `.hover\:bg-white\/\[0\.025\]:hover { background-color: rgba(255, 255, 255, 0.024); }`
- `.hover\:bg-white\/\[0\.04\]:hover { background-color: rgba(255, 255, 255, 0.04); }`
- `.hover\:bg-white\/\[0\.06\]:hover { background-color: rgba(255, 255, 255, 0.06); }`
- `.hover\:text-white:hover { --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity,1)); }`
- `.hover\:text-white\/80:hover { color: rgba(255, 255, 255, 0.8); }`
- `.hover\:decoration-white:hover { text-decoration-color: rgb(255, 255, 255); }`
- `.group\/track:hover .group-hover\/track\:-translate-y-0\.5 { --tw-translate-y: -.125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew`
- `.group\/track:hover .group-hover\/track\:translate-x-0\.5 { --tw-translate-x: .125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y`
- `.group:hover .group-hover\:-translate-x-1 { --tw-translate-x: -.25rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--t`
- `.group:hover .group-hover\:-translate-y-0\.5 { --tw-translate-y: -.125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var`
- `.group:hover .group-hover\:-translate-y-1 { --tw-translate-y: -.25rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--t`
- `.group:hover .group-hover\:-translate-y-full { --tw-translate-y: -100%; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--`
- `.group:hover .group-hover\:translate-x-0\.5 { --tw-translate-x: .125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(-`
- `.group:hover .group-hover\:translate-x-1 { --tw-translate-x: .25rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--tw-`
- `.group:hover .group-hover\:translate-y-0 { --tw-translate-y: 0px; transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--tw-sca`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` DAQ Consulting, home DAQ CONSULTING CONS · `/case-studies` Outcomes · `/about` About · `/careers` Careers · `/contact` Start Project · `/data-engineering` DATA ENGINEERING · `/ai-engineering` AI ENGINEERING · `/analytics` ANALYTICS · `/migration` MIGRATION · `/managed-services` MANAGED SERVICES · `/privacy` PRIVACY POLICY · `/terms` TERMS OF USE
