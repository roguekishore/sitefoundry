import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SaronicSectionHeadingProps {
  /** the small mono caption above the title */
  eyebrow?: ReactNode;
  /** the section title */
  title: ReactNode;
  /** the paragraph under the title, set large */
  lead?: ReactNode;
  /** a button; parked at the right edge level with the title on desktop, under the title on phones */
  action?: ReactNode;
  /** the heading level of the title */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/**
 * The original's section opener: a mono caption, a big light title (32px on phones, 3.75vw
 * on desktop) and a large lead set in the 450 weight. Phones stack caption, title, button,
 * lead; desktop moves the button to the right edge, level with the title's last line.
 */
export function SaronicSectionHeading({ eyebrow, title, lead, action, as: Title = "h2", className }: SaronicSectionHeadingProps) {
  return (
    <div className={cn("grid gap-y-5 lg:grid-cols-[1fr_auto] lg:gap-x-10 lg:gap-y-8", className)}>
      <div>
        {eyebrow && (
          <p className="mb-2 font-mono text-xs/[1.5] tracking-[0.06em] text-muted-foreground uppercase lg:mb-3">{eyebrow}</p>
        )}
        <Title className="font-display text-[2rem]/[1.12] font-normal tracking-[-0.02em] [word-spacing:-0.08em] text-balance lg:text-[min(3.75vw,4.5rem)]/[1.12]">
          {title}
        </Title>
      </div>
      {action && <div className="flex lg:self-end">{action}</div>}
      {lead && (
        <p className="mt-1 text-xl/[1.25] font-medium tracking-[-0.02em] [word-spacing:-0.08em] lg:col-start-1 lg:mt-0 lg:max-w-[45vw] lg:text-[min(1.96vw,2.25rem)]/[1.25]">
          {lead}
        </p>
      )}
    </div>
  );
}
