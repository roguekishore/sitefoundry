import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface WildAgPillRowProps {
  /** the number in the disc */
  number: number | string;
  /** the label */
  label: string;
  /** where it goes */
  href: string;
  /** light: on paper surfaces; band: on the gradient bands */
  tone?: "light" | "band";
  className?: string;
}

const ease = "duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] motion-reduce:transition-none";

export function WildAgPillRow({ number, label, href, tone = "light", className }: WildAgPillRowProps) {
  const band = tone === "band";
  return (
    <a
      href={href}
      className={cn(
        "group/row flex h-[5.1rem] items-center gap-4 rounded-full border-2 px-[1.125rem] transition-[border-color,background-color] lg:h-20 lg:px-5",
        ease,
        band
          ? "border-primary-foreground/70 text-primary-foreground hover:border-transparent hover:bg-primary-foreground/15"
          : "border-border text-foreground hover:border-transparent hover:bg-card",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-[2.6rem] shrink-0 items-center justify-center rounded-full text-[1.0625rem] font-medium lg:size-10",
          band ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground",
        )}
      >
        {number}
      </span>
      <span className="min-w-0 flex-1 text-[1.0625rem] font-semibold">{label}</span>
      <ArrowRight
        aria-hidden
        strokeWidth={1.5}
        className={cn("size-5 shrink-0 transition-transform group-hover/row:translate-x-1", ease, band ? "" : "text-primary")}
      />
    </a>
  );
}
