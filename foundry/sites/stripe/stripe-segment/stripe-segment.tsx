import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";
import { StripeHeading } from "@foundry/stripe-heading";

export interface StripeSegmentProps {
  /** the segment's title, e.g. who it is for */
  title: string;
  /** lead paragraph, in the right column on desktop */
  text: string;
  /** the indigo call to action under the title */
  action?: { label: string; href: string };
  className?: string;
}

/**
 * A segment opener: title and indigo button on the left, a lead paragraph on the right.
 * On phones it stacks title, paragraph, then a full-width button.
 */
export function StripeSegment({ title, text, action, className }: StripeSegmentProps) {
  return (
    <div className={cn("grid gap-4 lg:grid-cols-2 lg:gap-x-26 lg:gap-y-0", className)}>
      <StripeHeading as="h3" size="sub" lead={title} className="lg:max-w-[31.5rem]" />
      <p className="font-light text-base leading-[1.35] text-muted-foreground lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-[31.5rem] lg:text-lg lg:leading-[1.4]">
        {text}
      </p>
      {action && (
        <div className="mt-4 lg:mt-7">
          <StripeButton href={action.href} fullOnMobile>
            {action.label}
          </StripeButton>
        </div>
      )}
    </div>
  );
}
