import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";

export interface StripeDevheroProps {
  /** the bright lead sentence */
  title: string;
  /** the softer sentence after it */
  rest?: string;
  /** the indigo button */
  primary?: { label: string; href: string };
  /** the outlined button beside it */
  secondary?: { label: string; href: string };
  /** dark forces the deep-navy band (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  className?: string;
}

/** Opener of the deep-navy developer band: a two-tone heading and two buttons. */
export function StripeDevhero({ title, rest, primary, secondary, tone = "dark", className }: StripeDevheroProps) {
  return (
    <StripeFrame className={cn(tone === "dark" && "dark", className)} innerClassName="pt-16 pb-14 lg:pt-28 lg:pb-16">
      <StripeHeading lead={title} rest={rest} className="max-w-[40rem] lg:max-w-[43rem]" />
      {(primary || secondary) && (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2 lg:mt-8">
          {primary && (
            <StripeButton href={primary.href} fullOnMobile>
              {primary.label}
            </StripeButton>
          )}
          {secondary && (
            <StripeButton href={secondary.href} variant="ghost" arrow={false} fullOnMobile className="border-primary/40 hover:border-primary">
              {secondary.label}
            </StripeButton>
          )}
        </div>
      )}
    </StripeFrame>
  );
}
