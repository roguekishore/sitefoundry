import { EightsleepHubTabs, type EightsleepHubTabsProps } from "./eightsleep-hub-tabs";

export const hubTabsSample: EightsleepHubTabsProps = {
  eyebrow: "New in Mantle 4",
  items: [
    { label: "Quieter than ever", title: "The Core unit now runs at a whisper", text: "Softer fans and a slower pump. You will forget it is there, and so will the person next to you." },
    { label: "Faster to react", title: "Changes course within minutes", text: "When your body warms in the small hours, the Layer is already cooling before you stir." },
    { label: "Sharper sensing", title: "Reads breathing and heart rate on each side", text: "Finer sensors woven into the Layer, with no wearable to charge or forget." },
    { label: "Our best price yet", title: "The full system, for less", text: "Everything in Mantle 4 starts lower than any Mantle before it." },
  ],
  cta: { label: "See how it works", href: "#" },
};

export default function Demo() {
  return <EightsleepHubTabs {...hubTabsSample} />;
}
