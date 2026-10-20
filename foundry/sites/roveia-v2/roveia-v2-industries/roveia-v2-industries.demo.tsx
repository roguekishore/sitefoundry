// Sample content lives here (gallery only); the page reuses it. Every client name is made up.
import { RoveiaV2Industries, type RoveiaV2IndustriesProps } from "./roveia-v2-industries";

export const industriesSample: RoveiaV2IndustriesProps = {
  heading: "Who We Grow",
  items: [
    {
      title: "Virtual Care",
      description:
        "Clinics that prescribe online grow on tight funnels and clean approvals. We make ads that clear platform review the first time, then turn clicks into booked visits without the cost per patient creeping up.",
      clients: [
        <span className="font-semibold tracking-[0.08em] lowercase">kindred</span>,
        <span className="italic">Solvera</span>,
        <span className="font-bold">pellum.rx</span>,
      ],
    },
    {
      title: "Wellness Goods",
      description:
        "Vitamins, powders and daily rituals win on the second order, not the first. We test creative fast, turn hero products into steady sellers and keep margins intact as the budget grows.",
      clients: [
        <span className="font-light">Quietroot</span>,
        <span className="italic">Marrow & Oat</span>,
        <span className="font-extrabold tracking-[0.12em] uppercase text-sm">brisa</span>,
      ],
    },
    {
      title: "Care Software",
      description:
        "Health apps sell trust long before they sell features. We turn clinical detail into plain promises, then build the path from first download to a habit people keep.",
      clients: [
        <span className="font-semibold">Ondine</span>,
        <span className="font-mono text-base">lumara</span>,
        <span className="font-bold">Thistle</span>,
      ],
    },
  ],
};

export default function Demo() {
  return <RoveiaV2Industries {...industriesSample} />;
}
