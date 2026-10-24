import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectButton } from "@foundry/reflect-button";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";
import { ReflectStarfield } from "@foundry/reflect-starfield";
import "./reflect-about.css";

export interface ReflectAboutProps {
  eyebrow?: string;
  /** "\n" breaks the line on desktop only */
  title: string;
  /** "\n" breaks the line on desktop only */
  lead?: string;
  action?: { label: string; href: string };
  /** the globe rising from the bottom edge (a dotted WebGL globe in the original); a muted disc when empty */
  media?: ReactNode;
  mediaLabel?: string;
  className?: string;
}

/** The team: heading and a button, then a globe rising out of the section's bottom edge. */
export function ReflectAbout({ eyebrow, title, lead, action, media, mediaLabel, className }: ReflectAboutProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background pt-[5.75rem] text-foreground lg:pt-24", className)}>
      <ReflectStarfield size={1300} count={110} seed={59} strength={55} />
      {/* faint side rules */}
      <span aria-hidden className="absolute top-40 left-[calc(50%-31.25rem)] hidden h-80 w-px bg-[linear-gradient(180deg,transparent,var(--border),transparent)] lg:block" />
      <span aria-hidden className="absolute top-40 right-[calc(50%-31.25rem)] hidden h-80 w-px bg-[linear-gradient(180deg,transparent,var(--border),transparent)] lg:block" />
      <div className="relative px-gutter">
        <ReflectHeading eyebrow={eyebrow} title={title} lead={lead} leadClassName="max-w-[19.5rem] sm:max-w-[28rem]">
          {action && (
            <ReflectButton href={action.href} variant="secondary">
              {action.label}
            </ReflectButton>
          )}
        </ReflectHeading>
      </div>
      <div className="relative mt-[4.5rem] h-[22.5rem] lg:mt-[3.75rem]">
        <div className="reflect-about-globe absolute top-0 left-1/2 size-[44rem] -translate-x-1/2 lg:size-[54.375rem]">
          <ReflectMedia
            tone="panel"
            label={mediaLabel}
            className="size-full rounded-full bg-[radial-gradient(60%_60%_at_50%_30%,color-mix(in_oklab,var(--foreground)_10%,transparent),color-mix(in_oklab,var(--muted)_60%,transparent)_70%,transparent)]"
          >
            {media}
          </ReflectMedia>
          <span aria-hidden className="reflect-about-rim absolute -inset-2 rounded-full border border-foreground/15 border-b-transparent border-l-foreground/5" />
        </div>
      </div>
    </section>
  );
}
