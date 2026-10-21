import { cn } from "@foundry/foundry-utils";

export interface WildAgWordmarkProps {
  /** the brand name */
  text: string;
  /** gradient: brand gradient fill; light: paper colour, for footage */
  tone?: "gradient" | "light";
  className?: string;
}

export function WildAgWordmark({ text, tone = "gradient", className }: WildAgWordmarkProps) {
  return (
    <span
      className={cn(
        "inline-block font-sans leading-none font-extralight tracking-[0.18em] whitespace-nowrap uppercase",
        tone === "gradient" ? "bg-linear-15 from-primary to-highlight bg-clip-text text-transparent" : "text-primary-foreground",
        className,
      )}
    >
      {text}
    </span>
  );
}
