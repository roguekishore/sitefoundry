import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CursorArrowLink } from "@foundry/cursor-arrow-link";
import { CursorMedia } from "@foundry/cursor-media";
import { CursorSplitPanel } from "@foundry/cursor-split-panel";

export interface CursorResearchProps {
  /** a sentence about the team */
  statement: string;
  /** the orange link under it */
  link: { label: string; href: string };
  /** a team photo; a muted panel when empty */
  media?: ReactNode;
  /** accessible name of the empty placeholder */
  mediaLabel?: string;
  className?: string;
}

/** A team statement beside a wide photo. */
export function CursorResearch({ statement, link, media, mediaLabel, className }: CursorResearchProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter">
        <CursorSplitPanel
          mediaClassName="aspect-video lg:aspect-[1.6]"
          media={
            <CursorMedia tone="plain" label={mediaLabel} className="size-full">
              {media}
            </CursorMedia>
          }
        >
          <p className="font-display text-[0.9375rem] leading-[1.5] lg:max-w-[18em] lg:text-[1.375rem] lg:leading-[1.3] lg:tracking-[-0.005em]">
            {statement}
          </p>
          <CursorArrowLink href={link.href} className="mt-4 text-[0.9375rem] leading-6 lg:text-base">
            {link.label}
          </CursorArrowLink>
        </CursorSplitPanel>
      </div>
    </section>
  );
}
