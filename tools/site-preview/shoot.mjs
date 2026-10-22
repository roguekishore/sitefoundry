// Full-page screenshots, desktop (1440) and mobile (390), for the sites in the preview that
// refuse to be shown in an iframe (X-Frame-Options / frame-ancestors). The preview page shows
// these, scrollable, inside the device frames instead of a live iframe.
//
//   node tools/site-preview/shoot.mjs [slug,slug]
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "shots");
const SITES = {
  "rho": "https://www.rho.co/",
  "ramp": "https://ramp.com/",
  "brex": "https://www.brex.com/",
  "wealthsimple": "https://www.wealthsimple.com/en-ca",
  "tresmares": "https://www.tresmarescapital.com/",
  "burkhalter": "https://drpb.ch/",
  "hafnia": "https://hafnialaw.com/",
  "maxima": "https://maximatherapy.com/",
  "function": "https://www.functionhealth.com/",
  "eight-sleep": "https://www.eightsleep.com/",
  "oura": "https://ouraring.com/",
  "springs": "https://springs.estate/",
  "aman": "https://www.aman.com/",
  "velaa": "https://www.velaaprivateisland.com/",
  "kube": "https://www.kubehotel-saint-tropez.com/fr",
  "linear": "https://linear.app/",
  "vercel": "https://vercel.com/",
  "raycast": "https://www.raycast.com/",
  "attio": "https://attio.com/",
  "resend": "https://resend.com/",
  "cursor": "https://cursor.com/",
  "granola": "https://www.granola.ai/",
  "warp": "https://www.warp.dev/",
  "superhuman": "https://superhuman.com/",
  "railway": "https://railway.com/",
  "modal": "https://modal.com/",
  "zettajoule": "https://zetta-joule.com/",
  "on-energy": "https://www.on.energy/",
  "joby": "https://www.jobyaviation.com/",
  "serve": "https://www.serverobotics.com/",
  "united-carriers": "https://unitedcarriers.com/",
};
const DESKTOP_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36";
const MOBILE_UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1";
const VIEWS = {
  desktop: { viewport: { width: 1440, height: 900 }, userAgent: DESKTOP_UA },
  mobile: { viewport: { width: 390, height: 844 }, userAgent: MOBILE_UA, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
};
// Buttons that close cookie banners and popups, tried in order; failures are ignored.
const DISMISS = /^(accept( all)?|allow all|agree|i agree|ok|got it|alle akzeptieren|akzeptieren|accepter|tout accepter|aceitar|zgadzam się|akceptuję)$/i;

const only = process.argv[2]?.split(",");
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

// Four sites at a time; each site's two views run one after the other.
const queue = Object.entries(SITES).filter(([slug]) => !only || only.includes(slug));
await Promise.all(Array.from({ length: 4 }, async () => {
  for (let next; (next = queue.shift()); ) await shoot(...next);
}));
await browser.close();

async function shoot(slug, url) {
  for (const [view, options] of Object.entries(VIEWS)) {
    const context = await browser.newContext(options);
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: "load", timeout: 60000 });
      await page.waitForTimeout(6000); // long enough for intro loaders to finish
      for (const button of await page.getByRole("button", { name: DISMISS }).all()) {
        await button.click({ timeout: 1500 }).catch(() => {});
      }
      // Scroll to the bottom in steps so lazy images and scroll reveals load, then back up.
      await page.evaluate(async () => {
        const step = innerHeight * 0.8;
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 250));
        }
        scrollTo(0, 0);
      });
      await page.waitForTimeout(1500);
      const file = join(OUT, `${slug}-${view}.jpg`);
      await page.screenshot({ path: file, fullPage: true, type: "jpeg", quality: 72 });
      console.log(`ok   ${slug} ${view}`);
    } catch (e) {
      console.log(`FAIL ${slug} ${view}: ${e.message.split("\n")[0]}`);
    }
    await context.close();
  }
}
