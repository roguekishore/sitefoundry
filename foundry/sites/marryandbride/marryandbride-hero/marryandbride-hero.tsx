import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MarryandbrideButton } from "@foundry/marryandbride-button";

export interface MarryandbrideHeroProps {
  /** small uppercase line above the title */
  eyebrow: string;
  /** the serif title, set in uppercase */
  title: string;
  cta: { label: string; href: string };
  /** the main photo (right half from 1024px, the whole screen on phones) */
  media?: ReactNode;
  /** the film in the left half from 1024px (hidden on phones) */
  sideMedia?: ReactNode;
  className?: string;
}

const fill = "[&_img]:size-full [&_img]:object-cover [&_video]:size-full [&_video]:object-cover";

/** Window-high split hero, pinned while the page slides over it. */
export function MarryandbrideHero({ eyebrow, title, cta, media, sideMedia, className }: MarryandbrideHeroProps) {
  return (
    <section className={cn("sticky top-0 z-0 grid h-[calc(100svh-1.75rem)] overflow-clip lg:grid-cols-2", className)}>
      <div className={cn("hidden bg-foreground/80 lg:block", fill)}>{sideMedia}</div>
      <div className={cn("relative bg-foreground/65", fill)}>
        {media}
        <div className="absolute inset-x-0 bottom-0 px-gutter pb-10 text-background lg:pb-[3.25rem]">
          <p className="font-sans text-[0.78rem] leading-none tracking-[0.07em] uppercase lg:text-[0.863rem]">{eyebrow}</p>
          <h1 className="mt-3 font-display text-[1.75rem] leading-[1.2] font-light uppercase lg:mt-2.5 lg:text-[2.25rem]">{title}</h1>
          <MarryandbrideButton href={cta.href} className="mt-4">
            {cta.label}
          </MarryandbrideButton>
        </div>
      </div>
    </section>
  );
}
