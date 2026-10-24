import { Search } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MymindEyebrow } from "@foundry/mymind-eyebrow";
import { MymindPlayLink } from "@foundry/mymind-play-link";
import "./mymind-search.css";

export interface MymindSearchProps {
  /** dark spaced capitals */
  eyebrow: string;
  /** headline lines (each starts a new line on desktop) */
  title: string[];
  /** white paragraph */
  text: string;
  /** white play link */
  link: { label: string; href: string };
  /** query chips that pop into the search line one by one */
  chips: string[];
  /** screen-reader label of the search line */
  searchLabel: string;
  className?: string;
}

/** Tangerine band with a looping search line. */
export function MymindSearch({ eyebrow, title, text, link, chips, searchLabel, className }: MymindSearchProps) {
  return (
    <section className={cn("bg-primary pt-14 pb-24 text-foreground lg:pt-[7rem] lg:pb-[11rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        <MymindEyebrow tone="inherit" className="text-foreground/80">{eyebrow}</MymindEyebrow>
        <h2 className="mt-6 font-display text-[3rem] leading-[1.06] tracking-[-0.045em] text-foreground lg:mt-5 lg:text-[6rem] lg:leading-[0.92]">
          {title.map((line, i) => (
            <span key={i} className="lg:block">
              {line}{" "}
            </span>
          ))}
        </h2>
        <p className="mt-10 max-w-[20rem] text-lg leading-[1.6] text-primary-foreground lg:mt-9 lg:max-w-[33rem]">{text}</p>
        <MymindPlayLink href={link.href} inverse className="mt-9 lg:mt-8">
          {link.label}
        </MymindPlayLink>

        <div role="img" aria-label={searchLabel} className="relative mt-28 flex h-12 w-full max-w-[13rem] items-center justify-center gap-2 border-b border-primary-foreground/40 lg:mt-[11.5rem] lg:h-[4.5rem] lg:max-w-[47.25rem] lg:gap-2.5">
          {chips.map((c, i) => (
            <span
              key={c}
              className="mymind-search-chip hidden h-8 items-center rounded-full bg-card px-3 text-sm text-card-foreground lg:inline-flex"
              style={{ animationDelay: `${i * 0.9}s` }}
            >
              {c}
            </span>
          ))}
          <span aria-hidden className="mymind-search-caret h-8 w-px bg-primary-foreground lg:h-[3.25rem]" />
          <Search aria-hidden className="absolute right-0 size-4 text-primary-foreground/80 lg:size-6" strokeWidth={1.25} />
        </div>
      </div>
    </section>
  );
}
