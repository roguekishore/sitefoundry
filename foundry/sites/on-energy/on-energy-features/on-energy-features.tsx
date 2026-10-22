import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OnEnergyReveal } from "@foundry/on-energy-reveal";

export interface OnEnergyFeature {
  /** a small line icon (e.g. from lucide-react); drawn with a dotted stroke */
  icon?: ReactNode;
  /** the feature's name */
  title: string;
  /** one short sentence */
  text: string;
}

export interface OnEnergyFeaturesProps {
  /** the features, shown two per row in the right half on desktop (four on the original) */
  items: OnEnergyFeature[];
  /** draw the icons as rows of dots (a dotted stroke), like the original's dot-matrix icons */
  dotted?: boolean;
  className?: string;
}

/**
 * A quiet black band of features set in the right half of the page, two per row: a small
 * dotted icon, a light title and a grey sentence each. The left half stays empty. Each
 * feature fades in as it scrolls into view.
 */
export function OnEnergyFeatures({ items, dotted = true, className }: OnEnergyFeaturesProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page px-gutter pt-[7.75rem] pb-36 lg:grid-cols-2 lg:gap-x-[1.6vw] lg:pt-[7.5rem] lg:pb-48">
        <ul className="grid gap-y-20 lg:col-start-2 lg:grid-cols-2 lg:gap-x-[1.6vw] lg:gap-y-[3.75rem]">
          {items.map((item, i) => (
            <OnEnergyReveal as="li" key={item.title} delay={(i % 2) * 6}>
              {item.icon && (
                <div
                  aria-hidden
                  className={cn(
                    "mb-9 text-foreground [&_svg]:size-[3.25rem] lg:mb-8 lg:[&_svg]:size-10",
                    dotted && "[&_svg]:[stroke-dasharray:0.01_2.75] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-width:1.75]",
                  )}
                >
                  {item.icon}
                </div>
              )}
              <h3 className="max-w-[17rem] text-[1.3rem]/[1.2] font-light tracking-[-0.04em] lg:max-w-none lg:pr-12 lg:text-2xl/[1.167]">{item.title}</h3>
              <p className="mt-5 text-[1.17rem]/[1.22] font-light tracking-[-0.02em] text-muted-foreground lg:mt-6 lg:pr-4 lg:text-xl/[1.2]">{item.text}</p>
            </OnEnergyReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
