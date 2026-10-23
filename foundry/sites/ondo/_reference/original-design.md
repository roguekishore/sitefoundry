# Design capture: https://ondo.finance/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Ondo Finance — Institutional-grade finance, delivered onchain (page 14324px tall, window 390×844)

**Fonts:** `Gellix` ×202 · `OndoSans` ×170 · `Arizona` ×23 · `A2` ×2

**Loaded faces:** Gellix 400 normal · Gellix 500 700 normal · Gellix Fallback normal normal · OndoSans 400 normal · OndoSans 500 700 normal · OndoSans Fallback normal normal · Arizona 300 normal · Arizona 400 normal · Arizona 500 700 normal · Arizona Fallback normal normal · A2 400 normal · A2 Fallback normal normal

**Font sizes:** `96px` ×161 · `12px` ×57 · `15px` ×50 · `14px` ×45 · `20px` ×18 · `18.2857px` ×16 · `28px` ×14 · `18px` ×11 · `16px` ×7 · `30px` ×7 · `13px` ×4 · `32px` ×3 · `40px` ×2 · `24px` ×2

**Weights:** `500` ×318 · `400` ×41 · `450` ×30 · `700` ×8

**Size / line height:** `96px / 81.6px` ×161 · `12px / 15.84px` ×55 · `14px / 18.48px` ×41 · `15px / 19.8px` ×28 · `15px / 22.5px` ×22 · `18.2857px / 27.4286px` ×16 · `20px / 26.4px` ×15 · `28px / 29.4px` ×14 · `18px / 18.9px` ×11 · `16px / 21.12px` ×7

**Letter spacing:** `normal` ×213 · `-0.15px` ×57 · `-0.12px` ×41 · `-0.14px` ×34 · `-0.2px` ×22 · `-0.56px` ×14

**Text colours:** `rgb(0, 0, 0)` ×222 · `rgb(98, 98, 98)` ×75 · `rgb(255, 255, 255)` ×70 · `rgb(177, 177, 177)` ×15 · `rgb(129, 129, 129)` ×9 · `rgba(29, 29, 29, 0.4)` ×3 · `rgb(69, 14, 120)` ×1 · `rgb(49, 49, 49)` ×1 · `rgb(240, 240, 240)` ×1

**Backgrounds:** `rgb(255, 255, 255)` ×2672 · `rgba(29, 29, 29, 0.4)` ×1533 · `rgb(240, 240, 240)` ×957 · `rgb(0, 0, 0)` ×752 · `rgb(222, 222, 222)` ×517 · `rgba(0, 0, 0, 0.1)` ×193 · `rgba(29, 29, 29, 0.2)` ×193 · `rgb(49, 49, 49)` ×150 · `rgba(29, 29, 29, 0.8)` ×135 · `rgb(29, 29, 29)` ×52 · `rgb(98, 98, 98)` ×40 · `rgba(240, 240, 240, 0.2)` ×22

**Borders:** `1px solid rgba(255, 255, 255, 0.12)` ×15 · `3px solid rgba(29, 29, 29, 0.1)` ×3 · `1px solid rgb(222, 222, 222)` ×3 · `1px solid rgb(49, 49, 49)` ×2 · `1px solid rgb(240, 240, 240)` ×1

**Radii:** `8px` ×43 · `12px` ×19 · `50%` ×13 · `16px` ×9 · `999px` ×4 · `2px` ×4 · `90.0267px` ×1 · `117.767px` ×1 · `166.033px` ×1

**Shadows:** `rgba(24, 24, 24, 0.07) 0px 9px 80px 0px, rgba(24, 24, 24, 0.05) 0px 2.01px 17.869px 0px, rgba(24, 24, 24, 0.03) 0px 0.599px 5.32px 0px` ×1

**Gradients:** `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 50%, rgba(0, 0, 0, 0.36) 100%)` ×3

**Transitions:** `transform 0.15s ease` ×36 · `background 0.4s ease-out` ×15 · `box-shadow 0.3s cubic-bezier(0.4` ×4 · `background-color, box-shadow 0.3s cubic-bezier(0.4` ×4 · `opacity 0.15s ease` ×4 · `opacity 0.15s ease-out` ×2

### Sections

1. `div` at 0px, 106px tall · original-390-section-01.png
2. `main#main` at 106px, 10728px tall — “Welcome to the Open Economy” · original-390-section-02.png, original-390-section-03.png, original-390-section-04.png, original-390-section-05.png, original-390-section-06.png, original-390-section-07.png
3. `footer` at 10834px, 3490px tall · original-390-section-08.png, original-390-section-09.png

