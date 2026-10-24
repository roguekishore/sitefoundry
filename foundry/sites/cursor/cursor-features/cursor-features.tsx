import type { ReactNode } from "react";
import { Copy } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { CursorArrowLink } from "@foundry/cursor-arrow-link";
import { CursorMedia } from "@foundry/cursor-media";
import { CursorSplitPanel } from "@foundry/cursor-split-panel";

export interface CursorFeature {
  /** the title, in ink */
  title: string;
  /** the description that follows it, in 60% ink */
  description: string;
  /** the orange link under the text */
  link?: { label: string; href: string };
  /** an install command shown in a mono chip with a copy button */
  command?: string;
  /** accessible name of the copy button */
  copyLabel?: string;
  /** the product window, image or video; a placeholder wash when empty */
  media?: ReactNode;
  /** accessible name of the empty placeholder */
  mediaLabel?: string;
}

export interface CursorFeaturesProps {
  /** the panels, top to bottom; media alternates right, left, right… */
  features: CursorFeature[];
  className?: string;
}

const text = "text-[0.9375rem] leading-[1.5] lg:text-[1.375rem] lg:leading-[1.3] lg:tracking-[-0.005em]";

/** Alternating text + media panels. */
export function CursorFeatures({ features, className }: CursorFeaturesProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto flex max-w-[calc(var(--page-width)+2*var(--page-gutter))] flex-col gap-22 px-gutter">
        {features.map((f, i) => (
          <CursorSplitPanel
            key={f.title}
            mediaSide={i % 2 === 0 ? "right" : "left"}
            mediaClassName="h-[42.5rem]"
            media={
              <CursorMedia label={f.mediaLabel} className="size-full">
                {f.media}
              </CursorMedia>
            }
          >
            <h3 className={cn(text, "font-display text-foreground")}>{f.title}</h3>
            <p className={cn(text, "max-w-[20em] text-muted-foreground lg:max-w-[17.5em]")}>{f.description}</p>
            {f.link && (
              <CursorArrowLink href={f.link.href} className="mt-4 text-[0.9375rem] leading-6 lg:text-base">
                {f.link.label}
              </CursorArrowLink>
            )}
            {f.command && (
              <div className="mt-6 flex h-11 max-w-[24rem] items-center gap-2 rounded-lg bg-muted pr-2 pl-2.5">
                <code className="min-w-0 flex-1 overflow-clip font-mono text-[0.8125rem] whitespace-nowrap text-foreground [mask-image:linear-gradient(90deg,var(--foreground)_85%,transparent)] lg:text-sm">
                  {f.command}
                </code>
                <button
                  type="button"
                  aria-label={f.copyLabel}
                  className="grid h-7 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-colors duration-150 hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--background))] motion-reduce:transition-none"
                >
                  <Copy aria-hidden className="size-3.5" strokeWidth={1.75} />
                </button>
              </div>
            )}
          </CursorSplitPanel>
        ))}
      </div>
    </section>
  );
}
