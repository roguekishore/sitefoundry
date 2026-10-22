import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NekoArrowLink } from "@foundry/neko-arrow-link";
import { NekoSlot } from "@foundry/neko-slot";
import "./neko-focus-tabs.css";

export interface NekoFocusTab {
  /** the short tab label, shown in capitals */
  tab: string;
  /** the big headline of this panel */
  title: string;
  /** a sentence or two under it */
  body: string;
  /** the arrow link under the paragraph */
  link?: { label: string; href: string };
  /** the tall picture (top on phones); empty shows a placeholder */
  media?: ReactNode;
}

export interface NekoFocusTabsProps {
  /** two to six panels, told in scroll order */
  tabs: NekoFocusTab[];
  /** prefix for the in-page markers the tabs link to (must be unique on the page) */
  id?: string;
  className?: string;
}

type Vars = Record<`--${string}`, string | number>;
const css = (v: Vars) => v as CSSProperties;
const tones = ["muted", "lemon", "ice", "muted", "lemon", "ice"] as const;

/** Where each panel's changes sit on the pinned stretch, in % of the `contain` range. */
function slices(k: number, n: number) {
  const at = (x: number) => `${((x / n) * 100).toFixed(2)}%`;
  const range = (a: number, b: number) => `contain ${at(a)} contain ${at(b)}`;
  const first = k === 0;
  const last = k === n - 1;
  const inRange = range(k, k + 0.22); // text fades and rises in
  const outRange = range(k + 0.78, k + 1); // text fades out as the next arrives
  const copy = first ? { a: "neko-focus-tabs-out", r: outRange, f: "forwards" } : last ? { a: "neko-focus-tabs-in", r: inRange, f: "backwards" } : { a: "neko-focus-tabs-in, neko-focus-tabs-out", r: `${inRange}, ${outRange}`, f: "backwards, forwards" };
  const dimBefore = range(k - 0.01, k);
  const dimAfter = range(k + 1, k + 1.01);
  const tab = first ? { a: "neko-focus-tabs-dim", r: dimAfter, f: "forwards" } : last ? { a: "neko-focus-tabs-dim", r: dimBefore, f: "backwards" } : { a: "neko-focus-tabs-dim, neko-focus-tabs-dim", r: `${dimBefore}, ${dimAfter}`, f: "backwards, forwards" };
  const grow = range(k, last ? n : k + 1);
  const line = last ? { a: "neko-focus-tabs-grow", r: grow, f: "backwards" } : { a: "neko-focus-tabs-grow, neko-focus-tabs-gone", r: `${grow}, ${dimAfter}`, f: "backwards, forwards" };
  return {
    media: first ? {} : { "--nft-media-anim": "neko-focus-tabs-slide", "--nft-media-range": range(k - 0.22, k + 0.22) },
    copy: n < 2 ? {} : { "--nft-copy-anim": copy.a, "--nft-copy-range": copy.r, "--nft-copy-fill": copy.f, "--nft-word-anim": first ? "none" : "neko-focus-tabs-word", "--nft-in-range": inRange },
    tab: n < 2 ? {} : { "--nft-tab-anim": tab.a, "--nft-tab-range": tab.r, "--nft-tab-fill": tab.f },
    line: { "--nft-line-anim": line.a, "--nft-line-range": line.r, "--nft-line-fill": line.f },
    // the marker a tab links to: a little after its panel has settled
    marker: `calc((100% - 100svh) * ${((k + 0.3) / n).toFixed(4)})`,
  };
}

export function NekoFocusTabs({ tabs, id = "focus", className }: NekoFocusTabsProps) {
  const n = tabs.length;
  const s = tabs.map((_, k) => slices(k, n));
  return (
    <section className={cn("neko-tabs relative bg-highlight px-gutter py-[calc(var(--section-y)*0.4)] font-sans text-foreground", className)} style={css({ "--nft-n": n })}>
      {tabs.map((t, k) => (
        <span key={t.tab} id={`${id}-${k}`} aria-hidden className="absolute left-0 h-px w-px" style={{ top: s[k].marker }} />
      ))}

      <div className="neko-tabs-stage">
        <div className="neko-tabs-frame flex flex-col gap-4">
          <div aria-hidden className="neko-tabs-backdrop absolute inset-0 hidden bg-card" />

          {tabs.map((t, k) => (
            <article key={t.tab} className="neko-tabs-panel overflow-clip rounded-2xl bg-card lg:grid lg:grid-cols-[41.67%_1fr]">
              <div className="neko-tabs-media relative aspect-[1.2] overflow-clip lg:aspect-auto lg:min-h-[34rem]">
                <NekoSlot media={t.media} tone={tones[k % tones.length]} className="neko-tabs-media-inner absolute inset-0" />
              </div>
              <div className="neko-tabs-text px-5 py-7 lg:self-center lg:px-[16%] lg:py-16">
                <div className="neko-tabs-copy" style={css(s[k].copy)}>
                  <p className="neko-tabs-eyebrow mb-4 text-xs tracking-[0.08em] uppercase lg:text-base lg:tracking-[0.04em]">{t.tab}</p>
                  <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.025em] lg:text-[4.25rem] lg:leading-[1.18]">
                    {t.title.split(" ").map((w, j) => (
                      <span key={j}>
                        {j > 0 && " "}
                        {/* each word rises inside its own mask, like a line of type sliding up */}
                        <span className="-mb-[0.14em] inline-block overflow-clip pb-[0.14em] align-top">
                          <span className="neko-tabs-word inline-block" style={css({ "--nft-rise": `${Math.min(10 + j * 14, 92)}px` })}>
                            {w}
                          </span>
                        </span>
                      </span>
                    ))}
                  </h2>
                  <p className="mt-4 max-w-[34rem] text-base leading-6 lg:mt-8 lg:text-lg">{t.body}</p>
                  {t.link && <NekoArrowLink label={t.link.label} href={t.link.href} className="mt-5 lg:mt-8" />}
                </div>
              </div>
            </article>
          ))}

          <ul className="neko-tabs-row hidden justify-between border-b border-border">
            {tabs.map((t, k) => (
              <li key={t.tab} className="relative">
                <a
                  href={`#${id}-${k}`}
                  className="neko-tabs-tab block pb-3 text-xs tracking-[0.08em] uppercase transition-opacity duration-300 hover:opacity-80 motion-reduce:transition-none lg:pb-0 lg:text-base lg:tracking-[0.04em]"
                  style={css(s[k].tab)}
                >
                  {t.tab}
                </a>
                <span aria-hidden className="neko-tabs-line absolute inset-x-0 -bottom-px hidden h-0.5 bg-foreground" style={css(s[k].line)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
