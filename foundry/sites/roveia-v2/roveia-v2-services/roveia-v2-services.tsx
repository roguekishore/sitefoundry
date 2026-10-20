import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaV2Heading } from "@foundry/roveia-v2-heading";
import "./roveia-v2-services.css";

export interface RoveiaV2Service {
  /** the service's name */
  title: string;
  /** small chips: channels, formats, methods */
  chips?: string[];
  /** a one-line promise under the chips */
  line?: string;
  /** the illustration at the top; a placeholder tile shows when empty */
  media?: ReactNode;
}

export interface RoveiaV2ServicesProps {
  /** the label above the row */
  heading: string;
  /** the service cards, in order */
  services: RoveiaV2Service[];
  className?: string;
}

/** Card i's moment in the pinned range: spread one card either side. */
function range(i: number, n: number): CSSProperties {
  const step = n > 1 ? 100 / (n - 1) : 0;
  const at = step * i;
  return { "--roveia-v2-services-range": `contain ${at - step}% contain ${at + step}%` } as CSSProperties;
}

export function RoveiaV2Services({ heading, services, className }: RoveiaV2ServicesProps) {
  const n = services.length;
  return (
    <section className={cn("roveia-v2-services relative bg-background text-foreground", className)}>
      <div className="roveia-v2-services-stage pt-14 pb-10 lg:pt-28 lg:pb-28">
        <div className="mx-auto w-full max-w-page px-gutter">
          <RoveiaV2Heading size="label" className="roveia-v2-services-fade">
            {heading}
          </RoveiaV2Heading>
        </div>

        <ul className="roveia-v2-services-track mt-14 space-y-5 px-gutter lg:mt-[3.75rem] lg:flex lg:gap-5 lg:overflow-x-auto lg:space-y-0 lg:px-[max(var(--page-gutter),calc((100vw_-_var(--page-width))/2_+_var(--page-gutter)))]">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="roveia-v2-services-card rounded-lg bg-muted p-6 lg:flex lg:h-[31.5rem] lg:w-[31.25rem] lg:shrink-0 lg:flex-col lg:p-10 lg:pt-6"
              style={range(i, n)}
            >
              <div className="roveia-v2-services-media mx-auto aspect-[1.27] w-full max-w-[20.25rem] overflow-clip rounded-lg [&>*]:size-full [&>*]:object-contain">
                {s.media ?? <div className="bg-foreground/5" />}
              </div>
              <h3 className="mt-8 text-[2rem] leading-[1.2] font-normal tracking-[-0.03em] lg:mt-2">{s.title}</h3>
              {s.chips && s.chips.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-1">
                  {s.chips.map((chip) => (
                    <li key={chip} className="rounded-[calc(var(--radius)/3)] border border-border bg-foreground/5 px-2 py-1 text-base tracking-[-0.02em]">
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
              {s.line && <p className="mt-5 text-base leading-6 tracking-[-0.02em] lg:min-h-12">{s.line}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
