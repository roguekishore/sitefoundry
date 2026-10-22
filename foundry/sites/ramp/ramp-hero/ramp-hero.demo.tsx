// Sample content lives here (gallery only); the page reuses it. All figures are made up.
import { RampHero, type RampHeroProps } from "./ramp-hero";

export const heroSample: RampHeroProps = {
  eyebrow: "Share of mid-market payroll run on Kestrel:",
  counter: { start: 0.6183407, step: 0.0000006, decimals: 7, suffix: "%", every: 1200 },
  title: "Less admin. More runway.",
  subtitle: "Cards, bills, payroll and books, closed by agents before you ask.",
  form: { fieldLabel: "Work email", placeholder: "Your work email", buttonLabel: "Start for free" },
};

export default function Demo() {
  return <RampHero {...heroSample} />;
}
