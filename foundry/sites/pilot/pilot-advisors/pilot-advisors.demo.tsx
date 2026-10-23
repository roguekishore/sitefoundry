import { PilotAdvisors, type PilotAdvisorsProps } from "./pilot-advisors";

export const advisorsSample: PilotAdvisorsProps = {
  title: "Real advice from finance leads\nwho have sat in your chair.",
  lede: "Fed up with accountants who never ask what you sell? Our advisors have run finance at fast-moving companies, and they know what healthy numbers look like at your stage.",
  advisors: [
    {
      name: "Mara Okafor",
      role: "Ran treasury at a payments company through two raises",
      quote: '"I like numbers that tell you what to do next, not just what already happened.\n\nI work with founders to turn the monthly close into a plan the whole team can follow, and a story investors believe."',
      tone: "lime",
    },
    {
      name: "Tobias Lindqvist",
      role: "Former operations lead for agencies and studios",
      quote: '"A good finance setup is boring in the best way.\n\nI have helped forty-odd studios trade spreadsheets for a system that runs itself, so the partners get their evenings back."',
      tone: "sun",
    },
    {
      name: "Priya Raman",
      role: "Former strategy lead at a regional bank",
      quote: '"Ten years of watching small companies make big decisions.\n\nMost owners don\'t need more reports. They need three clear numbers and someone who picks up the phone. That\'s the job."',
      tone: "sky",
    },
  ],
  note: "Growing takes more than software: it takes a partner who has seen your problem before and says 'I know this one, here's the way through.'",
};

export default function Demo() {
  return <PilotAdvisors {...advisorsSample} />;
}
