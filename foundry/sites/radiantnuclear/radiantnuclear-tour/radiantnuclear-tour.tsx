import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RadiantnuclearSlot } from "@foundry/radiantnuclear-slot";
import "./radiantnuclear-tour.css";

export interface RadiantnuclearTourStep {
  /** the caption's lead line, e.g. "One design, many units:" */
  lead: string;
  /** a sentence or two under it */
  body: string;
  /** the illustration for this step; empty shows a placeholder */
  media?: ReactNode;
}

export interface RadiantnuclearTourProps {
  /** the bold all-caps heading that stays at the top */
  title: string;
  /** the paragraph under it */
  body?: string;
  /** two to seven steps, told in scroll order */
  steps: RadiantnuclearTourStep[];
  id?: string;
  className?: string;
}

type Vars = Record<`--${string}`, string | number | undefined>;
const css = (v: Vars) => v as CSSProperties;

/** Where step k's changes sit on the pinned stretch, as `contain` percentages. */
function slices(k: number, n: number) {
  const at = (x: number) => `${((Math.min(Math.max(x, 0), n) / n) * 100).toFixed(2)}%`;
  const range = (a: number, b: number) => `contain ${at(a)} contain ${at(b)}`;
  const first = k === 0;
  const last = k === n - 1;
  // one element that may fade in (unless first) and out (unless last)
  const pair = (inName: string, outName: string, inRange: string, outRange: string) =>
    first ? { a: outName, r: outRange, f: "forwards" } : last ? { a: inName, r: inRange, f: "backwards" } : { a: `${inName}, ${outName}`, r: `${inRange}, ${outRange}`, f: "backwards, forwards" };
  // pictures overlap a little as they cross; captions leave, then the next one rises
  const media = pair("radiantnuclear-tour-in", "radiantnuclear-tour-out", range(k - 0.06, k + 0.1), range(k + 0.9, k + 1.06));
  const cap = pair("radiantnuclear-tour-rise", "radiantnuclear-tour-sink", range(k, k + 0.12), range(k + 0.86, k + 0.98));
  const thumb = pair("radiantnuclear-tour-in", "radiantnuclear-tour-out", range(k - 0.01, k), range(k + 1, k + 1.01));
  return {
    media: n < 2 ? {} : { "--rnt-media-anim": media.a, "--rnt-media-range": media.r, "--rnt-media-fill": media.f },
    cap: n < 2 ? {} : { "--rnt-cap-anim": cap.a, "--rnt-cap-range": cap.r, "--rnt-cap-fill": cap.f },
    thumb: n < 2 ? {} : { "--rnt-thumb-anim": thumb.a, "--rnt-thumb-range": thumb.r, "--rnt-thumb-fill": thumb.f },
  };
}

export function RadiantnuclearTour({ title, body, steps, id, className }: RadiantnuclearTourProps) {
  const n = steps.length;
  const s = steps.map((_, k) => slices(k, n));
  const half = 50 / n; // the middle of the first and last segment, in % of the track

  return (
    <section
      id={id}
      className={cn("radiantnuclear-tour relative bg-background py-section font-sans text-foreground", className)}
      style={css({ "--rnt-n": n })}
    >
      <div className="radiantnuclear-tour-stage mx-auto flex max-w-page flex-col px-gutter">
        <div>
          <h2 className="max-w-[22rem] text-[1.875rem] leading-[1.15] font-bold uppercase sm:max-w-[34rem] lg:max-w-[46rem] lg:text-[2.75rem] lg:leading-[1.1]">{title}</h2>
          {body && <p className="mt-4 max-w-[36rem] text-base leading-[1.375] lg:mt-6 lg:text-lg lg:leading-[1.45]">{body}</p>}
        </div>

        <ol className="radiantnuclear-tour-steps mt-14 flex flex-col gap-14">
          {steps.map((t, k) => (
            <li key={t.lead} className="radiantnuclear-tour-step flex flex-col items-center gap-6">
              <div className="radiantnuclear-tour-media w-[68%] max-w-[40rem]" style={css(s[k].media)}>
                <RadiantnuclearSlot media={t.media} tone={k % 2 === 0 ? "paper" : "wash"} className="aspect-[2/1] w-full" />
              </div>
              <p className="radiantnuclear-tour-caption max-w-[21rem] pt-6 text-center text-base leading-[1.375] lg:max-w-[32rem] lg:text-lg lg:leading-[1.45]" style={css(s[k].cap)}>
                <span className="block">{t.lead}</span>
                <span className="block">{t.body}</span>
              </p>
            </li>
          ))}
        </ol>

        {/* progress: a thin track, one dark segment per step (the active one shows), and a teal pointer gliding above */}
        <div aria-hidden className="radiantnuclear-tour-progress mx-auto hidden w-[50vw] max-w-[24rem] pt-3">
          <div className="relative h-3" style={css({ "--rnt-from": `${half}%`, "--rnt-to": `${100 - half}%` })}>
            <span className="radiantnuclear-tour-pointer absolute top-0 left-[var(--rnt-from)] block size-0 -translate-x-1/2 border-x-[6px] border-t-[10px] border-x-transparent border-t-primary" />
          </div>
          <div className="relative mt-3 h-0.5 bg-border">
            {steps.map((t, k) => (
              <span
                key={t.lead}
                className="radiantnuclear-tour-thumb absolute -top-px h-1 bg-foreground/60"
                style={{ left: `${(k / n) * 100}%`, width: `${100 / n}%`, ...css(s[k].thumb) }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
