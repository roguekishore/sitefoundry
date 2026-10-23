import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJoulePlaceholder } from "@foundry/zetta-joule-placeholder";
import { ZettaJouleStatement } from "@foundry/zetta-joule-statement";
import "./zetta-joule-reactor.css";

export interface ZettaJouleReactorProps {
  /** small label, top-left */
  label: string;
  /** the statement */
  statement: string;
  /** the boxed tag (e.g. the product name in capitals) */
  tag: string;
  /** the spec lines: label and value, shown in capitals */
  specs: { label: string; value: string }[];
  /** exactly four notes shown around the model: title and text */
  features: { title: string; text: string }[];
  /** the model (a transparent render, taller than wide); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

export function ZettaJouleReactor({ label, statement, tag, specs, features, media, className }: ZettaJouleReactorProps) {
  return (
    <section className={cn("bg-secondary text-highlight", className)}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)+5rem)] px-gutter pt-20 lg:px-10 lg:pt-section lg:pb-40">
        <ZettaJouleStatement tone="accent" label={label} statement={statement} />
      </div>
      <div className="zetta-joule-reactor-pin">
        <div className="relative px-gutter lg:sticky lg:top-0 lg:h-svh lg:min-h-[44rem] lg:overflow-clip lg:px-[6.8vw]">
          <p className="mt-12 w-fit rounded-sm border border-highlight/25 px-4 py-2 text-xs leading-none font-medium tracking-[-0.01em] uppercase lg:absolute lg:top-[2.8rem] lg:mt-0">{tag}</p>
          <dl className="mt-8 grid w-fit grid-cols-[auto_auto] gap-x-3 gap-y-1 text-xs leading-none tracking-[-0.01em] uppercase lg:absolute lg:top-[2.8rem] lg:right-[6.8vw] lg:mt-0 lg:gap-x-4 lg:gap-y-2">
            {specs.map((s) => (
              <div key={s.label} className="contents">
                <dt className="font-medium lg:text-right">{s.label}</dt>
                <dd className="text-highlight/70">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 grid gap-12 lg:absolute lg:inset-x-[6.8vw] lg:top-[30svh] lg:mt-0 lg:grid-cols-[minmax(0,385fr)_minmax(0,474fr)_minmax(0,385fr)] lg:gap-y-[8rem]">
            {features.slice(0, 4).map((f, i) => (
              <div key={f.title} className={cn("zetta-joule-reactor-feature", i % 2 === 0 ? "lg:col-start-1" : "lg:col-start-3")} style={{ "--i": i } as CSSProperties}>
                <h3 className="border-b border-highlight/25 pb-3 text-xl leading-[1.2] tracking-[-0.01em] lg:pb-6">{f.title}</h3>
                <p className="mt-3 max-w-[24rem] text-base leading-[1.3] tracking-[-0.01em] lg:mt-6 lg:max-w-[22rem]">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="zetta-joule-reactor-model mt-12 flex h-[22rem] justify-center overflow-clip lg:absolute lg:inset-x-0 lg:top-[19svh] lg:bottom-0 lg:mt-0 lg:h-auto [&>*]:h-full">
            {media ?? <ZettaJoulePlaceholder tone="wash" className="h-full w-[16.25rem]" />}
          </div>
        </div>
      </div>
    </section>
  );
}
