import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SaronicButton, type SaronicButtonProps } from "@foundry/saronic-button";
import { SaronicPlaceholder } from "@foundry/saronic-placeholder";

export interface SaronicJoinProps {
  /** the mono caption at the top of the card */
  eyebrow: ReactNode;
  /** the invitation, set large */
  title: ReactNode;
  /** the button at the foot of the card */
  cta?: { label: ReactNode; href: string; icon?: SaronicButtonProps["icon"]; external?: boolean };
  /** the full-bleed photo; empty it is a placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-bleed 3:2 photo with a lime card docked in its bottom-right corner (40px in): mono
 * caption and dot, a large invitation and an ink-tinted button at the foot. Phones put the
 * photo on top and the lime card full-width under it.
 */
export function SaronicJoin({ eyebrow, title, cta, media, className }: SaronicJoinProps) {
  return (
    <section className={cn("relative bg-background lg:aspect-[3/2]", className)}>
      <SaronicPlaceholder media={media} className="aspect-[3/2] lg:absolute lg:inset-0 lg:aspect-auto" />
      <div className="relative flex flex-col bg-primary px-4 pt-10 pb-10 text-primary-foreground lg:absolute lg:right-10 lg:bottom-10 lg:min-h-[23.25rem] lg:w-[32vw] lg:rounded-lg lg:p-10">
        <div className="flex items-center gap-2 lg:justify-between">
          <span aria-hidden className="order-first size-1 shrink-0 rounded-full bg-current lg:order-last lg:size-2" />
          <p className="font-mono text-xs/[1.5] tracking-[0.025em] uppercase">{eyebrow}</p>
        </div>
        <h2 className="mt-11 font-display text-xl/[1.25] font-normal tracking-[-0.02em] lg:mt-12 lg:max-w-[23vw] lg:text-[min(1.96vw,2.25rem)]/[1.25]">
          {title}
        </h2>
        {cta && (
          <SaronicButton
            href={cta.href}
            variant="tint"
            icon={cta.icon ?? "external"}
            external={cta.external}
            className="mt-10 self-start lg:mt-auto lg:min-w-45"
          >
            {cta.label}
          </SaronicButton>
        )}
      </div>
    </section>
  );
}
