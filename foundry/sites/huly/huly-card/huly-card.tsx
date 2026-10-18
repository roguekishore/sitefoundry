import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HulyCardProps {
  /** bold first words of the caption */
  title: string;
  /** rest of the caption, in the muted colour */
  text?: string;
  /** what fills the card: a mock UI, an image, art */
  visual?: ReactNode;
  /** where the caption sits */
  captionAt?: "top" | "bottom";
  className?: string;
}

export function HulyCard({ title, text, visual, captionAt = "bottom", className }: HulyCardProps) {
  return (
    // Outer layer stays in the page's mode: it draws the pale halo around the dark card.
    <div className={cn("rounded-[calc(var(--radius)+11px)] bg-card/50 p-[3px] shadow-[0_2px_24px_-8px_color-mix(in_oklab,var(--foreground)_12%,transparent)] ring-1 ring-foreground/4 lg:rounded-[calc(var(--radius)+22px)] lg:p-1", className)}>
      <article className="dark relative isolate flex h-full min-h-56 flex-col overflow-hidden rounded-2xl bg-background text-foreground lg:rounded-[calc(var(--radius)+18px)]">
        {visual && <div className="absolute inset-0 -z-10">{visual}</div>}
        <p
          className={cn(
            "max-w-[30rem] px-5 text-[0.9375rem] leading-[1.25] tracking-[-0.02em] text-pretty lg:px-6 lg:text-base lg:leading-[1.375]",
            captionAt === "bottom"
              ? "mt-auto bg-linear-to-t from-background via-background/80 to-transparent pt-14 pb-5 lg:pb-6"
              : "bg-linear-to-b from-background via-background/70 to-transparent pt-5 pb-10 lg:pt-6",
          )}
        >
          <strong className="font-semibold text-foreground">{title}</strong>
          {text && <span className="text-foreground/65"> {text}</span>}
        </p>
      </article>
    </div>
  );
}
