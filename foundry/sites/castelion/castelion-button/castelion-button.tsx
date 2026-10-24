import { cn } from "@foundry/foundry-utils";

export interface CastelionButtonProps {
  /** the button text */
  label: string;
  /** where it goes */
  href: string;
  /** solid: red → navy on hover · invert: red → text colour with a navy label and outline (on navy bands) */
  variant?: "solid" | "invert";
  className?: string;
}

const hovers = {
  solid: "hover:border-secondary hover:bg-secondary hover:text-secondary-foreground",
  invert: "hover:border-secondary hover:bg-foreground hover:text-secondary",
};

/** Red slab link button with a wide-spaced semibold label. */
export function CastelionButton({ label, href, variant = "solid", className }: CastelionButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-14 items-center justify-center border-2 border-primary bg-primary px-8 text-center font-sans text-base/none font-semibold tracking-[0.08em] text-primary-foreground",
        "transition-[background-color,color,border-color] duration-500 ease-[ease] motion-reduce:transition-none",
        hovers[variant],
        className,
      )}
    >
      {label}
    </a>
  );
}
