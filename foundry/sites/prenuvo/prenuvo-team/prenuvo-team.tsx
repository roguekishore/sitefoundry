import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PrenuvoArc } from "@foundry/prenuvo-arc";
import { PrenuvoButton } from "@foundry/prenuvo-button";
import { PrenuvoReveal } from "@foundry/prenuvo-reveal";

export interface PrenuvoTeamProps {
  /** the big claim */
  title: ReactNode;
  /** the lead under it */
  body: ReactNode;
  /** a small italic footnote */
  footnote?: ReactNode;
  /** the soft pill */
  cta?: { label: string; href: string };
  /** the portraits (about seven); each an image, or null for a placeholder */
  portraits: (ReactNode | null)[];
  /** partner names under the portraits: plain text, or a styled node for a real logo */
  partners?: { name: string; logo?: ReactNode }[];
  /** an id for in-page links */
  id?: string;
  className?: string;
}

export function PrenuvoTeam({ title, body, footnote, cta, portraits, partners, id, className }: PrenuvoTeamProps) {
  return (
    <PrenuvoArc id={id} className={cn("z-10 overflow-x-clip bg-background pt-16 pb-32 text-foreground lg:pt-28 lg:pb-48", className)}>
      {/* three slanted light beams, top right (desktop) */}
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 hidden h-[44rem] w-[48%] overflow-clip lg:block">
        <span className="absolute top-[-6rem] right-[-14rem] h-40 w-[64rem] origin-right -rotate-45 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--chart-3)_35%,transparent)_35%,var(--glow))] blur-[6px]" />
        <span className="absolute top-[3rem] right-[-12rem] h-24 w-[56rem] origin-right -rotate-45 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--chart-3)_45%,transparent)_45%,var(--chart-3))] opacity-80 blur-[6px]" />
        <span className="absolute top-[9rem] right-[-12rem] h-24 w-[56rem] origin-right -rotate-45 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--chart-1)_40%,transparent)_40%,var(--chart-1))] opacity-80 blur-[6px]" />
      </div>

      <div className="relative mx-auto max-w-page px-gutter lg:px-12">
        <PrenuvoReveal rise={96} className="max-w-[41rem]">
          <h2 className="font-display text-[2rem] leading-[1.15] font-semibold tracking-[-0.01em] lg:text-5xl lg:leading-[1.1]">{title}</h2>
          <p className="mt-8 max-w-[38rem] text-base leading-normal lg:mt-12 lg:text-lg lg:leading-[1.67]">{body}</p>
          {footnote && <p className="mt-6 text-xs leading-normal italic lg:text-[0.8125rem]">{footnote}</p>}
          {cta && (
            <PrenuvoButton href={cta.href} variant="soft" size="lg" className="mt-8 w-[11.75rem] lg:mt-12">
              {cta.label}
            </PrenuvoButton>
          )}
        </PrenuvoReveal>
      </div>

      {/* the portrait row: centred, wider than the screen, every other tile dropped lower */}
      <ul className="relative mt-10 flex justify-center gap-2 lg:mt-[5.5rem] lg:gap-[1.125rem]">
        {portraits.map((p, i) => (
          <PrenuvoReveal
            as="li"
            key={i}
            rise={0}
            step={i}
            className={cn(
              "h-20 w-16 shrink-0 overflow-clip rounded-[0.375rem] lg:h-[16.375rem] lg:w-[12.75rem] lg:rounded-lg [&>*]:size-full [&>*]:object-cover",
              i % 2 === 1 && "mt-6 lg:mt-10",
            )}
          >
            {p ?? <div className="bg-accent" />}
          </PrenuvoReveal>
        ))}
      </ul>

      {partners && partners.length > 0 && (
        <PrenuvoReveal rise={64} className="relative mx-auto mt-14 max-w-[23rem] px-gutter lg:mt-28 lg:max-w-page lg:px-12">
          <ul className="flex flex-wrap justify-center gap-y-8 lg:gap-y-16">
            {partners.map((p) => (
              <li key={p.name} className="flex w-1/3 items-center justify-center text-center text-muted-foreground/70 lg:w-1/6">
                {p.logo ?? <span className="font-display text-[0.6875rem] leading-tight font-semibold tracking-[0.1em] uppercase lg:text-sm">{p.name}</span>}
              </li>
            ))}
          </ul>
        </PrenuvoReveal>
      )}
    </PrenuvoArc>
  );
}
