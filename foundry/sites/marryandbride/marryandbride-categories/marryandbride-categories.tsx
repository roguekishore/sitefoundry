import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MarryandbrideCategory {
  label: string;
  href: string;
  /** the photo shown at the right while this category is pointed at (desktop) */
  media?: ReactNode;
}

export interface MarryandbrideCategoriesProps {
  /** the categories, one big word each */
  categories: MarryandbrideCategory[];
  className?: string;
}

// empty placeholders get a slightly different tint each, so the swap shows
const tints = ["bg-muted", "bg-secondary", "bg-accent"];

/** Big serif category words; on desktop a window-high photo at the right follows the pointed word. */
export function MarryandbrideCategories({ categories, className }: MarryandbrideCategoriesProps) {
  const [active, setActive] = useState(0);

  return (
    <section className={cn("bg-background text-foreground lg:grid lg:h-svh lg:grid-cols-2", className)}>
      <ul className="flex flex-col items-center justify-center px-gutter py-[4.25rem] text-center lg:py-0">
        {categories.map((category, i) => (
          <li key={category.href}>
            <a
              href={category.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="block font-display text-[3.4rem] leading-[1.1] font-light tracking-[-0.01em] lg:text-[5.88rem]"
            >
              {category.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="relative hidden overflow-clip lg:block">
        {categories.map((category, i) => (
          <div
            key={category.href}
            aria-hidden={i !== active}
            className={cn(
              "absolute inset-0 transition-opacity duration-[400ms] ease-out motion-reduce:transition-none [&_img]:size-full [&_img]:object-cover",
              tints[i % tints.length],
              i === active ? "opacity-100" : "opacity-0",
            )}
          >
            {category.media}
          </div>
        ))}
      </div>
    </section>
  );
}
