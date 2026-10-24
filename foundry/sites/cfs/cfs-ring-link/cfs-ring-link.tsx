import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface CfsRingLinkProps {
  /** the link's text, e.g. "Read the plan" */
  label: string;
  /** where it goes */
  href: string;
  className?: string;
}

/** Mono label + thin orange ring with an arrow that nudges right on hover. */
export function CfsRingLink({ label, href, className }: CfsRingLinkProps) {
  return (
    <a href={href} className={cn("group inline-flex items-center font-mono text-sm leading-none", className)}>
      <span>{label}</span>
      <span className="ml-1 grid size-[70px] shrink-0 place-items-center rounded-full border border-primary">
        <ArrowRight
          aria-hidden
          strokeWidth={1}
          className="size-6 transition-transform duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      </span>
    </a>
  );
}
