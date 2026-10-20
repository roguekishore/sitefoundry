# Design capture: https://typesomething.co/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — TypeSomething — Website Builder Without the CMS (page 7540px tall, window 390×844)

**Fonts:** `Montserrat Variable` ×99 · `Tahoma` ×3

**Loaded faces:** Montserrat Variable 100 900 normal

**Font sizes:** `12.48px` ×10 · `14.72px` ×9 · `16.8px` ×8 · `14.4px` ×8 · `20.8px` ×6 · `18.4px` ×6 · `11.2px` ×6 · `11.52px` ×6 · `17.6px` ×5 · `30.4px` ×5 · `16px` ×4 · `39px` ×3 · `14.08px` ×3 · `12px` ×3

**Weights:** `400` ×79 · `700` ×19 · `650` ×2 · `600` ×1 · `750` ×1

**Size / line height:** `14.72px / 22.816px` ×9 · `12.48px / 19.344px` ×9 · `20.8px / 31.2px` ×6 · `18.4px / 27.6px` ×6 · `17.6px / 26.4px` ×5 · `30.4px / 45.6px` ×5 · `11.2px / 16.8px` ×5 · `14.4px / 21.6px` ×5 · `16.8px / 25.2px` ×4 · `39px / 40.95px` ×3

**Letter spacing:** `normal` ×66 · `-0.184px` ×6 · `-0.608px` ×5 · `1.344px` ×5 · `-2.145px` ×3 · `-0.819px` ×3

**Text colours:** `rgb(23, 19, 19)` ×65 · `rgba(23, 19, 19, 0.75)` ×12 · `rgb(255, 255, 255)` ×9 · `rgb(200, 255, 18)` ×6 · `rgba(23, 19, 19, 0.72)` ×4 · `rgba(23, 19, 19, 0.55)` ×3 · `rgba(255, 255, 255, 0.75)` ×1 · `rgba(255, 255, 255, 0.55)` ×1 · `rgba(23, 19, 19, 0.65)` ×1

**Backgrounds:** `rgb(255, 255, 255)` ×1523 · `rgb(239, 234, 233)` ×350 · `rgb(23, 19, 19)` ×306 · `rgb(178, 174, 173)` ×204 · `rgba(23, 19, 19, 0.42)` ×200 · `rgba(255, 255, 255, 0.72)` ×121 · `rgb(255, 199, 216)` ×50 · `rgb(200, 255, 18)` ×46 · `rgba(178, 174, 173, 0.8)` ×23 · `rgba(23, 19, 19, 0.18)` ×0

**Borders:** `1px solid rgba(23, 19, 19, 0.16)` ×13 · `1px solid rgba(23, 19, 19, 0.25)` ×7 · `1px solid rgba(23, 19, 19, 0.14)` ×5 · `1px solid rgb(23, 19, 19)` ×5 · `2px solid rgb(255, 255, 255)` ×5 · `1px solid rgba(23, 19, 19, 0.2)` ×2 · `1px solid rgba(0, 0, 0, 0)` ×1

**Radii:** `50%` ×19 · `24px` ×16 · `12px` ×9 · `999px` ×7 · `24px 24px 4.8px` ×3 · `24px 24px 24px 4.8px` ×2

**Shadows:** `rgba(23, 19, 19, 0.14) 0px 4px 12.8px 0px` ×5 · `rgba(200, 255, 18, 0.3) 0px 0px 0px 4px` ×1 · `rgba(23, 19, 19, 0.1) 0px 28px 80px 0px` ×1 · `rgba(23, 19, 19, 0.28) 0px 28px 96px 0px` ×1

**Gradients:** `radial-gradient(circle at 15% 20%, rgba(255, 199, 216, 0.18), rgba(0, 0, 0, 0) 288px), radial-gradient(circle at 85% 80%, rgba(200, 255, 18, 0.16), rgba(0, 0, 0, 0) 288px), none` ×1

**Transitions:** `color, background-color, transform 0.16s ease` ×2 · `padding 0.22s ease` ×1 · `width, padding, border-radius 0.22s ease` ×1 · `opacity, border-color, background-color 0.18s ease` ×1

### Sections

