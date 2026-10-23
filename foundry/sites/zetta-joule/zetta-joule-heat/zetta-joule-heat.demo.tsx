import { ZettaJouleHeat, type ZettaJouleHeatProps } from "./zetta-joule-heat";

export const heatSample: ZettaJouleHeatProps = {
  heading: "Unmatched\nHeat Capabilities",
  body: "Our reactor is designed to run at up to 950 °C, roughly 600 °C hotter than water-cooled plants, while still delivering steady, reliable power.",
  tabsLabel: "Choose an industry",
  unit: "°C",
  axisMax: 1200,
  axisStep: 100,
  tabs: [
    {
      label: "Cities & Infrastructure",
      ranges: [
        { label: "District heating", from: 100, to: 250 },
        { label: "Seawater desalination", from: 100, to: 200 },
      ],
    },
    {
      label: "Materials & Manufacturing",
      ranges: [
        { label: "Paper and pulp", from: 150, to: 250 },
        { label: "Glass and ceramics", from: 600, to: 1100 },
      ],
    },
    {
      label: "Fuels & Upstream",
      ranges: [
        { label: "Oil sands extraction", from: 200, to: 350 },
        { label: "Refinery processing", from: 350, to: 900 },
      ],
    },
    {
      label: "H₂ Hydrogen",
      ranges: [
        { label: "Electrolysis", from: 100, to: 150 },
        { label: "Thermochemical splitting", from: 800, to: 950 },
      ],
    },
  ],
  brand: { name: "Hearthgrid", label: "Reactor", valueLabel: "Up to 950 °C", value: 950 },
  bars: [
    { label: "Gas-cooled reactor, today", valueLabel: "750 °C", value: 750 },
    { label: "Molten salt reactor", valueLabel: "650 °C", value: 650 },
    { label: "Liquid metal reactor", valueLabel: "550 °C", value: 550 },
    { label: "Light water reactor", valueLabel: "300 °C", value: 300 },
  ],
};

export default function Demo() {
  return <ZettaJouleHeat {...heatSample} />;
}
