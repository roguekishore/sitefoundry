import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface SuperhumanBannerProps {
  /** the sentence before the link */
  text: string;
  /** the underlined link */
  link: { label: string; href: string };
  className?: string;
}

export function SuperhumanBanner({ text, link, className }: SuperhumanBannerProps) {
  return (
    <div className={cn("flex h-14 items-center justify-center bg-accent px-gutter text-center text-base font-[460] text-accent-foreground", className)}>
      <p>
        {text}{" "}
        <a href={link.href} className="group inline-flex items-center gap-1.5 underline underline-offset-2 transition-colors duration-200 hover:text-primary motion-reduce:transition-none">
          {link.label}
          <ArrowRight className="size-4 no-underline transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" strokeWidth={1.5} />
        </a>
      </p>
    </div>
  );
}