### Media slots

- section 2: video autoplay, 300×300 (aspect 1.00), fit cover
- section 2: video autoplay, 258×258 (aspect 1.00), fit cover
- section 2: video, 183×183 (aspect 1.00), fit cover
- section 2: image, 326×198 (aspect 1.64), fit cover, radius 16px
- section 2: image, 326×198 (aspect 1.64), fit cover, radius 16px
- section 2: image, 326×198 (aspect 1.64), fit cover, radius 16px
- section 3: image, 358×44 (aspect 8.13), fit auto

### Motion

**Libraries and media seen:** 3 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 89→68px, at scroll 0–0px · e.g. span “At Ondo, we believe that blockchain tech”
- section 1: reveal on entering view — translateY 0→-48px, at scroll 0–0px · e.g. div “Introducing Ondo Private Markets: Tokeni”
- section 2: reveal on entering view — scale 1.00→0.39, at scroll 0–0px · e.g. div
- section 2: reveal on entering view — scale 1.00→0.34, at scroll 0–0px · e.g. div
- section 2: reveal on entering view — scale 1.00→0.26, at scroll 0–0px · e.g. div
- section 2: reveal on entering view — opacity 1.00→0.00, at scroll 0–0px · 3 elements · e.g. div.MuiBox-root.css-19dqz55; div “Swipe to explore”; div
- section 2: reveal on entering view — translateY 0→-175px, at scroll 0–0px · e.g. span “Welcome to the”
- section 2: reveal on entering view — translateY 0→175px, at scroll 0–0px · e.g. span “Open Economy”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 40→0px, at scroll 0–0px · e.g. div “At Ondo, we design institutional-grade p”
- section 2: reveal on entering view — translateX -447→-488px, at scroll 0–0px · e.g. div.ticker-animation.MuiBox-root “Ondo, Kinexys by J.P. Morgan, Mastercard”
- section 2: reveal on entering view — translateX -13→-47px, at scroll 0–0px · e.g. div.ticker-animation.MuiBox-root “Ondo Partners With Broadridge to Bring V”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `fade-in` on div.MuiBox-root.css-4ntzie: 6000ms (opacity)
- CSSAnimation `progress-fill` on circle: 6000ms (strokeDashoffset)
- CSSAnimation `ticker-scroll` on div.ticker-animation.MuiBox-root “Ondo, Kinexys by J.P. Morgan, Mastercard”: 20000ms, loops forever (transform)
- CSSAnimation `ticker-scroll` on div.ticker-animation.MuiBox-root “Ondo Partners With Broadridge to Bring V”: 15000ms, loops forever (transform)
- CSSAnimation `slideOutToRight` on div.MuiBox-root.css-x6ck9k: 400ms (transform)
- CSSAnimation `slideInFromLeft` on div.MuiBox-root.css-c39lmj: 400ms (transform)
- CSSAnimation `animation-1z08apo` on p.MuiBox-root.css-1lsvru5 “High-Quality Assets and Managers”: 250ms (transform, opacity)
- CSSAnimation `animation-1z08apo` on p.MuiBox-root.css-1lsvru5 “Regulated Service Providers”: 250ms (transform, opacity)
- CSSAnimation `animation-1z08apo` on p.MuiBox-root.css-1lsvru5 “Experienced Leadership”: 250ms (transform, opacity)
- CSSAnimation `animation-1z08apo` on p.MuiBox-root.css-1lsvru5 “Third-Party Audited Security”: 250ms (transform, opacity)
- CSSAnimation `animation-1z08apo` on p.MuiBox-root.css-1lsvru5 “Compliance-First Focus”: 250ms (transform, opacity)
- CSSAnimation `animation-1odiaf4` on div.MuiStack-root.css-di3vmx “High-Quality Assets and Managers We work”: 400ms (transform, opacity)
- Animation `` on div: 6000ms, loops forever (transform)
- Animation `` on div.MuiStack-root.animated-row: 120000ms, loops forever (transform)
- Animation `` on span “Welcome to the”: 1150ms (transform)
- Animation `` on span “Open Economy”: 1150ms (transform)
- Animation `` on div.MuiStack-root.css-jy5ovu: 300ms (opacity)

**:hover rules in the CSS (first 20):**

