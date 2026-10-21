# Design capture: https://ledup.pt/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Ledup (page 4881px tall, window 390×844)

**Fonts:** `Poppins` ×56

**Loaded faces:** Poppins 100 normal · Poppins 200 normal · Poppins 300 normal · Poppins 400 normal · Poppins 500 normal · Poppins 600 normal · Poppins 700 normal · Poppins 800 normal · Poppins 900 normal · Poppins Fallback normal normal

**Font sizes:** `14px` ×20 · `16px` ×14 · `11px` ×10 · `12px` ×4 · `28px` ×2 · `36px` ×2 · `32px` ×1 · `34px` ×1 · `13px` ×1 · `18px` ×1

**Weights:** `400` ×34 · `500` ×17 · `600` ×2 · `275` ×2 · `300` ×1

**Size / line height:** `14px / 20px` ×14 · `11px / normal` ×10 · `16px / 20.8px` ×5 · `16px / 19.2px` ×4 · `14px / 22.4px` ×3 · `16px / 22.4px` ×3 · `16px / normal` ×2 · `28px / 33.6px` ×2 · `14px / 18.9px` ×2 · `36px / 43.2px` ×2

**Letter spacing:** `normal` ×55 · `-1px` ×1

**Text colours:** `rgb(255, 255, 255)` ×26 · `rgb(250, 250, 250)` ×15 · `rgb(75, 66, 59)` ×9 · `rgb(161, 148, 140)` ×3 · `rgb(140, 132, 126)` ×1 · `rgb(70, 64, 60)` ×1 · `rgb(0, 0, 0)` ×1

**Backgrounds:** `rgb(255, 255, 255)` ×375 · `rgb(238, 238, 238)` ×292 · `rgb(85, 77, 70)` ×200 · `rgb(95, 87, 81)` ×200 · `rgb(105, 98, 92)` ×200 · `rgb(115, 108, 103)` ×200 · `rgb(79, 71, 65)` ×189 · `rgb(73, 73, 73)` ×6 · `rgb(231, 222, 214)` ×0 · `rgb(75, 66, 59)` ×0

**Borders:** `1px solid rgb(255, 255, 255)` ×3 · `1px solid rgb(140, 132, 126)` ×3 · `1px solid rgb(75, 66, 59)` ×1

**Radii:** `100%` ×40 · `20px` ×16 · `16px` ×8 · `50px` ×7 · `24px` ×6 · `999px` ×3 · `10px` ×1 · `0px 0px 24px 24px` ×1 · `50px 50px 0px 0px` ×1

**Shadows:** `rgb(239, 239, 239) 0px 0.1px 20px 0px` ×3

**Gradients:** `linear-gradient(90deg, rgb(208, 208, 208), rgb(255, 255, 255) 58.65%)` ×1

**Transitions:** `transform, opacity 0.5s ease` ×20 · `color 0.18s ease` ×15 · `background-color, color 0.3s ease` ×3 · `transform 0.4s ease` ×3 · `color, background-color 0.12s ease-in-out` ×1

**:root variables (15):** `--clr-white: #fff` · `--clr-bg: #f6f6f6` · `--clr-black: #000000` · `--clr-main: #4b423b` · `--clr-main-50: #fafafa` · `--clr-main-100: #f5f4f4` · `--clr-main-200: #efeded` · `--clr-main-300: #e2dedb` · `--clr-main-400: #beb5ae` · `--clr-main-500: #a69d98` · `--clr-main-600: #a1948c` · `--clr-main-700: #736c67` · `--clr-main-900: #3b352f` · `--clr-gray-neutral-600: #8c847e` · `--clr-gray-neutral-800: #46403c`

### Sections

