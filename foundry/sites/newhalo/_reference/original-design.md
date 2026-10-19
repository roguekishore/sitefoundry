# Design capture: https://halodental.com

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — We all shine | Halo Dental Technologies (page 6125px tall, window 390×844)

**Fonts:** `Nuckle` ×60

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `14.5714px` ×16 · `14px` ×13 · `16.653px` ×10 · `12.4897px` ×9 · `39.5509px` ×4 · `24.9795px` ×4 · `20.8162px` ×3 · `49.959px` ×1

**Weights:** `400` ×60

**Size / line height:** `14px / 14px` ×13 · `14.5714px / 21.8571px` ×10 · `16.653px / 19.9836px` ×10 · `12.4897px / 18.7346px` ×9 · `14.5714px / 17.4856px` ×6 · `39.5509px / 43.506px` ×4 · `24.9795px / 27.4774px` ×4 · `20.8162px / 22.8979px` ×3 · `49.959px / 49.959px` ×1

**Letter spacing:** `normal` ×60

**Text colours:** `rgb(0, 0, 0)` ×40 · `rgb(255, 255, 255)` ×20

**Backgrounds:** `rgb(255, 255, 255)` ×662 · `rgb(0, 0, 0)` ×628 · `rgb(245, 241, 238)` ×600 · `rgb(255, 94, 43)` ×21 · `rgb(232, 228, 225)` ×6 · `rgba(255, 255, 255, 0.1)` ×3 · `rgba(0, 0, 0, 0.1)` ×1

