import { Compass } from "lucide-react";
import { SuperhumanMark } from "@foundry/superhuman-mark";
import type { SuperhumanHeaderProps } from "./superhuman-header";
import { SuperhumanHeader } from "./superhuman-header";

export const headerSample: SuperhumanHeaderProps = {
  brand: <SuperhumanMark brand="Wayfinder" icon={<Compass />} tile="solid" className="text-lg" />,
  links: [
    { label: "Products", href: "#", hasMenu: true },
    { label: "Solutions", href: "#", hasMenu: true },
    { label: "AI", href: "#", hasMenu: true },
    { label: "Resources", href: "#", hasMenu: true },
    { label: "Pricing", href: "#", hasMenu: true },
    { label: "Reviews", href: "#" },
  ],
  contact: { label: "Talk to sales", href: "#" },
  signIn: { label: "Sign in", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return <SuperhumanHeader {...headerSample} />;
}
