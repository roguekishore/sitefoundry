// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { UltrahumanSignals, type UltrahumanSignalsProps } from "./ultrahuman-signals";

export const signalsSample: UltrahumanSignalsProps = {
  title: "Halo, fully measured",
  body: "Five things the band reads, and what each one says about tomorrow.",
  items: [
    {
      tab: "Movement",
      title: "Steps, all day long",
      body: "The Movement score looks past workouts to the walking, standing and stair-climbing that fill an ordinary day, and nudges you when you've sat too long.",
      mediaLabel: "A hand gripping a kettlebell, band on one finger",
    },
    {
      tab: "Rest",
      title: "Your night, in layers",
      body: "The Rest score splits each night into light, deep and REM sleep, then shows how that mix shaped the way you woke up.",
      mediaLabel: "Someone stretching in a rust-coloured shirt",
    },
    {
      tab: "Training",
      title: "Effort you can see",
      body: "Heart-rate zones and strain build up live during a session, so you know when to push and when you've done enough.",
      mediaLabel: "A cyclist on a quiet road at dawn",
    },
    {
      tab: "Recovery",
      title: "Ready, or not yet",
      body: "Resting pulse, skin temperature and HRV come together each morning into one number for how much your body can take on.",
      mediaLabel: "A person reading on a park bench",
    },
    {
      tab: "Cycle",
      title: "Patterns over months",
      body: "Temperature trends map each phase of the cycle and flag changes early, with no extra steps beyond wearing the band.",
      mediaLabel: "Two hands holding a mug of tea",
    },
  ],
};

export default function Demo() {
  return <UltrahumanSignals {...signalsSample} />;
}
