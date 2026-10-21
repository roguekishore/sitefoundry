# Design capture: https://www.storeyarchitecture.co.uk/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Storey Architecture | Contemporary Residential Design UK (page 11249px tall, window 390×844)

**Fonts:** `New Grotesk` ×114 · `New Grotesk Mono` ×19

**Loaded faces:** New Grotesk 400 normal · New Grotesk 500 normal · New Grotesk Mono 400 normal · New Grotesk Mono 500 normal · Biro 400 normal

**Font sizes:** `16.77px` ×101 · `31.2px` ×21 · `46.8px` ×3 · `3.12px` ×3 · `9.75px` ×2 · `3.9px` ×2 · `58.5px` ×1

**Weights:** `400` ×125 · `500` ×8

**Size / line height:** `16.77px / 20.124px` ×54 · `16.77px / 16.77px` ×47 · `31.2px / 31.2px` ×21 · `46.8px / 46.8px` ×3 · `3.12px / 3.12px` ×3 · `9.75px / 9.75px` ×2 · `3.9px / 3.9px` ×2 · `58.5px / 58.5px` ×1

**Letter spacing:** `-3%` ×114 · `-10%` ×19

**Text colours:** `rgb(255, 255, 255)` ×72 · `rgb(0, 0, 0)` ×35 · `rgb(61, 61, 61)` ×26

**Backgrounds:** `rgb(0, 0, 0)` ×2775 · `rgb(255, 255, 255)` ×1119 · `rgb(61, 61, 61)` ×2 · `rgba(255, 255, 255, 0.3)` ×2 · `rgba(61, 61, 61, 0.5)` ×1

**Borders:** `1px solid rgb(191, 191, 191)` ×3 · `1px solid rgb(61, 61, 61)` ×1

**Gradients:** `linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0))` ×1 · `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))` ×1

**Transitions:** `transform 0.2s cubic-bezier(0` ×10

**:root variables (8):** `--margin: 1.3889vw` · `--gutter: 1.3889vw` · `--color-primary: 255 255 255` · `--color-secondary: 0 0 0` · `--color-form: 254 254 254` · `--color-formSecondary: 61 61 61` · `--font-sans: "New Grotesk",system-ui,sans-serif` · `--font-mono: "New Grotesk Mono",ui-monospace,monospace`

### Sections

1. `div` at 0px, 928px tall — **sized by the window: 110% of the window height** (696px in a 633px window) · original-390-section-01.png
2. `div#intro-section-container` at 928px, 928px tall — **sized by the window: 110% of the window height** (696px in a 633px window) · original-390-section-02.png
3. `div` at 1888px, 1646px tall · original-390-section-03.png
4. `div` at 3534px, 1350px tall — **sized by the window: 160% of the window height** (1013px in a 633px window) · original-390-section-04.png
5. `div` at 4884px, 1105px tall · original-390-section-05.png
6. `div` at 5891px, 1036px tall · original-390-section-06.png
7. `div` at 6928px, 2255px tall · original-390-section-07.png, original-390-section-08.png
8. `div` at 9261px, 1092px tall · original-390-section-09.png
9. `div` at 10353px, 895px tall · original-390-section-10.png

### Media slots

