import { TypesomethingSteps, type TypesomethingStepsProps } from "./typesomething-steps";

export const stepsSample: TypesomethingStepsProps = {
  id: "how",
  title: "The whole process",
  subtitle: "Three steps, then you never open an admin panel again.",
  steps: [
    {
      number: "01",
      title: "Tell us about you",
      text: "Answer a short questionnaire or point us at the site you have now. We study your trade, your customers and your rivals, then build a fast, static site around them.",
    },
    {
      number: "02",
      title: "Change it by message",
      text: "You write, the site follows. No editor to learn: when something should change, say so in the chat. A new version is prepared, and you see it before anyone else does.",
    },
    {
      number: "03",
      title: "Publish in one tap",
      text: "Happy with the preview? Approve it. It goes live as lean, secure pages: no plugins to patch, nothing to hack, and load times search engines reward.",
    },
  ],
};

export default function Demo() {
  return <TypesomethingSteps {...stepsSample} />;
}
