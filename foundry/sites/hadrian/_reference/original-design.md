# Design capture: https://hadrian.co/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — The Future of American Production | Hadrian (page 3417px tall, window 390×844)

**Fonts:** `soehne` ×16 · `soehneMono` ×12 · `soehneBreit` ×5

**Loaded faces:** soehneBreit normal normal · soehneBreit Fallback normal normal · soehne 400 normal · soehne 500 normal · soehne 600 normal · soehne Fallback normal normal · soehneMono 400 normal · soehneMono 500 normal · soehneMono 600 normal · soehneMono Fallback normal normal

**Font sizes:** `14px` ×10 · `30px` ×10 · `16px` ×7 · `18px` ×6

**Weights:** `400` ×32 · `500` ×1

**Size / line height:** `30px / 30px` ×10 · `14px / 14px` ×8 · `16px / 17.12px` ×7 · `18px / 21.6px` ×6 · `14px / 21px` ×2

**Letter spacing:** `normal` ×11 · `-0.9px` ×10 · `-0.36px` ×6 · `-0.32px` ×6

**Text colours:** `rgb(255, 255, 255)` ×26 · `rgb(243, 160, 0)` ×6 · `rgb(0, 0, 0)` ×1

**Backgrounds:** `rgb(0, 37, 72)` ×1551 · `rgba(0, 0, 0, 0.6)` ×200 · `rgb(20, 64, 111)` ×200 · `rgb(112, 184, 253)` ×168

**Borders:** `1px solid rgb(243, 160, 0)` ×2 · `1px solid rgb(255, 255, 255)` ×2

**Gradients:** `linear-gradient(to right bottom, rgb(20, 64, 111), rgb(0, 37, 72))` ×2 · `linear-gradient(to top, rgb(0, 37, 72) 0%, rgba(0, 0, 0, 0) 100%)` ×1 · `linear-gradient(to left, rgb(0, 37, 72), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))` ×1 · `linear-gradient(to right, rgb(0, 37, 72), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))` ×1

**Transitions:** `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×5 · `background-color, transform 0.2s ease-in-out` ×1

**:root variables (43):** `--black-rgb: 0 0 0` · `--white-rgb: 255 255 255` · `--off-black: #171717` · `--hadrian-gray-rgb: 231 231 231` · `--hadrian-darkgray-rgb: 138 138 138` · `--hadrian-lightgray-rgb: 243 243 243` · `--hadrian-blue-rgb: 0 37 72` · `--hadrian-gold-rgb: 243 160 0` · `--hadrian-lightblue-rgb: 112 184 253` · `--hadrian-richblue-rgb: 20 64 111` · `--hadrian-gray: rgba(var(--hadrian-gray-rgb)/1)` · `--hadrian-darkgray: rgba(var(--hadrian-darkgray-rgb)/1)` · `--hadrian-lightgray: rgba(var(--hadrian-lightgray-rgb)/1)` · `--hadrian-blue: rgba(var(--hadrian-blue-rgb)/1)` · `--hadrian-gold: rgba(var(--hadrian-gold-rgb)/1)` · `--hadrian-lightblue: rgba(var(--hadrian-lightblue-rgb)/1)` · `--hadrian-richblue: rgba(var(--hadrian-richblue-rgb)/1)` · `--svh: 1svh` · `--dvh: 1vh` · `--gutter-padding: 1rem` · `--gutter-padding-lg: 1.5rem` · `--navbar-height: 76px` · `--inner-content-width: 700px` · `--outer-content-width: 1440px` · `--text-heading: 78px` · `--line-heading: 0.95` · `--letter-heading: -0.02em` · `--text-subheading: 24px` · `--line-subheading: 1` · `--letter-subheading: 0em` · `--text-body: 20px` · `--line-body: 1.07` · `--letter-body: -0.02em` · `--text-eyebrow: 18px` · `--line-eyebrow: 1.25` · `--letter-eyebrow: 0em` · `--spacing-xl: 144px` · `--spacing-lg: 72px` · `--spacing-base: 50px` · `--spacing-sm: 36px` · `--spacing-xs: 18px` · `--spacing-page-upper: 200px` · `--hero-mask-gutter: 1rem`

### Sections

1. `header` at 0px, 76px tall, position fixed · original-390-section-01.png
2. `main` at 0px, 2488px tall — “The Future of American Production” · original-390-section-02.png, original-390-section-03.png
3. `div` at 2488px, 543px tall — “Join us and Reindustrialize America” · original-390-section-04.png
4. `footer` at 3030px, 386px tall · original-390-section-05.png

### Media slots

