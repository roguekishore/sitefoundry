import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ParsleyhealthHeadingProps {
  /** the title */
  title: ReactNode;
  /** small tracked capitals above the title */
  eyebrow?: string;
  /** hero: 36→64px · section: 36→48px · card: 32→36px */
  size?: "hero" | "section" | "card";
  /** left, centred, or centred on phones and left from lg up */
  align?: "left" | "center" | "phone-center";
  /** heading level */
  as?: "h1" | "h2" | "h3";
  /** brand: forest title and sage eyebrow · inherit: both take the surrounding text colour */
  tone?: "brand" | "inherit";
  className?: string;
  /** classes for the title only (e.g. a max width) */
  titleClassName?: string;
}

const sizes = {
  hero: "text-[2.25rem] leading-[1.12] lg:text-[4rem] lg:leading-[1.1]",
  section: "text-[2.25rem] leading-[1.12] lg:text-5xl lg:leading-[1.12]",
  card: "text-[2rem] leading-[1.15] lg:text-[2.25rem]",
};

const aligns = {
  left: "text-left",
  center: "text-center",
  "phone-center": "text-center lg:text-left",
};

/** Eyebrow + light serif title, the heading of every section. */
export function ParsleyhealthHeading({
  title,
  eyebrow,
  size = "section",
  align = "left",
  as: Tag = "h2",
  tone = "brand",
  className,
  titleClassName,
}: ParsleyhealthHeadingProps) {
  return (
    <div className={cn(aligns[align], className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 font-sans text-[0.6875rem] leading-tight font-medium tracking-[0.09em] uppercase lg:mb-4 lg:text-xs",
            tone === "brand" && "text-ring",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          sizes[size],
          "font-display font-light tracking-[-0.02em] text-balance",
          tone === "brand" && "text-primary",
          titleClassName,
        )}
      >
        {title}
      </Tag>
    </div>
  );
}
