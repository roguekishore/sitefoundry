import { EightsleepNight, type EightsleepNightProps } from "./eightsleep-night";

export const nightSample: EightsleepNightProps = {
  title: "A night on the Mantle, tuned to you",
  sub: "From the hour before bed to the minute you wake, the Mantle keeps adjusting each side to what your body is doing.",
  cards: [
    { title: "It gets the bed ready", text: "Using your profile, your habits and your linked health apps, the Mantle cools or warms your side an hour before bedtime." },
    { title: "Follows you into deep sleep", text: "As you settle into deep sleep, it cools a little further to help you stay there." },
    { title: "Wakes you gently", text: "A slow warm-up and a soft vibration, timed to a light stage of sleep." },
    { title: "Shows how you slept", text: "A morning score built from your heart rate, breathing and time in each stage." },
    { title: "Learns as it goes", text: "Every night tunes the next one: the longer you use it, the better it fits." },
  ],
  footnote: "Screens shown are illustrative and may look different in the app.",
  prevLabel: "Previous",
  nextLabel: "Next",
  dotLabel: (n) => `Card ${n}`,
};

export default function Demo() {
  return <EightsleepNight {...nightSample} />;
}
