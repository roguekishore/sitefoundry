// Sample content (gallery only); all companies are made up, set as plain styled text.
import type { ReactNode } from "react";
import { ModerntreasuryLogos, type ModerntreasuryLogosProps } from "./moderntreasury-logos";

const Word = ({ className, children }: { className: string; children: ReactNode }) => <span className={className}>{children}</span>;

export const logosSample: ModerntreasuryLogosProps = {
  logos: [
    { name: "tallyhaus", logo: <Word className="text-[1.625rem] font-bold tracking-[-0.04em] italic">tallyhaus</Word> },
    { name: "Ferncastle", logo: <Word className="text-xl font-medium tracking-[0.12em] uppercase">Ferncastle</Word> },
    { name: "orbitpay", logo: <Word className="text-2xl font-light tracking-[0.04em]">orbitpay</Word> },
    { name: "Quaymark", logo: <Word className="font-mono text-xl font-semibold">Quaymark</Word> },
    { name: "plinth", logo: <Word className="text-[1.75rem] font-extrabold tracking-[-0.05em]">plinth</Word> },
    { name: "Harbor & Vine", logo: <Word className="text-xl font-semibold">Harbor &amp; Vine</Word> },
    { name: "LUMEN", logo: <Word className="text-lg font-bold tracking-[0.3em]">LUMEN</Word> },
    { name: "mintwell", logo: <Word className="text-2xl font-medium tracking-[-0.02em]">mintwell</Word> },
    { name: "Coastal Ledger", logo: <Word className="text-xl font-normal">Coastal Ledger</Word> },
  ],
};

export default function Demo() {
  return <ModerntreasuryLogos {...logosSample} />;
}
