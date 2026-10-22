import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ColumnButton } from "@foundry/column-button";
import { ColumnCode } from "@foundry/column-code";
import { ColumnEyebrow, type ColumnTone } from "@foundry/column-eyebrow";
import "./column-developers.css";

export interface ColumnDeveloperNote {
  title: string;
  body: string;
}

export interface ColumnDevelopersProps {
  /** the small mono tag (shown with a blinking cursor) */
  eyebrow: string;
  /** accent of the tag */
  tone?: ColumnTone;
  /** the heading */
  title: string;
  /** a muted line under it */
  lead: ReactNode;
  /** the white button */
  action?: { label: string; href: string };
  /** short feature notes; two sit side by side on desktop */
  notes: ColumnDeveloperNote[];
  /** the code under the card, e.g. an API response */
  code: string;
  /** small label above the code */
  codeLabel?: string;
  /** what fills the white card at the top of the panel; empty: a plain card */
  media?: ReactNode;
  className?: string;
}

export function ColumnDevelopers({ eyebrow, tone = "chart-1", title, lead, action, notes, code, codeLabel, media, className }: ColumnDevelopersProps) {
  return (
    <section className={cn("relative overflow-clip bg-background pt-[4.5rem] pb-[4.5rem] text-foreground lg:pt-36 lg:pb-36", className)}>
      <div className="mx-auto grid max-w-[calc(var(--page-width)+var(--page-gutter)*2)] gap-12 px-gutter lg:grid-cols-[1fr_27.125rem] lg:gap-[6.75rem]">
        <div className="relative">
          {/* faint dot grid behind the copy */}
          <div aria-hidden className="pointer-events-none absolute -inset-x-8 -inset-y-6 bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_9%,transparent)_0.8px,transparent_1.2px)] bg-size-[8px_8px] [mask-image:radial-gradient(ellipse_70%_65%_at_45%_55%,black,transparent_90%)]" />
          <div className="relative">
            <ColumnEyebrow tone={tone} cursor>
              {eyebrow}
            </ColumnEyebrow>
            <hr className="mt-6 border-border" />
            <h2 className="mt-11 max-w-[24rem] font-display text-[1.75rem]/[1.15] font-medium tracking-[-0.02em] lg:mt-[2.875rem]">{title}</h2>
            <p className="mt-4 max-w-[24rem] text-base/[1.4] text-muted-foreground lg:text-lg/[1.3]">{lead}</p>
            {action && (
              <ColumnButton href={action.href} variant="secondary" className="mt-6 lg:mt-7">
                {action.label}
              </ColumnButton>
            )}
            <div className="mt-11 grid gap-9 sm:grid-cols-2 sm:gap-6 lg:mt-[4.25rem]">
              {notes.map((n) => (
                <div key={n.title}>
                  <h3 className="font-display text-base font-medium tracking-[-0.01em]">{n.title}</h3>
                  <p className="mt-3 text-[0.9375rem]/[1.45] text-muted-foreground lg:text-sm/[1.45]">{n.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="column-developers-panel h-[32rem] overflow-clip rounded-lg border border-border bg-muted">
          <div className="relative m-4 h-[11.0625rem] overflow-clip rounded-md bg-secondary shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_1px_3px_color-mix(in_oklab,var(--foreground)_8%,transparent)]">
            {media && <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">{media}</div>}
          </div>
          <div className="mt-6 border-t border-border px-4 pt-6">
            <ColumnCode code={code} label={codeLabel} lineNumbers framed={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
