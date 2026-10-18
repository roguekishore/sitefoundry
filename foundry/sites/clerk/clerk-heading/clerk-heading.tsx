import { cn } from "@foundry/foundry-utils";
import { ClerkArrowLink } from "@foundry/clerk-arrow-link";

export interface ClerkHeadingProps {
  /** small coloured label above the heading */
  eyebrow?: string;
  /** primary: brand violet · highlight: the second accent (cyan on dark) */
  eyebrowTone?: "primary" | "highlight";
  /** the heading; pass a list to choose where the lines break on wide screens */
  title: string | string[];
  /** paragraph under the heading; a list makes several paragraphs */
  text?: string | string[];
  /** caret link under the paragraph */
  link?: { label: string; href: string };
  /** h1 for the page title, h2 for sections */
  as?: "h1" | "h2";
  /** hero: 32px → 56px bold · section: 32px semibold */
  size?: "hero" | "section";
  align?: "start" | "center";
  /** fades the paragraph from foreground to muted, left to right (the dark bands do this) */
  fadeText?: boolean;
  className?: string;
  /** extra classes for the paragraph (e.g. a max width) */
  textClassName?: string;
}

export function ClerkHeading({
  eyebrow,
  eyebrowTone = "primary",
  title,
  text,
  link,
  as: Tag = "h2",
  size = "section",
  align = "start",
  fadeText = false,
  className,
  textClassName,
}: ClerkHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];
  const paragraphs = text === undefined ? [] : Array.isArray(text) ? text : [text];
  return (
    <div className={cn(align === "center" && "flex flex-col items-center text-center", className)}>
      {eyebrow && (
        <p className={cn("mb-4 text-[0.8125rem] leading-6 font-medium", eyebrowTone === "primary" ? "text-primary" : "text-highlight")}>
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-display text-balance text-foreground",
          size === "hero"
            ? "text-[2rem] leading-[1.12] font-semibold tracking-[-0.015em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.143] lg:font-bold lg:tracking-[-0.035em]"
            : "text-[2rem] leading-10 font-semibold tracking-[-0.015em]",
        )}
      >
        {lines.map((line, i) => (
          <span key={i} className="sm:block">
            {line}
            {i < lines.length - 1 && " "}
          </span>
        ))}
      </Tag>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={cn(
            "max-w-xl text-[0.9375rem] leading-6 text-pretty text-muted-foreground",
            i === 0 ? "mt-4" : "mt-3",
            size === "hero" && "lg:text-lg lg:leading-7",
            fadeText && "bg-linear-to-r from-foreground/90 from-30% to-muted-foreground to-90% bg-clip-text text-base text-transparent",
            textClassName,
          )}
        >
          {p}
        </p>
      ))}
      {link && <ClerkArrowLink {...link} className="mt-5" />}
    </div>
  );
}
