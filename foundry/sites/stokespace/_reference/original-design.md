# Design capture: https://stokespace.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Stoke Space — Any Orbit. Any Time. (page 4319px tall, window 390×844)

**Fonts:** `interDisplay` ×68 · `Druk Wide Web` ×4

**Loaded faces:** interDisplay 300 normal · interDisplay 300 italic · interDisplay 400 normal · interDisplay 500 normal · interDisplay 500 italic · interDisplay 700 normal · interDisplay 700 italic · interDisplay Fallback normal normal · lmMono 400 normal · lmMono Fallback normal normal · Druk Wide Web 500 normal

**Font sizes:** `14px` ×39 · `16px` ×23 · `9px` ×5 · `30px` ×3 · `39px` ×1 · `20px` ×1

**Weights:** `300` ×61 · `500` ×6 · `400` ×5

**Size / line height:** `14px / 18.9px` ×39 · `16px / 16px` ×23 · `9px / 12.6px` ×5 · `30px / 26.7px` ×3 · `39px / 34.71px` ×1 · `20px / 20px` ×1

**Letter spacing:** `normal` ×39 · `-0.32px` ×23 · `2.25px` ×5 · `-0.6px` ×3 · `-0.78px` ×1 · `-1px` ×1

**Text colours:** `rgb(242, 242, 242)` ×62 · `rgb(255, 79, 0)` ×5 · `oklab(0.961145 0.00004372 0.0000192523 / 0.3)` ×4 · `rgb(0, 0, 0)` ×1

**Backgrounds:** `oklab(0 0 0 / 0.15)` ×200 · `rgb(0, 0, 0)` ×49 · `oklab(0.961145 0.00004372 0.0000192523 / 0.05)` ×7 · `rgb(242, 242, 242)` ×4 · `oklab(0.961145 0.00004372 0.0000192523 / 0.3)` ×1 · `rgb(175, 115, 255)` ×0 · `rgb(255, 79, 0)` ×0 · `rgb(222, 60, 179)` ×0

**Borders:** `1px solid rgb(242, 242, 242)` ×1

**Radii:** `4px` ×1

**Shadows:** `rgb(255, 79, 0) 0px 0px 9.5px 0px, rgb(255, 79, 0) 0px 0px 7px 0px, rgb(255, 79, 0) 0px 0px 1.9px 0px inset, rgb(255, 79, 0) 0px 0px 3.6px 0px` ×1 · `rgb(222, 60, 179) 0px 0px 9.5px 0px, rgb(222, 60, 179) 0px 0px 7px 0px, rgb(222, 60, 179) 0px 0px 1.9px 0px inset, rgb(222, 60, 179) 0px 0px 3.6px 0px` ×1 · `rgb(175, 115, 255) 0px 0px 9.5px 0px, rgb(175, 115, 255) 0px 0px 7px 0px, rgb(175, 115, 255) 0px 0px 1.9px 0px inset, rgb(175, 115, 255) 0px 0px 3.6px 0px` ×1

**Gradients:** `linear-gradient(to top, rgba(255, 122, 51, 0.85) -18.14%, rgba(255, 79, 0, 0.85) 29.97%, rgba(222, 60, 179, 0.85) 43.88%, rgba(192, 79, 187, 0.71) 52.28%, rgba(162, 97, 195, 0.57) 60.68%, rgba(132, 116, 202, 0.424) 69.09%, rgba(103, 135, 210, 0.282) 77.49%, rgba(73, 153, 218, 0.14) 85.9%, rgba(43, 1` ×1

**Transitions:** `color, background-color, border-color, outline-color, text-d 0.35s cubic-bezier(0.165` ×56 · `opacity 0.35s cubic-bezier(0.77` ×12 · `opacity 0.5s cubic-bezier(0.165` ×5 · `opacity 0.35s cubic-bezier(0.165` ×3 · `clip-path 0.4s cubic-bezier(0.77` ×1 · `color, background-color, border-color, outline-color, text-d 0.4s cubic-bezier(0.77` ×1

### Sections

