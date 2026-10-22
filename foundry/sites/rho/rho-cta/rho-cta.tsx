import { cn } from "@foundry/foundry-utils";
import { RhoEmailForm, type RhoEmailFormProps } from "@foundry/rho-email-form";
import { RhoHeading } from "@foundry/rho-heading";
import { RhoReveal } from "@foundry/rho-reveal";

export interface RhoCtaProps {
  /** the heading */
  title: string;
  /** the line under it */
  lead: string;
  /** the email sign-up field */
  form: RhoEmailFormProps;
  /** small print under the field */
  fineprint?: string;
  /** dark or light section */
  tone?: "dark" | "light";
  className?: string;
}

export function RhoCta({ title, lead, form, fineprint, tone = "light", className }: RhoCtaProps) {
  return (
    <section data-rho-tone={tone} className={cn(tone === "dark" && "dark", "bg-background py-16 text-foreground lg:py-section", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        <RhoHeading text={title} className="max-w-[20rem] sm:max-w-none" />
        <RhoReveal as="p" className="mt-6 max-w-[34rem] text-[1.125rem] leading-[1.45] text-muted-foreground lg:mt-8 lg:text-xl lg:leading-[1.5]">
          {lead}
        </RhoReveal>
        <RhoReveal className="mt-8 w-full max-w-[27.5rem] lg:mt-12">
          <RhoEmailForm {...form} />
        </RhoReveal>
        {fineprint && (
          <RhoReveal as="p" className="mt-8 max-w-[39rem] text-[0.6875rem] leading-[1.4] text-muted-foreground">
            {fineprint}
          </RhoReveal>
        )}
      </div>
    </section>
  );
}
