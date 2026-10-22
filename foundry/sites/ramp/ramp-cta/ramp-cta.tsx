import { cn } from "@foundry/foundry-utils";
import { RampEmailForm, type RampEmailFormProps } from "@foundry/ramp-email-form";
import { RampHeading } from "@foundry/ramp-heading";

export interface RampCtaProps {
  /** the centred line */
  title: string;
  /** the email sign-up bar */
  form: RampEmailFormProps;
  className?: string;
}

/** Ramp's last word before the footer: a line and the sign-up bar, on a band with rounded feet. */
export function RampCta({ title, form, className }: RampCtaProps) {
  return (
    <section className={cn("relative z-10 rounded-b-[calc(var(--radius)*2.5)] bg-background text-foreground", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter pt-[5.75rem] pb-20 sm:px-8 lg:pt-[7.5rem] lg:pb-[8rem]">
        <RampHeading as="h2" size="card" align="center" lead={title} />
        <RampEmailForm {...form} center className="mt-6" />
      </div>
    </section>
  );
}