1. `header` at 0px, 76px tall, position sticky · original-390-section-01.png
2. `section` at 100px, 693px tall — “Seamless mobility to, through, and from space” · original-390-section-02.png
3. `section#reusability` at 863px, 1169px tall — “Full reusability is built in from the start” · original-390-section-03.png
4. `section#nova` at 2102px, 680px tall — “The Future of Space is Built Here” · original-390-section-04.png
5. `section#work-with-stoke` at 2853px, 779px tall — “build with us” · original-390-section-05.png
6. `footer` at 3702px, 617px tall — “Get In Touch” · original-390-section-06.png

### Media slots

- section 2: image, 390×693 (aspect 0.56), fit cover
- section 3: image, 350×197 (aspect 1.78), fit cover
- section 3: image, 350×438 (aspect 0.80), fit cover
- section 4: image, 350×150 (aspect 2.33), fit cover
- section 5: image, 350×263 (aspect 1.33), fit cover
- section 5: image, 350×263 (aspect 1.33), fit cover

### Motion

**Libraries and media seen:** 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 9 half-screens · e.g. div.fixed.bottom-0 “We use cookies to provide and improve se”
- section 1: pinned (sticky), at scroll pinned for 9 half-screens · e.g. header.sticky.top-0 “Nova Pathfinder Block 2 About Us Locatio”
- section 6: reveal on entering view — translateY 488→250px, at scroll 3475–3475px · e.g. div.pointer-events-none.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `border-shimmer` on a.inline-flex.type-p1 “Contact →”: 4000ms, loops forever

**:hover rules in the CSS (first 20):**

- `input:where([type="checkbox"]):checked:focus, input:where([type="checkbox"]):checked:hover, input:where([type="radio"]):checked:focus, input:where([type="radio"]):checked:hover { background-color: currentcolor; border-co`
- `input:where([type="checkbox"]):indeterminate:focus, input:where([type="checkbox"]):indeterminate:hover { background-color: currentcolor; border-color: rgba(0, 0, 0, 0); }`
- `.border-shimmer:hover::before, :where(.group):hover .border-shimmer::before { animation-play-state: running; }`
- `.link-underline:hover { opacity: 0.7; text-decoration-line: none; }`
- `.group-hover\:translate-x-\[0\.15em\]:is(:where(.group):hover *) { --tw-translate-x: .15em; translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\:-translate-y-\[0\.15em\]:is(:where(.group):hover *) { --tw-translate-y: calc(.15em * -1); translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\:opacity-70:is(:where(.group):hover *) { opacity: 0.7; }`
- `.group-hover\/hotspot\:glow-drop:is(:where(.group\/hotspot):hover *) { filter: drop-shadow(0px 0px 9.5px) drop-shadow(0px 0px 7px) drop-shadow(0px 0px 3.6px); }`
- `.group-hover\/item\:translate-x-\[0\.15em\]:is(:where(.group\/item):hover *) { --tw-translate-x: .15em; translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\/item\:bg-white:is(:where(.group\/item):hover *) { background-color: var(--color-white); }`
- `.group-hover\/item\:text-white:is(:where(.group\/item):hover *) { color: var(--color-white); }`
- `.group-hover\/item\:glow:is(:where(.group\/item):hover *) { box-shadow: 0px 0px 9.5px, 0px 0px 7px, 0px 0px 1.9px inset, 0px 0px 3.6px; }`
- `.group-hover\/item\:glow-drop:is(:where(.group\/item):hover *) { filter: drop-shadow(0px 0px 9.5px) drop-shadow(0px 0px 7px) drop-shadow(0px 0px 3.6px); }`
- `.group-hover\/plus\:text-orange:is(:where(.group\/plus):hover *) { color: var(--color-orange); }`
- `.group-hover\/plus\:glow-drop:is(:where(.group\/plus):hover *) { filter: drop-shadow(0px 0px 9.5px) drop-shadow(0px 0px 7px) drop-shadow(0px 0px 3.6px); }`
- `.group-hover\/progress\:translate-y-0:is(:where(.group\/progress):hover *) { --tw-translate-y: 0px; translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\/progress\:translate-y-8:is(:where(.group\/progress):hover *) { --tw-translate-y: calc(var(--spacing) * 8); translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\/progress\:grid-rows-\[1fr\]:is(:where(.group\/progress):hover *) { grid-template-rows: 1fr; }`
- `.group-hover\/progress\:opacity-0:is(:where(.group\/progress):hover *) { opacity: 0; }`
- `.group-hover\/progress\:opacity-100:is(:where(.group\/progress):hover *) { opacity: 1; }`

