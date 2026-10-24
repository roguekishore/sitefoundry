// Sample content lives here (gallery only); the page reuses it. Kite is made up.
import { Feather } from "lucide-react";
import { DiabrowserHeader, type DiabrowserHeaderProps } from "./diabrowser-header";

export const headerSample: DiabrowserHeaderProps = {
  logo: "Kite",
  mark: <Feather strokeWidth={1.75} />,
  nav: [
    { label: "Updates", href: "#" },
    { label: "Extensions", href: "#" },
    { label: "Trust", href: "#" },
  ],
  cta: { label: "Get early access", href: "#" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <DiabrowserHeader {...headerSample} />
      <div className="h-[200svh] bg-linear-to-b from-highlight via-glow to-background" />
    </div>
  );
}
