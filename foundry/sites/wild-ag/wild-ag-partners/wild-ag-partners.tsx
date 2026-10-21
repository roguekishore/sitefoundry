import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WildAgHeading } from "@foundry/wild-ag-heading";
import { WildAgTicker } from "@foundry/wild-ag-ticker";

export interface WildAgPartner {
  /** the partner's name; shown when there's no logo, and as the logo's label */
  name: string;
  /** a logo image. Empty: the name in the display serif */
  media?: ReactNode;
}

export interface WildAgPartnersProps {
  /** an id for in-page links */
  id?: string;
  title: string;
  partners: WildAgPartner[];
  /** seconds for the row to pass once */
  duration?: number;
  /** pull up under the rounded band above by its corner radius */
  tuck?: boolean;
  className?: string;
}

export function WildAgPartners({ id, title, partners, duration = 14.5, tuck = false, className }: WildAgPartnersProps) {
  // repeat short lists so one copy is always wider than the window
  const row = partners.length < 6 ? [...partners, ...partners] : partners;
  return (
    <section
      id={id}
      className={cn(
        "bg-background py-section",
        tuck &&
          "-mt-[calc(var(--radius)*3.4)] pt-[calc(var(--section-y)+var(--radius)*3.4)] lg:-mt-[calc(var(--radius)*4.5)] lg:pt-[calc(var(--section-y)+var(--radius)*4.5)]",
        className,
      )}
    >
      <div className="px-gutter">
        <div className="mx-auto max-w-page">
          <WildAgHeading>{title}</WildAgHeading>
        </div>
      </div>
      <ul className="sr-only">
        {partners.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
      <WildAgTicker duration={duration} gap="1rem" className="mt-8">
        {row.map((p, i) => (
          <div
            key={i}
            aria-hidden
            className="flex h-[10.5rem] w-[12.8rem] shrink-0 items-center justify-center rounded-lg bg-card px-6 lg:h-[11.6rem] lg:w-[17.3rem]"
          >
            {p.media ?? (
              <span className="text-center font-display text-[1.6rem] leading-tight text-primary/80 italic lg:text-[1.9rem]">{p.name}</span>
            )}
          </div>
        ))}
      </WildAgTicker>
    </section>
  );
}
