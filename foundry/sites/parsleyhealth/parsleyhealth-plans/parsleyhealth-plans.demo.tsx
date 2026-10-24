import type { ParsleyhealthPlansProps } from "./parsleyhealth-plans";
import { ParsleyhealthPlans } from "./parsleyhealth-plans";

export const plansSample: ParsleyhealthPlansProps = {
  eyebrow: "Two ways in",
  title: "Choose how you begin",
  plans: [
    {
      eyebrow: "Year-round care",
      title: "Full Circle Membership",
      description: (
        <>
          A <a href="#">twelve-month plan</a> with your own care team and a written plan of action. Visits, labs and
          prescriptions run through your insurance.
        </>
      ),
      steps: [
        "6 physician visits",
        "3 nutrition sessions",
        "Labs and prescriptions",
        "Supplements (if needed)",
        "Advanced panels (if needed)",
        "Messaging with your team",
      ],
      price: "$140/month or $1,400/year (covered)",
      priceAside: "· $260/month without insurance",
      note: "Covered by most plans, HSA/FSA ok",
      fineprint: "Twelve-month commitment",
      action: { label: "Become a member", href: "#" },
    },
    {
      eyebrow: "One-time review",
      title: "Lab Readout",
      description: (
        <>
          Not ready for a full year? Sit down with a physician to <a href="#">walk through your results</a> and leave
          with a plain-language summary. Bring any blood work from the last six months.
        </>
      ),
      price: "$220/visit",
      priceAside: "· Self-pay",
      note: "HSA/FSA welcome",
      fineprint: "The visit fee counts toward membership if you join within 30 days",
      action: { label: "Book a readout", href: "#" },
      actionVariant: "outline",
    },
  ],
};

export default function Demo() {
  return <ParsleyhealthPlans {...plansSample} />;
}
