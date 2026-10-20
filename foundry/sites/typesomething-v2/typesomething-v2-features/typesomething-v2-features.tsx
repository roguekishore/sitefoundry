import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingV2Heading } from "@foundry/typesomething-v2-heading";

export interface TypesomethingV2Feature {
  /** a small glyph in the paper tile (lucide works well) */
  icon: ReactNode;
  title: string;
  text: string;
}

export interface TypesomethingV2FeaturesProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** six fill the 3×2 grid */
  features: TypesomethingV2Feature[];
  /** anchor id for in-page links */
  id?: string;
  className?: string;
}

export function TypesomethingV2Features({ title, subtitle, features, id, className }: TypesomethingV2FeaturesProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground lg:py-[calc(var(--section-y)*1.75)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <TypesomethingV2Heading title={title} subtitle={subtitle} />
        <ul className="mt-[3.25rem] grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title} className="rounded-lg border border-border bg-card p-8 text-card-foreground lg:p-9">
              <span className="grid size-11 place-items-center rounded-[calc(var(--radius)/2)] bg-muted [&_svg]:size-3.5">{feature.icon}</span>
              <h3 className="mt-4 text-[1.15rem] leading-[1.5]">{feature.title}</h3>
              <p className="mt-3 text-[0.92rem] leading-[1.55] text-muted-foreground">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
