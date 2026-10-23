import { cn } from "@foundry/foundry-utils";

/** A run of heading text: plain, or set in the serif's italic. */
export type SlashHeadingPart = string | { italic: string };

const sizes = {
  /** 88px desktop headline (36px on phones) */
  xl: "text-[2.25rem] leading-[1] lg:text-[5.5rem] lg:leading-[1.06]",
  /** 64px desktop headline */
  lg: "text-[2.25rem] leading-[1] lg:text-[4rem] lg:leading-[1.03]",
  /** 52px desktop headline */
  md: "text-[2.25rem] leading-[1.125] lg:text-[3.25rem] lg:leading-[1.125]",
} as const;

export interface SlashHeadingProps {
  /** the heading, as runs; `{ italic: "strong" }` sets a run in italic */
  parts: SlashHeadingPart[];
  /** the grey line under it */
  sub?: string;
  /** size step */
  size?: keyof typeof sizes;
  /** centred (product sections) or left (customers, pricing, FAQ) */
  align?: "center" | "left";
  /** heading level */
  as?: "h1" | "h2" | "h3";
  /** extra classes on the heading itself (e.g. a max width that sets the line break) */
  headingClassName?: string;
  className?: string;
}

/** Renders the runs of a heading, italic where asked. */
export function SlashHeadingText({ parts }: { parts: SlashHeadingPart[] }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? <span key={i}>{part}</span> : <em key={i} className="italic">{part.italic}</em>,
      )}
    </>
  );
}

/** A display-serif section heading with an optional italic run and a grey sub-line. */
export function SlashHeading({ parts, sub, size = "lg", align = "center", as: Tag = "h2", headingClassName, className }: SlashHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <Tag
        className={cn(
          sizes[size],
          "font-display font-normal tracking-[-0.01em] text-balance text-foreground",
          align === "center" && "mx-auto",
          headingClassName,
        )}
      >
        <SlashHeadingText parts={parts} />
      </Tag>
      {sub && (
        <p
          className={cn(
            "mt-4 text-base leading-[1.375] tracking-[-0.02em] text-pretty text-foreground/70 lg:mt-6 lg:text-xl lg:leading-[1.375]",
            align === "center" && "mx-auto max-w-[35rem]",
            align === "left" && "max-w-[40rem]",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
