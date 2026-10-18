// Captures a page for recreation: full-page screenshots at phone and desktop width, plus a
// summary of its design language (colours, fonts, sizes, radii, shadows, sections).
//
//   node .claude/skills/recreate-site/capture.mjs <url> <out-dir> [label]
//
// label defaults to "original". Use "ours" with the gallery's preview URL to compare:
//   node .claude/skills/recreate-site/capture.mjs "http://localhost:4400/preview.html?site=huly&theme=huly-theme&mode=dark" foundry/sites/huly/_reference ours
import { mkdirSync, writeFileSync } from "node:fs";
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

const WIDTHS = [
  { name: "390", width: 390, height: 844, mobile: true },
  { name: "1440", width: 1440, height: 900, mobile: false },
];

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

    // Scroll through once so lazy images and scroll-triggered sections appear.
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < total; y += Math.round(w.height * 0.7)) {
      await page.evaluate((top) => window.scrollTo(0, top), y);
      await page.waitForTimeout(250);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);

    // The first screen, and the whole page.
    await page.screenshot({ path: join(outDir, `${label}-${w.name}-fold.png`) });
    await page.screenshot({ path: join(outDir, `${label}-${w.name}-full.png`), fullPage: true });

    summary[w.name] = await page.evaluate(extractDesign);
    await context.close();
  }
} finally {
  await browser.close();
}

writeFileSync(join(outDir, `${label}-design.json`), JSON.stringify(summary, null, 2));
writeFileSync(join(outDir, `${label}-design.md`), toMarkdown(url, summary));
console.log(`captured ${url}\n  → ${outDir}/${label}-{390,1440}-{fold,full}.png, ${label}-design.{json,md}`);

/** Runs in the page: tallies the computed styles of everything visible. */
function extractDesign() {
  const tally = () => new Map();
  const add = (map, key, weight = 1) => key && map.set(key, (map.get(key) ?? 0) + weight);
  const fonts = tally(), sizes = tally(), weights = tally(), text = tally(), bg = tally(), borders = tally();
  const radii = tally(), shadows = tally(), gradients = tally(), tracking = tally(), lineHeights = tally();

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

  // Sections: the big stacked blocks of the page, with their first heading.
  const container = document.querySelector("main") ?? document.body;
  let blocks = [...container.children].filter((el) => visible(el) && el.getBoundingClientRect().height > 40);
  if (blocks.length === 1) blocks = [...blocks[0].children].filter((el) => visible(el) && el.getBoundingClientRect().height > 40);
  const header = document.querySelector("header");
  const sections = [...(header && !blocks.includes(header) ? [header] : []), ...blocks, ...[...document.querySelectorAll("footer")].slice(0, 1)]
    .filter((el, i, all) => all.indexOf(el) === i)
    .map((el) => ({
      tag: el.tagName.toLowerCase(),
      id: el.id || undefined,
      top: Math.round(el.getBoundingClientRect().top + scrollY),
      height: Math.round(el.getBoundingClientRect().height),
      heading: el.querySelector("h1,h2,h3")?.textContent.trim().replace(/\s+/g, " ").slice(0, 80),
    }));

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
    rootVariables: vars,
    sections,
  };
}

function toMarkdown(url, summary) {
  const lines = [`# Design capture: ${url}`, "", "Counts are how often a value occurs (backgrounds: weighted by area).", ""];
  for (const [width, d] of Object.entries(summary)) {
    lines.push(`## ${width}px — ${d.title} (page ${d.pageHeight}px tall)`, "");
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
    const vars = Object.entries(d.rootVariables);
    if (vars.length) lines.push(`**:root variables (${vars.length}):** ${vars.slice(0, 60).map(([k, v]) => `\`${k}: ${v}\``).join(" · ")}`, "");
    lines.push("**Sections:**", "", ...d.sections.map((s, i) => `${i + 1}. \`${s.tag}${s.id ? "#" + s.id : ""}\` at ${s.top}px, ${s.height}px tall${s.heading ? ` — “${s.heading}”` : ""}`), "");
  }
  return lines.join("\n");
}
