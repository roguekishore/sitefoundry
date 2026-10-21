import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeSplitRow {
  /** the tiny label */
  label: string;
  /** the value, one line each */
  value: string[];
  /** makes the value a link (tel:, mailto:…) */
  href?: string;
}

export interface EsrbespokeSplitProps {
  /** the big heading at the left */
  heading: string;
  /** paragraphs from column 7 */
  body?: string[];
  /** label / value rows from column 7 */
  rows?: EsrbespokeSplitRow[];
  tone?: EsrbespokeTone;
  id?: string;
  className?: string;
}

const text = "font-display text-[0.9375rem] leading-[1.2] font-medium tracking-[-0.01em] font-stretch-[106%] lg:text-[1.25rem]";

/** Big heading at the left; a paragraph or label/value rows at column 7. */
export function EsrbespokeSplit({ heading, body, rows, tone = "light", id, className }: EsrbespokeSplitProps) {
  return (
    <section id={id} className={cn(toneClass(tone), "px-gutter pt-8 pb-20 lg:pb-32", className)}>
      <div className="grid grid-cols-2 gap-x-4 lg:grid-cols-12">
        <h2 className="col-span-2 max-w-[11em] font-display text-[2.375rem] leading-[0.95] font-medium tracking-[-0.01em] font-stretch-[106%] lg:col-span-6 lg:text-[3.875rem]">
          {heading}
        </h2>
        {body && (
          <div className="col-span-2 mt-8 space-y-6 lg:col-span-6 lg:col-start-7 lg:mt-0">
            {body.map((p, i) => (
              <p key={i} className={text}>{p}</p>
            ))}
          </div>
        )}
        {rows && (
          <dl className="col-span-2 mt-10 lg:col-span-6 lg:col-start-7 lg:mt-0">
            {rows.map((row, i) => (
              <div key={i} className="grid gap-y-6 border-t border-border pt-4 pb-10 lg:grid-cols-6 lg:gap-x-4 lg:pt-3 lg:pb-2.5 lg:first:border-t-0 lg:first:pt-1">
                <dt className="lg:col-span-2">
                  <EsrbespokeLabel className="text-[0.8125rem] leading-none lg:pt-1">{row.label}</EsrbespokeLabel>
                </dt>
                <dd className={cn(text, "lg:col-span-4")}>
                  {row.href ? (
                    <a href={row.href} className="transition-opacity duration-300 hover:opacity-50">
                      {row.value.map((v, j) => <span key={j} className="block">{v}</span>)}
                    </a>
                  ) : (
                    row.value.map((v, j) => <span key={j} className="block">{v}</span>)
                  )}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
