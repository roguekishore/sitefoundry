// Sample content lives here (gallery only); the page reuses it. Kestrel is made up.
import { Feather } from "lucide-react";
import { RampHeader, type RampHeaderProps } from "./ramp-header";

export const headerSample: RampHeaderProps = {
  brand: { name: "kestrel", href: "#", icon: <Feather aria-hidden strokeWidth={2.25} /> },
  announcement: {
    text: "Kestrel raises its Series E to give finance teams their evenings back.",
    link: { label: "Read the note", href: "#" },
  },
  dismissLabel: "Dismiss announcement",
  links: [
    { label: "Platform", href: "#", menu: true },
    { label: "Teams", href: "#", menu: true },
    { label: "Partners", href: "#", menu: true },
    { label: "Learn", href: "#", menu: true },
    { label: "Plans", href: "#" },
  ],
  login: { label: "Log in", href: "#" },
  primary: { label: "Book a walkthrough", href: "#" },
  secondary: { label: "Start free", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-96 bg-background">
      <RampHeader {...headerSample} />
    </div>
  );
}
