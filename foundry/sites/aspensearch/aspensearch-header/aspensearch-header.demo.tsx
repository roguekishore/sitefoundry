import { Bird } from "lucide-react";
import { AspensearchHeader, type AspensearchHeaderProps } from "./aspensearch-header";

export const headerSample: AspensearchHeaderProps = {
  brand: "Corvo Talent",
  logo: <Bird aria-hidden className="size-8" strokeWidth={1.5} />,
  cities: [
    { name: "CHI", timeZone: "America/Chicago", fallback: "09:00 AM" },
    { name: "LDN", timeZone: "Europe/London", fallback: "03:00 PM" },
  ],
  links: [
    { label: "Approach", href: "#about" },
    { label: "Firms", href: "#clients" },
    { label: "Stories", href: "#testimonials" },
    { label: "Partners", href: "#team" },
  ],
  contact: { label: "Get in touch", href: "#contact" },
  menuLabel: "Menu",
  themeToggleLabel: "Switch light and dark",
};

export default function Demo() {
  return (
    <div className="min-h-[60vh] bg-background">
      <AspensearchHeader {...headerSample} />
    </div>
  );
}
