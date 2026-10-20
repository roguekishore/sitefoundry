# Design capture: https://www.mejuma-tuscany.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Mejuma Tuscany (page 11872px tall, window 390×844)

**Fonts:** `Golos Text` ×72 · `Made Mirage` ×29 · `Roxale Story 400` ×6

**Loaded faces:** webflow-icons normal normal · Made Mirage 400 normal · Roxale Story 400 400 normal · Golos Text 400 normal · Golos Text 700 normal

**Font sizes:** `16px` ×61 · `32px` ×9 · `18px` ×7 · `48px` ×7 · `111.446px` ×6 · `80px` ×6 · `40px` ×5 · `24px` ×4 · `28px` ×2

**Weights:** `400` ×107

**Size / line height:** `16px / 19.2px` ×41 · `16px / 24px` ×12 · `16px / 16px` ×8 · `48px / 48px` ×7 · `111.446px / 122.59px` ×6 · `80px / 80px` ×6 · `18px / 22.5px` ×6 · `32px / 32px` ×5 · `40px / 40px` ×5 · `32px / 35.2px` ×4

**Letter spacing:** `normal` ×107

**Text colours:** `rgb(56, 53, 44)` ×92 · `rgb(241, 241, 241)` ×10 · `rgb(130, 136, 110)` ×5

**Backgrounds:** `rgb(232, 228, 225)` ×1169 · `rgb(197, 190, 180)` ×325 · `rgba(0, 0, 0, 0.5)` ×200 · `rgb(255, 202, 79)` ×133 · `rgba(255, 255, 255, 0)` ×44 · `rgb(241, 241, 241)` ×6

**Radii:** `40px` ×20

**Shadows:** `rgb(56, 53, 44) 0px 0px 0px 1px inset` ×2

**Transitions:** `scale 0.6s cubic-bezier(0.625` ×12 · `rotate 0.6s cubic-bezier(0.625` ×11 · `translate 0.6s cubic-bezier(0.625` ×8 · `width 0.8s cubic-bezier(0.65` ×6 · `opacity 0.3s ease` ×5 · `transform 0.75s cubic-bezier(0.65` ×4 · `color 0.2s ease` ×3

**:root variables (18):** `--sand--50: #f1f1f1` · `--green--950: #38352c` · `--yellow: #ffca4f` · `--sand--300: #c5beb4` · `--sand--100: #e8e4e1` · `--green--600: #82886e` · `--button-040-color: var(--green--950)` · `--button-040-color-background: var(--yellow)` · `--button-040-color-arrow: var(--green--950)` · `--button-040-color-arrow-background: var(--yellow)` · `--button-040-color-focus: var(--sand--50)` · `--button-040-height: 3em` · `--button-040-padding-x: 1.25em` · `--button-040-border-radius: 2.5em` · `--button-040-gap: 0em` · `--button-040-focus-inset: -0.125em` · `--button-040-ease-hover: cubic-bezier(0.625, 0.05, 0, 1)` · `--button-040-ease-focus: cubic-bezier(0.32, 0.72, 0, 1)`

### Sections

1. `section` at 0px, 928px tall — **sized by the window: 110% of the window height** (696px in a 633px window) — “mejuma” · original-390-section-01.png
2. `section` at 928px, 1216px tall — “We guide the search, purchase, renovation and local coordination of your new Tus” · original-390-section-02.png
3. `section` at 2144px, 144px tall · original-390-section-03.png
4. `section` at 2288px, 2681px tall — “La Valle di Semifonte” · original-390-section-04.png, original-390-section-05.png
5. `section` at 4969px, 2798px tall — “Leave the complexity to us.” · original-390-section-06.png, original-390-section-07.png
6. `section` at 7767px, 1332px tall — “Buying in Italy is romantic. Managing it from abroad rarely is.” · original-390-section-08.png
7. `section` at 9099px, 1125px tall · original-390-section-09.png
8. `section` at 10304px, 1568px tall — “Thinking about Tuscany?” · original-390-section-10.png

### Media slots

