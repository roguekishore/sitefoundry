import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LithicButton } from "@foundry/lithic-button";
import { LithicContours } from "@foundry/lithic-contours";
import { LithicPlaceholder } from "@foundry/lithic-placeholder";

export interface LithicHeroProps {
  /** the headline */
  title: string;
  /** the lead under it */
  text: string;
  /** the glassy pill (left) */
  secondary: { label: string; href: string };
  /** the orange pill (right) */
  primary: { label: string; href: string };
  /** the artwork behind the type, covering the panel. A placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** The opening black panel: centred headline, lead and two pills over full-bleed artwork. */
export function LithicHero({ title, text, secondary, primary, media, className }: LithicHeroProps) {
  return (
    <section className={cn("px-gutter lg:px-6", className)}>
      <div className="dark relative isolate overflow-clip rounded-lg bg-background text-foreground">
        <div className="absolute inset-0 -z-10 [&>*]:size-full [&>img]:object-cover [&>video]:object-cover">
          {media ?? (
            <>
              <LithicPlaceholder tone="wash" className="absolute inset-0" />
              <LithicContours at="72% 18%" gap={34} className="text-highlight/25" />
            </>
          )}
        </div>
        <div className="mx-auto flex max-w-[56rem] flex-col items-center px-9 py-[7.5rem] text-center lg:py-[15.5rem]">
          <h1 className="font-display text-[2.5rem]/[1] font-medium tracking-[-0.02em] md:text-[3.5rem]/[1] lg:text-[4rem]/[1]">{title}</h1>
          <p className="mt-6 max-w-[49rem] text-base/[1.4] lg:mt-[2.125rem] lg:text-2xl/[1.4]">{text}</p>
          <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row lg:mt-[2.125rem]">
            <LithicButton href={secondary.href} variant="glass" className="w-[11.625rem] sm:w-auto">
              {secondary.label}
            </LithicButton>
            <LithicButton href={primary.href} className="w-[11.625rem] sm:w-auto">
              {primary.label}
            </LithicButton>
          </div>
        </div>
      </div>
    </section>
  );
}
