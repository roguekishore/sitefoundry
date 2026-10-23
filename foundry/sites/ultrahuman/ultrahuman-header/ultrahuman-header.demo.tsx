// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { Aperture } from "lucide-react";
import { UltrahumanHeader, type UltrahumanHeaderProps } from "./ultrahuman-header";

export const headerSample: UltrahumanHeaderProps = {
  brand: "Kinrise",
  mark: <Aperture strokeWidth={2.5} />,
  notice: "Meet Cadence: an open study of how resting rhythm shifts with age. Add your nights to it.",
  noticeShort: "Same-day delivery on Halo Lite in selected cities",
  noticeLink: { label: "Read more", href: "#" },
  links: [
    { label: "Halo bands", href: "#" },
    { label: "Lab panels", href: "#" },
    { label: "Coaching", href: "#" },
    { label: "Store", href: "#" },
  ],
  menuLinks: [
    { label: "Research", href: "#" },
    { label: "Journal", href: "#" },
    { label: "For teams", href: "#" },
  ],
  action: { label: "Get Halo Max", href: "#" },
  locale: "UK",
  labels: { menu: "Open menu", cart: "Your bag", locale: "Change region" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <UltrahumanHeader {...headerSample} />
      <div className="mx-2.5 h-[150vh] rounded-b-lg bg-muted" />
    </div>
  );
}
