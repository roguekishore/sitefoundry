import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WildAgMedia } from "@foundry/wild-ag-media";

export interface WildAgFilmProps {
  /** a looping video or an image. Empty: a placeholder */
  media?: ReactNode;
  /** pull up under the rounded band above by its corner radius */
  tuck?: boolean;
  className?: string;
}

export function WildAgFilm({ media, tuck = false, className }: WildAgFilmProps) {
  return (
    <section
      className={cn(
        "relative",
        tuck && "-mt-[calc(var(--radius)*3.4)] lg:-mt-[calc(var(--radius)*4.5)]",
        className,
      )}
    >
      <WildAgMedia media={media} tone="soft" roundBottom className="h-[108svh] w-full" />
    </section>
  );
}
