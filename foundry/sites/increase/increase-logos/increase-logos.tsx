import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./increase-logos.css";

export interface IncreaseLogo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text), about 24px tall */
  logo: ReactNode;
}

export interface IncreaseLogosProps {
  /** the customer wordmarks; eight or more fill a desktop row */
  logos: IncreaseLogo[];
  className?: string;
}

/** A framed strip of customer wordmarks sliding slowly left for ever; it pauses on hover. */
export function IncreaseLogos({ logos, className }: IncreaseLogosProps) {
  // the list twice, so the track can slide by half its width and start over unnoticed
  const loop = [...logos, ...logos];
  return (
    <section className={cn("increase-logos border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page overflow-clip border-x border-border">
        <ul className="increase-logos-track flex w-max items-center">
          {loop.map((item, i) => (
            <li
              key={`${item.name}-${i}`}
              aria-hidden={i >= logos.length ? true : undefined}
              className="flex h-[5.875rem] w-[9.75rem] shrink-0 items-center justify-center text-foreground [&_svg]:h-6 [&_svg]:w-auto"
            >
              <span role="img" aria-label={item.name} className="flex items-center">
                {item.logo}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
