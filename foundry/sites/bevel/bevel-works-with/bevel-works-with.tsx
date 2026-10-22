import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./bevel-works-with.css";

export interface BevelWorksWithProps {
  /** the small heading above the logos */
  title: ReactNode;
  /** the partner wordmarks (svg, img or styled text), five or so */
  logos: ReactNode[];
  className?: string;
}

/**
 * A small centered heading over a row of partner wordmarks: one still row on desktop, a
 * slowly drifting marquee on phones (where the row is too wide to fit).
 */
export function BevelWorksWith({ title, logos, className }: BevelWorksWithProps) {
  const row = (copy: number) =>
    logos.map((logo, i) => (
      <li key={`${copy}-${i}`} aria-hidden={copy > 0 || undefined} className={cn("flex h-8 shrink-0 items-center text-foreground", copy > 0 && "lg:hidden")}>
        {logo}
      </li>
    ));
  return (
    <section className={cn("bg-background pt-[5.5rem] text-foreground lg:pt-[5.75rem]", className)}>
      <h2 className="text-center text-[1.25rem] leading-[0.9] font-semibold tracking-[-0.01em] lg:text-2xl">{title}</h2>
      <div className="mt-4 overflow-clip lg:mt-5">
        <ul className="bevel-works-track flex w-max items-center gap-10 lg:mx-auto lg:w-auto lg:justify-center">
          {row(0)}
          {row(1)}
        </ul>
      </div>
    </section>
  );
}