- section 1: video loop, 390×928 (aspect 0.42), fit cover, **fills the window height**
- section 2: image, 358×743 (aspect 0.48), fit cover
- section 4: image, 358×400 (aspect 0.90), fit cover
- section 4: image, 358×400 (aspect 0.90), fit cover
- section 4: image, 358×400 (aspect 0.90), fit cover
- section 4: image, 358×400 (aspect 0.90), fit cover
- section 5: image, 358×240 (aspect 1.49), fit cover
- section 5: image, 358×240 (aspect 1.49), fit cover
- section 5: image, 358×240 (aspect 1.49), fit cover
- section 5: image, 358×240 (aspect 1.49), fit cover
- section 5: image, 358×240 (aspect 1.49), fit cover
- section 6: image, 358×557 (aspect 0.64), fit cover
- section 7: video loop, 390×1125 (aspect 0.35), fit cover
- section 8: image, 358×264 (aspect 1.36), fit cover
- section 8: image, 358×264 (aspect 1.36), fit cover

### Motion

**Libraries and media seen:** GSAP 3.15.0 · GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · Webflow interactions · 2 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 27 half-screens · 3 elements · e.g. div.nav “Menu”; div.nav-base; div.transition.w-embed
- section -: scrubbed with the scroll — clip-path changes, at scroll 393–1238px · e.g. div.nav-bg
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 393–815px · 2 elements · e.g. div.margin-top.margin-large “Turnkey property solutions”; div.flex-vertical.gap-xs “We guide the search, purchase, renovatio”
- section 2: scrubbed with the scroll — translateY 42→0px, at scroll 393–1238px · 3 elements · e.g. div.line-inner “We guide the search,”; div.line-inner “purchase, renovation and”; div.line-inner “local coordination of your”
- section 2: reveal on entering view — translateY 42→0px, at scroll 815–1238px · e.g. div.line-inner “new Tuscan home.”
- section 3: scrubbed with the scroll — translateX 39→-39px, at scroll 1658–2505px · e.g. div.marquee-advanced__scroll “Selected properties Selected properties ”
- section 3: scrubbed with the scroll — translateX -385→-252px, at scroll 393–10971px · 3 elements · e.g. div.marquee-advanced__collection “Selected properties”; div.marquee-advanced__collection “Selected properties”; div.marquee-advanced__collection “Selected properties”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 2083–2083px · 4 elements · e.g. div.w-dyn-item “La Valle di Semifonte Price € 185,000 - ”; div.w-dyn-item “Dimora Montecchio Price €250,000 - €750,”; div.w-dyn-item “Le Logge Del Papa Price €700,000 Locatio”
- section 4: reveal on entering view — scale 1.00→1.00, at scroll 2083–2928px · 4 elements · e.g. img.image.is-hover; img.image.is-hover; img.image.is-hover
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 4613–5035px · 3 elements · e.g. div.max-width-70 “Leave the complexity to us.”; a.button-040.w-inline-block “Our solutions”; div.preview-collection “.01 Discover We start by understanding y”
- section 5: reveal on entering view — translateY 58→0px, at scroll 4613–5035px · 2 elements · e.g. div.line-inner “Leave the”; div.line-inner “complexity to us.”
- section 6: scrubbed with the scroll — translateY 58→0px, at scroll 7146–7992px · 2 elements · e.g. div.line-inner “Buying in Italy is”; div.line-inner “romantic.”
- section 6: reveal on entering view — translateY 58→0px, at scroll 7570–7992px · 2 elements · e.g. div.line-inner “Managing it from”; div.line-inner “abroad rarely is.”
- section 6: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 7570–7992px · 2 elements · e.g. div.image-wrapper.is-60; div.flex-vertical.space-between “Language barriers, legal procedures, per”
- section 7: scrubbed with the scroll — translateX 39→-39px, at scroll 8411–9255px · e.g. div.marquee-advanced__scroll “Why choose mejuma Why choose mejuma Why ”
- section 7: scrubbed with the scroll — translateX -5→-435px, at scroll 393–10971px · 3 elements · e.g. div.marquee-advanced__collection “Why choose mejuma”; div.marquee-advanced__collection “Why choose mejuma”; div.marquee-advanced__collection “Why choose mejuma”
- section 7: reveal on entering view — opacity 1.00→0.00, at scroll 8411–8833px · e.g. img.bunny-bg__placeholder
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 8833–9255px · 4 elements · e.g. div.usp-base “Handpicked by design Curated homes Every”; div.usp-base “Built with confidence Verified projects ”; div.usp-base “Personal guidance One contact We coordin”
- section 8: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 10099–10522px · 4 elements · e.g. h6 “Let’s meet!”; div.flex-vertical.gap-xs “Thinking about Tuscany? We know how exci”; div.image-wrapper.is-footer “Read our story”

