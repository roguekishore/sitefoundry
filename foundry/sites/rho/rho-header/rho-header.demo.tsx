import { RhoHeader, type RhoHeaderProps } from "./rho-header";

export const headerSample: RhoHeaderProps = {
  brand: "Ostra",
  links: [
    { label: "Product", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Learn", href: "#" },
  ],
  secondary: [
    { label: "Sign in", href: "#" },
    { label: "Book a demo", href: "#" },
  ],
  cta: { label: "Get started", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[60vh] bg-background">
      <RhoHeader {...headerSample} />
    </div>
  );
}
