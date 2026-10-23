import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ArcHeading } from "@foundry/arc-heading";
import { ArcPlaceholder } from "@foundry/arc-placeholder";
import { ArcReveal } from "@foundry/arc-reveal";

export interface ArcSecurityItem {
  title: string;
  body: string;
  /** the illustration above it (322×358); empty: a quiet grey placeholder */
  media?: ReactNode;
}

export interface ArcSecurityProps {
  /** the big left-aligned section heading */
  heading: string;
  /** the columns, three to a row on desktop */
  items: ArcSecurityItem[];
  className?: string;
}

/** Arc's three-up assurances: a tall, softly rounded illustration over a short title and a paragraph. */
export function ArcSecurity({ heading, items, className }: ArcSecurityProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ArcHeading title={heading} />
        <ul className="mt-[2.3rem] grid gap-[3.25rem] lg:mt-[4.25rem] lg:grid-cols-3 lg:gap-[5.375rem]">
          {items.map((item, i) => (
            <li key={item.title}>
              <ArcReveal step={i}>
                <div className="aspect-[322/358] overflow-clip rounded-[calc(var(--radius)+2px)]">
                  {item.media ?? <ArcPlaceholder tone="muted" className="size-full" />}
                </div>
                <h3 className="mt-6 font-display text-[1.1436rem]/[1.3] font-normal tracking-[-0.01em] lg:mt-9 lg:text-[1.375rem]/[1.3]">{item.title}</h3>
                <p className="mt-3 text-[0.884rem]/[1.55] text-muted-foreground lg:mt-4 lg:text-base/6">{item.body}</p>
              </ArcReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
