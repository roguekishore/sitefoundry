import { Waves } from "lucide-react";
import { FunctionhealthCompare, type FunctionhealthCompareProps } from "./functionhealth-compare";

const labels = [
  "A written action plan",
  "Bring in old results",
  "No insurance needed",
  "Retested every 6 months",
  "Hormone & fertility panel",
  "Heavy metal & toxin panel",
  "Metabolic & pancreas panel",
  "Heart tests beyond cholesterol",
  "Nutrient & electrolyte panel",
  "Autoimmune panel",
  "Thyroid panel",
  "Add MRI & CT scans",
  "Add a multi-cancer screen",
  "Add brain-health testing",
  "Add mold-reactivity testing",
];

export const compareSample: FunctionhealthCompareProps = {
  title: [{ accent: "Not your usual " }, "checkup"],
  mark: (
    <span className="flex flex-col items-center gap-1 text-base font-light lg:flex-row lg:gap-2 lg:text-[1.375rem]">
      <Waves className="size-6" strokeWidth={1.5} aria-hidden />
      Tidewell
    </span>
  ),
  otherLabel: "Typical checkup",
  yesLabel: "Included",
  noLabel: "Not included",
  rows: [{ label: "Markers tested each year", ours: "140+", theirs: "~30" }, ...labels.map((label) => ({ label, ours: true, theirs: false }))],
};

export default function Demo() {
  return <FunctionhealthCompare {...compareSample} />;
}
