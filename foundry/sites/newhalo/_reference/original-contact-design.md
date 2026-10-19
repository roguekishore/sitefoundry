# Design capture: https://halodental.com/contact

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Contact us | Halo Dental Technologies (page 3524px tall, window 390×844)

**Fonts:** `Nuckle` ×42

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `14px` ×9 · `12.4897px` ×9 · `16.653px` ×9 · `14.5714px` ×6 · `20.8162px` ×3 · `49.959px` ×2 · `29.1427px` ×2 · `39.5509px` ×1 · `24.9795px` ×1

**Weights:** `400` ×42

**Size / line height:** `14px / 14px` ×9 · `12.4897px / 18.7346px` ×9 · `14.5714px / 17.4856px` ×6 · `16.653px / 24.9795px` ×5 · `16.653px / 19.9836px` ×4 · `20.8162px / 22.8979px` ×3 · `49.959px / 49.959px` ×2 · `29.1427px / 32.057px` ×2 · `39.5509px / 43.506px` ×1 · `24.9795px / 27.4774px` ×1

**Letter spacing:** `normal` ×42

**Text colours:** `rgb(0, 0, 0)` ×22 · `rgb(255, 255, 255)` ×20

**Backgrounds:** `rgb(0, 0, 0)` ×828 · `rgb(245, 241, 238)` ×207 · `rgb(255, 255, 255)` ×94 · `rgb(255, 94, 43)` ×17 · `rgba(255, 255, 255, 0.1)` ×3 · `rgb(232, 228, 225)` ×3