1. `section` at 0px, 675px tall — **sized by the window: 80% of the window height** (506px in a 633px window) — “Ideias que iluminam o caminho.” · original-390-section-01.png
2. `section` at 675px, 1437px tall — “A informação certa no momento certo.” · original-390-section-02.png
3. `section` at 2112px, 579px tall — “Ideias que iluminam o caminho.” · original-390-section-03.png
4. `section` at 2691px, 806px tall — “Compromisso com a Excelência” · original-390-section-04.png
5. `section` at 3520px, 743px tall — **sized by the window: 88% of the window height** (557px in a 633px window) — “Para quem exige mais da iluminação” · original-390-section-05.png
6. `div` at 4303px, 578px tall — “A confiança que ilumina os seus projetos.” · original-390-section-06.png

### Media slots

- section 1: background image, 390×675 (aspect 0.58), fit cover, radius 0px 0px 24px 24px
- section 2: background image, 360×160 (aspect 2.25), fit cover, radius 20px
- section 2: video autoplay loop, 360×160 (aspect 2.25), fit cover
- section 2: background image, 360×160 (aspect 2.25), fit cover, radius 20px
- section 2: background image, 360×160 (aspect 2.25), fit cover, radius 20px
- section 3: image, 312×234 (aspect 1.33), fit cover, radius 16px
- section 3: image, 312×234 (aspect 1.33), fit cover, radius 16px
- section 3: image, 312×234 (aspect 1.33), fit cover, radius 16px
- section 3: image, 312×234 (aspect 1.33), fit cover, radius 16px
- section 4: image, 390×450 (aspect 0.87), fit cover, radius 20px
- section 4: image, 390×450 (aspect 0.87), fit cover, radius 20px
- section 5: image, 318×240 (aspect 1.32), fit cover, radius 20px
- section 5: image, 318×240 (aspect 1.32), fit cover, radius 20px
- section 5: image, 318×240 (aspect 1.32), fit cover, radius 20px
- section 5: image, 318×240 (aspect 1.32), fit cover, radius 20px
- section 5: image, 318×240 (aspect 1.32), fit cover, radius 20px
- section 6: video autoplay loop, 390×578 (aspect 0.68), fit cover

### Motion

**Libraries and media seen:** 2 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 10 half-screens · 5 elements · e.g. div.header__outter_wrapper_global; div.MegaMenu_megaMenu__pcYEY; div
- section 2: reveal on entering view — opacity 0.00→0.00, translateY 22→22px, at scroll 422–2532px · e.g. p.small_text “Destaques”
- section 2: reveal on entering view — opacity 0.00→0.00, translateY 67→67px, at scroll 422–2532px · e.g. h1.primary_text “A informação certa no momento certo.”
- section 2: reveal on entering view — opacity 0.00→0.00, at scroll 422–2532px · 8 elements · e.g. p.secundary_text “Acesso rápido a fichas técnicas, catálog”; div “Fichas Tecnicas”; div “Luminaria Rua ATHENA”
- section 2: reveal on entering view — rotate 0→0°, at scroll pinned for 0 half-screens · e.g. svg
- section 3: reveal on entering view — opacity 0.00→0.00, translateY 24→24px, at scroll 2110–2954px · 2 elements · e.g. div “Projetos Ideias que iluminam o caminho.”; div “NEXUS 3CCT Conetor 3CCT EM "T" p/ NEXUS ”
- section 4: reveal on entering view — opacity 0.00→0.00, translateY 24→24px, at scroll 2532–3798px · 3 elements · e.g. p “Sobre Nós”; h1 “Compromisso com a Excelência”; a “Saber Mais”
- section 4: reveal on entering view — opacity 0.00→0.00, at scroll 2532–3798px · e.g. p “Há mais de 10 anos a ser uma referência ”
- section 4: reveal on entering view — scale 0.70→1.00, at scroll 2532–2954px · e.g. div
- section 4: reveal on entering view — scale 1.00→1.00, at scroll 2532–2954px · e.g. div
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 2954–2954px · e.g. div

**:hover rules in the CSS (first 20):**

