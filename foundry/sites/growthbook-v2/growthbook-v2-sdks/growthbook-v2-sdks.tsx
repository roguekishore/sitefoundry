import { useState, type ReactNode } from "react";
import { Check, ChevronDown, Copy } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Button } from "@foundry/growthbook-v2-button";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2RailAccent } from "@foundry/growthbook-v2-rail-accent";

export interface GrowthbookV2Sdk {
  /** the option in the select */
  option: string;
  /** the name beside the round icon */
  name: string;
  /** a small icon for the round badge */
  icon?: ReactNode;
  /** the snippet; text in double quotes is drawn in the highlight colour */
  code: string;
}

export interface GrowthbookV2SdksProps {
  /** the heading; \n for line breaks */
  title: string;
  body: string;
  /** violet button first, then outline */
  actions: { label: string; href: string; variant?: "primary" | "outline" }[];
  sdks: GrowthbookV2Sdk[];
  /** the dotted mono link under the code */
  docs: { label: string; href: string };
  /** labels for screen readers */
  selectLabel?: string;
  copyLabel?: string;
  className?: string;
}

/** Splits a snippet so quoted strings can be coloured. */
function highlight(code: string) {
  return code.split(/("[^"\n]*")/g).map((part, i) =>
    part.startsWith('"') ? (
      <span key={i} className="text-highlight">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function GrowthbookV2Sdks({ title, body, actions, sdks, docs, selectLabel = "Framework", copyLabel = "Copy code", className }: GrowthbookV2SdksProps) {
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const sdk = sdks[index];
  const copy = () => {
    navigator.clipboard?.writeText(sdk.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <section className={cn("bg-secondary text-secondary-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="relative grid border-x border-border py-14 lg:grid-cols-2 lg:py-20">
          <span aria-hidden className="absolute inset-y-0 left-1/2 hidden w-px bg-border lg:block" />
          <div className="pr-4 pl-10 lg:pr-24">
            <GrowthbookV2Heading className="whitespace-pre-line">{title}</GrowthbookV2Heading>
            <p className="mt-4 text-base/[1.65] lg:mt-6">{body}</p>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row lg:mt-24">
              {actions.map((a) => (
                <GrowthbookV2Button
                  key={a.label}
                  href={a.href}
                  variant={a.variant ?? "primary"}
                  arrow={(a.variant ?? "primary") === "primary"}
                  className="w-full sm:w-auto"
                >
                  {a.label}
                </GrowthbookV2Button>
              ))}
            </div>
          </div>
          <div className="relative mt-14 bg-card p-4 text-card-foreground lg:mt-0 lg:p-5">
            <GrowthbookV2RailAccent className="left-0" barClassName="h-full lg:h-full" />
            <label className="relative block">
              <span className="sr-only">{selectLabel}</span>
              <select
                value={index}
                onChange={(e) => setIndex(Number(e.target.value))}
                className="h-14 w-full appearance-none rounded-lg border border-input bg-card px-4 text-sm text-card-foreground"
              >
                {sdks.map((s, i) => (
                  <option key={s.option} value={i}>
                    {s.option}
                  </option>
                ))}
              </select>
              <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-5 size-5 -translate-y-1/2" strokeWidth={1.75} />
            </label>
            <div className="mt-16 flex items-center gap-2">
              <span className="dark flex size-[3.125rem] items-center justify-center rounded-full bg-background text-foreground [&_svg]:size-5">{sdk.icon}</span>
              <span className="text-base">{sdk.name}</span>
            </div>
            <div className="dark relative mt-8 rounded-xl bg-popover px-8 py-6 text-popover-foreground lg:mt-12">
              <button
                type="button"
                onClick={copy}
                aria-label={copyLabel}
                className="absolute top-3.5 right-3 flex size-[1.875rem] items-center justify-center rounded-full border border-input transition-colors duration-250 hover:bg-muted motion-reduce:transition-none"
              >
                {copied ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" strokeWidth={1.75} />}
              </button>
              <pre className="font-mono text-sm/[2] break-all whitespace-pre-wrap">{highlight(sdk.code)}</pre>
            </div>
            <a
              href={docs.href}
              className="mt-4 inline-block font-mono text-base text-primary underline decoration-dotted underline-offset-4 transition-colors duration-250 hover:text-foreground motion-reduce:transition-none"
            >
              {docs.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
