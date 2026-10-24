import { cn } from "@foundry/foundry-utils";
import { CastelionButton } from "@foundry/castelion-button";
import { CastelionLines } from "@foundry/castelion-lines";
import "./castelion-careers-call.css";

export interface CastelionCareersCallProps {
  /** the big phrases on the left, one per line; they light up in turn */
  phrases: string[];
  /** the call-to-join title, one entry per desktop line */
  title: string[];
  /** the short paragraph under it */
  body: string;
  /** the button's text */
  ctaLabel: string;
  /** where the button goes */
  ctaHref: string;
  className?: string;
}

/** Navy band: huge phrases that light up in turn, and a join-us column with a red button. */
export function CastelionCareersCall({ phrases, title, body, ctaLabel, ctaHref, className }: CastelionCareersCallProps) {
  return (
    <section className={cn("dark bg-secondary text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-12 px-gutter pt-[3.75rem] pb-14 lg:grid-cols-[1fr_19.875rem] lg:items-center lg:gap-10 lg:py-[8.875rem] lg:pr-[calc(var(--page-gutter)+2.4rem)]">
        <div className="castelion-careers-call-list">
          <CastelionLines
            as="p"
            lines={phrases}
            className="font-display text-[clamp(2.625rem,1.6rem+4.19vw,5.375rem)]/[1.31] font-bold tracking-[0.02em]  max-lg:[&_.castelion-lines-line]:block"
          />
        </div>
        <div className="castelion-careers-call-aside">
          <h2 className="font-display text-[clamp(1.8125rem,1.279rem+2.19vw,3.25rem)]/[1.1] font-bold tracking-[0.02em]">
            {title.map((line, i) => (
              <span key={i}>
                {i > 0 && <br className="max-lg:hidden" />}
                {i > 0 && " "}
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-justify text-[clamp(0.875rem,0.829rem+0.19vw,1rem)]/[1.4] font-medium lg:mt-8">{body}</p>
          <CastelionButton label={ctaLabel} href={ctaHref} variant="invert" className="mt-8 w-full" />
        </div>
      </div>
    </section>
  );
}
