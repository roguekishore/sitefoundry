import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { gradientClass, type AirwallexTone } from "@foundry/airwallex-gradient";
import { AirwallexHeading } from "@foundry/airwallex-heading";
import { AirwallexPlaceholder } from "@foundry/airwallex-placeholder";
import "./airwallex-solutions.css";

export interface AirwallexSolution {
  /** the card's bold title */
  title: string;
  /** one short line under it */
  description: string;
  /** where the card links to */
  href: string;
  /** the icon before the title (a lucide icon works) */
  icon?: ReactNode;
  /** the card's gradient */
  tone: AirwallexTone;
  /** the product shot peeking up from the bottom; empty for a placeholder */
  media?: ReactNode;
  /** accessible label for the arrow */
  linkLabel?: string;
}

export interface AirwallexSolutionsProps {
  /** the grey caps line above the headline */
  eyebrow?: string;
  /** the headline */
  title: string;
  /** the paragraph under the headline */
  intro?: string;
  /** five cards fill the desktop row */
  items: AirwallexSolution[];
  className?: string;
}

/** Heading and a row of gradient product cards. */
export function AirwallexSolutions({ eyebrow, title, intro, items, className }: AirwallexSolutionsProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[4.5rem] pb-14 lg:px-12 lg:pt-24 lg:pb-[8.25rem]">
        <AirwallexHeading eyebrow={eyebrow} title={title} intro={intro} gap="lg" className="max-w-[21rem] lg:max-w-none" />
        <ul className="mt-12 grid gap-2 lg:mt-20 lg:grid-cols-5 lg:gap-4">
          {items.map((item, i) => (
            <li key={item.title} className="airwallex-solutions-card" style={{ "--airwallex-i": i } as CSSProperties}>
              <a
                href={item.href}
                aria-label={item.linkLabel}
                className={cn(
                  "group flex h-[19.5rem] flex-col items-center overflow-clip rounded-[1rem] px-6 pt-11 text-center text-primary-foreground lg:h-[22.25rem] lg:px-4 lg:pt-10",
                  "transition-[scale,box-shadow] duration-300 ease-out hover:scale-[1.01] hover:shadow-[0_2px_12px_0_color-mix(in_oklab,var(--foreground)_12%,transparent)] motion-reduce:transition-none",
                  gradientClass(item.tone),
                )}
              >
                <span className="flex items-center gap-2.5 font-display text-base font-bold lg:text-xl [&_svg]:size-6 lg:[&_svg]:size-8">
                  {item.icon}
                  {item.title}
                </span>
                <span className="mt-3 max-w-[11rem] text-sm leading-[1.25] lg:mt-2.5 lg:text-[0.9375rem]">{item.description}</span>
                <ArrowRight aria-hidden className="mt-4 size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none lg:mt-5" strokeWidth={2.5} />
                <span className="mt-auto block w-[13rem] max-w-full lg:w-full">
                  {item.media ?? <AirwallexPlaceholder tone="frost" className="aspect-[4/3] w-full rounded-t-md" />}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
