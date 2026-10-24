import { useState, type ReactNode } from "react";
import { Clipboard } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ResendCode } from "@foundry/resend-code";
import { ResendHeading } from "@foundry/resend-heading";

export interface ResendSdkTab {
  label: string;
  /** a small glyph before the label */
  icon?: ReactNode;
  /** the code shown for this tab */
  code: string;
}

export interface ResendSdk {
  label: string;
  /** the icon in the square tile */
  icon: ReactNode;
  /** framework tabs for this SDK; the first is shown when it's chosen */
  tabs: ResendSdkTab[];
}

export interface ResendIntegrateProps {
  /** the title before the accent */
  title: string;
  /** the last words, in the accent colour */
  accent?: string;
  /** the lead; a list sets its desktop line breaks */
  text: string | string[];
  /** fills the icon slot above the title; empty shows a placeholder tile */
  media?: ReactNode;
  /** the SDK tiles */
  sdks: ResendSdk[];
  /** label of the copy button, for screen readers */
  copyLabel?: string;
  /** small links in the panel's footer (the first stays on phones) */
  links?: { label: string; href: string; icon?: ReactNode }[];
  className?: string;
}

export function ResendIntegrate({ title, accent, text, media, sdks, copyLabel = "Copy", links = [], className }: ResendIntegrateProps) {
  const [sdk, setSdk] = useState(0);
  const [tab, setTab] = useState(0);
  const tabs = sdks[sdk]?.tabs ?? [];
  const current = tabs[Math.min(tab, tabs.length - 1)];

  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ResendHeading tile media={media} title={title} accent={accent} text={text} />

        <div className="-mx-gutter mt-12 overflow-x-auto px-gutter [scrollbar-width:none] lg:mt-12">
          <ul className="mx-auto flex w-max gap-4">
            {sdks.map((s, i) => (
              <li key={s.label}>
                <button
                  type="button"
                  aria-pressed={i === sdk}
                  onClick={() => {
                    setSdk(i);
                    setTab(0);
                  }}
                  className="group/sdk flex w-[3.75rem] flex-col items-center gap-3"
                >
                  <span
                    className={cn(
                      "flex h-14 w-[3.75rem] items-center justify-center rounded-sm border transition-colors duration-200 motion-reduce:transition-none [&_svg]:size-5",
                      i === sdk
                        ? "border-foreground/40 bg-accent text-highlight"
                        : "border-border text-muted-foreground group-hover/sdk:border-foreground/60 group-hover/sdk:text-foreground",
                    )}
                  >
                    {s.icon}
                  </span>
                  <span
                    className={cn(
                      "text-sm whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none",
                      i === sdk ? "text-foreground" : "text-muted-foreground group-hover/sdk:text-foreground",
                    )}
                  >
                    {s.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto mt-12 max-w-[64rem] overflow-clip rounded-2xl border border-border">
          <span aria-hidden className="absolute top-0 right-[6%] h-px w-[22%] bg-linear-to-r from-transparent via-foreground/70 to-transparent" />
          <div className="flex h-16 items-center gap-3 border-b border-border pr-4 pl-4">
            <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto [scrollbar-width:none]" role="tablist">
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  role="tab"
                  aria-selected={t === current}
                  onClick={() => setTab(i)}
                  className={cn(
                    "flex h-8 shrink-0 items-center gap-1.5 rounded-md px-2 text-sm whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none [&_svg]:size-3.5",
                    t === current ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t.icon && <span className="flex size-4 items-center justify-center rounded-[4px] border border-border">{t.icon}</span>}
                  {t.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label={copyLabel}
              onClick={() => current && navigator.clipboard?.writeText(current.code)}
              className="hidden size-8 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors duration-200 hover:text-foreground sm:flex"
            >
              <Clipboard className="size-4" strokeWidth={1.75} />
            </button>
          </div>
          <div className="min-h-[29.5rem] px-4 py-5">{current && <ResendCode code={current.code} />}</div>
          {links.length > 0 && (
            <div className="flex h-12 items-center gap-6 px-5">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "items-center gap-1.5 text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground [&_svg]:size-3.5",
                    i === 0 ? "flex" : "hidden sm:flex",
                  )}
                >
                  {l.icon}
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
