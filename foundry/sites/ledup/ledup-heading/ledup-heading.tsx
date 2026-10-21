import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LedupReveal } from "@foundry/ledup-reveal";

export interface LedupHeadingProps {
  /** the small label above the headline */
  label?: string;
  /** the headline */
  title: ReactNode;
  /** an optional paragraph under the headline */
  text?: ReactNode;
  /** centred (highlights, about) or left-aligned (projects) */
  align?: "center" | "left";
  /** heading size on phones: md is 28px, lg is 36px (both 36px on desktop) */
  size?: "md" | "lg";
  /** wrap the headline to a narrow measure (about 7 words a line on desktop, 2 on phones), as the projects heading does */
  narrow?: boolean;
  /** hide the paragraph on phones, as the original does */
  textOnDesktopOnly?: boolean;
  /** the heading element */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function LedupHeading({
  label,
  title,
  text,
  align = "center",
  size = "md",
  textOnDesktopOnly = true,
  narrow = false,
  as: Tag = "h2",
  className,
}: LedupHeadingProps) {
  const center = align === "center";
  return (
    <div className={cn("flex flex-col", center ? "items-center text-center" : "items-start text-left", className)}>
      {label && (
        <LedupReveal distance={22}>
          <p className="text-sm text-muted-foreground">{label}</p>
        </LedupReveal>
      )}
      <LedupReveal distance={56} className="mt-2">
        <Tag
          className={cn(
            "font-display leading-[1.2] text-foreground lg:text-4xl lg:font-medium",
            size === "md" ? "max-w-[18ch] text-[1.75rem] lg:max-w-none" : "text-4xl",
            narrow && "max-w-[7em] lg:max-w-[11.5em]",
          )}
        >
          {title}
        </Tag>
      </LedupReveal>
      {text && (
        <LedupReveal distance={45} className={cn("mt-8", textOnDesktopOnly && "hidden lg:block")}>
          <p className={cn("text-sm leading-[1.6] text-foreground/75", center ? "max-w-[38rem]" : "max-w-[34rem]")}>{text}</p>
        </LedupReveal>
      )}
    </div>
  );
}
