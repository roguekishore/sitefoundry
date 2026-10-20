// Sample content (gallery only); the page reuses it. Fernlight is a made-up company.
import { Sprout, Star } from "lucide-react";
import { GrowthbookV2Header, type GrowthbookV2HeaderProps } from "./growthbook-v2-header";

export function FernlightMark({ large }: { large?: boolean }) {
  return (
    <span className={`flex items-center gap-1.5 font-medium tracking-[-0.02em] text-foreground ${large ? "text-[2rem] lg:text-[2.125rem]" : "text-[1.375rem] lg:text-xl"}`}>
      <Sprout aria-hidden className="size-6 text-primary" strokeWidth={2.25} />
      Fernlight
    </span>
  );
}

export const headerSample: GrowthbookV2HeaderProps = {
  announcement: {
    text: "Open office hours | Bring a test plan, leave with a launch date →",
    linkLabel: "Save a seat",
    href: "#",
  },
  brand: <FernlightMark />,
  links: [
    { label: "Platform", href: "#", menu: true },
    { label: "Teams", href: "#", menu: true },
    { label: "Learn", href: "#", menu: true },
    { label: "Plans", href: "#" },
    { label: "Docs", href: "#" },
  ],
  pill: { icon: <Star strokeWidth={1.75} />, label: "6,204", href: "#", ariaLabel: "6,204 stars on the code host" },
  signIn: { label: "Log in", href: "#" },
  actions: [
    { label: "Talk to us", href: "#", variant: "outline" },
    { label: "Try it free", href: "#", variant: "primary" },
  ],
};

export default function Demo() {
  return (
    <div className="min-h-[60rem] bg-background">
      <GrowthbookV2Header {...headerSample} />
    </div>
  );
}
