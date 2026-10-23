// Sample content lives here (gallery only); the page reuses it. Tessel is made up.
import { Flame, Flower2, HeartPulse, Moon, Sprout, Waves } from "lucide-react";
import { OuraringReel, type OuraringReelProps } from "./ouraring-reel";

export const reelSample: OuraringReelProps = {
  cards: [
    { label: "Rest and Recovery", icon: <Moon strokeWidth={1.25} />, title: "Wake up feeling put back together", href: "#" },
    { label: "Energy and Ageing", icon: <Sprout strokeWidth={1.25} />, title: "Add good years, not just more of them", href: "#" },
    { label: "Movement and Training", icon: <Flame strokeWidth={1.25} />, title: "Train with a plan, not a guess", href: "#" },
    { label: "Stress and Balance", icon: <Waves strokeWidth={1.25} />, title: "Find your calm when it counts", href: "#" },
    { label: "Cycle and Hormones", icon: <Flower2 strokeWidth={1.25} />, title: "Know where you are in your cycle", href: "#" },
    { label: "Heart and Breath", icon: <HeartPulse strokeWidth={1.25} />, title: "Hear what your heart is saying", href: "#" },
  ],
};

export default function Demo() {
  return <OuraringReel {...reelSample} />;
}
