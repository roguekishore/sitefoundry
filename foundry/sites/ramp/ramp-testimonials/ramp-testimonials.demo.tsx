// Sample content lives here (gallery only); the page reuses it. People and firms are made up.
import { RampTestimonials, type RampTestimonialsProps } from "./ramp-testimonials";

const t = (name: string, role: string, quote: string, initials: string) => ({ name, role, quote, logo: initials });

export const testimonialsSample: RampTestimonialsProps = {
  eyebrow: "60,000 teams and climbing",
  title: "The proof is in the books.",
  cta: { label: "See it run", href: "#" },
  rows: [
    [
      t("Priya Nair", "Office Lead, Northwind Supply", "The first receipt I sent by text was matched before I put my phone down. I was sold.", "NW"),
      t("Tomas Berg", "Senior Accountant, Pellucid", "Our staff actually said thank you. That almost never happens with finance software.", "PL"),
      t("Hannah Okafor", "Strategic Finance, Corvid", "Well-made tools for people who care about tools.", "CV"),
      t("Luca Ferri", "CEO, Brightmoor", "One place now covers every card, bill and refund we used to juggle across four apps.", "BM"),
      t("Grace Liu", "Controller, Orchard Row", "Month-end went from a week of dread to an afternoon of checking.", "OR"),
    ],
    [
      t("Mayor Ellen Shaw", "Town of Harrow Point", "We make sharper calls on public money now. One of the best changes we've made.", "HP"),
      t("Sam Adeyemi", "CFO, Juniper Health", "It feels like the whole company is pulling in one direction for the first time.", "JH"),
      t("Rosa Quint", "Operations Lead, Marlow Freight", "Nobody needed training. That is why everyone uses it.", "MF"),
      t("Ben Carver", "Public Works, City of Lowmere", "I photograph the receipt and get on with my day. It handles everything else.", "LM"),
      t("Nadia Haddad", "Finance Manager, TSL", "Approvals that used to take a week now clear before lunch.", "TS"),
    ],
    [
      t("Owen Clarke", "VP Finance, Quarry", "We folded four separate systems into one and nobody misses the old ones.", "QY"),
      t("Jasmine Park", "Controller, Sundial", "The rollout was smooth from start to finish. Not a single fire drill.", "SD"),
      t("Mei Tanaka", "Head of Finance, Fathom", "They actually listen and build what we ask for. It feels like a partnership.", "FT"),
      t("Carl Osei", "Director, Halden & Co", "Reconciling the cards takes no effort at all any more.", "HC"),
      t("Ines Duarte", "Accounts Lead, Corvid", "Hardly any manual entry left. We spend our time on the numbers that matter.", "CV"),
    ],
  ],
};

export default function Demo() {
  return <RampTestimonials {...testimonialsSample} />;
}
