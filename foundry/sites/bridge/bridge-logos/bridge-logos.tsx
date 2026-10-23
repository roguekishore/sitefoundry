import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BridgeButton } from "@foundry/bridge-button";

export interface BridgeLogo {
  /** the customer's name, shown as a plain wordmark (and used as the label of a real logo) */
  name: string;
  /** a small icon before the name */
  icon?: ReactNode;
  /** a real logo image; replaces the plain wordmark */
  logo?: ReactNode;
}

export interface BridgeLogosProps {
  /** the line above the logos */
  title: string;
  /** the customers; rows of five on desktop */
  logos: BridgeLogo[];
  /** the outlined button under the logos */
  action: { label: string; href: string };
  className?: string;
}

/** Bridge's centred wall of customer wordmarks. */
export function BridgeLogos({ title, logos, action, className }: BridgeLogosProps) {
  return (
    <section className={cn("bg-background pt-2.5 pb-4 text-foreground lg:pt-7 lg:pb-9", className)}>
      <div className="mx-auto flex max-w-page flex-col px-gutter lg:items-center">
        <h2 className="max-w-[20rem] font-display text-[1.625rem]/[1.1] font-normal tracking-[-0.03em] sm:max-w-none lg:text-center lg:text-[1.375rem]/[1.2] lg:tracking-[-0.02em]">
          {title}
        </h2>
        <ul className="mx-auto mt-2 flex w-full max-w-[17.5rem] flex-wrap justify-center lg:mt-7 lg:max-w-[46.25rem]">
          {logos.map((l, i) => (
            <li
              key={l.name}
              className={cn(
                "flex h-[4.875rem] basis-1/2 items-center justify-center lg:h-[5.1875rem] lg:basis-[9.25rem]",
                i === 0 && "basis-full",
              )}
            >
              {l.logo ?? (
                <span className="flex items-center gap-1.5 font-display text-[1.375rem]/none font-semibold tracking-[-0.04em] whitespace-nowrap [&_svg]:size-5">
                  {l.icon}
                  {l.name}
                </span>
              )}
            </li>
          ))}
        </ul>
        <BridgeButton href={action.href} variant="outline" className="mx-auto mt-10 lg:mt-7">
          {action.label}
        </BridgeButton>
      </div>
    </section>
  );
}
