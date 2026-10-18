import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MercuryArt } from "@foundry/mercury-art";
import { MercuryButton } from "@foundry/mercury-button";
import { MercuryHeading } from "@foundry/mercury-heading";

export interface MercuryHeroProps {
  /** the headline */
  title: string;
  /** the line under it */
  text?: ReactNode;
  /** the email field in the pill form */
  email: { placeholder: string; label: string; name?: string };
  /** the periwinkle button inside the email pill */
  submit: string;
  /** where the form posts (leave out to handle it yourself) */
  action?: string;
  /** the frosted pill beside the form */
  secondary?: { label: string; href: string };
  /** the small print in a dark bar at the bottom */
  disclaimer?: string;
  /** a full-bleed backdrop (photo or art); defaults to the misty dawn valley */
  backdrop?: ReactNode;
  className?: string;
}

/**
 * Mercury's hero: a full-bleed landscape with a centred headline, a pill-shaped email
 * field holding the main button, a frosted second pill and a dark disclaimer bar at the
 * bottom. On phones the field takes the full width and the two pills sit under it.
 */
export function MercuryHero({ title, text, email, submit, action, secondary, disclaimer, backdrop, className }: MercuryHeroProps) {
  return (
    <section className={cn("relative isolate flex min-h-[52.75rem] flex-col overflow-hidden lg:min-h-[56.25rem]", className)}>
      <div className="absolute inset-0 -z-10">{backdrop ?? <MercuryArt variant="valley" />}</div>
      {/* a soft shade under the header and the headline */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[45%] bg-linear-to-b from-background/45 via-background/20 to-transparent" />

      <div className="mx-auto w-full max-w-[60rem] px-gutter pt-[8.25rem] text-center lg:pt-[8.75rem]">
        <MercuryHeading as="h1" size="hero" align="center" title={title} />
        {text && <p className="mx-auto mt-3 max-w-[40rem] text-base leading-[1.35] text-foreground/90 lg:mt-4 lg:text-[1.3125rem]">{text}</p>}

        <form action={action} className="mt-8 grid grid-cols-2 gap-x-2 gap-y-3 lg:mt-11 lg:flex lg:items-center lg:justify-center">
          {/* on phones this wrapper dissolves (display: contents) so the field and button join the grid */}
          <div className="contents lg:flex lg:w-[25.5rem] lg:items-center lg:rounded-full lg:bg-foreground/15 lg:p-1 lg:ring-1 lg:ring-foreground/20 lg:backdrop-blur-md lg:ring-inset">
            <input
              type="email"
              name={email.name ?? "email"}
              aria-label={email.label}
              placeholder={email.placeholder}
              className="col-span-2 h-10 min-w-0 rounded-full bg-foreground/15 px-5 text-base text-foreground ring-1 ring-foreground/20 backdrop-blur-md ring-inset placeholder:text-foreground/70 focus:outline-2 focus:outline-ring lg:h-10 lg:flex-1 lg:bg-transparent lg:px-4 lg:ring-0 lg:backdrop-blur-none"
            />
            <MercuryButton type="submit">{submit}</MercuryButton>
          </div>
          {secondary && (
            <MercuryButton variant="glass" href={secondary.href}>
              {secondary.label}
            </MercuryButton>
          )}
        </form>
      </div>

      {disclaimer && (
        <p className="mx-gutter mt-auto mb-6 self-center rounded-lg bg-background/85 px-4 py-2.5 text-center text-[0.625rem] leading-[1.4] font-[600] text-foreground backdrop-blur-sm sm:max-w-[59rem] lg:mb-8 lg:px-10 lg:text-xs">
          {disclaimer}
        </p>
      )}
    </section>
  );
}
