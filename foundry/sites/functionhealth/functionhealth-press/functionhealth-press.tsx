import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";

export type FunctionhealthPressTile =
  | { kind: "award"; /** publication or prize name */ name: string; /** small mono caption under it */ detail?: string }
  | { kind: "quote"; quote: string; /** who said it */ name: string; /** portrait; empty shows a dark placeholder */ media?: ReactNode };

export interface FunctionhealthPressProps {
  title: HeadingPart[];
  text?: string;
  /** four columns of tiles, each normally one award and one quote (short and tall) */
  columns: FunctionhealthPressTile[][];
  className?: string;
}

function Tile({ tile }: { tile: FunctionhealthPressTile }) {
  if (tile.kind === "award") {
    return (
      <div className="flex h-[7.75rem] flex-col items-center justify-center gap-2 rounded-xl bg-card px-4 text-center lg:h-[8.875rem]">
        <p className="font-display text-[1.625rem] leading-none font-medium tracking-[-0.02em] lg:text-[1.875rem]">{tile.name}</p>
        {tile.detail && <p className="font-mono text-xs leading-none tracking-[0.1em] text-muted-foreground uppercase">{tile.detail}</p>}
      </div>
    );
  }
  return (
    <figure className="relative isolate flex aspect-[251/330] flex-col justify-end overflow-clip rounded-xl bg-foreground p-5 text-background lg:aspect-[288/379]">
      <div
        aria-hidden={tile.media ? undefined : true}
        className={cn("absolute inset-0 -z-20 [&>img]:size-full [&>img]:object-cover", !tile.media && "bg-linear-to-br from-muted-foreground to-foreground")}
      >
        {tile.media}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-4% to-foreground/90" />
      <blockquote className="text-base leading-snug font-semibold">{tile.quote}</blockquote>
      <figcaption className="mt-3 font-mono text-xs leading-none tracking-[0.1em] uppercase">{tile.name}</figcaption>
    </figure>
  );
}

export function FunctionhealthPress({ title, text, columns, className }: FunctionhealthPressProps) {
  return (
    <section className={cn("bg-background pt-9 pb-section text-foreground lg:pt-20", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} text={text} textClassName="lg:mt-5" />
      </div>
      <div className="mx-auto mt-10 max-w-page lg:mt-[4rem] lg:px-gutter">
        <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-[var(--page-gutter)] px-gutter pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {columns.map((col, c) => (
            <li key={c} className="flex w-[15.7rem] shrink-0 snap-start flex-col gap-6 lg:w-auto">
              {col.map((t, i) => (
                <Tile key={i} tile={t} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
