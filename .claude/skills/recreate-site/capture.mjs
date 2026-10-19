// Captures a page for recreation, at phone (390) and desktop (1440) width:
//   - screenshots: the first screen, the whole page, each section at full resolution, and
//     frames taken while scrolling (to see reveals, pinned sections and other scroll effects);
//   - a summary of its design language: colours, fonts, sizes, radii, shadows, sections;
//   - which sections are sized by the window (100vh-style) rather than by their content;
//   - motion: what changes while scrolling, looping animations, hover changes, libraries seen;
//   - media slots (images, video, canvas), the site's own links, and horizontal overflow.
//
//   node .claude/skills/recreate-site/capture.mjs <url> <out-dir> [label]
//
// label defaults to "original". Use "ours" with the gallery's preview URL to compare:
//   node .claude/skills/recreate-site/capture.mjs "http://localhost:4400/preview.html?site=huly&theme=huly-theme&mode=dark" foundry/sites/huly/_reference ours
// For another page of the site, put its name in the label: original-pricing / ours-pricing.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, resolve } from "node:path";

const require = createRequire(resolve("package.json"));
const { chromium } = require("playwright");

const [url, outDir, label = "original"] = process.argv.slice(2);
if (!url || !outDir) {
  console.error("usage: node capture.mjs <url> <out-dir> [label]");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
// Section crops and scroll frames from an earlier capture with this label would mix with the new ones.
for (const f of readdirSync(outDir)) {
  if (new RegExp(`^${label}-\\d+-(section|scroll)-\\d+\\.png$`).test(f)) rmSync(join(outDir, f));
}

const WIDTHS = [
  { name: "390", width: 390, height: 844, mobile: true },
  { name: "1440", width: 1440, height: 900, mobile: false },
];
const OVERFLOW_WIDTHS = [360, 768, 1024];
const MAX_SCROLL_FRAMES = 16;
const MAX_CROP = 2000; // px per section crop; taller sections are cut into several

const browser = await chromium.launch();
const summary = {};
try {
  for (const w of WIDTHS) {
    const context = await browser.newContext({
      viewport: { width: w.width, height: w.height },
      deviceScaleFactor: 1,
      isMobile: w.mobile,
      hasTouch: w.mobile,
      userAgent: w.mobile
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1"
        : undefined,
    });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: "networkidle", timeout: 90_000 }).catch(() => page.waitForLoadState("load"));
    await page.waitForTimeout(1500);

    // Scroll through once, slowly, with the wheel (smooth-scroll libraries listen to it), taking a
    // motion sample every half screen and a frame every screen. This also loads lazy content.
    await page.evaluate(motionProbe);
    await page.evaluate(() => window.__cap.sample());
    const step = Math.round(w.height / 2);
    let frames = 0;
    for (let i = 1; i < 200; i++) {
      const before = await page.evaluate(() => scrollY);
      await page.mouse.move(w.width / 2, w.height / 2);
      await page.mouse.wheel(0, step).catch(() => {});
      await page.waitForTimeout(450);
      let after = await page.evaluate(() => scrollY);
      if (after === before) {
        await page.evaluate((s) => window.scrollBy(0, s), step);
        await page.waitForTimeout(450);
        after = await page.evaluate(() => scrollY);
      }
      await page.evaluate(() => window.__cap.sample());
      if (i % 2 === 0 && frames < MAX_SCROLL_FRAMES) {
        frames++;
        await page.screenshot({ path: join(outDir, `${label}-${w.name}-scroll-${pad(frames)}.png`) });
      }
      if (after === before) break; // the bottom
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);

    // The first screen, and the whole page.
    await page.screenshot({ path: join(outDir, `${label}-${w.name}-fold.png`) });
    await page.screenshot({ path: join(outDir, `${label}-${w.name}-full.png`), fullPage: true });

    const design = await page.evaluate(extractDesign);
    design.motion = await page.evaluate(() => window.__cap.report());

    // Each section at full resolution (the full-page image is shrunk when you look at it).
    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    let crop = 0;
    for (const s of design.sections) {
      for (let top = s.top; top < s.top + s.height && crop < 40; top += MAX_CROP) {
        const height = Math.min(MAX_CROP, s.top + s.height - top, pageHeight - top);
        if (height < 20) break;
        crop++;
        s.crops = [...(s.crops ?? []), `${label}-${w.name}-section-${pad(crop)}.png`];
        await page
          .screenshot({ path: join(outDir, `${label}-${w.name}-section-${pad(crop)}.png`), fullPage: true, clip: { x: 0, y: top, width: w.width, height } })
          .catch(() => {});
      }
    }

    // Hover: what changes on links, buttons and clickable cards (desktop only).
    if (!w.mobile) design.hover = await hoverProbe(page);

    // Which sections follow the window's height: measure them again in a shorter window.
    const shorter = Math.round(w.height * 0.75);
    await page.setViewportSize({ width: w.width, height: shorter });
    await page.waitForTimeout(800);
    const heights = await page.evaluate(() => window.__capSections.map((el) => Math.round(el.getBoundingClientRect().height)));
    design.sections.forEach((s, i) => {
      s.heightInShorterWindow = heights[i];
      const a = s.height / w.height;
      const b = heights[i] / shorter;
      // Same share of two different window heights: sized by the window, not its content.
      if (Math.abs(s.height - heights[i]) > 8 && Math.abs(a - b) < 0.04) s.viewportSized = `${Math.round(a * 100)}% of the window height`;
    });
    design.window = { width: w.width, height: w.height, shorter };

    // Horizontal overflow at in-between widths (desktop pass only, so it runs once).
    if (!w.mobile) {
      design.overflow = [];
      for (const ow of OVERFLOW_WIDTHS) {
        await page.setViewportSize({ width: ow, height: 900 });
        await page.waitForTimeout(600);
        design.overflow.push({ width: ow, ...(await page.evaluate(overflowAt)) });
      }
    }

    summary[w.name] = design;
    await context.close();
  }
} finally {
  await browser.close();
}

