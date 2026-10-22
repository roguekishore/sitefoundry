// Sample content lives here (gallery only); the page reuses it. All companies are made up.
import type { ReactNode } from "react";
import { Hexagon, Triangle, Waves, Zap } from "lucide-react";
import { LinearLogos, type LinearLogosProps } from "./linear-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 whitespace-nowrap ${className ?? ""}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

export const logosSample: LinearLogosProps = {
  logos: [
    { name: "Northvale", logo: <Mark className="font-display text-xl lg:text-2xl font-bold tracking-[-0.03em]">Northvale</Mark> },
    { name: "Prism", logo: <Mark className="font-display text-xl lg:text-2xl font-semibold" icon={<Triangle className="fill-current" strokeWidth={0} />}>Prism</Mark> },
    { name: "loomwork", logo: <Mark className="text-lg lg:text-[1.375rem] font-medium tracking-[-0.01em]">loomwork</Mark> },
    { name: "Tidewell", logo: <Mark className="text-xl lg:text-2xl font-light" icon={<Waves strokeWidth={2} />}>Tidewell</Mark> },
    { name: "HEXAPOD", logo: <Mark className="font-mono text-base lg:text-lg font-medium tracking-[0.08em]" icon={<Hexagon strokeWidth={2.25} />}>HEXAPOD</Mark> },
    { name: "quanta", logo: <Mark className="font-display text-xl lg:text-2xl font-bold tracking-[-0.04em]">quanta</Mark> },
    { name: "Sparkline", logo: <Mark className="text-lg lg:text-[1.375rem] font-semibold" icon={<Zap strokeWidth={2.25} />}>Sparkline</Mark> },
  ],
  caption: "Trusted by the teams shaping what comes next",
};

export default function Demo() {
  return <LinearLogos {...logosSample} />;
}
