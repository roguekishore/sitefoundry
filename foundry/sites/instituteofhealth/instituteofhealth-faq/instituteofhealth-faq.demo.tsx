// Sample content (gallery only); the page reuses it.
import { InstituteofhealthFaq, type InstituteofhealthFaqProps } from "./instituteofhealth-faq";

export const faqSample: InstituteofhealthFaqProps = {
  heading: "Straight answers before you commit",
  helpLines: ["Still unsure?", "Talk it over with our team"],
  action: { label: "Send us a note", href: "#" },
  items: [
    {
      question: "What does a clinical nutrition practitioner actually do?",
      answer: "They look at diet, lifestyle and lab results together, find what is driving a client's symptoms, and build a staged plan to address it alongside the client's doctor.",
    },
    {
      question: "How is a root-cause approach different from standard care?",
      answer: "Standard care often treats the symptom in front of it; a root-cause approach asks why the symptom appeared and works upstream, while still respecting medical care.",
    },
    {
      question: "What can I offer clients once I finish?",
      answer: "Nutrition assessments, lab interpretation within your local scope, and structured programmes. We walk through what applies where you live during onboarding.",
    },
    {
      question: "Is the certificate recognised?",
      answer: "The programme is independently reviewed every year and counts towards continuing education with several professional bodies.",
    },
    {
      question: "Can I work with clients abroad?",
      answer: "Yes. Most graduates consult online, and the business units cover the practical side of serving clients in other countries.",
    },
  ],
};

export default function Demo() {
  return <InstituteofhealthFaq {...faqSample} />;
}
