import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectButton } from "@foundry/reflect-button";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";
import "./reflect-pricing.css";

export interface ReflectPlan {
  /** the device or plan name */
  name: string;
  /** the price, set in the gradient */
  price: string;
  /** big: 72px (a one-word price) · small: 32px (a phrase) */
  priceSize?: "big" | "small";
  /** a muted line under the price */
  text: string;
  action: { label: string; href: string };
  /** primary: violet button · secondary: dark button */
  actionVariant?: "primary" | "secondary";
}

export interface ReflectPricingProps {
  eyebrow?: string;
  title: string;
  /** two plans, side by side with a hairline between them */
  plans: ReflectPlan[];
  /** small print under the plans */
  note?: string;
  /** the glowing planet behind the plans (an image in the original); a glow wash when empty */
  media?: ReactNode;
  mediaLabel?: string;
  className?: string;
}

/** Two plans with gradient prices over a rising planet of light and its reflection. */
export function ReflectPricing({ eyebrow, title, plans, note, media, mediaLabel, className }: ReflectPricingProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background pt-[5.25rem] pb-[35rem] text-foreground lg:pt-[9.25rem] lg:pb-[34.5rem]", className)}>
      {/* the planet and its faint reflection */}
      <div aria-hidden={!media} className="absolute inset-x-0 bottom-0 -z-10 h-[52rem] lg:h-[69rem]">
        <ReflectMedia
          tone="rise"
          reveal
          label={mediaLabel}
          className="reflect-pricing-drift absolute top-0 left-1/2 h-[52.3rem] w-[46.5rem] -translate-x-1/2 rounded-b-full bg-[radial-gradient(50%_45%_at_50%_100%,color-mix(in_oklab,var(--glow)_75%,transparent),color-mix(in_oklab,var(--glow)_18%,transparent)_70%,transparent)] lg:top-[4rem]"
        >
          {media}
        </ReflectMedia>
        <span className="absolute bottom-0 left-1/2 h-[16rem] w-[42rem] -translate-x-1/2 rounded-t-full bg-[radial-gradient(50%_60%_at_50%_0%,color-mix(in_oklab,var(--glow)_30%,transparent),transparent)] blur-xl" />
      </div>
      <div className="px-gutter">
        <ReflectHeading eyebrow={eyebrow} title={title} />
        <ul className="mx-auto mt-14 flex max-w-[20rem] flex-col gap-16 sm:max-w-none lg:mt-[4.5rem] lg:flex-row lg:justify-center lg:gap-0">
          {plans.map((plan, i) => (
            <li
              key={plan.name}
              className={cn(
                "flex flex-col items-center text-center lg:px-14",
                i > 0 && "lg:border-l lg:border-border",
              )}
            >
              <p className="text-base/6">{plan.name}</p>
              <p
                className={cn(
                  "bg-linear-to-r from-chart-2 via-chart-3 to-chart-4 bg-clip-text font-display font-[560] text-transparent",
                  plan.priceSize === "small"
                    ? "mt-12 text-[2.25rem]/[2.5rem] lg:mt-10 lg:text-[2rem]/[2.5rem]"
                    : "mt-6 text-[4.5rem]/[5rem] lg:mt-4",
                )}
              >
                {plan.price}
              </p>
              <p className="mt-6 text-base/6 text-muted-foreground lg:mt-8">{plan.text}</p>
              <div className="mt-[3.25rem] w-full lg:mt-auto lg:w-auto lg:pt-[3.25rem]">
                <ReflectButton href={plan.action.href} variant={plan.actionVariant ?? "primary"} className="max-lg:w-full max-lg:justify-start">
                  {plan.action.label}
                </ReflectButton>
              </div>
            </li>
          ))}
        </ul>
        {note && <p className="mx-auto mt-[4.5rem] max-w-[23rem] text-center text-sm/5 text-muted-foreground sm:max-w-none">{note}</p>}
      </div>
    </section>
  );
}
