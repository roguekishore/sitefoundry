import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface VercelHeadingProps {
  children: ReactNode;
  /** the element: h1 for the page title, h2 for sections */
  as?: "h1" | "h2";
  /** section: 32px → 56px · title: 48px → 64px */
  size?: "section" | "title";
  className?: string;
}

const sizes = {
  section: "text-[2rem] leading-10 tracking-[-0.05em] lg:text-[3.5rem] lg:leading-[3.5rem] lg:tracking-[-0.06em]",
  title: "text-5xl leading-[3.5rem] tracking-[-0.05em] lg:text-[4rem] lg:leading-[4rem] lg:tracking-[-0.055em]",
};

/** The site's big tight heading. */
export function VercelHeading({ children, as: Tag = "h2", size = "section", className }: VercelHeadingProps) {
  return <Tag className={cn("font-display font-medium text-foreground", sizes[size], className)}>{children}</Tag>;
}
