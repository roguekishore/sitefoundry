// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpFaq, type WarpFaqProps } from "./warp-faq";

export const faqSample: WarpFaqProps = {
  id: "questions",
  title: "Questions people ask",
  items: [
    { question: "what is an agent delivery line?", answer: "A set of agents, rules and checks that takes work from a ticket to a merged change, run in the cloud and written down as config." },
    { question: "how do i set up a line?", answer: "Start from a template, point it at a repo, and edit one config file as your needs grow." },
    { question: "am i tied to lathe's models or config?", answer: "No. Bring any model or agent, and keep your config in your own repo." },
    { question: "do i need the lathe shell to use lines?", answer: "No. Lines run in the cloud; the shell is one of several places to follow them." },
    { question: "how much of our delivery can run on its own?", answer: "Triage, planning, coding, review and release can each be handed over, one stage at a time." },
    { question: "where is our data kept?", answer: "Wherever you choose: our cloud, or storage in your own network." },
    { question: "how do people work with a line?", answer: "From chat, tickets, the browser, the shell or the editor: you can follow, nudge or take over any job." },
    { question: "can we try it on one team first?", answer: "Yes. Most teams start with one repo and one stage, then widen." },
    { question: "how is it priced?", answer: "Talk to us and we'll walk you through the options." },
  ],
};

export default function Demo() {
  return <WarpFaq {...faqSample} />;
}
