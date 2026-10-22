import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./moderntreasury-logos.css";

export interface ModerntreasuryLogo {
  /** the company's name, for screen readers (and shown when there is no logo) */
  name: string;
  /** the wordmark (an svg, img or styled text) */
  logo?: ReactNode;
}

export interface ModerntreasuryLogosProps {
  /** the logos, in order; six or more keep the loop full on wide screens */
  logos: ModerntreasuryLogo[];
  /** seconds for one full pass of the list */
  duration?: number;
  className?: string;
}

/** A hairline-bound logo strip that slides endlessly to the left. */
export function ModerntreasuryLogos({ logos, duration = 45, className }: ModerntreasuryLogosProps) {
  const row = (copy: boolean) => (
    <ul aria-hidden={copy || undefined} className={cn("flex shrink-0 items-center gap-16 pr-16", copy && "moderntreasury-logos-copy")}>
      {logos.map((l) => (
        <li key={l.name} className="flex shrink-0 items-center text-foreground/85 [&_svg]:h-7 [&_svg]:w-auto" aria-label={copy ? undefined : l.name}>
          {l.logo ?? <span className="text-2xl font-semibold tracking-[-0.02em]">{l.name}</span>}
        </li>
      ))}
    </ul>
  );
  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex h-[10.375rem] items-center border-y border-foreground/20">
          <div className="moderntreasury-logos-fade w-full overflow-clip">
            <div className="moderntreasury-logos-track flex w-max" style={{ "--moderntreasury-logos-duration": `${duration}s` } as CSSProperties}>
              {row(false)}
              {row(true)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