- `.css-4vknuw:hover { text-decoration: none; background-color: rgba(0, 0, 0, 0.08); }`
- `.css-4vknuw:hover { background-color: transparent; }`
- `.css-4vknuw:hover { background-color: rgba(240, 240, 240, 0.1); }`
- `.css-1enrzqj:hover { text-decoration: none; background-color: rgba(0, 0, 0, 0.08); }`
- `.css-1enrzqj:hover { background-color: transparent; }`
- `.css-1enrzqj:hover { background-color: rgba(240, 240, 240, 0.1); }`
- `.css-zfylog:hover { background-color: rgba(240, 240, 240, 0.8); }`
- `.css-156ta0e:hover { text-decoration-color: inherit; }`
- `.css-156ta0e:hover { color: rgb(255, 255, 255); }`
- `.css-btnzp0:hover { text-decoration-color: inherit; }`
- `.css-btnzp0:hover { color: rgb(255, 255, 255); }`
- `.css-sbty5b:hover { text-decoration-color: inherit; }`
- `.css-sbty5b:hover { color: rgb(255, 255, 255); }`
- `.css-13pv168:hover { text-decoration-color: inherit; }`
- `.css-13pv168:hover { color: rgb(255, 255, 255); }`
- `.css-myaf3q:hover { text-decoration-color: inherit; }`
- `.css-myaf3q:hover { color: rgb(255, 255, 255); }`
- `.css-7jywrw:hover { background-color: rgba(240, 240, 240, 0.4); }`
- `.css-lrrt7z:hover { background-color: rgba(240, 240, 240, 0.1); }`
- `.css-ubrqfs:hover { background-color: rgba(240, 240, 240, 0.1); }`

### The site's own links

`/usdy` USDY · `/ousg` OUSG · `/ondo-stocks` Ondo Stocks · `/intelligent-portfolios` Intelligent Portfolios · `/private-markets` Private Markets · `/blog/introducing-the-ondo-network` Ondo Network · `/insights` Insights · `/blog` Blog · `/learn` Learn · `/ecosystem` Ecosystem · `/` Foundation · `/team` Team · `/contact` Contact Us

## 1440px — Ondo Finance — Institutional-grade finance, delivered onchain (page 14383px tall, window 1440×900)

**Fonts:** `OndoSans` ×170 · `Gellix` ×154 · `Arizona` ×20 · `A2` ×1

**Loaded faces:** Gellix 400 normal · Gellix 500 700 normal · Gellix Fallback normal normal · OndoSans 400 normal · OndoSans 500 700 normal · OndoSans Fallback normal normal · Arizona 300 normal · Arizona 400 normal · Arizona 500 700 normal · Arizona Fallback normal normal · A2 400 normal · A2 Fallback normal normal

**Font sizes:** `150px` ×161 · `16px` ×64 · `14px` ×37 · `12px` ×33 · `36px` ×12 · `20px` ×8 · `28px` ×7 · `60px` ×7 · `18.2857px` ×6 · `48px` ×5 · `24px` ×3 · `56px` ×2

**Weights:** `500` ×300 · `400` ×27 · `450` ×10 · `700` ×8

**Size / line height:** `150px / 127.5px` ×161 · `16px / 21.12px` ×40 · `14px / 18.48px` ×35 · `12px / 15.84px` ×30 · `16px / 24px` ×24 · `36px / 37.8px` ×12 · `20px / 26.4px` ×8 · `28px / 29.4px` ×7 · `60px / 63px` ×7 · `18.2857px / 27.4286px` ×6

**Letter spacing:** `-4px` ×161 · `-0.16px` ×59 · `normal` ×39 · `-0.12px` ×27 · `-0.14px` ×22 · `-0.72px` ×12

**Text colours:** `rgb(0, 0, 0)` ×201 · `rgb(98, 98, 98)` ×70 · `rgb(255, 255, 255)` ×44 · `rgb(177, 177, 177)` ×11 · `rgb(49, 49, 49)` ×7 · `rgb(129, 129, 129)` ×3 · `rgb(222, 222, 222)` ×3 · `rgba(29, 29, 29, 0.4)` ×3 · `rgb(69, 14, 120)` ×1 · `rgb(0, 72, 48)` ×1 · `rgb(240, 240, 240)` ×1

**Backgrounds:** `rgb(255, 255, 255)` ×2894 · `rgb(0, 0, 0)` ×849 · `rgb(222, 222, 222)` ×805 · `rgb(240, 240, 240)` ×601 · `rgba(29, 29, 29, 0.4)` ×474 · `rgb(49, 49, 49)` ×200 · `rgba(0, 0, 0, 0.1)` ×200 · `rgba(29, 29, 29, 0.2)` ×200 · `rgb(98, 98, 98)` ×160 · `rgba(29, 29, 29, 0.8)` ×138 · `rgba(29, 29, 29, 0.3)` ×69 · `rgb(29, 29, 29)` ×31

