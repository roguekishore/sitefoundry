import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectButton } from "@foundry/reflect-button";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";

export interface ReflectPrivacyProps {
  eyebrow?: string;
  /** a short line, shown big (72px on desktop) */
  title: string;
  /** "\n" breaks the line on desktop only */
  lead?: string;
  action?: { label: string; href: string };
  /** the glowing field behind everything (a looping video of scrambled text in the original); a glow wash when empty */
  media?: ReactNode;
  mediaLabel?: string;
  /** the round emblem above the badge (a padlock in the original); a violet disc when empty */
  emblem?: ReactNode;
  emblemLabel?: string;
  className?: string;
}

/** A big short heading in a pool of violet light, an emblem above it and one button. */
export function ReflectPrivacy({ eyebrow, title, lead, action, media, mediaLabel, emblem, emblemLabel, className }: ReflectPrivacyProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background pt-[8.5rem] pb-12 text-foreground lg:pt-[13.875rem] lg:pb-[14.75rem]", className)}>
      <ReflectMedia
        tone="glow"
        reveal
        label={mediaLabel}
        className="absolute top-1/2 left-1/2 -z-10 h-[34rem] w-[50rem] -translate-1/2 lg:h-[55.125rem] lg:w-[98rem]"
      >
        {media}
      </ReflectMedia>
      <div className="relative flex flex-col items-center px-gutter">
        <ReflectMedia
          tone="panel"
          label={emblemLabel}
          className="mb-12 size-[6.25rem] rounded-full border border-highlight/40 bg-[radial-gradient(70%_70%_at_50%_35%,color-mix(in_oklab,var(--glow)_70%,var(--primary)),var(--primary))] shadow-[0_0_48px_color-mix(in_oklab,var(--glow)_50%,transparent)]"
        >
          {emblem}
        </ReflectMedia>
        <ReflectHeading size="display" eyebrow={eyebrow} title={title} lead={lead} leadClassName="max-w-[18.5rem] sm:max-w-[25.5rem]">
          {action && (
            <ReflectButton href={action.href} variant="secondary">
              {action.label}
            </ReflectButton>
          )}
        </ReflectHeading>
      </div>
    </section>
  );
}
