// Sample content (gallery only); the page reuses it. The company is made up.
import { ReckonerV2About, type ReckonerV2AboutProps } from "./reckoner-v2-about";

export const aboutSample: ReckonerV2AboutProps = {
  id: "who-we-are",
  eyebrow: "Who we are",
  title:
    "Caldergrove began with a simple conviction: that lending well is a craft. We read every covenant, we model the bad case before the good one, and we tell our investors plainly what we own and why we own it",
  items: [
    { title: "Experience", text: "A team that has lent through four credit cycles" },
    {
      title: "Restraint",
      text: "We pass on far more loans than we make, so the ones we keep are worth the wait",
    },
    {
      title: "Candour",
      text: "Pension fund or family office, you speak with the people who made the decision, and they answer straight",
    },
  ],
};

export default function Demo() {
  return <ReckonerV2About {...aboutSample} />;
}
