import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";

export interface NewhaloNewsItem {
  /** the headline */
  title: string;
  /** two to five lines of summary */
  excerpt: string;
  /** where the arrow button goes */
  href: string;
  /** screen-reader name of the arrow button */
  linkLabel: string;
  /** the 1.81:1 thumbnail; empty shows the placeholder */
  media?: ReactNode;
}

export interface NewhaloNewsProps {
  /** the 64px section heading */
  title: string;
  /** the outlined button beside the heading */
  cta?: { label: string; href: string };
  /** all stories; the first `initial` show in full, the next one fades out under "more" */
  items: NewhaloNewsItem[];
  /** how many rows show before "more" */
  initial?: number;
  /** the label of the button that shows more rows */
  moreLabel: string;
  className?: string;
}

/**
 * A press list on paper: a 64px heading with an outlined button, then hairline-separated rows
 * (thumbnail · headline · summary · arrow tile). The row under the cursor lightens and its arrow
 * turns orange. The last visible row fades out under a "more" button that reveals the next ones.
 */
export function NewhaloNews({ title, cta, items, initial = 3, moreLabel, className }: NewhaloNewsProps) {
  const [shown, setShown] = useState(initial);
  const visible = items.slice(0, shown);
  const teaser = items[shown];

  const row = (item: NewhaloNewsItem, faded?: boolean) => (
    <li
      key={item.href + item.title}
      aria-hidden={faded || undefined}
      className={cn(
        "group/row relative grid gap-y-5 border-t border-foreground py-5 transition-[background-color,box-shadow] duration-300 lg:grid-cols-12 lg:gap-x-6 lg:py-[1.875rem]",
        "shadow-card/60 [clip-path:inset(0_-100vmax)] hover:bg-card/60 hover:shadow-[0_0_0_100vmax]",
        faded && "pointer-events-none max-h-40 overflow-clip [mask-image:linear-gradient(var(--foreground),transparent)] opacity-40",
      )}
    >
      <NewhaloMedia className={cn("aspect-[1.81] rounded-lg lg:col-span-3", newhaloReveal("fade"))} innerClassName={newhaloReveal("settle")}>
        {item.media}
      </NewhaloMedia>
      <h3 className={cn("font-display text-[1.56rem] leading-[1.1] lg:col-span-3 lg:col-start-6 lg:text-[1.75rem]", newhaloReveal("rise-sm"))}>{item.title}</h3>
      <p className={cn("text-[0.91rem] leading-normal lg:col-span-3 lg:text-base", newhaloReveal("rise-sm"))} style={newhaloRevealStyle(1)}>
        {item.excerpt}
      </p>
      <div className={cn("lg:col-span-1 lg:flex lg:justify-end", newhaloReveal("fade"))}>
        <a
          href={item.href}
          tabIndex={faded ? -1 : undefined}
          aria-label={item.linkLabel}
          className="flex size-10 items-center justify-center rounded-sm bg-card text-foreground/60 transition-colors duration-300 group-hover/row:bg-primary group-hover/row:text-primary-foreground"
        >
          <ArrowUpRight aria-hidden strokeWidth={1.25} className="size-5" />
        </a>
      </div>
    </li>
  );

  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className={cn("flex flex-col items-start gap-5 lg:flex-row lg:items-start lg:justify-between", newhaloReveal("rise"))}>
          <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:text-[4rem] lg:leading-none">{title}</h2>
          {cta && <NewhaloButton label={cta.label} href={cta.href} variant="outline" />}
        </div>
        <ul className={cn("mt-8 lg:mt-14", !teaser && "border-b border-foreground")}>
          {visible.map((item) => row(item))}
          {teaser && row(teaser, true)}
        </ul>
        {teaser && (
          <div className={cn("mt-5 flex justify-center", newhaloReveal("rise"))}>
            <NewhaloButton label={moreLabel} variant="outline" onClick={() => setShown((n) => n + 3)} />
          </div>
        )}
      </div>
    </section>
  );
}
