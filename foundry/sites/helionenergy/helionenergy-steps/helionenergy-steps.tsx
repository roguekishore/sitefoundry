import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HelionenergyEyebrow } from "@foundry/helionenergy-eyebrow";
import { HelionenergyHeading } from "@foundry/helionenergy-heading";
import "./helionenergy-steps.css";

export interface HelionenergyStepsProps {
  /** the small mono label over the heading */
  eyebrow: ReactNode;
  /** the heading's lines (broken on desktop only) */
  title: ReactNode[];
  /** one short caption per step; they take turns in the same place while the stage is pinned */
  steps: ReactNode[];
  /** the pill button's text */
  ctaLabel: ReactNode;
  /** where the pill button goes */
  ctaHref: string;
  /** the small link under it, to jump past the section */
  skipLabel?: ReactNode;
  /** where that link goes (e.g. the next section's #id) */
  skipHref?: string;
  /** a full-stage animation or film behind everything; empty, a navy-to-page gradient with a soft glow */
  media?: ReactNode;
  className?: string;
}

/** The scroll ranges (inside the pinned stretch) where caption k fades in and out. */
function captionMotion(k: number, n: number): CSSProperties {
  const slice = 100 / n;
  const at = (v: number) => `${v.toFixed(2)}%`;
  const names: string[] = [];
  const ranges: string[] = [];
  const fills: string[] = [];
  if (k > 0) {
    names.push("helionenergy-steps-in");
    ranges.push(`contain ${at(k * slice)} contain ${at(k * slice + 6)}`);
    fills.push("backwards");
  }
  if (k < n - 1) {
    names.push("helionenergy-steps-out");
    ranges.push(`contain ${at((k + 1) * slice - 6)} contain ${at((k + 1) * slice)}`);
    fills.push("forwards");
  }
  return {
    "--hs-anim": names.join(", ") || "none",
    "--hs-range": ranges.join(", ") || "normal",
    "--hs-fill": fills.join(", ") || "none",
  } as CSSProperties;
}

/**
 * A pinned explainer four and a half windows tall. Its one-window stage holds still while the
 * page scrolls: a mono eyebrow and an uppercase heading at the top (drifting up 20px over the
 * whole stretch), and low down a caption that changes step by step, each fading out with a blur
 * before the next fades in. Under the captions a white pill button with a soft halo rises in
 * as the stage arrives and loses its surface as the stage leaves; a small Skip link sits below.
 */
export function HelionenergySteps({
  eyebrow,
  title,
  steps,
  ctaLabel,
  ctaHref,
  skipLabel,
  skipHref,
  media,
  className,
}: HelionenergyStepsProps) {
  return (
    <section className={cn("helionenergy-steps relative h-[450svh]", className)}>
      <div className="sticky top-0 isolate h-svh overflow-clip">
        <div aria-hidden={media ? undefined : true} className="helionenergy-steps-backdrop absolute inset-0 -z-10 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
          {media}
        </div>

        <div className="flex h-full flex-col items-center px-gutter text-center">
          <div className="helionenergy-steps-title pt-[6.9rem] text-secondary-foreground lg:pt-[7.5rem]">
            <HelionenergyEyebrow>{eyebrow}</HelionenergyEyebrow>
            <HelionenergyHeading lines={title} className="mt-[1.1rem]" />
          </div>

          <div className="mt-auto flex flex-col items-center pb-4 lg:pb-6">
            <div className="helionenergy-steps-captions flex flex-col items-center gap-3">
              {steps.map((step, k) => (
                <p
                  key={k}
                  className="helionenergy-steps-caption max-w-[21rem] text-[clamp(1rem,0.86rem+0.556vw,1.366rem)] leading-[1.3] tracking-[-0.02em] text-balance text-secondary-foreground/90 lg:max-w-[21rem]"
                  style={captionMotion(k, steps.length)}
                >
                  {step}
                </p>
              ))}
            </div>

            <div className="helionenergy-steps-cta mt-[5rem] flex flex-col items-center lg:mt-[4.5rem]">
              <a
                href={ctaHref}
                className="group relative inline-flex h-[3.125rem] items-center gap-5 px-6 text-sm/none tracking-[-0.01em] text-foreground lg:h-[3.625rem]"
              >
                <span
                  aria-hidden
                  className="helionenergy-steps-surface absolute inset-0 rounded-full bg-background ring-8 ring-background/35 transition-colors duration-200 ease-out group-hover:bg-card motion-reduce:transition-none"
                />
                <span aria-hidden className="relative size-1 rounded-full bg-current" />
                <span className="relative">{ctaLabel}</span>
                <span aria-hidden className="relative size-1 rounded-full bg-current" />
              </a>
              {skipLabel && skipHref && (
                <a
                  href={skipHref}
                  className="mt-5 text-[0.8125rem]/none text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground motion-reduce:transition-none"
                >
                  {skipLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
