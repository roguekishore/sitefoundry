import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectButton } from "@foundry/reflect-button";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";
import { ReflectStarfield } from "@foundry/reflect-starfield";

export interface ReflectCtaProps {
  eyebrow?: string;
  /** "\n" breaks the line on desktop only */
  title: string;
  lead?: string;
  action: { label: string; href: string };
  /** the light rising from the bottom edge (a looping video in the original); a glow wash when empty */
  media?: ReactNode;
  mediaLabel?: string;
  className?: string;
}

/** The closing call: heading and one button over a glow rising from the section's floor. */
export function ReflectCta({ eyebrow, title, lead, action, media, mediaLabel, className }: ReflectCtaProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background pt-[4.75rem] text-foreground lg:pt-16", className)}>
      <ReflectStarfield size={1100} count={70} seed={83} strength={55} />
      <div className="relative z-10 px-gutter">
        <ReflectHeading eyebrow={eyebrow} title={title} lead={lead}>
          <ReflectButton href={action.href}>{action.label}</ReflectButton>
        </ReflectHeading>
      </div>
      <div className="relative h-[13rem] lg:h-[20.25rem]">
        <ReflectMedia
          tone="rise"
          reveal
          label={mediaLabel}
          className="absolute bottom-0 left-1/2 aspect-video w-[50rem] -translate-x-1/2 bg-[radial-gradient(30%_38%_at_50%_100%,color-mix(in_oklab,var(--glow)_95%,var(--foreground)),color-mix(in_oklab,var(--glow)_55%,transparent)_45%,color-mix(in_oklab,var(--glow)_12%,transparent)_75%,transparent)] lg:w-[125rem]"
        >
          {media}
        </ReflectMedia>
      </div>
    </section>
  );
}
