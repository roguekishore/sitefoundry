// Sample content lives here (gallery only); the page reuses it. Every company is made up.
import type { ReactNode } from "react";
import { Anchor, Bird, Feather, Hexagon, Leaf, Orbit } from "lucide-react";
import { SupabaseLogos, type SupabaseLogosProps } from "./supabase-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 ${className ?? ""}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

export const logosSample: SupabaseLogosProps = {
  label: "Chosen by quick-moving teams on every continent",
  logos: [
    { name: "Sundew", logo: <Mark className="font-display text-2xl font-extrabold tracking-[-0.04em]" icon={<Leaf strokeWidth={2.75} />}>Sundew</Mark> },
    { name: "parlour", logo: <Mark className="font-mono text-lg font-semibold">parlour</Mark> },
    { name: "KRT", logo: <Mark className="font-display text-xl font-bold italic">krt</Mark> },
    { name: "Orbitle", logo: <Mark className="text-2xl font-normal" icon={<Orbit strokeWidth={2} />}>Orbitle</Mark> },
    { name: "HEXA", logo: <Mark className="font-display text-xl font-extrabold tracking-[0.12em]" icon={<Hexagon strokeWidth={2.5} />}>HEXA</Mark> },
    { name: "quill", logo: <Mark className="font-display text-2xl font-extrabold italic tracking-[-0.05em]">quill</Mark> },
    { name: "Northpier", logo: <Mark className="text-lg font-bold" icon={<Anchor strokeWidth={2.5} />}>Northpier</Mark> },
    { name: "loomwise", logo: <Mark className="text-base font-medium">loomwise</Mark> },
    { name: "Wrenfield", logo: <Mark className="text-base font-bold" icon={<Bird strokeWidth={2.5} />}>Wrenfield</Mark> },
    { name: "Mintlane", logo: <Mark className="text-lg font-bold">Mintlane</Mark> },
    { name: "Featherly", logo: <Mark className="text-base font-normal" icon={<Feather strokeWidth={2} />}>Featherly</Mark> },
    { name: "1Ledger", logo: <Mark className="text-base font-bold tracking-[-0.02em]">1Ledger</Mark> },
  ],
};

export default function Demo() {
  return <SupabaseLogos {...logosSample} className="py-10" />;
}