- section 2: video autoplay, 356×467 (aspect 0.76), fit cover
- section 2: video autoplay loop, 356×200 (aspect 1.78), fit cover
- section 2: video autoplay loop, 390×839 (aspect 0.46), fit cover, **fills the window height**
- section 3: image, 356×338 (aspect 1.05), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 3 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 8 half-screens · 2 elements · e.g. div.fixed.inset-0; div.fixed.inset-0
- section 1: reveal on entering view — translateY 0→-76px, while pinned, at scroll 396–396px · e.g. header.fixed.top-0 “MENU”
- section 2: reveal on entering view — opacity 1.00→0.00, translateY 0→15px, at scroll 396–817px · 5 elements · e.g. span.inline-block.whitespace-pre “The”; span.inline-block.whitespace-pre “Future”; span.inline-block.whitespace-pre “of”
- section 2: reveal on entering view — opacity 1.00→0.00, at scroll 396–817px · e.g. div.overflow-hidden “Factories of the Future to Reindustriali”
- section 3: scrubbed with the scroll — translateX 0→-336px, at scroll 2084–2573px · 4 elements · e.g. div.shrink-0.pr-[30px] “MANUFACTURE THE FUTURE AT HADRIAN”; div.shrink-0.pr-[30px] “MANUFACTURE THE FUTURE AT HADRIAN”; div.shrink-0.pr-[30px] “MANUFACTURE THE FUTURE AT HADRIAN”

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on span.inline-block.whitespace-pre “The”: 500ms (opacity)
- Animation `` on span.inline-block.whitespace-pre “Future”: 500ms (opacity)
- Animation `` on span.inline-block.whitespace-pre “of”: 500ms (opacity)
- Animation `` on span.inline-block.whitespace-pre “American”: 500ms (opacity)
- Animation `` on span.inline-block.whitespace-pre “Production”: 500ms (opacity)
- Animation `` on div.overflow-hidden “Factories of the Future to Reindustriali”: 300ms (opacity)

**:hover rules in the CSS (first 20):**

- `.prose :where(a):not(:where([class~="not-prose"], [class~="not-prose"] *)):hover { text-decoration: underline; }`
- `.hover\:\!bg-hadrian-blue:hover { --tw-bg-opacity: 1 !important; background-color: rgba(var(--hadrian-blue-rgb)/var(--tw-bg-opacity,1)) !important; }`
- `.hover\:bg-hadrian-gold:hover { --tw-bg-opacity: 1; background-color: rgba(var(--hadrian-gold-rgb)/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-hadrian-gold\/20:hover { background-color: rgba(var(--hadrian-gold-rgb)/.2); }`
- `.hover\:bg-white\/5:hover { background-color: rgba(var(--white-rgb)/.05); }`
- `.hover\:\!text-hadrian-gold:hover { --tw-text-opacity: 1 !important; color: rgba(var(--hadrian-gold-rgb)/var(--tw-text-opacity,1)) !important; }`
- `.hover\:text-hadrian-blue:hover { --tw-text-opacity: 1; color: rgba(var(--hadrian-blue-rgb)/var(--tw-text-opacity,1)); }`
- `.hover\:text-hadrian-gold:hover { --tw-text-opacity: 1; color: rgba(var(--hadrian-gold-rgb)/var(--tw-text-opacity,1)); }`
- `.hover\:underline:hover { text-decoration-line: underline; }`
- `.hover\:opacity-100:hover { opacity: 1; }`
- `.hover\:opacity-50:hover { opacity: 0.5; }`
- `.hover\:opacity-60:hover { opacity: 0.6; }`
- `.hover\:opacity-70:hover { opacity: 0.7; }`
- `.hover\:opacity-90:hover { opacity: 0.9; }`
- `.hover\:before\:scale-\[0\.975\]:hover::before { content: var(--tw-content); --tw-scale-x: 0.975; --tw-scale-y: 0.975; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(`
- `.group:hover .group-hover\:scale-105 { --tw-scale-x: 1.05; --tw-scale-y: 1.05; }`
- `.group:hover .group-hover\:scale-105, .group:hover .group-hover\:scale-\[1\.025\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y`
- `.group:hover .group-hover\:scale-\[1\.025\] { --tw-scale-x: 1.025; --tw-scale-y: 1.025; }`
- `.group:hover .group-hover\:border-white { --tw-border-opacity: 1; border-color: rgba(var(--white-rgb)/var(--tw-border-opacity,1)); }`
- `.group:hover .group-hover\:opacity-100 { opacity: 1; }`

### The site's own links

`/` Home · `/about` ABOUT · `/careers` CAREERS · `/press` NEWS · `/contact` CONTACT · `/privacy-policy` PRIVACY POLICY

## 1440px — The Future of American Production | Hadrian (page 3459px tall, window 1440×900)

**Fonts:** `soehneMono` ×20 · `soehne` ×16 · `soehneBreit` ×5

