import { cn } from "@foundry/foundry-utils";
import { LithicButton } from "@foundry/lithic-button";
import { LithicContours } from "@foundry/lithic-contours";

export interface LithicCtaProps {
  /** the question */
  title: string;
  /** the orange pill */
  button: { label: string; href: string };
  className?: string;
}

/** The closing band: a question and one orange pill on peach. */
export function LithicCta({ title, button, className }: LithicCtaProps) {
  return (
    <section className={cn("bg-background px-gutter py-6 lg:px-6", className)}>
      <div className="relative isolate overflow-clip rounded-lg bg-primary/7 px-8 pt-9 pb-8 text-foreground lg:flex lg:h-[17.625rem] lg:items-center lg:justify-center lg:gap-16 lg:p-0">
        <LithicContours at="78% 50%" gap={32} fade={false} className="-z-10 text-primary/45" />
        <h2 className="max-w-[12.5rem] font-display text-2xl/[1.2] font-semibold tracking-[-0.02em] sm:max-w-none lg:text-[2rem]/[1.2]">{title}</h2>
        <LithicButton href={button.href} className="mt-8 w-[9.125rem] lg:mt-0">
          {button.label}
        </LithicButton>
      </div>
    </section>
  );
}
