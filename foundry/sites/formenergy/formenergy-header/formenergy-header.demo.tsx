// Sample content (gallery only).
import { FormenergyHeader, type FormenergyHeaderProps } from "./formenergy-header";

export const headerSample: FormenergyHeaderProps = {
  brand: "Tidewell",
  brandSuffix: "power",
  homeHref: "#top",
  menuLabel: "Open the menu",
  links: [
    { label: "Company", href: "#company", children: [{ label: "Leadership", href: "#leadership" }, { label: "Investors", href: "#investors" }] },
    { label: "The cell", href: "#cell", children: [{ label: "Salt chemistry", href: "#chemistry" }, { label: "Planning tools", href: "#tools" }] },
    { label: "The works", href: "#works", children: [{ label: "Calder Falls", href: "#calder" }] },
    { label: "Jobs", href: "#jobs", children: [{ label: "Open roles", href: "#roles" }] },
    { label: "Press", href: "#press", children: [{ label: "Releases", href: "#releases" }] },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Demo() {
  return (
    <div className="dark relative h-80 bg-linear-to-br from-muted to-background">
      <FormenergyHeader {...headerSample} />
    </div>
  );
}
