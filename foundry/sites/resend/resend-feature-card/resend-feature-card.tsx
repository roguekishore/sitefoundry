import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ResendFeatureCardProps {
  /** what shows in the lit box (live UI, a screenshot or a placeholder) */
  visual: ReactNode;
  /** a small line icon (lucide) above the title */
  icon?: ReactNode;
  title: string;
  /** the copy under the title */
  text: ReactNode;
  /** a small link under the copy */
  link?: { label: string; href: string };
  /** height of the visual box (defaults to 320px) */
  visualClassName?: string;
  className?: string;
}

export function ResendFeatureCard({ visual, icon, title, text, link, visualClassName, className }: ResendFeatureCardProps) {
  return (
    <article className={cn("flex flex-col", className)}>
      <div className={cn("relative h-80 overflow-clip rounded-t-2xl mask-b-from-55% mask-b-to-100%", visualClassName)}>
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-t-2xl border border-b-0 border-border" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_50%_0%] from-glow/10 to-transparent to-60%" />
        <div className="relative h-full">{visual}</div>
      </div>
      <div className="pt-8 lg:px-10">
        {icon && <span className="flex text-foreground [&_svg]:size-5">{icon}</span>}
        <h3 className="mt-4 font-display text-xl leading-[1.3] tracking-[0.01em] text-foreground">{title}</h3>
        <p className="mt-4 max-w-[20rem] text-sm leading-[1.6] text-muted-foreground max-lg:max-w-none">{text}</p>
        {link && (
          <a href={link.href} className="mt-6 inline-block text-sm text-foreground transition-colors duration-200 hover:text-muted-foreground motion-reduce:transition-none">
            {link.label}
          </a>
        )}
      </div>
    </article>
  );
}
