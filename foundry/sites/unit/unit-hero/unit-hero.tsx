import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { UnitButton } from "@foundry/unit-button";
import { UnitPlaceholder } from "@foundry/unit-placeholder";

export interface UnitHeroProps {
  /** the announcement pill above the headline */
  badge?: { label: string; href: string };
  /** the headline (three short lines on desktop) */
  title: string;
  /** one sentence under it */
  subtitle: string;
  /** the black pill */
  cta: { label: string; href: string };
  /** the full-bleed background (a soft looping video in the original); pastel washes when empty */
  media?: ReactNode;
  className?: string;
}

/** Centred first screen on a full-bleed pastel backdrop: pill badge, big three-line headline, subtitle, black pill. */
export function UnitHero({ badge, title, subtitle, cta, media, className }: UnitHeroProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background font-sans text-foreground", className)}>
      <div aria-hidden className="absolute inset-0 -z-10">
        {media ?? (
          <>
            <UnitPlaceholder tone="aurora" className="absolute -inset-10 opacity-80" />
            {/* the original fades its video to white along the top */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-background to-transparent" />
          </>
        )}
      </div>

      <div className="mx-auto flex max-w-page flex-col items-center px-gutter pt-12 pb-12 text-center lg:pt-20 lg:pb-20">
        {badge && (
          <a
            href={badge.href}
            className="flex w-full items-center justify-center gap-3 rounded-full border border-border bg-background/60 px-5 py-2.5 text-[0.875rem] leading-[1.35] transition-[border-color] duration-[425ms] ease-[cubic-bezier(0.625,0.05,0,1)] hover:border-foreground motion-reduce:transition-none sm:w-auto lg:px-3 lg:py-1.5 lg:text-sm"
          >
            <span className="lg:pl-0.5">{badge.label}</span>
            <ArrowUpRight aria-hidden className="size-3.5 shrink-0" strokeWidth={1.75} />
          </a>
        )}
        <h1 className="mt-4 max-w-[22rem] font-display text-[2.1875rem] leading-none tracking-[-0.02em] lg:mt-5 lg:max-w-[31rem] lg:text-[4rem] lg:leading-[1.02]">
          {title}
        </h1>
        <p className="mt-6 max-w-[22rem] text-[1.1875rem] leading-[1.35] tracking-[-0.01em] text-muted-foreground lg:mt-7 lg:max-w-none lg:text-[1.375rem]">{subtitle}</p>
        <UnitButton href={cta.href} className="mt-9 lg:mt-8">
          {cta.label}
        </UnitButton>
      </div>
    </section>
  );
}
