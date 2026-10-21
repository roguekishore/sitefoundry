import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { M3PgMedia } from "@foundry/m3-pg-media";

export interface M3PgHeroProps {
  /** the opening film or animated logo (<video> or <img>); empty: a placeholder */
  media?: ReactNode;
  /** an id for in-page links */
  id?: string;
  className?: string;
}

export function M3PgHero({ media, id, className }: M3PgHeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "bg-background px-gutter pt-[5.875rem] pb-[8.25rem] lg:flex lg:h-[calc(100svh-6rem)] lg:min-h-[36rem] lg:items-center lg:py-0 lg:pb-24",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-page lg:grid lg:grid-cols-4 lg:gap-x-5">
        <M3PgMedia media={media} className="aspect-[1.75] w-full lg:col-span-2 lg:col-start-2" />
      </div>
    </section>
  );
}
