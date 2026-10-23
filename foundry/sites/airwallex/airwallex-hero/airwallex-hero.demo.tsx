// Sample content lives here (gallery only); the page reuses it. Fernhold is made up.
import { AirwallexHero, type AirwallexHeroProps } from "./airwallex-hero";

export const heroSample: AirwallexHeroProps = {
  title: [
    { text: "The " },
    { text: "borderless", accent: true },
    { text: " finance stack for " },
    { text: "ambitious", accent: true },
    { text: " companies" },
  ],
  lede: "Hold, move and spend money in 40 currencies from one account, with automation doing the busywork.",
  tour: { label: "Walk through the product", href: "#" },
  emailLabel: "Work email",
  emailPlaceholder: "Enter your work email",
  submitLabel: "Open account",
  consent: "Send me product news and offers from Fernhold. I can opt out whenever I like.",
};

export default function Demo() {
  return <AirwallexHero {...heroSample} />;
}
