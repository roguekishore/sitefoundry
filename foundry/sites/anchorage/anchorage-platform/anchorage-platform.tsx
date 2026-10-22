import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AnchorageCount } from "@foundry/anchorage-count";
import "./anchorage-platform.css";

export interface AnchoragePlatformCard {
  /** the big title; a list chooses the line breaks */
  title: string | string[];
  /** one or two sentences under it */
  body: string;
  /** the product picture (image, video, screenshot); empty shows a placeholder */
  media?: ReactNode;
}

export interface AnchoragePlatformProps {
  /** the centred heading */
  title: string | string[];
  /** the paragraph under the heading */
  intro?: string;
  /** the two tall cards side by side */
  cards: AnchoragePlatformCard[];
  /** the wide card under them */
  wide?: {
    /** its big title; a list chooses the line breaks */
    title: string | string[];
    body: string;
    /** the money figure in the outlined pill; it counts up when seen */
    figure?: { value: string; icon?: ReactNode };
    /** the round check pills, e.g. "Identity verified" */
    checks?: string[];
  };
  /** the soft glow at the right edge */
  glow?: boolean;
  className?: string;
}

function Lines({ text, line = "block" }: { text: string | string[]; line?: string }) {
  return Array.isArray(text) ? (
    <>
      {text.map((t, i) => (
        <span key={t} className={line}>
          {t}
          {i < text.length - 1 && " "}
        </span>
      ))}
    </>
  ) : (
    <>{text}</>
  );
}

const panel = "rounded-lg bg-linear-to-b from-card to-background";

/** Heading, paragraph and a bento of gradient panels: two tall cards and one wide card. */
export function AnchoragePlatform({ title, intro, cards, wide, glow = true, className }: AnchoragePlatformProps) {
  return (
    <section className={cn("relative isolate overflow-clip py-16 text-foreground lg:pt-24 lg:pb-[5.5rem]", className)}>
      {glow && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_48%_at_100%_50%,color-mix(in_oklab,var(--glow)_65%,transparent),color-mix(in_oklab,var(--glow)_22%,transparent)_55%,transparent)] lg:bg-[radial-gradient(ellipse_34%_50%_at_100%_50%,color-mix(in_oklab,var(--glow)_65%,transparent),color-mix(in_oklab,var(--glow)_22%,transparent)_55%,transparent)]" />
      )}

      <div className="mx-auto max-w-[60.75rem] px-gutter">
        <h2 className="mx-auto max-w-[16rem] text-center font-display text-[2rem] leading-[1.2] font-[550] sm:max-w-none lg:text-[2.5rem]">
          <Lines text={title} line="block lg:inline" />
        </h2>
        {intro && <p className="mx-auto mt-6 max-w-[44rem] text-center text-base leading-[1.6] font-medium lg:mt-7">{intro}</p>}

        <div className="mt-14 grid gap-6 lg:mt-[6.5rem] lg:grid-cols-2 lg:gap-[1.875rem]">
          {cards.map((c) => (
            <article key={String(c.title)} className={cn(panel, "flex flex-col px-[1.625rem] pt-9 pb-9 lg:p-10")}>
              <h3 className="font-display text-[2rem] leading-[1.3] font-[550] lg:text-[2.5rem] lg:leading-[1.2]">
                <Lines text={c.title} />
              </h3>
              <p className="mt-6 max-w-[23rem] text-base leading-[1.6] font-medium lg:mt-10">{c.body}</p>
              <div className="mt-10 aspect-[11/10] w-full overflow-clip rounded-lg border border-foreground/15 bg-muted/40 lg:mt-12 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
                {c.media}
              </div>
            </article>
          ))}

          {wide && (
            <article className={cn(panel, "grid gap-6 px-[1.625rem] pt-9 pb-10 lg:col-span-2 lg:grid-cols-[1fr_21.125rem] lg:gap-10 lg:p-10 lg:pr-[2.625rem]")}>
              <div>
                <h3 className="font-display text-[2rem] leading-[1.35] font-[550] lg:text-[3.19rem] lg:leading-[1.22]">
                  <Lines text={wide.title} />
                </h3>
                <p className="mt-4 text-sm leading-[1.7] font-medium lg:mt-10 lg:max-w-[30rem] lg:text-xl lg:leading-[1.3]">{wide.body}</p>
              </div>

              <div className="lg:pt-0.5">
                {wide.figure && (
                  <div className="flex h-[5.3rem] items-center gap-5 rounded-lg border border-foreground/25 bg-background/30 px-4 lg:h-[5.9rem] lg:px-5">
                    {wide.figure.icon && (
                      <span aria-hidden className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground lg:size-[3.4rem] [&>svg]:size-6">
                        {wide.figure.icon}
                      </span>
                    )}
                    <AnchorageCount value={wide.figure.value} from={0.25} className="text-[1.6rem] font-normal tracking-[0.01em] lg:text-[1.875rem]" />
                  </div>
                )}
                {wide.checks && (
                  <ul className="mt-6 ml-9 flex flex-col gap-3 lg:mt-7 lg:ml-10">
                    {wide.checks.map((c) => (
                      <li
                        key={c}
                        className="anchorage-platform-check flex h-[3.25rem] w-full max-w-[14.75rem] items-center gap-5 rounded-full border border-foreground/40 border-l-foreground/5 px-6 text-base lg:h-[3.625rem] lg:max-w-[16.375rem] lg:text-lg"
                      >
                        <Check aria-hidden className="size-4 shrink-0 text-chart-2" strokeWidth={2.5} />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
