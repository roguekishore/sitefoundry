import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MarryandbrideProduct {
  /** product name, shown in uppercase */
  name: string;
  /** the kind of garment, shown at the right from 1024px (e.g. "Cardigan") */
  kind?: string;
  /** price line, already formatted (e.g. "from 420 €") */
  price: string;
  href: string;
  /** small badge on the photo (e.g. "New") */
  badge?: string;
  /** the photo (2:3); empty shows a placeholder */
  media?: ReactNode;
  /** a second photo that fades in on hover */
  hoverMedia?: ReactNode;
}

export interface MarryandbrideProductCardProps extends MarryandbrideProduct {
  className?: string;
}

/** A 2:3 product photo with an optional badge, then name, kind and price in small tracked type. */
export function MarryandbrideProductCard({ name, kind, price, href, badge, media, hoverMedia, className }: MarryandbrideProductCardProps) {
  return (
    <a href={href} className={cn("group block font-sans", className)}>
      <div className="relative aspect-[2/3] overflow-hidden bg-muted [&_img]:size-full [&_img]:object-cover">
        {media}
        {hoverMedia && (
          <div className="absolute inset-0 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100 motion-reduce:transition-none">
            {hoverMedia}
          </div>
        )}
        {badge && (
          <span className="absolute bottom-3 left-3 bg-foreground px-1.5 py-1 text-[0.65rem] leading-none font-medium tracking-[0.05em] text-background uppercase lg:text-[0.7rem]">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-2 flex items-start justify-between gap-3 text-[0.78rem] leading-[1.15] tracking-[0.07em] uppercase lg:text-[0.863rem]">
        <span className="text-foreground">{name}</span>
        {kind && <span className="hidden shrink-0 pr-1.5 text-muted-foreground lg:block">{kind}</span>}
      </div>
      <p className="mt-0.5 text-[0.78rem] leading-[1.4] text-muted-foreground lg:text-[0.863rem]">{price}</p>
    </a>
  );
}
