import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WhoopPlaceholder } from "@foundry/whoop-placeholder";
import { WhoopSectionHeading } from "@foundry/whoop-section-heading";

export interface WhoopStatementProps {
  /** the big heading */
  heading: string;
  /** the paragraph (leave out for a heading alone) */
  body?: string;
  /** show the photo frame under the text */
  showMedia?: boolean;
  /** the photo, filling the frame (object-cover); a grey placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** A display heading with its paragraph, and an optional big rounded photo. */
export function WhoopStatement({ heading, body, showMedia, media, className }: WhoopStatementProps) {
  return (
    <section className={cn("bg-background py-section text-foreground lg:py-24", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <WhoopSectionHeading heading={heading} body={body} />
        {showMedia && (
          <div className="group mt-[3.125rem] aspect-square overflow-clip rounded-[1.875rem] sm:aspect-[16/10] lg:mt-16 lg:aspect-[1240/560]">
            <div className="size-full transition-transform duration-250 ease-out group-hover:scale-[1.015] motion-reduce:transition-none *:size-full *:object-cover">
              {media ?? <WhoopPlaceholder tone="photo" />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
