import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface SuperhumanLinkProps {
  /** the label */
  label: ReactNode;
  /** where it links */
  href: string;
  /** brand: purple on the light page · soft: lilac on deep fields */
  tone?: "brand" | "soft";
  className?: string;
}

export function SuperhumanLink({ label, href, tone = "brand", className }: SuperhumanLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-1 text-base font-medium transition-colors duration-200 hover:underline motion-reduce:transition-none",
        tone === "brand"
          ? "text-primary hover:text-[color-mix(in_oklab,var(--primary),var(--foreground)_25%)]"
          : "text-secondary hover:text-[color-mix(in_oklab,var(--secondary),var(--primary)_25%)]",
        className,
      )}
    >
      {label}
      <ChevronRight className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.5} />
    </a>
  );
}
