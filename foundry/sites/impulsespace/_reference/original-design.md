# Design capture: https://impulsespace.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Impulse Space - Mobilizing Space (page 844px tall, window 390×844)

**Fonts:** `abcMonumentGrotesk` ×65 · `abcMonumentGroteskMono` ×12

**Loaded faces:** abcMonumentGrotesk 400 normal · abcMonumentGrotesk 500 normal · abcMonumentGrotesk Fallback normal normal · abcMonumentGroteskMono 400 normal · abcMonumentGroteskMono Fallback normal normal · swiper-icons 400 normal

**Font sizes:** `20px` ×24 · `22px` ×21 · `16px` ×16 · `14px` ×12 · `40px` ×4

**Weights:** `500` ×47 · `400` ×30

**Size / line height:** `20px / 24px` ×24 · `22px / 28.6px` ×21 · `16px / 22.4px` ×16 · `14px / 21px` ×12 · `40px / 48px` ×4

**Letter spacing:** `normal` ×61 · `1.12px` ×12 · `-0.8px` ×4

**Text colours:** `rgb(0, 0, 0)` ×46 · `rgb(255, 255, 255)` ×23 · `rgba(0, 0, 0, 0.5)` ×8

**Backgrounds:** `rgb(247, 247, 245)` ×469 · `rgb(0, 0, 0)` ×409 · `rgb(255, 255, 255)` ×288

**Borders:** `1px solid rgba(255, 255, 255, 0.15)` ×9

**Radii:** `9999px` ×8 · `16px` ×6

**Gradients:** `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))` ×2