- `#smooth-content::-webkit-scrollbar-thumb:hover, #smooth-wrapper::-webkit-scrollbar-thumb:hover, body::-webkit-scrollbar-thumb:hover, html::-webkit-scrollbar-thumb:hover { background: var(--clr-main-700); }`
- `.Footer_linkItem__iIOF1:hover { color: rgb(255, 255, 255); }`
- `.Footer_accLinkWrap__4zboj .Footer_linkItem__iIOF1:hover { opacity: 1; }`
- `.Header_searchBtn__37mWT.Header_active__5wQFd, .Header_searchBtn__37mWT:hover { background: var(--clr-main); }`
- `.SecundaryMenu_open_menu_container__rie3K .SecundaryMenu_info_menu__MS07H .SecundaryMenu_menu_content__DaE_5 .SecundaryMenu_bottom__wDduu a .SecundaryMenu_link__52tcH:hover svg { transform: rotate(45deg); }`
- `.SecundaryMenu_open_menu_container__rie3K .SecundaryMenu_info_menu__MS07H .SecundaryMenu_menu_content__DaE_5 .SecundaryMenu_bottom__wDduu a .SecundaryMenu_link__52tcH:hover svg path { stroke: var(--clr-white); }`
- `.SecundaryMenu_open_menu_container__rie3K .SecundaryMenu_info_menu__MS07H .SecundaryMenu_menu_content__DaE_5 .SecundaryMenu_menu_btn__OFNMu.SecundaryMenu_active__XhfAf, .SecundaryMenu_open_menu_container__rie3K .Secundar`
- `.CartDrawer_closeBtn__2niR_:hover { background: var(--clr-main-300); }`
- `.CartDrawer_exploreBtn__hi44X:hover { opacity: 0.85; }`
- `.CartDrawer_removeBtn__jxfco:hover { color: rgb(176, 0, 32); background: rgb(255, 234, 237); }`
- `.CartDrawer_qtyControl__ftBsH button:hover:not(:disabled) { background: var(--clr-main-100); }`
- `.CartDrawer_checkoutBtn__lQFvn:hover { background: var(--clr-main-900); }`
- `.Button_primary__swzAa:hover { background-color: rgba(68, 60, 54, 0.8); }`
- `.Button_primary-light__CzYlq:hover { background-color: rgba(68, 60, 54, 0.8); }`
- `.Button_primary-light-2__DmtGK:hover { background-color: rgba(68, 60, 54, 0.8); }`
- `.Button_secondary__pFIlL:hover { background-color: rgba(95, 73, 58, 0.64); border-color: rgba(95, 73, 58, 0.64); color: var(--clr-white); }`
- `.Button_secondary__pFIlL:hover .Button_button_icon__GKPE5 path, .Button_secondary__pFIlL:hover svg path { stroke: var(--clr-white); }`
- `.Button_menu__eRKhD:hover { background-color: var(--clr-main-300); }`
- `.Button_contact__SfRAu:hover { background-color: var(--clr-main-50); backdrop-filter: blur(25px); border: 1px solid var(--clr-main); color: var(--clr-main); }`
- `.MegaMenu_megaMenu__pcYEY .MegaMenu_left_column__Fta0E .MegaMenu_parent_item__e1inR:hover::after { --after-scale: 1; }`

## 1440px — Ledup (page 5688px tall, window 1440×900)

**Fonts:** `Poppins` ×68

**Loaded faces:** Poppins 100 normal · Poppins 200 normal · Poppins 300 normal · Poppins 400 normal · Poppins 500 normal · Poppins 600 normal · Poppins 700 normal · Poppins 800 normal · Poppins 900 normal · Poppins Fallback normal normal

**Font sizes:** `14px` ×43 · `36px` ×7 · `16px` ×6 · `12px` ×5 · `18px` ×3 · `57.6px` ×1 · `20.9px` ×1 · `10px` ×1 · `51.84px` ×1

**Weights:** `400` ×48 · `500` ×12 · `600` ×5 · `275` ×2 · `300` ×1

**Size / line height:** `14px / 20px` ×17 · `14px / normal` ×10 · `14px / 22.4px` ×9 · `36px / 43.2px` ×7 · `14px / 18px` ×6 · `16px / 22.4px` ×3 · `12px / 18px` ×3 · `16px / normal` ×2 · `18px / 24.3px` ×2 · `12px / 16px` ×2

