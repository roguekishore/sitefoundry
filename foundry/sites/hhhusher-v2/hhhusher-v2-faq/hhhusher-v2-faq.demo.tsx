import { HhhusherV2Faq, type HhhusherV2FaqProps } from "./hhhusher-v2-faq";

export const faqSample: HhhusherV2FaqProps = {
  id: "questions",
  groups: [
    {
      name: "The hood",
      questions: [
        { question: "What is cymbal wash, and why does it matter?", answer: "Wash is the hiss of the hi-hats leaking into every other mic on the kit, above all the snare mic a few inches below them. It makes the snare hard to brighten or compress without the hats getting louder too." },
        { question: "Will the hood fit my stand and my hats?", answer: "It clamps onto stand tubes from 12 to 25 mm and fits hats from 13 to 16 inches with the spacers in the box." },
        { question: "Does it change how the hats sound in the overheads?", answer: "The hood sits under the bottom hat, below the overheads' line of sight, so what they hear is very nearly unchanged." },
        { question: "Does it also keep the snare out of the hi-hat mic?", answer: "Yes, partly: the felt soaks up some of the snare's crack on its way up, so a close hat mic gets a cleaner signal too." },
        { question: "How long does it take to fit?", answer: "About a minute the first time, and seconds after that. One clamp, one wing nut." },
        { question: "What are the loose felt pieces in the box for?", answer: "They are the adjustable skirt: press them onto the hook-and-loop strips to lengthen the hood where your sticks allow it." },
        { question: "How do I use the inner flaps?", answer: "Fold them down to close the gap around a mic placed under the hood, or leave them up when the mic is outside." },
        { question: "What else can the hood do for my snare sound?", answer: "Less wash means you can add top end, compression and room to the snare without the hats coming up with it." },
      ],
    },
    {
      name: "Fitting",
      questions: [
        { question: "Can I use it with a closed hi-hat or an X-hat?", answer: "Yes, as long as there are at least four centimetres of tube free under the bottom hat." },
        { question: "Does it work for left-handed set-ups?", answer: "The clamp flips over in a few seconds, so the hood can face either way." },
        { question: "Can I take it on the road?", answer: "It folds flat into its own felt bag and survives being thrown in with the hardware." },
      ],
    },
  ],
};

export default function Demo() {
  return <HhhusherV2Faq {...faqSample} />;
}
