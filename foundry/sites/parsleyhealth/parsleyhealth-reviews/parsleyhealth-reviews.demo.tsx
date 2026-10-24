import type { ParsleyhealthReviewsProps } from "./parsleyhealth-reviews";
import { ParsleyhealthReviews } from "./parsleyhealth-reviews";

export const reviewsSample: ParsleyhealthReviewsProps = {
  eyebrow: "Member stories",
  title: "Nine in ten members feel better within twelve months",
  action: { label: "Read every story", href: "#" },
  prevLabel: "Previous story",
  nextLabel: "Next story",
  items: [
    { name: "Priya", quote: "“I got my energy and my evenings back.”" },
    { name: "Lauren", quote: "“The lab work finally explained the fatigue.”" },
    { name: "Teresa", quote: "“For the first time a doctor had a plan instead of a shrug.”" },
    { name: "Jordan", quote: "“My gut settled down in a few months.”" },
    { name: "Imani", quote: "“I understand my own numbers now.”" },
  ],
};

export default function Demo() {
  return <ParsleyhealthReviews {...reviewsSample} />;
}