### The site's own links

`/` Stoke Space — home · `/pathfinder` Pathfinder · `/nova-block-2` Block 2 · `/about-us` About Us · `/locations/kent` Kent · `/locations/moses-lake` Moses Lake · `/locations/cape-canaveral` Cape Canaveral · `/customers/civil` Civil · `/customers/defense` Defense · `/customers/commercial` Commercial · `/our-team` Our Team · `/careers` Careers · `/open-roles` Open Roles · `/internships` Internships · `/elat` ELAT · `/news` News · `/media` Media · `/shopv2` Shop · `/contact-us` Contact → · `/terms-of-use` Terms of Use · `/privacy-policy` Privacy Policy

## 1440px — Stoke Space — Any Orbit. Any Time. (page 5747px tall, window 1440×900)

**Fonts:** `interDisplay` ×68 · `Druk Wide Web` ×4

**Loaded faces:** interDisplay 300 normal · interDisplay 300 italic · interDisplay 400 normal · interDisplay 500 normal · interDisplay 500 italic · interDisplay 700 normal · interDisplay 700 italic · interDisplay Fallback normal normal · lmMono 400 normal · lmMono Fallback normal normal · Druk Wide Web 500 normal

**Font sizes:** `16px` ×44 · `18.8462px` ×18 · `11.4231px` ×5 · `55.8462px` ×2 · `78.5769px` ×1 · `34.8462px` ×1 · `30px` ×1

**Weights:** `300` ×61 · `500` ×6 · `400` ×5

**Size / line height:** `16px / 16px` ×44 · `18.8462px / 22.6154px` ×18 · `11.4231px / 11.4231px` ×3 · `55.8462px / 55.8462px` ×2 · `11.4231px / 15.9923px` ×2 · `78.5769px / 78.5769px` ×1 · `34.8462px / 34.8462px` ×1 · `30px / 30px` ×1

**Letter spacing:** `normal` ×42 · `-0.32px` ×20 · `1.37077px` ×5 · `-1.11692px` ×2 · `-1.57154px` ×1 · `-0.696923px` ×1

**Text colours:** `rgb(242, 242, 242)` ×67 · `oklab(0.961145 0.00004372 0.0000192523 / 0.3)` ×4 · `rgb(0, 0, 0)` ×1

**Backgrounds:** `oklab(0 0 0 / 0.15)` ×177 · `rgb(0, 0, 0)` ×65 · `rgb(242, 242, 242)` ×6 · `oklab(0.961145 0.00004372 0.0000192523 / 0.05)` ×5 · `oklab(0.961145 0.00004372 0.0000192523 / 0.3)` ×2 · `rgb(175, 115, 255)` ×0 · `rgb(255, 79, 0)` ×0 · `rgb(222, 60, 179)` ×0

**Borders:** `1px solid rgb(242, 242, 242)` ×1

**Radii:** `4px` ×1

**Shadows:** `rgb(255, 79, 0) 0px 0px 9.5px 0px, rgb(255, 79, 0) 0px 0px 7px 0px, rgb(255, 79, 0) 0px 0px 1.9px 0px inset, rgb(255, 79, 0) 0px 0px 3.6px 0px` ×1 · `rgb(222, 60, 179) 0px 0px 9.5px 0px, rgb(222, 60, 179) 0px 0px 7px 0px, rgb(222, 60, 179) 0px 0px 1.9px 0px inset, rgb(222, 60, 179) 0px 0px 3.6px 0px` ×1 · `rgb(175, 115, 255) 0px 0px 9.5px 0px, rgb(175, 115, 255) 0px 0px 7px 0px, rgb(175, 115, 255) 0px 0px 1.9px 0px inset, rgb(175, 115, 255) 0px 0px 3.6px 0px` ×1

