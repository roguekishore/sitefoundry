import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingCard } from "@foundry/typesomething-card";
import { TypesomethingSectionHeading } from "@foundry/typesomething-section-heading";

export interface TypesomethingStep {
  /** small label above the title (e.g. "01") */
  number: string;
  title: string;
  text: string;
}

export interface TypesomethingStepsProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** the steps, in order; three sit in a row on desktop */
  steps: TypesomethingStep[];
  /** anchor id for in-page links */
  id?: string;
  className?: string;
}

/** "How it works" band on paper-grey: a centred heading and numbered white cards in a row. */
export function TypesomethingSteps({ title, subtitle, steps, id, className }: TypesomethingStepsProps) {
  return (
    <section id={id} className={cn("bg-muted px-gutter py-section text-foreground lg:py-28", className)}>
      <div className="mx-auto max-w-page">
        <TypesomethingSectionHeading title={title} subtitle={subtitle} />
        <ol className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.number}>
              <TypesomethingCard className="h-full p-8 lg:p-8">
                <span className="block text-[0.72rem] text-foreground/55">{s.number}</span>
                <h3 className="mt-6 text-[1.3rem] leading-[1.5] font-normal">{s.title}</h3>
                <p className="mt-1 text-[0.96rem] leading-[1.55] text-foreground/75">{s.text}</p>
              </TypesomethingCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
