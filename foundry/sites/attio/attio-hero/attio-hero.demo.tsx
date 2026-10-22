// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { AttioHero, type AttioHeroProps } from "./attio-hero";

export const heroSample: AttioHeroProps = {
  news: { label: "Notes from our spring revenue summit", href: "#summit" },
  title: "Selling, on autopilot.",
  subtitle: "Tessel is the CRM whose agents find buyers, move deals forward and look after accounts while your team sleeps.",
  secondary: { label: "Book a walkthrough", href: "#walkthrough" },
  primary: { label: "Try it free", href: "#start" },
  form: { placeholder: "Work email", submitLabel: "Send me a tour" },
  mediaLabel: "The Tessel home screen",
};

export default function Demo() {
  return <AttioHero {...heroSample} />;
}
