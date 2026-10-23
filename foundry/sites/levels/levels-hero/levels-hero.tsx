import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LevelsButton } from "@foundry/levels-button";
import { LevelsPlaceholder } from "@foundry/levels-placeholder";

export interface LevelsHeroProps {
  /** small tracked capitals above the title */
  eyebrow?: string;
  /** the big title */
  title: ReactNode;
  /** the paragraph under the title */
  lead?: ReactNode;
  /** the white button */
  action?: { label: string; href: string };
  /** the background film or photo; fill the box (e.g. a video with object-cover). Empty: a dark placeholder */
  media?: ReactNode;
  /** screen-reader label for the placeholder */
  mediaLabel?: string;
  className?: string;
}

/** Window-tall film hero with left-aligned white type. */
export function LevelsHero({ eyebrow, title, lead, action, media, mediaLabel, className }: LevelsHeroProps) {
  return (
    <section
      className={cn(
        "dark relative isolate flex min-h-svh items-start overflow-clip bg-background px-gutter pt-[12.5rem] pb-16 text-foreground",
        "lg:items-center lg:pt-[4.5rem] lg:pb-0",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 [&>*]:size-full [&>img]:object-cover [&>video]:object-cover">
        {media ?? <LevelsPlaceholder tone="film" label={mediaLabel} />}
      </div>
      {/* the original's shade: a faint cool light at the top, darkening towards the bottom */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--muted-foreground)_14%,transparent),transparent_32%),linear-gradient(to_bottom,color-mix(in_oklab,var(--background)_16%,transparent),color-mix(in_oklab,var(--background)_58%,transparent)_45%,color-mix(in_oklab,var(--background)_82%,transparent))]"
      />
      <div className="mx-auto w-full max-w-page">
        {eyebrow ? (
          <p className="max-w-[18rem] text-sm leading-5 font-semibold tracking-[0.16em] text-foreground/76 uppercase sm:max-w-none">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-7 max-w-[56rem] font-display text-[3.5rem] leading-[1.5] font-[550] tracking-[-0.045em] lg:mt-8 lg:text-[6rem] lg:leading-[1.02]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-[41rem] text-lg leading-8 text-pretty text-foreground/86 lg:mt-7 lg:text-xl lg:leading-9">
            {lead}
          </p>
        ) : null}
        {action ? (
          <LevelsButton href={action.href} size="lg" className="mt-10 lg:mt-11">
            {action.label}
          </LevelsButton>
        ) : null}
      </div>
    </section>
  );
}
