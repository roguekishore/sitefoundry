// Sample content (gallery only); the page reuses it. Every company here is made up.
import type { ReactNode } from "react";
import { Anchor, Bird, Boxes, Feather, Hexagon, Leaf, Mountain, Waves } from "lucide-react";
import { GrowthbookV2Logos, type GrowthbookV2LogosProps } from "./growthbook-v2-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 whitespace-nowrap ${className ?? ""}`}>
      {icon}
      {children}
    </span>
  );
}

export const logoMarks = {
  tidepool: <Mark className="text-xl font-bold tracking-[-0.03em]" icon={<Waves strokeWidth={2.5} />}>tidepool</Mark>,
  marlow: <Mark className="font-mono text-xl tracking-[0.08em] uppercase">Marlow</Mark>,
  quarry: <Mark className="text-[1.375rem] font-semibold" icon={<Mountain strokeWidth={2.25} />}>Quarry</Mark>,
  oakline: <Mark className="text-2xl font-light tracking-[0.02em]" icon={<Leaf strokeWidth={1.75} />}>oakline</Mark>,
  heron: <Mark className="text-xl font-extrabold tracking-[-0.04em] uppercase">Heron&amp;Co</Mark>,
  pallet: <Mark className="text-xl font-semibold" icon={<Boxes strokeWidth={2.25} />}>Pallet</Mark>,
  quillon: <Mark className="text-2xl font-medium italic tracking-[-0.02em]" icon={<Feather strokeWidth={2} />}>quillon</Mark>,
  harbourly: <Mark className="text-xl font-bold" icon={<Anchor strokeWidth={2.5} />}>Harbourly</Mark>,
  sixsides: <Mark className="text-xl font-medium tracking-[0.04em]" icon={<Hexagon strokeWidth={2.25} />}>SIXSIDES</Mark>,
  wren: <Mark className="text-2xl font-black tracking-[-0.05em]" icon={<Bird strokeWidth={2.25} />}>wren</Mark>,
};

export const logosSample: GrowthbookV2LogosProps = {
  caption: "Chosen by 2,400+ product teams on five continents",
  logos: Object.entries(logoMarks).map(([name, logo]) => ({ name, logo })),
};

export default function Demo() {
  return <GrowthbookV2Logos {...logosSample} />;
}
