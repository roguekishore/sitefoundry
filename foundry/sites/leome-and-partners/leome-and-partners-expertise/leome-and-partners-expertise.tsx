import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { LeomeAndPartnersCornerMarks } from "@foundry/leome-and-partners-corner-marks";
import { LeomeAndPartnersLineLink } from "@foundry/leome-and-partners-line-link";
import { LeomeAndPartnersWordReveal } from "@foundry/leome-and-partners-word-reveal";
import { cn } from "@foundry/foundry-utils";
import "./leome-and-partners-expertise.css";

export interface LeomeAndPartnersExpertiseArea {
  /** the small index at the card's top-left ("01") */
  number: string;
  /** the area's name at the card's bottom-left */
  title: string;
  href: string;
}

export interface LeomeAndPartnersExpertiseProps {
  /** the heading, one entry per line at desktop */
  title: string[];
  /** the link beside the heading: top-right at desktop, after the first card on phones */
  link?: { label: string; href: string };
  /** the areas as square cards; the first four take the staggered desktop pattern, more follow in rows */
  areas: LeomeAndPartnersExpertiseArea[];
  /** the two small squares near the bottom corners */
  marks?: boolean;
  className?: string;
}

// Where the first four cards rest at 1024px and up (three columns): column, row and how far
// down (as a share of the column width), plus their parallax drift (share of the card's
// height). Each card enters lower than it rests and leaves higher, so they spread apart.
const slots = [
  { place: "lg:col-start-2 lg:row-start-1", from: "20%", to: "-10%" },
  { place: "lg:col-start-1 lg:row-start-2 lg:mt-[7%]", from: "30%", to: "-10%" },
  { place: "lg:col-start-3 lg:row-start-2 lg:mt-[7%]", from: "40%", to: "-15%" },
  { place: "lg:col-start-2 lg:row-start-2 lg:mt-[115%]", from: "20%", to: "-10%" },
];

const ease = "ease-[cubic-bezier(0.625,0.05,0,1)]";

/**
 * Practice areas as square hairline cards with an index, a filled arrow tile and the name.
 * Phones stack them full width; from 1024px they scatter over three columns and drift at
 * three different speeds. As each card enters, a primary panel covering it shrinks into its
 * top-right corner and the name brightens; on hover the arrow flies out and a copy flies in.
 */
export function LeomeAndPartnersExpertise({ title, link, areas, marks = true, className }: LeomeAndPartnersExpertiseProps) {
  return (
    <section className={cn("relative overflow-clip bg-background px-gutter py-section font-sans text-foreground", className)}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        <h2 className="font-display text-[2.75rem] leading-[1.05] font-medium tracking-[-0.02em] lg:col-start-1 lg:row-start-1 lg:text-[4rem]">
          {title.map((line, i) => (
            <span key={i} className="block">
              <LeomeAndPartnersWordReveal text={line} />
            </span>
          ))}
        </h2>

        {areas.map((area, i) => {
          const slot = slots[i];
          return [
            <div
              key={area.href + i}
              className={cn("leome-and-partners-expertise-slot", slot?.place)}
              style={slot ? ({ "--lp-from": slot.from, "--lp-to": slot.to } as CSSProperties) : undefined}
            >
              <a
                href={area.href}
                className={cn(
                  "leome-and-partners-expertise-card group relative block aspect-square overflow-clip border border-border p-6 transition-colors duration-[600ms] hover:border-input motion-reduce:transition-none",
                  ease,
                )}
              >
                <span aria-hidden className="leome-and-partners-expertise-cover absolute inset-0 bg-primary" />
                <span className="relative block text-xs leading-none font-medium">{area.number}</span>
                <span aria-hidden className="absolute top-6 right-6 size-12 overflow-clip bg-primary text-primary-foreground">
                  <ArrowUpRight
                    strokeWidth={1.75}
                    className={cn("absolute top-1/2 left-1/2 -mt-[2.125rem] -ml-[2.125rem] size-[4.25rem] transition-[translate] duration-[600ms] group-hover:translate-x-[150%] group-hover:-translate-y-[150%] motion-reduce:transition-none", ease)}
                  />
                  <ArrowUpRight
                    strokeWidth={1.75}
                    className={cn("absolute top-1/2 left-1/2 -mt-[2.125rem] -ml-[2.125rem] size-[4.25rem] -translate-x-[150%] translate-y-[150%] transition-[translate] duration-[600ms] group-hover:translate-0 motion-reduce:transition-none", ease)}
                  />
                </span>
                <span className="leome-and-partners-expertise-name absolute right-6 bottom-6 left-6 text-2xl leading-[1.1] font-medium tracking-[-0.01em] lg:text-[2rem]">
                  {area.title}
                </span>
              </a>
            </div>,
            i === 0 && link && (
              <div key="link" className="lg:col-start-3 lg:row-start-1 lg:justify-self-end">
                <LeomeAndPartnersLineLink label={link.label} href={link.href} />
              </div>
            ),
          ];
        })}
      </div>
      {marks && <LeomeAndPartnersCornerMarks edge="bottom" />}
    </section>
  );
}