- section 1: image, 410×975 (aspect 0.42), fit cover
- section 1: image, 390×928 (aspect 0.42), fit cover
- section 1: image, 410×975 (aspect 0.42), fit cover
- section 1: image, 410×975 (aspect 0.42), fit cover
- section 3: image, 296×148 (aspect 2.00), fit cover
- section 3: image, 296×148 (aspect 2.00), fit cover
- section 3: image, 296×148 (aspect 2.00), fit cover
- section 4: image, 468×1620 (aspect 0.29), fit cover
- section 5: image, 431×468 (aspect 0.92), fit cover
- section 5: image, 431×374 (aspect 1.15), fit cover
- section 5: image, 431×287 (aspect 1.50), fit cover
- section 6: image, 452×339 (aspect 1.33), fit cover
- section 6: image, 431×323 (aspect 1.33), fit cover
- section 6: image, 452×339 (aspect 1.33), fit cover
- section 6: image, 452×339 (aspect 1.33), fit cover
- section 7: image, 431×431 (aspect 1.00), fit cover
- section 7: image, 431×323 (aspect 1.33), fit cover
- section 7: image, 431×323 (aspect 1.33), fit cover
- section 7: image, 431×502 (aspect 0.86), fit cover
- section 8: image, 359×1014 (aspect 0.35), fit cover
- section 9: image, 468×293 (aspect 1.60), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 26 half-screens · e.g. div.w-full.h-screen
- section -: reveal on entering view — opacity 0.00→1.00, while pinned, at scroll 2109–2531px · e.g. div.w-full.h-auto “Storey Menu”
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 8017–8017px · 14 elements · e.g. span.relative.overflow-y-hidden “Storey designs contemporary homes that p”; span.relative.overflow-y-hidden “Storey brought a level of clarity and in”; div.appear-line-mask “Storey brought a level”
- section 1: scrubbed with the scroll — opacity 1.00→0.60, translateY 0→186px, at scroll 422–1264px · e.g. div.w-full.h-full
- section 1: reveal on entering view — opacity 0.00→1.00, scale 1.10→1.00, at scroll 422–843px · e.g. div.w-full.h-full
- section 1: reveal on entering view — opacity 1.00→0.00, scale 1.00→1.05, at scroll 8017–8017px · e.g. div.w-full.h-full
- section 1: reveal on entering view — opacity 0.00→1.00, scale 1.05→1.00, at scroll 8017–8438px · e.g. div.w-full.h-full
- section 1: reveal on entering view — opacity 0.00→1.00, at scroll 422–843px · e.g. div.col-span-6.sm:col-span-3 “View Projects”
- section 1: reveal on entering view — translateY 9→0px, at scroll 422–422px · e.g. div.appear-line “strong sense of balance naturally indoor”
- section 2: reveal on entering view — translateY 20→0px, at scroll 422–843px · 9 elements · e.g. div.appear-line “We believe architecture should feel calm”; div.appear-line “and deeply connected to the way people l”; div.appear-line “work focuses on creating homes that feel”
- section 2: reveal on entering view — rotate 0→100°, at scroll pinned for 0 half-screens · e.g. div.relative.size-full
- section 3: reveal on entering view — translateY 20→0px, at scroll 422–843px · 4 elements · e.g. div.appear-line “Storey works across private residential”; div.appear-line “architecture, renovations, and interior”; div.appear-line “environments, creating spaces that feel”
- section 4: scrubbed with the scroll — translateY 0→270px, at scroll 2952–5063px · e.g. div.absolute.top-0
- section 4: reveal on entering view — translateY 20→0px, at scroll 422–843px · 8 elements · e.g. div.appear-line “Architecture should enhance the”; div.appear-line “experience of everyday living. We”; div.appear-line “create homes that feel open,”
- section 4: scrubbed with the scroll — translateY 20→0px, at scroll 422–1264px · e.g. div.appear-line “surroundings.”
- section 5: reveal on entering view — translateY 0→423px, translateX 0→179px, at scroll 4641–5063px · e.g. div.absolute.top-0 “Explore Project”
- section 5: reveal on entering view — opacity 0.00→0.00, at scroll 4641–5484px · 3 elements · e.g. div.opacity-0.bg-primary “Explore Project”; div.opacity-0.bg-primary “Explore Project”; div.opacity-0.bg-primary “Explore Project”
- section 5: reveal on entering view — scale 1.00→1.00, at scroll 4641–5063px · 3 elements · e.g. div.w-full.h-full; div.w-full.h-full; div.w-full.h-full
- section 5: reveal on entering view — opacity 1.00→0.00, at scroll 4218–4218px · 3 elements · e.g. div.w-full.h-full; div.w-full.h-full; div.w-full.h-full
- section 5: scrubbed with the scroll — translateY 0→78px, at scroll 4218–5484px · e.g. div.w-full.h-full
- section 5: reveal on entering view — translateY 0→345px, translateX 0→179px, at scroll 5063–5484px · e.g. div.absolute.top-0 “Explore Project”
- section 5: scrubbed with the scroll — translateY 0→62px, at scroll 4641–5907px · e.g. div.w-full.h-full
- section 5: reveal on entering view — translateY 0→279px, translateX 0→179px, at scroll 5484–5907px · e.g. div.absolute.top-0 “Explore Project”
- section 5: scrubbed with the scroll — translateY 0→48px, at scroll 5063–6328px · e.g. div.w-full.h-full
- section 6: scrubbed with the scroll — translateY 0→54px, at scroll 5484–6328px · e.g. div.w-full.h-full
- section 6: reveal on entering view — opacity 1.00→0.00, scale 1.00→1.05, at scroll 6751–6751px · 2 elements · e.g. div.w-full.h-full; div.w-full.h-full
- section 6: reveal on entering view — opacity 0.00→1.00, scale 1.05→1.00, at scroll 6751–7173px · 2 elements · e.g. div.scale-[1.05].opacity-0; div.scale-[1.05].opacity-0
- section 6: reveal on entering view — opacity 1.00→0.00, at scroll 5484–5484px · e.g. div.w-full.h-full
- section 6: reveal on entering view — rotate 0→100°, at scroll pinned for 0 half-screens · e.g. div.relative.size-full
- section 6: reveal on entering view — translateY 20→0px, at scroll 422–843px · 8 elements · e.g. div.appear-line “We collaborate closely with clients, con”; div.appear-line “and craftspeople to ensure every project”; div.appear-line “resolved with precision from concept thr”
- section 6: reveal on entering view — translateY 9→0px, at scroll 422–422px · e.g. div.appear-line “home.”
- section 7: reveal on entering view — translateY 0→438px, translateX 0→179px, at scroll 7173–7595px · e.g. div.absolute.top-0 “Read Post”
- section 7: reveal on entering view — opacity 0.00→0.00, at scroll 7173–7595px · 4 elements · e.g. div.opacity-0.bg-primary “Read Post”; div.opacity-0.bg-primary “Read Post”; div.opacity-0.bg-primary “Read Post”
- section 7: reveal on entering view — scale 1.00→1.00, at scroll 7173–7595px · 4 elements · e.g. div.w-full.h-full; div.w-full.h-full; div.w-full.h-full
- section 7: reveal on entering view — opacity 1.00→0.00, at scroll 6751–6751px · 4 elements · e.g. div.w-full.h-full; div.w-full.h-full; div.w-full.h-full
- section 7: scrubbed with the scroll — translateY 0→72px, at scroll 6751–8017px · e.g. div.w-full.h-full
- section 7: reveal on entering view — translateY 0→338px, translateX 0→179px, at scroll 7595–8017px · e.g. div.absolute.top-0 “Read Post”
- section 7: scrubbed with the scroll — translateY 0→54px, at scroll 7173–8438px · 2 elements · e.g. div.w-full.h-full; div.w-full.h-full
- section 7: reveal on entering view — translateY 0→327px, translateX 0→179px, at scroll 8017–8438px · e.g. div.absolute.top-0 “Read Post”
- section 7: reveal on entering view — translateY 0→449px, translateX 0→179px, at scroll 8438–8861px · e.g. div.absolute.top-0 “Read Post”
- section 7: scrubbed with the scroll — translateY 0→84px, at scroll 8017–9283px · e.g. div.w-full.h-full
- section 7: reveal on entering view — translateY 20→0px, at scroll 422–843px · 6 elements · e.g. div.appear-line “Thoughts, process studies, and residenti”; div.appear-line “projects exploring how contemporary”; div.appear-line “architecture can create calmer, more”
- section 8: scrubbed with the scroll — translateY 0→39px, at scroll 8438–10404px · e.g. div.col-span-9.sm:col-start-4 “01 SPATIAL BRIEF INTAKE 01) Name 02) Ema”
- section 9: reveal on entering view — opacity 1.00→0.00, at scroll 10404–10404px · e.g. div.w-full.h-full
- section 9: reveal on entering view — translateY 0→15px, at scroll 10127–10404px · e.g. div.w-full.h-full
- section 9: pinned (sticky), at scroll pinned for 3 half-screens · e.g. div.w-full.h-[20vw]
- section 9: scrubbed with the scroll — translateY 78→0px, at scroll 9705–10404px · e.g. div.relative.w-full

