import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { M3PgMedia } from "@foundry/m3-pg-media";

export interface M3PgBandProps {
  /** the wide image (2.12:1); empty: a placeholder */
  media?: ReactNode;
  /** false: scrolls away normally instead of staying pinned under the header */
  sticky?: boolean;
  className?: string;
}

export function M3PgBand({ media, sticky = true, className }: M3PgBandProps) {
  return (
    <section
      className={cn(
        "z-0 bg-background px-gutter pb-[3.75rem] lg:pb-20",
        sticky && "sticky top-16 lg:top-[6.25rem]",
        className,
      )}
    >
      <M3PgMedia media={media} className="mx-auto aspect-[2.12] w-full max-w-page" />
    </section>
  );
}
