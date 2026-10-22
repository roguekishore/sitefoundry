import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MeowButton } from "@foundry/meow-button";

export interface MeowAgentProps {
  /** the title */
  title: ReactNode;
  /** the paragraph under it */
  text: ReactNode;
  /** the filled button (orange, turns ink on hover) */
  primary: { label: string; href: string; icon?: ReactNode };
  /** the outlined button beside it */
  secondary?: { label: string; href: string };
  /** the boxed capability chips, each with a green dot */
  chips?: string[];
  /** a last, dashed chip linking to the full list, e.g. "and more" */
  more?: { label: string; href: string };
  /** the video (or image) on the right; a 16:9 placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Text, two buttons and capability chips beside a 16:9 video. */
export function MeowAgent({ title, text, primary, secondary, chips, more, media, className }: MeowAgentProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page items-center gap-y-7 px-gutter py-8 lg:grid-cols-2 lg:gap-x-12 lg:py-section">
        <div className="relative aspect-video w-full overflow-clip bg-muted lg:order-2">{media}</div>

        <div className="min-w-0">
          <h2 className="font-display text-lg/6 font-semibold tracking-[-0.015em] lg:text-[2rem]/10 lg:tracking-[-0.025em]">{title}</h2>
          <p className="mt-5 text-lg/6 text-muted-foreground lg:mt-6 lg:text-base/6">{text}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:mt-8">
            <MeowButton variant="invert" icon={primary.icon} href={primary.href}>
              {primary.label}
            </MeowButton>
            {secondary && (
              <MeowButton variant="outline" arrow href={secondary.href}>
                {secondary.label}
              </MeowButton>
            )}
          </div>

          {chips?.length || more ? (
            <ul className="mt-12 flex flex-wrap gap-3 lg:mt-8">
              {chips?.map((chip) => (
                <li key={chip} className="flex h-[2.3125rem] items-center gap-2 rounded-lg border border-border bg-card px-4 text-[0.8125rem] font-semibold text-card-foreground">
                  <span aria-hidden className="size-1.5 rounded-full bg-chart-2" />
                  {chip}
                </li>
              ))}
              {more && (
                <li>
                  <a
                    href={more.href}
                    className="flex h-[2.3125rem] items-center rounded-lg border border-dashed border-border px-4 text-[0.8125rem] font-semibold text-muted-foreground/80 transition-colors duration-150 hover:border-foreground/20 hover:text-muted-foreground motion-reduce:transition-none"
                  >
                    {more.label}
                  </a>
                </li>
              )}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
