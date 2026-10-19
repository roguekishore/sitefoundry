import { HalodentalVagueFlashHeader, type HalodentalVagueFlashHeaderProps } from "./halodental-vague-flash-header";

export const headerSample: HalodentalVagueFlashHeaderProps = {
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
      <HalodentalVagueFlashHeader {...headerSample} overlay={false} />
    </div>
  );
}
