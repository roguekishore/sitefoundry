import { cn } from "@foundry/foundry-utils";

export interface ParsleyhealthWordmarkProps {
  /** the company name */
  brand: string;
  /** a short monogram shown below lg instead of the name (e.g. initials) */
  short?: string;
  /** where it links */
  href?: string;
  /** md: 28px (nav) · lg: 36px (footer) */
  size?: "md" | "lg";
  className?: string;
}

/** A text wordmark in the body sans. */
export function ParsleyhealthWordmark({ brand, short, href = "#", size = "md", className }: ParsleyhealthWordmarkProps) {
  return (
    <a
      href={href}
      aria-label={brand}
      className={cn(
        "inline-flex items-center font-sans leading-none font-normal tracking-[0.03em] whitespace-nowrap",
        size === "md" ? "text-[1.75rem]" : "text-[2.25rem]",
        className,
      )}
    >
      {short ? (
        <>
          <span aria-hidden className="text-2xl font-medium tracking-[-0.06em] lg:hidden">
            {short}
          </span>
          <span aria-hidden className="max-lg:hidden">
            {brand}
          </span>
        </>
      ) : (
        <span aria-hidden>{brand}</span>
      )}
    </a>
  );
}