**Gradients:** `linear-gradient(to top, rgba(255, 122, 51, 0.85) -18.14%, rgba(255, 79, 0, 0.85) 29.97%, rgba(222, 60, 179, 0.85) 43.88%, rgba(192, 79, 187, 0.71) 52.28%, rgba(162, 97, 195, 0.57) 60.68%, rgba(132, 116, 202, 0.424) 69.09%, rgba(103, 135, 210, 0.282) 77.49%, rgba(73, 153, 218, 0.14) 85.9%, rgba(43, 1` ×1

**Transitions:** `color, background-color, border-color, outline-color, text-d 0.35s cubic-bezier(0.165` ×66 · `opacity 0.4s cubic-bezier(0.25` ×23 · `opacity 0.5s cubic-bezier(0.165` ×5 · `opacity 0.35s cubic-bezier(0.165` ×3 · `clip-path 0.35s cubic-bezier(0.77` ×1

### Sections

1. `header` at 0px, 126px tall, position sticky · original-1440-section-01.png
2. `section` at 126px, 826px tall — “Seamless mobility to, through, and from space” · original-1440-section-02.png
3. `section#reusability` at 1092px, 1741px tall — “Full reusability is built in from the start” · original-1440-section-03.png
4. `section#nova` at 2973px, 1155px tall — “The Future of Space is Built Here” · original-1440-section-04.png
5. `section#work-with-stoke` at 4269px, 794px tall — “build with us” · original-1440-section-05.png
6. `footer` at 5203px, 544px tall — “Get In Touch” · original-1440-section-06.png

### Media slots

- section 2: video loop, 1440×810 (aspect 1.78), fit cover
- section 3: image, 1420×609 (aspect 2.33), fit cover
- section 3: image, 700×875 (aspect 0.80), fit cover, **fills the window height**
- section 4: image, 1420×609 (aspect 2.33), fit cover
- section 5: image, 700×525 (aspect 1.33), fit cover
- section 5: image, 700×525 (aspect 1.33), fit cover

### Motion

**Libraries and media seen:** 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 11 half-screens · 2 elements · e.g. a.type-p1.font-medium “Skip to Main Content”; div.fixed.bottom-0 “We use cookies to provide and improve se”
- section 1: pinned (sticky), at scroll pinned for 11 half-screens · e.g. header.sticky.top-0 “Nova Pathfinder Block 2 About Us Locatio”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 900–1350px · 2 elements · e.g. img.absolute.inset-0; img.absolute.inset-0
- section 6: reveal on entering view — translateY 488→239px, at scroll 4847–4847px · e.g. div.pointer-events-none.absolute

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `border-shimmer` on a.inline-flex.type-p1 “Contact →”: 4000ms, loops forever

**On hover:**

- a “Terms of Use”: opacity: 1 → 0.7; decoration: underline → none · transition `all`
- button “I Agree”: color: rgb(242, 242, 242) → rgb(0, 0, 0); background: rgba(0, 0, 0, 0) → rgb(242, 242, 242) · transition `all`
- button “Nova”: color: rgb(242, 242, 242) → rgb(255, 79, 0); border: rgb(242, 242, 242) → rgb(255, 79, 0) · transition `color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), border-color `
- a “About Us”: color: rgb(242, 242, 242) → rgb(255, 79, 0); border: rgb(242, 242, 242) → rgb(255, 79, 0) · transition `color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), border-color `
- button “Stage 1 Engine”: inner color: oklab(0.961145 0.00004372 0.0000192523 / 0.3) → rgb(242, 242, 242); inner border: oklab(0.961145 0.00004372 0.0000192523 / 0.3) → rgb(242, 242, 242) · transition `all`
- a “Let’s Launch →”: color: rgb(242, 242, 242) → rgb(255, 79, 0); border: rgb(242, 242, 242) → rgb(255, 79, 0); inner color: rgb(242, 242, 242) → rgb(255, 79, 0); inner border: rgb(242, 242, 242) → rgb(255, 79, 0) · transition `color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), border-color `
- a “Careers →”: color: rgb(242, 242, 242) → rgb(255, 79, 0); border: rgb(242, 242, 242) → rgb(255, 79, 0); inner color: rgb(242, 242, 242) → rgb(255, 79, 0); inner border: rgb(242, 242, 242) → rgb(255, 79, 0) · transition `color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), border-color `
- a “Contact →”: inner translate: none → 2.82692px · transition `all`
- a “Home”: color: rgb(242, 242, 242) → rgb(255, 79, 0); border: rgb(242, 242, 242) → rgb(255, 79, 0) · transition `color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), border-color `
- a “INFO@STOKESPACE.COM”: opacity: 1 → 0.7 · transition `all`

