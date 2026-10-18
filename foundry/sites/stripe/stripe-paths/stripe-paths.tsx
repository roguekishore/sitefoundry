import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";
import { StripeMock, type StripeMockContent } from "@foundry/stripe-mock";

export interface StripePath {
  /** the vignette at the top of the card */
  mock: StripeMockContent;
  /** the bright lead, ending in a full stop or question mark */
  lead: string;
  /** the softer sentence after it */
  text: string;
  link: { label: string; href: string };
}

export interface StripePathsProps {
  /** the bright lead sentence */
  title: string;
  /** the softer sentences after it */
  rest?: string;
  /** three ways in (more wrap) */
  paths: StripePath[];
  /** dark forces the deep-navy band (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  className?: string;
}

/**
 * "Choose a path" section of the developer band: a two-tone heading over three columns, each a
 * rounded vignette (no-code chat, app wall, code editor) with a caption and a link.
 */
export function StripePaths({ title, rest, paths, tone = "dark", className }: StripePathsProps) {
  return (
    <StripeFrame rule="solid" className={cn(tone === "dark" && "dark", className)} innerClassName="pt-14 pb-16 lg:pt-20 lg:pb-24">
      <StripeHeading as="h3" size="sub" lead={title} rest={rest} className="max-w-[44rem]" />
      <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-3 lg:gap-4">
        {paths.map((p) => (
          <div key={p.lead} className="min-w-0">
            <div className="h-[16.5rem] overflow-hidden rounded-md bg-card lg:h-[18.5rem]">
              <StripeMock mock={p.mock} />
            </div>
            <p className="mt-6 max-w-[22rem] text-base leading-[1.4] font-light text-muted-foreground lg:mt-5">
              <span className="font-normal text-foreground">{p.lead}</span> {p.text}
            </p>
            <StripeButton href={p.link.href} variant="link" className="mt-4 text-base text-[color-mix(in_oklab,var(--primary)_55%,var(--foreground))]">
              {p.link.label}
            </StripeButton>
          </div>
        ))}
      </div>
    </StripeFrame>
  );
}
