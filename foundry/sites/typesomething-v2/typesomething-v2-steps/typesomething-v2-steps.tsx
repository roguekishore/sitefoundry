import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingV2Heading } from "@foundry/typesomething-v2-heading";

export interface TypesomethingV2Step {
  /** the small label above the title, e.g. "01" */
  number: string;
  title: string;
  text: string;
}

export interface TypesomethingV2StepsProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** usually three */
  steps: TypesomethingV2Step[];
  /** anchor id for in-page links */
  id?: string;
  className?: string;
}

export function TypesomethingV2Steps({ title, subtitle, steps, id, className }: TypesomethingV2StepsProps) {
  return (
    <section id={id} className={cn("bg-muted py-section text-foreground lg:py-[calc(var(--section-y)*1.75)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <TypesomethingV2Heading title={title} subtitle={subtitle} subtitleTone="soft" />
        <ol className="mt-[3.25rem] grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="rounded-lg border border-border bg-card p-8 text-card-foreground">
              <span className="text-[0.78rem] text-muted-foreground opacity-80">{step.number}</span>
              <h3 className="mt-4 text-[1.3rem] leading-[1.5]">{step.title}</h3>
              <p className="mt-1.5 text-[0.92rem] leading-[1.55] text-muted-foreground lg:text-[0.96rem]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
