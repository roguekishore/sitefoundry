import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HalodentalSonnetHeadingProps {
  /** the heading; pass a list of lines to choose where it breaks (from sm up) */
  title: ReactNode | string[];
  /** heading level */
  as?: "h1" | "h2" | "h3";
  /** display: 40 → 64px · giant: 50 → 100px · card: 21 → 28px */
  size?: "display" | "giant" | "card";
  className?: string;
}

const sizes = {
  display: "text-[2.5rem] leading-[1.1] lg:text-[4rem] lg:leading-none",
  giant: "text-[3.125rem] leading-none lg:text-[6.25rem] lg:leading-[0.95]",
  card: "text-[1.3rem] leading-[1.1] lg:text-[1.75rem]",
};

/** The heading: one weight (regular), set big, with the leading pulled to about 1. */
export function HalodentalSonnetHeading({ title, as: Tag = "h2", size = "display", className }: HalodentalSonnetHeadingProps) {
  const text = Array.isArray(title)
    ? title.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br className="hidden sm:block" />}
          {i > 0 && <span className="sm:hidden"> </span>}
          {line}
        </Fragment>
      ))
    : title;
  return <Tag className={cn("font-display font-normal text-pretty", sizes[size], className)}>{text}</Tag>;
}
