import { PlumeformV2Templates, type PlumeformV2TemplatesProps } from "./plumeform-v2-templates";

export const templatesSample: PlumeformV2TemplatesProps = {
  title: "Begin from a draft.",
  subtitle: "Then make it yours.",
  filters: [
    { label: "Popular", href: "#popular" },
    { label: "Customers", href: "#customers" },
    { label: "Teams & HR", href: "#teams" },
    { label: "Research", href: "#research" },
    { label: "Classes", href: "#classes" },
    { label: "Events", href: "#events" },
  ],
  templates: [
    { category: "Customers", name: "After-purchase check-in", detail: "7 questions · about 2 min", href: "#t1" },
    { category: "Research", name: "Concept test with feature pairs", detail: "12 questions · about 5 min", href: "#t2" },
    { category: "Teams & HR", name: "Quarterly team pulse", detail: "10 questions · about 3 min", href: "#t3" },
    { category: "Customers", name: "Loyalty score with a why", detail: "2 questions · under a minute", href: "#t4" },
    { category: "Events", name: "Day-after event feedback", detail: "8 questions · about 2 min", href: "#t5" },
    { category: "Classes", name: "End-of-term course review", detail: "11 questions · about 4 min", href: "#t6" },
  ],
  link: { label: "See every draft", href: "#drafts" },
};

export default function Demo() {
  return <PlumeformV2Templates {...templatesSample} />;
}
