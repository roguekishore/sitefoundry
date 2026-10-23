import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthButton } from "@foundry/functionhealth-button";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";
import { FunctionhealthMedia } from "@foundry/functionhealth-media";

export interface FunctionhealthStep {
  /** "01", "02"… */
  number: string;
  title: string;
  text: string;
  /** illustration or screenshot for the card; empty shows a placeholder */
  media?: ReactNode;
}

export interface FunctionhealthStepsProps {
  title: HeadingPart[];
  steps: FunctionhealthStep[];
  /** pills under the cards: the first is solid, the second an outline */
  actions?: { label: string; href: string }[];
  className?: string;
}

export function FunctionhealthSteps({ title, steps, actions = [], className }: FunctionhealthStepsProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} />
        <ol className="mt-12 grid gap-6 lg:mt-[4.25rem] lg:grid-cols-3 lg:gap-8">
          {steps.map((s) => (
            <li key={s.number} className="flex min-h-[24rem] flex-col items-center rounded-xl bg-card px-6 pt-11 pb-10 text-center lg:min-h-[26rem]">
              <p className="text-xl leading-none font-semibold text-primary">{s.number}</p>
              <h3 className="mt-3 font-display text-[clamp(1.6875rem,0.6579vw+1.5329rem,2.125rem)] leading-[1.1] font-light">{s.title}</h3>
              <p className="mt-3 max-w-[18rem] text-sm leading-[1.5] font-light">{s.text}</p>
              <FunctionhealthMedia media={s.media} ratio="h-40 w-full max-w-[16rem]" rounded="rounded-lg" className="mt-auto" />
            </li>
          ))}
        </ol>
        {actions.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center gap-3 lg:mt-16 lg:gap-4">
            {actions.map((a, i) => (
              <FunctionhealthButton key={a.href + a.label} href={a.href} variant={i === 0 ? "solid" : "outline"}>
                {a.label}
              </FunctionhealthButton>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
