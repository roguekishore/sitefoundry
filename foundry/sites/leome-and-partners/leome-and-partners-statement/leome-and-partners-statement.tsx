import type { ReactNode } from "react";
import { LeomeAndPartnersMediaPanel } from "@foundry/leome-and-partners-media-panel";
import { LeomeAndPartnersWordReveal } from "@foundry/leome-and-partners-word-reveal";
import { cn } from "@foundry/foundry-utils";

export interface LeomeAndPartnersStatementProps {
  /** the statement, set large at the bottom-left of the photo; it rises line by line */
  text: string;
  /** the full-bleed photo; give it `className="size-full object-cover"`. A placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-bleed photo panel (at least the window's height, 3:2 on wide screens) with corner
 * marks and a two-to-four-line statement at the bottom-left that rises line by line as it
 * scrolls in, while the photo drifts against the scroll.
 */
export function LeomeAndPartnersStatement({ text, media, className }: LeomeAndPartnersStatementProps) {
  return (
    <LeomeAndPartnersMediaPanel media={media} className={cn(className)}>
      <p className="max-w-[29em] text-[1.25rem] leading-[1.4] font-medium tracking-[-0.005em] lg:text-[1.75rem]">
        <LeomeAndPartnersWordReveal text={text} />
      </p>
    </LeomeAndPartnersMediaPanel>
  );
}
