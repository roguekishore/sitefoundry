// Sample content (gallery only); the page reuses it. All companies are made up.
import type { ReactNode } from "react";
import { Anchor, Boxes, Feather, Hexagon, Orbit, Rocket, Sprout, Waves } from "lucide-react";
import { WarpLogos, type WarpLogosProps } from "./warp-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-2 whitespace-nowrap [&_svg]:size-5 ${className ?? ""}`}>
      {icon}
      {children}
    </span>
  );
}

export const logosSample: WarpLogosProps = {
  caption: (
    <>
      relied on by 600k+ engineers at
    </>
  ),
  logos: [
    { name: "Kettleby", logo: <Mark className="font-display text-xl font-semibold tracking-[-0.03em]">kettleby</Mark> },
    { name: "Northpier", logo: <Mark className="font-sans text-lg font-semibold tracking-[0.14em] uppercase" icon={<Anchor strokeWidth={2.5} />}>Northpier</Mark> },
    { name: "Orbitly", logo: <Mark className="font-display text-xl font-bold" icon={<Orbit strokeWidth={2.25} />}>Orbitly</Mark> },
    { name: "Tidewell", logo: <Mark className="font-display text-sm font-medium tracking-[0.2em] uppercase" icon={<Waves strokeWidth={2} />}>Tidewell</Mark> },
    { name: "Hexfield", logo: <Mark className="font-display text-sm font-semibold tracking-[0.1em] uppercase" icon={<Hexagon strokeWidth={2.5} />}>Hexfield</Mark> },
    { name: "BRAMBLE", logo: <Mark className="font-display text-2xl font-extrabold tracking-[0.02em] uppercase">Bramble</Mark> },
    { name: "Quillstack", logo: <Mark className="font-display text-xl font-semibold tracking-[-0.02em]">Quillstack</Mark> },
    { name: "Parcelry", logo: <Mark className="font-display text-lg font-semibold" icon={<Boxes strokeWidth={2} />}>parcelry</Mark> },
    { name: "Fernway", logo: <Mark className="font-display text-xl font-medium italic" icon={<Feather strokeWidth={2} />}>Fernway</Mark> },
    { name: "Sproutly", logo: <Mark className="font-display text-xl font-bold tracking-[-0.04em]" icon={<Sprout strokeWidth={2.5} />}>sproutly</Mark> },
    { name: "Liftoff Labs", logo: <Mark className="font-sans text-base font-medium" icon={<Rocket strokeWidth={2} />}>Liftoff Labs</Mark> },
  ],
};

export default function Demo() {
  return <WarpLogos {...logosSample} />;
}
