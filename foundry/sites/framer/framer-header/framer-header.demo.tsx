import { Hexagon } from "lucide-react";
import type { FramerHeaderProps } from "./framer-header";
import { FramerHeader } from "./framer-header";

export const headerSample: FramerHeaderProps = {
  brand: "Tessel",
  mark: <Hexagon fill="currentColor" strokeWidth={0} />,
  links: [
    {
      label: "Product",
      href: "#",
      items: [
        { label: "Design agent", href: "#" },
        { label: "Content", href: "#" },
        { label: "Hosting", href: "#" },
      ],
    },
    {
      label: "Use cases",
      href: "#",
      items: [
        { label: "Studios", href: "#" },
        { label: "Startups", href: "#" },
        { label: "Marketing teams", href: "#" },
      ],
    },
    {
      label: "Learn",
      href: "#",
      items: [
        { label: "Courses", href: "#" },
        { label: "Journal", href: "#" },
      ],
    },
    { label: "Teams", href: "#" },
    { label: "Plans", href: "#" },
  ],
  login: { label: "Sign in", href: "#" },
  action: { label: "Join free", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[24rem] bg-background">
      <FramerHeader {...headerSample} className="absolute" />
    </div>
  );
}