**:hover rules in the CSS (first 20):**

- `input:where([type="checkbox"]):checked:focus, input:where([type="checkbox"]):checked:hover, input:where([type="radio"]):checked:focus, input:where([type="radio"]):checked:hover { background-color: currentcolor; border-co`
- `input:where([type="checkbox"]):indeterminate:focus, input:where([type="checkbox"]):indeterminate:hover { background-color: currentcolor; border-color: rgba(0, 0, 0, 0); }`
- `.border-shimmer:hover::before, :where(.group):hover .border-shimmer::before { animation-play-state: running; }`
- `.link-underline:hover { opacity: 0.7; text-decoration-line: none; }`
- `.group-hover\:translate-x-\[0\.15em\]:is(:where(.group):hover *) { --tw-translate-x: .15em; translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\:-translate-y-\[0\.15em\]:is(:where(.group):hover *) { --tw-translate-y: calc(.15em * -1); translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\:opacity-70:is(:where(.group):hover *) { opacity: 0.7; }`
- `.group-hover\/hotspot\:glow-drop:is(:where(.group\/hotspot):hover *) { filter: drop-shadow(0px 0px 9.5px) drop-shadow(0px 0px 7px) drop-shadow(0px 0px 3.6px); }`
- `.group-hover\/item\:translate-x-\[0\.15em\]:is(:where(.group\/item):hover *) { --tw-translate-x: .15em; translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\/item\:bg-white:is(:where(.group\/item):hover *) { background-color: var(--color-white); }`
- `.group-hover\/item\:text-white:is(:where(.group\/item):hover *) { color: var(--color-white); }`
- `.group-hover\/item\:glow:is(:where(.group\/item):hover *) { box-shadow: 0px 0px 9.5px, 0px 0px 7px, 0px 0px 1.9px inset, 0px 0px 3.6px; }`
- `.group-hover\/item\:glow-drop:is(:where(.group\/item):hover *) { filter: drop-shadow(0px 0px 9.5px) drop-shadow(0px 0px 7px) drop-shadow(0px 0px 3.6px); }`
- `.group-hover\/plus\:text-orange:is(:where(.group\/plus):hover *) { color: var(--color-orange); }`
- `.group-hover\/plus\:glow-drop:is(:where(.group\/plus):hover *) { filter: drop-shadow(0px 0px 9.5px) drop-shadow(0px 0px 7px) drop-shadow(0px 0px 3.6px); }`
- `.group-hover\/progress\:translate-y-0:is(:where(.group\/progress):hover *) { --tw-translate-y: 0px; translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\/progress\:translate-y-8:is(:where(.group\/progress):hover *) { --tw-translate-y: calc(var(--spacing) * 8); translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\/progress\:grid-rows-\[1fr\]:is(:where(.group\/progress):hover *) { grid-template-rows: 1fr; }`
- `.group-hover\/progress\:opacity-0:is(:where(.group\/progress):hover *) { opacity: 0; }`
- `.group-hover\/progress\:opacity-100:is(:where(.group\/progress):hover *) { opacity: 1; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Stoke Space — home · `/pathfinder` Pathfinder · `/nova-block-2` Block 2 · `/about-us` About Us · `/locations/kent` Kent · `/locations/moses-lake` Moses Lake · `/locations/cape-canaveral` Cape Canaveral · `/customers/civil` Civil · `/customers/defense` Defense · `/customers/commercial` Commercial · `/our-team` Our Team · `/careers` Careers · `/open-roles` Open Roles · `/internships` Internships · `/elat` ELAT · `/news` News · `/media` Media · `/shopv2` Shop · `/contact-us` Contact → · `/terms-of-use` Terms of Use · `/privacy-policy` Privacy Policy
