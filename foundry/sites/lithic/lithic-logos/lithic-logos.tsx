import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LithicTextmark, type LithicTextmarkStyle } from "@foundry/lithic-textmark";
import "./lithic-logos.css";

export interface LithicLogo {
  /** the company's name (shown as a text mark when there's no `logo`) */
  name: string;
  /** how the text mark is set */
  variant?: LithicTextmarkStyle;
  /** a real mark (svg/img) to use instead of the text */
  logo?: ReactNode;
}

export interface LithicLogosProps {
  /** the line above the row */
  title: string;
  /** the customers; eight or more keep the loop full */
  logos: LithicLogo[];
  className?: string;
}

function Row({ logos, hidden }: { logos: LithicLogo[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-16 pr-16">
      {logos.map((logo) => (
        <li key={logo.name} className="flex h-10 items-center text-[1.4rem] text-foreground">
          {logo.logo ?? <LithicTextmark name={logo.name} variant={logo.variant} />}
        </li>
      ))}
    </ul>
  );
}

/** "Trusted by" row: a headline over a slow, endless strip of wordmarks. */
export function LithicLogos({ title, logos, className }: LithicLogosProps) {
  return (
    <section className={cn("overflow-clip bg-background pt-12 pb-16 text-foreground lg:pt-[4.5rem] lg:pb-24", className)}>
      <h2 className="px-gutter text-center font-display text-2xl/[1.2] font-semibold tracking-[-0.02em] lg:text-[2rem]/[1.2]">{title}</h2>
      <div className="lithic-logos-window mx-auto mt-10 max-w-[82.5rem] overflow-clip lg:mt-14">
        <div className="lithic-logos-track flex w-max">
          <Row logos={logos} />
          <Row logos={logos} hidden />
        </div>
      </div>
    </section>
  );
}
