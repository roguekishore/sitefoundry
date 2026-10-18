import { cn } from "@foundry/foundry-utils";
import { Caret } from "@foundry/clerk-button";

export interface ClerkArrowLinkProps {
  /** the link text */
  label: string;
  href: string;
  className?: string;
}

export function ClerkArrowLink({ label, href, className }: ClerkArrowLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-2.5 text-[0.8125rem] leading-6 font-medium text-foreground transition-colors duration-200 hover:text-foreground/75",
        className,
      )}
    >
      {label}
      <Caret className="size-2 opacity-60 transition-transform duration-300 ease-out group-hover/link:translate-x-0.5 motion-reduce:transition-none" />
    </a>
  );
}
