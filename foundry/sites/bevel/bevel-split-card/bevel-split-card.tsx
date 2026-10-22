import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BevelCard, type BevelTint } from "@foundry/bevel-card";
import { bevelLead, bevelTitle } from "@foundry/bevel-heading";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";

export interface BevelSplitCardProps {
  /** the big title (two lines) */
  title: ReactNode;
  /** the grey paragraph under it */
  text: ReactNode;
  /** the UI cluster beside the text, running off the card's edges; a translucent panel when empty */
  media?: ReactNode;
  /** the colour rising from the card's foot */
  tint?: BevelTint;
  className?: string;
}

/**
 * One full-width pale card, 657px tall on desktop: a big title and paragraph centered on the
 * left, and a cluster of app UI on the right half running off the top, right and bottom
 * edges. On phones the text sits on top and the UI below it.
 */
export function BevelSplitCard({ title, text, media, tint = "lavender", className }: BevelSplitCardProps) {
  return (
    <section className={cn("bg-background py-2 text-foreground lg:py-4", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-[calc(var(--page-gutter)*2)]">
        <BevelCard tint={tint} className="flex h-[40.25rem] flex-col lg:h-[41rem] lg:flex-row lg:items-center">
          <div className="px-10 pt-10 lg:w-1/2 lg:p-0 lg:pl-20">
            <h2 className={cn(bevelTitle.lg, "max-w-[12ch]")}>{title}</h2>
            <p className={cn(bevelLead, "mt-4 max-w-[16rem] lg:max-w-[23rem]")}>{text}</p>
          </div>
          <div className="relative mt-12 min-h-0 flex-1 lg:absolute lg:inset-y-0 lg:right-0 lg:left-1/2 lg:mt-0">
            <div className="absolute inset-y-0 -left-4 -right-4 lg:-top-8 lg:-bottom-8 lg:left-0 lg:-right-8">
              {media ?? <BevelPlaceholder tone="panel" className="size-full rounded-lg" />}
            </div>
          </div>
        </BevelCard>
      </div>
    </section>
  );
}
