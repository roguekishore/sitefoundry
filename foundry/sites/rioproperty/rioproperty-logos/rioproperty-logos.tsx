import { cn } from "@foundry/foundry-utils";
import { RiopropertyRiseText } from "@foundry/rioproperty-rise-text";
import "./rioproperty-logos.css";

export interface RiopropertyLogosProps {
  /** the centred violet capital line above the row */
  heading: string;
  /** client names, shown as plain-text marks in light grey (a real logo can replace each later) */
  names: string[];
  /** how many times the list repeats so the row always runs past both edges */
  repeat?: number;
  className?: string;
}

export function RiopropertyLogos({ heading, names, repeat = 3, className }: RiopropertyLogosProps) {
  const row = Array.from({ length: repeat }, () => names).flat();
  return (
    <section className={cn("overflow-clip bg-background pt-4 pb-8 lg:pt-24 lg:pb-28", className)}>
      <RiopropertyRiseText
        text={heading}
        className="mx-auto max-w-[19rem] px-gutter text-center font-sans text-lg leading-normal font-normal text-primary uppercase sm:max-w-none lg:text-2xl"
      />
      <div className="rioproperty-logos-row mt-8 lg:mt-24">
        {/* starts a fifth of the window to the left, then drifts right with the scroll */}
        <ul className="-ml-[20vw] flex w-max items-center">
          {row.map((name, i) => (
            <li
              key={i}
              aria-hidden={i >= names.length || undefined}
              className={cn(
                "flex h-24 w-[8.5rem] shrink-0 items-center justify-center px-2 text-center text-muted-foreground/45 transition-colors duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-primary lg:h-28 lg:w-[15.25rem]",
                i % 2 === 0
                  ? "font-display text-base leading-none font-semibold uppercase lg:text-xl"
                  : "font-sans text-lg leading-none font-semibold tracking-tight lg:text-[1.625rem]",
              )}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
