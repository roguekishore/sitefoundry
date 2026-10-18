// Sample content lives here (gallery only); the page reuses it.
import { StripeHero, type StripeHeroProps } from "./stripe-hero";

export const heroSample: StripeHeroProps = {
  figure: { label: "Payments settled on fernpay today:", value: "₹48,201,337" },
  title: "Money infrastructure that grows with you.",
  rest: "Take payments, launch financial products and invent new ways to charge – from your first sale to your billionth.",
  action: { label: "Ask for early access", href: "/early-access" },
  logos: [
    { name: "Northloop", style: "bold" },
    { name: "kiteworks", style: "rounded" },
    { name: "ALDER", style: "caps" },
    { name: "Marisol", style: "serif" },
    { name: "parcelly", style: "bold" },
    { name: "Quanta", style: "light" },
    { name: "OVERLAND", style: "caps" },
    { name: "humming", style: "rounded" },
  ],
};

export default function Demo() {
  return <StripeHero {...heroSample} underHeader={0} />;
}
