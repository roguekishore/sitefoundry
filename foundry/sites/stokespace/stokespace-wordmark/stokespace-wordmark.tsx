import { cn } from "@foundry/foundry-utils";

export interface StokespaceWordmarkProps {
  /** the company name (shown uppercase) */
  name: string;
  /** stretch the name to fill its box's width exactly (the giant footer wordmark) */
  fit?: boolean;
  className?: string;
}

/**
 * A plain text wordmark in the wide display face. With `fit`, it is drawn as SVG text whose
 * length is set to the full width, so any name fills its column edge to edge without JS.
 */
export function StokespaceWordmark({ name, fit = false, className }: StokespaceWordmarkProps) {
  const face = "font-display font-extrabold uppercase [font-stretch:var(--stokespace-stretch,100%)]";
  if (fit) {
    return (
      <svg role="img" aria-label={name} viewBox="0 0 1000 152" className={cn("block w-full fill-current", className)}>
        <text
          x="0"
          y="148"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          className={face}
          style={{ fontSize: 204 }}
        >
          {name}
        </text>
      </svg>
    );
  }
  return (
    <span className={cn(face, "inline-block text-[1.625rem] leading-none tracking-[-0.01em]", className)}>{name}</span>
  );
}
