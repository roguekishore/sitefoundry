import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface InstituteofhealthIconButtonProps {
  /** which glyph: previous, next, or a plus (turns into × when the parent `group` is open) */
  icon: "prev" | "next" | "plus";
  /** what it does, for screen readers */
  label?: string;
  /** sm: 36px · md: 44px */
  size?: "sm" | "md";
  /** span renders a non-interactive look-alike (inside a <summary>) */
  as?: "button" | "span";
  onClick?: () => void;
  className?: string;
}

const icons = { prev: ChevronLeft, next: ChevronRight, plus: Plus };

/** Flat grey square with a thin icon. */
export function InstituteofhealthIconButton({ icon, label, size = "sm", as = "button", onClick, className }: InstituteofhealthIconButtonProps) {
  const Icon = icons[icon];
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground",
    "transition-[background-color] duration-400 ease-[ease] hover:bg-accent motion-reduce:transition-none",
    size === "sm" ? "size-9" : "size-11",
    className,
  );
  const glyph = (
    <Icon
      aria-hidden
      strokeWidth={1.5}
      className={cn(
        size === "sm" ? "size-4" : "size-[1.1rem]",
        icon === "plus" && "transition-transform duration-400 ease-[ease] group-open:rotate-45 motion-reduce:transition-none",
      )}
    />
  );
  if (as === "span") return <span className={classes}>{glyph}</span>;
  return (
    <button type="button" aria-label={label} onClick={onClick} className={cn(classes, "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring")}>
      {glyph}
    </button>
  );
}
