import type { ReactNode } from "react";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface MymindPlayLinkProps {
  /** the link text (set in small capitals) */
  children: ReactNode;
  /** where it goes */
  href: string;
  /** "play": a tangerine disc with a play triangle; "arrow": a thin tangerine arrow */
  icon?: "play" | "arrow";
  /** on a tangerine band: white disc and white text */
  inverse?: boolean;
  className?: string;
}

/** Disc-and-capitals link that turns tangerine on hover. */
export function MymindPlayLink({ children, href, icon = "play", inverse, className }: MymindPlayLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-[family-name:var(--mymind-round,var(--typeface-body))] text-[0.8125rem] leading-5 font-semibold tracking-[0.08em] uppercase transition-colors duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] lg:text-[0.9375rem]",
        inverse ? "text-primary-foreground hover:text-foreground" : "text-foreground hover:text-primary",
        className,
      )}
    >
      {icon === "play" ? (
        <span
          className={cn(
            "grid size-[1.125rem] place-items-center rounded-full lg:size-5",
            inverse ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground",
          )}
        >
          <Play className="ml-px size-2 fill-current lg:size-2.5" strokeWidth={0} />
        </span>
      ) : (
        <ArrowRight className="size-5 text-primary transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.5} />
      )}
      <span>{children}</span>
    </a>
  );
}
