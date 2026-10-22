import { CalendarCheck, Check, CircleCheck } from "lucide-react";
import { SuperpowerRating } from "@foundry/superpower-rating";
import { SuperpowerCloser, type SuperpowerCloserProps } from "./superpower-closer";

export const closerSample: SuperpowerCloserProps = {
  eyebrow: <SuperpowerRating score="4.8 out of 5" source="190+ reviews" className="text-[0.8125rem] [&_svg]:size-4" />,
  title: "Your best years start with knowing",
  facts: [
    { icon: <Check aria-hidden />, label: "Cancel when you like" },
    { icon: <CircleCheck aria-hidden />, label: "Health-account eligible" },
    { icon: <CalendarCheck aria-hidden />, label: "Results inside a week" },
  ],
  primary: { label: "Get going", href: "#join" },
  secondary: { label: "Browse the panel", href: "#panel" },
  mediaLabel: "Video: a face lit by low golden sun",
};

export default function Demo() {
  return <SuperpowerCloser {...closerSample} />;
}
