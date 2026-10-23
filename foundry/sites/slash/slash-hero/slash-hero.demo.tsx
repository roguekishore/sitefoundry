import { SlashHero, type SlashHeroProps } from "./slash-hero";

export const heroSample: SlashHeroProps = {
  rating: { score: "4.9 rating", count: "1,200+ reviews" },
  title: "Banking built for",
  words: ["founders", "operators", "builders"],
  sub: "Cards, spend, books and accounts in one place, sized for teams that ship.",
  subNote: "1",
  email: { placeholder: "Work email", label: "Work email", button: "Open an account" },
  caption: "Moving $18bn+ a year for more than 8,000 companies",
  logos: [
    { name: "Halvard" },
    { name: "Ostrea", serif: true },
    { name: "Pinecrest" },
    { name: "Mallow & Co", serif: true },
    { name: "Quarry" },
    { name: "Brightwell", serif: true },
    { name: "Tessel" },
    { name: "Lumen Yard", serif: true },
  ],
};

export default function Demo() {
  return <SlashHero {...heroSample} />;
}
