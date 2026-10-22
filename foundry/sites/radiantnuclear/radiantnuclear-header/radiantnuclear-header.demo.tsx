// Sample content lives here (gallery only); the page reuses it. Corvane Energy is made up.
import { Hexagon } from "lucide-react";
import { RadiantnuclearHeader, type RadiantnuclearHeaderProps } from "./radiantnuclear-header";

export const headerSample: RadiantnuclearHeaderProps = {
  brand: "Corvane",
  logo: <Hexagon strokeWidth={2.5} aria-hidden />,
  links: [
    { label: "Updates", href: "#updates" },
    { label: "Jobs", href: "#jobs" },
  ],
};

export default function Demo() {
  return (
    <div className="min-h-[60svh] bg-secondary">
      <RadiantnuclearHeader {...headerSample} />
    </div>
  );
}