**Letter spacing:** `normal` ×68

**Text colours:** `rgb(250, 250, 250)` ×20 · `rgb(75, 66, 59)` ×17 · `rgba(255, 255, 255, 0.85)` ×14 · `rgb(255, 255, 255)` ×13 · `rgb(161, 148, 140)` ×3 · `rgb(0, 0, 0)` ×1

**Backgrounds:** `rgb(255, 255, 255)` ×474 · `rgb(79, 71, 65)` ×200 · `rgb(85, 77, 70)` ×200 · `rgb(95, 87, 81)` ×200 · `rgb(105, 98, 92)` ×200 · `rgb(115, 108, 103)` ×200 · `rgb(73, 73, 73)` ×17 · `rgba(95, 73, 58, 0.64)` ×9 · `rgb(75, 66, 59)` ×0

**Borders:** `1px solid rgb(255, 255, 255)` ×3 · `1px solid rgb(161, 148, 140)` ×2 · `1px solid rgb(75, 66, 59)` ×1

**Radii:** `100%` ×40 · `20px` ×31 · `50px` ×10 · `16px` ×4 · `100px` ×1 · `0px 0px 50px 50px` ×1 · `50px 50px 0px 0px` ×1

**Shadows:** `rgb(239, 239, 239) 0px 0.1px 20px 0px` ×3

**Gradients:** `linear-gradient(90.48deg, rgba(255, 255, 255, 0.64) -4.41%, rgba(244, 244, 244, 0.64) 100.38%)` ×1 · `linear-gradient(90deg, rgb(208, 208, 208), rgb(255, 255, 255) 58.65%)` ×1

**Transitions:** `transform, opacity 0.5s ease` ×20 · `color 0.18s ease` ×15 · `color, background-color 0.12s ease-in-out` ×9 · `transform, box-shadow 0.28s cubic-bezier(0.22` ×3 · `transform 0.35s ease` ×3 · `transform 0.8s ease` ×1

**:root variables (15):** `--clr-white: #fff` · `--clr-bg: #f6f6f6` · `--clr-black: #000000` · `--clr-main: #4b423b` · `--clr-main-50: #fafafa` · `--clr-main-100: #f5f4f4` · `--clr-main-200: #efeded` · `--clr-main-300: #e2dedb` · `--clr-main-400: #beb5ae` · `--clr-main-500: #a69d98` · `--clr-main-600: #a1948c` · `--clr-main-700: #736c67` · `--clr-main-900: #3b352f` · `--clr-gray-neutral-600: #8c847e` · `--clr-gray-neutral-800: #46403c`

### Sections


### Media slots

- section -: background image, 1440×900 (aspect 1.60), fit cover, radius 0px 0px 50px 50px, **fills the window height**
- section -: background image, 408×260 (aspect 1.57), fit cover, radius 20px
- section -: image, 150×150 (aspect 1.00), fit contain, radius 20px
- section -: video autoplay loop, 190×127 (aspect 1.50), fit cover
- section -: background image, 299×220 (aspect 1.36), fit cover, radius 20px
- section -: image, 150×150 (aspect 1.00), fit contain, radius 20px
- section -: background image, 626×300 (aspect 2.09), fit cover, radius 20px
- section -: image, 150×150 (aspect 1.00), fit contain, radius 20px
- section -: image, 480×360 (aspect 1.33), fit cover, radius 16px
- section -: image, 480×360 (aspect 1.33), fit cover, radius 16px
- section -: image, 480×360 (aspect 1.33), fit cover, radius 16px
- section -: image, 480×360 (aspect 1.33), fit cover, radius 16px
- section -: image, 1440×720 (aspect 2.00), fit cover, radius 20px
- section -: image, 1440×720 (aspect 2.00), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: image, 329×384 (aspect 0.86), fit cover, radius 20px
- section -: video autoplay loop, 1440×540 (aspect 2.67), fit cover

### Motion

