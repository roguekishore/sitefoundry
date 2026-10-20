# Design capture: https://www.hhhusher.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — HHHusher | Hi-Hat Bleed Reduction Enclosure for Drum Recording (page 10453px tall, window 390×844)

**Fonts:** `AeonikFono-Bold` ×41 · `UniversalSansDisplay` ×40 · `UniversalSansText` ×12 · `Aeonik-Black` ×7

**Loaded faces:** UniversalSansDisplay 500 normal · AeonikFono-Regular 700 normal · AeonikFono-Bold 700 normal · Aeonik-Black 900 normal · UniversalSansText normal normal

**Font sizes:** `12.48px` ×36 · `20.8px` ×14 · `33.28px` ×11 · `16.64px` ×7 · `78.5417px` ×7 · `14px` ×5 · `14.56px` ×4 · `24.96px` ×4 · `29.12px` ×4 · `3.25px` ×3 · `49.92px` ×2 · `18px` ×1 · `11.44px` ×1 · `41.6px` ×1

**Weights:** `500` ×48 · `700` ×27 · `100` ×17 · `900` ×7 · `400` ×1

**Size / line height:** `12.48px / 16.224px` ×21 · `20.8px / 27.04px` ×12 · `12.48px / 16.64px` ×12 · `78.5417px / 62.8333px` ×7 · `33.28px / 36.608px` ×6 · `16.64px / 21.632px` ×6 · `14px / 24px` ×5 · `33.28px / 34.944px` ×5 · `14.56px / 18.928px` ×4 · `24.96px / 27.456px` ×4

**Letter spacing:** `normal` ×76 · `-1.35417px` ×7 · `-0.3328px` ×6 · `-0.416px` ×5 · `-0.28px` ×2 · `-0.2496px` ×2

**Text colours:** `rgb(33, 33, 33)` ×53 · `rgb(243, 241, 224)` ×36 · `rgb(128, 128, 128)` ×5 · `rgb(255, 204, 0)` ×4 · `rgb(255, 255, 255)` ×1 · `rgba(244, 242, 226, 0.5)` ×1

**Backgrounds:** `rgb(33, 33, 33)` ×1057 · `rgb(243, 241, 224)` ×401 · `rgb(173, 144, 105)` ×400 · `rgb(255, 255, 255)` ×124 · `rgb(255, 204, 0)` ×72 · `rgba(244, 242, 226, 0.15)` ×58 · `rgba(244, 242, 226, 0.2)` ×19 · `rgb(128, 128, 128)` ×5

**Borders:** `2px solid rgb(33, 33, 33)` ×11 · `2px solid rgba(33, 33, 33, 0.15)` ×8 · `1px solid rgb(255, 204, 0)` ×6 · `1px solid rgba(0, 0, 0, 0)` ×6 · `2px solid rgba(0, 0, 0, 0)` ×3 · `1px solid rgb(244, 244, 244)` ×1 · `1px solid rgba(244, 242, 226, 0.2)` ×1 · `1px solid rgb(243, 241, 224)` ×1

**Radii:** `5px` ×25 · `4.16px` ×6 · `2px` ×3 · `6.24px` ×3 · `6px` ×2 · `3.12px` ×1

