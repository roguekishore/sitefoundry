import { CalendarDays, CircleDollarSign, ShieldCheck } from "lucide-react";
import { SuperpowerOffer, type SuperpowerOfferProps } from "./superpower-offer";

export const offerSample: SuperpowerOfferProps = {
  tag: "Welcome offer",
  title: "Your six-month retest, on us ($89)",
  question: "To claim it, tell us what brought you here",
  options: [
    { label: "Always tired, never rested", href: "#tired" },
    { label: "Weight that won't shift", href: "#weight" },
    { label: "Poor sleep, mood or focus", href: "#sleep" },
    { label: "Staying well for longer", href: "#longevity" },
    { label: "Something else, or just curious", href: "#other" },
  ],
  facts: [
    { icon: <CalendarDays aria-hidden />, label: "Results in about a week" },
    { icon: <CircleDollarSign aria-hidden />, label: "49¢ a day" },
    { icon: <ShieldCheck aria-hidden />, label: "Health-account eligible" },
  ],
  mediaLabel: "Photo: a nurse taking blood from a member on a sofa",
};

export default function Demo() {
  return <SuperpowerOffer {...offerSample} />;
}
