# Design capture: https://halodental.com/pricing

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Get Started | Halo Dental Technologies (page 2272px tall, window 390×844)

**Fonts:** `Nuckle` ×39

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `14.5714px` ×12 · `20.8162px` ×12 · `14px` ×6 · `16.653px` ×4 · `12.4897px` ×3 · `49.959px` ×2

**Weights:** `400` ×36 · `700` ×3

**Size / line height:** `20.8162px / 22.8979px` ×12 · `14px / 14px` ×6 · `14.5714px / 21.8571px` ×6 · `14.5714px / 17.4856px` ×6 · `16.653px / 19.9836px` ×4 · `12.4897px / 18.7346px` ×3 · `49.959px / 49.959px` ×2

**Letter spacing:** `normal` ×39

**Text colours:** `rgb(255, 255, 255)` ×26 · `rgb(0, 0, 0)` ×13

**Backgrounds:** `rgb(0, 0, 0)` ×428 · `rgb(234, 225, 218)` ×200 · `rgb(245, 241, 238)` ×200 · `rgb(255, 94, 43)` ×8 · `rgb(255, 255, 255)` ×7 · `rgb(36, 31, 31)` ×3 · `rgba(255, 255, 255, 0.1)` ×3 · `rgb(232, 228, 225)` ×2

**Borders:** `1px solid rgb(45, 79, 255)` ×12 · `1px solid rgb(255, 255, 255)` ×1

**Radii:** `50%` ×12 · `4px` ×11

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1 · `linear-gradient(0deg, rgb(234, 225, 218), rgba(235, 226, 219, 0))` ×1

