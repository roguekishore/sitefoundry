import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BevelButton } from "@foundry/bevel-button";
import { BevelHeading } from "@foundry/bevel-heading";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";

export interface BevelCtaProps {
  /** the title */
  title: ReactNode;
  /** the paragraph under it */
  lead?: ReactNode;
  /** the dark pill */
  cta: { label: ReactNode; href: string; icon?: ReactNode };
  /** the wide flat-lay photo under the button, edge to edge; a muted surface when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * The closing call: a centered title, a two-line grey paragraph and the dark pill, then a
 * wide flat-lay photo running edge to edge beneath them.
 */
export function BevelCta({ title, lead, cta, media, className }: BevelCtaProps) {
  return (
    <section className={cn("overflow-clip bg-background pt-[5.5rem] pb-4 text-foreground lg:pt-[calc(var(--section-y)*2)] lg:pb-[12rem]", className)}>
      <BevelHeading title={title} lead={lead} className="max-w-[48rem] px-gutter" />
      <div className="mt-6 flex justify-center">
        <BevelButton label={cta.label} href={cta.href} icon={cta.icon} className="px-6" />
      </div>
      <div className="mx-auto mt-8 h-[23rem] w-full max-w-[90rem] lg:mt-2 lg:h-[36rem]">
        {media ?? <BevelPlaceholder tone="muted" className="size-full [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />}
      </div>
    </section>
  );
}