**Loaded faces:** soehneBreit normal normal · soehneBreit Fallback normal normal · soehne 400 normal · soehne 500 normal · soehne 600 normal · soehne Fallback normal normal · soehneMono 400 normal · soehneMono 500 normal · soehneMono 600 normal · soehneMono Fallback normal normal

**Font sizes:** `16px` ×11 · `12px` ×8 · `72px` ×5 · `20px` ×5 · `36px` ×4 · `18px` ×4 · `14px` ×2 · `30px` ×1 · `64px` ×1

**Weights:** `400` ×41

**Size / line height:** `12px / 18px` ×8 · `16px / 17.12px` ×7 · `72px / 72px` ×5 · `20px / 21.4px` ×5 · `16px / 16px` ×4 · `36px / 36px` ×4 · `18px / 18px` ×4 · `14px / 21px` ×2 · `30px / 32.1px` ×1 · `64px / 64px` ×1

**Letter spacing:** `normal` ×19 · `-0.32px` ×6 · `-2.16px` ×5 · `-0.4px` ×5 · `-1.08px` ×4 · `-0.6px` ×1

**Text colours:** `rgb(255, 255, 255)` ×34 · `rgb(243, 160, 0)` ×6 · `rgb(0, 0, 0)` ×1

**Backgrounds:** `rgb(0, 37, 72)` ×1600 · `rgb(112, 184, 253)` ×200 · `rgba(0, 0, 0, 0.6)` ×200 · `rgb(20, 64, 111)` ×200

**Borders:** `1px solid rgb(243, 160, 0)` ×2 · `1px solid rgb(255, 255, 255)` ×2 · `1px solid rgb(229, 231, 235)` ×1

**Gradients:** `linear-gradient(to right bottom, rgb(20, 64, 111), rgb(0, 37, 72))` ×2 · `linear-gradient(to top, rgb(0, 37, 72) 0%, rgba(0, 0, 0, 0) 100%)` ×1 · `linear-gradient(to left, rgb(0, 37, 72), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))` ×1 · `linear-gradient(to right, rgb(0, 37, 72), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))` ×1

