// Sample content lives here (gallery only); the page reuses it.
import { HalodentalSonnetHeader, type HalodentalSonnetHeaderProps } from "./halodental-sonnet-header";

export const headerSample: HalodentalSonnetHeaderProps = {
  mark: { name: "Gleam" },
  links: [
    { label: "Product", href: "#" },
    { label: "Get Started", href: "#" },
    { label: "Company", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Investors", href: "#" },
  ],
  cta: { label: "Reserve now", href: "#" },
  language: { label: "Fr", href: "#" },
  menuLabel: "Open the menu",
};

export default function Demo() {
  return (
    <div className="dark bg-background">
      <HalodentalSonnetHeader {...headerSample} overlay={false} />
      <div className="h-40" />
    </div>
  );
}
