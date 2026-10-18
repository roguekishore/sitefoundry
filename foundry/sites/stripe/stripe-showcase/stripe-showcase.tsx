import { cn } from "@foundry/foundry-utils";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeMock, type StripeMockContent } from "@foundry/stripe-mock";
import { StripeSegment, type StripeSegmentProps } from "@foundry/stripe-segment";

export interface StripeShowcaseProps {
  /** the segment opener: title, paragraph and button */
  segment?: StripeSegmentProps;
  /** the product vignette on the panel (a dashboard works best) */
  mock: StripeMockContent;
  rule?: "solid" | "dashed" | "none";
  className?: string;
}

/**
 * Product showcase: a segment opener above a wide panel of painterly colour (pink through
 * orange with brushed fibres) holding a product vignette with floating callouts.
 */
export function StripeShowcase({ segment, mock, rule = "none", className }: StripeShowcaseProps) {
  return (
    <StripeFrame rule={rule} className={className} innerClassName="pt-14 lg:pt-24">
      {segment && <StripeSegment {...segment} />}
      <div className={cn("relative isolate mt-12 h-[34rem] overflow-hidden rounded-md lg:mt-18 lg:h-[36rem]")}>
        <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-chart-2 via-chart-1 to-chart-4">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(125deg,color-mix(in_oklab,var(--background)_16%,transparent)_0_1px,transparent_1px_7px)]" />
          <div className="absolute -top-1/3 -left-1/4 h-[120%] w-3/4 rounded-[50%] bg-chart-3/40 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/3 h-full w-2/3 rounded-[50%] bg-chart-4/60 blur-3xl" />
        </div>
        <div className="size-full lg:[zoom:1.3]">
          <StripeMock mock={mock} />
        </div>
      </div>
    </StripeFrame>
  );
}
