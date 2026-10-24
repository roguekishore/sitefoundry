import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";

export interface ReflectResearchItem {
  /** a 32px line icon */
  icon: ReactNode;
  title: string;
  /** "\n" breaks the line on desktop only */
  text: string;
}

export interface ReflectResearchProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  /** the half-disc picture rising from the horizon (a radar illustration in the original); a glow wash when empty */
  media?: ReactNode;
  mediaLabel?: string;
  /** the round emblem sitting on the horizon (the app mark in the original); a muted disc when empty */
  emblem?: ReactNode;
  emblemLabel?: string;
  /** two centred items split by a hairline */
  items: ReflectResearchItem[];
  className?: string;
}

/** A glowing half-disc on a horizon line, an emblem on it, then heading and two centred items. */
export function ReflectResearch({ eyebrow, title, lead, media, mediaLabel, emblem, emblemLabel, items, className }: ReflectResearchProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background pt-[4.25rem] pb-[6rem] text-foreground lg:pb-[9rem]", className)}>
      {/* the horizon: a half disc standing on a full-width hairline */}
      <div className="relative h-[27.5rem]">
        <ReflectMedia
          tone="rise"
          reveal
          label={mediaLabel}
          className="absolute bottom-0 left-1/2 h-[27.8rem] w-[55.625rem] -translate-x-1/2 rounded-t-full border-t border-x border-highlight/20 bg-[radial-gradient(50%_100%_at_50%_100%,color-mix(in_oklab,var(--glow)_32%,transparent),color-mix(in_oklab,var(--glow)_8%,transparent)_70%,transparent)]"
        >
          {media}
        </ReflectMedia>
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--highlight)_30%,transparent)_20%,color-mix(in_oklab,var(--highlight)_30%,transparent)_80%,transparent)]"
        />
        <ReflectMedia
          tone="panel"
          label={emblemLabel}
          className="absolute bottom-0 left-1/2 size-20 -translate-x-1/2 translate-y-1/2 rounded-full border border-highlight/40 bg-[radial-gradient(70%_70%_at_50%_35%,color-mix(in_oklab,var(--glow)_70%,var(--primary)),var(--primary))] shadow-[0_0_40px_color-mix(in_oklab,var(--glow)_45%,transparent)]"
        >
          {emblem}
        </ReflectMedia>
      </div>
      <div className="relative mt-[4.25rem] px-gutter">
        <ReflectHeading eyebrow={eyebrow} title={title} lead={lead} leadClassName="max-w-[21rem] sm:max-w-[34rem]" />
      </div>
      <ul className="mx-auto mt-6 grid max-w-[55.625rem] px-gutter lg:mt-[3.75rem] lg:grid-cols-2 lg:px-0">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col items-center border-border px-6 pt-9 pb-9 text-center max-lg:border-t lg:py-0 lg:[&:not(:first-child)]:border-l"
          >
            <div className="size-8 [&_svg]:size-8">{item.icon}</div>
            <h3 className="mt-6 text-base/6 font-medium">{item.title}</h3>
            <p className="mt-2 max-w-[22rem] text-base/6 text-muted-foreground">
              {item.text.split("\n").map((part, i) => (
                <span key={i}>
                  {i > 0 && <br className="max-lg:hidden" />}
                  {i > 0 && " "}
                  {part}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