**:hover rules in the CSS (first 10):**

- `.group:hover .group-hover\:origin-left { transform-origin: left center; }`
- `.group:hover .group-hover\:translate-y-\[-0\.25vw\] { --tw-translate-y: -.25vw; }`
- `.group:hover .group-hover\:rotate-\[-15deg\], .group:hover .group-hover\:translate-y-\[-0\.25vw\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(`
- `.group:hover .group-hover\:rotate-\[-15deg\] { --tw-rotate: -15deg; }`
- `.group:hover .group-hover\:rotate-\[-8deg\] { --tw-rotate: -8deg; }`
- `.group:hover .group-hover\:rotate-\[-8deg\], .group:hover .group-hover\:rotate-\[115deg\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw`
- `.group:hover .group-hover\:rotate-\[115deg\] { --tw-rotate: 115deg; }`
- `.group:hover .group-hover\:rotate-\[9deg\] { --tw-rotate: 9deg; }`
- `.group:hover .group-hover\:rotate-\[9deg\], .group:hover .group-hover\:scale-x-100 { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y`
- `.group:hover .group-hover\:scale-x-100 { --tw-scale-x: 1; }`

## 1440px — Storey Architecture | Contemporary Residential Design UK (page 14174px tall, window 1440×900)

**Fonts:** `New Grotesk` ×137 · `New Grotesk Mono` ×23 · `Biro` ×1

