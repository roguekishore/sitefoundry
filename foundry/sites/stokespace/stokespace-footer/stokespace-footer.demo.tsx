// Sample content (gallery only).
import { StokespaceFooter, type StokespaceFooterProps } from "./stokespace-footer";

export const footerSample: StokespaceFooterProps = {
  contactTitle: "Say hello",
  contact: { label: "Write to us", href: "#contact" },
  columns: [
    [
      { label: "Home", href: "#top" },
      { label: "Vireo", href: "#vireo" },
      { label: "Company", href: "#company" },
    ],
    [
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Dispatches", href: "#dispatches" },
      { label: "Store", href: "#store" },
    ],
    [
      { label: "Instagram", href: "#", external: true },
      { label: "LinkedIn", href: "#", external: true },
      { label: "YouTube", href: "#", external: true },
      { label: "X", href: "#", external: true },
      { label: "Bluesky", href: "#", external: true },
    ],
  ],
  legal: [
    { label: "Terms", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
  ],
  brand: "Orrery",
  address: ["Bend, Oregon,", "United States, Earth"],
  email: "flights@orrery.example",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StokespaceFooter {...footerSample} />
    </div>
  );
}
