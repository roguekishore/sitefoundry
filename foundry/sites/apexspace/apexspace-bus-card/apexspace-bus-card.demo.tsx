// Sample content lives here (gallery only); apexspace-platforms reuses it.
import { Weight, Zap } from "lucide-react";
import { ApexspaceBusCard, type ApexspaceBusCardProps } from "./apexspace-bus-card";

export const busCardSamples: ApexspaceBusCardProps[] = [
  {
    name: "Wren",
    tone: 1,
    tags: [
      { label: "LEO", state: "standard" },
      { label: "MEO", state: "off" },
      { label: "GEO", state: "option", tone: 4 },
    ],
    stats: [
      { label: "Payload mass", icon: <Weight strokeWidth={1.25} />, prefix: "Up\nto", value: "120", unit: "KG", note: "90 kg on a shared rideshare slot" },
      { label: "Payload power", icon: <Zap strokeWidth={1.25} />, value: "160+", unit: "W", note: "End-of-life power over 5 years" },
    ],
    cta: { label: "See the bus", href: "#" },
  },
  {
    name: "Heron",
    tone: 2,
    tags: [
      { label: "LEO", state: "standard" },
      { label: "MEO", state: "off" },
      { label: "GEO", state: "off" },
    ],
    stats: [
      { label: "Payload mass", icon: <Weight strokeWidth={1.25} />, value: "280+", unit: "KG", note: "More mass on a dedicated launch, with a stiffer adapter ring" },
      { label: "Payload power", icon: <Zap strokeWidth={1.25} />, value: "1.2", unit: "kW", note: "End-of-life power over 7 years" },
    ],
    cta: { label: "See the bus", href: "#" },
  },
  {
    name: "Condor",
    tone: 3,
    tags: [
      { label: "Std", state: "standard" },
      { label: "Max", state: "option" },
    ],
    stats: [
      { label: "Payload mass", icon: <Weight strokeWidth={1.25} />, value: "2,500+", unit: "KG", note: "Several launch set-ups through our mission team" },
      { label: "Payload power", icon: <Zap strokeWidth={1.25} />, value: "6", unit: "kW", note: "15 kW peak for short payload bursts" },
    ],
    cta: { label: "See the bus", href: "#" },
  },
];

export default function Demo() {
  return (
    <div className="bg-card p-8">
      <ApexspaceBusCard {...busCardSamples[0]} className="max-w-[29rem]" />
    </div>
  );
}
