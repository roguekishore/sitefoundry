import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RiopropertyRiseText } from "@foundry/rioproperty-rise-text";
import "./rioproperty-personas.css";

export interface RiopropertyPersona {
  /** the capital title over the photo */
  title: string;
  /** one line on what this kind of client needs (always shown on phones, on hover on desktop) */
  line: string;
  href: string;
  /** a photo; fills the card like object-fit cover. Empty: a placeholder */
  media?: ReactNode;
}

export interface RiopropertyPersonasProps {
  /** the big capital heading */
  heading: string;
  /** the violet capital line under it */
  subhead: string;
  /** usually four cards */
  personas: RiopropertyPersona[];
  className?: string;
}

// The original's hover timing: 0.75s on a long, snappy ease.
const ease = "duration-[750ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none";

export function RiopropertyPersonas({ heading, subhead, personas, className }: RiopropertyPersonasProps) {
  return (
    <section className={cn("bg-background pt-section pb-section text-foreground lg:pb-16", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <RiopropertyRiseText
          text={heading}
          className="font-display text-[clamp(2.19rem,1.8rem+1.61vw,3.25rem)] leading-[0.966] font-semibold uppercase lg:max-w-[44rem]"
        />
        <RiopropertyRiseText
          as="p"
          split="block"
          text={subhead}
          className="mt-6 max-w-[19rem] text-lg leading-normal text-primary uppercase sm:max-w-none lg:mt-8 lg:text-2xl"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {personas.map((persona, i) => (
            <li key={persona.title} className="rioproperty-personas-column" style={{ "--rioproperty-personas-i": i + 1 } as CSSProperties}>
              <a href={persona.href} className="group/persona relative isolate block aspect-[318/371] overflow-clip bg-muted">
                <div className={cn("absolute inset-0 -z-10 transition-[scale] group-hover/persona:scale-105", ease)}>{persona.media}</div>
                {/* the original's title gradient: clear at the top, ~60% dark near the bottom */}
                <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(transparent,color-mix(in_oklab,var(--secondary)_62%,transparent)_84%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-background dark:text-foreground">
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-display text-[1.6875rem] leading-[1.17] font-semibold uppercase lg:text-[2.25rem]">{persona.title}</h3>
                    <ArrowUpRight
                      aria-hidden
                      strokeWidth={1.25}
                      className={cn("mb-1.5 size-6 shrink-0 transition-[opacity,translate] lg:opacity-0 lg:group-hover/persona:opacity-100", ease)}
                    />
                  </div>
                  {/* the line opens on hover on desktop; on phones it is always there */}
                  <div className={cn("grid grid-rows-[1fr] transition-[grid-template-rows] lg:grid-rows-[0fr] lg:group-hover/persona:grid-rows-[1fr]", ease)}>
                    <p className="min-h-0 overflow-hidden pt-1 leading-normal opacity-90">{persona.line}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
