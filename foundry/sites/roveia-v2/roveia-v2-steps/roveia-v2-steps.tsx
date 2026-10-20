import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaV2Heading } from "@foundry/roveia-v2-heading";
import "./roveia-v2-steps.css";

export interface RoveiaV2Step {
  /** the small label with the dot, e.g. "Step 1" */
  label: string;
  /** the step's name */
  title: string;
  /** one line about it */
  description?: string;
}

export interface RoveiaV2StepsProps {
  /** the heading on the left */
  heading: string;
  /** the steps, top to bottom */
  steps: RoveiaV2Step[];
  /** the video or picture behind the whole panel; a charcoal placeholder shows when empty */
  media?: ReactNode;
  className?: string;
}

export function RoveiaV2Steps({ heading, steps, media, className }: RoveiaV2StepsProps) {
  return (
    <section className={cn("bg-background px-5 py-5", className)}>
      <div className="dark relative overflow-clip rounded-[2rem] bg-secondary text-foreground lg:rounded-[2.5rem]">
        <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">
          {media ?? (
            <div className="bg-[radial-gradient(ellipse_at_10%_30%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_30%),radial-gradient(ellipse_at_88%_72%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_30%)]" />
          )}
        </div>
        <div className="relative px-6 pt-[4.5rem] pb-20 lg:grid lg:grid-cols-[1fr_1fr] lg:px-[6.25rem] lg:pt-[5.5rem] lg:pb-20">
          <RoveiaV2Heading className="max-w-[26rem] lg:max-w-[28rem]">{heading}</RoveiaV2Heading>
          <ol className="mt-14 space-y-[4.5rem] lg:mt-0 lg:space-y-[5.5rem] lg:pl-[3.25rem]">
            {steps.map((s) => (
              <li key={s.label} className="roveia-v2-steps-rise">
                <p className="flex items-center gap-4 text-[1.75rem] leading-[1.3] font-light tracking-[-0.03em]">
                  <span aria-hidden className="size-4 rounded-full bg-foreground" />
                  {s.label}
                </p>
                <h3 className="mt-10 max-w-[26rem] text-[1.75rem] leading-[1.2] font-light tracking-[-0.03em] lg:mt-12 lg:text-[2.5rem]">{s.title}</h3>
                {s.description && <p className="mt-2 text-sm leading-5 tracking-[-0.02em] text-muted-foreground">{s.description}</p>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
