import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PrenuvoArc } from "@foundry/prenuvo-arc";
import { PrenuvoButton } from "@foundry/prenuvo-button";
import { PrenuvoReveal } from "@foundry/prenuvo-reveal";

export interface PrenuvoPlan {
  /** the plan's name */
  name: string;
  /** the small uppercase line under it (e.g. how long the scan takes) */
  spec?: string;
  /** what it includes */
  body: ReactNode;
  /** the card's pill */
  cta: { label: string; href: string };
  /** the corner beam's colour */
  beam?: "lilac" | "blue" | "green";
}

export interface PrenuvoMembershipsProps {
  /** the centred headline */
  title: ReactNode;
  /** the lead under it */
  lead?: ReactNode;
  /** the plans, usually three */
  plans: PrenuvoPlan[];
  /** the closing pill under the cards */
  cta?: { label: string; href: string };
  /** an id for in-page links */
  id?: string;
  className?: string;
}

const beams = {
  lilac: "var(--chart-3)",
  blue: "var(--chart-2)",
  green: "var(--chart-1)",
};
const order = ["lilac", "blue", "green"] as const;

export function PrenuvoMemberships({ title, lead, plans, cta, id, className }: PrenuvoMembershipsProps) {
  return (
    <PrenuvoArc
      id={id}
      className={cn(
        "z-10 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--muted-foreground)_24%,var(--background)),var(--background))] pt-[5.5rem] pb-28 text-foreground lg:pt-44 lg:pb-32",
        className,
      )}
    >
      <div className="mx-auto max-w-page px-gutter lg:px-12">
        <h2 className="mx-auto max-w-[20rem] text-center font-display text-[2.75rem] leading-none font-semibold tracking-[-0.01em] text-balance sm:max-w-3xl lg:text-[4rem]">{title}</h2>
        {lead && <p className="mx-auto mt-6 max-w-[18rem] text-center text-base leading-normal sm:max-w-2xl lg:mt-9 lg:text-lg lg:leading-[1.67]">{lead}</p>}

        <ul className="mt-12 grid gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {plans.map((p, i) => (
            <PrenuvoReveal
              as="li"
              key={p.name}
              step={i}
              className="dark relative isolate flex flex-col overflow-clip rounded-lg bg-[linear-gradient(135deg,var(--background)_30%,var(--card))] p-6 text-foreground lg:rounded-2xl"
            >
              {/* the corner beam: a blurred band slanting up from the bottom-right */}
              <span
                aria-hidden
                className="absolute right-[-30%] bottom-[-55%] -z-10 h-[70%] w-[90%] -rotate-45 blur-[2px]"
                style={{ background: `linear-gradient(to bottom, ${beams[p.beam ?? order[i % 3]]}, transparent 75%)` }}
              />
              <h3 className="font-display text-2xl leading-tight font-semibold">{p.name}</h3>
              {p.spec && <p className="mt-2 font-display text-xs font-bold text-muted-foreground uppercase">{p.spec}</p>}
              <hr className="mt-4 border-border" />
              <p className="mt-6 text-sm leading-normal lg:mt-8">{p.body}</p>
              <div className="mt-auto pt-6">
                <PrenuvoButton href={p.cta.href} variant="ocean">
                  {p.cta.label}
                </PrenuvoButton>
              </div>
            </PrenuvoReveal>
          ))}
        </ul>

        {cta && (
          <div className="mt-8 flex justify-center lg:mt-12">
            <PrenuvoButton href={cta.href} className="px-6">
              {cta.label}
            </PrenuvoButton>
          </div>
        )}
      </div>
    </PrenuvoArc>
  );
}
