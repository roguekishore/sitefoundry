import type { ReactNode } from "react";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";

export interface StripeBookProps {
  /** the dark first line of the heading */
  title: string;
  /** the softer second line */
  rest?: string;
  book: {
    title: string;
    /** a subtitle printed on the cover */
    subtitle?: string;
    author: string;
    /** a paragraph about the book */
    blurb: ReactNode;
  };
  /** small print above the links */
  note?: string;
  /** small pill links under the note, each with a one-letter badge */
  links?: { label: string; href: string; badge: string }[];
  /** the round seal pinned to the card's corner: a big letter and two small lines */
  seal?: { letter: string; text: string };
  rule?: "solid" | "dashed" | "none";
  className?: string;
}

/** A book cover drawn in CSS: cream paper, sketched curves, italic title, spaced capitals. */
function Cover({ book }: { book: StripeBookProps["book"] }) {
  return (
    <div className="relative aspect-[0.68] w-[58%] max-w-[14rem] overflow-hidden rounded-[3px] bg-[color-mix(in_oklab,var(--chart-4)_14%,var(--background))] text-foreground shadow-[0_24px_40px_-16px_color-mix(in_oklab,var(--foreground)_55%,transparent)] lg:w-[60%] lg:max-w-[15.5rem]">
      <svg aria-hidden viewBox="0 0 100 150" className="absolute inset-0 size-full stroke-muted-foreground/50" fill="none" strokeWidth={0.4}>
        <path d="M60 10 C 80 20, 95 40, 85 60 S 70 80, 92 96" />
        <path d="M64 12 C 84 24, 97 44, 88 62" />
        <path d="M8 104 C 20 96, 40 98, 52 112 S 80 130, 96 120" />
        <path d="M10 110 C 24 102, 42 104, 54 118" />
        <path d="M70 30 l 10 -14 M72 34 l 12 -12" />
      </svg>
      <div className="absolute inset-x-[14%] top-[26%]">
        <p className="font-serif text-[1.75rem] leading-[0.95] italic lg:text-[2rem]">{book.title}</p>
        {book.subtitle && <p className="mt-2 font-serif text-xs italic">{book.subtitle}</p>}
      </div>
      <p className="absolute inset-x-0 bottom-[6%] text-center font-serif text-[0.6875rem] tracking-[0.2em] uppercase italic">{book.author}</p>
    </div>
  );
}

/**
 * "Book of the week": a two-line heading over a split card. A warm taupe panel holds a cover
 * drawn in CSS; a pale panel holds the title, author, blurb, small print and pill links, with
 * a round seal pinned to the corner.
 */
export function StripeBook({ title, rest, book, note, links = [], seal, rule = "solid", className }: StripeBookProps) {
  return (
    <StripeFrame rule={rule} className={className} innerClassName="pt-14 pb-16 lg:pt-20 lg:pb-24">
      <StripeHeading as="h3" lead={title} rest={rest} stacked />
      <div className="relative mt-10 grid overflow-hidden rounded-md lg:mt-14 lg:grid-cols-[0.69fr_1fr] lg:overflow-visible">
        <div className="flex items-center justify-center bg-[color-mix(in_oklab,var(--chart-1)_30%,var(--muted-foreground))] py-14 lg:rounded-l-md lg:py-18">
          <Cover book={book} />
        </div>
        <div className="flex flex-col bg-muted px-6 py-8 lg:rounded-r-md lg:px-[16%] lg:py-20">
          <h4 className="font-display text-xl leading-[1.2] font-light text-foreground lg:text-[1.625rem]">
            {book.title}
            <span className="block text-muted-foreground">{book.author}</span>
          </h4>
          <div className="mt-6 text-base leading-[1.45] font-light text-muted-foreground lg:mt-7 [&_a]:underline [&_a]:underline-offset-2">{book.blurb}</div>
          {(note || links.length > 0) && (
            <div className="mt-10 lg:mt-auto lg:pt-16">
              {note && <p className="max-w-[20rem] text-xs leading-[1.45] font-light text-muted-foreground">{note}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                {links.map((l) => (
                  <a key={l.label} href={l.href} className="flex items-center gap-2 rounded-md border border-border bg-background p-1 pr-3 text-xs font-normal text-foreground transition-colors hover:border-primary/40">
                    <span className="flex size-6 items-center justify-center rounded-sm bg-foreground font-serif text-[0.6875rem] text-background">{l.badge}</span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        {seal && (
          <div
            aria-hidden
            className="absolute top-4 right-4 flex h-24 w-16 flex-col items-center justify-center rounded-[50%] border-2 border-muted-foreground/60 bg-muted text-center text-muted-foreground outline outline-1 outline-offset-2 outline-muted-foreground/40 lg:-top-10 lg:right-8"
          >
            <span className="font-serif text-3xl leading-none italic">{seal.letter}</span>
            <span className="mt-1 px-1 font-serif text-[0.45rem] leading-tight">{seal.text}</span>
          </div>
        )}
      </div>
    </StripeFrame>
  );
}

