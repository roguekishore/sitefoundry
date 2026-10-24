import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZoeButton } from "@foundry/zoe-button";
import { ZoePlaceholder } from "@foundry/zoe-placeholder";

export interface ZoeChallengeProps {
  /** the condensed all-caps headline */
  title: string;
  /** the navy button */
  cta: { label: string; href: string };
  /** the photo with the film's title art (object-cover); a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Zoe's documentary banner panel. */
export function ZoeChallenge({ title, cta, media, className }: ZoeChallengeProps) {
  return (
    <section className={cn("py-4 lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid overflow-clip rounded-2xl bg-card text-card-foreground lg:grid-cols-2">
          <div className="flex flex-col items-center px-6 pt-10 text-center lg:items-start lg:justify-center lg:pt-0 lg:pr-10 lg:pl-10 lg:text-left">
            <h2 className="max-w-[31.5rem] font-[family-name:var(--zoe-condensed,var(--typeface-display))] text-[3rem] leading-[1.04] font-bold tracking-[-0.01em] uppercase lg:text-[2.875rem]">
              {title}
            </h2>
            <ZoeButton href={cta.href} variant="ink" className="mt-8 lg:mt-10">
              {cta.label}
            </ZoeButton>
          </div>
          <div className="relative mt-10 aspect-[358/267] *:absolute *:inset-0 *:size-full *:object-cover lg:order-first lg:mt-0 lg:aspect-[648/658]">
            {media ?? <ZoePlaceholder tone="photo" fade />}
          </div>
        </div>
      </div>
    </section>
  );
}
