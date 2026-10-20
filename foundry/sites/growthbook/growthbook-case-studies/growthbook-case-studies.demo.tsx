// Sample content (gallery only); the page reuses it. All companies and results are made up.
import type { ReactNode } from "react";
import { Box, Hexagon, Mountain, Waves } from "lucide-react";
import { GrowthbookCaseStudies, type GrowthbookCaseStudiesProps } from "./growthbook-case-studies";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-2 whitespace-nowrap [&_svg]:size-7 ${className ?? ""}`}>
      {icon}
      {children}
    </span>
  );
}

const read = { label: "Read how", href: "#" };

export const caseStudiesSample: GrowthbookCaseStudiesProps = {
  title: ["Teams already", "learning faster", "with Northvane"],
  cta: { label: "More customer stories", href: "#" },
  carouselLabel: "Customer stories",
  stories: [
    { name: "Peakline", logo: <Mark className="text-[1.75rem] font-bold" icon={<Mountain strokeWidth={2.5} />}>Peakline</Mark>, story: "How Peakline tested its way from a side project to a 40-person company", figure: "12% to 31%", figureLabel: "trial-to-paid", link: read },
    { name: "Boxwell", logo: <Mark className="text-[1.75rem] font-bold" icon={<Box strokeWidth={2.5} />}>Boxwell</Mark>, story: "Boxwell rolls out every checkout change behind a flag", figure: "2 billion", figureLabel: "flag checks a day", link: read },
    { name: "Ottergrove", logo: <Mark className="font-serif text-[1.75rem] tracking-[0.12em] uppercase">Ottergrove</Mark>, story: "How Ottergrove's library runs tests for 9M+ monthly readers", figure: "+24%", figureLabel: "new memberships", link: read },
    { name: "Tidewater", logo: <Mark className="text-[1.75rem] font-semibold" icon={<Waves strokeWidth={2.25} />}>Tidewater</Mark>, story: "Tidewater uses Northvane to tune its route planner", figure: "+7.4%", figureLabel: "on-time arrivals", link: read },
    { name: "Hexly", logo: <Mark className="text-[1.75rem] font-extrabold tracking-[-0.04em]" icon={<Hexagon strokeWidth={2.5} />}>hexly</Mark>, story: "Hexly checks every model update against a holdout first", figure: "3x", figureLabel: "faster releases", link: read },
  ],
};

export default function Demo() {
  return <GrowthbookCaseStudies {...caseStudiesSample} />;
}
