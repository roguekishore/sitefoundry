# Design capture: https://halodental.com/faq

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — We are here to help you | Halo Dental Technologies (page 2284px tall, window 390×844)

**Fonts:** `Nuckle` ×41

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `14px` ×14 · `20.8162px` ×12 · `14.5714px` ×6 · `16.653px` ×4 · `12.4897px` ×3 · `49.959px` ×1 · `39.5509px` ×1

**Weights:** `400` ×41

**Size / line height:** `14px / 14px` ×13 · `20.8162px / 22.8979px` ×12 · `14.5714px / 17.4856px` ×6 · `16.653px / 19.9836px` ×4 · `12.4897px / 18.7346px` ×3 · `49.959px / 49.959px` ×1 · `14px / 11.9px` ×1 · `39.5509px / 43.506px` ×1

**Letter spacing:** `normal` ×41

**Text colours:** `rgb(0, 0, 0)` ×23 · `rgb(255, 255, 255)` ×18

**Backgrounds:** `rgb(0, 0, 0)` ×324 · `rgb(245, 241, 238)` ×200 · `rgb(255, 255, 255)` ×70 · `rgb(255, 94, 43)` ×5 · `rgba(255, 255, 255, 0.1)` ×3

**Borders:** `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×21

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×20 · `transform, opacity 0.35s cubic-bezier(0.66` ×20 · `transform 0.4s cubic-bezier(0.32` ×17 · `opacity 0.4s cubic-bezier(0.32` ×13 · `transform 0.5s cubic-bezier(0.32` ×9 · `opacity 0.6s cubic-bezier(0.66` ×9 · `background-size 0.4s cubic-bezier(0.32` ×9 · `opacity 0.6s cubic-bezier(0.32` ×8

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -78px, 71px tall, position fixed · original-faq-390-section-01.png
2. `div` at 0px, 1481px tall — “We are here to help you.” · original-faq-390-section-02.png
3. `footer` at 1481px, 803px tall — “Company” · original-faq-390-section-03.png

### Motion

**Libraries and media seen:** Lenis smooth scroll · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 5 half-screens · 3 elements · e.g. div.common-loader.fixed; div.common-transition.fixed; div.common-menu-mobile.l-box
- section 1: fixed, at scroll pinned for 5 half-screens · e.g. header.common-header.top-0 “Reserve Reserve”
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 827–1249px · 2 elements · e.g. p.h5.mb-20 “Can’t find the answer you’re looking for”; div.fade-in “Contact us Contact us”
- section 3: reveal on entering view — clip-path changes, at scroll 1249–1433px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 1249–1249px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 1249–1433px · e.g. div.common-footer__illu.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `waveAnimation-0ff8947e` on path: 10000ms, loops forever (transform, opacity)

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
- `.common-menu__link.btn[data-v-42619933]:hover::before, .common-menu__link[data-v-42619933]:hover::before { transform: scale(1) translateZ(0px); }`
- `.ft-accordion-item__trigger:focus-visible .ctaIcon::after, .ft-accordion-item__trigger:hover .ctaIcon::after { opacity: 1; }`
- `.common-alerts-banner .close:hover svg[data-v-fd2c345a] { transform: rotate(180deg) translateZ(0px); }`

### The site's own links

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve · `/fr/faq` fr · `/media-room` Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy

## 1440px — We are here to help you | Halo Dental Technologies (page 2093px tall, window 1440×900)

**Fonts:** `Nuckle` ×55

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `16px` ×28 · `23.976px` ×11 · `15.984px` ×10 · `12px` ×3 · `99.9px` ×1 · `27.972px` ×1 · `63.936px` ×1

**Weights:** `400` ×55

**Size / line height:** `16px / 16px` ×15 · `16px / 13.6px` ×13 · `23.976px / 26.3736px` ×11 · `15.984px / 19.1808px` ×10 · `12px / 18px` ×3 · `99.9px / 94.905px` ×1 · `27.972px / 30.7692px` ×1 · `63.936px / 63.936px` ×1

**Letter spacing:** `normal` ×55

**Text colours:** `rgb(255, 255, 255)` ×32 · `rgb(0, 0, 0)` ×21 · `rgb(255, 94, 43)` ×2

**Backgrounds:** `rgb(0, 0, 0)` ×515 · `rgb(245, 241, 238)` ×200 · `rgb(255, 255, 255)` ×146 · `rgba(255, 255, 255, 0.1)` ×6 · `rgb(255, 94, 43)` ×5

**Borders:** `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×23

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×36 · `transform, opacity 0.35s cubic-bezier(0.66` ×36 · `transform 0.4s cubic-bezier(0.32` ×28 · `opacity 0.4s cubic-bezier(0.32` ×15 · `opacity, transform 0.3s linear` ×12 · `transform 0.5s cubic-bezier(0.32` ×9 · `opacity 0.6s cubic-bezier(0.66` ×9 · `background-size 0.4s cubic-bezier(0.32` ×9

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -88px, 80px tall, position fixed · original-faq-1440-section-01.png
2. `div` at 0px, 1596px tall — “We are here to help you.” · original-faq-1440-section-02.png
3. `footer` at 1596px, 497px tall — “Company” · original-faq-1440-section-03.png

### Motion

**Libraries and media seen:** Lenis smooth scroll · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 4 half-screens · 2 elements · e.g. div.common-loader.fixed; div.common-transition.fixed
- section 1: fixed, at scroll pinned for 4 half-screens · e.g. header.common-header.top-0 “Product Product Get Started Get Started ”
- section 3: reveal on entering view — clip-path changes, at scroll 1181–1193px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 1181–1181px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 1181–1193px · e.g. div.common-footer__illu.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `waveAnimation-0ff8947e` on path: 10000ms, loops forever (transform, opacity)

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
- `.common-menu__link.btn[data-v-42619933]:hover::before, .common-menu__link[data-v-42619933]:hover::before { transform: scale(1) translateZ(0px); }`
- `.ft-accordion-item__trigger:focus-visible .ctaIcon::after, .ft-accordion-item__trigger:hover .ctaIcon::after { opacity: 1; }`
- `.common-alerts-banner .close:hover svg[data-v-fd2c345a] { transform: rotate(180deg) translateZ(0px); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve now · `/fr/faq` Fr · `/media-room` Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy
