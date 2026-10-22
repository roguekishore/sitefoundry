// Sample content (gallery only); the page reuses it.
import { Dna, Droplet, FlaskConical, HeartPulse, Microscope, Pill, ScanLine, Stethoscope, Syringe, TestTube } from "lucide-react";
import { BevelRecords, type BevelRecordsProps } from "./bevel-records";

export const recordsSample: BevelRecordsProps = {
  title: "Bring your lab work home",
  text: "Labs, doctor's notes and scans, kept together and private.",
  tiles: [
    <FlaskConical key="a" className="text-chart-3" strokeWidth={2} />,
    <TestTube key="b" className="text-destructive" strokeWidth={2} />,
    <Droplet key="c" className="text-chart-5" strokeWidth={2} />,
    <Microscope key="d" className="text-chart-3" strokeWidth={2} />,
    <Dna key="e" className="text-glow" strokeWidth={2} />,
    <Stethoscope key="f" className="text-chart-3" strokeWidth={2} />,
    <HeartPulse key="g" className="text-destructive" strokeWidth={2} />,
    <Pill key="h" className="text-glow" strokeWidth={2} />,
    <ScanLine key="i" className="text-chart-2" strokeWidth={2} />,
    <Syringe key="j" className="text-chart-1" strokeWidth={2} />,
  ],
};

export default function Demo() {
  return <BevelRecords {...recordsSample} />;
}
