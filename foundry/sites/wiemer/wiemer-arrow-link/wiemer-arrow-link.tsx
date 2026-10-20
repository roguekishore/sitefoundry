import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerArrowLinkProps {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
  /** md: 15px (default) · lg: 17px, the header size on wide screens */
  size?: "md" | "lg";
  className?: string;
}

/** Text link with a circled arrow that rolls through on hover. */
export function WiemerArrowLink({ label, href, size = "md", className }: WiemerArrowLinkProps) {
  const arrow = "absolute inset-0 m-auto size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.38,0.005,0.215,1)] motion-reduce:transition-none";
  return (
    <a href={href} className={cn("group inline-flex items-center gap-2 font-medium tracking-[-0.015em]", size === "md" ? "text-[15px]" : "text-[15px] lg:text-base", className)}>
      <span>{label}</span>
      <span className="relative size-6 shrink-0 overflow-clip rounded-full border border-current">
        <ArrowRight aria-hidden="true" strokeWidth={1.75} className={cn(arrow, "group-hover:translate-x-6")} />
        <ArrowRight aria-hidden="true" strokeWidth={1.75} className={cn(arrow, "-translate-x-6 group-hover:translate-x-0")} />
      </span>
    </a>
  );
}
