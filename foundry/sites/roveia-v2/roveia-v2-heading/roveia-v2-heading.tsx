import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RoveiaV2HeadingProps {
  /** the ink part */
  children: ReactNode;
  /** an optional part in brand blue */
  accent?: ReactNode;
  /** where the blue part goes: before or after the ink part, or on its own line after it */
  accentAt?: "before" | "after" | "below";
  /** label: 32px · section: 35→64px · statement: 32→70px */
  size?: "label" | "section" | "statement";
  /** heading level */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

const sizes = {
  label: "text-[2rem] leading-[1.2] tracking-[-0.03em]",
  section: "text-[2.1875rem] leading-[1.1] tracking-[-0.06em] lg:text-[4rem] lg:leading-[1.2] lg:tracking-[-0.03em]",
  statement: "text-[2rem] leading-[1.2] tracking-[-0.06em] lg:text-[4.375rem] lg:leading-[1.1] lg:tracking-[-0.03em]",
};

export function RoveiaV2Heading({ children, accent, accentAt = "after", size = "section", as: Tag = "h2", className }: RoveiaV2HeadingProps) {
  const blue = accent ? <span className="text-primary">{accent}</span> : null;
  return (
    <Tag className={cn("font-display font-normal text-balance", sizes[size], className)}>
      {accentAt === "before" && blue}
      {accentAt === "before" && blue && " "}
      {children}
      {accentAt === "after" && blue && " "}
      {accentAt === "after" && blue}
      {accentAt === "below" && blue && <span className="block">{blue}</span>}
    </Tag>
  );
}
