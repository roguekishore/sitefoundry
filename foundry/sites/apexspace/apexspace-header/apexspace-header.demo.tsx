// Sample content lives here (gallery only); the page reuses it.
import { wordmarkSample } from "../apexspace-wordmark/apexspace-wordmark.demo";
import { ApexspaceHeader, type ApexspaceHeaderProps } from "./apexspace-header";

export const headerSample: ApexspaceHeaderProps = {
  wordmark: wordmarkSample,
  links: [
    { number: "1.0", label: "Buses", href: "#", more: true },
    { number: "2.0", label: "Works", href: "#", more: true },
    { number: "3.0", label: "Flights", href: "#", more: true },
    { number: "4.0", label: "Company", href: "#" },
    { number: "5.0", label: "Jobs", href: "#" },
    { number: "6.0", label: "Journal", href: "#" },
  ],
  cta: { label: "Build yours", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[200vh] bg-card">
      <ApexspaceHeader {...headerSample} />
      <div className="h-svh bg-muted" />
    </div>
  );
}
