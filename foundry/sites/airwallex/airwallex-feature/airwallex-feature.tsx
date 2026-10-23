import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AirwallexButton } from "@foundry/airwallex-button";
import { AirwallexPlaceholder } from "@foundry/airwallex-placeholder";

export interface AirwallexFeatureProps {
  /** the headline */
  title: string;
  /** the paragraph */
  body: string;
  /** the violet button */
  action?: { label: string; href: string };
  /** the product shot; empty for a placeholder */
  media?: ReactNode;
  /** which side the shot sits on, on desktop */
  side?: "left" | "right";
  className?: string;
}

/** Shot on one side, headline, paragraph and button on the other. */
export function AirwallexFeature({ title, body, action, media, side = "left", className }: AirwallexFeatureProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-[76rem] items-center gap-12 px-gutter pt-8 pb-10 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-20">
        <div className={cn(side === "right" ? "lg:col-start-1" : "lg:col-start-2", "lg:row-start-1")}>
          <h2 className="font-display text-[1.75rem] leading-[1.25] font-bold lg:text-[2.5rem]">{title}</h2>
          <p className="mt-6 text-base leading-6 text-foreground/80 lg:mt-5 lg:max-w-[33rem] lg:leading-[1.55]">{body}</p>
          {action && (
            <AirwallexButton href={action.href} className="mt-10 hidden lg:inline-flex">
              {action.label}
            </AirwallexButton>
          )}
        </div>
        <div className={cn(side === "right" ? "lg:col-start-2" : "lg:col-start-1", "lg:row-start-1")}>
          {media ?? <AirwallexPlaceholder tone="shot" className="mx-auto aspect-[3/2] w-full max-w-[29.5rem] rounded-md" />}
        </div>
        {action && (
          <AirwallexButton href={action.href} className="mt-2 h-12 w-full lg:hidden">
            {action.label}
          </AirwallexButton>
        )}
      </div>
    </section>
  );
}
