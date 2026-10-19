# Design capture: https://halodental.com/checkout

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Reserve a Halo | Halo Dental Technologies (page 844px tall, window 390×844)

**Fonts:** `Nuckle` ×10

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `12.4897px` ×4 · `16.653px` ×3 · `39.5509px` ×1 · `14.5714px` ×1 · `14px` ×1

**Weights:** `400` ×9 · `700` ×1

**Size / line height:** `12.4897px / 18.7346px` ×4 · `16.653px / 24.9795px` ×3 · `39.5509px / 43.506px` ×1 · `14.5714px / 21.8571px` ×1 · `14px / 14px` ×1

**Letter spacing:** `normal` ×10

**Text colours:** `rgb(255, 255, 255)` ×10

**Backgrounds:** `rgb(0, 0, 0)` ×220 · `rgb(36, 31, 31)` ×17 · `rgb(65, 58, 58)` ×15

**Radii:** `8px` ×3 · `4px` ×2

**Gradients:** `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `opacity 0.3s cubic-bezier(0.32` ×7 · `opacity 0.45s cubic-bezier(0.32` ×6 · `opacity 0.6s cubic-bezier(0.66` ×1 · `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×1 · `transform, opacity 0.35s cubic-bezier(0.66` ×1

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at 0px, 116px tall, position absolute · original-checkout-390-section-01.png
2. `div` at 177px, 584px tall — **sized by the window: 69% of the window height** (413px in a 633px window) — “Who are you reserving for?” · original-checkout-390-section-02.png

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art) · CSS scroll-driven animations (animation-timeline)

**While scrolling:** nothing changed.

**:hover rules in the CSS (first 20):**

- `.form input:hover, .form select:hover, .form textarea:hover { border-color: rgb(0, 0, 0); }`
- `.form.-white input:hover, .form.-white select:hover, .form.-white textarea:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); }`
- `.link.-underline:hover { background-position: 0px 100%; background-size: 100% 1px; }`
- `.btn.block:not(.-active):hover, .btn.cta:not(.-active):hover, .btn.ctaIcon:not(.-active):hover { transition-delay: 0.08s; }`
- `.btn.block:not(.-active):hover .icon::after, .btn.block:not(.-active):hover::after, .btn.cta:not(.-active):hover .icon::after, .btn.cta:not(.-active):hover::after, .btn.ctaIcon:not(.-active):hover .icon::after, .btn.ctaI`
- `.btn.block:not(.-active):hover .btn__text, .btn.cta:not(.-active):hover .btn__text, .btn.ctaIcon:not(.-active):hover .btn__text { opacity: 0; transform: translate3d(0px, -50%, 0px); transition-delay: 0.08s; }`
- `.btn.block:not(.-active):hover .btn__hover, .btn.cta:not(.-active):hover .btn__hover, .btn.ctaIcon:not(.-active):hover .btn__hover { opacity: 1; transform: translateZ(0px); transition-delay: 0.15s; }`
- `.btn.cta.primary:hover, .btn.ctaIcon.primary:hover { --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity,1)); }`
- `.btn.cta.primary.light:hover, .btn.ctaIcon.primary.light:hover { --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity,1)); }`
- `.btn.cta.primary.white:hover, .btn.ctaIcon.primary.white:hover { --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity,1)); }`
- `.btn.cta.primary.-dark-bg:hover, .btn.ctaIcon.primary.-dark-bg:hover { --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity,1)); }`
- `.btn.cta.secondary:hover, .btn.ctaIcon.secondary:hover { --tw-border-opacity: 1; border-color: rgb(255 94 43/var(--tw-border-opacity,1)); }`
- `.btn.cta.secondary.light:hover, .btn.ctaIcon.secondary.light:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity,1)); }`
- `.btn.cta.secondary.-dark-bg:hover, .btn.ctaIcon.secondary.-dark-bg:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity,1`
- `.btn.ctaIcon.secondary:hover { --tw-border-opacity: 1; border-color: rgb(0 0 0/var(--tw-border-opacity,1)); --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity,1)); }`
- `.btn.block:not(.-active):hover .btn__text { transform: translate3d(0px, -100%, 0px); }`
- `.btn.block:not(.-active):hover .btn__hover { transform: translateZ(0px); transition-delay: 0.15s; }`
- `.checkout-header__nav__link[data-v-f9a834e2]:focus-visible, .checkout-header__nav__link[data-v-f9a834e2]:hover { opacity: 1; }`
- `.ui-form-fields-radio label:hover .ui-form-fields-radio__label[data-v-fe81349b]::before { box-shadow: transparent 0px 0px 0px 9px inset; opacity: 1; }`
- `.ui-form-fields-radio.-block .ui-form-fields-radio__label[data-v-fe81349b]:hover::after { opacity: 0.15; transition-delay: 0.05s; }`

### The site's own links

`/` Homepage · `/checkout` Information · `/checkout/quantity` Quantity · `/checkout/contact` Contact · `/checkout/reservation` Confirmation

## 1440px — Reserve a Halo | Halo Dental Technologies (page 900px tall, window 1440×900)

**Fonts:** `Nuckle` ×10

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `12px` ×4 · `15.984px` ×4 · `63.936px` ×1 · `16px` ×1

**Weights:** `400` ×9 · `700` ×1

**Size / line height:** `12px / 18px` ×4 · `15.984px / 23.976px` ×4 · `63.936px / 63.936px` ×1 · `16px / 16px` ×1

**Letter spacing:** `normal` ×10

**Text colours:** `rgb(255, 255, 255)` ×10

**Backgrounds:** `rgb(0, 0, 0)` ×200 · `rgb(36, 31, 31)` ×16 · `rgb(65, 58, 58)` ×8

**Radii:** `8px` ×3 · `4px` ×2

**Gradients:** `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `opacity 0.3s cubic-bezier(0.32` ×7 · `opacity 0.45s cubic-bezier(0.32` ×6 · `opacity 0.6s cubic-bezier(0.66` ×1 · `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×1 · `transform, opacity 0.35s cubic-bezier(0.66` ×1

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at 0px, 82px tall, position absolute · original-checkout-1440-section-01.png
2. `h1` at 127px, 160px tall · original-checkout-1440-section-02.png
3. `p` at 294px, 72px tall · original-checkout-1440-section-03.png
4. `div` at 406px, 222px tall · original-checkout-1440-section-04.png
5. `div` at 780px, 80px tall · original-checkout-1440-section-05.png
6. `div` at 0px, 900px tall · original-checkout-1440-section-06.png

### Media slots

- section 6: canvas (WebGL/2D), 440×900 (aspect 0.49), fit auto, **fills the window height**

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art) · CSS scroll-driven animations (animation-timeline)

**While scrolling:** nothing changed.

**On hover:**

- a “Quantity”: opacity: 0.6 → 1 · transition `opacity 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`

**:hover rules in the CSS (first 20):**

- `.form input:hover, .form select:hover, .form textarea:hover { border-color: rgb(0, 0, 0); }`
- `.form.-white input:hover, .form.-white select:hover, .form.-white textarea:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); }`
- `.link.-underline:hover { background-position: 0px 100%; background-size: 100% 1px; }`
- `.btn.block:not(.-active):hover, .btn.cta:not(.-active):hover, .btn.ctaIcon:not(.-active):hover { transition-delay: 0.08s; }`
- `.btn.block:not(.-active):hover .icon::after, .btn.block:not(.-active):hover::after, .btn.cta:not(.-active):hover .icon::after, .btn.cta:not(.-active):hover::after, .btn.ctaIcon:not(.-active):hover .icon::after, .btn.ctaI`
- `.btn.block:not(.-active):hover .btn__text, .btn.cta:not(.-active):hover .btn__text, .btn.ctaIcon:not(.-active):hover .btn__text { opacity: 0; transform: translate3d(0px, -50%, 0px); transition-delay: 0.08s; }`
- `.btn.block:not(.-active):hover .btn__hover, .btn.cta:not(.-active):hover .btn__hover, .btn.ctaIcon:not(.-active):hover .btn__hover { opacity: 1; transform: translateZ(0px); transition-delay: 0.15s; }`
- `.btn.cta.primary:hover, .btn.ctaIcon.primary:hover { --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity,1)); }`
- `.btn.cta.primary.light:hover, .btn.ctaIcon.primary.light:hover { --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity,1)); }`
- `.btn.cta.primary.white:hover, .btn.ctaIcon.primary.white:hover { --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity,1)); }`
- `.btn.cta.primary.-dark-bg:hover, .btn.ctaIcon.primary.-dark-bg:hover { --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity,1)); }`
- `.btn.cta.secondary:hover, .btn.ctaIcon.secondary:hover { --tw-border-opacity: 1; border-color: rgb(255 94 43/var(--tw-border-opacity,1)); }`
- `.btn.cta.secondary.light:hover, .btn.ctaIcon.secondary.light:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity,1)); }`
- `.btn.cta.secondary.-dark-bg:hover, .btn.ctaIcon.secondary.-dark-bg:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); --tw-text-opacity: 1; color: rgb(0 0 0/var(--tw-text-opacity,1`
- `.btn.ctaIcon.secondary:hover { --tw-border-opacity: 1; border-color: rgb(0 0 0/var(--tw-border-opacity,1)); --tw-text-opacity: 1; color: rgb(255 255 255/var(--tw-text-opacity,1)); }`
- `.btn.block:not(.-active):hover .btn__text { transform: translate3d(0px, -100%, 0px); }`
- `.btn.block:not(.-active):hover .btn__hover { transform: translateZ(0px); transition-delay: 0.15s; }`
- `.checkout-header__nav__link[data-v-f9a834e2]:focus-visible, .checkout-header__nav__link[data-v-f9a834e2]:hover { opacity: 1; }`
- `.ui-form-fields-radio label:hover .ui-form-fields-radio__label[data-v-fe81349b]::before { box-shadow: transparent 0px 0px 0px 9px inset; opacity: 1; }`
- `.ui-form-fields-radio.-block .ui-form-fields-radio__label[data-v-fe81349b]:hover::after { opacity: 0.15; transition-delay: 0.05s; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Homepage · `/checkout` Information · `/checkout/quantity` Quantity · `/checkout/contact` Contact · `/checkout/reservation` Confirmation
