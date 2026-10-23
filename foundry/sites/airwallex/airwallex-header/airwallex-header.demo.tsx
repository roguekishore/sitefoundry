// Sample content lives here (gallery only); the page reuses it. Fernhold is made up.
import { Megaphone, Sprout } from "lucide-react";
import { AirwallexHeader, type AirwallexHeaderProps } from "./airwallex-header";

export const headerSample: AirwallexHeaderProps = {
  announcement: {
    icon: <Megaphone aria-hidden className="text-highlight" strokeWidth={2.25} />,
    text: "Fernhold opens local accounts in 14 new markets this autumn.",
    link: { label: "See where", href: "#" },
    closeLabel: "Dismiss announcement",
  },
  wordmark: "Fernhold",
  mark: <Sprout aria-hidden />,
  links: [
    { label: "Platform", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Build", href: "#" },
    { label: "About", href: "#" },
  ],
  language: "EN",
  login: { label: "Sign in", href: "#" },
  demo: { label: "Book a demo", href: "#" },
  action: { label: "Open account", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return <AirwallexHeader {...headerSample} />;
}
