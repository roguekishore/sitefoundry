// Sample content for the gallery; the pages reuse it. Rimlock and the Veil are made up.
import { HhhusherHeader, type HhhusherHeaderProps } from "./hhhusher-header";

export const headerSample: HhhusherHeaderProps = {
  brand: "Rimlock",
  brandHref: "#",
  links: [
    { label: "Overview", href: "#overview" },
    { label: "Shop", href: "#shop" },
    { label: "Questions", href: "#questions" },
  ],
  cta: { label: "Order", href: "#shop" },
  currency: "$USD",
  currencyLabel: "Currency: US dollars",
  language: { label: "DE", href: "#" },
  menuLabels: { open: "Open menu", close: "Close menu" },
};

export default function Demo() {
  return (
    <div className="dark min-h-[140svh] bg-background">
      <HhhusherHeader {...headerSample} />
    </div>
  );
}
