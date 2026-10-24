import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./framer-logos.css";

export interface FramerLogo {
  /** the customer's name (shown as a wordmark, or read to screen readers when `mark` is set) */
  name: string;
  /** a real logo to show instead of the text wordmark */
  mark?: ReactNode;
}

export interface FramerLogosProps {
  /** eight on the original (4×2 on desktop) */
  logos: FramerLogo[];
  /** screen-reader label for the list */
  label?: string;
  className?: string;
}

function Wordmark({ logo }: { logo: FramerLogo }) {
  return logo.mark ? (
    <span role="img" aria-label={logo.name} className="flex h-8 items-center">
      {logo.mark}
    </span>
  ) : (
    <span className="font-display text-[1.375rem] leading-8 font-semibold tracking-[-0.03em] whitespace-nowrap text-foreground">
      {logo.name}
    </span>
  );
}

/** Centred 4×2 wordmark grid; a ticker on phones. */
export function FramerLogos({ logos, label, className }: FramerLogosProps) {
  return (
    <section aria-label={label} className={cn("bg-background py-12 text-foreground lg:py-[6.25rem]", className)}>
      {/* phones: ticker */}
      <div className="overflow-x-clip lg:hidden">
        <div className="framer-logos-track flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 || undefined} className={cn("flex shrink-0 items-center gap-12 pr-12", copy === 1 && "framer-logos-copy")}>
              {logos.map((logo) => (
                <li key={logo.name}>
                  <Wordmark logo={logo} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      {/* desktop: grid */}
      <ul className="mx-auto hidden max-w-[39rem] grid-cols-4 gap-y-9 px-gutter lg:grid">
        {logos.map((logo) => (
          <li key={logo.name} className="flex justify-center">
            <Wordmark logo={logo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
