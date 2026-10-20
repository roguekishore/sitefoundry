// Sample content lives here (gallery only); the page reuses it. All clients are made up.
import { RoveiaIndustries, type RoveiaIndustriesProps } from "./roveia-industries";

export const industriesSample: RoveiaIndustriesProps = {
  heading: "Who We Grow",
  items: [
    {
      index: "01",
      name: "Virtual Care",
      body: "Online clinics live or die on patient trust and on clearing ad review. We build creative that passes first time, then funnels that book consults without letting acquisition costs creep. Best on repeat-visit models where every new patient has to pay back.",
      clients: [<span key="c1" className="italic font-light">alder</span>, <span key="c2" className="font-semibold tracking-wide">JUNIPER</span>, <span key="c3" className="font-light">saltmarsh</span>],
    },
    {
      index: "02",
      name: "Wellness Goods",
      body: "Supplements and daily-care products win on the second order, not the first. We test creative quickly, turn a hero product into a steady cart-builder and keep margins whole as budgets grow.",
      clients: [<span key="c4" className="font-medium tracking-tight">Fennel Labs</span>, <span key="c5" className="italic">Moorfield</span>, <span key="c6" className="font-bold tracking-[0.2em] text-sm">TIDEWELL</span>],
    },
    {
      index: "03",
      name: "Care Software",
      body: "Health apps sell confidence before they sell features. We turn clinical detail into plain promises, then build the path from first download or demo to daily habit.",
      clients: [<span key="c7" className="font-extralight tracking-widest">Calder</span>, <span key="c8" className="font-semibold">quarry</span>, <span key="c9" className="font-mono text-base">{"{pell}"}</span>],
    },
  ],
};

export default function Demo() {
  return <RoveiaIndustries {...industriesSample} />;
}
