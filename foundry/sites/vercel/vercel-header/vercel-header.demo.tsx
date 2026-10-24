import { Hexagon } from "lucide-react";
import { VercelHeader, type VercelHeaderProps } from "./vercel-header";

export const headerSample: VercelHeaderProps = {
  brand: "Halyard",
  mark: <Hexagon fill="currentColor" strokeWidth={1.5} />,
  links: [
    {
      label: "Platform",
      href: "#",
      items: [
        { label: "Agent runtime", href: "#" },
        { label: "Edge network", href: "#" },
        { label: "Isolates", href: "#" },
      ],
    },
    {
      label: "Learn",
      href: "#",
      items: [
        { label: "Guides", href: "#" },
        { label: "Release notes", href: "#" },
        { label: "Field journal", href: "#" },
      ],
    },
    { label: "Teams", href: "#" },
    { label: "Plans", href: "#" },
  ],
  secondary: [
    { label: "Book a demo", href: "#" },
    { label: "Sign in", href: "#" },
  ],
  action: { label: "Get started", href: "#" },
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="min-h-[24rem] bg-background">
      <VercelHeader {...headerSample} />
    </div>
  );
}
