import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingV2Heading } from "@foundry/typesomething-v2-heading";

export interface TypesomethingV2Reason {
  /** the badge label, e.g. "01" */
  number: string;
  title: string;
  text: string;
}

export interface TypesomethingV2ReasonsProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** usually three */
  reasons: TypesomethingV2Reason[];
  /** anchor id for in-page links */
  id?: string;
  className?: string;
}

export function TypesomethingV2Reasons({ title, subtitle, reasons, id, className }: TypesomethingV2ReasonsProps) {
  return (
    <section id={id} className={cn("bg-muted py-section text-foreground lg:py-[calc(var(--section-y)*1.75)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <TypesomethingV2Heading title={title} subtitle={subtitle} className="max-w-[48rem]" />
        <ol className="mt-[3.25rem] grid gap-[1.1rem] lg:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.number} className="flex gap-4 rounded-lg border border-border bg-card p-6 text-card-foreground">
              <span className="grid size-10 shrink-0 place-items-center rounded-[calc(var(--radius)*0.37)] bg-primary text-[1.1rem] text-primary-foreground">
                {reason.number}
              </span>
              <div>
                <h3 className="text-[1.1rem] leading-[1.5] font-bold">{reason.title}</h3>
                <p className="mt-1.5 text-[0.92rem] leading-[1.6] text-muted-foreground">{reason.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
