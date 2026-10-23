import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PaxosPlaceholder } from "@foundry/paxos-placeholder";

export interface PaxosLockupMark {
  /** the wordmark's text */
  name: string;
  /** an optional mark before it (e.g. a lucide icon) */
  icon?: ReactNode;
  /** caps: spaced small capitals · bold: heavy italic, like a consumer brand */
  style?: "caps" | "bold";
}

export interface PaxosPartnerProps {
  /** the two wordmarks of the co-brand lockup */
  lockup: PaxosLockupMark[];
  /** the section title */
  title: ReactNode;
  /** the film (a video element or embed); a dark frame with a play button when empty */
  media?: ReactNode;
  /** screen-reader label for the placeholder's play button */
  playLabel?: string;
  className?: string;
}

/** Co-brand lockup, title and a wide film frame. */
export function PaxosPartner({ lockup, title, media, playLabel, className }: PaxosPartnerProps) {
  return (
    <section className={cn("bg-background px-gutter pt-14 pb-10 lg:pt-[6.5rem] lg:pb-[6.25rem]", className)}>
      <div className="mx-auto flex max-w-[62rem] flex-col lg:items-center lg:text-center">
        <p className="flex items-center gap-3">
          {lockup.map((mark, i) => (
            <span key={mark.name} className="flex items-center gap-3">
              {i > 0 ? <span aria-hidden className="h-7 w-px bg-muted-foreground/60" /> : null}
              <span
                className={cn(
                  "flex items-center gap-1.5 text-foreground [&>svg]:size-5",
                  mark.style === "bold" ? "text-[0.95rem] font-extrabold italic tracking-[-0.01em]" : "text-sm tracking-[0.14em] uppercase",
                )}
              >
                {mark.icon}
                {mark.name}
              </span>
            </span>
          ))}
        </p>
        <h2 className="mt-7 max-w-[47rem] font-display text-2xl/[1.2] font-normal tracking-[-0.02em] text-balance text-foreground lg:mt-9 lg:text-5xl/[1.125]">
          {title}
        </h2>
        <div className="relative mt-8 aspect-[350/199] w-full overflow-clip rounded-lg lg:mt-20 lg:aspect-[992/565]">
          {media ?? (
            <>
              <PaxosPlaceholder tone="film" />
              <span
                role="img"
                aria-label={playLabel}
                className="absolute top-1/2 left-1/2 grid size-14 -translate-1/2 place-items-center rounded-full bg-background/90 text-foreground lg:size-20"
              >
                <Play aria-hidden className="size-5 translate-x-0.5 fill-current lg:size-7" />
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
