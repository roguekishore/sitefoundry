import { SlashQuotes, type SlashQuotesProps } from "./slash-quotes";

export const quotesSample: SlashQuotesProps = {
  quotes: [
    {
      quote: ["“Running a company has changed completely, ", { italic: "and it takes a bank that moves like a startup to keep up with it.”" }],
      name: "Priya Ramaswamy",
      company: "Larkfield Capital",
    },
    {
      quote: ["“They keep shipping things I actually use: new tools, small fixes, and features that save me time every week.”"],
      name: "Jonah Becker",
      company: "Tidepool Studio",
    },
    {
      quote: ["“With every account, card and report in one place, ", { italic: "I know exactly where our money sits each morning.”" }],
      name: "Amara Osei",
      company: "Kestrel Freight",
    },
  ],
};

export default function Demo() {
  return <SlashQuotes {...quotesSample} />;
}
