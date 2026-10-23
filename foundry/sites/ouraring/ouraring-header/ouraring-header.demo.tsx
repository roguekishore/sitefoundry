// Sample content lives here (gallery only); the page reuses it. Tessel and the shops are made up.
import { OuraringHeader, type OuraringHeaderProps } from "./ouraring-header";

export const headerSample: OuraringHeaderProps = {
  announcement: (
    <>
      Tessel Loop now ships to Portugal from <a href="#">Lisbon Supply</a> and <a href="#">Northmart</a>.
    </>
  ),
  logo: "Tessel",
  nav: [
    { label: "Shop", href: "#", hasMenu: true },
    { label: "Your Body", href: "#", hasMenu: true },
    { label: "Why Tessel", href: "#", hasMenu: true },
    { label: "For Teams", href: "#" },
  ],
  cart: { href: "#", label: "Your cart is empty" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <OuraringHeader {...headerSample} />
      <div className="h-[150svh] bg-linear-to-b from-card to-background" />
    </div>
  );
}
