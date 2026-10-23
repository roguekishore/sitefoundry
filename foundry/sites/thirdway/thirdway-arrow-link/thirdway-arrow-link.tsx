import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ThirdwayArrowLinkProps {
  /** the link text */
  label: string;
  href: string;
  /** hide the round arrow chip and keep only the underlined text */
  chip?: boolean;
  /** text size: sm 14px, md 18px */
  size?: "sm" | "md";
  className?: string;
}

const sizes = { sm: "text-sm", md: "text-lg" } as const;

/**
 * Underlined label plus a round arrow chip. On hover the underline draws away and the arrow
 * is replaced by a second one sliding in from the left. Follows the colour scope: ink on cream,
 * cream inside a `dark` block.
 */
export function ThirdwayArrowLink({ label, href, chip = true, size = "md", className }: ThirdwayArrowLinkProps) {
  return (
    <a
      href={href}
      className={cn("group inline-flex items-center gap-2 leading-none font-[560] tracking-[-0.04em] text-foreground", sizes[size], className)}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-bottom bg-no-repeat pb-px transition-[background-size] duration-250 ease-out group-hover:bg-[length:0%_1px] motion-reduce:transition-none">
        {label}
      </span>
      {chip && (
        <span aria-hidden className="relative inline-flex h-5 w-[1.875rem] shrink-0 items-center justify-center overflow-clip rounded-full bg-primary text-primary-foreground">
          <ArrowRight className="size-3 transition-transform duration-400 ease-[cubic-bezier(0.66,0.01,0.12,0.98)] group-hover:translate-x-[150%] motion-reduce:transition-none" strokeWidth={2.5} />
          <ArrowRight className="absolute size-3 -translate-x-[220%] transition-transform duration-400 ease-[cubic-bezier(0.66,0.01,0.12,0.98)] group-hover:translate-x-0 motion-reduce:transition-none" strokeWidth={2.5} />
        </span>
      )}
    </a>
  );
}