**Borders:** `1px solid rgb(0, 0, 0)` ×2 · `1px solid rgba(0, 0, 0, 0.3)` ×2 · `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×18 · `8px` ×9 · `2px` ×1

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `opacity 0.5s cubic-bezier(0.32` ×19 · `opacity 0.4s cubic-bezier(0.32` ×16 · `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×14 · `transform, opacity 0.35s cubic-bezier(0.66` ×14 · `transform 0.4s cubic-bezier(0.32` ×13 · `opacity 0.6s cubic-bezier(0.66` ×12 · `background-size 0.4s cubic-bezier(0.32` ×9 · `opacity, transform 0.4s linear` ×8

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -78px, 71px tall, position fixed · original-390-section-01.png
2. `section` at 0px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “We All Shine” · original-390-section-02.png
3. `section` at 844px, 1036px tall — “The Digital Mirror” · original-390-section-03.png
4. `section` at 1880px, 1110px tall — “Rebranding dentistry” · original-390-section-04.png
5. `section` at 2990px, 1876px tall — “Latest news” · original-390-section-05.png
6. `section` at 4866px, 456px tall — “Keep connected to our team and progress.” · original-390-section-06.png
7. `footer` at 5322px, 803px tall — “Company” · original-390-section-07.png

### Media slots

- section 2: video autoplay loop, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 3: image, 383×383 (aspect 1.00), fit cover
- section 3: image, 383×383 (aspect 1.00), fit cover
- section 3: image, 383×383 (aspect 1.00), fit cover
- section 4: canvas (WebGL/2D), 348×412 (aspect 0.85), fit auto
- section 4: image, 164×164 (aspect 1.00), fit cover
- section 5: image, 348×193 (aspect 1.81), fit cover
- section 5: image, 348×193 (aspect 1.81), fit cover
- section 5: image, 348×193 (aspect 1.81), fit cover
- section 5: image, 348×193 (aspect 1.81), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art) · 1 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 14 half-screens · 3 elements · e.g. div.common-loader.fixed; div.common-transition.fixed; div.common-menu-mobile.l-box
- section 1: fixed, at scroll pinned for 14 half-screens · e.g. header.common-header.top-0 “Reserve Reserve”
- section 2: scrubbed with the scroll — translateY 1→101px, at scroll 408–1250px · e.g. div.s-home-hero__media__wrap.absolute
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 408–827px · 6 elements · e.g. div.b-textGallery__text.t-wysiwyg “The Halo Digital Mirror is designed to e”; span.grow.shrink “Diffused front and back light”; span.grow.shrink “Active fogging prevention”
- section 3: reveal on entering view — opacity 0.00→1.00, scale 1.15→1.00, at scroll 1250–1250px · 3 elements · e.g. li.scale-fade-in; li.scale-fade-in; li.scale-fade-in
- section 3: scrubbed with the scroll — opacity 0.00→1.00, scale 1.10→1.00, at scroll 827–1673px · e.g. div.swiper-wrapper.||
- section 3: scrubbed with the scroll — translateY -17→17px, at scroll 827–2094px · 3 elements · e.g. div.media__wrap.absolute; div.media__wrap.absolute; div.media__wrap.absolute
- section 4: reveal on entering view — opacity 0.00→1.00, scale 1.10→1.00, at scroll 1673–2094px · e.g. picture.ui-fragment-image.isLoaded
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 1673–2094px · 2 elements · e.g. p.body-2.|| “The dental practice is where smiles get ”; div.mt-20.|| “About us About us”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 2938–2938px · 2 elements · e.g. div.slide-fade-up “View Media Room View Media Room”; footer.b-news__loadMore.absolute “View more View more”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 50→0px, at scroll 2938–2938px · 8 elements · e.g. h3.ui-news__title.h4 “Un miroir dentaire doté d’IA créé au Qué”; div.ui-news__descr.col-span-3 “La jeune pousse fondée en 2021 a mis au ”; h3.ui-news__title.h4 “Halo Dental : Mirror, Intelligent Mirror”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 2515–2938px · 8 elements · e.g. div.ui-news__imgWrap.order-first; div.ui-news__btnWrap.col-span-1; div.ui-news__imgWrap.order-first
- section 5: reveal on entering view — scale 1.15→1.00, at scroll 2515–2938px · 4 elements · e.g. picture.ui-fragment-image.isLoaded; picture.ui-fragment-image.isLoaded; picture.ui-fragment-image.isLoaded
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 4626–5047px · 3 elements · e.g. fieldset.form__group.|| “Infos Email address”; fieldset.form__group.my-20 “Consent By signing up to the newsletter,”; div.fade-in “Keep me posted Keep me posted”
- section 7: reveal on entering view — clip-path changes, at scroll 5047–5272px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 5047–5047px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 5047–5272px · e.g. div.common-footer__illu.absolute

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
- `.common-alerts-banner .close:hover svg[data-v-fd2c345a] { transform: rotate(180deg) translateZ(0px); }`
- `.common-alerts-banner .link[data-v-fd2c345a]:hover { --tw-bg-opacity: 1; background-color: rgb(0 0 0/var(--tw-bg-opacity,1)); }`

### The site's own links

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve · `/fr` fr · `/media-room` View Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy

## 1440px — We all shine | Halo Dental Technologies (page 4758px tall, window 1440×900)

**Fonts:** `Nuckle` ×74

**Loaded faces:** Nuckle 100 normal · Nuckle 400 normal · Nuckle 700 normal · swiper-icons 400 normal

**Font sizes:** `16px` ×27 · `15.984px` ×26 · `12px` ×9 · `63.936px` ×4 · `27.972px` ×4 · `23.976px` ×3 · `99.9px` ×1

**Weights:** `400` ×74

**Size / line height:** `15.984px / 19.1808px` ×16 · `16px / 16px` ×15 · `16px / 13.6px` ×12 · `15.984px / 23.976px` ×10 · `12px / 18px` ×9 · `63.936px / 63.936px` ×4 · `27.972px / 30.7692px` ×4 · `23.976px / 26.3736px` ×3 · `99.9px / 94.905px` ×1

**Letter spacing:** `normal` ×74

**Text colours:** `rgb(0, 0, 0)` ×40 · `rgb(255, 255, 255)` ×34

**Backgrounds:** `rgb(0, 0, 0)` ×715 · `rgb(255, 255, 255)` ×653 · `rgb(245, 241, 238)` ×600 · `rgb(255, 94, 43)` ×23 · `rgba(255, 255, 255, 0.1)` ×6 · `rgb(232, 228, 225)` ×6 · `rgba(0, 0, 0, 0.1)` ×1

**Borders:** `1px solid rgb(0, 0, 0)` ×2 · `1px solid rgba(0, 0, 0, 0.3)` ×2 · `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×20 · `8px` ×9 · `2px` ×1

**Gradients:** `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))` ×9 · `linear-gradient(90deg, rgb(255, 164, 28), rgb(255, 54, 42))` ×1

**Transitions:** `color, opacity, border-color, background-color 0.3s cubic-bezier(0.32` ×30 · `transform, opacity 0.35s cubic-bezier(0.66` ×30 · `opacity 0.5s cubic-bezier(0.32` ×19 · `opacity 0.4s cubic-bezier(0.32` ×18 · `transform 0.4s cubic-bezier(0.32` ×17 · `opacity, transform 0.3s linear` ×12 · `opacity 0.6s cubic-bezier(0.66` ×11 · `background-size 0.4s cubic-bezier(0.32` ×9

**:root variables (34):** `--color-black: #000` · `--color-white: #fff` · `--color-grey-100: #f5f1ee` · `--color-grey-200: #e8e4e1` · `--color-grey-500: #968b88` · `--color-grey-700: #413a3a` · `--color-grey-800: #241f1f` · `--color-grey-900: #0a0a0a` · `--color-orange: #ff5e2b` · `--color-blue: #2d4fff` · `--color-yellow: #ffa41c` · `--color-red: #ff362a` · `--color-red-error: #db2020` · `--color-red-error-lighter: #fc4646` · `--color-primary: #ff5e2b` · `--color-outline: #ff5e2b` · `--rgb-color-black: 0,0,0` · `--rgb-color-white: 255,255,255` · `--rgb-color-grey-100: 245,241,238` · `--rgb-color-grey-200: 232,228,225` · `--rgb-color-grey-500: 150,139,136` · `--rgb-color-grey-700: 65,58,58` · `--rgb-color-grey-800: 36,31,31` · `--rgb-color-grey-900: 10,10,10` · `--rgb-color-orange: 255,94,43` · `--rgb-color-blue: 45,79,255` · `--rgb-color-yellow: 255,164,28` · `--rgb-color-red: 255,54,42` · `--rgb-color-red-error: 219,32,32` · `--rgb-color-red-error-lighter: 252,70,70` · `--rgb-color-primary: 255,94,43` · `--rgb-color-outline: 255,94,43` · `--max-columns: 12` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at -88px, 80px tall, position fixed · original-1440-section-01.png
2. `section` at 0px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “We All Shine” · original-1440-section-02.png
3. `section` at 900px, 910px tall — “The Digital Mirror” · original-1440-section-03.png
4. `section` at 1810px, 760px tall — “Rebranding dentistry” · original-1440-section-04.png
5. `section` at 2570px, 1283px tall — “Latest news” · original-1440-section-05.png
6. `section` at 3853px, 408px tall — “Keep connected to our team and progress.” · original-1440-section-06.png
7. `footer` at 4261px, 497px tall — “Company” · original-1440-section-07.png

### Media slots

- section 2: video autoplay loop, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 3: image, 737×737 (aspect 1.00), fit cover
- section 3: image, 737×737 (aspect 1.00), fit cover
- section 3: image, 737×737 (aspect 1.00), fit cover
- section 4: canvas (WebGL/2D), 440×520 (aspect 0.85), fit auto
- section 4: image, 210×210 (aspect 1.00), fit cover
- section 5: image, 325×180 (aspect 1.81), fit cover
- section 5: image, 325×180 (aspect 1.81), fit cover
- section 5: image, 325×180 (aspect 1.81), fit cover
- section 5: image, 325×180 (aspect 1.81), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art) · 1 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 10 half-screens · 2 elements · e.g. div.common-loader.fixed; div.common-transition.fixed
- section -: reveal on entering view — opacity 0.00→0.00, while pinned, at scroll 433–882px · e.g. div.common-video-cursor.fixed “Play the video Play the video”
- section 1: fixed, at scroll pinned for 10 half-screens · e.g. header.common-header.top-0 “Product Product Get Started Get Started ”
- section 2: scrubbed with the scroll — translateY 1→108px, at scroll 433–1335px · e.g. div.s-home-hero__media__wrap.absolute
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 433–882px · 6 elements · e.g. div.b-textGallery__text.t-wysiwyg “The Halo Digital Mirror is designed to e”; span.grow.shrink “Diffused front and back light”; span.grow.shrink “Active fogging prevention”
- section 3: reveal on entering view — opacity 0.00→1.00, scale 1.15→1.00, at scroll 882–1335px · 3 elements · e.g. li.scale-fade-in; li.scale-fade-in; li.scale-fade-in
- section 3: scrubbed with the scroll — opacity 0.00→1.00, scale 1.10→1.00, at scroll 433–1335px · e.g. div.swiper-wrapper.||
- section 3: scrubbed with the scroll — translateY -33→34px, at scroll 433–1782px · 3 elements · e.g. div.media__wrap.absolute; div.media__wrap.absolute; div.media__wrap.absolute
- section 4: scrubbed with the scroll — opacity 0.00→1.00, scale 1.10→1.00, at scroll 1335–2233px · e.g. picture.ui-fragment-image.isLoaded
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 1782–2233px · 2 elements · e.g. p.body-2.|| “The dental practice is where smiles get ”; div.mt-20.|| “About us About us”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 2233–2684px · 2 elements · e.g. div.slide-fade-up “View Media Room View Media Room”; footer.b-news__loadMore.absolute “View more View more”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 50→0px, at scroll 2233–2684px · 8 elements · e.g. h3.ui-news__title.h4 “Un miroir dentaire doté d’IA créé au Qué”; div.ui-news__descr.col-span-3 “La jeune pousse fondée en 2021 a mis au ”; h3.ui-news__title.h4 “Halo Dental : Mirror, Intelligent Mirror”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 2233–2684px · 8 elements · e.g. div.ui-news__imgWrap.order-first; div.ui-news__btnWrap.col-span-1; div.ui-news__imgWrap.order-first
- section 5: reveal on entering view — scale 1.15→1.00, at scroll 2233–2684px · 4 elements · e.g. picture.ui-fragment-image.isLoaded; picture.ui-fragment-image.isLoaded; picture.ui-fragment-image.isLoaded
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 3584–3848px · 3 elements · e.g. fieldset.form__group.|| “Infos Email address”; fieldset.form__group.my-20 “Consent By signing up to the newsletter,”; div.fade-in “Keep me posted Keep me posted”
- section 7: reveal on entering view — clip-path changes, at scroll 3848–3858px · e.g. div.ui-scroll-spy.isShown “Company About Careers (Opens in a new ta”
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 3848–3848px · 12 elements · e.g. li.t-small “About”; li.t-small “Careers (Opens in a new tab)”; li.t-small “Contact”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 3848–3858px · e.g. div.common-footer__illu.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `spinner-rotate` on svg: 1280ms, loops forever (transform)
- CSSAnimation `spinner-dash` on circle: 2000ms, loops forever (strokeDasharray, strokeDashoffset)
- CSSAnimation `waveAnimation-0ff8947e` on path: 10000ms, loops forever (transform, opacity)

**On hover:**

- a “View the solution View the solution”: color: rgb(0, 0, 0) → rgb(255, 255, 255); border: rgb(0, 0, 0) → rgb(255, 255, 255); inner color: rgb(0, 0, 0) → rgb(255, 255, 255); inner border: rgb(0, 0, 0) → rgb(255, 255, 255) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), opacity 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), border-color 0.2s cubic-bezi`
- a “View Media Room View Media Room”: border: rgb(0, 0, 0) → rgb(255, 94, 43) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), opacity 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), border-color 0.2s cubic-bezi`
- button “View more View more”: border: rgb(0, 0, 0) → rgb(255, 94, 43) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), opacity 0.3s cubic-bezier(0.32, 0.94, 0.6, 1), border-color 0.2s cubic-bezi`

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

`/` Homepage · `/halo-digital-mirror` Product · `/pricing` Get Started · `/company` Company · `/faq` FAQ · `/contact` Contact · `/investors/` Investors · `/checkout` Reserve now · `/fr` Fr · `/media-room` View Media Room · `/legal/terms-of-use` Terms of use · `/legal/privacy-policy` Privacy policy
