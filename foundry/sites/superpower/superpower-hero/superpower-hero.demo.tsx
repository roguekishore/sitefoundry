import { BadgeCheck, CalendarDays, CircleDollarSign } from "lucide-react";
import { SuperpowerRating } from "@foundry/superpower-rating";
import { SuperpowerHero, type SuperpowerHeroProps } from "./superpower-hero";

export const heroSample: SuperpowerHeroProps = {
  eyebrow: <SuperpowerRating score="4.8 out of 5" source="from 1,900+ reviews" />,
  title: "Know your body, every year",
  lead: "One blood draw, over a hundred markers, and a care team that turns the numbers into a plan.",
  primary: { label: "Start your membership", href: "#join" },
  secondary: { label: "See the panel", href: "#panel" },
  facts: [
    { icon: <CalendarDays aria-hidden />, label: "Results in about a week" },
    { icon: <CircleDollarSign aria-hidden />, label: "Under 50¢ a day" },
    { icon: <BadgeCheck aria-hidden />, label: "Health-account eligible" },
  ],
  mediaLabel: "Video: a member in morning light at home",
};

export default function Demo() {
  return <SuperpowerHero {...heroSample} />;
}