**:hover rules in the CSS (first 16):**

- `a:active, a:hover { outline: 0px; }`
- `.w-lightbox-control:hover { opacity: 1; }`
- `.w-lightbox-inactive, .w-lightbox-inactive:hover { opacity: 0; }`
- `.social-link-wrap:hover { color: var(--yellow); }`
- `.img-slider__thumb:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.locale-link:hover { text-decoration: underline; }`
- `body:has([data-follower-collection]:hover) .preview-follower__inner { opacity: 1; transform: scale(1); }`
- `body:has([data-follower-collection]:hover) .preview-follower__label { opacity: 1; transform: translate(0px, 0%); }`
- `body:has(.preview-item:hover) .preview-item:not(:hover) { opacity: 0.5; }`
- `.property-base:hover .image.is-hover { transform: scale(1.05); }`
- `.link-wrap:hover .link-hover-circle { width: 0.75rem; margin-right: 0.5rem; opacity: 1; transform: scale(1); }`
- `.button-040:is(:hover, :focus-visible) .button-040__text-wrap, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__text-wrap { translate: 0px; transition: translate 0.735s 0.05s var(--button-040-ease-hover);`
- `.button-040:is(:hover, :focus-visible) .button-040__icon-wrap, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__icon-wrap { scale: 1; transition: scale 0.735s 0.05s var(--button-040-ease-hover); }`
- `.button-040:is(:hover, :focus-visible) .button-040__icon-wrap.is--duplicate, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__icon-wrap.is--duplicate { scale: 0; transition: scale 0.735s 0.05s var(--butto`
- `.button-040:is(:hover, :focus-visible) .button-040__icon-wrap.is--duplicate .button-040__icon, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__icon-wrap.is--duplicate .button-040__icon { rotate: 45deg; }`
- `.button-040:is(:hover, :focus-visible) .button-040__icon, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__icon { rotate: 0deg; transition: rotate 0.735s 0.05s var(--button-040-ease-hover); }`

## 1440px — Mejuma Tuscany (page 9010px tall, window 1440×900)

**Fonts:** `Golos Text` ×72 · `Made Mirage` ×27 · `Roxale Story 400` ×6

**Loaded faces:** webflow-icons normal normal · Made Mirage 400 normal · Roxale Story 400 400 normal · Golos Text 400 normal · Golos Text 700 normal

**Font sizes:** `18px` ×53 · `16px` ×8 · `48px` ×8 · `24px` ×7 · `411.247px` ×6 · `144px` ×6 · `32px` ×6 · `120px` ×6 · `80px` ×5

**Weights:** `400` ×105

**Size / line height:** `18px / 21.6px` ×41 · `18px / 27px` ×12 · `16px / 16px` ×8 · `411.247px / 452.372px` ×6 · `144px / 144px` ×6 · `32px / 32px` ×6 · `120px / 120px` ×6 · `24px / 30px` ×6 · `48px / 48px` ×5 · `80px / 80px` ×5

**Letter spacing:** `normal` ×105

**Text colours:** `rgb(56, 53, 44)` ×90 · `rgb(241, 241, 241)` ×10 · `rgb(130, 136, 110)` ×5

**Backgrounds:** `rgb(232, 228, 225)` ×1526 · `rgb(197, 190, 180)` ×405 · `rgb(255, 202, 79)` ×264 · `rgba(255, 255, 255, 0)` ×200 · `rgba(0, 0, 0, 0.5)` ×200 · `rgb(241, 241, 241)` ×6

**Borders:** `1px solid rgba(0, 0, 0, 0.25)` ×5

**Radii:** `40px` ×20

**Shadows:** `rgb(56, 53, 44) 0px 0px 0px 1px inset` ×2