**Transitions:** `opacity 0.4s cubic-bezier(0.32` ×13 · `background-size 0.4s cubic-bezier(0.32` ×9 · `opacity 0.6s cubic-bezier(0.66` ×7 · `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×6 · `transform, opacity 0.35s cubic-bezier(0.66` ×6 · `transform 0.2s cubic-bezier(0.66` ×6 · `transform 0.25s cubic-bezier(0.66` ×6 · `opacity 0.35s cubic-bezier(0.32` ×5

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -78px, 71px tall, position fixed · original-pricing-390-section-01.png
2. `div` at 0px, 1469px tall — “Join the waitlist” · original-pricing-390-section-02.png
3. `footer` at 1469px, 803px tall — “Company” · original-pricing-390-section-03.png

### Media slots

- section 2: image, 1747×983 (aspect 1.78), fit auto
- section 2: image, 177×177 (aspect 1.00), fit auto
- section 2: image, 178×178 (aspect 1.00), fit auto
- section 2: image, 178×178 (aspect 1.00), fit auto

### Motion

**Libraries and media seen:** Lenis smooth scroll · Swiper (carousel) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 5 half-screens · 3 elements · e.g. div.common-loader.fixed; div.common-transition.fixed; div.common-menu-mobile.l-box
- section 1: fixed, at scroll pinned for 5 half-screens · e.g. header.common-header.top-0 “Reserve Reserve”
- section 2: scrubbed with the scroll — opacity 0.08→0.14, scale 1.92→1.85, at scroll 406–1428px · 3 elements · e.g. div.circle.w-full; div.circle.w-full; div.circle.w-full
- section 2: scrubbed with the scroll — opacity 0.29→0.39, scale 1.68→1.58, at scroll 406–1428px · 3 elements · e.g. div.circle.w-full; div.circle.w-full; div.circle.w-full
- section 2: scrubbed with the scroll — opacity 0.59→0.71, scale 1.35→1.22, at scroll 406–1428px · 3 elements · e.g. div.circle.w-full; div.circle.w-full; div.circle.w-full
- section 2: scrubbed with the scroll — opacity 0.96→0.01, scale 0.95→1.99, at scroll 406–1428px · 3 elements · e.g. div.circle.w-full; div.circle.w-full; div.circle.w-full
- section 3: reveal on entering view — clip-path changes, at scroll 1250–1421px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 1250–1250px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 1250–1421px · e.g. div.common-footer__illu.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `pulse` on div.circle.w-full: 4000ms, loops forever (transform, opacity)
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

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve · `/fr/tarifs` fr · `/media-room` Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy

## 1440px — Get Started | Halo Dental Technologies (page 4104px tall, window 1440×900)

**Fonts:** `Nuckle` ×53

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `16px` ×20 · `15.984px` ×16 · `23.976px` ×12 · `12px` ×3 · `99.9px` ×2

**Weights:** `400` ×50 · `700` ×3

**Size / line height:** `16px / 13.6px` ×12 · `23.976px / 26.3736px` ×12 · `15.984px / 19.1808px` ×10 · `16px / 16px` ×8 · `15.984px / 23.976px` ×6 · `12px / 18px` ×3 · `99.9px / 94.905px` ×2

**Letter spacing:** `normal` ×53

**Text colours:** `rgb(255, 255, 255)` ×38 · `rgb(0, 0, 0)` ×13 · `rgb(255, 94, 43)` ×2

**Backgrounds:** `rgb(0, 0, 0)` ×515 · `rgb(234, 225, 218)` ×200 · `rgb(245, 241, 238)` ×200 · `rgb(255, 255, 255)` ×11 · `rgb(255, 94, 43)` ×7 · `rgba(255, 255, 255, 0.1)` ×6 · `rgb(36, 31, 31)` ×3

**Borders:** `1px solid rgb(45, 79, 255)` ×12 · `1px solid rgb(255, 255, 255)` ×1

**Radii:** `50%` ×12 · `4px` ×11

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1 · `linear-gradient(90deg, rgb(234, 225, 218), rgba(235, 226, 219, 0) 50%)` ×1

**Transitions:** `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×20 · `transform, opacity 0.35s cubic-bezier(0.66` ×20 · `opacity 0.4s cubic-bezier(0.32` ×15 · `opacity, transform 0.3s linear` ×12 · `background-size 0.4s cubic-bezier(0.32` ×9 · `opacity 0.35s cubic-bezier(0.32` ×5 · `transform 0.4s cubic-bezier(0.32` ×4 · `opacity, transform 0.45s linear` ×4

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -88px, 80px tall, position fixed · original-pricing-1440-section-01.png
2. `section` at 0px, 547px tall — “Join the waitlist” · original-pricing-1440-section-02.png
3. `div` at 667px, 270px tall — “Seamless integration” · original-pricing-1440-section-03.png
4. `footer` at 3606px, 497px tall — “Company” · original-pricing-1440-section-04.png

### Media slots

- section -: image, 3840×2160 (aspect 1.78), fit auto
- section -: image, 180×180 (aspect 1.00), fit auto
- section -: image, 180×180 (aspect 1.00), fit auto
- section -: image, 180×180 (aspect 1.00), fit auto

### Motion

**Libraries and media seen:** Lenis smooth scroll · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 9 half-screens · 2 elements · e.g. div.common-loader.fixed; div.common-transition.fixed
- section -: pinned (sticky), at scroll pinned for 3 half-screens · e.g. div.b-integration__bg.sticky
- section -: scrubbed with the scroll — translateY -493→-953px, translateX -1515→0px, at scroll 882–2680px · e.g. picture.b-integration__imgWrap.block
- section -: reveal on entering view — opacity 0.00→0.00, at scroll 882–1333px · 6 elements · e.g. li.b-integration__imgItem.absolute; li.b-integration__imgItem.absolute; li.b-integration__imgItem.absolute
- section -: scrubbed with the scroll — opacity 0.83→0.10, scale 1.08→1.89, at scroll 435–3204px · 3 elements · e.g. div.circle.w-full; div.circle.w-full; div.circle.w-full
- section -: scrubbed with the scroll — opacity 0.03→0.32, scale 1.96→1.64, at scroll 435–3204px · 3 elements · e.g. div.circle.w-full; div.circle.w-full; div.circle.w-full
- section -: scrubbed with the scroll — opacity 0.21→0.63, scale 1.77→1.30, at scroll 435–3204px · 3 elements · e.g. div.circle.w-full; div.circle.w-full; div.circle.w-full
- section -: scrubbed with the scroll — opacity 0.49→0.00, scale 1.47→2.00, at scroll 435–3204px · 3 elements · e.g. div.circle.w-full; div.circle.w-full; div.circle.w-full
- section 1: fixed, at scroll pinned for 9 half-screens · e.g. header.common-header.top-0 “Product Product Get Started Get Started ”
- section 4: reveal on entering view — clip-path changes, at scroll 3201–3204px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 3133–3201px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 60→0px, at scroll 3133–3204px · e.g. div.common-footer__illu.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `pulse` on div.circle.w-full: 4000ms, loops forever (transform, opacity)
- CSSAnimation `waveAnimation-0ff8947e` on path: 10000ms, loops forever (transform, opacity)

**On hover:**

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

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve now · `/fr/tarifs` Fr · `/media-room` Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy
