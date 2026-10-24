// Sample content (gallery only); the page reuses it. Every company here is made up.
import type { ReactNode } from "react";
import { Anchor, Box, Cloud, Feather, Flame, Hexagon, Leaf, Mountain, Orbit, Waves } from "lucide-react";
import { ResendLogos, type ResendLogosProps } from "./resend-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-2 [&_svg]:size-6 ${className ?? ""}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

export const logosSample: ResendLogosProps = {
  text: ["Teams from two-person studios to listed companies", "route their most important mail through Tern."],
  logos: [
    { name: "Northpier", logo: <Mark className="text-xl font-bold tracking-[0.06em] uppercase" icon={<Anchor strokeWidth={2.5} />}>Northpier</Mark> },
    { name: "zing", logo: <Mark className="font-display text-[1.75rem] font-extrabold tracking-[-0.06em]">zing</Mark> },
    { name: "Orbitly", logo: <Mark className="text-xl font-semibold" icon={<Orbit strokeWidth={2.25} />}>Orbitly</Mark> },
    { name: "CINDER LABS", logo: <Mark className="font-mono text-sm leading-tight tracking-[0.1em]" icon={<Flame strokeWidth={2} />}>CINDER<br />LABS</Mark> },
    { name: "boxwell", logo: <Mark className="font-mono text-2xl font-semibold" icon={<Box strokeWidth={2.5} />}>boxwell</Mark> },
    { name: "tidal", logo: <Mark className="text-2xl font-medium" icon={<Waves strokeWidth={2} />}>tidal</Mark> },
    { name: "fernway", logo: <Mark className="font-display text-[1.75rem] font-bold tracking-[-0.03em]">fernway</Mark> },
    { name: "SUMMITCO", logo: <Mark className="text-xl font-black tracking-[-0.02em] italic" icon={<Mountain strokeWidth={2.5} />}>SUMMITCO</Mark> },
    { name: "hexa", logo: <Mark className="text-2xl font-bold" icon={<Hexagon strokeWidth={2.5} />}>hexa</Mark> },
    { name: "Quill", logo: <Mark className="text-2xl font-semibold" icon={<Feather strokeWidth={2} />}>Quill</Mark> },
    { name: "Cirrus", logo: <Mark className="text-2xl font-medium" icon={<Cloud strokeWidth={2} />}>Cirrus</Mark> },
    { name: "Sprout", logo: <Mark className="text-2xl font-semibold" icon={<Leaf strokeWidth={2} />}>Sprout</Mark> },
  ],
  link: { label: "See Tern for large teams", href: "#scale" },
};


export default function Demo() {
  return <ResendLogos {...logosSample} />;
}