**Transitions:** `scale 0.6s cubic-bezier(0.625` ×12 · `rotate 0.6s cubic-bezier(0.625` ×11 · `translate 0.6s cubic-bezier(0.625` ×8 · `width 0.8s cubic-bezier(0.65` ×6 · `opacity 0.3s ease` ×6 · `transform 0.75s cubic-bezier(0.65` ×4 · `color 0.2s ease` ×3

**:root variables (18):** `--sand--50: #f1f1f1` · `--green--950: #38352c` · `--yellow: #ffca4f` · `--sand--300: #c5beb4` · `--sand--100: #e8e4e1` · `--green--600: #82886e` · `--button-040-color: var(--green--950)` · `--button-040-color-background: var(--yellow)` · `--button-040-color-arrow: var(--green--950)` · `--button-040-color-arrow-background: var(--yellow)` · `--button-040-color-focus: var(--sand--50)` · `--button-040-height: 3em` · `--button-040-padding-x: 1.25em` · `--button-040-border-radius: 2.5em` · `--button-040-gap: 0em` · `--button-040-focus-inset: -0.125em` · `--button-040-ease-hover: cubic-bezier(0.625, 0.05, 0, 1)` · `--button-040-ease-focus: cubic-bezier(0.32, 0.72, 0, 1)`

### Sections

1. `section` at 0px, 990px tall — **sized by the window: 110% of the window height** (743px in a 675px window) — “mejuma” · original-1440-section-01.png
2. `section` at 990px, 737px tall — **sized by the window: 82% of the window height** (557px in a 675px window) — “We guide the search, purchase, renovation and local coordination of your new Tus” · original-1440-section-02.png
3. `section` at 1727px, 304px tall · original-1440-section-03.png
4. `section` at 2031px, 1500px tall — “La Valle di Semifonte” · original-1440-section-04.png
5. `section` at 3531px, 1463px tall — “Leave the complexity to us.” · original-1440-section-05.png
6. `section` at 4993px, 1361px tall — “Buying in Italy is romantic. Managing it from abroad rarely is.” · original-1440-section-06.png
7. `section` at 6354px, 859px tall · original-1440-section-07.png
8. `section` at 7293px, 1716px tall — “Thinking about Tuscany?” · original-1440-section-08.png

### Media slots

- section 1: video loop, 1440×990 (aspect 1.45), fit cover
- section 2: image, 527×792 (aspect 0.66), fit cover
- section 4: image, 660×400 (aspect 1.65), fit cover
- section 4: image, 660×400 (aspect 1.65), fit cover
- section 4: image, 660×400 (aspect 1.65), fit cover
- section 4: image, 660×400 (aspect 1.65), fit cover
- section 6: image, 540×594 (aspect 0.91), fit cover
- section 7: video loop, 1440×859 (aspect 1.68), fit cover
- section 8: image, 538×792 (aspect 0.68), fit cover
- section 8: image, 432×275 (aspect 1.57), fit cover

### Motion