**Loaded faces:** New Grotesk 400 normal · New Grotesk 500 normal · New Grotesk Mono 400 normal · New Grotesk Mono 500 normal · Biro 400 normal

**Font sizes:** `23.04px` ×73 · `15.84px` ×54 · `31.68px` ×16 · `11.52px` ×6 · `14.4px` ×4 · `100.8px` ×3 · `216px` ×3 · `115.2px` ×1 · `21.6px` ×1

**Weights:** `400` ×155 · `500` ×6

**Size / line height:** `23.04px / 27.648px` ×71 · `15.84px / 15.84px` ×54 · `31.68px / 31.68px` ×16 · `11.52px / 11.52px` ×6 · `14.4px / 14.4px` ×4 · `100.8px / 100.8px` ×3 · `216px / 216px` ×3 · `23.04px / 23.04px` ×2 · `115.2px / 115.2px` ×1 · `21.6px / 21.6px` ×1

**Letter spacing:** `-3%` ×137 · `-10%` ×23 · `normal` ×1

**Text colours:** `rgb(255, 255, 255)` ×80 · `rgb(0, 0, 0)` ×45 · `rgb(61, 61, 61)` ×32 · `rgb(230, 230, 230)` ×3 · `rgb(55, 65, 81)` ×1

**Backgrounds:** `rgb(0, 0, 0)` ×4010 · `rgb(255, 255, 255)` ×2763 · `rgb(254, 254, 254)` ×96 · `rgb(61, 61, 61)` ×5 · `rgba(255, 255, 255, 0.3)` ×4 · `rgba(61, 61, 61, 0.5)` ×1

**Borders:** `1px solid rgb(191, 191, 191)` ×3 · `1px solid rgb(61, 61, 61)` ×1

**Gradients:** `linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0))` ×1 · `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))` ×1

**Transitions:** `transform 0.2s cubic-bezier(0` ×16 · `transform 0.5s cubic-bezier(0.4` ×2 · `transform 0.3s cubic-bezier(0.4` ×2

