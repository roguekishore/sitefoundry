import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./growthbook-v2-logos.css";

export interface GrowthbookV2Logo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (svg, img or styled text), about 28px tall */
  logo: ReactNode;
}

export interface GrowthbookV2LogosProps {
  /** the line above the row */
  caption: string;
  /** the wordmarks; six or more */
  logos: GrowthbookV2Logo[];
  /** seconds for one full loop */
  duration?: number;
  className?: string;
}

export function GrowthbookV2Logos({ caption, logos, duration = 60, className }: GrowthbookV2LogosProps) {
  const row = (copy: number) =>
    logos.map((l) => (
      <li
        key={`${copy}-${l.name}`}
        aria-hidden={copy > 0 || undefined}
        className="flex h-10 shrink-0 items-center px-6 text-foreground lg:px-9 [&_svg]:h-7 [&_svg]:w-auto"
      >
        <span role="img" aria-label={copy > 0 ? undefined : l.name} className="flex items-center">
          {l.logo}
        </span>
      </li>
    ));
  return (
    <section className={cn("bg-background pt-12 pb-10 text-foreground lg:pt-20 lg:pb-16", className)}>
      <p className="px-gutter text-center text-sm/[1.65] lg:text-base">{caption}</p>
      <div className="mx-auto mt-8 max-w-[calc(var(--page-width)+var(--page-gutter)*2)] overflow-clip lg:mt-12">
        <ul className="growthbook-v2-logos-track flex w-max" style={{ animationDuration: `${duration}s` }}>
          {row(0)}
          {row(1)}
        </ul>
      </div>
    </section>
  );
}
