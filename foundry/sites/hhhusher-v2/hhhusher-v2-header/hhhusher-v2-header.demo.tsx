import { HhhusherV2Header, type HhhusherV2HeaderProps } from "./hhhusher-v2-header";

export const headerSample: HhhusherV2HeaderProps = {
  brand: "Quello",
  brandHref: "#top",
  links: [
    { label: "Overview", href: "#overview" },
    { label: "Shop", href: "#shop" },
    { label: "Questions", href: "#questions" },
  ],
  buy: { label: "Buy", href: "#buy" },
  currencies: ["$USD", "€EUR", "£GBP"],
  currencyLabel: "Currency",
  language: { label: "DE", href: "#de" },
  menuLabel: "Open menu",
  closeLabel: "Close menu",
};

export default function Demo() {
  return (
    <div className="dark relative min-h-[24rem] bg-card">
      <HhhusherV2Header {...headerSample} className="absolute" />
    </div>
  );
}
