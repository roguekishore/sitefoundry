import { BadgeCheck, Check, User } from "lucide-react";
import { SuperpowerRating } from "@foundry/superpower-rating";
import { SuperpowerMembership, type SuperpowerMembershipProps } from "./superpower-membership";

export const membershipSample: SuperpowerMembershipProps = {
  id: "join",
  gallery: [
    { label: "Photo: a member on a terrace at sunset" },
    { label: "Diagram: how your care fits together" },
    { label: "Photo: the blood draw" },
    { label: "Timeline: your first month" },
    { label: "Reviews from members" },
    { label: "Comparison with a usual check-up" },
    { label: "Survey results" },
  ],
  rating: <SuperpowerRating stars="boxed" score="4.8" source="on Verdict" extra="52k+ members" avatars={[undefined, undefined, undefined, undefined]} />,
  title: "Kestrel yearly membership",
  lead: "Catch early signs of 900+ conditions, then follow a plan written around your own results.",
  price: "$179",
  period: "/year*",
  features: [
    "110 markers from a single draw",
    "Body age plus 15 health scores",
    "A personal plan that turns results into steps",
    "Wren and a clinician team on call",
    "Results in about a week",
    "At home or at 1,800+ partner labs**",
  ],
  cta: { label: "Claim your first panel", href: "#checkout" },
  facts: [
    { icon: <User aria-hidden />, label: "Billed yearly" },
    { icon: <Check aria-hidden />, label: "49¢ a day" },
    { icon: <BadgeCheck aria-hidden />, label: "Health-account eligible" },
  ],
  footnotes: ["*Price may differ in some states", "**Home visits cost extra"],
  stats: [
    { value: "64%", label: "found something a doctor had missed" },
    { value: "91%", label: "found it more useful than a check-up" },
    { value: "78%", label: "learned something new about themselves" },
  ],
  statsNote: "Kestrel member survey, 90 days after their plan (n=212).",
  faq: [
    { question: "How does the membership work?", answer: "You book a draw, get your results in about a week, and receive a plan. Wren and your clinicians stay with you all year." },
    { question: "Can I cancel when I like?", answer: "Yes, from your account, any time before renewal." },
    { question: "How often should I retest?", answer: "Most members retest after six months to see how their plan is working." },
    { question: "When do results arrive?", answer: "Usually within seven days of your draw." },
  ],
};

export default function Demo() {
  return <SuperpowerMembership {...membershipSample} />;
}
