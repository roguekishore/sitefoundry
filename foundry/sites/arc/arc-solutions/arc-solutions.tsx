import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ArcFeatureCopy } from "@foundry/arc-feature-copy";
import { ArcHeading } from "@foundry/arc-heading";
import { ArcPlaceholder } from "@foundry/arc-placeholder";
import { ArcReveal } from "@foundry/arc-reveal";

export interface ArcSolution {
  /** the pill above the title */
  badge: string;
  title: string;
  body: string;
  /** the bold link label, e.g. "Learn more" */
  linkLabel: string;
  href: string;
  /** muted: the pale grey panel · inverse: a dark slate panel (the theme's dark card colour) */
  tone: "muted" | "inverse";
  /** the illustration on the panel's left (455×316); empty: a faint wash placeholder */
  media?: ReactNode;
}

export interface ArcSolutionsProps {
  /** the big left-aligned section heading */
  heading: string;
  /** the wide panels, one under another */
  solutions: ArcSolution[];
  className?: string;
}

/** Arc's wide product panels: illustration left, badge-title-copy-link right; one pale grey, one dark slate. */
export function ArcSolutions({ heading, solutions, className }: ArcSolutionsProps) {
  return (
    <section className={cn("bg-background pt-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ArcHeading title={heading} />
        <ul className="mt-[2.1rem] grid gap-[1.875rem] lg:mt-[4.25rem]">
          {solutions.map((s) => (
            <li key={s.title}>
              <ArcReveal>
                <a
                  href={s.href}
                  className={cn(
                    "group grid overflow-clip rounded-[calc(var(--radius)+12px)] text-foreground lg:min-h-80 lg:grid-cols-[28.4375rem_1fr] lg:items-center lg:gap-5 lg:py-0.5 lg:pr-10 lg:pl-5",
                    s.tone === "inverse" ? "dark bg-card" : "bg-muted",
                  )}
                >
                  <div className="aspect-[352/214] transition-opacity duration-200 group-hover:opacity-90 motion-reduce:transition-none lg:aspect-[455/316]">
                    {s.media ?? <ArcPlaceholder tone="wash" className="size-full lg:rounded-lg" />}
                  </div>
                  <ArcFeatureCopy
                    badge={s.badge}
                    title={s.title}
                    body={s.body}
                    linkLabel={s.linkLabel}
                    className="px-6 pt-1 pb-[2.125rem] transition-opacity duration-200 group-hover:opacity-90 motion-reduce:transition-none lg:px-0 lg:py-0"
                  />
                </a>
              </ArcReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
