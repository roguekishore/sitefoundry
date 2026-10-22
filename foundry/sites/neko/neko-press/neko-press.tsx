import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NekoArrowLink } from "@foundry/neko-arrow-link";
import { NekoSectionLabel } from "@foundry/neko-section-label";
import { NekoSlot } from "@foundry/neko-slot";

export interface NekoPressProps {
  /** the divider row above */
  label?: string;
  title: string;
  /** a short paragraph under the heading */
  body: string;
  link?: { label: string; href: string };
  /** the featured story on the right */
  featured: {
    /** the small frosted chip at the top */
    chip?: string;
    /** e.g. a date, shown in capitals */
    meta: string;
    title: string;
    /** the underlined source link at the foot */
    source: { label: string; href: string };
    /** the story's picture; empty shows a placeholder */
    media?: ReactNode;
  };
  className?: string;
}

export function NekoPress({ label, title, body, link, featured, className }: NekoPressProps) {
  return (
    <section className={cn("bg-background font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {label && <NekoSectionLabel label={label} className="pt-section" />}
        <div className="mt-section grid gap-10 lg:grid-cols-2 lg:gap-3">
          <div>
            <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.025em] lg:text-[4.25rem] lg:leading-[1.18]">{title}</h2>
            <p className="mt-8 max-w-[30rem] text-base leading-6 lg:mt-12 lg:text-lg">{body}</p>
            {link && <NekoArrowLink label={link.label} href={link.href} className="mt-6 lg:mt-10" />}
          </div>
          <article className="relative">
            <NekoSlot media={featured.media} tone="lemon" className="aspect-[350/500] rounded-[1.8rem] lg:aspect-square">
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(transparent_55%,color-mix(in_oklab,var(--foreground)_60%,transparent))] dark:bg-[linear-gradient(transparent_45%,color-mix(in_oklab,var(--background)_80%,transparent))]" />
              {featured.chip && (
                <span className="absolute top-6 left-6 flex h-10 items-center rounded-full bg-background/75 px-4 text-sm text-foreground backdrop-blur-sm lg:top-10 lg:left-10 lg:text-base">
                  {featured.chip}
                </span>
              )}
              <div className="absolute inset-x-6 bottom-8 text-background lg:inset-x-10 lg:bottom-10 dark:text-foreground">
                <p className="text-xs font-medium tracking-[0.08em] uppercase lg:text-sm">{featured.meta}</p>
                <h3 className="mt-3 font-display text-[1.75rem] leading-8 tracking-[-0.02em] lg:text-[2rem] lg:leading-10">{featured.title}</h3>
                <a href={featured.source.href} className="mt-6 inline-flex items-center gap-1 text-sm underline underline-offset-4 lg:mt-8 lg:text-base">
                  {featured.source.label}
                  <ArrowUpRight aria-hidden className="size-3.5" strokeWidth={1.5} />
                </a>
              </div>
            </NekoSlot>
          </article>
        </div>
      </div>
    </section>
  );
}
