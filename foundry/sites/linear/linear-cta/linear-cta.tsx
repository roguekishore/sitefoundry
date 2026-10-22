import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LinearButton } from "@foundry/linear-button";

export interface LinearCtaLink {
  label: string;
  href: string;
}

export interface LinearCtaProps {
  /** the closing line; two short sentences (use a <br /> to choose the break) */
  title: ReactNode;
  /** the pale pill */
  primary: LinearCtaLink;
  /** the dark pill beside it */
  secondary?: LinearCtaLink;
  className?: string;
}

/** A big centred closing line with two pill buttons. */
export function LinearCta({ title, primary, secondary, className }: LinearCtaProps) {
  return (
    <section className={cn("bg-background px-gutter pb-28 text-center text-foreground lg:pb-56", className)}>
      <h2 className="mx-auto font-display text-[2.375rem] leading-[1.05] font-[510] tracking-[-0.022em] text-foreground lg:text-[4rem] lg:leading-none">
        {title}
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3 lg:mt-10">
        <LinearButton href={primary.href} size="lg">
          {primary.label}
        </LinearButton>
        {secondary && (
          <LinearButton href={secondary.href} variant="secondary" size="lg">
            {secondary.label}
          </LinearButton>
        )}
      </div>
    </section>
  );
}
