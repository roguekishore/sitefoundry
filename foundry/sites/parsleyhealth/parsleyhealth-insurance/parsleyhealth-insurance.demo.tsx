import type { ParsleyhealthInsuranceProps } from "./parsleyhealth-insurance";
import { ParsleyhealthInsurance } from "./parsleyhealth-insurance";

export const insuranceSample: ParsleyhealthInsuranceProps = {
  eyebrow: "Covered care",
  title: "Root-cause medicine, now on your insurance card.",
  body: [
    "Halden takes most major plans in every state, so membership begins at $140 a month with your coverage applied.",
    "No large upfront program fee and no months-long waitlist. Meet your physician this week, from wherever you are.",
  ],
  primary: { label: "See if I'm covered", href: "#" },
  secondary: { label: "How coverage works", href: "#" },
  insurers: [
    { name: "Meridian", style: "sans" },
    { name: "Lakeshore", style: "serif" },
    { name: "Corvane", style: "serif" },
    { name: "Haverly", style: "sans" },
    { name: "Bellstar", style: "italic" },
    { name: "Ostwick", style: "serif" },
    { name: "PineCrest", style: "sans" },
    { name: "Solano", style: "italic" },
  ],
};

export default function Demo() {
  return <ParsleyhealthInsurance {...insuranceSample} />;
}