**:root variables (8):** `--margin: 1.3889vw` · `--gutter: 1.3889vw` · `--color-primary: 255 255 255` · `--color-secondary: 0 0 0` · `--color-form: 254 254 254` · `--color-formSecondary: 61 61 61` · `--font-sans: "New Grotesk",system-ui,sans-serif` · `--font-mono: "New Grotesk Mono",ui-monospace,monospace`

### Sections

1. `div` at 0px, 990px tall — **sized by the window: 110% of the window height** (743px in a 675px window) · original-1440-section-01.png
2. `div#intro-section-container` at 990px, 1080px tall — **sized by the window: 120% of the window height** (810px in a 675px window) · original-1440-section-02.png
3. `div` at 2113px, 2148px tall · original-1440-section-03.png, original-1440-section-04.png
4. `div` at 4261px, 1440px tall · original-1440-section-05.png
5. `div` at 5701px, 1940px tall · original-1440-section-06.png
6. `div` at 7281px, 1565px tall · original-1440-section-07.png
7. `div` at 8846px, 2380px tall · original-1440-section-08.png, original-1440-section-09.png
8. `div` at 11514px, 1784px tall · original-1440-section-10.png
9. `div` at 13299px, 876px tall · original-1440-section-11.png

### Media slots

- section 1: image, 1512×1040 (aspect 1.45), fit cover
- section 1: image, 1512×1040 (aspect 1.45), fit cover
- section 1: image, 1440×990 (aspect 1.45), fit cover
- section 1: image, 1512×1040 (aspect 1.45), fit cover
- section 2: image, 251×208 (aspect 1.21), fit cover
- section 2: image, 314×283 (aspect 1.11), fit cover
- section 2: image, 260×278 (aspect 0.94), fit cover
- section 2: image, 229×260 (aspect 0.88), fit cover
- section 2: image, 134×191 (aspect 0.70), fit cover
- section 2: image, 167×144 (aspect 1.16), fit cover
- section 2: image, 146×141 (aspect 1.03), fit cover
- section 2: image, 216×119 (aspect 1.81), fit cover
- section 2: image, 335×864 (aspect 0.39), fit cover, **fills the window height**
- section 2: image, 312×214 (aspect 1.45), fit cover
- section 3: image, 100×481 (aspect 0.21), fit auto
- section 3: image, 114×373 (aspect 0.31), fit auto
- section 3: image, 402×241 (aspect 1.67), fit cover
- section 3: image, 402×241 (aspect 1.67), fit cover
- section 3: image, 402×241 (aspect 1.67), fit cover
- section 4: image, 1728×1728 (aspect 1.00), fit cover
- section 5: image, 828×1210 (aspect 0.68), fit cover
- section 5: image, 828×691 (aspect 1.20), fit cover
- section 5: image, 317×691 (aspect 0.46), fit cover
- section 5: image, 828×552 (aspect 1.50), fit cover
- section 6: image, 869×652 (aspect 1.33), fit cover
- section 6: image, 869×652 (aspect 1.33), fit cover
- section 6: image, 828×621 (aspect 1.33), fit cover
- section 6: image, 869×652 (aspect 1.33), fit cover
- section 7: image, 828×828 (aspect 1.00), fit cover
- section 7: image, 828×621 (aspect 1.33), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 31 half-screens · e.g. div.w-full.h-screen
- section -: reveal on entering view — opacity 0.00→1.00, while pinned, at scroll 2249–2698px · e.g. div.w-full.h-auto “Storey Projects Studio Journal Contact”
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 7198–7198px · 31 elements · e.g. span.relative.overflow-y-hidden “Storey designs contemporary homes that p”; div.appear-line-mask “Storey designs contemporary”; div.appear-line-mask “homes that prioritise clarity and”
- section -: reveal on entering view — translateY 28→0px, at scroll 449–898px · 57 elements · e.g. div.appear-line “We believe architecture should”; div.appear-line “feel calm, lasting, and deeply”; div.appear-line “connected to the way people live.”
- section -: scrubbed with the scroll — translateY 28→0px, at scroll 449–1348px · e.g. div.appear-line “age beautifully over time.”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 9→0px, at scroll 449–6298px · e.g. div.appear-line “shaped by simplicity, natural”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 12→0px, at scroll 449–6298px · e.g. div.appear-line “textures, and a strong sense of”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 17→0px, at scroll 449–6298px · e.g. div.appear-line “balance naturally indoors.”
- section -: scrubbed with the scroll — opacity 1.00→0.00, translateY 16→0px, at scroll 449–4948px · 2 elements · e.g. div.appear-line “Leah Morrison”; div.appear-line “MORRISON & CO”
- section -: reveal on entering view — translateY 11→0px, at scroll 449–449px · 2 elements · e.g. div.appear-line “modern restraint beautifully.”; div.appear-line “residential architecture shaped”
- section -: reveal on entering view — translateY 8→0px, at scroll 449–449px · e.g. div.appear-line “Storey creates contemporary”
- section -: reveal on entering view — translateY 16→0px, at scroll 449–449px · e.g. div.appear-line “through simplicity and”
- section -: reveal on entering view — translateY 21→0px, at scroll 449–449px · e.g. div.appear-line “material-led thinking. Each home”
- section -: reveal on entering view — translateY 26→0px, at scroll 449–449px · e.g. div.appear-line “is designed to feel calm, refined,”
- section 1: scrubbed with the scroll — opacity 1.00→0.60, translateY 0→198px, at scroll 449–1348px · e.g. div.w-full.h-full
- section 1: reveal on entering view — opacity 1.00→0.00, scale 1.00→1.05, at scroll 7198–7198px · e.g. div.w-full.h-full
- section 1: scrubbed with the scroll — opacity 0.00→0.00, scale 1.05→1.05, at scroll 7198–13274px · e.g. div.w-full.h-full
- section 1: reveal on entering view — opacity 0.00→1.00, scale 1.05→1.00, at scroll 13273–13274px · e.g. div.w-full.h-full
- section 2: reveal on entering view — rotate 0→100°, at scroll pinned for 0 half-screens · e.g. div.relative.size-full
- section 2: reveal on entering view — translateY 346→0px, at scroll 898–1348px · e.g. div.w-full.h-[20vw] “HOVER + CLICK TO VISIT PROJECTS”
- section 3: scrubbed with the scroll — translateY 0→144px, at scroll 2698–3598px · e.g. div.w-full.h-fit “Interior Atmosphere We design contempora”
- section 3: scrubbed with the scroll — opacity 0.00→0.40, at scroll 2698–3598px · e.g. div.w-full.h-full
- section 3: reveal on entering view — opacity 1.00→0.00, at scroll 2249–2249px · 3 elements · e.g. div.w-full.h-full; div.w-full.h-full; div.w-full.h-full
- section 3: scrubbed with the scroll — translateY 0→40px, at scroll 2249–3148px · 3 elements · e.g. div.w-full.h-full; div.w-full.h-full; div.w-full.h-full
- section 3: reveal on entering view — translateY 0→144px, at scroll 3598–4048px · 2 elements · e.g. div.w-full.h-fit “Contemporary Homes Our interiors focus o”; div.w-full.h-fit “Landscape Integration Each project is de”
- section 3: reveal on entering view — opacity 0.00→0.40, at scroll 3598–4048px · 2 elements · e.g. div.w-full.h-full; div.w-full.h-full
- section 3: scrubbed with the scroll — translateY 281→432px, at scroll 3148–4948px · e.g. div.w-fit.h-fit
- section 4: scrubbed with the scroll — translateY 0→288px, at scroll 3598–5848px · e.g. div.absolute.top-0
- section 5: reveal on entering view — opacity 1.00→0.00, at scroll 4948–4948px · 3 elements · e.g. div.w-full.h-full; div.w-full.h-full; div.w-full.h-full
- section 5: scrubbed with the scroll — translateY 0→202px, at scroll 4948–6748px · e.g. div.w-full.h-full
- section 5: scrubbed with the scroll — translateY 0→115px, at scroll 4948–6298px · e.g. div.w-full.h-full
- section 5: scrubbed with the scroll — translateY 0→92px, at scroll 6298–7648px · e.g. div.w-full.h-full
- section 6: scrubbed with the scroll — translateY 0→391px, at scroll 6748–8998px · e.g. div.w-full.h-fit “Storey translated our goals into a calm,”
- section 6: scrubbed with the scroll — translateY 0→104px, at scroll 7198–8549px · e.g. div.w-full.h-full
- section 6: reveal on entering view — opacity 1.00→0.00, scale 1.00→1.05, at scroll 5848–5848px · 2 elements · e.g. div.w-full.h-full; div.w-full.h-full
- section 6: reveal on entering view — opacity 0.00→0.00, scale 1.05→1.05, at scroll 5848–12148px · 2 elements · e.g. div.scale-[1.05].opacity-0; div.scale-[1.05].opacity-0
- section 6: reveal on entering view — opacity 0.00→1.00, scale 1.05→1.00, at scroll 12148–12598px · 2 elements · e.g. div.scale-[1.05].opacity-0; div.scale-[1.05].opacity-0
- section 6: reveal on entering view — opacity 1.00→0.00, at scroll 7198–7198px · e.g. div.w-full.h-full
- section 6: reveal on entering view — rotate 0→100°, at scroll pinned for 0 half-screens · e.g. div.relative.size-full
- section 7: reveal on entering view — opacity 1.00→0.00, at scroll 8549–8998px · 4 elements · e.g. div.w-full.h-full; div.w-full.h-full; div.w-full.h-full
- section 7: scrubbed with the scroll — translateY 0→138px, at scroll 8549–10348px · e.g. div.w-full.h-full
- section 7: scrubbed with the scroll — translateY 0→104px, at scroll 8549–9899px · 2 elements · e.g. div.w-full.h-full; div.w-full.h-full
- section 7: scrubbed with the scroll — translateY 0→161px, at scroll 9448–11248px · e.g. div.w-full.h-full
- section 8: scrubbed with the scroll — translateY 0→143px, at scroll 10798–13273px · e.g. div.col-span-9.sm:col-start-4 “01 SPATIAL BRIEF INTAKE Storey 01) Name ”
- section 9: reveal on entering view — opacity 1.00→0.00, at scroll 13048–13048px · e.g. div.w-full.h-full
- section 9: scrubbed with the scroll — translateY 0→49px, at scroll 12598–13273px · e.g. div.w-full.h-full
- section 9: pinned (sticky), at scroll pinned for 2 half-screens · e.g. div.w-full.h-[20vw]
- section 9: scrubbed with the scroll — translateY 288→0px, at scroll 12598–13273px · e.g. div.relative.w-full

