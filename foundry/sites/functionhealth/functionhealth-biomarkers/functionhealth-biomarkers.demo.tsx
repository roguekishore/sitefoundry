import { Briefcase, Cloud, FileText, Stethoscope } from "lucide-react";
import { FunctionhealthBiomarkers, type FunctionhealthBiomarkersProps } from "./functionhealth-biomarkers";

export const biomarkersSample: FunctionhealthBiomarkersProps = {
  title: ["140+ tests ", { accent: "picked by senior clinicians" }],
  quote: {
    text: "“The most thorough panel I have recommended. Real depth, no shortcuts.”",
    name: "Dr. Elena Marsh",
    role: "Former hospital chief of medicine",
  },
  categories: [
    { title: "Hormones & thyroid", count: "16 markers", items: ["Free thyroxine", "Thyroid antibodies", "Total testosterone", "Ovarian reserve marker", "Thyroid-stimulating hormone"] },
    { title: "Cancer & other silent risks", count: "34 markers", items: ["Multi-cancer screen", "Prostate antigen, total", "Rheumatoid factor", "Mercury"] },
    { title: "Heart & metabolic", count: "18 markers", items: ["Small LDL particles", "Lipoprotein (a)", "Apolipoprotein B", "Omega-3 total", "Insulin"] },
    { title: "Aging", count: "34 markers", items: ["Sex hormone binding globulin", "DHEA sulfate", "Growth factor 1", "Homocysteine", "Vitamin D"] },
    { title: "Mental health & focus", count: "20 markers", items: ["Cortisol", "High-sensitivity CRP", "Iron", "Ferritin", "Methylmalonic acid (B12 proxy)"] },
  ],
  more: { kicker: "+More", title: "All-in-one lab testing", cta: { label: "See every test", href: "#tests" } },
  share: {
    title: ["Plus, take your results ", { accent: "anywhere" }],
    text: "Share them with your doctor or connect them to the tools you already use.",
    targets: [
      { label: "Your doctor", icon: <Stethoscope className="size-4" /> },
      { label: "Care team", icon: <Briefcase className="size-4" /> },
      { label: "Health vault", icon: <Cloud className="size-4" /> },
      { label: "Your files", icon: <FileText className="size-4" /> },
    ],
  },
};

export default function Demo() {
  return <FunctionhealthBiomarkers {...biomarkersSample} />;
}
