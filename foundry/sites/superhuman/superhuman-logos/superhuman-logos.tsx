import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SuperhumanLogo {
  /** the company's name, for screen readers and as the fallback mark */
  name: string;
  /** the wordmark (text, svg or img); falls back to the name */
  mark?: ReactNode;
}

export interface SuperhumanLogosProps {
  /** the caption above the grid */
  caption: string;
  /** six logos */
  logos: SuperhumanLogo[];
  className?: string;
}

export function SuperhumanLogos({ caption, logos, className }: SuperhumanLogosProps) {
  return (
    <section className={cn("bg-background px-gutter py-10 text-foreground lg:pt-10 lg:pb-24", className)}>
      <div className="mx-auto max-w-page">
        <p className="mx-auto max-w-[16rem] text-center text-base/[1.5] font-[460] text-foreground/65 lg:max-w-none">{caption}</p>
        <ul className="mt-9 grid grid-cols-3 gap-px border border-border bg-border lg:mt-24 lg:grid-cols-6">
          {logos.map((l) => (
            <li key={l.name} className="flex h-20 items-center justify-center bg-background px-3" aria-label={l.name}>
              {l.mark ?? <span className="text-xl font-semibold">{l.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
