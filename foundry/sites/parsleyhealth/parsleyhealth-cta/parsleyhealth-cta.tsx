import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";

export interface ParsleyhealthCtaProps {
  /** the closing line */
  title: string;
  /** the filled pill */
  primary: { label: string; href: string };
  /** the outlined pill */
  secondary?: { label: string; href: string };
  className?: string;
}

/** One serif line and two pills on seafoam. */
export function ParsleyhealthCta({ title, primary, secondary, className }: ParsleyhealthCtaProps) {
  return (
    <section className={cn("bg-muted px-gutter py-[calc(var(--section-y)*0.55)] lg:py-section", className)}>
      <ParsleyhealthHeading title={title} align="center" titleClassName="mx-auto max-w-[21rem] lg:max-w-none" />
      <div className="mx-auto mt-10 flex max-w-page flex-col gap-4 lg:mt-12 lg:flex-row lg:justify-center">
        <ParsleyhealthButton href={primary.href} block="phone">
          {primary.label}
        </ParsleyhealthButton>
        {secondary ? (
          <ParsleyhealthButton href={secondary.href} variant="outline" block="phone">
            {secondary.label}
          </ParsleyhealthButton>
        ) : null}
      </div>
    </section>
  );
}