**Transitions:** `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×5 · `background-color, transform 0.2s ease-in-out` ×1 · `opacity 0.3s cubic-bezier(0.4` ×1

**:root variables (43):** `--black-rgb: 0 0 0` · `--white-rgb: 255 255 255` · `--off-black: #171717` · `--hadrian-gray-rgb: 231 231 231` · `--hadrian-darkgray-rgb: 138 138 138` · `--hadrian-lightgray-rgb: 243 243 243` · `--hadrian-blue-rgb: 0 37 72` · `--hadrian-gold-rgb: 243 160 0` · `--hadrian-lightblue-rgb: 112 184 253` · `--hadrian-richblue-rgb: 20 64 111` · `--hadrian-gray: rgba(var(--hadrian-gray-rgb)/1)` · `--hadrian-darkgray: rgba(var(--hadrian-darkgray-rgb)/1)` · `--hadrian-lightgray: rgba(var(--hadrian-lightgray-rgb)/1)` · `--hadrian-blue: rgba(var(--hadrian-blue-rgb)/1)` · `--hadrian-gold: rgba(var(--hadrian-gold-rgb)/1)` · `--hadrian-lightblue: rgba(var(--hadrian-lightblue-rgb)/1)` · `--hadrian-richblue: rgba(var(--hadrian-richblue-rgb)/1)` · `--svh: 1svh` · `--dvh: 1vh` · `--gutter-padding: 1rem` · `--gutter-padding-lg: 1.5rem` · `--navbar-height: 76px` · `--inner-content-width: 700px` · `--outer-content-width: 1440px` · `--text-heading: 78px` · `--line-heading: 0.95` · `--letter-heading: -0.02em` · `--text-subheading: 24px` · `--line-subheading: 1` · `--letter-subheading: 0em` · `--text-body: 20px` · `--line-body: 1.07` · `--letter-body: -0.02em` · `--text-eyebrow: 18px` · `--line-eyebrow: 1.25` · `--letter-eyebrow: 0em` · `--spacing-xl: 144px` · `--spacing-lg: 72px` · `--spacing-base: 50px` · `--spacing-sm: 36px` · `--spacing-xs: 18px` · `--spacing-page-upper: 200px` · `--hero-mask-gutter: 1rem`

### Sections

1. `header` at 0px, 100px tall, position fixed · original-1440-section-01.png
2. `main` at 0px, 2620px tall — “The Future of American Production” · original-1440-section-02.png, original-1440-section-03.png
3. `div` at 2620px, 591px tall — “Join us and Reindustrialize America” · original-1440-section-04.png
4. `footer` at 3211px, 248px tall · original-1440-section-05.png

### Media slots

- section 2: video autoplay, 1390×484 (aspect 2.87), fit cover
- section 2: video autoplay loop, 1318×480 (aspect 2.75), fit cover
- section 2: video autoplay loop, 1440×693 (aspect 2.08), fit cover
- section 3: image, 659×382 (aspect 1.73), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 3 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 7 half-screens · 2 elements · e.g. div.fixed.inset-0; div.fixed.inset-0
- section 1: reveal on entering view — translateY 0→-100px, while pinned, at scroll 423–423px · e.g. header.fixed.top-0 “CA 05:32AM PDT AZ 05:32AM MST AL 07:32AM”
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 0→36px, at scroll 423–1322px · 5 elements · e.g. span.inline-block.whitespace-pre “The”; span.inline-block.whitespace-pre “Future”; span.inline-block.whitespace-pre “of”
- section 2: reveal on entering view — opacity 1.00→0.00, at scroll 423–423px · e.g. div.overflow-hidden “Factories of the Future to Reindustriali”
- section 3: scrubbed with the scroll — translateX 0→-155px, at scroll 2222–2559px · 4 elements · e.g. div.shrink-0.pr-[30px] “MANUFACTURE THE FUTURE AT HADRIAN”; div.shrink-0.pr-[30px] “MANUFACTURE THE FUTURE AT HADRIAN”; div.shrink-0.pr-[30px] “MANUFACTURE THE FUTURE AT HADRIAN”

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on span.inline-block.whitespace-pre “The”: 500ms (opacity)
- Animation `` on span.inline-block.whitespace-pre “Future”: 500ms (opacity)
- Animation `` on span.inline-block.whitespace-pre “of”: 500ms (opacity)
- Animation `` on span.inline-block.whitespace-pre “American”: 500ms (opacity)
- Animation `` on span.inline-block.whitespace-pre “Production”: 500ms (opacity)

**On hover:**

- a “ABOUT”: color: rgb(255, 255, 255) → rgb(243, 160, 0) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`
- a “NEWS”: color: rgb(255, 255, 255) → rgb(243, 160, 0) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`
- a “CONTACT”: color: rgb(255, 255, 255) → rgb(243, 160, 0) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`
- a “PRIVACY POLICY”: color: rgb(255, 255, 255) → rgb(243, 160, 0) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`

**:hover rules in the CSS (first 20):**

- `.prose :where(a):not(:where([class~="not-prose"], [class~="not-prose"] *)):hover { text-decoration: underline; }`
- `.hover\:\!bg-hadrian-blue:hover { --tw-bg-opacity: 1 !important; background-color: rgba(var(--hadrian-blue-rgb)/var(--tw-bg-opacity,1)) !important; }`
- `.hover\:bg-hadrian-gold:hover { --tw-bg-opacity: 1; background-color: rgba(var(--hadrian-gold-rgb)/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-hadrian-gold\/20:hover { background-color: rgba(var(--hadrian-gold-rgb)/.2); }`
- `.hover\:bg-white\/5:hover { background-color: rgba(var(--white-rgb)/.05); }`
- `.hover\:\!text-hadrian-gold:hover { --tw-text-opacity: 1 !important; color: rgba(var(--hadrian-gold-rgb)/var(--tw-text-opacity,1)) !important; }`
- `.hover\:text-hadrian-blue:hover { --tw-text-opacity: 1; color: rgba(var(--hadrian-blue-rgb)/var(--tw-text-opacity,1)); }`
- `.hover\:text-hadrian-gold:hover { --tw-text-opacity: 1; color: rgba(var(--hadrian-gold-rgb)/var(--tw-text-opacity,1)); }`
- `.hover\:underline:hover { text-decoration-line: underline; }`
- `.hover\:opacity-100:hover { opacity: 1; }`
- `.hover\:opacity-50:hover { opacity: 0.5; }`
- `.hover\:opacity-60:hover { opacity: 0.6; }`
- `.hover\:opacity-70:hover { opacity: 0.7; }`
- `.hover\:opacity-90:hover { opacity: 0.9; }`
- `.hover\:before\:scale-\[0\.975\]:hover::before { content: var(--tw-content); --tw-scale-x: 0.975; --tw-scale-y: 0.975; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(`
- `.group:hover .group-hover\:scale-105 { --tw-scale-x: 1.05; --tw-scale-y: 1.05; }`
- `.group:hover .group-hover\:scale-105, .group:hover .group-hover\:scale-\[1\.025\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y`
- `.group:hover .group-hover\:scale-\[1\.025\] { --tw-scale-x: 1.025; --tw-scale-y: 1.025; }`
- `.group:hover .group-hover\:border-white { --tw-border-opacity: 1; border-color: rgba(var(--white-rgb)/var(--tw-border-opacity,1)); }`
- `.group:hover .group-hover\:opacity-100 { opacity: 1; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Home · `/about` ABOUT · `/careers` CAREERS · `/press` NEWS · `/contact` CONTACT · `/privacy-policy` PRIVACY POLICY
