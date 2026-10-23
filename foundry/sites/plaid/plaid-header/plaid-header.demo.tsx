import { Sailboat } from "lucide-react";
import { PlaidHeader, type PlaidHeaderProps } from "./plaid-header";

export const headerSample: PlaidHeaderProps = {
  brand: { name: "Halyard", href: "#", icon: Sailboat },
  links: [
    { label: "Platform", href: "#", menu: true },
    { label: "Use cases", href: "#", menu: true },
    { label: "Builders", href: "#", menu: true },
    { label: "Learn", href: "#", menu: true },
    { label: "Plans", href: "#" },
  ],
  login: { label: "Sign in", href: "#" },
  cta: { label: "Talk to us", href: "#" },
  menuLabel: "Open the menu",
};

export default function Demo() {
  return (
    <div className="min-h-[60vh] bg-linear-to-br from-foreground/75 via-glow to-highlight">
      <PlaidHeader {...headerSample} />
    </div>
  );
}
