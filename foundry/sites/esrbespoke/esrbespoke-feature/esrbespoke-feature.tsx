import type { ReactNode } from "react";
import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { EsrbespokeParallax } from "@foundry/esrbespoke-parallax";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeFeatureMeta {
  /** a prefix such as "Phone:" (optional) */
  label?: string;
  /** the line */
  text: string;
  /** makes the text an underlined link */
  href?: string;
}

export interface EsrbespokeFeatureRow {
  /** the tiny label */
  label: string;
  /** one paragraph, or several items listed between hairlines */
  items: string[];
}

export interface EsrbespokeFeatureProps {
  /** the name at the left */
  title: string;
  /** address lines in tiny capitals at column 4 (optional) */
  meta?: EsrbespokeFeatureMeta[];
  /** the 4:3 photo (fills like object-fit: cover). Empty: a placeholder */
  media?: ReactNode;
  /** the lead paragraph under the photo */
  lead: string;
  /** label / text rows */
  rows: EsrbespokeFeatureRow[];
  /** keep the left column in view while the right one scrolls (desktop) */
  sticky?: boolean;
  tone?: EsrbespokeTone;
  id?: string;
  className?: string;
}

const text = "font-display text-[0.9375rem] leading-[1.2] font-medium tracking-[-0.01em] font-stretch-[106%] lg:text-[1.25rem]";

/** A partner or location: name at the left, photo, lead and detail rows from column 7. */
export function EsrbespokeFeature({ title, meta, media, lead, rows, sticky = false, tone = "light", id, className }: EsrbespokeFeatureProps) {
  return (
    <section id={id} className={cn(toneClass(tone), "pb-20 lg:pb-32", className)}>
      <div className="mx-gutter grid grid-cols-2 gap-x-4 border-t border-border pt-7 lg:grid-cols-12">
        <div className={cn("col-span-2 grid grid-cols-2 gap-x-4 self-start lg:col-span-6 lg:grid-cols-6", sticky && "lg:sticky lg:top-8")}>
          <h2 className="col-span-2 font-display text-[1.125rem] leading-[1.2] font-medium tracking-[-0.01em] font-stretch-[106%] lg:col-span-3 lg:text-[1.25rem]">
            {title}
          </h2>
          {meta && (
            <div className="col-span-2 mt-4 lg:col-span-3 lg:mt-1">
              {meta.map((m, i) => (
                <EsrbespokeLabel key={i} className="text-[0.8125rem] leading-none">
                  {m.label && <>{m.label} </>}
                  {m.href ? (
                    <a href={m.href} className="underline underline-offset-2 transition-opacity duration-300 hover:opacity-50">{m.text}</a>
                  ) : (
                    m.text
                  )}
                </EsrbespokeLabel>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-2 mt-7 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <EsrbespokeParallax media={media} drift="none" fadeIn className="aspect-[4/3]" />
          <p className={cn(text, "mt-4 lg:mt-6")}>{lead}</p>
          <dl className="mt-14">
            {rows.map((row, i) => (
              <div key={i} className="grid gap-y-6 border-t border-border pt-4 pb-12 lg:grid-cols-6 lg:gap-x-4 lg:pt-0 lg:pb-0">
                <dt className="lg:col-span-2 lg:pt-4">
                  <EsrbespokeLabel className="text-[0.8125rem] leading-none">{row.label}</EsrbespokeLabel>
                </dt>
                {row.items.length === 1 ? (
                  <dd className={cn(text, "lg:col-span-4 lg:py-3")}>{row.items[0]}</dd>
                ) : (
                  <dd className="lg:col-span-4">
                    <ul>
                      {row.items.map((item, j) => (
                        <li key={j} className={cn(text, "border-b border-border py-2.5 first:pt-0 lg:first:pt-3")}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
