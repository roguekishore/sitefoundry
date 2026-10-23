import { LevelsSpike, type LevelsSpikeProps } from "./levels-spike";

export const spikeSample: LevelsSpikeProps = {
  eyebrow: "Why it matters",
  title: "Diet tips are generic. Your body is not.",
  lead: "Most of us already know that what we eat counts. What we lack is a plain way to tell whether the tips we follow suit our own body. Even advice from a chatbot is mostly one-size-fits-all. Ballast pairs your own readings with one of the biggest private metabolic datasets around, so the guidance is about you.",
  link: { label: "See what suits your body", href: "#" },
  caption: "Hidden spikes and calmer swaps",
  choices: [
    { label: "Honey porridge" },
    { label: "Fruit yoghurt" },
    { label: "Orange juice" },
    { label: "Lentils + greens" },
  ],
  chartLabel: "Glucose curve after the chosen food",
};

export default function Demo() {
  return <LevelsSpike {...spikeSample} />;
}
