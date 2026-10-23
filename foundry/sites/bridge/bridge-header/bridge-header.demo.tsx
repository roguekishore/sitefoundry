import { Orbit } from "lucide-react";
import { BridgeHeader, type BridgeHeaderProps } from "./bridge-header";

export const headerSample: BridgeHeaderProps = {
  brand: { name: "Orrery", href: "#", tagline: "a Halden company", icon: <Orbit aria-hidden strokeWidth={2.25} /> },
  links: [
    { label: "Platform", href: "#", menu: true },
    { label: "Use cases", href: "#", menu: true },
    { label: "API", href: "#" },
    { label: "Learn", href: "#", menu: true, dividerBefore: true },
  ],
  action: { label: "Book a walkthrough", href: "#" },
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="min-h-96 bg-background">
      <BridgeHeader {...headerSample} />
    </div>
  );
}
