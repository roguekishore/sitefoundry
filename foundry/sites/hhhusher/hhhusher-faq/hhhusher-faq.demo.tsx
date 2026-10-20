import { HhhusherFaq, type HhhusherFaqProps } from "./hhhusher-faq";

export const faqSample: HhhusherFaqProps = {
  id: "questions",
  groups: [
    {
      index: "01",
      label: "The Veil",
      items: [
        { question: "What is cymbal wash, and why does it matter?", answer: "It's the bright, hissy sound of cymbals leaking into the snare mic. It blurs the snare track and makes every boost to the snare a boost to the cymbals too." },
        { question: "Will the Veil fit my snare?", answer: "It fits 12″, 13″ and 14″ snares with metal or wooden hoops. The right spacer for each size comes in the box." },
        { question: "Does it change how the snare sounds in the overheads?", answer: "No. It sits under the cymbals and around the mic, not over the drum, so the overheads hear the kit as they always have." },
        { question: "Does it also stop the snare leaking into other mics?", answer: "A little. Its main job is keeping cymbals out of the snare mic, but the felt also softens some of the snare's spill toward nearby tom mics." },
        { question: "How long does it take to fit?", answer: "About two minutes. Open the clip, set it on the hoop, close it. No tools." },
        { question: "What is the loose felt in the box for?", answer: "Those are spare skirt strips in two lengths, so you can lengthen or shorten the skirt to suit your stick height." },
        { question: "How do I set the skirt height?", answer: "Lift the skirt on its hook-and-loop track until your sticks clear it at full swing, then press it down." },
        { question: "What else can the Veil do for my snare sound?", answer: "Drier tracks mean you can compress harder, add more top end and use less gating, and the snare stays clear in busy mixes." },
      ],
    },
    {
      index: "02",
      label: "Orders",
      items: [
        { question: "Where do you ship from?", answer: "From our workshop in Ghent and a partner warehouse in Ohio, so most orders arrive within a week." },
        { question: "Can I return it?", answer: "Yes. Send it back unused within 30 days of delivery for a full refund." },
        { question: "Is there a warranty?", answer: "Two years on the clip and frame, one year on the felt." },
      ],
    },
  ],
};

export default function Demo() {
  return <HhhusherFaq {...faqSample} />;
}
