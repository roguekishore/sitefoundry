import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PaxosButton } from "@foundry/paxos-button";
import { PaxosPlaceholder } from "@foundry/paxos-placeholder";

export interface PaxosHeroProps {
  /** the big title (three lines on desktop) */
  title: ReactNode;
  /** one or two sentences under the title */
  lead: ReactNode;
  /** the slate pill */
  action: { label: string; href: string };
  /** the art on the right (desktop) / below the text (phones); a soft placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Rounded gradient card with the page's first title, lead and pill, and an art slot. */
export function PaxosHero({ title, lead, action, media, className }: PaxosHeroProps) {
  return (
    <section className={cn("bg-background px-gutter", className)}>
      <div
        className={cn(
          "relative mx-auto flex h-[35.5rem] max-w-page flex-col overflow-clip rounded-lg bg-background lg:h-[34.375rem] lg:justify-center",
          // two faint lights: aqua from the top-left, lime from the bottom-right
          "bg-[radial-gradient(90%_80%_at_0%_0%,color-mix(in_oklab,var(--glow)_7%,transparent),transparent_70%),radial-gradient(85%_95%_at_100%_100%,color-mix(in_oklab,var(--highlight)_22%,transparent),transparent_80%)]",
        )}
      >
        <div className="absolute inset-x-0 bottom-0 h-[42%] lg:inset-y-0 lg:right-0 lg:left-auto lg:h-full lg:w-[56%]">
          {media ?? (
            <PaxosPlaceholder
              tone="wash"
              className="mask-t-from-60% mask-t-to-100% lg:mask-t-from-100% lg:mask-l-from-55% lg:mask-l-to-100%"
            />
          )}
        </div>
        <div className="relative flex flex-col items-center px-5 pt-[2.75rem] text-center lg:max-w-[34rem] lg:items-start lg:px-10 lg:pt-0 lg:text-left">
          <h1 className="font-display text-[2.1875rem]/[1.08] font-normal tracking-[-0.01em] text-balance text-foreground lg:max-w-[27rem] lg:text-[4rem]/[1.03]">
            {title}
          </h1>
          <p className="mt-4 max-w-[18.5rem] text-[0.9rem]/[1.4] tracking-[-0.01em] text-foreground lg:mt-5 lg:max-w-[23.5rem] lg:text-lg/[1.33]">
            {lead}
          </p>
          <PaxosButton href={action.href} className="mt-7 lg:mt-10">
            {action.label}
          </PaxosButton>
        </div>
      </div>
    </section>
  );
}
