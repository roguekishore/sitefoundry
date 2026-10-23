import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface BrexBannerProps {
  /** the announcement sentence */
  text: string;
  /** the link at the end of the sentence */
  link?: { label: string; href: string };
  className?: string;
}

/** The dark announcement strip above the header (not pinned). */
export function BrexBanner({ text, link, className }: BrexBannerProps) {
  return (
    <div className={cn("dark bg-background text-foreground", className)}>
      <p className="mx-auto max-w-page px-gutter py-3 text-center text-sm/[1.3125rem] tracking-[-0.02em] text-balance sm:py-[0.90625rem] sm:text-pretty">
        {text}{" "}
        {link && (
          <a href={link.href} className="inline-flex items-center gap-1 whitespace-nowrap transition-opacity duration-150 ease-linear hover:opacity-80 motion-reduce:transition-none">
            {link.label}
            <ArrowRight aria-hidden className="size-3.5" strokeWidth={1.5} />
          </a>
        )}
      </p>
    </div>
  );
}
