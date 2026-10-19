import { HalodentalHeader, type HalodentalHeaderProps } from "./halodental-header";

export const headerSample: HalodentalHeaderProps = {
  mark: { name: "Sola", href: "#" },
  nav: [
    { label: "Product", href: "#product" },
    { label: "Get Started", href: "#start" },
    { label: "Company", href: "#company" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Investors", href: "#investors" },
  ],
  cta: { label: "Reserve now", mobileLabel: "Reserve", href: "#reserve" },
  locale: { label: "Fr", href: "#fr" },
  showAccessibility: true,
};

export default function Demo() {
  return (
    <div className="min-h-40 bg-background">
      <HalodentalHeader {...headerSample} overlay={false} />
    </div>
  );
}
