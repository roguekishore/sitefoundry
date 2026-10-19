# Design capture: https://halodental.com/media-room

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Media Room | Halo Dental Technologies (page 2662px tall, window 390×844)

**Fonts:** `Nuckle` ×38

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `14px` ×15 · `20.8162px` ×6 · `14.5714px` ×6 · `12.4897px` ×5 · `16.653px` ×4 · `49.959px` ×1 · `39.5509px` ×1

**Weights:** `400` ×38

**Size / line height:** `14px / 14px` ×14 · `20.8162px / 22.8979px` ×6 · `14.5714px / 17.4856px` ×6 · `12.4897px / 18.7346px` ×5 · `16.653px / 19.9836px` ×4 · `49.959px / 49.959px` ×1 · `14px / 11.9px` ×1 · `39.5509px / 43.506px` ×1

**Letter spacing:** `normal` ×38

**Text colours:** `rgb(0, 0, 0)` ×20 · `rgb(255, 255, 255)` ×18

**Backgrounds:** `rgb(0, 0, 0)` ×304 · `rgb(245, 241, 238)` ×200 · `rgb(255, 255, 255)` ×122 · `rgb(255, 94, 43)` ×36 · `rgba(255, 255, 255, 0.1)` ×3 · `rgba(0, 0, 0, 0.1)` ×2

