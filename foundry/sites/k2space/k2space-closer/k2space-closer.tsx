import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { K2spaceLineReveal } from "@foundry/k2space-line-reveal";
import { K2spaceMedia } from "@foundry/k2space-media";

export interface K2spaceCloserProps {
  /** the closing line (short: one line on desktop) */
  title: string;
  /** the full-bleed photo under it */
  media?: ReactNode;
  className?: string;
}

/** A big centred closing line in black air, over one full-bleed photo. */
export function K2spaceCloser({ title, media, className }: K2spaceCloserProps) {
  return (
    <section className={cn("bg-background text-foreground [font-stretch:var(--k2space-stretch,100%)]", className)}>
      <div className="flex min-h-[506px] items-center justify-center px-gutter py-16 text-center lg:h-[50vw] lg:min-h-0 lg:py-0">
        <K2spaceLineReveal text={title} rise="lg" className="font-display text-[34px]/[1.2] font-[560] lg:text-[5.027vw]/[0.9]" />
      </div>
      <K2spaceMedia media={media} scrub className="aspect-[390/675] w-full sm:aspect-[4/3] lg:aspect-[2/1]" />
    </section>
  );
}
