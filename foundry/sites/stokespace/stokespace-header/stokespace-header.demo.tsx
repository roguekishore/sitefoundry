// Sample content (gallery only).
import { StokespaceHeader, type StokespaceHeaderProps } from "./stokespace-header";

export const headerSample: StokespaceHeaderProps = {
  brand: "Orrery",
  brandHref: "#top",
  openLabel: "Open menu",
  closeLabel: "Close menu",
  links: [
    {
      label: "Vireo",
      href: "#vireo",
      items: [
        { label: "Flight log", href: "#vireo" },
        { label: "Payload guide", href: "#vireo" },
      ],
    },
    {
      label: "Company",
      href: "#company",
      items: [
        { label: "Our sites", href: "#company" },
        { label: "Leadership", href: "#company" },
      ],
    },
    { label: "Careers", href: "#careers" },
    { label: "Dispatches", href: "#dispatches" },
    { label: "Store", href: "#store" },
  ],
};

export default function Demo() {
  return (
    <div className="min-h-[60rem] bg-background text-foreground">
      <StokespaceHeader {...headerSample} />
      <div className="mx-gutter mt-4 h-[40rem] bg-muted" />
    </div>
  );
}
