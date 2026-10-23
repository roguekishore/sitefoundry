import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LevelsTrustItem {
  /** the bold line */
  title: ReactNode;
  /** the small grey text under it */
  body: ReactNode;
}

export interface LevelsTrustProps {
  /** the proof points (three on the original) */
  items: LevelsTrustItem[];
  className?: string;
}

/** Three proof points between hairlines on a cool grey band. */
export function LevelsTrust({ items, className }: LevelsTrustProps) {
  return (
    <section className={cn("relative bg-muted px-gutter", className)}>
      <div aria-hidden className="absolute inset-x-0 top-0 h-3 bg-linear-to-b from-foreground/6 to-transparent" />
      <ul className="mx-auto grid max-w-page py-6 lg:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="border-border py-4 not-first:border-t lg:pt-5 lg:pb-2 lg:not-first:border-t-0 lg:not-first:border-l lg:px-6"
          >
            <p className="text-lg leading-7 font-semibold tracking-[-0.01em] text-foreground">{item.title}</p>
            <p className="mt-2 max-w-[22rem] text-sm leading-6 text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