1. `header` at 0px, 89px tall, position sticky · original-390-section-01.png
2. `section` at 89px, 950px tall — “Skip the CMS.Just chat.” · original-390-section-02.png
3. `section#how-it-works` at 1039px, 1124px tall — “How it works?” · original-390-section-03.png
4. `div` at 2163px, 906px tall · original-390-section-04.png
5. `section#features` at 3069px, 1979px tall — “What TypeSomething is” · original-390-section-05.png
6. `section#company` at 5047px, 1195px tall — “Why we built it this way?” · original-390-section-06.png
7. `section#cta` at 6243px, 536px tall — “Rebuild your website with TypeSomething.” · original-390-section-07.png
8. `footer` at 6779px, 761px tall — “Follow us” · original-390-section-08.png

### Motion

**Libraries and media seen:** none detected (bundled libraries often don't show; the scroll effects below are the evidence)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 17 half-screens · 2 elements · e.g. a.skip-link “Skip to content”; div.analytics-consent-layer “PRIVACY Your privacy settings We use opt”
- section 1: pinned (sticky), at scroll pinned for 17 half-screens · e.g. header.site-header “Type Something_”
- section 1: reveal on entering view — opacity 1.00→0.00, at scroll 422–5986px · e.g. span.brand-mark__cursor “_”
- section 2: reveal on entering view — opacity 1.00→1.00, at scroll 1266–6697px · e.g. span.typewriter__cursor “_”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 12→0px, at scroll 1688–1688px · 4 elements · e.g. article.chat-demo__message.chat-demo__message--left “Add new blog post about conference we ju”; article.chat-demo__message.chat-demo__message--right “Here is a proposal of blog post content:”; article.chat-demo__message.chat-demo__message--left “Sounds good, can you show me the website”
- section 8: reveal on entering view — opacity 1.00→0.00, at scroll 422–5986px · e.g. span.brand-mark__cursor “_”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `typewriter-blink` on span.typewriter__cursor “_”: 640ms, loops forever (opacity)
- CSSAnimation `chat-message-in` on article.chat-demo__message.chat-demo__message--left “Add new blog post about conference we ju”: 260ms (transform, opacity)
- CSSAnimation `chat-message-in` on article.chat-demo__message.chat-demo__message--right “Here is a proposal of blog post content:”: 260ms (transform, opacity)
- CSSAnimation `chat-message-in` on article.chat-demo__message.chat-demo__message--left “Sounds good, can you show me the website”: 260ms (transform, opacity)
- CSSAnimation `chat-message-in` on article.chat-demo__message.chat-demo__message--right “Here is the preview: preview.typesomethi”: 260ms (transform, opacity)

**:hover rules in the CSS (first 19):**

- `.button:hover:not(:disabled) { color: var(--color-white); background: var(--color-ink); transform: translateY(-2px); }`
- `.styleguide-header nav a:hover { text-decoration-line: underline; text-decoration-style: initial; text-decoration-color: var(--color-acid); text-underline-offset: 0.35rem; text-decoration-thickness: 0.25rem; }`
- `.analytics-consent__button--primary[data-astro-cid-vi7lbkwh], .analytics-consent__button[data-astro-cid-vi7lbkwh]:hover { background: var(--color-acid); }`
- `.ts-badge[data-astro-cid-sv2wonqo]:hover, .ts-badge[data-astro-cid-sv2wonqo]:focus-visible { opacity: 1; border-color: var(--ts-acid); background-color: color-mix(in srgb, currentcolor 7%, transparent 93%); }`
- `.ts-badge:hover .brand-mark__acid, .ts-badge:focus-visible .brand-mark__acid { animation: 0.45s ease 0s 1 normal both running ts-spark; }`
- `.site-footer__column[data-astro-cid-qup6pdxl] a[data-astro-cid-qup6pdxl]:hover { text-decoration-line: underline; text-decoration-style: initial; text-decoration-color: var(--color-acid); text-underline-offset: 0.3rem; t`
- `.site-footer__social[data-astro-cid-qup6pdxl] a[data-astro-cid-qup6pdxl]:hover { color: var(--color-white); background: var(--color-ink); }`
- `.site-footer__top-link[data-astro-cid-qup6pdxl]:hover { color: var(--color-white); background: var(--color-ink); }`
- `.language-switcher[data-astro-cid-ecceicg2] summary[data-astro-cid-ecceicg2]:hover { border-color: var(--color-ink); }`
- `.language-switcher[data-astro-cid-ecceicg2] a[data-astro-cid-ecceicg2]:hover { background: var(--color-paper); }`
- `.mega__links[data-astro-cid-kmytac5m] a[data-astro-cid-kmytac5m]:hover { background: var(--color-paper); }`
- `.mega__links[data-astro-cid-kmytac5m] a[data-astro-cid-kmytac5m]:hover .mega__icon[data-astro-cid-kmytac5m] { background: var(--color-acid); }`
- `.mega__promo-cta[data-astro-cid-kmytac5m]:hover { color: var(--color-white); background: var(--color-ink); }`
- `.nav-flyout__link[data-astro-cid-ymtm2yu5]:hover, .nav-flyout__toggle[data-astro-cid-ymtm2yu5][aria-expanded="true"] { background: var(--color-paper); }`
- `.nav-flyout__item--parent[data-astro-cid-ymtm2yu5]:hover > .nav-flyout__panel[data-astro-cid-ymtm2yu5], .nav-flyout__item--parent[data-astro-cid-ymtm2yu5]:focus-within > .nav-flyout__panel[data-astro-cid-ymtm2yu5] { disp`
- `.site-nav__link[data-astro-cid-vwn3tmth]:hover, .site-nav__toggle[data-astro-cid-vwn3tmth][aria-expanded="true"] { background: rgba(23, 19, 19, 0.07); }`
- `.site-header__cta[data-astro-cid-vwn3tmth]:hover { color: var(--color-white); background: var(--color-ink); }`
- `.site-nav__item--parent[data-astro-cid-vwn3tmth]:hover > .site-nav__panel[data-astro-cid-vwn3tmth], .site-nav__item--parent[data-astro-cid-vwn3tmth]:focus-within > .site-nav__panel[data-astro-cid-vwn3tmth] { display: blo`
- `.block-hero__announcement[data-astro-cid-sf272gaj]:hover { border-color: var(--color-ink); }`

### The site's own links

`/` Type Something_ · `/product` The product · `/blog` Blog · `/contact` Contact · `/pl/` Polski · `/brief` Start now · `/pricing` Pricing · `/client-websites` Client websites · `/privacy-policy/` Privacy policy

## 1440px — TypeSomething — Website Builder Without the CMS (page 5293px tall, window 1440×900)

**Fonts:** `Montserrat Variable` ×107 · `Tahoma` ×3

**Loaded faces:** Montserrat Variable 100 900 normal

**Font sizes:** `20.8px` ×9 · `14.72px` ×9 · `15.36px` ×9 · `14.08px` ×8 · `14.4px` ×8 · `11.52px` ×7 · `16.8px` ×7 · `18.4px` ×6 · `11.2px` ×6 · `13.12px` ×5 · `44px` ×5 · `16px` ×4 · `12px` ×3 · `12.8px` ×3

**Weights:** `400` ×78 · `700` ×21 · `600` ×8 · `650` ×2 · `750` ×1

**Size / line height:** `14.72px / 22.816px` ×9 · `15.36px / 23.808px` ×9 · `20.8px / 31.2px` ×8 · `14.08px / 21.12px` ×8 · `18.4px / 27.6px` ×6 · `13.12px / 19.68px` ×5 · `44px / 66px` ×5 · `11.2px / 16.8px` ×5 · `14.4px / 21.6px` ×5 · `11.52px / 17.28px` ×4

**Letter spacing:** `normal` ×74 · `-0.184px` ×6 · `-0.88px` ×5 · `1.344px` ×5 · `-1.536px` ×4 · `0.4608px` ×3

**Text colours:** `rgb(23, 19, 19)` ×73 · `rgba(23, 19, 19, 0.75)` ×12 · `rgb(255, 255, 255)` ×9 · `rgb(200, 255, 18)` ×5 · `rgba(23, 19, 19, 0.55)` ×4 · `rgba(23, 19, 19, 0.72)` ×4 · `rgba(255, 255, 255, 0.75)` ×1 · `rgba(255, 255, 255, 0.55)` ×1 · `rgba(23, 19, 19, 0.65)` ×1

**Backgrounds:** `rgb(255, 255, 255)` ×1755 · `rgb(23, 19, 19)` ×505 · `rgb(239, 234, 233)` ×455 · `rgb(178, 174, 173)` ×205 · `rgba(23, 19, 19, 0.42)` ×200 · `rgba(255, 255, 255, 0.72)` ×131 · `rgb(255, 199, 216)` ×97 · `rgba(178, 174, 173, 0.8)` ×81 · `rgb(200, 255, 18)` ×42 · `rgba(23, 19, 19, 0.18)` ×0

**Borders:** `1px solid rgba(23, 19, 19, 0.16)` ×13 · `1px solid rgba(23, 19, 19, 0.25)` ×8 · `1px solid rgb(23, 19, 19)` ×5 · `2px solid rgb(255, 255, 255)` ×5 · `1px solid rgba(23, 19, 19, 0.14)` ×3 · `1px solid rgba(23, 19, 19, 0.2)` ×3 · `1px solid rgba(0, 0, 0, 0)` ×1

**Radii:** `50%` ×18 · `24px` ×15 · `999px` ×14 · `12px` ×10 · `24px 24px 4.8px` ×3 · `24px 24px 24px 4.8px` ×2 · `8.8px` ×1 · `48px` ×1

**Shadows:** `rgba(23, 19, 19, 0.14) 0px 4px 12.8px 0px` ×5 · `rgba(23, 19, 19, 0.1) 0px 28px 80px 0px` ×2 · `rgba(200, 255, 18, 0.3) 0px 0px 0px 4px` ×1 · `rgba(23, 19, 19, 0.28) 0px 28px 96px 0px` ×1

**Gradients:** `radial-gradient(circle at 15% 20%, rgba(255, 199, 216, 0.18), rgba(0, 0, 0, 0) 288px), radial-gradient(circle at 85% 80%, rgba(200, 255, 18, 0.16), rgba(0, 0, 0, 0) 288px), none` ×1

**Transitions:** `background-color 0.14s ease` ×5 · `color, background-color, transform 0.16s ease` ×2 · `padding 0.22s ease` ×1 · `width, padding, border-radius 0.22s ease` ×1 · `color, background-color 0.14s ease` ×1 · `opacity, border-color, background-color 0.18s ease` ×1

### Sections

1. `header` at 0px, 86px tall, position sticky — **sized by the window: 10% of the window height** (48px in a 675px window) · original-1440-section-01.png
2. `section` at 86px, 921px tall — “Skip the CMS.Just chat.” · original-1440-section-02.png
3. `section#how-it-works` at 1007px, 627px tall — “How it works?” · original-1440-section-03.png
4. `div` at 1634px, 837px tall · original-1440-section-04.png
5. `section#features` at 2470px, 968px tall — “What TypeSomething is” · original-1440-section-05.png
6. `section#company` at 3438px, 639px tall — “Why we built it this way?” · original-1440-section-06.png
7. `section#cta` at 4078px, 774px tall — “Rebuild your website with TypeSomething.” · original-1440-section-07.png
8. `footer` at 4852px, 442px tall — “Follow us” · original-1440-section-08.png

### Motion

**Libraries and media seen:** none detected (bundled libraries often don't show; the scroll effects below are the evidence)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 10 half-screens · 2 elements · e.g. a.skip-link “Skip to content”; div.analytics-consent-layer “PRIVACY Your privacy settings We use opt”
- section 1: pinned (sticky), at scroll pinned for 10 half-screens · e.g. header.site-header “Type Something_ Home The product How it ”
- section 1: reveal on entering view — opacity 0.00→1.00, at scroll 450–4050px · e.g. span.brand-mark__cursor “_”
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 900–4355px · e.g. span.typewriter__cursor “_”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 12→0px, at scroll 900–1350px · 4 elements · e.g. article.chat-demo__message.chat-demo__message--left “Add new blog post about conference we ju”; article.chat-demo__message.chat-demo__message--right “Here is a proposal of blog post content:”; article.chat-demo__message.chat-demo__message--left “Sounds good, can you show me the website”
- section 8: reveal on entering view — opacity 0.00→1.00, at scroll 450–4050px · e.g. span.brand-mark__cursor “_”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `typewriter-blink` on span.typewriter__cursor “_”: 640ms, loops forever (opacity)
- CSSAnimation `chat-message-in` on article.chat-demo__message.chat-demo__message--left “Add new blog post about conference we ju”: 260ms (transform, opacity)
- CSSAnimation `chat-message-in` on article.chat-demo__message.chat-demo__message--right “Here is a proposal of blog post content:”: 260ms (transform, opacity)
- CSSAnimation `chat-message-in` on article.chat-demo__message.chat-demo__message--left “Sounds good, can you show me the website”: 260ms (transform, opacity)
- CSSAnimation `chat-message-in` on article.chat-demo__message.chat-demo__message--right “Here is the preview: preview.typesomethi”: 260ms (transform, opacity)

**:hover rules in the CSS (first 19):**

- `.button:hover:not(:disabled) { color: var(--color-white); background: var(--color-ink); transform: translateY(-2px); }`
- `.styleguide-header nav a:hover { text-decoration-line: underline; text-decoration-style: initial; text-decoration-color: var(--color-acid); text-underline-offset: 0.35rem; text-decoration-thickness: 0.25rem; }`
- `.analytics-consent__button--primary[data-astro-cid-vi7lbkwh], .analytics-consent__button[data-astro-cid-vi7lbkwh]:hover { background: var(--color-acid); }`
- `.ts-badge[data-astro-cid-sv2wonqo]:hover, .ts-badge[data-astro-cid-sv2wonqo]:focus-visible { opacity: 1; border-color: var(--ts-acid); background-color: color-mix(in srgb, currentcolor 7%, transparent 93%); }`
- `.ts-badge:hover .brand-mark__acid, .ts-badge:focus-visible .brand-mark__acid { animation: 0.45s ease 0s 1 normal both running ts-spark; }`
- `.site-footer__column[data-astro-cid-qup6pdxl] a[data-astro-cid-qup6pdxl]:hover { text-decoration-line: underline; text-decoration-style: initial; text-decoration-color: var(--color-acid); text-underline-offset: 0.3rem; t`
- `.site-footer__social[data-astro-cid-qup6pdxl] a[data-astro-cid-qup6pdxl]:hover { color: var(--color-white); background: var(--color-ink); }`
- `.site-footer__top-link[data-astro-cid-qup6pdxl]:hover { color: var(--color-white); background: var(--color-ink); }`
- `.language-switcher[data-astro-cid-ecceicg2] summary[data-astro-cid-ecceicg2]:hover { border-color: var(--color-ink); }`
- `.language-switcher[data-astro-cid-ecceicg2] a[data-astro-cid-ecceicg2]:hover { background: var(--color-paper); }`
- `.mega__links[data-astro-cid-kmytac5m] a[data-astro-cid-kmytac5m]:hover { background: var(--color-paper); }`
- `.mega__links[data-astro-cid-kmytac5m] a[data-astro-cid-kmytac5m]:hover .mega__icon[data-astro-cid-kmytac5m] { background: var(--color-acid); }`
- `.mega__promo-cta[data-astro-cid-kmytac5m]:hover { color: var(--color-white); background: var(--color-ink); }`
- `.nav-flyout__link[data-astro-cid-ymtm2yu5]:hover, .nav-flyout__toggle[data-astro-cid-ymtm2yu5][aria-expanded="true"] { background: var(--color-paper); }`
- `.nav-flyout__item--parent[data-astro-cid-ymtm2yu5]:hover > .nav-flyout__panel[data-astro-cid-ymtm2yu5], .nav-flyout__item--parent[data-astro-cid-ymtm2yu5]:focus-within > .nav-flyout__panel[data-astro-cid-ymtm2yu5] { disp`
- `.site-nav__link[data-astro-cid-vwn3tmth]:hover, .site-nav__toggle[data-astro-cid-vwn3tmth][aria-expanded="true"] { background: rgba(23, 19, 19, 0.07); }`
- `.site-header__cta[data-astro-cid-vwn3tmth]:hover { color: var(--color-white); background: var(--color-ink); }`
- `.site-nav__item--parent[data-astro-cid-vwn3tmth]:hover > .site-nav__panel[data-astro-cid-vwn3tmth], .site-nav__item--parent[data-astro-cid-vwn3tmth]:focus-within > .site-nav__panel[data-astro-cid-vwn3tmth] { display: blo`
- `.block-hero__announcement[data-astro-cid-sf272gaj]:hover { border-color: var(--color-ink); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Type Something_ · `/product` The product · `/blog` Blog · `/contact` Contact · `/pl/` Polski · `/brief` Start now · `/pricing` Pricing · `/client-websites` Client websites · `/privacy-policy/` Privacy policy
