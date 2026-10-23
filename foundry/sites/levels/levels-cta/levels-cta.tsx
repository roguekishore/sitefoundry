import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LevelsButton } from "@foundry/levels-button";
import { LevelsHeading } from "@foundry/levels-heading";

export interface LevelsCtaProps {
  /** pale tracked capitals above the title */
  eyebrow?: string;
  /** the big title */
  title: ReactNode;
  /** the soft-white text under it */
  lead?: ReactNode;
  /** the white button */
  action?: { label: string; href: string };
  className?: string;
}

/** Centred closing band on near-black. */
export function LevelsCta({ eyebrow, title, lead, action, className }: LevelsCtaProps) {
  return (
    <section className={cn("dark bg-background px-gutter py-[calc(var(--section-y)*0.75)] text-foreground lg:py-section", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center">
        <LevelsHeading align="centre" size="display" eyebrowTone="sage" eyebrow={eyebrow} title={title} lead={lead} />
        {action ? (
          <LevelsButton href={action.href} size="lg" className="mt-12">
            {action.label}
          </LevelsButton>
        ) : null}
      </div>
    </section>
  );
}
