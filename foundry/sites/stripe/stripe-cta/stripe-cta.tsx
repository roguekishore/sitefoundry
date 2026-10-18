import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";

export interface StripeCtaProps {
  title: string;
  text?: string;
  /** the indigo button */
  action?: { label: string; href: string };
  /** small columns on the right: icon, title, sentence, link */
  columns?: { icon: ReactNode; title: string; text: string; link: { label: string; href: string } }[];
  className?: string;
}

/**
 * Closing call to action on a pale band: a light heading, a slate sentence and an indigo
 * button on the left, two small icon columns with links on the right.
 */
export function StripeCta({ title, text, action, columns = [], className }: StripeCtaProps) {
  return (
    <StripeFrame className={cn("bg-muted", className)} innerClassName="pt-16 pb-16 lg:pt-24 lg:pb-20">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-8">
        <div>
          <h2 className="font-display text-[1.75rem] leading-[1.15] font-light tracking-[-0.01em] text-foreground lg:text-[2rem] lg:tracking-[-0.02em]">
            {title}
          </h2>
          {text && <p className="mt-4 max-w-[24rem] text-lg leading-[1.4] font-light text-muted-foreground lg:text-xl">{text}</p>}
          {action && (
            <div className="mt-8 lg:mt-8">
              <StripeButton href={action.href} fullOnMobile>
                {action.label}
              </StripeButton>
            </div>
          )}
        </div>
        {columns.map((c) => (
          <div key={c.title} className="max-w-[16rem]">
            <span className="flex size-10 items-center justify-center rounded-md border border-border bg-background text-primary [&_svg]:size-[1.15rem] [&_svg]:stroke-[1.5]">
              {c.icon}
            </span>
            <h3 className="mt-5 text-base font-normal text-foreground">{c.title}</h3>
            <p className="mt-1 text-base leading-[1.4] font-light text-muted-foreground">{c.text}</p>
            <StripeButton href={c.link.href} variant="link" className="mt-4 text-base">
              {c.link.label}
            </StripeButton>
          </div>
        ))}
      </div>
    </StripeFrame>
  );
}
