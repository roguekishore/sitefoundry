import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeRibbon } from "@foundry/stripe-ribbon";

export interface StripeBannerProps {
  /** the headline over the art */
  title: string;
  /** the white button under the headline */
  action?: { label: string; href: string };
  /** a small event wordmark: bold first word, light second (bottom right on desktop, top on phones) */
  mark?: { bold: string; light?: string };
  className?: string;
}

function Mark({ mark, className }: { mark: NonNullable<StripeBannerProps["mark"]>; className?: string }) {
  return (
    <p className={cn("text-xl leading-none text-foreground lg:text-[1.375rem]", className)}>
      <span className="font-bold tracking-[-0.05em]">{mark.bold}</span> <span className="font-light">{mark.light}</span>
    </p>
  );
}

/**
 * Full-width event banner: a dark rounded panel lit by fans of coloured ribbon rising like
 * stage light over a dark floor, a white headline, a white button and a small event wordmark.
 */
export function StripeBanner({ title, action, mark, className }: StripeBannerProps) {
  return (
    <StripeFrame className={className} innerClassName="pb-16 lg:pt-8 lg:pb-16">
      <div className="dark relative isolate flex min-h-[37rem] flex-col overflow-hidden rounded-lg bg-background p-6 text-foreground lg:min-h-[25rem] lg:justify-start lg:p-6">
        {/* stage light: the ribbon fanned out, a soft violet haze, and a dark floor */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-br from-chart-3/70 via-primary/40 to-chart-1/50" />
          <StripeRibbon shape="arc" fibres={48} className="absolute inset-x-0 top-[18%] bottom-0 size-full opacity-90 mix-blend-screen lg:top-0" />
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-linear-to-t from-background via-background/70 to-transparent" />
          <div className="absolute inset-x-[10%] bottom-[22%] h-px bg-linear-to-r from-transparent via-foreground/50 to-transparent lg:bottom-[24%]" />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-linear-to-r from-background/60 to-transparent" />
        </div>

        {mark && <Mark mark={mark} className="mb-5 lg:hidden" />}
        <h2 className="max-w-[22rem] font-display text-[1.875rem] leading-[1.08] font-light tracking-[-0.02em] text-balance lg:max-w-[28rem] lg:text-[2.75rem]">
          {title}
        </h2>
        {action && (
          <div className="mt-8 lg:mt-7">
            <StripeButton href={action.href} variant="white" className="h-11 bg-foreground px-6 text-primary hover:text-background">
              {action.label}
            </StripeButton>
          </div>
        )}
        {mark && <Mark mark={mark} className="absolute right-6 bottom-6 hidden lg:block" />}
      </div>
    </StripeFrame>
  );
}
