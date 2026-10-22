// Sample content (gallery only); the page reuses it. All partner names are made up.
import { Watch, Waves } from "lucide-react";
import { BevelWorksWith, type BevelWorksWithProps } from "./bevel-works-with";

export const worksWithSample: BevelWorksWithProps = {
  title: "Pairs with",
  logos: [
    <span key="a" className="flex items-center gap-1.5 text-[1.375rem] font-bold tracking-[-0.02em]">
      <Watch className="size-5" strokeWidth={2.5} />
      Wristline
    </span>,
    <span key="b" className="text-[1.375rem] font-light tracking-[0.18em] uppercase">Halo</span>,
    <span key="c" className="text-[1.375rem] font-semibold tracking-[0.12em] uppercase">Corvane</span>,
    <span key="d" className="text-[1.5rem] font-extrabold tracking-[-0.04em] lowercase">pacefit</span>,
    <span key="e" className="flex items-center gap-1.5 text-[1.375rem] font-medium tracking-[-0.02em]">
      <Waves className="size-6" strokeWidth={2.5} />
      Open Vitals
    </span>,
  ],
};

export default function Demo() {
  return <BevelWorksWith {...worksWithSample} className="pb-16" />;
}
