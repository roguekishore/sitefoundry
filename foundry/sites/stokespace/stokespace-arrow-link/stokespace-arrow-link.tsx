import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface StokespaceArrowLinkProps {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
  className?: string;
}

/**
 * A light-weight text link ending in a thin arrow. On hover the text and arrow turn the
 * primary colour over 0.35s and the arrow nudges right by 0.15em.
 */
export function StokespaceArrowLink({ label, href, className }: StokespaceArrowLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-[0.3em] text-[length:clamp(0.875rem,0.7625rem+0.462vw,1.178rem)] leading-[1.2] font-light transition-colors duration-350 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:text-primary",
        className,
      )}
    >
      <span>{label}</span>
      <ArrowRight
        aria-hidden
        strokeWidth={1.5}
        className="size-[0.9em] transition-transform duration-350 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:translate-x-[0.15em] motion-reduce:transition-none"
      />
    </a>
  );
}
