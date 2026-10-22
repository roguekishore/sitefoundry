import type { ReactNode } from "react";
import { Paperclip, SlidersHorizontal } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./granola-chat.css";

export interface GranolaChatPrompt {
  /** the question that types itself into the box */
  text: string;
  /** the chip under it: which notes the question searches */
  chip: string;
  /** the chip's small icon (e.g. a lucide icon) */
  chipIcon?: ReactNode;
}

export interface GranolaChatProps {
  /** the small serif line above the headline */
  eyebrow?: string;
  /** the huge serif headline (one word per line suits it) */
  title: string;
  /** up to three prompts; they take turns typing into the box */
  prompts: GranolaChatPrompt[];
  /** screen-reader label for the decorative attach and settings icons */
  toolsLabel?: string;
  className?: string;
}

export function GranolaChat({ eyebrow, title, prompts, toolsLabel, className }: GranolaChatProps) {
  const shown = prompts.slice(0, 3);
  return (
    <section className={cn("overflow-x-clip bg-highlight text-highlight-foreground", className)}>
      <div className="mx-auto grid w-full max-w-[calc(var(--page-width)_+_2*var(--page-gutter))] gap-12 px-gutter pt-[5.5rem] pb-20 lg:grid-cols-2 lg:gap-4 lg:pt-28 lg:pb-[6.5rem]">
        <div>
          {eyebrow && <p className="font-display text-base">{eyebrow}</p>}
          <h2 className="mt-6 max-w-[8ch] font-display text-[3.75rem] leading-[0.95] tracking-[-0.01em] lg:mt-7 lg:text-[min(7.5vw,6.75rem)] lg:leading-[0.98]">
            {title}
          </h2>
        </div>

        {/* the chat box: on desktop it runs off the right edge of the window */}
        <div className="flex min-h-[17.5rem] flex-col rounded-[calc(var(--radius)*3.5)] bg-popover p-5 text-popover-foreground shadow-[0_8px_48px_color-mix(in_oklab,var(--foreground)_15%,transparent)] lg:mr-[calc((min(100vw,var(--page-width)_+_2*var(--page-gutter))_-_100vw)/2_-_var(--page-gutter))] lg:ml-4 lg:min-h-80 lg:self-start lg:rounded-r-none lg:p-8">
          <div className="grid min-h-[3lh] text-lg leading-snug lg:text-xl">
            {shown.map((p, i) => (
              <p key={p.text} className="granola-chat-prompt col-start-1 row-start-1 max-w-[34ch]" style={{ animationDelay: `${i * 4}s` }}>
                {p.text}
                <span aria-hidden className="granola-chat-caret ml-0.5 inline-block h-[1.1em] w-px translate-y-[0.15em] bg-foreground" />
              </p>
            ))}
          </div>

          <div className="mt-auto grid pt-8">
            {shown.map((p, i) => (
              <span
                key={p.chip}
                aria-hidden={i > 0 || undefined}
                className="granola-chat-chip col-start-1 row-start-1 inline-flex w-fit items-center gap-2.5 rounded-xl bg-muted p-2 pr-3 text-base text-foreground/85"
                style={{ animationDelay: `${i * 4}s` }}
              >
                {p.chipIcon && (
                  <span className="flex size-8 items-center justify-center rounded-md bg-chart-4 text-foreground/80 dark:text-background [&_svg]:size-4 [&_svg]:stroke-[1.5]">
                    {p.chipIcon}
                  </span>
                )}
                {p.chip}
              </span>
            ))}
          </div>

          <div aria-label={toolsLabel} role={toolsLabel ? "img" : undefined} aria-hidden={toolsLabel ? undefined : true} className="mt-10 flex items-center gap-6 text-foreground/80 lg:mt-12">
            <Paperclip className="size-5 stroke-[1.5]" />
            <SlidersHorizontal className="size-5 stroke-[1.5]" />
          </div>
        </div>
      </div>
    </section>
  );
}
