import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { HermeusReveal } from "@foundry/hermeus-reveal";
import { HermeusSectionLabel } from "@foundry/hermeus-section-label";
import "./hermeus-mission.css";

export interface HermeusMissionProps {
  /** the section's number, e.g. "01" */
  index: string;
  /** the section's name in the label row */
  label: string;
  /** the one huge amber word */
  title: string;
  /** the statement paragraph */
  body: string;
  className?: string;
}

/** Grey band with a huge amber word left and a statement right; letters rise in on scroll. */
export function HermeusMission({ index, label, title, body, className }: HermeusMissionProps) {
  return (
    <section
      className={cn(
        "bg-secondary pt-[clamp(1.375rem,9.81vw-1.02rem,7.8rem)] pb-[clamp(2.25rem,0.19rem+8.48vw,7.8rem)] text-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-page px-gutter">
        <HermeusSectionLabel index={index} label={label} />
        <div className="mt-[clamp(1.25rem,0.6rem+1.6vw,2.2rem)] grid gap-x-5 gap-y-[clamp(2rem,1.5rem+1vw,2.5rem)] lg:grid-cols-2">
          <p
            className="hermeus-mission-title -mb-[0.1em] overflow-clip pb-[0.1em] font-display text-[clamp(3.16rem,2.195rem+3.97vw,5.77rem)]/none font-bold tracking-[-0.03em] text-primary"
          >
            <span className="sr-only">{title}</span>
            {Array.from(title).map((ch, i) => (
              <span
                key={i}
                aria-hidden
                className="hermeus-mission-char inline-block"
                style={{ "--hermeus-mission-i": i } as CSSProperties}
              >
                {ch}
              </span>
            ))}
          </p>
          <HermeusReveal>
            <p className="text-[clamp(0.79rem,0.667rem+0.509vw,1.125rem)]/[1.3] text-pretty">{body}</p>
          </HermeusReveal>
        </div>
      </div>
    </section>
  );
}