**Libraries and media seen:** GSAP 3.15.0 · GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · Webflow interactions · 2 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 20 half-screens · 3 elements · e.g. div.nav “Menu”; div.nav-base; div.transition.w-embed
- section -: scrubbed with the scroll — clip-path changes, at scroll 422–1322px · e.g. div.nav-bg
- section -: reveal on entering view — opacity 1.00→0.00, translateY -172→0px, at scroll 422–869px · e.g. div.preview-item__visual
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 869–869px · 5 elements · e.g. img.preview-item__visual-img; img.preview-item__visual-img; img.preview-item__visual-img
- section -: reveal on entering view — opacity 1.00→0.00, translateY -33→0px, at scroll 422–869px · e.g. div.preview-item__visual
- section -: reveal on entering view — opacity 1.00→0.00, translateY 139→0px, at scroll 422–869px · e.g. div.preview-item__visual
- section -: reveal on entering view — opacity 1.00→0.00, translateY 151→0px, at scroll 422–422px · e.g. div.preview-item__visual
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 422–869px · 2 elements · e.g. div.margin-top.margin-large “Turnkey property solutions”; div.flex-vertical.gap-xs “We guide the search, purchase, renovatio”
- section 2: reveal on entering view — translateY 63→0px, at scroll 869–1322px · 3 elements · e.g. div.line-inner “We guide the search, purchase,”; div.line-inner “renovation and local coordination of”; div.line-inner “your new Tuscan home.”
- section 2: scrubbed with the scroll — translateY 23→-22px, at scroll 422–1768px · e.g. img.image.is-bg
- section 3: scrubbed with the scroll — translateX 144→-144px, at scroll 1322–2223px · e.g. div.marquee-advanced__scroll “Selected properties Selected properties ”
- section 3: scrubbed with the scroll — translateX -975→-1069px, at scroll 422–8110px · 3 elements · e.g. div.marquee-advanced__collection “Selected properties”; div.marquee-advanced__collection “Selected properties”; div.marquee-advanced__collection “Selected properties”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 1768–2223px · 4 elements · e.g. div.w-dyn-item “La Valle di Semifonte Price € 185,000 - ”; div.w-dyn-item “Dimora Montecchio Price €250,000 - €750,”; div.w-dyn-item “Le Logge Del Papa Price €700,000 Locatio”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 3119–3569px · 3 elements · e.g. div.max-width-70 “Leave the complexity to us.”; a.button-040.w-inline-block “Our solutions”; div.preview-collection “.01 Discover We start by understanding y”
- section 5: scrubbed with the scroll — translateY 144→0px, at scroll 3119–4017px · 2 elements · e.g. div.line-inner “Leave the”; div.line-inner “complexity to us.”
- section 5: reveal on entering view — opacity 1.00→1.00, at scroll 4017–4920px · 2 elements · e.g. div.preview-item “.01 Discover We start by understanding y”; div.preview-item “.05 Arrive Your property is delivered re”
- section 5: scrubbed with the scroll — opacity 1.00→1.00, at scroll 3569–4920px · 4 elements · e.g. div.preview-item “.02 Find Based on your criteria, we cura”; div.preview-item “.03 Secure We guide you through the enti”; div.preview-item “.04 Coordinate Once the purchase is comp”
- section 5: scrubbed with the scroll — opacity 0.00→1.00, translateY -118→450px, translateX 331→451px, while pinned, at scroll 422–4920px · e.g. div.preview-follower
- section 5: reveal on entering view — opacity 1.00→0.00, scale 1.00→0.00, at scroll 422–869px · e.g. div.preview-follower__inner
- section 6: scrubbed with the scroll — translateY 144→0px, at scroll 4468–5372px · 3 elements · e.g. div.line-inner “Buying in Italy is”; div.line-inner “romantic. Managing it”; div.line-inner “from abroad rarely is.”
- section 6: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 5372–5819px · 2 elements · e.g. div.image-wrapper.is-60; div.flex-vertical.space-between “Language barriers, legal procedures, per”
- section 6: scrubbed with the scroll — translateY 0→-22px, at scroll 4017–6270px · e.g. img.image.is-bg
- section 7: scrubbed with the scroll — translateX 144→-144px, at scroll 5819–6720px · e.g. div.marquee-advanced__scroll “Why choose mejuma Why choose mejuma Why ”
- section 7: scrubbed with the scroll — translateX -740→-725px, at scroll 422–8110px · 3 elements · e.g. div.marquee-advanced__collection “Why choose mejuma”; div.marquee-advanced__collection “Why choose mejuma”; div.marquee-advanced__collection “Why choose mejuma”
- section 7: reveal on entering view — opacity 1.00→0.00, at scroll 5819–5819px · e.g. img.bunny-bg__placeholder
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 6270–6720px · 4 elements · e.g. div.usp-base “Handpicked by design Curated homes Every”; div.usp-base “Built with confidence Verified projects ”; div.usp-base “Personal guidance One contact We coordin”
- section 8: scrubbed with the scroll — translateY 0→-45px, at scroll 5819–8070px · e.g. div.cta-base.is-inview “Let’s meet! Thinking about Tuscany? We k”
- section 8: reveal on entering view — opacity 0.00→1.00, translateY 36→0px, at scroll 6720–7170px · e.g. h6 “Let’s meet!”
- section 8: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 7170–7170px · 4 elements · e.g. div.flex-vertical.gap-xs “Thinking about Tuscany? We know how exci”; div.image-wrapper.is-footer “Read our story”; div.footer-links-col “Links Turnkey solutions Properties Our p”
- section 8: scrubbed with the scroll — translateY 0→22px, at scroll 5819–8109px · e.g. img.image.is-bg
- section 8: scrubbed with the scroll — translateY 0→-5px, at scroll 6720–8109px · e.g. img.image.is-bg

