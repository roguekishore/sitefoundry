import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./airwallex-logos.css";

export interface AirwallexLogo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
}

export interface AirwallexLogosProps {
  /** the bold line above the row */
  title: string;
  /** the wordmarks; six or more keep the row full */
  logos: AirwallexLogo[];
  className?: string;
}

/** A trust line and an endless row of logos with faded edges. */
export function AirwallexLogos({ title, logos, className }: AirwallexLogosProps) {
  const row = (copy: number) =>
    logos.map((l) => (
      <li
        key={`${copy}-${l.name}`}
        aria-hidden={copy > 0 || undefined}
        className="flex h-10 w-[9.5rem] shrink-0 items-center justify-center text-foreground lg:w-[14.5rem]"
      >
        <span role="img" aria-label={l.name} className="flex items-center [&_svg]:h-8 [&_svg]:w-auto">
          {l.logo}
        </span>
      </li>
    ));
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-2 pb-14 lg:px-12 lg:pt-10 lg:pb-[3.25rem]">
        <p className="mx-auto max-w-[20rem] text-center text-sm leading-[1.4] font-bold lg:max-w-none lg:text-lg">{title}</p>
        <div className="mt-8 overflow-clip mask-x-from-85% mask-x-to-100% lg:mt-10">
          <ul className="airwallex-logos-track flex w-max">
            {row(0)}
            {row(1)}
          </ul>
        </div>
      </div>
    </section>
  );
}
