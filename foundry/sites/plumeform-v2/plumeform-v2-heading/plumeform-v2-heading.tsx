import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2HeadingProps {
  /** small capitals above the title */
  eyebrow?: string;
  /** the heading itself */
  title: ReactNode;
  /** a lead paragraph under the title */
  body?: ReactNode;
  /** page: the 60–72px page title (h1); section: 36–48px (h2); card: 30–36px (h3) */
  size?: "page" | "section" | "card";
  align?: "left" | "center";
  /** reveal on scroll (default on) */
  reveal?: boolean;
  className?: string;
}

export function PlumeformV2Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[0.6875rem] leading-none font-semibold tracking-[0.22em] text-muted-foreground uppercase", className)}>
      {children}
    </p>
  );
}

const titleSizes = {
  page: "text-[2.75rem] font-extrabold tracking-[-0.035em] sm:text-6xl lg:text-7xl leading-[1.02]",
  section: "text-4xl font-bold tracking-[-0.03em] lg:text-5xl leading-[1.05]",
  card: "text-3xl font-bold tracking-[-0.025em] lg:text-4xl leading-[1.1]",
};

export function PlumeformV2Heading({
  eyebrow,
  title,
  body,
  size = "section",
  align = "left",
  reveal = true,
  className,
}: PlumeformV2HeadingProps) {
  const Title = size === "page" ? "h1" : size === "section" ? "h2" : "h3";
  const content = (
    <>
      {eyebrow && <PlumeformV2Eyebrow className="mb-6">{eyebrow}</PlumeformV2Eyebrow>}
      <Title className={cn("font-display text-balance text-foreground", titleSizes[size])}>{title}</Title>
      {body && (
        <div className={cn("mt-6 text-base leading-[1.65] text-muted-foreground lg:text-[1.0625rem]", align === "center" && "mx-auto")}>{body}</div>
      )}
    </>
  );
  const classes = cn(align === "center" && "text-center", className);
  return reveal ? <PlumeformV2Reveal className={classes}>{content}</PlumeformV2Reveal> : <div className={classes}>{content}</div>;
}
