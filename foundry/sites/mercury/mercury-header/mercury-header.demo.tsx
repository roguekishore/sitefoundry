// Sample content lives here (gallery only); the page reuses it.
import { MercuryHeader, type MercuryHeaderProps } from "./mercury-header";

export const headerSample: MercuryHeaderProps = {
  mark: { name: "Larkspur", href: "#" },
  links: [
    { label: "Accounts", href: "#", menu: true },
    { label: "Use cases", href: "#", menu: true },
    { label: "Learn", href: "#", menu: true },
    { label: "Company", href: "#", menu: true },
    { label: "Plans", href: "#" },
  ],
  login: { label: "Sign in", href: "#" },
  cta: { label: "Open an account", href: "#" },
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="min-h-80 bg-background">
      <MercuryHeader {...headerSample} overlay={false} />
    </div>
  );
}
