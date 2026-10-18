import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";

export interface StripeFeature {
  /** a line icon (lucide works well at 1.5 stroke) shown in a small bordered square */
  icon: ReactNode;
  /** the dark lead, ending in a full stop */
  lead: string;
  /** the slate sentence that follows the lead */
  text: string;
  link?: { label: string; href: string };
}

export interface StripeFeaturesProps {
  /** optional heading above the row */
  title?: string;
  /** three features (more wrap to new rows) */
  features: StripeFeature[];
  /** draw a hairline across the top of the section */
  rule?: "solid" | "dashed" | "none";
  className?: string;
}

/**
 * A row of three features: a small hairline-boxed indigo icon, a bold lead running into a
 * slate sentence, and an indigo link with the hover chevron. Stacks on phones.
 */
export function StripeFeatures({ title, features, rule = "none", className }: StripeFeaturesProps) {
  return (
    <StripeFrame rule={rule} className={className} innerClassName="py-12 lg:py-16">
      {title && <StripeHeading as="h3" size="card" lead={title} className="mb-8 lg:mb-10 lg:text-[1.625rem]" />}
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-x-14">
        {features.map((f) => (
          <div key={f.lead} className="max-w-[22.5rem]">
            <span className="flex size-10 items-center justify-center rounded-md border border-border text-primary lg:size-10 [&_svg]:size-[1.15rem] [&_svg]:stroke-[1.5]">
              {f.icon}
            </span>
            <p className={cn("mt-4 text-base leading-[1.4] font-light text-muted-foreground lg:mt-5")}>
              <span className="font-normal text-foreground">{f.lead}</span> {f.text}
            </p>
            {f.link && (
              <StripeButton href={f.link.href} variant="link" className="mt-4 text-base">
                {f.link.label}
              </StripeButton>
            )}
          </div>
        ))}
      </div>
    </StripeFrame>
  );
}
