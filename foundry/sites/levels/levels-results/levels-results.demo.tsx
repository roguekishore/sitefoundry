import { LevelsResults, type LevelsResultsProps } from "./levels-results";

export const resultsSample: LevelsResultsProps = {
  id: "results",
  eyebrow: "What members see",
  title: "Not more numbers. Real change.",
  lead: "Ballast helps people shift their habits in ways that show up in the markers that count.",
  evidence: {
    eyebrow: "Our research",
    text: "Ballast also runs one of the broadest long-term glucose studies of people without diabetes, filling in the baseline data the field has long been missing.",
    links: [
      { label: "Read the marker report", href: "#" },
      { label: "About the study", href: "#" },
    ],
  },
  stats: [
    { value: "78%", label: "lowered their HbA1c", body: "Of members who joined in the prediabetes range, most brought it down and many left the range." },
    { value: "74%", label: "improved fasting insulin", body: "Members with insulin resistance often saw clear gains from months of steady changes." },
    { value: "82%", label: "cut their triglycerides", body: "For members who started high, triglycerides fell markedly in most cases." },
  ],
  footnote: "From a look back at Ballast member data. Not a clinical trial. Your results may differ.",
};

export default function Demo() {
  return <LevelsResults {...resultsSample} />;
}
