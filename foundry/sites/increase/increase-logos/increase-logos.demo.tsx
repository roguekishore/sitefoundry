// Sample content lives here (gallery only); the page reuses it. All companies are made up.
import type { ReactNode } from "react";
import { Bird, Hexagon, Infinity as Loop, Sprout, Waves } from "lucide-react";
import { IncreaseLogos, type IncreaseLogosProps } from "./increase-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 whitespace-nowrap text-foreground [&_svg]:size-5 ${className ?? ""}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

export const logosSample: IncreaseLogosProps = {
  logos: [
    { name: "Swiftly", logo: <Mark className="text-[1.375rem] font-semibold tracking-[-0.03em]" icon={<Bird strokeWidth={2.5} />}>swiftly</Mark> },
    { name: "Ferrule", logo: <Mark className="text-[1.375rem] font-extrabold tracking-[-0.04em]" icon={<Loop strokeWidth={3} />}>ferrule</Mark> },
    { name: "Greenrow", logo: <Mark className="font-display text-2xl font-bold italic tracking-[-0.03em]">Greenrow</Mark> },
    { name: "Talon", logo: <Mark className="text-xl font-medium tracking-[0.28em] uppercase">Talon</Mark> },
    { name: "Ledgerfield", logo: <Mark className="text-[1.375rem] font-normal">Ledgerfield</Mark> },
    { name: "Orvo", logo: <Mark className="text-[1.375rem] font-light" icon={<Hexagon strokeWidth={2} />}>Orvo</Mark> },
    { name: "tidepool", logo: <Mark className="text-[1.375rem] font-bold tracking-[-0.04em]" icon={<Waves strokeWidth={2.5} />}>tidepool</Mark> },
    { name: "Sproutly", logo: <Mark className="text-2xl font-black italic tracking-[-0.05em]" icon={<Sprout strokeWidth={2.5} />}>sproutly</Mark> },
  ],
};

export default function Demo() {
  return <IncreaseLogos {...logosSample} />;
}