**Transitions:** `opacity 0.15s cubic-bezier(0.4` ×12 · `all 0.4s cubic-bezier(0.4` ×9 · `color, background-color, border-color, text-decoration-color 0.2s cubic-bezier(0.4` ×7 · `opacity 0.25s cubic-bezier(0.4` ×3 · `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×3 · `all 0.3s cubic-bezier(0.4` ×2 · `opacity 0.2s cubic-bezier(0.4` ×1 · `color, background-color, border-color, text-decoration-color 0.25s cubic-bezier(0.4` ×1

**:root variables (3):** `--gutter: 24px` · `--columnGap: 10px` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at 0px, 72px tall, position fixed · original-390-section-01.png
2. `section` at -422px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “Mobilizing Space” · original-390-section-02.png
3. `div` at 422px, 469px tall · original-390-section-03.png
4. `section` at 891px, 1824px tall — “Our Vehicles”
5. `section` at 2715px, 1329px tall — “Our Missions”
6. `section` at 4284px, 533px tall — “OUR PARTNERS”
7. `section` at 4817px, 1232px tall — “Careers”
8. `footer` at 6049px, 1248px tall — “Vehicles”

### Media slots

- section 2: image, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 4: image, 262×278 (aspect 0.94), fit contain
- section 4: image, 262×249 (aspect 1.05), fit contain
- section 4: image, 262×278 (aspect 0.94), fit contain
- section 5: image, 726×1489 (aspect 0.49), fit cover
- section 7: image, 326×480 (aspect 0.68), fit cover

### Motion

**Libraries and media seen:** 6 canvas element(s) (WebGL/2D art) · 3 video element(s)

**While scrolling** (sampled every half screen):

- section 6: reveal on entering view — filter changes (e.g. blur), at scroll 0–0px · e.g. div.logo-item.max-w-[150px]

**:hover rules in the CSS (first 20):**

- `.group:hover .wipe-hover-group, .wipe-hover:hover { --mask-position-hover: 100%; }`
- `.moving-gradient-btn-debug:hover::before { transform: translateX(100%); }`
- `.gradient-cta:hover::before { opacity: 0.8; scale: 1; }`
- `.gradient-cta:hover::after { opacity: 0.8; scale: 1; }`
- `.gradient-cta-small:hover::before { opacity: 0.8; }`
- `.gradient-cta-small:hover::after { opacity: 0.8; }`
- `.hover-line-sweep:hover { color: rgba(0, 0, 0, 0.7); }`
- `.hover-line-sweep:hover::after { transform: scaleX(0); }`
- `.hover-line-sweep:hover::before { transform: scaleX(1); }`
- `.hover\:bg-black:hover { --tw-bg-opacity: 1; background-color: rgb(0 0 0/var(--tw-bg-opacity)); }`
- `.hover\:bg-gray-100:hover { --tw-bg-opacity: 1; background-color: rgb(243 244 246/var(--tw-bg-opacity)); }`
- `.hover\:text-black\/70:hover { color: rgba(0, 0, 0, 0.7); }`
- `.hover\:text-white:hover { --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity)); }`
- `.hover\:opacity-100:hover { opacity: 1; }`
- `.hover\:opacity-50:hover { opacity: 0.5; }`
- `.hover\:opacity-70:hover { opacity: 0.7; }`
- `.group:hover .group-hover\:scale-\[1\] { --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX`
- `.group:hover .group-hover\:text-black { --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity)); }`
- `.group:hover .group-hover\:text-black\/50 { color: rgba(0, 0, 0, 0.5); }`
- `.group:hover .group-hover\:opacity-70 { opacity: 0.7; }`

### The site's own links

`/helios` Helios · `/mira` Mira · `/rideshare` Rideshare · `/mojave` Mojave · `/careers` Careers · `/approach` Approach · `/about` About · `/updates` Updates · `/contact` Contact · `/legal` LEGAL · `/privacy` PRIVACY · `/supplier` SUPPLIER

## 1440px — Impulse Space - Mobilizing Space (page 900px tall, window 1440×900)

**Fonts:** `abcMonumentGrotesk` ×101 · `abcMonumentGroteskMono` ×28

**Loaded faces:** abcMonumentGrotesk 400 normal · abcMonumentGrotesk 500 normal · abcMonumentGrotesk Fallback normal normal · abcMonumentGroteskMono 400 normal · abcMonumentGroteskMono Fallback normal normal · swiper-icons 400 normal

**Font sizes:** `20px` ×45 · `14px` ×28 · `22px` ×21 · `40px` ×19 · `16px` ×16

**Weights:** `400` ×66 · `500` ×63

**Size / line height:** `20px / 24px` ×45 · `14px / 21px` ×28 · `22px / 28.6px` ×21 · `40px / 48px` ×19 · `16px / 22.4px` ×16

**Letter spacing:** `normal` ×82 · `1.12px` ×28 · `-0.8px` ×19

**Text colours:** `rgb(255, 255, 255)` ×51 · `rgb(0, 0, 0)` ×46 · `rgba(255, 255, 255, 0.5)` ×24 · `rgba(0, 0, 0, 0.5)` ×8

**Backgrounds:** `rgb(247, 247, 245)` ×600 · `rgb(0, 0, 0)` ×409 · `rgb(255, 255, 255)` ×280 · `rgba(255, 255, 255, 0.1)` ×1

**Borders:** `1px solid rgba(255, 255, 255, 0.15)` ×9

**Radii:** `9999px` ×8 · `16px` ×6

**Gradients:** `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))` ×2

**Transitions:** `opacity 0.25s cubic-bezier(0.4` ×18 · `opacity 0.15s cubic-bezier(0.4` ×12 · `color, background-color, border-color, text-decoration-color 0.2s cubic-bezier(0.4` ×7 · `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×3 · `opacity 0.2s cubic-bezier(0.4` ×1 · `color, background-color, border-color, text-decoration-color 0.25s cubic-bezier(0.4` ×1

**:root variables (3):** `--gutter: 24px` · `--columnGap: 10px` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at 0px, 69px tall, position fixed · original-1440-section-01.png
2. `section` at -450px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “Mobilizing Space” · original-1440-section-02.png
3. `div` at 450px, 354px tall · original-1440-section-03.png
4. `section` at 804px, 867px tall — “Our Vehicles” · original-1440-section-04.png
5. `section` at 1671px, 1102px tall — “Our Missions”
6. `section` at 3013px, 183px tall — “OUR PARTNERS”
7. `section` at 3196px, 908px tall — “Careers”
8. `footer` at 4104px, 736px tall — “Vehicles”

### Media slots

- section 2: video loop, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 4: canvas (WebGL/2D), 437×547 (aspect 0.80), fit auto
- section 4: canvas (WebGL/2D), 437×547 (aspect 0.80), fit auto
- section 4: image, 373×373 (aspect 1.00), fit contain
- section 4: canvas (WebGL/2D), 437×547 (aspect 0.80), fit auto
- section 4: canvas (WebGL/2D), 437×547 (aspect 0.80), fit auto
- section 4: image, 373×344 (aspect 1.08), fit contain
- section 4: canvas (WebGL/2D), 437×547 (aspect 0.80), fit auto
- section 4: canvas (WebGL/2D), 437×547 (aspect 0.80), fit auto
- section 4: image, 373×373 (aspect 1.00), fit contain
- section 5: image, 1776×862 (aspect 2.06), fit cover, **fills the window height**
- section 7: image, 672×672 (aspect 1.00), fit cover
- section 7: image, 672×672 (aspect 1.00), fit cover

### Motion

**Libraries and media seen:** 6 canvas element(s) (WebGL/2D art) · 3 video element(s)

**While scrolling** (sampled every half screen):

- section 6: reveal on entering view — translateX 2919→2890px, at scroll 0–0px · e.g. article.flex-shrink-0.w-fit
- section 6: reveal on entering view — translateX -334→-363px, at scroll 0–0px · 14 elements · e.g. article.flex-shrink-0.w-fit; article.flex-shrink-0.w-fit; article.flex-shrink-0.w-fit
- section 6: reveal on entering view — translateX -335→-364px, at scroll 0–0px · e.g. article.flex-shrink-0.w-fit

**On hover:**

- a “HELIOS”: opacity: 0.5 → 1 · transition `opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)`
- a “Helios The Distance Vehicle. Transport m”: inner opacity: 0 → 0.596345 · transition `all`
- a “Helios”: opacity: 1 → 0.7 · transition `opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- a “Mira”: opacity: 1 → 0.7 · transition `opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- a “LEGAL”: color: rgba(0, 0, 0, 0.5) → rgba(0, 0, 0, 0.7) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`

**:hover rules in the CSS (first 20):**

- `.group:hover .wipe-hover-group, .wipe-hover:hover { --mask-position-hover: 100%; }`
- `.moving-gradient-btn-debug:hover::before { transform: translateX(100%); }`
- `.gradient-cta:hover::before { opacity: 0.8; scale: 1; }`
- `.gradient-cta:hover::after { opacity: 0.8; scale: 1; }`
- `.gradient-cta-small:hover::before { opacity: 0.8; }`
- `.gradient-cta-small:hover::after { opacity: 0.8; }`
- `.hover-line-sweep:hover { color: rgba(0, 0, 0, 0.7); }`
- `.hover-line-sweep:hover::after { transform: scaleX(0); }`
- `.hover-line-sweep:hover::before { transform: scaleX(1); }`
- `.hover\:bg-black:hover { --tw-bg-opacity: 1; background-color: rgb(0 0 0/var(--tw-bg-opacity)); }`
- `.hover\:bg-gray-100:hover { --tw-bg-opacity: 1; background-color: rgb(243 244 246/var(--tw-bg-opacity)); }`
- `.hover\:text-black\/70:hover { color: rgba(0, 0, 0, 0.7); }`
- `.hover\:text-white:hover { --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity)); }`
- `.hover\:opacity-100:hover { opacity: 1; }`
- `.hover\:opacity-50:hover { opacity: 0.5; }`
- `.hover\:opacity-70:hover { opacity: 0.7; }`
- `.group:hover .group-hover\:scale-\[1\] { --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX`
- `.group:hover .group-hover\:text-black { --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity)); }`
- `.group:hover .group-hover\:text-black\/50 { color: rgba(0, 0, 0, 0.5); }`
- `.group:hover .group-hover\:opacity-70 { opacity: 0.7; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/helios` HELIOS · `/mira` MIRA · `/rideshare` RIDESHARE · `/mojave` MOJAVE · `/careers` CAREERS · `/approach` APPROACH · `/about` About · `/updates` Updates · `/contact` Contact · `/legal` LEGAL · `/privacy` PRIVACY · `/supplier` SUPPLIER
