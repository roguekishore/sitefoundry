import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ClerkCardProps {
  /** short feature name, 13px medium */
  title: string;
  /** one or two sentences, muted */
  text?: string;
  /** the illustration (see clerk-art); fills the space the text leaves */
  visual?: ReactNode;
  /** text above the illustration instead of below it */
  textFirst?: boolean;
  /** grid rows the card spans from md up */
  rows?: 1 | 2;
  /** grid columns the card spans from md up */
  cols?: 1 | 2;
  /** min height of the illustration area on phones (Tailwind class), e.g. "min-h-56" */
  visualClassName?: string;
  className?: string;
}

export function ClerkCard({ title, text, visual, textFirst = false, rows = 1, cols = 1, visualClassName, className }: ClerkCardProps) {
  return (
    <article
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-xl bg-card text-card-foreground",
        // light: a hairline-free layered lift · dark: a faint inner top highlight and ring
        "shadow-[0_1px_1px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_2px_3px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_4px_6px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_24px_68px_color-mix(in_oklab,var(--foreground)_5%,transparent)]",
        "dark:shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_4%,transparent),inset_0_0_0_1px_color-mix(in_oklab,var(--foreground)_3%,transparent)]",
        "dark:bg-linear-to-b dark:from-[color-mix(in_oklab,var(--foreground)_3%,var(--card))] dark:to-card",
        rows === 2 && "md:row-span-2",
        cols === 2 && "md:col-span-2",
        className,
      )}
    >
      <div className={cn("relative z-20 flex-none px-6", textFirst ? "order-first pt-6" : "order-last pb-6")}>
        <h3 className="text-[0.8125rem] leading-6 font-medium text-foreground">{title}</h3>
        {text && <p className="mt-1.5 max-w-sm text-[0.8125rem] leading-5 text-muted-foreground">{text}</p>}
      </div>
      {visual && <div className={cn("relative min-h-40 flex-auto", visualClassName)}>{visual}</div>}
    </article>
  );
}
