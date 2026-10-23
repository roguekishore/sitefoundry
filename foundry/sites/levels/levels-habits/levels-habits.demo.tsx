import { LevelsHabits, type LevelsHabitsProps } from "./levels-habits";

export const habitsSample: LevelsHabitsProps = {
  eyebrow: "Your next step",
  title: "See what to swap. Then keep it up.",
  lead: "Ballast goes past telling you where you stand. It turns what you learn into action with guidance, focused programmes and habit tools that keep you moving.",
  items: [
    { title: "Daily habits", body: "Turn good plans into small daily wins with meal logs, routines and targets you can actually hit." },
    {
      title: "Guided programmes",
      body: "Follow a set path towards goals like steadier glucose, a healthier heart or weight loss when you want more structure.",
    },
    { title: "Visible progress", body: "Track how often you stick with it, follow the trend and see whether your changes are paying off." },
  ],
  panel: {
    eyebrow: "Programmes and habits",
    text: "Put your effort into the few habits that count, and keep your progress heading the right way.",
    mediaLabel: "Phone showing a four-week challenge screen",
  },
};

export default function Demo() {
  return <LevelsHabits {...habitsSample} />;
}
