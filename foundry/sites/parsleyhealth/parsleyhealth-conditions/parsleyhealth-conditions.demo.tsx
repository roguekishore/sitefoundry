import type { ParsleyhealthConditionsProps } from "./parsleyhealth-conditions";
import { ParsleyhealthConditions } from "./parsleyhealth-conditions";

export const conditionsSample: ParsleyhealthConditionsProps = {
  title: "We look for the cause of long-running conditions",
  action: { label: "Browse conditions", href: "#" },
  prevLabel: "Previous conditions",
  nextLabel: "More conditions",
  items: [
    {
      title: "Digestion & Gut",
      text: "Bloating, reflux, IBS, overgrowth, food reactions, irregularity, cramping after meals",
      link: { label: "Gut care at Halden", href: "#" },
    },
    {
      title: "Hormones & Cycles",
      text: "Low energy, weight shifts, painful or irregular cycles, skin flares, thinning hair, PCOS",
      link: { label: "Hormone care", href: "#" },
    },
    {
      title: "Immune & Inflammation",
      text: "Thyroid conditions, joint pain, psoriasis, eczema, recurring flares, slow recovery",
      link: { label: "Immune care", href: "#" },
    },
    {
      title: "Sleep & Stress",
      text: "Waking at night, racing mind, burnout, afternoon crashes, low mood, brain fog",
      link: { label: "Sleep care", href: "#" },
    },
    {
      title: "Heart & Metabolism",
      text: "High cholesterol, blood sugar swings, blood pressure, family history, cravings",
      link: { label: "Metabolic care", href: "#" },
    },
  ],
};

export default function Demo() {
  return <ParsleyhealthConditions {...conditionsSample} />;
}
