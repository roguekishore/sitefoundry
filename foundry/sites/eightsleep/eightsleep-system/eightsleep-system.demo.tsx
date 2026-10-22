import { EightsleepSystem, type EightsleepSystemProps } from "./eightsleep-system";

export const systemSample: EightsleepSystemProps = {
  title: "What is the Mantle?",
  items: [
    { tag: "Layer", title: "A climate layer for any mattress", text: "Cools, warms and reads your sleep on each side, with sensors woven in." },
    { tag: "Core", title: "Driven by the Core unit", text: "Slips under most bed frames and makes quick, strong changes through the night." },
    { tag: "App", title: "Tuned to you in the app", text: "Set your temperatures, link your training apps and wake to a morning summary." },
  ],
  cta: { label: "See how it works", href: "#" },
  openLabel: "Show more",
  closeLabel: "Show less",
};

export default function Demo() {
  return <EightsleepSystem {...systemSample} />;
}
