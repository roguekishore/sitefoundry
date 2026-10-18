import { cn } from "@foundry/foundry-utils";

export interface HulyHeadingProps {
  /** the heading; pass a list to choose where the lines break on wide screens */
  title: string | string[];
  /** short paragraph under the heading */
  text?: string;
  /** h1 for the page title, h2 for sections */
  as?: "h1" | "h2";
  /** hero: 84px on desktop · section: 80px · compact: 60px */
  size?: "hero" | "section" | "compact";
  /** semibold (most sections) or medium (the quieter dark sections) */
  weight?: "semibold" | "medium";
  /** fills the heading with a foreground-to-lavender gradient; made for dark backdrops */
  gradient?: boolean;
  /** paragraph in the muted colour instead of the softened foreground */
  mutedText?: boolean;
  align?: "start" | "center";
  className?: string;
  /** extra classes for the paragraph (e.g. a max width) */
  textClassName?: string;
}

const sizes = {
  hero: "text-[2.25rem] leading-none sm:text-6xl lg:text-[5.25rem] lg:leading-[0.9]",
  section: "text-[2.25rem] leading-[0.9] sm:text-6xl lg:text-[5rem] lg:leading-[0.85]",
  compact: "text-[2rem] leading-[0.95] sm:text-5xl lg:text-6xl",
};

export function HulyHeading({
  title,
  text,
  as: Tag = "h2",
  size = "section",
  weight = "semibold",
  gradient = false,
  mutedText = false,
  align = "start",
  className,
  textClassName,
}: HulyHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Tag
        className={cn(
          "font-display text-balance",
          sizes[size],
          weight === "semibold" ? "font-semibold tracking-[-0.04em] lg:tracking-[-0.05em]" : "font-medium tracking-[-0.02em]",
          gradient
            ? "bg-linear-to-br from-foreground from-30% via-[color-mix(in_oklab,var(--foreground)_82%,var(--glow))] via-80% to-[color-mix(in_oklab,var(--foreground)_95%,var(--chart-5))] bg-clip-text pb-[0.06em] text-transparent"
            : "text-foreground",
        )}
      >
        {lines.map((line, i) => (
          <span key={i} className="sm:block">
            {line}
            {i < lines.length - 1 && " "}
          </span>
        ))}
      </Tag>
      {text && (
        <p
          className={cn(
            "mt-2.5 text-[0.9375rem] leading-[1.3] tracking-[-0.02em] text-pretty sm:text-base lg:mt-4 lg:text-lg lg:leading-[1.375] lg:tracking-[-0.04em]",
            mutedText ? "text-muted-foreground" : "text-foreground/85",
            align === "center" && "mx-auto",
            textClassName,
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}
