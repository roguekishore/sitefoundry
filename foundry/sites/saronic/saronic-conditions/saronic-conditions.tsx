import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SaronicButton, type SaronicButtonProps } from "@foundry/saronic-button";
import { SaronicPlaceholder } from "@foundry/saronic-placeholder";

export interface SaronicConditionsProps {
  /** the mono caption above the title */
  eyebrow?: ReactNode;
  /** the title; add `<br className="max-lg:hidden" />` for desktop-only line breaks */
  title: ReactNode;
  /** the large paragraph under the title */
  lead?: ReactNode;
  /** the button under the text */
  cta?: { label: ReactNode; href: string; icon?: SaronicButtonProps["icon"]; external?: boolean };
  /** the full-bleed footage behind the text; empty it is a placeholder */
  media?: ReactNode;
  /** the section's anchor id */
  id?: string;
  className?: string;
}

/**
 * A full-bleed film band (3:4 on phones, 3:2 on desktop) darkened from the left, with a mono
 * caption, a big light title, a large lead and a lime button stacked at the left and centred
 * vertically.
 */
export function SaronicConditions({ eyebrow, title, lead, cta, media, id, className }: SaronicConditionsProps) {
  return (
    <section
      id={id}
      className={cn("dark relative isolate flex aspect-[3/4] items-center overflow-clip bg-background text-foreground lg:aspect-[3/2]", className)}
    >
      <SaronicPlaceholder media={media} className="absolute inset-0 -z-10" />
      <span aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-card/80 via-card/55 via-45% to-card/15" />
      <div className="w-full px-gutter py-16 lg:px-20">
        {eyebrow && <p className="font-mono text-xs/[1.5] tracking-[0.06em] text-muted-foreground uppercase">{eyebrow}</p>}
        <h2 className="mt-3 font-display text-[2rem]/[1.12] font-normal tracking-[-0.02em] [word-spacing:-0.08em] lg:text-[min(3.75vw,4.5rem)]/[1.12]">{title}</h2>
        {lead && (
          <p className="mt-6 text-xl/[1.25] font-medium tracking-[-0.02em] [word-spacing:-0.08em] lg:mt-8 lg:max-w-[40vw] lg:text-[min(1.96vw,2.25rem)]/[1.25]">{lead}</p>
        )}
        {cta && (
          <SaronicButton href={cta.href} icon={cta.icon ?? "external"} external={cta.external} className="mt-9 lg:mt-10">
            {cta.label}
          </SaronicButton>
        )}
      </div>
    </section>
  );
}
