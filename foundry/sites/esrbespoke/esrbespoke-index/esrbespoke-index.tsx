import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeIndexItem {
  /** the row's name */
  title: string;
  /** a link for the row (optional) */
  href?: string;
}

export interface EsrbespokeIndexProps {
  /** the tiny label at the left */
  label: string;
  /** the rows; they are numbered 01, 02… */
  items: EsrbespokeIndexItem[];
  tone?: EsrbespokeTone;
  id?: string;
  className?: string;
}

/** Label at the left, numbered hairline rows at column 9. */
export function EsrbespokeIndex({ label, items, tone = "light", id, className }: EsrbespokeIndexProps) {
  return (
    <section id={id} className={cn(toneClass(tone), "pt-24 pb-9 lg:pt-[16.75rem] lg:pb-[14rem]", className)}>
      <div className="mx-gutter grid grid-cols-2 gap-x-4 border-border lg:grid-cols-12 lg:border-t">
        <EsrbespokeLabel as="h2" className="col-span-2 lg:col-span-3 lg:pt-7">{label}</EsrbespokeLabel>
        <ol className="col-span-2 mt-6 border-t border-border lg:col-span-4 lg:col-start-9 lg:mt-0 lg:border-t-0">
          {items.map((item, i) => {
            const body = (
              <>
                <span className="w-14 shrink-0 font-mono text-[0.8125rem] leading-none tracking-[0.04em] font-stretch-[88%]">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-[0.9375rem] leading-[1.2] font-medium font-stretch-[106%] lg:text-[1.25rem]">{item.title}</span>
              </>
            );
            return (
              <li key={i} className="border-b border-border">
                {item.href ? (
                  <a href={item.href} className="flex items-center py-4 transition-opacity duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:opacity-50 lg:py-5">
                    {body}
                  </a>
                ) : (
                  <div className="flex items-center py-4 lg:py-5">{body}</div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
