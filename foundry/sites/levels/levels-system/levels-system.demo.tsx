import { Cable, FlaskConical, Sparkles } from "lucide-react";
import { LevelsSystem, type LevelsSystemProps } from "./levels-system";

export const systemSample: LevelsSystemProps = {
  id: "system",
  eyebrow: "Everything Ballast gives you",
  title: "One steady system for your metabolism.",
  lead: "Begin in the app, plug in live readings and the rest of your health history, then add lab work and coaching whenever you want to go further.",
  rows: [
    {
      icon: <Sparkles />,
      eyebrow: "Begin here",
      title: "An app that shows what suits your body.",
      lead: "Log what you eat, follow your macros and build better routines, with feedback that brings the useful patterns to the surface.",
      points: [
        "Log meals by typing, snapping or scanning",
        "Macro splits and a quality score for every plate",
        "Routines for sleep, movement and daily habits",
        "Trend lines that show what is shifting over weeks",
      ],
      mediaTone: "film",
      mediaLabel: "Three app screens",
    },
    {
      icon: <Cable />,
      eyebrow: "Plug in your data",
      title: "Your readings and your history, side by side.",
      lead: "Link what is happening today, add the background that explains how you got here, and let Ballast weigh both when it shapes your advice.",
      points: [
        "Use the sensor you already own or get one from us",
        "Sync your phone's health app and your wearables",
        "Upload past blood work, body scans and records",
        "Tell us your goals, history and what matters most",
        "Meals, sleep, movement and glucose on one screen",
        "Your whole health story kept in one tidy place",
      ],
      mediaTone: "photo",
      mediaLabel: "Photo of a member on their front steps",
    },
    {
      icon: <FlaskConical />,
      eyebrow: "Go further",
      title: "Lab work, coaches and more when you want precision.",
      lead: "Full panels and real people turn what you notice from day to day into a clear plan for the long run.",
      points: [
        "Full blood panels with marker tracking",
        "Guidance from dietitians and clinicians",
        "Programmes for goals like glucose and heart health",
        "Advice built on your own numbers",
      ],
      mediaTone: "film",
      mediaLabel: "Three lab result screens",
    },
  ],
  privacy: {
    statement: "Your health data is yours. Ballast never sells it, to anyone.",
    tags: ["Encrypted", "Audited yearly", "Health-grade storage", "Never sold"],
    link: { label: "How we protect your data", href: "#" },
  },
  action: { label: "Find what fits you", href: "#" },
};

export default function Demo() {
  return <LevelsSystem {...systemSample} />;
}
