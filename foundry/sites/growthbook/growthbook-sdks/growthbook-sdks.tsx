import { useState, type ReactNode } from "react";
import { ChevronDown, Copy } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookButton } from "@foundry/growthbook-button";
import { GrowthbookRail } from "@foundry/growthbook-rail";

export interface GrowthbookSnippet {
  /** the dropdown option, e.g. "HTML" */
  label: string;
  /** the name beside the round icon, e.g. "Script tag" */
  name: string;
  /** small mark inside the navy circle */
  icon?: ReactNode;
  /** the code, shown as written (quoted strings are tinted) */
  code: string;
}

export interface GrowthbookSdksProps {
  /** the heading; each string starts a new line */
  title: string[];
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  snippets: GrowthbookSnippet[];
  /** accessible label of the dropdown */
  selectLabel: string;
  /** accessible label of the copy button */
  copyLabel: string;
  /** mono link under the code */
  docs?: { label: string; href: string };
  className?: string;
}

/** Tints quoted strings; everything else stays plain. */
function tint(code: string) {
  return code.split(/("[^"\n]*"|'[^'\n]*')/g).map((part, i) =>
    i % 2 ? (
      <span key={i} className="text-chart-4">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function GrowthbookSdks({ title, body, primary, secondary, snippets, selectLabel, copyLabel, docs, className }: GrowthbookSdksProps) {
  const [active, setActive] = useState(0);
  const s = snippets[active];

  return (
    <section className={cn("bg-secondary text-secondary-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="relative grid border-x border-border pt-12 pb-12 lg:grid-cols-2 lg:pt-20 lg:pb-20">
          <span aria-hidden className="absolute inset-y-0 left-1/2 hidden w-px bg-border lg:block" />
          <div className="px-10 lg:pt-0.5">
            <h2 className="font-display text-4xl leading-[1.2] font-normal lg:text-[3.5rem]">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-[30rem] text-base leading-[1.65] text-foreground/85 lg:mt-6">{body}</p>
            <div className="mt-12 flex flex-col gap-3 md:flex-row lg:mt-[5.5rem]">
              {primary && (
                <GrowthbookButton href={primary.href} arrow blockOnMobile>
                  {primary.label}
                </GrowthbookButton>
              )}
              {secondary && (
                <GrowthbookButton href={secondary.href} variant="outline" blockOnMobile>
                  {secondary.label}
                </GrowthbookButton>
              )}
            </div>
          </div>

          <div className="relative mt-14 bg-card p-4 text-card-foreground lg:mt-0 lg:p-5">
            <GrowthbookRail fixed />
            <label className="relative block">
              <span className="sr-only">{selectLabel}</span>
              <select
                value={active}
                onChange={(e) => setActive(Number(e.target.value))}
                className="h-14 w-full appearance-none rounded-md border border-input bg-card px-4 text-sm text-card-foreground focus-visible:outline-2 focus-visible:outline-ring"
              >
                {snippets.map((o, i) => (
                  <option key={o.label} value={i}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-5 size-5 -translate-y-1/2" strokeWidth={1.75} />
            </label>
            <p className="mt-16 flex items-center gap-2 text-base">
              <span className="dark grid size-[3.125rem] place-items-center rounded-full bg-background text-foreground [&_svg]:size-5">{s.icon}</span>
              {s.name}
            </p>
            <div className="dark relative mt-8 rounded-lg bg-background p-8 pr-10 text-foreground">
              <button
                type="button"
                aria-label={copyLabel}
                onClick={() => navigator.clipboard?.writeText(s.code)}
                className="absolute top-3.5 right-3.5 grid size-[1.875rem] place-items-center rounded-full border border-foreground/50 transition-colors duration-250 hover:bg-foreground/10 motion-reduce:transition-none"
              >
                <Copy aria-hidden className="size-3.5" strokeWidth={1.75} />
              </button>
              <pre className="font-mono text-sm leading-[2] break-all whitespace-pre-wrap">
                <code>{tint(s.code)}</code>
              </pre>
            </div>
            {docs && (
              <a
                href={docs.href}
                className="mt-4 inline-block font-mono text-base text-primary underline decoration-dotted underline-offset-4 transition-colors duration-250 hover:text-foreground motion-reduce:transition-none"
              >
                {docs.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
