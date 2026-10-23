import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ArcButton } from "@foundry/arc-button";
import { ArcHeading } from "@foundry/arc-heading";
import { ArcPlaceholder } from "@foundry/arc-placeholder";
import "./arc-hero.css";

export interface ArcHeroProps {
  /** the big centred headline */
  title: string;
  /** the two-line paragraph under it */
  subtitle: string;
  /** the filled button */
  primary: { label: string; href: string };
  /** the outlined button beside it */
  secondary: { label: string; href: string };
  /** the product screenshot (an <img> with object-cover fills it); empty: a white placeholder card */
  media?: ReactNode;
  className?: string;
}

/** Arc's centred hero on a grey band that stops partway down a large, softly shadowed product screenshot. */
export function ArcHero({ title, subtitle, primary, secondary, media, className }: ArcHeroProps) {
  return (
    <section className={cn("relative bg-background text-foreground", className)}>
      <div aria-hidden className="absolute inset-x-0 top-0 bottom-[3.75rem] bg-muted lg:bottom-[7.5rem]" />
      <div className="relative mx-auto max-w-page px-gutter pt-2 lg:pt-[2.125rem]">
        <ArcHeading as="h1" align="center" reveal={false} title={title} className="max-w-[22rem] lg:max-w-[60rem]" />
        <p className="mx-auto mt-[1.375rem] max-w-[19.5rem] text-center text-[0.884rem]/[1.5] text-pretty text-muted-foreground lg:mt-[1.5625rem] lg:max-w-[30.5rem] lg:text-base/6">
          {subtitle}
        </p>
        <div className="mt-8 flex justify-center gap-4 lg:mt-10 lg:gap-6">
          <ArcButton href={primary.href} className="h-[3.25rem] px-[1.6rem] text-[0.884rem] lg:h-14 lg:px-8 lg:text-[0.9375rem]">
            {primary.label}
          </ArcButton>
          <ArcButton href={secondary.href} variant="outline" className="h-[3.25rem] px-[1.6rem] text-[0.884rem] lg:h-14 lg:px-8 lg:text-[0.9375rem]">
            {secondary.label}
          </ArcButton>
        </div>
        <div className="arc-hero-media -mx-1.5 mt-[2.9rem] aspect-[361/190] overflow-clip rounded-lg sm:mx-0 lg:mt-14 lg:aspect-[1137/652]">
          {media ?? <ArcPlaceholder tone="card" className="size-full rounded-lg" />}
        </div>
      </div>
    </section>
  );
}