**Borders:** `1px solid rgba(255, 255, 255, 0.12)` ×5 · `3px solid rgba(29, 29, 29, 0.1)` ×3 · `1px solid rgb(222, 222, 222)` ×3 · `1px solid rgb(49, 49, 49)` ×2 · `1px solid rgb(69, 14, 120)` ×1 · `1px solid rgb(240, 240, 240)` ×1

**Radii:** `8px` ×35 · `24px` ×16 · `50%` ×13 · `16px` ×11 · `12px` ×5 · `999px` ×4 · `32px` ×1 · `14.5px` ×1 · `4px` ×1

**Shadows:** `rgba(24, 24, 24, 0.07) 0px 9px 80px 0px, rgba(24, 24, 24, 0.05) 0px 2.01px 17.869px 0px, rgba(24, 24, 24, 0.03) 0px 0.599px 5.32px 0px` ×1

**Gradients:** `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 50%, rgba(0, 0, 0, 0.36) 100%)` ×3

**Transitions:** `transform 0.15s ease` ×32 · `background 0.4s ease-out` ×5 · `box-shadow 0.3s cubic-bezier(0.4` ×4 · `background-color, box-shadow, border-color, color 0.25s cubic-bezier(0.4` ×4 · `background-color, box-shadow 0.3s cubic-bezier(0.4` ×4 · `opacity 0.15s ease` ×4 · `opacity 0.15s ease-out` ×2 · `background-color, color 0.2s ease` ×2

### Sections

1. `div` at 0px, 106px tall · original-1440-section-01.png
2. `div` at 0px, 1125px tall — **sized by the window: 125% of the window height** (844px in a 675px window) — “Welcome to the Open Economy” · original-1440-section-02.png
3. `section` at 1125px, 685px tall — “See the Latest from Ondo” · original-1440-section-03.png
4. `div` at 1810px, 3201px tall — “A New Standardfor Tokenized Finance.” · original-1440-section-04.png, original-1440-section-05.png
5. `div` at 5011px, 962px tall — “Ondo is building the foundation for the future of finance.” · original-1440-section-06.png
6. `div` at 5973px, 913px tall · original-1440-section-07.png
7. `div` at 6886px, 900px tall — “We Believe In” · original-1440-section-08.png
8. `div` at 7786px, 947px tall — “Institutional GradeIn All We Do” · original-1440-section-09.png
9. `div#nexus` at 8732px, 957px tall — “Our Technology,Your Tokens” · original-1440-section-10.png
10. `div` at 9689px, 900px tall · original-1440-section-11.png
11. `div` at 10589px, 838px tall — “The Ondo Perspective” · original-1440-section-12.png
12. `div` at 11427px, 699px tall — “The Future of Finance” · original-1440-section-13.png
13. `footer` at 12126px, 2257px tall · original-1440-section-14.png, original-1440-section-15.png

### Media slots

- section 2: video autoplay, 725×453 (aspect 1.60), fit cover
- section 2: video autoplay, 624×390 (aspect 1.60), fit cover
- section 2: video, 442×276 (aspect 1.60), fit cover
- section 3: image, 570×347 (aspect 1.64), fit cover, radius 16px
- section 3: image, 570×347 (aspect 1.64), fit cover, radius 16px
- section 3: image, 570×347 (aspect 1.64), fit cover, radius 16px
- section 13: image, 1352×166 (aspect 8.13), fit auto

### Motion

**Libraries and media seen:** 3 video element(s)

**While scrolling** (sampled every half screen):

