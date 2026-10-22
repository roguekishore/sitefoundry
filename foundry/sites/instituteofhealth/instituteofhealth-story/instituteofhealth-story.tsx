import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./instituteofhealth-story.css";

export interface InstituteofhealthStoryStep {
  /** the statement, one entry per line (each line blurs in on its own) */
  lines: string[];
  /** words that float in around the centre before this step's statement appears */
  tags?: string[];
}

export interface InstituteofhealthStoryProps {
  /** the steps, in scroll order; the counter and the bars follow their number */
  steps: InstituteofhealthStoryStep[];
  /** the full-bleed background behind the pinned stage; empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

/** Where the floating tags sit, as left/top percentages of the stage (cycled). */
const tagSpots = [
  [18, 30],
  [62, 22],
  [74, 58],
  [24, 66],
  [44, 76],
  [8, 48],
];

/** Sets the scroll range (a share of the pinned stretch) one element animates over. */
function range(from: number, to: number, extra?: Record<string, string>): CSSProperties {
  return { "--from": `${from.toFixed(2)}%`, "--to": `${to.toFixed(2)}%`, ...extra } as CSSProperties;
}

export function InstituteofhealthStory({ steps, media, className }: InstituteofhealthStoryProps) {
  const n = Math.max(steps.length, 1);
  const share = 100 / n;

  return (
    <section className={cn("ioh-story relative text-highlight-foreground", className)}>
      <div className="ioh-story-track">
        <div className="ioh-story-stage overflow-clip">
          {/* Background: drifts down and scales 1 → 1.3 across the whole pin. */}
          <div className="ioh-story-media absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">
            {media ?? <div className="bg-[radial-gradient(ellipse_at_35%_35%,var(--glow),var(--highlight)_55%,color-mix(in_oklab,var(--highlight)_55%,var(--foreground)))]" />}
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-[oklch(0_0_0/0.3)]" /> {/* foundry-allow-colour: a plain black scrim keeps the white type readable */}

          {/* Step counter: a thin ring at the top centre; its digit changes with the step. */}
          <div aria-hidden className="ioh-story-counter absolute top-[6.25rem] left-1/2 size-11 -translate-x-1/2 place-items-center rounded-full border border-highlight-foreground/45 text-[0.675rem] leading-none font-medium lg:top-[6.875rem]">
            {steps.map((_, k) => (
              <span
                key={k}
                className={cn("ioh-story-digit col-start-1 row-start-1", k === 0 && "is-first", k === n - 1 && "is-last")}
                style={range(k * share, (k + 1) * share)}
              >
                {k + 1}
              </span>
            ))}
          </div>

          {/* The statements (and floating tags), all in the same spot. */}
          <div className="ioh-story-steps px-gutter">
            {steps.map((s, k) => {
              const from = k * share;
              const to = (k + 1) * share;
              const last = k === n - 1;
              const textFrom = s.tags?.length ? from + share * 0.55 : from + share * 0.06;
              const textTo = last ? 100 : to - share * 0.04;
              return (
                <div key={k} className="ioh-story-step">
                  {s.tags && s.tags.length > 0 && (
                    <ul className="ioh-story-tags">
                      {s.tags.map((t, i) => {
                        const [x, y] = tagSpots[i % tagSpots.length];
                        return (
                          <li
                            key={t}
                            className="ioh-story-tag rounded-md border border-highlight-foreground/30 bg-highlight-foreground/12 px-3.5 py-2.5 text-[0.975rem] leading-none font-medium tracking-[-0.02em] backdrop-blur-sm lg:text-[1.035rem]"
                            style={range(from + share * 0.04 + i * 1.2, from + share * 0.55, { "--x": `${x}%`, "--y": `${y}%` })}
                          >
                            {t}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  <p className="ioh-story-text max-w-[44rem] text-center font-display text-[1.71rem] leading-[1.2] font-medium tracking-[-0.03em] lg:text-[2.25rem] lg:leading-[1.65]">
                    {s.lines.map((line, i) => (
                      <span
                        key={i}
                        className={cn("ioh-story-line block", last && "is-last")}
                        style={range(textFrom + i * share * 0.03, textTo + (last ? 0 : i * share * 0.015))}
                      >
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              );
            })}
          </div>

          {/* One bar per step at the bottom centre; each fills while its step is on screen. */}
          <div aria-hidden className="ioh-story-bars absolute bottom-6 left-1/2 w-[min(33rem,calc(100%-2*var(--page-gutter)))] -translate-x-1/2 gap-1.5">
            {steps.map((_, k) => (
              <span key={k} className="relative h-px flex-1 bg-highlight-foreground/25">
                <span className="ioh-story-fill absolute inset-0 origin-left bg-highlight-foreground" style={range(k * share, (k + 1) * share)} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
