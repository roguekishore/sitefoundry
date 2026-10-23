import { PlaidHero, type PlaidHeroProps } from "./plaid-hero";

export const heroSample: PlaidHeroProps = {
  title: "Make live account data the core of your product",
  subtitle: "Tap live signals from the Halyard Network to ship money experiences that are quick, safe and sensible.",
  primary: { label: "Speak with sales", href: "#" },
  secondary: { label: "Get an API key", href: "#" },
  logos: ["Fernbank", "Ostra", "Pebblepay", "Juniper & Co", "Lumen Credit", "Harborline", "Tidewell", "Mosaic Loans"],
  announcement: { label: "Autumn release: new risk models and faster payouts", href: "#" },
};

export default function Demo() {
  return <PlaidHero {...heroSample} />;
}
