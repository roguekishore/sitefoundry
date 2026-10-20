import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingCard } from "@foundry/typesomething-card";
import { TypesomethingSectionHeading } from "@foundry/typesomething-section-heading";

export interface TypesomethingReason {
  /** shown in the acid tile (e.g. "01") */
  number: string;
  title: string;
  text: string;
}

export interface TypesomethingReasonsProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** the reasons; three per row on desktop */
  reasons: TypesomethingReason[];
  /** anchor id for in-page links */
  id?: string;
  className?: string;
}

/** "Why we did it" band on paper-grey: white cards, each an acid number tile beside a bold title and its story. */
export function TypesomethingReasons({ title, subtitle, reasons, id, className }: TypesomethingReasonsProps) {
  return (
    <section id={id} className={cn("bg-muted px-gutter py-section text-foreground lg:py-28", className)}>
      <div className="mx-auto max-w-page">
        <TypesomethingSectionHeading title={title} subtitle={subtitle} className="lg:max-w-[48rem]" />
        <ol className="mt-14 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {reasons.map((r) => (
            <li key={r.number}>
              <TypesomethingCard className="flex h-full gap-4 p-6 lg:gap-4 lg:p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-[calc(var(--radius)/2)] bg-primary text-[1.05rem] text-primary-foreground">{r.number}</span>
                <div>
                  <h3 className="text-[1.05rem] leading-[1.55] font-bold">{r.title}</h3>
                  <p className="mt-1.5 text-[0.92rem] leading-[1.6] tracking-[0.01em] text-foreground/72">{r.text}</p>
                </div>
              </TypesomethingCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
