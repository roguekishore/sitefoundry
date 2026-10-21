import type { ReactNode } from "react";
import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { EsrbespokeParallax } from "@foundry/esrbespoke-parallax";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeMediaStatementProps {
  /** the heading at the upper left */
  title: string;
  /** a short paragraph in tiny capitals, bottom of column 9 */
  note: string;
  /** the photo (fills like object-fit: cover). Empty: a placeholder */
  media?: ReactNode;
  id?: string;
  className?: string;
}

/** Tall full-bleed photo with a white heading at the upper left and a caps note near the bottom. */
export function EsrbespokeMediaStatement({ title, note, media, id, className }: EsrbespokeMediaStatementProps) {
  return (
    <section id={id} className={cn("dark relative h-svh overflow-clip bg-background text-foreground lg:h-[140svh]", className)}>
      <EsrbespokeParallax media={media} fadeIn className="absolute inset-0" />
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-[1fr_auto] gap-x-4 px-gutter pt-36 pb-7 lg:grid-cols-12 lg:pt-[18.75rem] lg:pb-8">
        <h2 className="col-span-2 max-w-[8em] self-start font-display text-[2.375rem] leading-[0.95] font-medium tracking-[-0.01em] font-stretch-[106%] lg:col-span-6 lg:text-[3.875rem]">
          {title}
        </h2>
        <EsrbespokeLabel as="p" className="col-span-2 row-start-2 max-w-[19.5rem] font-semibold lg:col-span-4 lg:col-start-9">
          {note}
        </EsrbespokeLabel>
      </div>
    </section>
  );
}
