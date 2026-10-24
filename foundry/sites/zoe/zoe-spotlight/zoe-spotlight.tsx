import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZoeButton } from "@foundry/zoe-button";
import { ZoePlaceholder } from "@foundry/zoe-placeholder";

export interface ZoeSpotlightProps {
  /** the chunky headline */
  title: string;
  /** the pitch, one string per paragraph */
  body: string[];
  /** the button */
  cta: { label: string; href: string };
  /** the product photo, shot on navy (object-cover); a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Zoe's split product spotlight panel. */
export function ZoeSpotlight({ title, body, cta, media, className }: ZoeSpotlightProps) {
  return (
    <section className={cn("pt-4 pb-12 lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid overflow-clip rounded-2xl bg-foreground text-background lg:h-[41.125rem] lg:grid-cols-2 lg:bg-accent lg:text-accent-foreground dark:bg-card dark:text-card-foreground lg:dark:bg-accent lg:dark:text-accent-foreground">
          <div className="flex flex-col items-center px-6 pt-10 text-center lg:items-start lg:justify-center lg:px-[4.25rem] lg:pt-0 lg:text-left">
            <h2 className="max-w-[26rem] font-display text-[2.75rem] leading-[1.02] font-extrabold tracking-[-0.045em] text-balance lg:text-[3.875rem]">
              {title}
            </h2>
            <div className="mt-10 hidden max-w-[26rem] space-y-1 text-[1.375rem] leading-[1.2] font-semibold lg:block">
              {body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ZoeButton
              href={cta.href}
              className="mt-7 lg:mt-9 lg:bg-foreground lg:text-background lg:hover:brightness-75"
            >
              {cta.label}
            </ZoeButton>
          </div>
          <div className="relative mt-8 aspect-[358/372] sm:aspect-[16/10] *:absolute *:inset-0 *:size-full *:object-cover lg:order-first lg:mt-0 lg:aspect-auto">
            {media ?? <ZoePlaceholder tone="ink" />}
          </div>
        </div>
      </div>
    </section>
  );
}
