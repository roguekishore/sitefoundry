// Sample content (gallery only); the page reuses it. Tallgrass Fission and every publication are made up.
import { MoveRight } from "lucide-react";
import { ValaratomicsPress, type ValaratomicsPressProps } from "./valaratomics-press";

export const pressSample: ValaratomicsPressProps = {
  title: "In the papers",
  readLabel: "Read more",
  arrow: <MoveRight />,
  moreLabel: "Show more",
  initialCount: 9,
  items: [
    { headline: "Tallgrass founder Ruth Okafor on why the farm belt needs its own reactors", source: "Fieldnote", href: "#press-1" },
    { headline: "Salina sorghum growers sign up to dry next year's crop with fission heat", source: "Plains Ledger", href: "#press-2" },
    { headline: "Inside the yard where reactors are built like grain bins", source: "KTGR Radio", href: "#press-3" },
    { headline: "County board backs Prairie One as its pressure vessel rolls in from the coast", source: "Smoky Hill Courier", href: "#press-4" },
    { headline: "A reactor on a flatbed crosses three states without a police escort", source: "Gridline", href: "#press-5" },
    { headline: "Heat, not power: the quiet bet behind a Kansas nuclear startup", source: "The Reactor Desk", href: "#press-6" },
    { headline: "Fertiliser makers eye small salt reactors to cut gas from ammonia", source: "Ironwood Post", href: "#press-7" },
    { headline: "Regulators clear the first molten-salt test in fifty years", source: "Signal & Wire", href: "#press-8" },
    { headline: "On steam, sorghum and why the next boom town might glow a little", source: "Heliograph", href: "#press-9" },
    { headline: "Tallgrass opens a second yard to keep up with orders", source: "Mesa Courier", href: "#press-10" },
    { headline: "What a farm reactor sounds like at night (almost nothing)", source: "Fieldnote", href: "#press-11" },
    { headline: "Ten towns, one design: the case for boring nuclear", source: "Gridline", href: "#press-12" },
  ],
};

export default function Demo() {
  return <ValaratomicsPress {...pressSample} />;
}