**Borders:** `1px solid rgba(0, 0, 0, 0.3)` ×6 · `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×15 · `8px` ×3

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `opacity 0.4s cubic-bezier(0.32` ×13 · `opacity 0.6s cubic-bezier(0.66` ×9 · `background-size 0.4s cubic-bezier(0.32` ×9 · `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×6 · `transform, opacity 0.35s cubic-bezier(0.66` ×6 · `transform 0.2s cubic-bezier(0.66` ×6 · `transform 0.25s cubic-bezier(0.66` ×6 · `border-color 0.3s cubic-bezier(0.32` ×6

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -78px, 71px tall, position fixed · original-contact-390-section-01.png
2. `div` at 0px, 2721px tall — “Contact us” · original-contact-390-section-02.png, original-contact-390-section-03.png
3. `footer` at 2721px, 803px tall — “Company” · original-contact-390-section-04.png

### Media slots

- section 2: image, 415×398 (aspect 1.04), fit cover
- section 2: image, 429×928 (aspect 0.46), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · Swiper (carousel) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 8 half-screens · 3 elements · e.g. div.common-loader.fixed; div.common-transition.fixed; div.common-menu-mobile.l-box
- section 1: fixed, at scroll pinned for 8 half-screens · e.g. header.common-header.top-0 “Reserve Reserve”
- section 2: reveal on entering view — translateY 7→18px, at scroll 406–406px · e.g. div.media__wrap.absolute
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 406–827px · 7 elements · e.g. div.ui-forms-fields-container “Full Name”; div.ui-forms-fields-container “Choose an option Sales Product Developer”; div.ui-forms-fields-container “Email”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 1250–1671px · 2 elements · e.g. div.ui-form-contact__more.flex “Find answers to frequently asked questio”; div.swiper-slide__inner.flex “Upcoming events We’ll update you on the ”
- section 2: scrubbed with the scroll — opacity 0.00→1.00, translateY 60→0px, at scroll 1250–2094px · e.g. div.ui-fragment-media.relative
- section 2: scrubbed with the scroll — translateY -42→37px, at scroll 1250–2675px · e.g. div.media__wrap.absolute
- section 3: reveal on entering view — clip-path changes, at scroll 2515–2675px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 2515–2515px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 2515–2675px · e.g. div.common-footer__illu.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `spinner-rotate` on svg: 1280ms, loops forever (transform)
- CSSAnimation `spinner-dash` on circle: 2000ms, loops forever (strokeDasharray, strokeDashoffset)
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
- `.ui-form-fields-select:hover { --tw-border-opacity: 1; border-color: rgb(0 0 0/var(--tw-border-opacity,1)); }`
- `.-white .ui-form-fields-select:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); }`

### The site's own links

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve · `/fr/contact` fr · `/media-room` Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy

## 1440px — Contact us | Halo Dental Technologies (page 3449px tall, window 1440×900)

**Fonts:** `Nuckle` ×56

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `16px` ×23 · `15.984px` ×16 · `12px` ×8 · `23.976px` ×3 · `99.9px` ×2 · `31.968px` ×2 · `63.936px` ×1 · `27.972px` ×1

**Weights:** `400` ×56

**Size / line height:** `16px / 13.6px` ×12 · `16px / 16px` ×11 · `15.984px / 19.1808px` ×10 · `12px / 18px` ×8 · `15.984px / 23.976px` ×6 · `23.976px / 26.3736px` ×3 · `99.9px / 94.905px` ×2 · `31.968px / 35.1648px` ×2 · `63.936px / 63.936px` ×1 · `27.972px / 30.7692px` ×1

**Letter spacing:** `normal` ×56

**Text colours:** `rgb(255, 255, 255)` ×32 · `rgb(0, 0, 0)` ×22 · `rgb(255, 94, 43)` ×2

**Backgrounds:** `rgb(0, 0, 0)` ×915 · `rgb(245, 241, 238)` ×207 · `rgb(255, 255, 255)` ×140 · `rgb(255, 94, 43)` ×17 · `rgba(255, 255, 255, 0.1)` ×6 · `rgb(232, 228, 225)` ×3

**Borders:** `1px solid rgba(0, 0, 0, 0.3)` ×6 · `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×17 · `8px` ×3

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×22 · `transform, opacity 0.35s cubic-bezier(0.66` ×22 · `opacity 0.4s cubic-bezier(0.32` ×15 · `opacity, transform 0.3s linear` ×12 · `opacity 0.6s cubic-bezier(0.66` ×9 · `background-size 0.4s cubic-bezier(0.32` ×9 · `transform 0.4s cubic-bezier(0.32` ×8 · `border-color 0.3s cubic-bezier(0.32` ×6

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -88px, 80px tall, position fixed · original-contact-1440-section-01.png
2. `section` at 0px, 920px tall — “Contact us” · original-contact-1440-section-02.png
3. `section` at 920px, 1083px tall — “Tell us more about your needs” · original-contact-1440-section-03.png
4. `section` at 2003px, 949px tall — “Let’s meet in person” · original-contact-1440-section-04.png
5. `footer` at 2952px, 497px tall — “Company” · original-contact-1440-section-05.png

### Media slots

- section 2: image, 770×748 (aspect 1.03), fit cover
- section 4: image, 1584×1044 (aspect 1.52), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · Swiper (carousel) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 7 half-screens · 2 elements · e.g. div.common-loader.fixed; div.common-transition.fixed
- section 1: fixed, at scroll pinned for 7 half-screens · e.g. header.common-header.top-0 “Product Product Get Started Get Started ”
- section 2: reveal on entering view — translateY 0→34px, at scroll 433–882px · e.g. div.media__wrap.absolute
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 433–882px · 7 elements · e.g. div.ui-forms-fields-container “Full Name”; div.ui-forms-fields-container “Choose an option Sales Product Developer”; div.ui-forms-fields-container “Email”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 882–1333px · e.g. div.ui-form-contact__more.flex “Find answers to frequently asked questio”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 1782–2233px · e.g. div.swiper-slide__inner.flex “Upcoming events We’ll update you on the ”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 60→0px, at scroll 1333–2233px · e.g. div.ui-fragment-media.relative
- section 4: scrubbed with the scroll — translateY -47→24px, at scroll 1333–2549px · e.g. div.media__wrap.absolute
- section 5: reveal on entering view — clip-path changes, at scroll 2536–2549px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 2536–2536px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 2536–2549px · e.g. div.common-footer__illu.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `spinner-rotate` on svg: 1280ms, loops forever (transform)
- CSSAnimation `spinner-dash` on circle: 2000ms, loops forever (strokeDasharray, strokeDashoffset)
- CSSAnimation `waveAnimation-0ff8947e` on path: 10000ms, loops forever (transform, opacity)

**On hover:**

- a “View our FAQ View our FAQ”: color: rgb(0, 0, 0) → rgb(255, 255, 255); border: rgb(0, 0, 0) → rgb(255, 255, 255); inner color: rgb(0, 0, 0) → rgb(255, 255, 255); inner border: rgb(0, 0, 0) → rgb(255, 255, 255) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), opacity 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), border-color 0.2s cubic-bezi`
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
- `.ui-form-fields-select:hover { --tw-border-opacity: 1; border-color: rgb(0 0 0/var(--tw-border-opacity,1)); }`
- `.-white .ui-form-fields-select:hover { --tw-border-opacity: 1; border-color: rgb(255 255 255/var(--tw-border-opacity,1)); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve now · `/fr/contact` Fr · `/media-room` Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy
