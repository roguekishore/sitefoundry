// All companies are made up.
import type { ReactNode } from "react";
import { Bird, Hexagon, Mountain, Waves } from "lucide-react";
import type { CursorLogosProps } from "./cursor-logos";
import { CursorLogos } from "./cursor-logos";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 whitespace-nowrap text-foreground [&_svg]:size-[1.1em] ${className ?? ""}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

export const logosSample: CursorLogosProps = {
  caption: "Relied on daily by teams that build careful, world-class software",
  logos: [
    { name: "pallet", logo: <Mark className="text-[0.95rem] font-extrabold tracking-[-0.04em] lg:text-2xl">pallet</Mark> },
    { name: "HARBORLY", logo: <Mark className="text-[0.6rem] font-semibold tracking-[0.08em] lg:text-[0.9rem]" icon={<Waves strokeWidth={2.5} />}>HARBORLY</Mark> },
    { name: "Ridgeway", logo: <Mark className="text-[0.85rem] font-medium lg:text-[1.35rem]" icon={<Mountain strokeWidth={2.25} />}>Ridgeway</Mark> },
    { name: "VOLTA", logo: <Mark className="text-[0.75rem] font-black tracking-[0.06em] italic lg:text-[1.15rem]">VOLTA</Mark> },
    { name: "Inkwell", logo: <Mark className="font-mono text-[0.75rem] lg:text-[1.15rem]">Inkwell</Mark> },
    { name: "swift&co", logo: <Mark className="text-[0.85rem] font-medium lg:text-[1.35rem]" icon={<Bird strokeWidth={2.25} />}>swift&amp;co</Mark> },
    { name: "CELLAR", logo: <Mark className="text-[0.55rem] font-semibold tracking-[0.22em] lg:text-[0.85rem]" icon={<Hexagon strokeWidth={2.5} />}>CELLAR</Mark> },
    { name: "Northloom", logo: <Mark className="text-[0.85rem] font-bold tracking-[-0.03em] lg:text-[1.3rem]">Northloom</Mark> },
  ],
};

export default function Demo() {
  return <CursorLogos {...logosSample} />;
}
