import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./roveia-services.css";

export interface RoveiaService {
  title: string;
  /** small chips under the title (channels, deliverables) */
  chips?: string[];
  /** one line under the chips */
  tagline?: string;
  /** the illustration at the top of the card; a placeholder when empty */
  media?: ReactNode;
}

export interface RoveiaServicesProps {
  heading: string;
  services: RoveiaService[];
  className?: string;
}

/**
 * "What we do" as a row of soft grey cards (24px corners): an illustration on top, a 32px
 * title, small hairline chips and a tagline. On desktop the section pins and the row slides
 * sideways as you scroll; the card in focus takes a pale blue tint and its illustration turns
 * from grey to colour. Phones stack the cards.
 */
export function RoveiaServices({ heading, services, className }: RoveiaServicesProps) {
  const steps = Math.max(services.length - 1, 1);
  return (
    <section className={cn("roveia-services-track bg-background text-foreground", className)} style={{ "--steps": steps } as CSSProperties}>
      <div className="flex flex-col py-16 lg:sticky lg:top-0 lg:h-svh lg:justify-center lg:py-0">
        <h2 className="roveia-services-fade px-gutter text-[2rem] leading-[1.2] font-normal tracking-[-0.03em] lg:px-30">{heading}</h2>
        <div className="roveia-services-viewport mt-14 lg:mt-20">
          <ul className="roveia-services-row flex flex-col gap-5 px-gutter lg:w-max lg:flex-row lg:px-30">
            {services.map((s, i) => (
              <li
                key={s.title}
                className="roveia-services-card flex flex-col rounded-lg bg-muted px-6 pt-1 pb-6 lg:h-[31.5rem] lg:w-[31.25rem] lg:px-10 lg:pt-2.5 lg:pb-10"
                style={{ "--i": i } as CSSProperties}
              >
                <div className="roveia-services-media mx-auto aspect-[1.27] w-full max-w-[20.25rem] overflow-clip rounded-lg">
                  {s.media ?? <div className="size-full bg-glow/25" />}
                </div>
                <h3 className="mt-6 text-[2rem] lg:mt-5 leading-[1.2] font-light tracking-[-0.03em]">{s.title}</h3>
                {s.chips && s.chips.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-1">
                    {s.chips.map((c) => (
                      <li
                        key={c}
                        className="flex h-8 items-center rounded-[calc(var(--radius)/3)] border border-border bg-foreground/5 px-2 text-base tracking-[-0.01em]"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                {s.tagline && <p className="mt-5 text-base leading-6 tracking-[-0.01em]">{s.tagline}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