- section 1: reveal on entering view — translateY 0→-48px, at scroll 0–0px · e.g. div “Introducing Ondo Private Markets: Tokeni”
- section 1: reveal on entering view — translateX -676→-413px, at scroll 0–0px · e.g. div.MuiStack-root.css-1ye37vv “Products Resources Ecosystem About Launc”
- section 1: reveal on entering view — opacity 0.00→0.99, translateX -676→-413px, at scroll 0–0px · e.g. div.MuiStack-root.css-jy5ovu
- section 2: reveal on entering view — scale 1.00→0.53, clip-path changes, at scroll 0–0px · e.g. div
- section 2: reveal on entering view — scale 1.00→0.46, clip-path changes, at scroll 0–0px · e.g. div
- section 2: reveal on entering view — scale 1.00→0.34, clip-path changes, at scroll 0–0px · e.g. div
- section 2: reveal on entering view — opacity 1.00→0.00, at scroll 0–0px · 3 elements · e.g. div.MuiBox-root.css-19dqz55; div “Scroll to explore”; div
- section 2: reveal on entering view — translateX 0→-260px, at scroll 0–0px · e.g. span “Welcome to the”
- section 2: reveal on entering view — translateX 0→260px, at scroll 0–0px · e.g. span “Open Economy”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 40→0px, at scroll 0–0px · e.g. div “At Ondo, we design institutional-grade p”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `fade-in` on div.MuiBox-root.css-4ntzie: 6000ms (opacity)
- CSSAnimation `progress-fill` on circle: 6000ms (strokeDashoffset)
- CSSAnimation `animation-1odiaf4` on div.MuiStack-root.css-di3vmx “High-Quality Assets and Managers We work”: 400ms (transform, opacity)
- CSSAnimation `animation-1z08apo` on p.MuiBox-root.css-1lsvru5 “Regulated Service Providers”: 250ms (transform, opacity)
- CSSAnimation `animation-1z08apo` on p.MuiBox-root.css-1lsvru5 “Experienced Leadership”: 250ms (transform, opacity)
- CSSAnimation `animation-1z08apo` on p.MuiBox-root.css-1lsvru5 “Third-Party Audited Security”: 250ms (transform, opacity)
- CSSAnimation `animation-1z08apo` on p.MuiBox-root.css-1lsvru5 “Compliance-First Focus”: 250ms (transform, opacity)
- Animation `` on div: 6000ms, loops forever (transform)
- Animation `` on div.MuiStack-root.animated-row: 120000ms, loops forever (transform)
- Animation `` on span “Welcome to the”: 1150ms (transform)
- Animation `` on span “Open Economy”: 1150ms (transform)
- Animation `` on div.MuiStack-root.css-jy5ovu: 300ms (opacity)

**On hover:**

- button “Products”: background: rgba(0, 0, 0, 0) → rgba(240, 240, 240, 0.1) · transition `background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s c`
- a “Launch App”: background: rgb(240, 240, 240) → rgba(240, 240, 240, 0.8) · transition `all`

**:hover rules in the CSS (first 20):**

- `.css-4vknuw:hover { text-decoration: none; background-color: rgba(0, 0, 0, 0.08); }`
- `.css-4vknuw:hover { background-color: transparent; }`
- `.css-4vknuw:hover { background-color: rgba(240, 240, 240, 0.1); }`
- `.css-1enrzqj:hover { text-decoration: none; background-color: rgba(0, 0, 0, 0.08); }`
- `.css-1enrzqj:hover { background-color: transparent; }`
- `.css-1enrzqj:hover { background-color: rgba(240, 240, 240, 0.1); }`
- `.css-zfylog:hover { background-color: rgba(240, 240, 240, 0.8); }`
- `.css-156ta0e:hover { text-decoration-color: inherit; }`
- `.css-156ta0e:hover { color: rgb(255, 255, 255); }`
- `.css-btnzp0:hover { text-decoration-color: inherit; }`
- `.css-btnzp0:hover { color: rgb(255, 255, 255); }`
- `.css-sbty5b:hover { text-decoration-color: inherit; }`
- `.css-sbty5b:hover { color: rgb(255, 255, 255); }`
- `.css-13pv168:hover { text-decoration-color: inherit; }`
- `.css-13pv168:hover { color: rgb(255, 255, 255); }`
- `.css-myaf3q:hover { text-decoration-color: inherit; }`
- `.css-myaf3q:hover { color: rgb(255, 255, 255); }`
- `.css-7jywrw:hover { background-color: rgba(240, 240, 240, 0.4); }`
- `.css-lrrt7z:hover { background-color: rgba(240, 240, 240, 0.1); }`
- `.css-ubrqfs:hover { background-color: rgba(240, 240, 240, 0.1); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/usdy` USDY · `/ousg` OUSG · `/ondo-stocks` Ondo Stocks · `/intelligent-portfolios` Intelligent Portfolios · `/private-markets` Private Markets · `/blog/introducing-the-ondo-network` Ondo Network · `/insights` Insights · `/blog` Blog · `/learn` Learn · `/ecosystem` Ecosystem · `/` Foundation · `/team` Team · `/contact` Contact Us
