import { Flame } from "lucide-react";
import { BrexHeader, type BrexHeaderProps } from "./brex-header";

export const headerSample: BrexHeaderProps = {
  brand: { name: "Kiln", href: "#", icon: <Flame aria-hidden strokeWidth={2.25} /> },
  links: [
    { label: "Products", href: "#", menu: true },
    { label: "Solutions", href: "#", menu: true },
    { label: "Resources", href: "#", menu: true },
    { label: "Customers", href: "#" },
    { label: "Pricing", href: "#" },
  ],
  secondary: [
    { label: "Sign in", href: "#" },
    { label: "See a demo", href: "#" },
  ],
  primary: { label: "Get started", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-96 bg-background">
      <BrexHeader {...headerSample} />
    </div>
  );
}
