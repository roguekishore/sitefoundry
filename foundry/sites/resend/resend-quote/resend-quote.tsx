import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ResendButton } from "@foundry/resend-button";
import { ResendFrame } from "@foundry/resend-frame";
import { ResendPlaceholder } from "@foundry/resend-placeholder";

export interface ResendQuoteProps {
  /** the company's glyph in the round mark (an svg or lucide icon) */
  mark?: ReactNode;
  /** the quote, without quotation marks */
  quote: string;
  /** who said it */
  author: { name: string; role: string; avatar?: ReactNode };
  /** the small pill link (hidden until hover on desktop) */
  link?: { label: string; href: string };
  className?: string;
}

export function ResendQuote({ mark, quote, author, link, className }: ResendQuoteProps) {
  return (
    <section className={cn("group/quote bg-background text-foreground lg:px-gutter", className)}>
      <ResendFrame>
        <figure className="flex flex-col items-center px-2 pt-24 pb-10 text-center lg:pb-[5.5rem]">
          {mark && (
            <span className="flex size-[6.25rem] items-center justify-center rounded-full bg-radial from-muted to-muted/30 text-foreground [&_svg]:size-10">
              {mark}
            </span>
          )}
          <blockquote className="mt-12 max-w-[31rem] text-2xl leading-9 text-foreground">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="mt-14 flex items-center gap-4 text-left lg:mt-16">
            <span className="relative size-10 shrink-0 overflow-clip rounded-full">
              {author.avatar ?? <ResendPlaceholder shape="round" className="size-full" />}
            </span>
            <span>
              <span className="block text-base leading-6 text-foreground">{author.name}</span>
              <span className="block text-sm leading-5 text-muted-foreground">{author.role}</span>
            </span>
          </figcaption>
          {link && (
            <ResendButton
              href={link.href}
              variant="pill"
              chevron
              className="mt-12 transition-[opacity,background-color] duration-500 lg:mt-8 lg:opacity-0 lg:group-hover/quote:opacity-100 lg:focus-visible:opacity-100"
            >
              {link.label}
            </ResendButton>
          )}
        </figure>
      </ResendFrame>
    </section>
  );
}
