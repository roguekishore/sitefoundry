import { cn } from "@foundry/foundry-utils";

export interface BrexHeadingProps {
  /** the heading text */
  title: string;
  /** the grey line under it (optional) */
  subtitle?: string;
  /** the heading level to render (default h2) */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** The centred heading that opens most Brex sections. */
export function BrexHeading({ title, subtitle, as: Tag = "h2", className }: BrexHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-[56rem] text-center", className)}>
      <Tag className="font-display text-[1.875rem]/9 font-semibold tracking-[-0.02em] text-balance text-foreground lg:text-5xl/12">{title}</Tag>
      {subtitle && <p className="mt-4 text-base/6 text-pretty text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