**Shadows:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px` ×1

**Transitions:** `all 0.3s cubic-bezier(0.32` ×30 · `background-color, color 0.7s cubic-bezier(0.32` ×9 · `transform 0.3s cubic-bezier(0.32` ×9 · `opacity 0.4s cubic-bezier(0.32` ×4 · `color 0.3s cubic-bezier(0.32` ×4 · `padding-top 0.4s cubic-bezier(0.32` ×1 · `background 0.3s ease` ×1 · `top 0.4s cubic-bezier(0.32` ×1

### Sections

1. `header` at 0px, 0px tall — “Your order”
2. `div` at 0px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “Eliminate Hi-Hat Bleed” · original-390-section-01.png
3. `div#overview` at 844px, 2297px tall — “Introducing the HHHusher. A versatile sound enclosure mounted to the hi-hat stan” · original-390-section-02.png, original-390-section-03.png
4. `div#features` at 3141px, 3709px tall — “Optimal in Every Way” · original-390-section-04.png, original-390-section-05.png
5. `div#specifications` at 6849px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “Microphone Setups” · original-390-section-06.png
6. `div#faq` at 7693px, 1124px tall · original-390-section-07.png
7. `div` at 8818px, 972px tall — “Real Drummers. Real Results.” · original-390-section-08.png

### Media slots

- section 2: video autoplay loop, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 3: image, 348×694 (aspect 0.50), fit cover
- section 3: image, 348×694 (aspect 0.50), fit cover
- section 3: image, 348×694 (aspect 0.50), fit cover
- section 3: video autoplay loop, 348×401 (aspect 0.87), fit cover
- section 3: video autoplay loop, 348×348 (aspect 1.00), fit cover
- section 3: video autoplay loop, 348×302 (aspect 1.15), fit cover
- section 4: canvas (WebGL/2D), 390×844 (aspect 0.46), fit auto, **fills the window height**
- section 5: image, 390×844 (aspect 0.46), fit cover, **fills the window height**

### Motion

**Libraries and media seen:** Lenis smooth scroll · 2 canvas element(s) (WebGL/2D art) · 4 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 24 half-screens · 4 elements · e.g. div.cky-consent-container.cky-box-bottom-left “We use cookies on this site We and our p”; div.cky-modal; div.c.common-footer “Stay in the Loop SUBSCRIBE I agree to re”
- section -: reveal on entering view — translateY 0→-78px, while pinned, at scroll 409–409px · e.g. div.common-header “BUY”
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 9600–9600px · e.g. div.logo-container “H Husher”
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 833–833px · 18 elements · e.g. div.line “Introducing the”; div.line “HHHusher. A versatile”; div.line “sound enclosure”
- section -: reveal on entering view — opacity 0.81→0.00, at scroll 409–833px · e.g. div.lineChild “Introducing the”
- section -: reveal on entering view — opacity 0.68→0.00, translateY 12→0px, at scroll 409–833px · e.g. div.lineChild “HHHusher. A versatile”
- section -: reveal on entering view — opacity 0.50→0.00, translateY 18→0px, at scroll 409–833px · e.g. div.lineChild “sound enclosure”
- section -: reveal on entering view — opacity 0.25→0.00, translateY 27→0px, at scroll 409–833px · e.g. div.lineChild “mounted to the hi-hat”
- section -: reveal on entering view — opacity 0.00→0.00, translateY 37→0px, at scroll 409–833px · 7 elements · e.g. div.lineChild “stand, which minimizes”; div.lineChild “hi-hat bleed. A good”; div.lineChild “mix starts with the”
- section -: reveal on entering view — opacity 0.74→0.00, translateY 12→0px, at scroll 409–833px · e.g. div.lineChild “Optimal in Every”
- section -: reveal on entering view — opacity 0.58→0.00, translateY 19→0px, at scroll 409–833px · e.g. div.lineChild “Way”
- section -: scrubbed with the scroll — opacity 0.00→0.00, translateY 37→0px, at scroll 409–1253px · 2 elements · e.g. div.lineChild “Customizable Lip”; div.lineChild “System”
- section -: reveal on entering view — opacity 0.75→0.00, translateY 9→0px, at scroll 409–833px · e.g. div.lineChild “Microphone Opening”
- section -: reveal on entering view — opacity 0.78→0.00, at scroll 409–833px · e.g. div.lineChild “Work with Hi Hats 14”,”
- section -: reveal on entering view — opacity 0.64→0.00, translateY 13→0px, at scroll 409–833px · e.g. div.lineChild “15”, 16””
- section -: reveal on entering view — translateX -8→0px, at scroll 409–409px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -13→0px, at scroll 409–833px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -14→0px, at scroll 409–833px · e.g. div.charChild “u”
- section -: reveal on entering view — translateX -16→0px, at scroll 409–833px · e.g. div.charChild “s”
- section -: reveal on entering view — translateX -21→0px, at scroll 409–833px · e.g. div.charChild “h”
- section -: reveal on entering view — translateX -25→0px, at scroll 409–833px · e.g. div.charChild “e”
- section -: reveal on entering view — translateX -20→0px, at scroll 409–833px · e.g. div.charChild “r”
- section 2: scrubbed with the scroll — translateY 0→422px, at scroll 409–1253px · e.g. video.video
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 409–409px · 2 elements · e.g. h3.ui-fragments-text-reveal.tagline “Introducing the HHHusher. A versatile so”; span “DISCOVER MORE →”
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→0px, at scroll 833–1673px · 9 elements · e.g. div.control-elem.is-expanded-wrapper “01 STUDIO Designed for studio drummers, ”; div.control-elem “02 LIVE”; div.control-elem “03 BROADCAST”
- section 3: scrubbed with the scroll — opacity 0.00→1.00, at scroll 2094–2938px · 2 elements · e.g. span “DISCOVER MORE →”; span “DISCOVER MORE →”
- section 4: reveal on entering view — opacity 0.20→1.00, while pinned, at scroll 3364–3787px · e.g. div
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 2938–2938px · 4 elements · e.g. h2.ui-fragments-text-reveal.h2 “Optimal in Every Way”; h3.ui-fragments-text-reveal.h3 “Customizable Lip System”; h3.ui-fragments-text-reveal.h3 “Microphone Opening”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→0px, at scroll 2938–3787px · 4 elements · e.g. span “Many designs and tests went into creatin”; span “No two drummers have the same geometry. ”; span “It is common practice for some engineers”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 6317–6317px · e.g. h2.ui-fragments-text-reveal.h2 “Microphone Setups”
- section 5: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→0px, at scroll 6317–7163px · 4 elements · e.g. div.nav-elem “01 SIDE ADDRESS”; div.nav-elem “02 CLASSIC DYNAMIC”; div.nav-elem “03 SIDE OF THE SNARE COMBO”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 0→0px, at scroll 6317–7163px · 2 elements · e.g. div.nav-elem “04 TWIN PERSPECTIVE”; div.nav-elem “05 DYNAMIC & PENCIL CONDENSER”
- section 6: reveal on entering view — opacity 1.00→0.15, at scroll 8427–8427px · e.g. li.h4.-active “01 Product”
- section 6: reveal on entering view — opacity 0.15→1.00, at scroll 8427–8427px · e.g. li.h4 “02 Features”

**:hover rules in the CSS (first 20):**

- `.t-wysiwyg a:focus, .t-wysiwyg a:hover { color: rgb(33, 33, 33); }`
- `.common-navigation ul.mainmenu .ui-fragments-button:hover { color: rgb(255, 204, 0); }`
- `.common-navigation ul.mainmenu .nav-buy-item .common-shop-button:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.ui-fragments-button:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.common-shop-button[data-v-67fe2d9a]:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.common-shop-button:hover .shop-amount[data-v-67fe2d9a] { background-color: rgb(255, 204, 0); color: rgb(33, 33, 33); }`
- `.common-lang-switch:hover { background: transparent; border: 2px solid rgb(243, 241, 224); color: rgb(243, 241, 224); }`
- `.ui-fragments-button-icon:focus-visible, .ui-fragments-button-icon:hover { background: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.common-footer .footer-links .link:hover { color: rgb(255, 204, 0); }`
- `.modules-hero .description--container .hero-actions .play-btn:hover { background: rgba(244, 242, 226, 0.4); }`
- `.modules-hero .description--container .hero-actions .hero-glass-btn.link-btn:hover { background: rgba(244, 242, 226, 0.3); color: rgb(243, 241, 224); }`
- `.modules-overview-controls .slide-tab:not(.active):hover { background: transparent; border: 2px solid rgb(243, 241, 224); color: rgb(243, 241, 224); }`
- `.modules-overview-controls .slide-tab.is-expanded .discover-more:hover { opacity: 0.7; }`
- `.modules-overview-grid-card .content .discover-more:hover { opacity: 0.7; }`
- `.modules-features--introduction .features-actions .discover-more:hover { opacity: 0.7; }`
- `.modules-features-panel .features-actions .discover-more:hover { opacity: 0.7; }`
- `.modules-mic .mic-info-container .mic-actions .discover-more:hover { opacity: 0.7; }`
- `.modules-mic-nav button:hover .index-box { background: rgb(255, 204, 0); border: 1px solid transparent; color: rgb(33, 33, 33); }`
- `.modules-mic-nav button:hover .identifier { color: rgb(255, 204, 0); }`
- `.modules-mic-nav button.active:hover .index-box { border: 1px solid rgb(255, 204, 0); }`

### The site's own links

`/` Overview · `/products` Products

## 1440px — HHHusher | Hi-Hat Bleed Reduction Enclosure for Drum Recording (page 10311px tall, window 1440×900)

**Fonts:** `AeonikFono-Bold` ×45 · `UniversalSansDisplay` ×38 · `UniversalSansText` ×12 · `Aeonik-Black` ×7

**Loaded faces:** UniversalSansDisplay 500 normal · AeonikFono-Regular 700 normal · AeonikFono-Bold 700 normal · Aeonik-Black 900 normal · UniversalSansText normal normal

**Font sizes:** `12px` ×42 · `24px` ×9 · `16px` ×7 · `290px` ×7 · `14px` ×6 · `32px` ×5 · `20px` ×5 · `68px` ×4 · `57px` ×4 · `43px` ×4 · `14.4px` ×2 · `29px` ×2 · `18px` ×1 · `101px` ×1

**Weights:** `500` ×48 · `700` ×31 · `100` ×15 · `900` ×7 · `400` ×1

**Size / line height:** `12px / 15.6px` ×29 · `12px / 16px` ×12 · `24px / 31.2px` ×9 · `16px / 20.8px` ×7 · `290px / 232px` ×7 · `14px / 24px` ×5 · `20px / 26px` ×5 · `68px / 74.8px` ×4 · `57px / 59.85px` ×4 · `32px / 35.2px` ×4

**Letter spacing:** `normal` ×78 · `-5px` ×7 · `-0.32px` ×6 · `-0.4px` ×3 · `-0.28px` ×2 · `-0.58px` ×2

**Text colours:** `rgb(33, 33, 33)` ×53 · `rgb(243, 241, 224)` ×38 · `rgb(128, 128, 128)` ×5 · `rgb(255, 204, 0)` ×4 · `rgb(255, 255, 255)` ×1 · `rgba(244, 242, 226, 0.5)` ×1

**Backgrounds:** `rgb(33, 33, 33)` ×1527 · `rgb(243, 241, 224)` ×411 · `rgb(173, 144, 105)` ×400 · `rgb(255, 204, 0)` ×105 · `rgb(255, 255, 255)` ×92 · `rgba(244, 242, 226, 0.15)` ×69 · `rgba(244, 242, 226, 0.2)` ×22 · `rgb(128, 128, 128)` ×5

**Borders:** `2px solid rgb(33, 33, 33)` ×11 · `2px solid rgba(33, 33, 33, 0.15)` ×8 · `1px solid rgb(255, 204, 0)` ×6 · `1px solid rgba(0, 0, 0, 0)` ×6 · `2px solid rgba(0, 0, 0, 0)` ×5 · `1px solid rgb(244, 244, 244)` ×1 · `1px solid rgba(244, 242, 226, 0.2)` ×1 · `1px solid rgb(243, 241, 224)` ×1

**Radii:** `5px` ×31 · `4px` ×7 · `2px` ×3 · `6px` ×2 · `3px` ×1

**Shadows:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px` ×1

**Transitions:** `all 0.3s cubic-bezier(0.32` ×31 · `color 0.3s cubic-bezier(0.32` ×8 · `background-color, color 0.7s cubic-bezier(0.32` ×8 · `transform 0.3s cubic-bezier(0.32` ×8 · `opacity 0.4s cubic-bezier(0.32` ×4 · `padding-top 0.4s cubic-bezier(0.32` ×1 · `background 0.3s ease` ×1 · `top 0.4s cubic-bezier(0.32` ×1

### Sections

1. `header` at 0px, 0px tall — “Your order”
2. `div` at 0px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “Eliminate Hi-Hat Bleed” · original-1440-section-01.png
3. `div#overview` at 900px, 2384px tall — “Introducing the HHHusher. A versatile sound enclosure mounted to the hi-hat stan” · original-1440-section-02.png, original-1440-section-03.png
4. `div#features` at 3284px, 3760px tall — “Optimal in Every Way” · original-1440-section-04.png, original-1440-section-05.png
5. `div#specifications` at 7044px, 965px tall — “Microphone Setups” · original-1440-section-06.png
6. `div#faq` at 8009px, 963px tall · original-1440-section-07.png
7. `div` at 8973px, 737px tall — “Real Drummers. Real Results.” · original-1440-section-08.png

### Media slots

- section 2: video autoplay loop, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 3: image, 1564×828 (aspect 1.89), fit cover
- section 3: image, 1564×828 (aspect 1.89), fit cover
- section 3: image, 1564×828 (aspect 1.89), fit cover
- section 3: video autoplay loop, 835×960 (aspect 0.87), fit cover
- section 3: video autoplay loop, 485×485 (aspect 1.00), fit cover
- section 3: video autoplay loop, 485×420 (aspect 1.15), fit cover
- section 4: canvas (WebGL/2D), 1440×900 (aspect 1.60), fit auto, **fills the window height**
- section 5: image, 1440×966 (aspect 1.49), fit auto

### Motion

**Libraries and media seen:** Lenis smooth scroll · 2 canvas element(s) (WebGL/2D art) · 4 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 22 half-screens · 4 elements · e.g. div.cky-consent-container.cky-box-bottom-left “We use cookies on this site We and our p”; div.cky-modal; div.c.common-footer “Stay in the Loop SUBSCRIBE I agree to re”
- section -: reveal on entering view — translateY 0→-100px, while pinned, at scroll 443–443px · e.g. div.common-header “OVERVIEW PRODUCTS FAQ BUY $CAD CHFCHF €E”
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 9403–9411px · e.g. div.logo-container “H Husher”
- section -: reveal on entering view — translateX -70→0px, at scroll 9403–9411px · e.g. div.mask-container
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 893–893px · 14 elements · e.g. div.line “Introducing the HHHusher. A versatile so”; div.line “enclosure mounted to the hi-hat stand, w”; div.line “minimizes hi-hat bleed. A good mix start”
- section -: reveal on entering view — opacity 0.83→0.00, translateY 11→0px, at scroll 443–893px · e.g. div.lineChild “Introducing the HHHusher. A versatile so”
- section -: reveal on entering view — opacity 0.70→0.00, translateY 19→0px, at scroll 443–893px · e.g. div.lineChild “enclosure mounted to the hi-hat stand, w”
- section -: reveal on entering view — opacity 0.52→0.00, translateY 30→0px, at scroll 443–893px · e.g. div.lineChild “minimizes hi-hat bleed. A good mix start”
- section -: reveal on entering view — opacity 0.29→0.00, translateY 45→0px, at scroll 443–893px · e.g. div.lineChild “quality of the recorded source.”
- section -: scrubbed with the scroll — opacity 0.00→0.00, translateY 84→0px, at scroll 443–1343px · 2 elements · e.g. div.lineChild “Optimal in Every”; div.lineChild “Way”
- section -: reveal on entering view — opacity 0.46→0.00, translateY 34→0px, at scroll 443–893px · e.g. div.lineChild “Customizable Lip”
- section -: reveal on entering view — opacity 0.20→0.00, translateY 50→0px, at scroll 443–893px · e.g. div.lineChild “System”
- section -: reveal on entering view — opacity 0.00→0.00, translateY 63→0px, at scroll 443–893px · 4 elements · e.g. div.lineChild “Microphone”; div.lineChild “Opening”; div.lineChild “Work with Hi”
- section -: reveal on entering view — opacity 0.90→0.00, at scroll 443–893px · e.g. div.lineChild “Microphone”
- section -: reveal on entering view — opacity 0.81→0.00, at scroll 443–893px · e.g. div.lineChild “Setups”
- section -: reveal on entering view — translateX -51→0px, at scroll 443–443px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -79→0px, at scroll 443–893px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -81→0px, at scroll 443–893px · e.g. div.charChild “u”
- section -: reveal on entering view — translateX -90→0px, at scroll 443–893px · e.g. div.charChild “s”
- section -: reveal on entering view — translateX -120→0px, at scroll 443–893px · e.g. div.charChild “h”
- section -: reveal on entering view — translateX -139→0px, at scroll 443–893px · e.g. div.charChild “e”
- section -: reveal on entering view — translateX -109→0px, at scroll 443–893px · e.g. div.charChild “r”
- section 2: scrubbed with the scroll — translateY 0→450px, at scroll 443–1343px · e.g. video.video
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 443–443px · 3 elements · e.g. h3.ui-fragments-text-reveal.tagline “Introducing the HHHusher. A versatile so”; div.control-elem.is-expanded-wrapper “01 STUDIO Designed for studio drummers, ”; span “DISCOVER MORE →”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 0→0px, at scroll 1343–1790px · 5 elements · e.g. div.control-elem “02 LIVE”; div.control-elem “03 BROADCAST”; span “DISCOVER MORE →”
- section 3: scrubbed with the scroll — translateY -72→72px, at scroll 893–2243px · 3 elements · e.g. img.lazyautosizes.lazyloaded; img.lazyautosizes.lazyloaded; img.lazyautosizes.lazyloaded
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→0px, at scroll 1343–2243px · 5 elements · e.g. span “Shape”; span “The shape of the HHHusher uses Convex in”; span “Materials”
- section 4: pinned (sticky), at scroll pinned for 5 half-screens · e.g. div.modules-features-background
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 2693–2693px · 4 elements · e.g. h2.ui-fragments-text-reveal.h2 “Optimal in Every Way”; h3.ui-fragments-text-reveal.h3 “Customizable Lip System”; h3.ui-fragments-text-reveal.h3 “Microphone Opening”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→0px, at scroll 3141–4042px · 3 elements · e.g. span “Many designs and tests went into creatin”; span “No two drummers have the same geometry. ”; span “It is common practice for some engineers”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 0→0px, at scroll 5844–6294px · e.g. span “We racked our brains trying to find a wa”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 6743–6743px · e.g. h2.ui-fragments-text-reveal.h2 “Microphone Setups”
- section 5: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→0px, at scroll 6743–7643px · 4 elements · e.g. div.nav-elem “01 SIDE ADDRESS”; div.nav-elem “02 CLASSIC DYNAMIC”; div.nav-elem “03 SIDE OF THE SNARE COMBO”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 0→0px, at scroll 6743–7643px · 2 elements · e.g. div.nav-elem “05 DYNAMIC & PENCIL CONDENSER”; div.nav-elem “06 STEREO SOURCE SNARE”
- section 6: reveal on entering view — opacity 1.00→0.15, at scroll 8993–8993px · e.g. li.h4.-active “01 Product”
- section 6: reveal on entering view — opacity 0.15→1.00, at scroll 8993–8993px · e.g. li.h4 “02 Features”

**On hover:**

- button “Customize”: opacity: 1 → 0.8 · transition `all`
- button “Reject All”: opacity: 1 → 0.8 · transition `all`
- button “Accept All”: opacity: 1 → 0.8 · transition `all`
- a “OVERVIEW”: color: rgb(243, 241, 224) → rgb(255, 204, 0); border: rgb(243, 241, 224) → rgb(255, 204, 0); inner color: rgb(243, 241, 224) → rgb(255, 204, 0); inner border: rgb(243, 241, 224) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “PRODUCTS”: color: rgb(243, 241, 224) → rgb(255, 204, 0); border: rgb(243, 241, 224) → rgb(255, 204, 0); inner color: rgb(243, 241, 224) → rgb(255, 204, 0); inner border: rgb(243, 241, 224) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “FAQ”: color: rgb(243, 241, 224) → rgb(255, 204, 0); border: rgb(243, 241, 224) → rgb(255, 204, 0); inner color: rgb(243, 241, 224) → rgb(255, 204, 0); inner border: rgb(243, 241, 224) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- button “BUY”: color: rgb(33, 33, 33) → rgb(255, 204, 0); background: rgb(255, 204, 0) → rgba(0, 0, 0, 0); inner color: rgb(33, 33, 33) → rgb(255, 204, 0); inner border: rgb(33, 33, 33) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “FR”: background: rgba(244, 242, 226, 0.15) → rgba(0, 0, 0, 0); border: rgba(0, 0, 0, 0) → rgb(243, 241, 224) · transition `0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- button: background: rgba(244, 242, 226, 0.2) → rgba(244, 242, 226, 0.4) · transition `background 0.3s`
- a “DISCOVER HI-HAT BLEED”: background: rgba(244, 242, 226, 0.15) → rgba(244, 242, 226, 0.3) · transition `0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “DISCOVER MORE →”: opacity: 1 → 0.7 · transition `all`
- button “02 LIVE”: background: rgba(244, 242, 226, 0.15) → rgba(0, 0, 0, 0); border: rgba(0, 0, 0, 0) → rgb(243, 241, 224) · transition `0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “DISCOVER MORE →”: opacity: 1 → 0.7 · transition `all`
- button “01 SIDE ADDRESS”: inner border: rgba(0, 0, 0, 0) → rgb(255, 204, 0) · transition `0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`

**:hover rules in the CSS (first 20):**

- `.t-wysiwyg a:focus, .t-wysiwyg a:hover { color: rgb(33, 33, 33); }`
- `.common-navigation ul.mainmenu .ui-fragments-button:hover { color: rgb(255, 204, 0); }`
- `.common-navigation ul.mainmenu .nav-buy-item .common-shop-button:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.ui-fragments-button:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.common-shop-button[data-v-67fe2d9a]:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.common-shop-button:hover .shop-amount[data-v-67fe2d9a] { background-color: rgb(255, 204, 0); color: rgb(33, 33, 33); }`
- `.common-lang-switch:hover { background: transparent; border: 2px solid rgb(243, 241, 224); color: rgb(243, 241, 224); }`
- `.ui-fragments-button-icon:focus-visible, .ui-fragments-button-icon:hover { background: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.common-footer .footer-links .link:hover { color: rgb(255, 204, 0); }`
- `.modules-hero .description--container .hero-actions .play-btn:hover { background: rgba(244, 242, 226, 0.4); }`
- `.modules-hero .description--container .hero-actions .hero-glass-btn.link-btn:hover { background: rgba(244, 242, 226, 0.3); color: rgb(243, 241, 224); }`
- `.modules-overview-controls .slide-tab:not(.active):hover { background: transparent; border: 2px solid rgb(243, 241, 224); color: rgb(243, 241, 224); }`
- `.modules-overview-controls .slide-tab.is-expanded .discover-more:hover { opacity: 0.7; }`
- `.modules-overview-grid-card .content .discover-more:hover { opacity: 0.7; }`
- `.modules-features--introduction .features-actions .discover-more:hover { opacity: 0.7; }`
- `.modules-features-panel .features-actions .discover-more:hover { opacity: 0.7; }`
- `.modules-mic .mic-info-container .mic-actions .discover-more:hover { opacity: 0.7; }`
- `.modules-mic-nav button:hover .index-box { background: rgb(255, 204, 0); border: 1px solid transparent; color: rgb(33, 33, 33); }`
- `.modules-mic-nav button:hover .identifier { color: rgb(255, 204, 0); }`
- `.modules-mic-nav button.active:hover .index-box { border: 1px solid rgb(255, 204, 0); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` OVERVIEW · `/products` PRODUCTS
