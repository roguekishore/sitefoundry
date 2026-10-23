import { cn } from "@foundry/foundry-utils";
import { ArcButton } from "@foundry/arc-button";
import { ArcHeading } from "@foundry/arc-heading";
import { ArcReveal } from "@foundry/arc-reveal";

export interface ArcCtaProps {
  /** the big closing heading */
  title: string;
  /** the short line under it */
  subtitle: string;
  /** the button */
  cta: { label: string; href: string };
  className?: string;
}

/** Arc's closing band: a big left-aligned heading on near-black, one short line and a mint button. */
export function ArcCta({ title, subtitle, cta, className }: ArcCtaProps) {
  return (
    <section className={cn("dark bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-1 lg:pt-2.5">
        <ArcHeading title={title} className="max-w-[22rem] lg:max-w-[53rem]" />
        <ArcReveal step={1}>
          <p className="mt-8 text-[0.884rem]/[1.5] text-muted-foreground lg:mt-11 lg:text-base/6">{subtitle}</p>
          <ArcButton href={cta.href} className="mt-10 h-[3.25rem] px-[1.6rem] text-[0.884rem] lg:mt-11 lg:h-14 lg:px-8 lg:text-[0.875rem]">
            {cta.label}
          </ArcButton>
        </ArcReveal>
      </div>
    </section>
  );
}