**On hover:**

- a “View Projects”: inner transform: matrix(1, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 7.2, 0) · transition `all`
- a “View Posts”: inner transform: matrix(1, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 7.2, 0) · transition `all`

**:hover rules in the CSS (first 10):**

- `.group:hover .group-hover\:origin-left { transform-origin: left center; }`
- `.group:hover .group-hover\:translate-y-\[-0\.25vw\] { --tw-translate-y: -.25vw; }`
- `.group:hover .group-hover\:rotate-\[-15deg\], .group:hover .group-hover\:translate-y-\[-0\.25vw\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(`
- `.group:hover .group-hover\:rotate-\[-15deg\] { --tw-rotate: -15deg; }`
- `.group:hover .group-hover\:rotate-\[-8deg\] { --tw-rotate: -8deg; }`
- `.group:hover .group-hover\:rotate-\[-8deg\], .group:hover .group-hover\:rotate-\[115deg\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw`
- `.group:hover .group-hover\:rotate-\[115deg\] { --tw-rotate: 115deg; }`
- `.group:hover .group-hover\:rotate-\[9deg\] { --tw-rotate: 9deg; }`
- `.group:hover .group-hover\:rotate-\[9deg\], .group:hover .group-hover\:scale-x-100 { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y`
- `.group:hover .group-hover\:scale-x-100 { --tw-scale-x: 1; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits
