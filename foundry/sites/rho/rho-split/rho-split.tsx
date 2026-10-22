import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RhoButton } from "@foundry/rho-button";
import { RhoHeading } from "@foundry/rho-heading";
import { RhoReveal } from "@foundry/rho-reveal";

export interface RhoSplitProps {
  /** small mono label above the heading */
  eyebrow?: string;
  /** the heading */
  title: string;
  /** the paragraph under it */
  body: string;
  /** an optional outline button under the paragraph */
  action?: { label: string; href: string };
  /** the video or image; empty: a dark placeholder panel */
  media?: ReactNode;
  /** width ÷ height of the media panel on desktop (phones use 0.97) */
  mediaRatio?: number;
  /** which side the media sits on from 1024px up */
  mediaSide?: "left" | "right";
  /** dark or light section */
  tone?: "dark" | "light";
  className?: string;
}

export function RhoSplit({
  eyebrow,
  title,
  body,
  action,
  media,
  mediaRatio = 576 / 560,
  mediaSide = "right",
  tone = "light",
  className,
}: RhoSplitProps) {
  return (
    <section
      data-rho-tone={tone}
      className={cn(tone === "dark" && "dark", "bg-background py-14 text-foreground lg:py-section", className)}
    >
      <div className="mx-auto grid max-w-page items-center gap-10 px-gutter lg:grid-cols-2 lg:gap-16">
        <div className={cn(mediaSide === "left" && "lg:order-2")}>
          {eyebrow && (
            <RhoReveal as="p" className="mb-6 font-mono text-[0.6875rem] font-medium tracking-[0.06em] text-muted-foreground uppercase">
              {eyebrow}
            </RhoReveal>
          )}
          <RhoHeading text={title} className="max-w-[36rem]" />
          <RhoReveal as="p" className="mt-6 max-w-[32rem] text-[1.125rem] leading-[1.45] lg:mt-8 lg:text-xl lg:leading-[1.5]">
            {body}
          </RhoReveal>
          {action && (
            <RhoReveal className="mt-8">
              <RhoButton href={action.href} variant="outline" className="h-11 px-[1.375rem] text-sm font-medium">
                {action.label}
              </RhoButton>
            </RhoReveal>
          )}
        </div>
        <div
          className={cn(
            "aspect-[0.97] w-full overflow-clip rounded-lg lg:aspect-[var(--rho-ratio)]",
            mediaSide === "left" && "lg:order-1",
          )}
          style={{ "--rho-ratio": mediaRatio } as CSSProperties}
        >
          {media ?? <div className="dark size-full border border-border bg-background" />}
        </div>
      </div>
    </section>
  );
}