writeFileSync(join(outDir, `${label}-design.json`), JSON.stringify(summary, null, 2));
writeFileSync(join(outDir, `${label}-design.md`), toMarkdown(url, summary));
console.log(
  `captured ${url}\n  → ${outDir}/${label}-{390,1440}-{fold,full}.png, -section-NN.png (one per section), -scroll-NN.png (frames while scrolling), ${label}-design.{json,md}`,
);

function pad(n) {
  return String(n).padStart(2, "0");
}

/** Runs in the page: sets up window.__cap, which samples what moves as the page scrolls. */
function motionProbe() {
  const ids = new WeakMap();
  const els = [];
  const samples = [];
  const animations = new Map();

  const describe = (el) => {
    const cls = typeof el.className === "string" ? el.className.trim().split(/\s+/).filter((c) => c.length < 30).slice(0, 2).join(".") : "";
    const text = (el.innerText ?? el.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 40);
    return `${el.tagName.toLowerCase()}${cls ? "." + cls : ""}${text ? ` “${text}”` : ""}`;
  };
  const track = () => {
    for (const el of document.body.querySelectorAll("*")) {
      if (ids.has(el) || els.length >= 3000) continue;
      if (["SCRIPT", "STYLE", "NOSCRIPT", "LINK", "META", "BR"].includes(el.tagName)) continue;
      if (el.closest("svg") && el.tagName.toLowerCase() !== "svg") continue;
      const r = el.getBoundingClientRect();
      const ownText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      if (r.width * r.height < 1200 && !ownText) continue;
      ids.set(el, els.length);
      els.push(el);
    }
  };
  // transform plus the separate translate / scale / rotate properties (Tailwind v4 uses those).
  const transformOf = (s) => {
    let m = new DOMMatrix(s.transform && s.transform !== "none" ? s.transform : undefined);
    if (s.translate && s.translate !== "none") {
      const [x = "0", y = "0"] = s.translate.split(" ");
      m = new DOMMatrix().translate(parseFloat(x) || 0, parseFloat(y) || 0).multiply(m);
    }
    if (s.rotate && s.rotate !== "none") m = new DOMMatrix().rotate(parseFloat(s.rotate.split(" ").at(-1)) || 0).multiply(m);
    if (s.scale && s.scale !== "none") {
      const [sx, sy = sx] = s.scale.split(" ").map(parseFloat);
      m = new DOMMatrix().scale(sx, sy).multiply(m);
    }
    return { tx: m.m41, ty: m.m42, scale: Math.hypot(m.m11, m.m12), rotate: (Math.atan2(m.m12, m.m11) * 180) / Math.PI };
  };

  const sample = () => {
    track();
    const values = els.map((el) => {
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        opacity: +s.opacity,
        ...transformOf(s),
        clip: s.clipPath === "none" ? "" : s.clipPath,
        filter: s.filter === "none" ? "" : s.filter,
        position: s.position,
        top: Math.round(r.top), // in the window
        docTop: Math.round(r.top + scrollY),
      };
    });
    samples.push({ y: Math.round(scrollY), values });
    for (const a of document.getAnimations?.() ?? []) {
      const target = a.effect?.target;
      if (!target) continue;
      const timing = a.effect.getComputedTiming?.() ?? {};
      const name = a.animationName ?? a.transitionProperty ?? a.id ?? "animation";
      const key = `${describe(target)}|${name}`;
      if (animations.has(key)) continue;
      let props = [];
      try {
        props = [...new Set(a.effect.getKeyframes().flatMap((k) => Object.keys(k).filter((p) => !["offset", "computedOffset", "easing", "composite"].includes(p))))];
      } catch {}
      animations.set(key, {
        kind: a.constructor.name, // CSSAnimation, CSSTransition or Animation (Web Animations, e.g. from a JS library)
        name,
        target: describe(target),
        duration: Math.round(timing.duration || 0),
        iterations: timing.iterations,
        timeline: a.timeline && a.timeline !== document.timeline ? a.timeline.constructor.name : "time",
        props,
      });
    }
  };

  const report = () => {
    const sections = window.__capSections ?? [];
    const sectionOf = (el) => {
      const i = sections.findIndex((s) => s.contains(el));
      return i === -1 ? "-" : i + 1;
    };
    const effects = [];
    els.forEach((el, i) => {
      const v = samples.map((s) => s.values[i]).filter(Boolean);
      if (v.length < 2) return;
      const range = (k) => [Math.min(...v.map((x) => x[k])), Math.max(...v.map((x) => x[k]))];
      const changes = [];
      const [o0, o1] = range("opacity");
      if (o1 - o0 > 0.25) changes.push(`opacity ${v[0].opacity.toFixed(2)}→${v.at(-1).opacity.toFixed(2)}`);
      const [y0, y1] = range("ty");
      if (y1 - y0 > 8) changes.push(`translateY ${Math.round(v[0].ty)}→${Math.round(v.at(-1).ty)}px`);
      const [x0, x1] = range("tx");
      if (x1 - x0 > 8) changes.push(`translateX ${Math.round(v[0].tx)}→${Math.round(v.at(-1).tx)}px`);
      const [s0, s1] = range("scale");
      if (s1 - s0 > 0.04) changes.push(`scale ${v[0].scale.toFixed(2)}→${v.at(-1).scale.toFixed(2)}`);
      const [r0, r1] = range("rotate");
      if (r1 - r0 > 2) changes.push(`rotate ${Math.round(v[0].rotate)}→${Math.round(v.at(-1).rotate)}°`);
      if (new Set(v.map((x) => x.clip)).size > 1) changes.push("clip-path changes");
      if (new Set(v.map((x) => x.filter)).size > 1) changes.push("filter changes (e.g. blur)");

      // Pinned: it stays put in the window for several samples while the page scrolls under it.
      const pos = v[0].position;
      let pinnedFor = 0;
      if (pos === "sticky" || pos === "fixed" || el.parentElement?.classList.contains("pin-spacer")) {
        let run = 0;
        for (let k = 1; k < v.length; k++) {
          run = Math.abs(v[k].top - v[k - 1].top) <= 2 && samples[k].y !== samples[k - 1].y ? run + 1 : 0;
          pinnedFor = Math.max(pinnedFor, run);
        }
      }
      const pinned = pinnedFor >= 2 && el.getBoundingClientRect().height > 30;
      if (!changes.length && !pinned) return;

      // How it changes: once on entering view (a reveal), or continuously with the scroll (scrubbed).
      const keys = v.map((x) => `${x.opacity.toFixed(2)}|${Math.round(x.ty)}|${Math.round(x.tx)}|${x.scale.toFixed(2)}|${x.clip}|${x.filter}`);
      const distinct = new Set(keys).size;
      const changed = keys.map((k, j) => j > 0 && k !== keys[j - 1]).map((c, j) => (c ? samples[j].y : null)).filter((y) => y !== null);
      const kind = pinned && !changes.length ? (pos === "fixed" ? "fixed" : "pinned (sticky)") : distinct >= 4 ? "scrubbed with the scroll" : "reveal on entering view";
      effects.push({
        section: sectionOf(el),
        kind,
        changes: pinned && changes.length ? [...changes, "while pinned"] : changes,
        scrollRange: changed.length ? `${changed[0]}–${changed.at(-1)}px` : `pinned for ${pinnedFor} half-screens`,
        element: describe(el),
        el,
      });
    });

    // The same effect on a parent and its child: keep only the parent.
    const kept = effects.filter((e) => !effects.some((p) => p !== e && p.kind === e.kind && p.changes.join() === e.changes.join() && p.el.contains(e.el)));

    // Group the same effect within a section (a list of cards revealing one by one is one effect).
    const groups = new Map();
    for (const e of kept) {
      const key = `${e.section}|${e.kind}|${e.changes.join(", ")}`;
      const { el: _el, ...plain } = e; // elements can't leave the page
      const g = groups.get(key) ?? { ...plain, count: 0, examples: [] };
      g.count++;
      if (g.examples.length < 3) g.examples.push(e.element);
      groups.set(key, g);
    }

    const has = (sel) => !!document.querySelector(sel);
    const sheetText = [];
    const hoverRules = [];
    for (const sheet of document.styleSheets) {
      let rules;
      try {
        rules = sheet.cssRules;
      } catch {
        continue;
      }
      const walk = (list) => {
        for (const rule of list) {
          if (rule.cssRules) walk(rule.cssRules);
          const text = rule.cssText ?? "";
          if (/animation-timeline|view-timeline|scroll-timeline/.test(text)) sheetText.push("css scroll-driven animations");
          const short = text.replace(/\s+/g, " ").slice(0, 220);
          if (rule.selectorText?.includes(":hover") && hoverRules.length < 20 && !hoverRules.includes(short)) hoverRules.push(short);
        }
      };
      walk(rules);
    }
    const libraries = [
      window.gsap && `GSAP ${window.gsap.version ?? ""}`.trim(),
      (window.ScrollTrigger || has(".pin-spacer")) && "GSAP ScrollTrigger (pinning / scrubbing)",
      (window.Lenis || window.lenis || document.documentElement.classList.contains("lenis")) && "Lenis smooth scroll",
      has("[data-scroll-container]") && "Locomotive Scroll",
      has("[data-aos]") && "AOS (reveal on scroll)",
      has("[data-framer-name], [data-framer-component-type]") && "Framer site (Framer Motion)",
      (window.Webflow || has("[data-w-id]")) && "Webflow interactions",
      has(".swiper, .swiper-container") && "Swiper (carousel)",
      has(".splide") && "Splide (carousel)",
      window.THREE && "three.js",
      document.querySelectorAll("canvas").length && `${document.querySelectorAll("canvas").length} canvas element(s) (WebGL/2D art)`,
      document.querySelectorAll("video").length && `${document.querySelectorAll("video").length} video element(s)`,
      sheetText.length && "CSS scroll-driven animations (animation-timeline)",
    ].filter(Boolean);

    return {
      scrollEffects: [...groups.values()].sort((a, b) => String(a.section).localeCompare(String(b.section), undefined, { numeric: true })),
      animations: [...animations.values()].filter((a) => a.kind !== "CSSTransition").slice(0, 40),
      hoverRules,
      libraries,
    };
  };

  window.__cap = { sample, report };
}

