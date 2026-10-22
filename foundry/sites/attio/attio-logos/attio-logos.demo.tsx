// Sample content lives here (gallery only); the page reuses it. All companies are made up.
import type { ReactNode } from "react";
import { Anchor, AudioLines, Feather, Flame, Orbit, Sprout } from "lucide-react";
import { AttioLogos, type AttioLogosProps } from "./attio-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 text-foreground [&_svg]:!size-6 ${className ?? ""}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

export const logosSample: AttioLogosProps = {
  logos: [
    { name: "Pollen", href: "#pollen", logo: <Mark className="font-display text-[1.375rem] font-semibold tracking-[-0.04em]" icon={<Sprout strokeWidth={2.5} />}>pollen</Mark> },
    { name: "fieldcache", logo: <Mark className="font-mono text-[1.0625rem] font-medium tracking-[0.02em]">fieldcache</Mark> },
    { name: "Meridio", logo: <Mark className="font-display text-xl font-extrabold tracking-[-0.03em]" icon={<Orbit strokeWidth={2.5} />}>meridio</Mark> },
    { name: "Kestrel", href: "#kestrel", logo: <Mark className="text-[1.375rem] font-medium tracking-[-0.02em]" icon={<Feather strokeWidth={2} />}>Kestrel</Mark> },
    { name: "Hum Notes", logo: <Mark className="text-xl font-semibold tracking-[-0.03em]" icon={<AudioLines strokeWidth={2.25} />}>Hum Notes</Mark> },
    { name: "Harbourline", href: "#harbourline", logo: <Mark className="text-[1.3125rem] font-bold tracking-[-0.02em]" icon={<Anchor strokeWidth={2.5} />}>Harbourline</Mark> },
    { name: "Ember", logo: <Mark className="text-2xl font-normal tracking-[-0.03em]" icon={<Flame strokeWidth={2} />}>Ember</Mark> },
    { name: "parcelo", href: "#parcelo", logo: <Mark className="font-display text-[1.375rem] font-medium tracking-[-0.05em]">parcelo</Mark> },
    { name: "OKTAV", logo: <Mark className="font-[family-name:var(--attio-serif,var(--typeface-display))] text-[1.625rem] tracking-[-0.02em]">OKTAV</Mark> },
    { name: "LONGHAND", logo: <Mark className="text-lg font-bold tracking-[0.02em]">LONGHAND</Mark> },
  ],
};

export default function Demo() {
  return <AttioLogos {...logosSample} />;
}
