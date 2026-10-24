import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FramerButton } from "@foundry/framer-button";
import { FramerSectionHead } from "@foundry/framer-heading";
import { FramerPlaceholder } from "@foundry/framer-placeholder";

export interface FramerCommunityProps {
  /** section title; "\n" breaks on desktop only */
  title: string;
  /** the grey count beside the button (e.g. "18,430 Resources") */
  count?: string;
  /** the small dark button */
  action: { label: string; href: string };
  /** the app window's content; empty shows a placeholder panel */
  media?: ReactNode;
  /** screen-reader label for the placeholder */
  mediaLabel?: string;
  className?: string;
}

/** Section head over one wide app window. */
export function FramerCommunity({ title, count, action, media, mediaLabel, className }: FramerCommunityProps) {
  return (
    <section className={cn("bg-background px-gutter py-15 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <FramerSectionHead
          title={title}
          actions={
            <>
              {count && <span className="text-sm tracking-[-0.01em] text-muted-foreground">{count}</span>}
              <FramerButton href={action.href} variant="secondary">
                {action.label}
              </FramerButton>
            </>
          }
        />
        <div className="mt-12 aspect-[350/253] overflow-clip rounded-2xl border border-border lg:mt-11 lg:aspect-auto lg:h-[52.5rem]">
          {media ?? <FramerPlaceholder tone="panel" label={mediaLabel} />}
        </div>
      </div>
    </section>
  );
}