**On hover:**

- a “Menu”: inner scale: 0 → 0.935501 · transition `all`
- a “Explore our properties”: inner scale: 0 → 0.924379 · transition `all`
- a “How it works”: inner scale: 0 → 0.924372 · transition `all`
- a “Explore our properties”: inner scale: 0 → 0.924429 · transition `all`
- a “Turnkey solutions”: inner transform: matrix(0, 0, 0, 0, 0, 0) → matrix(1, 0, 0, 1, 0, 0); inner opacity: 0 → 1 · transition `all`
- a “+39 333 432 36 44”: inner transform: matrix(0, 0, 0, 0, 0, 0) → matrix(1, 0, 0, 1, 0, 0); inner opacity: 0 → 1 · transition `all`
- a: color: rgb(56, 53, 44) → rgb(255, 202, 79); border: rgb(56, 53, 44) → rgb(255, 202, 79); inner color: rgb(56, 53, 44) → rgb(255, 202, 79); inner border: rgb(56, 53, 44) → rgb(255, 202, 79) · transition `color 0.2s`

**:hover rules in the CSS (first 16):**

- `a:active, a:hover { outline: 0px; }`
- `.w-lightbox-control:hover { opacity: 1; }`
- `.w-lightbox-inactive, .w-lightbox-inactive:hover { opacity: 0; }`
- `.social-link-wrap:hover { color: var(--yellow); }`
- `.img-slider__thumb:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.locale-link:hover { text-decoration: underline; }`
- `body:has([data-follower-collection]:hover) .preview-follower__inner { opacity: 1; transform: scale(1); }`
- `body:has([data-follower-collection]:hover) .preview-follower__label { opacity: 1; transform: translate(0px, 0%); }`
- `body:has(.preview-item:hover) .preview-item:not(:hover) { opacity: 0.5; }`
- `.property-base:hover .image.is-hover { transform: scale(1.05); }`
- `.link-wrap:hover .link-hover-circle { width: 0.75rem; margin-right: 0.5rem; opacity: 1; transform: scale(1); }`
- `.button-040:is(:hover, :focus-visible) .button-040__text-wrap, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__text-wrap { translate: 0px; transition: translate 0.735s 0.05s var(--button-040-ease-hover);`
- `.button-040:is(:hover, :focus-visible) .button-040__icon-wrap, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__icon-wrap { scale: 1; transition: scale 0.735s 0.05s var(--button-040-ease-hover); }`
- `.button-040:is(:hover, :focus-visible) .button-040__icon-wrap.is--duplicate, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__icon-wrap.is--duplicate { scale: 0; transition: scale 0.735s 0.05s var(--butto`
- `.button-040:is(:hover, :focus-visible) .button-040__icon-wrap.is--duplicate .button-040__icon, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__icon-wrap.is--duplicate .button-040__icon { rotate: 45deg; }`
- `.button-040:is(:hover, :focus-visible) .button-040__icon, [data-hover]:is(:hover, :focus-visible) .button-040 .button-040__icon { rotate: 0deg; transition: rotate 0.735s 0.05s var(--button-040-ease-hover); }`

### Horizontal overflow

- 360px: **overflows** (page 416px wide) — div.marquee-advanced__collection (right edge 769px), div.marquee-advanced__collection (right edge 1452px), div.marquee-advanced__scroll (right edge 432px), div.footer-socials (right edge 416px)
- 768px: **overflows** (page 936px wide) — div.marquee-advanced__collection (right edge 1278px), div.marquee-advanced__scroll (right edge 777px), div.footer-socials (right edge 936px)
- 1024px: **overflows** (page 1064px wide) — div.marquee-advanced__collection (right edge 1660px), div.marquee-advanced__collection (right edge 1618px), div.marquee-advanced__collection (right edge 2569px), div.footer-socials (right edge 1064px)
