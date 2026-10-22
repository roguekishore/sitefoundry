import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { IncreaseButton } from "@foundry/increase-button";
import { IncreaseHeading } from "@foundry/increase-heading";

export interface IncreaseHeroAction {
  label: string;
  href: string;
}

export interface IncreaseHeroProps {
  /** the lime pill above the headline (a news link) */
  badge?: { label: string; href: string };
  /** the headline's opening clause, semibold and dark */
  lead: string;
  /** the rest of the headline, regular and grey */
  rest?: string;
  /** the mint button */
  primary?: IncreaseHeroAction;
  /** the white outlined button beside it */
  secondary?: IncreaseHeroAction;
  /**
   * the big artwork behind the lower right of the hero, bleeding to the window's right edge
   * (an img, video or canvas; it is cropped like object-fit: cover). Empty: a soft placeholder wash.
   */
  art?: ReactNode;
  className?: string;
}

/**
 * Increase's hero: a lime news pill, a two-tone 40px statement and two buttons in the top
 * left of the framed column, with a large artwork filling the lower right out to the window.
 */
export function IncreaseHero({ badge, lead, rest, primary, secondary, art, className }: IncreaseHeroProps) {
  return (
    <section className={cn("relative overflow-x-clip border-b border-border bg-background text-foreground", className)}>
      {/* the artwork layer: lower half on phones, lower right from lg, out to the window edge */}
      <div
        aria-hidden={art ? undefined : true}
        className="absolute inset-x-0 top-[50%] bottom-0 overflow-clip lg:top-[12%] lg:left-[14%] [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover"
      >
        {art ?? <div className="size-full bg-linear-to-br from-highlight/15 via-primary/25 to-glow/45 lg:rounded-tl-2xl" />}
      </div>

      <div className="pointer-events-none relative mx-auto min-h-[34rem] max-w-page border-x border-border px-gutter pt-16 pb-40 lg:min-h-[43rem] lg:pb-48">
        <div className="pointer-events-auto">
          {badge && (
            <a
              href={badge.href}
              className="inline-flex h-9 items-center gap-2 rounded-lg bg-highlight px-3 text-sm font-semibold text-highlight-foreground transition-[filter] duration-150 hover:brightness-95 motion-reduce:transition-none"
            >
              {badge.label}
              <ArrowUpRight className="size-3.5" strokeWidth={2.25} />
            </a>
          )}
          <IncreaseHeading as="h1" size="hero" lead={lead} rest={rest} className="mt-6 lg:max-w-[44rem]" />
          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primary && <IncreaseButton href={primary.href}>{primary.label}</IncreaseButton>}
              {secondary && (
                <IncreaseButton href={secondary.href} variant="outline">
                  {secondary.label}
                </IncreaseButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
