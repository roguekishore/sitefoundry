// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { BookOpen, Calculator, FlaskConical, Globe2, Languages, Music } from "lucide-react";
import { PlumeformTemplates, type PlumeformTemplatesProps } from "./plumeform-templates";

export const templatesSample: PlumeformTemplatesProps = {
  eyebrow: "Templates",
  title: "Start from a template.",
  titleAside: "Then make it yours.",
  topics: [
    { label: "Most used", href: "#t-popular" },
    { label: "Exit tickets", href: "#t-exit" },
    { label: "Unit tests", href: "#t-tests" },
    { label: "Reading checks", href: "#t-reading" },
    { label: "Class feedback", href: "#t-feedback" },
  ],
  templates: [
    { title: "Fractions warm-up", meta: "10 questions · 5 min", icon: <Calculator />, href: "#t-fractions" },
    { title: "Chapter check-in", meta: "8 questions · 6 min", icon: <BookOpen />, href: "#t-chapter" },
    { title: "Lab safety quiz", meta: "12 questions · 8 min", icon: <FlaskConical />, href: "#t-lab" },
    { title: "Map skills", meta: "9 questions · 7 min", icon: <Globe2 />, href: "#t-maps", badge: "Plus" },
    { title: "Vocabulary round", meta: "15 questions · 6 min", icon: <Languages />, href: "#t-vocab" },
    { title: "Listening test", meta: "6 questions · 10 min", icon: <Music />, href: "#t-listening", badge: "Plus" },
  ],
  link: { label: "See all quiz templates", href: "#templates" },
};

export default function Demo() {
  return <PlumeformTemplates {...templatesSample} />;
}