**Libraries and media seen:** 2 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 11 half-screens · 4 elements · e.g. div.header__outter_wrapper_global “Produtos & Aplicações Documentos Técnico”; div.MegaMenu_megaMenu__pcYEY; div “Ideias que iluminam o caminho. Cada proj”
- section -: scrubbed with the scroll — translateY 0→-4788px, at scroll 450–4788px · e.g. div “Ideias que iluminam o caminho. Cada proj”
- section -: reveal on entering view — opacity 0.00→0.00, translateY 22→22px, at scroll 900–2250px · e.g. p.small_text “Destaques”
- section -: reveal on entering view — opacity 0.00→0.00, translateY 43→43px, at scroll 900–2250px · e.g. h1.primary_text “A informação certa no momento certo.”
- section -: reveal on entering view — opacity 0.00→0.00, translateY 45→45px, at scroll 900–2250px · e.g. p.secundary_text “Acesso rápido a fichas técnicas, catálog”
- section -: reveal on entering view — opacity 0.00→0.00, translateY 40→40px, at scroll 1350–2250px · 4 elements · e.g. div “Fichas Tecnicas”; div “Luminaria Rua ATHENA Multi Potencia (60/”; div “Catálogo 2025 Explore a nossa gama compl”
- section -: reveal on entering view — opacity 0.00→0.00, at scroll 1350–1800px · 2 elements · e.g. div “Multi Potencia (60/80/100W) 3CCT (2700/4”; p “Explore a nossa gama completa.”
- section -: reveal on entering view — opacity 0.00→1.00, translateY 40→0px, at scroll 1800–2250px · 3 elements · e.g. div “102 Lojas em território nacional”; div.CardRevendedores_card__XeiZ4 “Revendedores”; div “ONYX 3CCT”
- section -: reveal on entering view — translateY 20→20px, at scroll 1350–2250px · e.g. div “Catálogo 2025 Explore a nossa gama compl”
- section -: scrubbed with the scroll — opacity 0.00→0.00, translateY 24→24px, at scroll 1800–3600px · e.g. svg
- section -: reveal on entering view — opacity 0.00→0.00, translateY 24→24px, at scroll 1800–3150px · 6 elements · e.g. div “Projetos Ideias que iluminam o caminho. ”; div “NEXUS 3CCT Conetor 3CCT EM "T" p/ NEXUS ”; p “Sobre Nós”
- section -: reveal on entering view — scale 0.70→1.00, at scroll 2700–3150px · e.g. div
- section -: reveal on entering view — scale 1.00→1.00, at scroll 2700–3150px · e.g. div
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 3150–3600px · e.g. div

**On hover:**

- button “Produtos & Aplicações”: background: rgba(0, 0, 0, 0) → rgb(226, 222, 219) · transition `color 0.12s ease-in-out, background-color 0.1s ease-in-out`
- button “Documentos Técnicos”: background: rgba(0, 0, 0, 0) → rgb(226, 222, 219) · transition `color 0.12s ease-in-out, background-color 0.1s ease-in-out`
- button “Contacto”: background: rgba(95, 73, 58, 0.64) → rgba(68, 60, 54, 0.8) · transition `color 0.12s ease-in-out, background-color 0.1s ease-in-out`
- button: background: rgba(95, 73, 58, 0.64) → rgba(68, 60, 54, 0.8) · transition `color 0.12s ease-in-out, background-color 0.1s ease-in-out`
- a: inner background: rgba(0, 0, 0, 0) → rgba(227, 227, 227, 0.89) · transition `all`
- a “Luminaria Rua ATHENA Multi Potencia (60/”: inner transform: matrix(1, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 0, -6); inner shadow: rgb(239, 239, 239) 0px 0.1px 20px 0px → rgba(0, 0, 0, 0.1) 0px 12px 28px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px · transition `all`
- a: inner background: rgba(0, 0, 0, 0) → rgba(223, 223, 223, 0.875) · transition `all`
- a “ONYX 3CCT”: inner transform: matrix(1, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 0, -6); inner shadow: rgb(239, 239, 239) 0px 0.1px 20px 0px → rgba(0, 0, 0, 0.1) 0px 12px 28px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px · transition `all`
- button “Saber Mais”: color: rgb(75, 66, 59) → rgb(255, 255, 255); background: rgba(0, 0, 0, 0) → rgba(95, 73, 58, 0.64); border: rgb(75, 66, 59) → rgba(95, 73, 58, 0.64); inner color: rgb(75, 66, 59) → rgb(255, 255, 255); inner border: rgb(75, 66, 59) → rgb(255, 255, 255) · transition `color 0.12s ease-in-out, background-color 0.1s ease-in-out`
- a “Novidades”: color: rgba(255, 255, 255, 0.85) → rgb(255, 255, 255); border: rgba(255, 255, 255, 0.85) → rgb(255, 255, 255) · transition `color 0.18s`

**:hover rules in the CSS (first 20):**

- `#smooth-content::-webkit-scrollbar-thumb:hover, #smooth-wrapper::-webkit-scrollbar-thumb:hover, body::-webkit-scrollbar-thumb:hover, html::-webkit-scrollbar-thumb:hover { background: var(--clr-main-700); }`
- `.Footer_linkItem__iIOF1:hover { color: rgb(255, 255, 255); }`
- `.Footer_accLinkWrap__4zboj .Footer_linkItem__iIOF1:hover { opacity: 1; }`
- `.Header_searchBtn__37mWT.Header_active__5wQFd, .Header_searchBtn__37mWT:hover { background: var(--clr-main); }`
- `.SecundaryMenu_open_menu_container__rie3K .SecundaryMenu_info_menu__MS07H .SecundaryMenu_menu_content__DaE_5 .SecundaryMenu_bottom__wDduu a .SecundaryMenu_link__52tcH:hover svg { transform: rotate(45deg); }`
- `.SecundaryMenu_open_menu_container__rie3K .SecundaryMenu_info_menu__MS07H .SecundaryMenu_menu_content__DaE_5 .SecundaryMenu_bottom__wDduu a .SecundaryMenu_link__52tcH:hover svg path { stroke: var(--clr-white); }`
- `.SecundaryMenu_open_menu_container__rie3K .SecundaryMenu_info_menu__MS07H .SecundaryMenu_menu_content__DaE_5 .SecundaryMenu_menu_btn__OFNMu.SecundaryMenu_active__XhfAf, .SecundaryMenu_open_menu_container__rie3K .Secundar`
- `.CartDrawer_closeBtn__2niR_:hover { background: var(--clr-main-300); }`
- `.CartDrawer_exploreBtn__hi44X:hover { opacity: 0.85; }`
- `.CartDrawer_removeBtn__jxfco:hover { color: rgb(176, 0, 32); background: rgb(255, 234, 237); }`
- `.CartDrawer_qtyControl__ftBsH button:hover:not(:disabled) { background: var(--clr-main-100); }`
- `.CartDrawer_checkoutBtn__lQFvn:hover { background: var(--clr-main-900); }`
- `.Button_primary__swzAa:hover { background-color: rgba(68, 60, 54, 0.8); }`
- `.Button_primary-light__CzYlq:hover { background-color: rgba(68, 60, 54, 0.8); }`
- `.Button_primary-light-2__DmtGK:hover { background-color: rgba(68, 60, 54, 0.8); }`
- `.Button_secondary__pFIlL:hover { background-color: rgba(95, 73, 58, 0.64); border-color: rgba(95, 73, 58, 0.64); color: var(--clr-white); }`
- `.Button_secondary__pFIlL:hover .Button_button_icon__GKPE5 path, .Button_secondary__pFIlL:hover svg path { stroke: var(--clr-white); }`
- `.Button_menu__eRKhD:hover { background-color: var(--clr-main-300); }`
- `.Button_contact__SfRAu:hover { background-color: var(--clr-main-50); backdrop-filter: blur(25px); border: 1px solid var(--clr-main); color: var(--clr-main); }`
- `.MegaMenu_megaMenu__pcYEY .MegaMenu_left_column__Fta0E .MegaMenu_parent_item__e1inR:hover::after { --after-scale: 1; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits
