// Sample content lives here (gallery only); the page reuses it. All companies are made up.
import type { ReactNode } from "react";
import { Anchor, Feather, Gem, Infinity as Loop, Orbit, Package, Shapes } from "lucide-react";
import { ClerkLogos, type ClerkLogosProps } from "./clerk-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-2 text-foreground [&_svg]:size-6 ${className ?? ""}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

export const logosSample: ClerkLogosProps = {
  logos: [
    {
      name: "Quillbase",
      logo: (
        <Mark
          className="font-mono text-[0.9375rem] font-medium"
          icon={<span className="flex size-7 items-center justify-center rounded-[3px] bg-foreground font-sans text-sm font-bold text-card">Q</span>}
        >
          Quillbase
        </Mark>
      ),
    },
    { name: "halcyon", logo: <Mark className="font-display text-2xl font-bold tracking-[-0.03em]" icon={<Gem strokeWidth={2.5} />}>halcyon</Mark> },
    { name: "Orbitly", logo: <Mark className="font-display text-xl font-semibold" icon={<Orbit strokeWidth={2.25} />}>Orbitly</Mark> },
    { name: "ferrous", logo: <Mark className="text-2xl font-light tracking-[0.04em]">ferrous</Mark> },
    { name: "Kiteframe", logo: <Mark className="text-xl font-medium" icon={<Shapes strokeWidth={2} />}>Kiteframe</Mark> },
    { name: "brightloop", logo: <Mark className="font-display text-2xl font-extrabold tracking-[-0.05em]">brightloop</Mark> },
    { name: "Parcelry", logo: <Mark className="text-xl font-semibold" icon={<Package strokeWidth={2} />}>Parcelry</Mark> },
    { name: "Tandem", logo: <Mark className="font-mono text-lg tracking-[0.12em] uppercase" icon={<Loop strokeWidth={2.5} />}>Tandem</Mark> },
    { name: "mosaic", logo: <Mark className="text-2xl font-medium tracking-[-0.02em]" icon={<Feather strokeWidth={2} />}>mosaic</Mark> },
    { name: "Northpier", logo: <Mark className="text-xl font-bold" icon={<Anchor strokeWidth={2.25} />}>Northpier</Mark> },
  ],
};


export default function Demo() {
  return <ClerkLogos {...logosSample} />;
}
