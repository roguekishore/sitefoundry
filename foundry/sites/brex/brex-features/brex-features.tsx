import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BrexButton } from "@foundry/brex-button";
import { BrexHeading } from "@foundry/brex-heading";
import { BrexPlaceholder } from "@foundry/brex-placeholder";

export interface BrexFeature {
  title: string;
  text: string;
  /** label and destination of the orange link */
  link: { label: string; href: string };
  /** the illustration panel. A lavender-grey placeholder when empty */
  media?: ReactNode;
}

export interface BrexFeaturesProps {
  title: string;
  subtitle?: string;
  /** rows; the panel alternates left and right on desktop */
  features: BrexFeature[];
  className?: string;
}

/** Headline and alternating illustration-and-text rows. */
export function BrexFeatures({ title, subtitle, features, className }: BrexFeaturesProps) {
  return (
    <section className={cn("bg-background px-gutter pt-16 pb-6 lg:pb-10", className)}>
      <BrexHeading title={title} subtitle={subtitle} className="max-w-[40rem] lg:max-w-[56rem]" />
      <div className="mx-auto mt-10 max-w-[67.5rem] lg:mt-6">
        {features.map((f, i) => (
          <div key={f.title} className="grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-x-[6.75rem] lg:py-12">
            <div className={cn(i % 2 === 1 && "lg:order-2")}>
              {f.media ?? <BrexPlaceholder tone="panel" className="aspect-[486/358] w-full rounded-xl" />}
            </div>
            <div className={cn("lg:max-w-[30.375rem]", i % 2 === 1 && "lg:order-1")}>
              <h3 className="font-display text-2xl/[1.8125rem] font-medium tracking-[-0.02em] text-foreground lg:text-4xl/9 lg:font-semibold lg:tracking-[-0.025em]">{f.title}</h3>
              <p className="mt-4 text-base/6 text-muted-foreground">{f.text}</p>
              <BrexButton href={f.link.href} variant="link" className="mt-6 lg:mt-8">
                {f.link.label}
              </BrexButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
