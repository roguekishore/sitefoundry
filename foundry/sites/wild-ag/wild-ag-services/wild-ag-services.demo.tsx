import { WildAgServices, type WildAgServicesProps } from "./wild-ag-services";

export const servicesSample: WildAgServicesProps = {
  id: "services",
  title: "Services.",
  paragraphs: [
    "Talgrund takes whole building projects from an empty plot to a finished house, with an eye on how it works, how it ages and what it costs.",
    "Our work runs from re-using old barns and workshops to new private homes and the occasional school or library for a commune.",
    "We know the trades of the region by name, and we stay at the table from the first planning meeting to the day the keys change hands.",
    "Owners of older buildings also come to us for energy upgrades, green-building labels and a sober second opinion on renovation.",
  ],
  items: [
    { label: "Site development", href: "#site-development" },
    { label: "Funding", href: "#funding" },
    { label: "Planning & building", href: "#planning" },
    { label: "Renovation & conversion", href: "#renovation" },
    { label: "Supply & logistics", href: "#logistics" },
  ],
};

export default function Demo() {
  return <WildAgServices {...servicesSample} />;
}