/** Runs in the page: tallies the computed styles of everything visible, and finds the sections. */
function extractDesign() {
  const tally = () => new Map();
  const add = (map, key, weight = 1) => key && map.set(key, (map.get(key) ?? 0) + weight);
  const fonts = tally(), sizes = tally(), weights = tally(), text = tally(), bg = tally(), borders = tally();
  const radii = tally(), shadows = tally(), gradients = tally(), tracking = tally(), lineHeights = tally(), transitions = tally();

  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && s.visibility !== "hidden" && s.display !== "none" && +s.opacity > 0;
  };
  for (const el of document.body.querySelectorAll("*")) {
    if (!visible(el)) continue;
    const s = getComputedStyle(el);
    const area = Math.min(el.getBoundingClientRect().width * el.getBoundingClientRect().height, 200000) / 1000;
    const ownText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (ownText) {
      add(fonts, s.fontFamily.split(",")[0].replace(/["']/g, "").trim());
      add(sizes, s.fontSize);
      add(weights, s.fontWeight);
      add(text, s.color);
      add(tracking, s.letterSpacing);
      add(lineHeights, `${s.fontSize} / ${s.lineHeight}`);
    }
    if (s.backgroundColor !== "rgba(0, 0, 0, 0)") add(bg, s.backgroundColor, area);
    if (s.backgroundImage.includes("gradient")) add(gradients, s.backgroundImage.slice(0, 300));
    if (parseFloat(s.borderTopWidth) > 0) add(borders, `${s.borderTopWidth} ${s.borderTopStyle} ${s.borderTopColor}`);
    if (s.borderRadius !== "0px") add(radii, s.borderRadius);
    if (s.boxShadow !== "none") add(shadows, s.boxShadow.slice(0, 200));
    if (s.transitionDuration.split(",").some((d) => parseFloat(d) > 0)) add(transitions, `${s.transitionProperty.slice(0, 60)} ${s.transitionDuration.split(",")[0]} ${s.transitionTimingFunction.split(",")[0]}`);
  }
  const top = (map, n = 12) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => ({ value: k, count: Math.round(v) }));

  // Custom properties declared on :root (design tokens, if the site has them)
  const vars = {};
  for (const sheet of document.styleSheets) {
    let rules;
    try { rules = sheet.cssRules; } catch { continue; }
    for (const rule of rules) {
      if (rule.selectorText === ":root" && rule.style) {
        for (const prop of rule.style) if (prop.startsWith("--") && Object.keys(vars).length < 150) vars[prop] = rule.style.getPropertyValue(prop).trim();
      }
    }
  }
  const fontFaces = [...document.fonts].map((f) => `${f.family.replace(/["']/g, "")} ${f.weight} ${f.style}`);

  // Sections: the big stacked blocks of the page. Wrappers that hold most of the page are looked
  // through, down to the element whose children are the sections; fixed layers are skipped.
  const big = (el) => visible(el) && el.getBoundingClientRect().height > 40 && !["fixed", "absolute"].includes(getComputedStyle(el).position);
  const path = [document.body];
  for (let depth = 0; depth < 12; depth++) {
    const h = path.at(-1).getBoundingClientRect().height;
    const wrapper = [...path.at(-1).children].filter(big).find((c) => c.getBoundingClientRect().height >= h * 0.8);
    if (!wrapper) break;
    path.push(wrapper);
  }
  // The innermost wrapper's children, plus whatever sits beside each wrapper on the way down
  // (a newsletter or footer outside the main wrapper is still a section).
  const blocks = [...path.at(-1).children].filter(big);
  for (let i = path.length - 2; i >= 0; i--) blocks.push(...[...path[i].children].filter((c) => c !== path[i + 1] && big(c)));
  blocks.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
  const header = document.querySelector("header");
  const sectionEls = [...(header && !blocks.some((b) => b.contains(header)) ? [header] : []), ...blocks, ...[...document.querySelectorAll("footer")].slice(0, 1)]
    .filter((el, i, all) => all.indexOf(el) === i && !all.some((o) => o !== el && o.contains(el)));
  window.__capSections = sectionEls;
  const sections = sectionEls.map((el) => ({
    tag: el.tagName.toLowerCase(),
    id: el.id || undefined,
    top: Math.round(el.getBoundingClientRect().top + scrollY),
    height: Math.round(el.getBoundingClientRect().height),
    position: getComputedStyle(el).position,
    heading: el.querySelector("h1,h2,h3")?.textContent.trim().replace(/\s+/g, " ").slice(0, 80),
  }));

  // Media slots: images, video, canvas and embeds big enough to be part of the layout.
  const media = [];
  for (const el of document.querySelectorAll("img, video, canvas, iframe, picture, [style*='background-image']")) {
    const r = el.getBoundingClientRect();
    if (!visible(el) || r.width * r.height < 15000) continue;
    const s = getComputedStyle(el);
    if (el.tagName !== "IMG" && el.tagName !== "VIDEO" && el.tagName !== "CANVAS" && el.tagName !== "IFRAME" && !s.backgroundImage.includes("url(")) continue;
    media.push({
      kind: el.tagName === "VIDEO" ? `video${el.autoplay ? " autoplay" : ""}${el.loop ? " loop" : ""}` : el.tagName === "IMG" || el.tagName === "PICTURE" ? "image" : el.tagName === "CANVAS" ? "canvas (WebGL/2D)" : el.tagName === "IFRAME" ? "embed" : "background image",
      section: sectionEls.findIndex((s) => s.contains(el)) + 1 || "-",
      size: `${Math.round(r.width)}×${Math.round(r.height)}`,
      aspect: (r.width / r.height).toFixed(2),
      fit: s.objectFit !== "fill" ? s.objectFit : s.backgroundSize,
      radius: s.borderRadius !== "0px" ? s.borderRadius : getComputedStyle(el.parentElement ?? el).borderRadius,
      fillsWindowHeight: Math.abs(r.height - innerHeight) < 40,
    });
    if (media.length >= 30) break;
  }

  // The site's own links (header, nav, footer), to find other pages by name.
  const links = [];
  for (const a of document.querySelectorAll("header a[href], nav a[href], footer a[href]")) {
    try {
      const u = new URL(a.href, location.href);
      let name = (a.innerText || a.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ");
      // Hover effects often repeat the label ("ProductProduct", "View more View more").
      const half = name.length / 2;
      if (name.slice(0, Math.floor(half)).trim() === name.slice(Math.ceil(half)).trim()) name = name.slice(0, Math.floor(half)).trim();
      name = name.slice(0, 40);
      if (u.origin !== location.origin || !name || links.some((l) => l.path === u.pathname)) continue;
      links.push({ name, path: u.pathname });
    } catch {}
    if (links.length >= 40) break;
  }

  return {
    title: document.title,
    pageHeight: document.documentElement.scrollHeight,
    fonts: top(fonts, 6),
    fontFaces: [...new Set(fontFaces)].slice(0, 20),
    fontSizes: top(sizes, 14),
    fontWeights: top(weights, 6),
    lineHeights: top(lineHeights, 10),
    letterSpacing: top(tracking, 6),
    textColours: top(text, 12),
    backgrounds: top(bg, 12),
    borders: top(borders, 8),
    radii: top(radii, 10),
    shadows: top(shadows, 8),
    gradients: top(gradients, 8),
    transitions: top(transitions, 8),
    rootVariables: vars,
    sections,
    media,
    links,
  };
}

/** Hovers links, buttons and clickable cards and records what changes. */
async function hoverProbe(page) {
  const count = await page.evaluate(() => {
    const seen = new Set();
    const picked = [];
    for (const el of document.querySelectorAll("a, button, [role=button], [onclick], [style*='cursor: pointer']")) {
      const r = el.getBoundingClientRect();
      if (r.width < 20 || r.height < 14 || getComputedStyle(el).visibility === "hidden") continue;
      // One of each look: same tag, classes and rough size count once.
      const sig = `${el.tagName}|${typeof el.className === "string" ? el.className : ""}|${Math.round(r.width / 80)}|${Math.round(r.height / 40)}`;
      if (seen.has(sig)) continue;
      seen.add(sig);
      el.setAttribute("data-cap-hover", picked.length);
      picked.push(el);
      if (picked.length >= 16) break;
    }
    return picked.length;
  });
  const styleOf = (i) =>
    page.evaluate((i) => {
      const el = document.querySelector(`[data-cap-hover="${i}"]`);
      if (!el) return null;
      const pick = (e) => {
        if (!e) return {};
        const s = getComputedStyle(e);
        return { color: s.color, background: s.backgroundColor, border: s.borderColor, transform: s.transform, translate: s.translate, scale: s.scale, rotate: s.rotate, shadow: s.boxShadow, opacity: s.opacity, decoration: s.textDecorationLine, filter: s.filter, backgroundImage: s.backgroundImage.slice(0, 80) };
      };
      const text = (el.innerText ?? "").trim().replace(/\s+/g, " ").slice(0, 40);
      return { label: `${el.tagName.toLowerCase()}${text ? ` “${text}”` : ""}`, transition: getComputedStyle(el).transition.slice(0, 120), self: pick(el), child: pick(el.querySelector("img, svg, span, div")) };
    }, i);
  const out = [];
  for (let i = 0; i < count; i++) {
    const before = await styleOf(i);
    if (!before) continue;
    const ok = await page.hover(`[data-cap-hover="${i}"]`, { timeout: 2000 }).then(() => true, () => false);
    if (!ok) continue;
    await page.waitForTimeout(500);
    const after = await styleOf(i);
    await page.mouse.move(0, 0);
    const diff = [];
    for (const part of ["self", "child"]) {
      for (const [k, v] of Object.entries(before[part])) {
        if (after?.[part]?.[k] !== undefined && after[part][k] !== v) diff.push(`${part === "child" ? "inner " : ""}${k}: ${v} → ${after[part][k]}`);
      }
    }
    if (diff.length) out.push({ element: before.label, transition: before.transition, changes: diff.slice(0, 6) });
  }
  return out;
}

/** Runs in the page: elements that stick out sideways at the current width. */
function overflowAt() {
  const width = document.documentElement.clientWidth;
  const offenders = [];
  if (document.documentElement.scrollWidth > width + 1) {
    for (const el of document.body.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.right > width + 1 && r.width > 0 && getComputedStyle(el).position !== "fixed") {
        const parentOver = el.parentElement && el.parentElement.getBoundingClientRect().right > width + 1;
        if (!parentOver || offenders.length === 0) offenders.push(`${el.tagName.toLowerCase()}${typeof el.className === "string" && el.className ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".") : ""} (right edge ${Math.round(r.right)}px)`);
      }
      if (offenders.length >= 5) break;
    }
  }
  return { scrollWidth: document.documentElement.scrollWidth, overflows: document.documentElement.scrollWidth > width + 1, offenders };
}

function toMarkdown(url, summary) {
  const lines = [
    `# Design capture: ${url}`,
    "",
    "Counts are how often a value occurs (backgrounds: weighted by area).",
    "Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).",
    "",
  ];
  for (const [width, d] of Object.entries(summary)) {
    lines.push(`## ${width}px — ${d.title} (page ${d.pageHeight}px tall, window ${d.window.width}×${d.window.height})`, "");
    const list = (title, items) => {
      if (!items?.length) return;
      lines.push(`**${title}:** ${items.map((i) => `\`${i.value}\` ×${i.count}`).join(" · ")}`, "");
    };
    list("Fonts", d.fonts);
    if (d.fontFaces.length) lines.push(`**Loaded faces:** ${d.fontFaces.join(" · ")}`, "");
    list("Font sizes", d.fontSizes);
    list("Weights", d.fontWeights);
    list("Size / line height", d.lineHeights);
    list("Letter spacing", d.letterSpacing);
    list("Text colours", d.textColours);
    list("Backgrounds", d.backgrounds);
    list("Borders", d.borders);
    list("Radii", d.radii);
    list("Shadows", d.shadows);
    list("Gradients", d.gradients);
    list("Transitions", d.transitions);
    const vars = Object.entries(d.rootVariables);
    if (vars.length) lines.push(`**:root variables (${vars.length}):** ${vars.slice(0, 60).map(([k, v]) => `\`${k}: ${v}\``).join(" · ")}`, "");

    lines.push("### Sections", "");
    d.sections.forEach((s, i) => {
      const size = s.viewportSized ? ` — **sized by the window: ${s.viewportSized}** (${s.heightInShorterWindow}px in a ${d.window.shorter}px window)` : "";
      lines.push(`${i + 1}. \`${s.tag}${s.id ? "#" + s.id : ""}\` at ${s.top}px, ${s.height}px tall${s.position !== "static" && s.position !== "relative" ? `, position ${s.position}` : ""}${size}${s.heading ? ` — “${s.heading}”` : ""}${s.crops ? ` · ${s.crops.join(", ")}` : ""}`);
    });
    lines.push("");

    if (d.media.length) {
      lines.push("### Media slots", "");
      for (const m of d.media) lines.push(`- section ${m.section}: ${m.kind}, ${m.size} (aspect ${m.aspect}), fit ${m.fit}${m.radius && m.radius !== "0px" ? `, radius ${m.radius}` : ""}${m.fillsWindowHeight ? ", **fills the window height**" : ""}`);
      lines.push("");
    }

    const m = d.motion;
    lines.push("### Motion", "");
    lines.push(`**Libraries and media seen:** ${m.libraries.length ? m.libraries.join(" · ") : "none detected (bundled libraries often don't show; the scroll effects below are the evidence)"}`, "");
    if (m.scrollEffects.length) {
      lines.push("**While scrolling** (sampled every half screen):", "");
      for (const e of m.scrollEffects) lines.push(`- section ${e.section}: ${e.kind}${e.changes.length ? ` — ${e.changes.join(", ")}` : ""}, at scroll ${e.scrollRange}${e.count > 1 ? ` · ${e.count} elements` : ""} · e.g. ${e.examples.join("; ")}`);
      lines.push("");
    } else lines.push("**While scrolling:** nothing changed.", "");
    if (m.animations.length) {
      lines.push("**Animations running** (CSS keyframes and Web Animations):", "");
      for (const a of m.animations) lines.push(`- ${a.kind} \`${a.name}\` on ${a.target}: ${a.timeline !== "time" ? "scroll-linked" : `${a.duration}ms`}${a.iterations === Infinity ? ", loops forever" : a.iterations > 1 ? `, ×${a.iterations}` : ""}${a.timeline !== "time" ? `, driven by ${a.timeline}` : ""}${a.props.length ? ` (${a.props.join(", ")})` : ""}`);
      lines.push("");
    }
    if (d.hover?.length) {
      lines.push("**On hover:**", "");
      for (const h of d.hover) lines.push(`- ${h.element}: ${h.changes.join("; ")}${h.transition && !h.transition.startsWith("all 0s") ? ` · transition \`${h.transition}\`` : ""}`);
      lines.push("");
    }
    // Our gallery's stylesheet holds every class in the repo, so its :hover rules say nothing about the page.
    if (m.hoverRules.length && !/localhost|127\.0\.0\.1/.test(url)) lines.push(`**:hover rules in the CSS (first ${m.hoverRules.length}):**`, "", ...m.hoverRules.map((r) => `- \`${r}\``), "");

    if (d.overflow) {
      lines.push("### Horizontal overflow", "");
      for (const o of d.overflow) lines.push(`- ${o.width}px: ${o.overflows ? `**overflows** (page ${o.scrollWidth}px wide) — ${o.offenders.join(", ")}` : "fits"}`);
      lines.push("");
    }
    if (d.links.length) lines.push("### The site's own links", "", d.links.map((l) => `\`${l.path}\` ${l.name}`).join(" · "), "");
  }
  return lines.join("\n");
}
