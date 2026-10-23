import { PilotScenarios, type PilotScenariosProps } from "./pilot-scenarios";

export const scenariosSample: PilotScenariosProps = {
  title: "From the first five hires to the\nday you sell, Tallyhouse fits\ncompanies that mean to grow.",
  lede: "How far you plan to go matters more to us than how big you are today. We back owners with ambition at every stage.",
  lead: "Where we usually come in:",
  items: [
    { label: "Hiring ahead", quote: '"Cash keeps getting tight. Can we really carry three more salaries?"' },
    { label: "Raising a round", quote: '"Investors want a forecast. How do I show them more than one future?"' },
    { label: "Finding the margin", quote: '"Sales are up a third but profit is flat. Where is it leaking?"' },
    { label: "Getting ready to sell", quote: '"We want to exit in two years. What has to be true in our books by then?"' },
  ],
  note: "Questions like these need more than a data-entry service. We have walked owners through fundraising, valuations and opening abroad.",
};

export default function Demo() {
  return <PilotScenarios {...scenariosSample} />;
}
