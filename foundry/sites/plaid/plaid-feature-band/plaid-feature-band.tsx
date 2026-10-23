import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlaidButton } from "@foundry/plaid-button";
import { PlaidPlaceholder } from "@foundry/plaid-placeholder";

export interface PlaidFeatureBandProps {
  /** the white headline (about three short lines on desktop) */
  title: string;
  /** the white rainbow-rimmed pill */
  action: { label: string; href: string };
  /** the picture: right side on desktop, top on phones. A placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Plaid's navy feature panel: big white words on the left, a picture on the right. */
export function PlaidFeatureBand({ title, action, media, className }: PlaidFeatureBandProps) {
  return (
    <section className={cn("bg-background pb-24 lg:pt-24 lg:pb-[6.75rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="relative isolate flex h-[37.5rem] flex-col justify-end overflow-clip rounded-lg bg-foreground bg-linear-to-br from-foreground via-foreground to-glow text-background dark:bg-card dark:from-card dark:via-card dark:text-foreground lg:h-[44.1875rem] lg:justify-center">
          <div className="absolute inset-x-0 top-0 -z-10 h-[62%] lg:inset-y-0 lg:right-0 lg:left-auto lg:h-full lg:w-[62%]">
            {media ?? <PlaidPlaceholder tone="deep" className="size-full" />}
          </div>
          <div className="px-6 pb-8 text-center lg:max-w-[45rem] lg:px-[4.625rem] lg:pb-0 lg:text-left">
            <h2 className="font-display text-[1.875rem]/[1.25] font-medium tracking-[-0.04em] lg:text-[4.375rem]/[1.1] lg:tracking-[-0.03em]">{title}</h2>
            <PlaidButton href={action.href} variant="paper" className="mt-4 lg:mt-12">
              {action.label}
            </PlaidButton>
          </div>
        </div>
      </div>
    </section>
  );
}
