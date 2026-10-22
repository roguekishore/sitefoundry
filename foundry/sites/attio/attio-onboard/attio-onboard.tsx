import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AttioBadge } from "@foundry/attio-badge";
import { AttioButton } from "@foundry/attio-button";
import { AttioHeading } from "@foundry/attio-heading";
import "./attio-onboard.css";

export interface AttioOnboardProps {
  /** the small label over the statement */
  badge?: string;
  /** the statement: dark lead… */
  lead: string;
  /** …and its long grey rest */
  rest?: string;
  /** one outline button under it */
  action?: { label: string; href: string };
  /** the record screen in the big card (≈1150 wide, cropped by the section foot); empty shows a placeholder */
  media?: ReactNode;
  mediaLabel?: string;
  className?: string;
}

/**
 * A pale-grey framed band: a badge, a long two-tone statement and an outline button
 * (centred on desktop, left-aligned on phones), then a hairline with a fading pinstripe
 * band above it and a wide white record card that rises out of a blur and is cut off by
 * the section's foot.
 */
export function AttioOnboard({ badge, lead, rest, action, media, mediaLabel, className }: AttioOnboardProps) {
  return (
    <section className={cn("bg-muted text-foreground lg:px-gutter", className)}>
      <div className="mx-auto max-w-page lg:border-x lg:border-border">
        <div className="flex flex-col items-start px-8 pt-[5.5rem] text-left sm:items-center sm:text-center lg:pt-section">
          {badge && <AttioBadge>{badge}</AttioBadge>}
          <AttioHeading lead={lead} rest={rest} className="mt-5 max-w-[57rem] lg:mt-6" />
          {action && (
            <AttioButton href={action.href} className="mt-6">
              {action.label}
            </AttioButton>
          )}
        </div>

        {/* the pinstripe band fades in toward the hairline the card stands on */}
        <div aria-hidden className="mt-0 h-[4.6rem] bg-[repeating-linear-gradient(to_right,var(--border)_0_1px,transparent_1px_8px)] [mask-image:linear-gradient(to_bottom,transparent,black)] lg:mt-0.5 lg:h-[6.4rem]" />

        <div className="h-[29rem] overflow-clip border-t border-border lg:h-[28.75rem]">
          <div
            role="img"
            aria-label={mediaLabel}
            className="attio-onboard-card ml-1 h-[36rem] w-[40rem] overflow-clip rounded-t-xl border border-border bg-card shadow-[0_1px_3px_0_color-mix(in_oklab,var(--foreground)_4%,transparent),0_0_2px_0_color-mix(in_oklab,var(--foreground)_14%,transparent)] sm:mx-auto sm:w-[min(calc(100%-2rem),71.875rem)] [&>*]:size-full [&>img]:object-cover [&>img]:object-top"
          >
            {media}
          </div>
        </div>
      </div>
    </section>
  );
}
