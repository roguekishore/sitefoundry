import { cn } from "@foundry/foundry-utils";
import { AirwallexButton } from "@foundry/airwallex-button";

export interface AirwallexCtaProps {
  /** the headline */
  title: string;
  /** the short line under it */
  body?: string;
  /** the button */
  action: { label: string; href: string };
  className?: string;
}

/** Headline left, one wide button right. */
export function AirwallexCta({ title, body, action, className }: AirwallexCtaProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto flex max-w-[76rem] flex-col gap-6 px-gutter pt-[4.75rem] pb-[6.25rem] text-center lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-[7.5rem] lg:text-left">
        <div className="lg:max-w-[30rem]">
          <h2 className="mx-auto max-w-[20rem] font-display text-[1.75rem] leading-[1.25] font-bold lg:mx-0 lg:max-w-none lg:text-[2.5rem]">{title}</h2>
          {body && <p className="mt-4 text-base leading-6 text-foreground/80 lg:mt-7">{body}</p>}
        </div>
        <AirwallexButton href={action.href} className="w-full lg:w-60">
          {action.label}
        </AirwallexButton>
      </div>
    </section>
  );
}
