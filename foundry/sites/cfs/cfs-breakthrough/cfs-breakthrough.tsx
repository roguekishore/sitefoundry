import type { ReactNode } from "react";
import { CfsMedia } from "@foundry/cfs-media";
import { CfsRingLink } from "@foundry/cfs-ring-link";
import { CfsSectionTitle } from "@foundry/cfs-section-title";
import { cn } from "@foundry/foundry-utils";

export interface CfsFigure {
  /** the small monospace number above it, e.g. "01" */
  label: string;
  /** the photo or drawing. Empty: a placeholder */
  media?: ReactNode;
}

export interface CfsBreakthroughProps {
  /** the section title */
  title: string;
  /** the long paragraph; it flows into two columns on wide screens */
  body: string;
  /** exactly three figures: the wide photo, the small photo, the bleeding drawing */
  figures: [CfsFigure, CfsFigure, CfsFigure];
  /** the ring-arrow link under the text */
  link: { label: string; href: string };
  className?: string;
}

function FigureLabel({ children }: { children: string }) {
  return <p className="mb-[5px] font-mono text-sm leading-[1.2]">{children}</p>;
}

/** Title, numbered figures on a 4-column grid, two-column text and a ring link. */
export function CfsBreakthrough({ title, body, figures, link, className }: CfsBreakthroughProps) {
  const [wide, small, drawing] = figures;
  return (
    <section className={cn("overflow-x-clip bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <CfsSectionTitle>{title}</CfsSectionTitle>

        <div className="mt-[1.875rem] grid grid-cols-1 lg:mt-[4.375rem] lg:grid-cols-4 lg:gap-x-5">
          {/* the paragraph comes first on phones, under the wide photo on wide screens */}
          <p className="order-first max-w-[57rem] text-base leading-[1.5] lg:order-none lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:mt-16 lg:columns-2 lg:gap-12">
            {body}
          </p>

          <figure className="mt-[1.875rem] lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:mt-0">
            <FigureLabel>{wide.label}</FigureLabel>
            <CfsMedia media={wide.media} rule className="aspect-[3/2]" />
          </figure>

          <div className="mt-5 grid grid-cols-2 items-start gap-x-[15px] lg:col-start-4 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:grid-cols-1 lg:gap-y-[1.375rem]">
            <figure>
              <FigureLabel>{small.label}</FigureLabel>
              <CfsMedia media={small.media} rule className="aspect-[3/2]" />
            </figure>
            <figure>
              <FigureLabel>{drawing.label}</FigureLabel>
              <CfsMedia media={drawing.media} tone="drawing" className="aspect-[1.37] w-[117%] lg:w-[250%]" />
            </figure>
          </div>

          <CfsRingLink {...link} className="mt-10 justify-self-start lg:col-span-3 lg:col-start-1 lg:row-start-3 lg:mt-[2.625rem]" />
        </div>
      </div>
    </section>
  );
}
