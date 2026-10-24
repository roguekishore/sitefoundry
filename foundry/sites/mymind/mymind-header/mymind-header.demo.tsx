// Sample content lives here (gallery only); the page reuses it. "nook" is made up.
import { Feather } from "lucide-react";
import { MymindHeader, type MymindHeaderProps } from "./mymind-header";

export const headerSample: MymindHeaderProps = {
  brand: "nook",
  mark: <Feather strokeWidth={1.75} />,
  brandHref: "#",
  links: [
    { label: "Inside", href: "#", dot: "primary" },
    { label: "Belief", href: "#", dot: "chart-5" },
    { label: "Guides", href: "#", dot: "chart-2" },
  ],
  signIn: { label: "Sign in", href: "#", dot: "highlight" },
  cta: { label: "Join free", href: "#" },
  menuLabel: "Open the menu",
};

export default function Demo() {
  return (
    <div className="min-h-[60vh] bg-accent">
      <MymindHeader {...headerSample} />
    </div>
  );
}
