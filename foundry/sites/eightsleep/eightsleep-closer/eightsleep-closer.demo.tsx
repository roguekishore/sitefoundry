import { EightsleepCloser, type EightsleepCloserProps } from "./eightsleep-closer";

export const closerSample: EightsleepCloserProps = {
  title: "Meet Mantle 4",
  text: "Our quietest, quickest Mantle so far.",
  price: "Now from $2,149.",
  cta: { label: "Shop Mantle 4", href: "#" },
};

export default function Demo() {
  return <EightsleepCloser {...closerSample} />;
}
