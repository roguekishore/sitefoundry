import { LedupHeader, type LedupHeaderProps } from "./ledup-header";

export const headerSample: LedupHeaderProps = {
  brand: "Calvera",
  links: [
    { label: "Products & Spaces", href: "#products", hasMenu: true },
    { label: "Technical Library", href: "#library" },
    { label: "Our Story", href: "#about" },
    { label: "Where to Buy", href: "#stockists" },
  ],
  cta: { label: "Contact", href: "#contact" },
  search: { label: "Search", href: "#search" },
  account: { label: "Your account", href: "#account" },
};

export default function Demo() {
  return (
    <div className="min-h-[60svh] bg-muted">
      <LedupHeader {...headerSample} />
    </div>
  );
}
