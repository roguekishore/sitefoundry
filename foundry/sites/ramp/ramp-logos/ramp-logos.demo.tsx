// Sample content lives here (gallery only); the page reuses it. Every company is made up.
import type { ReactNode } from "react";
import { Hexagon } from "lucide-react";
import { RampLogos, type RampLogosProps } from "./ramp-logos";

function Word({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={`text-center text-[0.9375rem] leading-none sm:text-lg lg:text-xl ${className ?? ""}`}>{children}</span>;
}

export const logosSample: RampLogosProps = {
  lead: "Trusted by 60,000 teams",
  rest: "that grow faster than the rest of their field.",
  link: { label: "Read the field study", href: "#" },
  logos: [
    { name: "NORTHWIND", logo: <Word className="font-bold tracking-[0.04em] italic">NORTHWIND</Word> },
    { name: "halden & co", logo: <Word className="font-mono text-base">halden &amp; co</Word>, href: "#" },
    { name: "pellucid", logo: <Word className="font-semibold">pellucid</Word> },
    { name: "Brightmoor", logo: <Word className="font-light tracking-[-0.02em]">Brightmoor</Word>, href: "#" },
    { name: "CORVID", logo: <Word className="font-semibold tracking-[0.18em]">CORVID</Word> },
    { name: "TSL", logo: <Word className="text-2xl font-black">TSL</Word> },
    { name: "Marlow", logo: <Word className="font-bold">Marlow</Word> },
    { name: "juniper", logo: <Word className="font-display text-2xl font-semibold">juniper</Word> },
    { name: "Orchard Row", logo: <Word className="italic">Orchard Row</Word>, href: "#" },
    { name: "Fathom.", logo: <Word className="font-semibold italic">Fathom.</Word>, href: "#" },
    { name: "QUARRY", logo: <Word className="text-sm tracking-[0.3em]">QUARRY</Word> },
    { name: "sundial", logo: <Word className="font-bold">sundial</Word> },
  ],
  story: {
    label: (
      <>
        <Hexagon aria-hidden strokeWidth={2} /> Halden &amp; Co
      </>
    ),
    stat: "$2.4M",
    caption: "back from duplicate vendor spend",
    href: "#",
  },
};

export default function Demo() {
  return <RampLogos {...logosSample} />;
}
