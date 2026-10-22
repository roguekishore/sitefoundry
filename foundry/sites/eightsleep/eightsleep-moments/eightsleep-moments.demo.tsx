import { EightsleepMoments, type EightsleepMomentsProps } from "./eightsleep-moments";

export const momentsSample: EightsleepMomentsProps = {
  items: [
    { tag: "Snoring", title: "Quieter nights for both of you", text: "The Mantle hears the snoring start and, with the Rise add-on, gently lifts your head until it eases." },
    { tag: "Afternoon", title: "Time for a short nap?", text: "A twenty-minute cool-down that wakes you warm, before you sink too deep." },
    { tag: "Away", title: "Get ahead of jet lag", text: "Shift your bedtime and temperature a few nights before you fly." },
  ],
  cta: { label: "See how it works", href: "#" },
  openLabel: "Show more",
  closeLabel: "Show less",
};

export default function Demo() {
  return <EightsleepMoments {...momentsSample} />;
}
