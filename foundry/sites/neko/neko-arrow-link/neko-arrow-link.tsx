import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface NekoArrowLinkProps {
  /** the label beside the square */
  label: string;
  /** where it goes */
  href: string;
  className?: string;
}

export function NekoArrowLink({ label, href, className }: NekoArrowLinkProps) {
  return (
    <a href={href} className={cn("group inline-flex items-center gap-4 font-sans text-base font-medium text-foreground", className)}>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-foreground text-background transition-all duration-150 group-hover:bg-foreground/85 motion-reduce:transition-none lg:size-15">
        <ArrowRight aria-hidden className="size-6" strokeWidth={1.25} />
      </span>
      <span>{label}</span>
    </a>
  );
}
