import { BookOpenText, Brain, Droplet, HeartPulse, Salad, TrendingUp } from "lucide-react";
import { LevelsPatterns, type LevelsPatternsProps } from "./levels-patterns";

export const patternsSample: LevelsPatternsProps = {
  id: "inside",
  eyebrow: "Inside the app",
  title: "Notice the patterns worth acting on.",
  lead: "From tonight's dinner to next month's blood test, Ballast lifts out the signals that tell you what to keep, what to swap and what to try next.",
  cards: [
    {
      title: "Log meals in seconds",
      body: "Type it, snap it or scan it to build an honest record of what you eat and where it adds up.",
      points: ["Full macro splits", "A quality score per plate", "Quick logging for busy days"],
      mediaLabel: "Three meal-logging screens",
    },
    {
      title: "Read the rhythm of your day",
      body: "Tie meals, movement, sleep, stress and recovery together so you can spot the habits that keep you level.",
      points: ["Daily feedback loops", "Sleep and lifestyle context", "Signals that make patterns obvious"],
      mediaLabel: "Three daily-summary screens",
    },
    {
      title: "Track markers over months",
      body: "Pull lab results and long-term markers into the same place so change is easy to see.",
      points: ["Healthy ranges explained", "30, 60 and 90-day views", "A clearer picture of progress"],
      mediaLabel: "Three lab-trend screens",
    },
  ],
  features: [
    { icon: <Salad />, title: "Meal log", body: "Record food fast and see macros, timing and quality at a glance." },
    { icon: <Brain />, title: "Smart insights", body: "Turn patterns in food, sleep and movement into a clear next step." },
    { icon: <TrendingUp />, title: "Habit streaks", body: "Keep daily routines in sight so sticking with them gets easier." },
    { icon: <Droplet />, title: "Sensor context", body: "See glucose readings next to the choices and routines around them." },
    { icon: <HeartPulse />, title: "Lab markers", body: "Follow the slower signals, not only what happens in the moment." },
    { icon: <BookOpenText />, title: "Expert reading", body: "Short, well-sourced explainers and tips right inside the app." },
  ],
  link: { label: "Take the two-minute quiz to start", href: "#" },
};

export default function Demo() {
  return <LevelsPatterns {...patternsSample} />;
}
