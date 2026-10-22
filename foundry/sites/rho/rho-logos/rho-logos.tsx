import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rho-logos.css";

export interface RhoLogo {
  /** the company's name (shown as a plain wordmark, and read by screen readers) */
  name: string;
  /** optional mark before the name (a lucide icon) */
  icon?: ReactNode;
}

export interface RhoLogosProps {
  /** the mono line above the row */
  label: string;
  /** the companies; five or more fill the row */
  logos: RhoLogo[];
  /** dark (as the original) or light */
  tone?: "dark" | "light";
  className?: string;
}

function Row({ logos, copy }: { logos: RhoLogo[]; copy?: boolean }) {
  return (
    <ul className={cn("flex shrink-0 items-center", copy && "rho-logos-copy")} aria-hidden={copy || undefined}>
      {logos.map((l) => (
        <li
          key={l.name}
          className="flex w-[11rem] shrink-0 items-center justify-center gap-2 font-display text-[1.375rem] font-medium tracking-[-0.03em] whitespace-nowrap lg:w-[15.25rem] lg:text-[1.625rem] [&_svg]:size-6"
        >
          {l.icon}
          {l.name}
        </li>
      ))}
    </ul>
  );
}

export function RhoLogos({ label, logos, tone = "dark", className }: RhoLogosProps) {
  return (
    <section data-rho-tone={tone} className={cn(tone === "dark" && "dark", "bg-background pt-12 pb-16 text-foreground lg:pt-16 lg:pb-[4.5rem]", className)}>
      <p className="mx-auto max-w-[22rem] px-gutter text-center font-mono text-[0.8125rem] leading-[1.35] font-medium tracking-[0.06em] uppercase lg:max-w-none">
        {label}
      </p>
      <div className="rho-logos-mask mt-8 overflow-clip lg:mx-auto lg:mt-10 lg:max-w-page">
        <div className="rho-logos-track flex w-max">
          <Row logos={logos} />
          <Row logos={logos} copy />
        </div>
      </div>
    </section>
  );
}
