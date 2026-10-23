import { cn } from "@foundry/foundry-utils";
import { UnitButton } from "@foundry/unit-button";

export interface UnitCtaProps {
  /** the two-line closing line */
  heading: string;
  /** the pill */
  cta: { label: string; href: string };
  className?: string;
}

/** A black closing band: a centred two-line heading and one white pill. */
export function UnitCta({ heading, cta, className }: UnitCtaProps) {
  return (
    <section className={cn("dark bg-background font-sans text-foreground", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter py-16 text-center lg:py-32">
        <h2 className="max-w-[20rem] font-display text-[1.75rem] leading-[1.1] tracking-[-0.02em] lg:max-w-[30rem] lg:text-[2.5rem] lg:leading-[1.08]">{heading}</h2>
        <UnitButton href={cta.href} className="mt-6 lg:mt-8">
          {cta.label}
        </UnitButton>
      </div>
    </section>
  );
}
