import { UnitHeader, type UnitHeaderProps } from "./unit-header";

export const headerSample: UnitHeaderProps = {
  brand: "corbel",
  links: [
    { label: "Products", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Learn", href: "#" },
  ],
  secondary: { label: "Test mode", href: "#" },
  cta: { label: "Book a walkthrough", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return <UnitHeader {...headerSample} />;
}
