import { ZettaJouleSectors, type ZettaJouleSectorsProps } from "./zetta-joule-sectors";

export const sectorsSample: ZettaJouleSectorsProps = {
  label: "Heat for Heavy Industry\nOne Reactor, Many Sectors",
  statement: "Together, these capabilities open up new options for refining, steelmaking, aviation fuel, data centres, mining and the communities around them.",
  prevLabel: "Previous sector",
  nextLabel: "Next sector",
  slides: [
    {
      tag: "Refining",
      title: "Carbon-Free Process Heat for Refineries",
      text: "Our reactors deliver steady heat at up to 950 °C to help refineries cut emissions without changing how they run.",
      linkLabel: "Learn More",
      href: "#",
    },
    {
      tag: "Chemicals",
      title: "Clean Power and Heat for Chemical Plants",
      text: "Heat and electricity from one source for ammonia, polymers and e-fuels, around the clock.",
      linkLabel: "Learn More",
      href: "#",
    },
    {
      tag: "Aviation",
      title: "Carbon-Free Energy for Cleaner Flight",
      text: "High-temperature heat and low-carbon hydrogen to make sustainable aviation fuel at scale.",
      linkLabel: "Learn More",
      href: "#",
    },
    {
      tag: "Mining",
      title: "Reliable Energy at Remote Mines",
      text: "A compact plant that supplies heat and power far from the grid, replacing diesel for good.",
      linkLabel: "Learn More",
      href: "#",
    },
  ],
};

export default function Demo() {
  return <ZettaJouleSectors {...sectorsSample} />;
}
