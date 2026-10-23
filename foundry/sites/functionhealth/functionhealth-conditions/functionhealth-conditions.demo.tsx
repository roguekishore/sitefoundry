import { FunctionhealthConditions, type FunctionhealthConditionsProps } from "./functionhealth-conditions";

export const conditionsSample: FunctionhealthConditionsProps = {
  title: ["Watch the early signs of ", { accent: "hundreds of conditions" }],
  benefits: ["Set your personal baseline", "Followed for years", "See how you shift over time"],
  rowOne: ["Anemia", "Gout", "Celiac disease", "Insulin resistance", "Fatty liver", "Pancreatic issues", "Sickle cell trait", "Dry-eye syndrome", "Diabetes", "Lupus"],
  rowTwo: ["Low thyroid", "Lead exposure", "Hormone imbalance", "Kidney decline", "Iron overload", "Vitamin gaps", "Prostate changes", "Heart risk", "Joint inflammation", "Liver strain"],
  pauseLabel: "Pause motion",
  playLabel: "Play motion",
};

export default function Demo() {
  return <FunctionhealthConditions {...conditionsSample} />;
}
