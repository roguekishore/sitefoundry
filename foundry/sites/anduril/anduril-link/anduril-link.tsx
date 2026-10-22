import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./anduril-link.css";

export interface AndurilLinkProps {
  /** the words */
  label: string;
  /** link target (ignored when as="span") */
  href?: string;
  /** "always": a hairline under the words that re-draws on hover; "hover": no line until hover */
  underline?: "always" | "hover";
  /** render as a span, for use inside a card or row that is itself the link */
  as?: "a" | "span";
  className?: string;
}

/** Small text link with a ↗ arrow; the underline draws in from the left on hover. */
export function AndurilLink({ label, href, underline = "always", as = "a", className }: AndurilLinkProps) {
  const Tag = as;
  return (
    <Tag
      href={as === "a" ? href : undefined}
      data-underline={underline}
      className={cn("anduril-link inline-flex items-center gap-2.5 text-[0.9375rem] leading-[1.2] tracking-[-0.01em]", className)}
    >
      <span className="relative pb-1">
        {label}
        <span aria-hidden className="anduril-link-line absolute inset-x-0 bottom-0 h-px bg-current" />
      </span>
      <ArrowUpRight aria-hidden className="size-3.5 shrink-0" strokeWidth={1.75} />
    </Tag>
  );
}
