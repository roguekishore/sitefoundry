import { OndoTestimonials, type OndoTestimonialsProps } from "./ondo-testimonials";

export const testimonialsSample: OndoTestimonialsProps = {
  heading: "What our partners say",
  labels: { prev: "Previous quote", next: "Next quote" },
  items: [
    {
      name: "Priya Nandakumar",
      role: "Head of Digital Custody",
      company: "Hartwell",
      quote:
        "“Clients keep asking how to hold real assets onchain without giving up the controls they expect. Working with Corvane gave us an answer we could put in front of a risk committee, and get through it.”",
    },
    {
      name: "Tomas Ekberg",
      role: "Partner, Ledgerline Ventures",
      company: "Ledgerline",
      quote:
        "“Regulated issuance is the missing layer for open finance. Corvane has spent years building it properly, and the market is starting to notice.”",
    },
    {
      name: "Adaeze Okafor",
      role: "Treasury Lead, Fenmore",
      company: "Fenmore",
      quote:
        "“We moved our idle cash into Ballast in an afternoon. Redemptions land the same day, and the reporting is cleaner than what we had before.”",
    },
    {
      name: "Luca Bertolini",
      role: "Director of Markets, Arcadia Bank",
      company: "Arcadia",
      quote:
        "“Settlement that doesn’t wait for business hours changes how we think about liquidity. Corvane made that practical for a bank our size.”",
    },
  ],
};

export default function Demo() {
  return <OndoTestimonials {...testimonialsSample} />;
}
