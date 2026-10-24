import type { ReactNode } from "react";
import { CornerDownRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SaronicPlaceholder } from "@foundry/saronic-placeholder";
import { SaronicSectionHeading } from "@foundry/saronic-section-heading";
import "./saronic-fleet.css";

export interface SaronicVessel {
  /** the vessel's name, set big over the photo */
  name: ReactNode;
  /** the small mono link text under the name ("View details") */
  linkLabel: ReactNode;
  href: string;
  /** the vessel's photo; empty it is a placeholder */
  media?: ReactNode;
  /** spans the full row on tablets and up (a 2.33:1 panorama instead of 4:3) */
  wide?: boolean;
}

export interface SaronicFleetProps {
  /** the mono caption above the title */
  eyebrow?: ReactNode;
  /** the section title */
  title: ReactNode;
  /** the large paragraph under the title */
  lead?: ReactNode;
  /** a button at the right of the title (under it on phones) */
  action?: ReactNode;
  /** the vessel cards, in reading order */
  vessels: SaronicVessel[];
  /** the section's anchor id */
  id?: string;
  className?: string;
}

/**
 * The fleet section on pale paper: a section heading with a lime button at the right, then
 * photo cards with a dark fade at the foot, the vessel's name in big light type and a mono
 * "view details" link. Two 4:3 cards side by side and a full-width panorama on desktop; one
 * column on phones. Hovering a card deepens its shadow, grows the photo 3% and rolls the link.
 */
export function SaronicFleet({ eyebrow, title, lead, action, vessels, id, className }: SaronicFleetProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter py-section text-foreground lg:py-[calc(var(--section-y)*2)]", className)}>
      <div className="mx-auto max-w-page">
        <SaronicSectionHeading eyebrow={eyebrow} title={title} lead={lead} action={action} />
        <ul className="mt-16 grid gap-4 md:grid-cols-2">
          {vessels.map((vessel, i) => (
            <li key={i} className={cn(vessel.wide && "md:col-span-2")}>
              <a
                href={vessel.href}
                className={cn(
                  "saronic-fleet-card group dark relative flex aspect-[4/3] flex-col justify-end overflow-clip rounded-xl p-6 text-foreground lg:p-10",
                  vessel.wide && "md:aspect-[1280/549]",
                )}
              >
                <SaronicPlaceholder
                  media={vessel.media}
                  className="absolute inset-0 transition-transform duration-400 ease-[cubic-bezier(0.25,0.25,0,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span aria-hidden className="absolute inset-0 bg-linear-to-b from-transparent from-45% to-card/55" />
                <span className="relative font-display text-[2rem]/[1.12] tracking-[-0.02em] lg:text-[min(3.75vw,4.5rem)]/[1.12]">
                  {vessel.name}
                </span>
                <span className="relative mt-3 flex items-center gap-2 font-mono text-xs/[1.5] tracking-[0.025em] uppercase">
                  <CornerDownRight aria-hidden strokeWidth={1.5} className="size-3.5 shrink-0 -translate-y-0.5" />
                  <span className="saronic-fleet-link inline-flex overflow-clip">
                    <span>{vessel.linkLabel}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
