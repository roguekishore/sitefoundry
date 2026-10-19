import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal } from "@foundry/newhalo-reveal";
import "./newhalo-product-features.css";

export interface NewhaloProductFeature {
  /** the 24px title */
  title: string;
  /** a short paragraph under it */
  text: string;
  /** the small icon top right (e.g. a lucide icon); rings pulse out of it */
  icon: ReactNode;
  /** a close-up filling the lower part of the card; empty shows the placeholder */
  media?: ReactNode;
  /** span the full width (a taller card) */
  wide?: boolean;
}

export interface NewhaloProductFeaturesProps {
  /** the anchor id (for the sub-navigation) */
  id?: string;
  /** the 100px heading */
  title: string;
  /** the big product scene under the heading; empty shows the placeholder */
  scene?: ReactNode;
  /** the bento cards: two per row, or one when wide */
  features: NewhaloProductFeature[];
  className?: string;
}

/**
 * A black product section: a 100px white heading, a wide scene slot, then a bento of graphite
 * cards (two per row, some full width) each with a title, a paragraph, a close-up slot and a
 * small icon that sends out pulsing cobalt rings. Cards bloom in; titles rise.
 */
export function NewhaloProductFeatures({ id, title, scene, features, className }: NewhaloProductFeaturesProps) {
  return (
    <section id={id} className={cn("dark bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 className={cn("max-w-[52rem] font-display text-[3.125rem] leading-[0.95] tracking-[-0.015em] lg:text-[6.25rem]", newhaloReveal("sweep"))}>{title}</h2>
        <NewhaloMedia tone="glow" className="-mx-gutter mt-10 aspect-square lg:mt-0 lg:aspect-[1.85]">
          {scene}
        </NewhaloMedia>
        <ul className="mt-6 grid gap-0.5 lg:mt-0 lg:grid-cols-2">
          {features.map((f, i) => (
            <li
              key={f.title}
              className={cn("relative isolate h-[29rem] overflow-clip rounded-lg bg-card text-card-foreground lg:h-[28.75rem]", f.wide && "lg:col-span-2 lg:h-[37.5rem]", newhaloReveal("bloom"))}
            >
              <NewhaloMedia className="absolute inset-x-0 top-[38%] bottom-0 -z-10 opacity-50">{f.media}</NewhaloMedia>
              <div className="flex items-start justify-between gap-6 p-gutter lg:p-[1.875rem]">
                <div className={cn("max-w-[21rem]", newhaloReveal("rise"))} style={{ "--newhalo-rise": "30px" } as CSSProperties}>
                  <h3 className="font-display text-[1.3rem] leading-[1.1] lg:text-2xl">{f.title}</h3>
                  <p className="mt-3 text-[0.91rem] leading-normal lg:mt-4 lg:text-base">{f.text}</p>
                </div>
                <span aria-hidden className="relative mr-2 flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background [&_svg]:size-4">
                  <span className="newhalo-product-features-ring absolute -inset-2 rounded-full border border-chart-4" />
                  <span className="newhalo-product-features-ring absolute -inset-2 rounded-full border border-chart-4" />
                  {f.icon}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
