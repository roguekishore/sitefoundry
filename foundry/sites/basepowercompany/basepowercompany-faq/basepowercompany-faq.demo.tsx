import { BasepowercompanySwash } from "@foundry/basepowercompany-swash";
import { BasepowercompanyFaq, type BasepowercompanyFaqProps } from "./basepowercompany-faq";

export const faqSample: BasepowercompanyFaqProps = {
  tape: "Still wondering?",
  title: <BasepowercompanySwash>Here's what people ask</BasepowercompanySwash>,
  items: [
    {
      question: "What is Porchlight, and how does it work?",
      answer:
        "It depends on where you live. Where you can choose your provider, Porchlight sells you electricity and puts a Hub battery in your home, or just the electricity if that's all you want. Either way the rate is fixed, so the bill stays predictable. Elsewhere we team up with your local utility, which keeps delivering your power while the Hub sits on your wall. The Hub soaks up cheap power when demand is low, gives some back when the grid is strained, and runs your home on its own when the lines go down, usually before anyone notices. Type your zip code above to see what's offered at your address.",
    },
    { question: "How much does it cost? What will I pay for power?", answer: "Rates depend on your area and plan. Enter your zip code to see the exact numbers for your home before you sign anything." },
    { question: "Why is it so much cheaper than a generator or solar?", answer: "We own and maintain the Hub, and it earns its keep by helping the grid at busy hours. That income pays for most of the hardware, so you don't have to." },
    { question: "Can I refer a neighbour? Is there a reward?", answer: "Yes. Share your link from the app and you both get a bill credit once they're switched on." },
    { question: "How does Porchlight make money?", answer: "From the power we sell and from the grid services the Hubs provide together, a bit like a power plant spread across thousands of garages." },
  ],
};

export default function Demo() {
  return <BasepowercompanyFaq {...faqSample} />;
}
