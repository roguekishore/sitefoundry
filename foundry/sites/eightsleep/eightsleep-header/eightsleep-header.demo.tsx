// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { EightsleepHeader, type EightsleepHeaderProps } from "./eightsleep-header";

export const headerSample: EightsleepHeaderProps = {
  brand: "tidewell",
  promo: { label: "Join the list for $120 off the Mantle", href: "#" },
  links: [
    { label: "How the Mantle works", href: "#" },
    { label: "Add-ons", href: "#" },
    { label: "Reviews", href: "#" },
  ],
  login: { label: "Log in", href: "#" },
  cta: { label: "Shop the Mantle", href: "#" },
  cartLabel: "Cart",
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="min-h-[200svh] bg-linear-to-b from-glow to-muted">
      <EightsleepHeader {...headerSample} />
    </div>
  );
}
