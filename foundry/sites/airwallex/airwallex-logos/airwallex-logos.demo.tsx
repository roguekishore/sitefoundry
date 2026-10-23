// Sample content lives here (gallery only); the page reuses it. All companies are made up.
import type { ReactNode } from "react";
import { Anchor, Bike, Flame, Mountain, Shell, Sun } from "lucide-react";
import { AirwallexLogos, type AirwallexLogosProps } from "./airwallex-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 [&_svg]:size-6 ${className ?? ""}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

export const logosSample: AirwallexLogosProps = {
  title: "Chosen by more than 410,000 companies, on their own or through the platforms they use",
  logos: [
    { name: "Corbel", logo: <Mark className="font-display text-2xl italic">Corbel</Mark> },
    { name: "Velocette", logo: <Mark className="text-xl font-black tracking-[-0.04em] uppercase italic">Velocette</Mark> },
    { name: "Harbourline", logo: <Mark className="text-lg font-bold uppercase" icon={<Anchor strokeWidth={2.5} />}>Harbourline</Mark> },
    { name: "Ridgeway", logo: <Mark className="text-xl font-semibold" icon={<Mountain strokeWidth={2.5} />}>Ridgeway</Mark> },
    { name: "Solstead", logo: <Mark className="font-mono text-lg tracking-[0.1em] uppercase" icon={<Sun strokeWidth={2} />}>Solstead</Mark> },
    { name: "Kiln & Co", logo: <Mark className="text-xl font-medium" icon={<Flame strokeWidth={2.25} />}>Kiln &amp; Co</Mark> },
    { name: "Spokehouse", logo: <Mark className="text-xl font-bold tracking-[-0.02em]" icon={<Bike strokeWidth={2.25} />}>Spokehouse</Mark> },
    { name: "Tidepool", logo: <Mark className="text-xl font-light tracking-[0.04em]" icon={<Shell strokeWidth={2} />}>tidepool</Mark> },
  ],
};

export default function Demo() {
  return <AirwallexLogos {...logosSample} />;
}
