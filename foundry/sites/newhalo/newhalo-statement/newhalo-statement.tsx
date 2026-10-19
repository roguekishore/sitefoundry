import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal } from "@foundry/newhalo-reveal";
import "./newhalo-statement.css";

export interface NewhaloStatementProps {
  /** the 100px gradient heading (highlight into glow) */
  title: string;
  /** the short paragraph next to the photo */
  body: string;
  /** the orange button under it */
  cta: { label: string; href: string };
  /** the small square photo; empty shows the placeholder */
  photo?: ReactNode;
  /** the tall artwork on the right (a 3D or canvas piece); empty shows a glow placeholder */
  art?: ReactNode;
  className?: string;
}

/**
 * A full-bleed black band: a huge gradient heading that fills in from the left as it scrolls
 * into view, a small rounded photo beside a paragraph and an orange button, and a tall art
 * slot on the right (below everything on phones).
 */
export function NewhaloStatement({ title, body, cta, photo, art, className }: NewhaloStatementProps) {
  return (
    <section className={cn("dark bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-y-20 px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-between">
          <h2 className="newhalo-statement-heading font-display text-[3.125rem] leading-[0.95] tracking-[-0.015em] lg:text-[6.25rem]">{title}</h2>
          <div className="mt-15 flex flex-col gap-12 lg:mt-24 lg:flex-row lg:items-end lg:gap-[3.125rem]">
            <NewhaloMedia className={cn("mx-auto size-41 shrink-0 rounded-lg lg:mx-0 lg:size-[13.125rem]", newhaloReveal("bloom"))}>{photo}</NewhaloMedia>
            <div className={cn("max-w-[20.5rem]", newhaloReveal("fade"))}>
              <p className="text-[0.91rem] leading-normal lg:text-base">{body}</p>
              <NewhaloButton label={cta.label} href={cta.href} className="mt-5" />
            </div>
          </div>
        </div>
        <NewhaloMedia tone="glow" className="aspect-[0.85] w-full lg:col-span-4 lg:col-start-9">
          {art}
        </NewhaloMedia>
      </div>
    </section>
  );
}
