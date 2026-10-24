import type { ParsleyhealthCompareProps } from "./parsleyhealth-compare";
import { ParsleyhealthCompare } from "./parsleyhealth-compare";

export const compareSample: ParsleyhealthCompareProps = {
  eyebrow: "Side by side",
  title: "More from a doctor than you were told to expect",
  rivals: ["Family Doctor", "Wellness Clinic", "Private Practice"],
  ours: "Halden Health",
  yesLabel: "Yes",
  noLabel: "No",
  rows: [
    { label: "Looks for the cause", rivals: [false, true, "Sometimes"], ours: true },
    { label: "Takes insurance", rivals: [true, "Seldom", false], ours: true },
    { label: "What you pay", rivals: ["Copays", "$$$ cash", "$$$$ retainer"], ours: "From $140/ month" },
    { label: "One team for you", rivals: [false, "Sometimes", "Sometimes"], ours: true },
    { label: "Measures progress", rivals: [false, false, false], ours: true },
  ],
};

export default function Demo() {
  return <ParsleyhealthCompare {...compareSample} />;
}
