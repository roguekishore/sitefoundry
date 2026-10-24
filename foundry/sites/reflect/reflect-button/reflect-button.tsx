import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ReflectButtonProps {
  /** the label (an icon may sit before or after it) */
  children: ReactNode;
  href: string;
  /** primary: deep violet with a lilac rim and inner glow · secondary: near-black panel with a hairline */
  variant?: "primary" | "secondary";
  /** stretch to the container width with the label at the left */
  block?: boolean;
  className?: string;
}

// The original's ease for every hover: a quick start that settles slowly.
const ease = "transition-opacity duration-[450ms] ease-[cubic-bezier(0.6,0.6,0,1)] motion-reduce:transition-none";

const variants = {
  primary:
    "border-highlight/35 bg-primary text-primary-foreground shadow-[inset_0_-7px_11px_color-mix(in_oklab,var(--highlight)_16%,transparent)]",
  secondary: "border-foreground/10 bg-secondary text-secondary-foreground",
};

/** Reflect's small rounded buttons; the hover is a crossfade between two light layers. */
export function ReflectButton({ children, href, variant = "primary", block, className }: ReflectButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative isolate inline-flex h-9 shrink-0 items-center gap-2 overflow-clip rounded-lg border px-[0.9375rem] text-[0.9375rem]/6 font-medium whitespace-nowrap [&_svg]:size-4",
        block ? "w-full justify-start" : "justify-center",
        variants[variant],
        className,
      )}
    >
      {/* resting sheen at the top, gone on hover */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--foreground)_7%,transparent),transparent_70%)] group-hover:opacity-0",
          ease,
        )}
      />
      {/* hover glow from the bottom edge */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10 opacity-0 group-hover:opacity-100",
          variant === "primary"
            ? "bg-[radial-gradient(90%_130%_at_50%_100%,color-mix(in_oklab,var(--highlight)_38%,transparent),transparent)]"
            : "bg-foreground/6",
          ease,
        )}
      />
      {children}
    </a>
  );
}
