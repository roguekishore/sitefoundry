// Sample content (gallery only); the page reuses it. All companies are made up.
import type { ReactNode } from "react";
import { Anchor, Bird, Box, Hexagon, Leaf, Mountain, Sparkle, Waves } from "lucide-react";
import { GrowthbookLogos, type GrowthbookLogosProps } from "./growthbook-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 whitespace-nowrap [&_svg]:size-6 ${className ?? ""}`}>
      {icon}
      {children}
    </span>
  );
}

export const logosSample: GrowthbookLogosProps = {
  caption: "Chosen by 2,400+ product teams on five continents",
  logos: [
    { name: "Lumora", logo: <Mark className="font-serif text-[1.625rem] tracking-[0.02em]">lumora</Mark> },
    { name: "Peakline", logo: <Mark className="text-xl font-bold" icon={<Mountain strokeWidth={2.5} />}>Peakline</Mark> },
    { name: "Ottergrove", logo: <Mark className="font-serif text-2xl tracking-[0.12em] uppercase">Ottergrove</Mark> },
    { name: "Swiftpost", logo: <Mark className="text-xl font-semibold" icon={<Bird strokeWidth={2.25} />}>Swiftpost</Mark> },
    { name: "Fernwork", logo: <Mark className="font-serif text-2xl font-semibold">Fernwork</Mark> },
    { name: "Boxwell", logo: <Mark className="text-xl font-bold" icon={<Box strokeWidth={2.5} />}>Boxwell</Mark> },
    { name: "Tidewater", logo: <Mark className="text-xl font-semibold" icon={<Waves strokeWidth={2.25} />}>Tidewater</Mark> },
    { name: "Hexly", logo: <Mark className="text-2xl font-extrabold tracking-[-0.04em]" icon={<Hexagon strokeWidth={2.5} />}>hexly</Mark> },
    { name: "Greenmoor", logo: <Mark className="text-xl font-medium" icon={<Leaf strokeWidth={2.25} />}>Greenmoor</Mark> },
    { name: "Harbourly", logo: <Mark className="text-xl font-bold" icon={<Anchor strokeWidth={2.5} />}>Harbourly</Mark> },
    { name: "Starling AI", logo: <Mark className="text-xl font-semibold" icon={<Sparkle strokeWidth={2.25} />}>Starling AI</Mark> },
  ],
};

export default function Demo() {
  return <GrowthbookLogos {...logosSample} />;
}