**Borders:** `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×12 · `8px` ×6 · `2px` ×2

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `opacity 0.4s cubic-bezier(0.32` ×13 · `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×11 · `transform, opacity 0.35s cubic-bezier(0.66` ×11 · `transform 0.4s cubic-bezier(0.32` ×11 · `background-size 0.4s cubic-bezier(0.32` ×9 · `transform 0.2s cubic-bezier(0.66` ×6 · `transform 0.25s cubic-bezier(0.66` ×6 · `opacity 0.35s cubic-bezier(0.32` ×5

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -78px, 71px tall, position fixed · original-media-room-390-section-01.png
2. `div` at 0px, 1859px tall — “Media Room” · original-media-room-390-section-02.png
3. `footer` at 1859px, 803px tall — “Company” · original-media-room-390-section-03.png

### Media slots

- section 2: image, 348×196 (aspect 1.78), fit cover
- section 2: image, 348×227 (aspect 1.54), fit cover
- section 2: image, 348×196 (aspect 1.78), fit cover
- section 2: image, 348×196 (aspect 1.78), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 6 half-screens · 3 elements · e.g. div.common-loader.fixed; div.common-transition.fixed; div.common-menu-mobile.l-box
- section 1: fixed, at scroll pinned for 6 half-screens · e.g. header.common-header.top-0 “Reserve Reserve”
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 1250–1671px · 2 elements · e.g. p.h5.mb-20 “Can’t find what you’re looking for?”; div.fade-in “Contact us Contact us”
- section 2: reveal on entering view — opacity 0.00→1.00, scale 1.10→1.00, at scroll 406–827px · 2 elements · e.g. picture.ui-fragment-image.isLoaded; picture.ui-fragment-image.isLoaded
- section 2: scrubbed with the scroll — opacity 0.00→1.00, scale 1.10→1.00, at scroll 406–1250px · 2 elements · e.g. picture.ui-fragment-image.isLoaded; picture.ui-fragment-image.isLoaded
- section 3: reveal on entering view — clip-path changes, at scroll 1671–1813px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 1671–1671px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 1671–1813px · e.g. div.common-footer__illu.absolute

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
- `.common-alerts-banner .close:hover svg[data-v-fd2c345a] { transform: rotate(180deg) translateZ(0px); }`
- `.common-alerts-banner .link[data-v-fd2c345a]:hover { --tw-bg-opacity: 1; background-color: rgb(0 0 0/var(--tw-bg-opacity,1)); }`

### The site's own links

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve · `/fr/media-room` fr · `/media-room` Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy

## 1440px — Media Room | Halo Dental Technologies (page 2966px tall, window 1440×900)

**Fonts:** `Nuckle` ×52

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `16px` ×29 · `15.984px` ×10 · `23.976px` ×5 · `12px` ×5 · `99.9px` ×1 · `27.972px` ×1 · `63.936px` ×1

**Weights:** `400` ×52

**Size / line height:** `16px / 16px` ×16 · `16px / 13.6px` ×13 · `15.984px / 19.1808px` ×10 · `23.976px / 26.3736px` ×5 · `12px / 18px` ×5 · `99.9px / 94.905px` ×1 · `27.972px / 30.7692px` ×1 · `63.936px / 63.936px` ×1

**Letter spacing:** `normal` ×52

**Text colours:** `rgb(255, 255, 255)` ×34 · `rgb(0, 0, 0)` ×18

**Backgrounds:** `rgb(0, 0, 0)` ×515 · `rgb(245, 241, 238)` ×200 · `rgb(255, 255, 255)` ×117 · `rgb(255, 94, 43)` ×34 · `rgba(255, 255, 255, 0.1)` ×6 · `rgba(0, 0, 0, 0.1)` ×2

**Borders:** `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×14 · `8px` ×6 · `2px` ×2

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×27 · `transform, opacity 0.35s cubic-bezier(0.66` ×27 · `opacity 0.4s cubic-bezier(0.32` ×15 · `transform 0.4s cubic-bezier(0.32` ×15 · `opacity, transform 0.3s linear` ×12 · `background-size 0.4s cubic-bezier(0.32` ×9 · `opacity 0.35s cubic-bezier(0.32` ×5 · `opacity, transform 0.6s cubic-bezier(0.215` ×4

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -88px, 80px tall, position fixed · original-media-room-1440-section-01.png
2. `section` at 0px, 365px tall — “Media Room” · original-media-room-1440-section-02.png
3. `div` at 485px, 506px tall, position sticky — “Download all you need” · original-media-room-1440-section-03.png
4. `div` at 485px, 1864px tall · original-media-room-1440-section-04.png
5. `footer` at 2469px, 497px tall — “Company” · original-media-room-1440-section-05.png

### Media slots

- section 4: image, 785×441 (aspect 1.78), fit cover
- section 4: image, 785×511 (aspect 1.54), fit cover
- section 4: image, 785×441 (aspect 1.78), fit cover
- section 4: image, 785×441 (aspect 1.78), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 6 half-screens · 2 elements · e.g. div.common-loader.fixed; div.common-transition.fixed
- section 1: fixed, at scroll pinned for 6 half-screens · e.g. header.common-header.top-0 “Product Product Get Started Get Started ”
- section 3: pinned (sticky), at scroll pinned for 2 half-screens · e.g. div.ui-scroll-spy.isShown “Download all you need Logo Halo logokit ”
- section 4: reveal on entering view — opacity 0.00→1.00, scale 1.10→1.00, at scroll 433–884px · 3 elements · e.g. picture.ui-fragment-image.isLoaded; picture.ui-fragment-image.isLoaded; picture.ui-fragment-image.isLoaded
- section 5: reveal on entering view — clip-path changes, at scroll 2056–2066px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 2056–2056px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 2056–2066px · e.g. div.common-footer__illu.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `waveAnimation-0ff8947e` on path: 10000ms, loops forever (transform, opacity)

**On hover:**

- a “Download ZIP Download ZIP (Download in s”: color: rgb(0, 0, 0) → rgb(255, 255, 255); border: rgb(0, 0, 0) → rgb(255, 255, 255); inner color: rgb(0, 0, 0) → rgb(255, 255, 255); inner border: rgb(0, 0, 0) → rgb(255, 255, 255) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), opacity 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), border-color 0.2s cubic-bezi`
- a “(Download in saved files)”: color: rgb(0, 0, 0) → rgb(255, 255, 255); border: rgb(0, 0, 0) → rgb(255, 255, 255); inner color: rgb(0, 0, 0) → rgb(255, 255, 255); inner border: rgb(0, 0, 0) → rgb(255, 255, 255) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), opacity 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), border-color 0.2s cubic-bezi`
- a “Discover the Halo Digital Mirror Discove”: color: rgb(255, 255, 255) → rgb(0, 0, 0); inner color: rgb(255, 255, 255) → rgb(0, 0, 0); inner border: rgb(255, 255, 255) → rgb(0, 0, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), opacity 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), border-color 0.2s cubic-bezi`

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
- `.common-alerts-banner .close:hover svg[data-v-fd2c345a] { transform: rotate(180deg) translateZ(0px); }`
- `.common-alerts-banner .link[data-v-fd2c345a]:hover { --tw-bg-opacity: 1; background-color: rgb(0 0 0/var(--tw-bg-opacity,1)); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve now · `/fr/media-room` Fr · `/media-room` Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy
