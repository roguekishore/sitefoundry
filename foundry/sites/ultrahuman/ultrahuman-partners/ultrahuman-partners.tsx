import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./ultrahuman-partners.css";

export interface UltrahumanPartner {
  /** the institution's name (shown as a grey wordmark when there's no logo, and read to screen readers) */
  name: string;
  /** a logo to show instead of the name (svg or img, greyed) */
  logo?: ReactNode;
}

export interface UltrahumanPartnersProps {
  /** the small mono label over the row */
  label: string;
  /** the partners (six on the original) */
  partners: UltrahumanPartner[];
  /** draw the hairline rule above the section */
  rule?: boolean;
  className?: string;
}

/** A quiet partner strip: a hairline, a centred mono label and a row of grey wordmarks that loops
 *  very slowly sideways and drifts a little further as the page scrolls. */
export function UltrahumanPartners({ label, partners, rule = true, className }: UltrahumanPartnersProps) {
  const row = (copy: number) =>
    partners.map((partner) => (
      <li
        key={`${copy}-${partner.name}`}
        aria-hidden={copy > 0 ? true : undefined}
        className="flex w-[10rem] shrink-0 items-center justify-center px-3 text-center text-[0.9375rem] leading-tight font-medium tracking-[-0.02em] text-foreground/35 lg:w-[15.625rem] lg:text-lg [&_img]:max-h-12 [&_svg]:max-h-12"
      >
        {partner.logo ?? partner.name}
      </li>
    ));
  return (
    <section className={cn("overflow-clip bg-background text-foreground", className)}>
      {rule && <div aria-hidden className="mx-auto h-px max-w-[80.5rem] bg-foreground/10 max-lg:mx-gutter" />}
      <div className="pt-16 pb-20 lg:pt-[6.5rem] lg:pb-28">
        <p className="text-center font-mono text-[0.8125rem] leading-none tracking-[0.06em] text-foreground/60 uppercase lg:text-base">{label}</p>
        <div className="ultrahuman-partners-drift mt-10 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] lg:mt-14">
          <ul className="ultrahuman-partners-track flex h-14 w-max">
            {row(0)}
            {row(1)}
          </ul>
        </div>
      </div>
    </section>
  );
}
