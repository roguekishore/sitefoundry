import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RadiantnuclearButton } from "@foundry/radiantnuclear-button";
import { RadiantnuclearSlot } from "@foundry/radiantnuclear-slot";

export interface RadiantnuclearHeroProps {
  /** the big all-caps headline */
  title: string;
  /** one line under it; the original separates its facts with " | " */
  subtitle?: string;
  /** the button under the subline */
  cta?: { label: string; href: string };
  /** fine print at the very bottom (e.g. "this image is an artist's impression") */
  note?: string;
  /** the photo filling the window; empty shows a dark placeholder */
  media?: ReactNode;
  className?: string;
}

export function RadiantnuclearHero({ title, subtitle, cta, note, media, className }: RadiantnuclearHeroProps) {
  return (
    <section className={cn("relative isolate flex h-svh max-h-[68.75rem] min-h-[32rem] flex-col justify-end overflow-clip font-sans text-card dark:text-foreground", className)}>
      <RadiantnuclearSlot media={media} tone="night" shade="strong" className="absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-page px-gutter pb-6 lg:pb-10">
        <h1 className="max-w-[52rem] text-[1.875rem] leading-[1.15] font-bold uppercase text-balance lg:text-[3.5rem] lg:leading-[1.1]">{title}</h1>
        {subtitle && <p className="mt-6 max-w-[40rem] text-base leading-[1.375] font-medium lg:mt-6 lg:text-xl lg:leading-[1.4]">{subtitle}</p>}
        {cta && (
          <div className="mt-5 flex justify-end lg:mt-8 lg:justify-start">
            <RadiantnuclearButton href={cta.href}>{cta.label}</RadiantnuclearButton>
          </div>
        )}
        {note && <p className="mt-6 max-w-[38rem] text-[0.625rem] leading-[1.4] text-card/50 lg:mt-12 dark:text-foreground/50 lg:text-xs">{note}</p>}
      </div>
    </section>
  );
}
