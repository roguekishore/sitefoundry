import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./aat-architecten-line-link.css";

export interface AatArchitectenLineLinkProps {
  /** the label */
  children: ReactNode;
  /** where it goes */
  href: string;
  className?: string;
}

/** Label left, arrow right, on a 1px rule 230px wide. 16px text on phones, 20px from 1024px. */
export function AatArchitectenLineLink({ children, href, className }: AatArchitectenLineLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "aat-architecten-line-link relative inline-flex w-[14.375rem] max-w-full items-center justify-between gap-4 pb-3 font-sans text-base leading-none text-foreground outline-none lg:text-xl",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden className="size-4 shrink-0" strokeWidth={1.5} />
    </a>
  );
}
