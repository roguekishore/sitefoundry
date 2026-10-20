import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./growthbook-logos.css";

export interface GrowthbookLogo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text), about 24–30px tall */
  logo: ReactNode;
}

export interface GrowthbookLogosProps {
  /** one line above the marquee */
  caption: string;
  logos: GrowthbookLogo[];
  /** seconds for one full loop (default 60) */
  duration?: number;
  className?: string;
}

export function GrowthbookLogos({ caption, logos, duration = 60, className }: GrowthbookLogosProps) {
  const run = (copy: number) => (
    <ul aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-center gap-14 pr-14 lg:gap-[4.5rem] lg:pr-[4.5rem]">
      {logos.map((l) => (
        <li key={l.name} role="img" aria-label={copy === 0 ? l.name : undefined} className="flex h-10 shrink-0 items-center text-foreground">
          {l.logo}
        </li>
      ))}
    </ul>
  );
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="border-l border-border pt-12 pb-6 lg:pt-[5.25rem] lg:pb-14">
          <p className="text-center text-sm lg:text-base">{caption}</p>
          <div className="growthbook-logos-strip mt-8 overflow-clip lg:mt-14">
            <div
              className="growthbook-logos-run flex w-max"
              style={{ "--growthbook-logos-duration": `${duration}s` } as CSSProperties}
            >
              {run(0)}
              {run(1)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
