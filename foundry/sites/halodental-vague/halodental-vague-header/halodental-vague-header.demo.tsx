import { HalodentalVagueHeader, type HalodentalVagueHeaderProps } from "./halodental-vague-header";

export const headerSample: HalodentalVagueHeaderProps = {
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
      <HalodentalVagueHeader {...headerSample} overlay={false} />
    </div>
  );
}
