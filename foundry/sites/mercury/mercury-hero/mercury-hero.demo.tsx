// Sample content lives here (gallery only); the page reuses it.
import { MercuryHero, type MercuryHeroProps } from "./mercury-hero";

export const heroSample: MercuryHeroProps = {
  title: "Banking, minus the busywork",
  text: "Open an account in an afternoon and run your company's money from one quiet, capable place.",
  email: { placeholder: "Work email", label: "Work email" },
  submit: "Open an account",
  secondary: { label: "Take the tour", href: "#" },
  disclaimer: "Larkspur is a fictional company made for this design sample. It is not a bank and holds no deposits. Every number on this page is invented.",
};

export default function Demo() {
  return <MercuryHero {...heroSample} />;
}
