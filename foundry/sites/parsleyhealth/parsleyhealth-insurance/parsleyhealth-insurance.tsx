import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";

export interface ParsleyhealthInsurer {
  /** the insurer's name, set as a plain wordmark */
  name: string;
  /** how the name is set: serif, bold sans or italic sans */
  style?: "serif" | "sans" | "italic";
}

export interface ParsleyhealthInsuranceProps {
  /** small capitals above the title */
  eyebrow?: string;
  /** the title */
  title: string;
  /** the paragraphs */
  body: string[];
  /** the filled pill */
  primary: { label: string; href: string };
  /** the outlined pill under it */
  secondary?: { label: string; href: string };
  /** the insurer names (eight on the original, two per row) */
  insurers: ParsleyhealthInsurer[];
  className?: string;
}

const styles = {
  serif: "font-display text-[1.6rem] font-normal tracking-[-0.02em] lg:text-[2.6rem]",
  sans: "font-sans text-[1.35rem] font-semibold tracking-[-0.03em] lg:text-[2rem]",
  italic: "font-sans text-[1.35rem] font-medium italic tracking-[-0.02em] lg:text-[2rem]",
};

/** Copy and pills beside a wall of insurer names. */
export function ParsleyhealthInsurance({ eyebrow, title, body, primary, secondary, insurers, className }: ParsleyhealthInsuranceProps) {
  return (
    <section className={cn("bg-background px-gutter py-[calc(var(--section-y)*0.65)] lg:py-[calc(var(--section-y)*1.75)]", className)}>
      <div className="mx-auto grid max-w-page items-start gap-y-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
        <ParsleyhealthHeading
          eyebrow={eyebrow}
          title={title}
          align="phone-center"
          className="lg:col-start-1 lg:row-start-1"
          titleClassName="mx-auto max-w-[19rem] lg:mx-0 lg:max-w-[25rem]"
        />
        <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-7 text-foreground lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:gap-x-12 lg:gap-y-12 lg:self-center lg:px-10">
          {insurers.map((insurer) => (
            <li key={insurer.name} className={cn("text-center leading-none whitespace-nowrap", styles[insurer.style ?? "sans"])}>
              {insurer.name}
            </li>
          ))}
        </ul>
        <div className="mx-auto flex max-w-[21.5rem] flex-col gap-6 text-center text-base leading-[1.7] text-foreground lg:col-start-1 lg:row-start-2 lg:mx-0 lg:mt-9 lg:max-w-[27.5rem] lg:gap-8 lg:text-left lg:text-lg lg:leading-8">
          {body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="flex flex-col items-stretch gap-4 lg:col-start-1 lg:row-start-3 lg:mt-11 lg:items-start">
          <ParsleyhealthButton href={primary.href} arrow block="phone">
            {primary.label}
          </ParsleyhealthButton>
          {secondary ? (
            <ParsleyhealthButton href={secondary.href} variant="outline" block="phone">
              {secondary.label}
            </ParsleyhealthButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
