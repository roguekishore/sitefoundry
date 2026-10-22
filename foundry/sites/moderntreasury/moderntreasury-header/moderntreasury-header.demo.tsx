// Sample content (gallery only); the page reuses it. Kestrel is a made-up company.
import { ModerntreasuryHeader, type ModerntreasuryHeaderProps } from "./moderntreasury-header";

export const headerSample: ModerntreasuryHeaderProps = {
  mark: { name: "Kestrel", href: "#" },
  links: [
    { label: "Platform", href: "#", menu: true },
    { label: "Use cases", href: "#", menu: true },
    { label: "Learn", href: "#", menu: true },
    { label: "Developers", href: "#", menu: true },
    { label: "Stories", href: "#" },
    { label: "Plans", href: "#" },
  ],
  secondary: [
    { label: "Sign in", href: "#" },
    { label: "Get API keys", href: "#" },
  ],
  cta: { label: "Book a call", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-64 bg-background">
      <ModerntreasuryHeader {...headerSample} />
    </div>
  );
}
