// Sample content lives here (gallery only); the page reuses it.
import { MercuryArt } from "@foundry/mercury-art";
import { MercuryMock } from "@foundry/mercury-mock";
import { accountsSample, cardSample, invoiceSample, rulesSample } from "../mercury-mock/mercury-mock.demo";
import { MercuryTabs, type MercuryTabsProps } from "./mercury-tabs";

export const overviewTabs: MercuryTabsProps = {
  title: ["All of your money.", "One calm place to run it."],
  items: [
    {
      title: "Accounts and savings",
      text: "Checking and savings with no monthly minimums, a yield on idle cash, and credit lines that grow with you.",
      media: <MercuryMock mock={accountsSample} />,
    },
    { title: "Cards and spend controls", text: "Issue cards to anyone on the team, each with its own limit, merchant rules and receipts.", media: <MercuryMock mock={cardSample} /> },
    { title: "Bills and invoices", text: "Pay vendors and get paid from the same place, with approvals that fit how you already work.", media: <MercuryMock mock={invoiceSample} /> },
    { title: "Bookkeeping", text: "Categories, receipts and exports that keep your books tidy without a monthly scramble.", media: <MercuryMock mock={rulesSample} /> },
  ],
  link: { label: "Take the tour", href: "#" },
};

export const onboardingTabs: MercuryTabsProps = {
  title: "Start in an afternoon. Keep moving for years.",
  media: <MercuryArt variant="beam" />,
  items: [
    { title: "Apply online in minutes", text: "Free checking and savings with no branch visits and no paperwork to post." },
    { title: "A card on day one", text: "Use a virtual card the moment your account opens; the metal one follows by mail." },
    { title: "Everyday tasks in seconds", text: "Payments, transfers and approvals are a couple of taps, on the web or your phone." },
  ],
};

export const feesTabs: MercuryTabsProps = {
  title: "Keep what you'd lose to fees. Put it to work instead.",
  mediaSide: "start",
  media: <MercuryArt variant="globe" />,
  items: [
    {
      title: "Send dollars worldwide, free",
      text: "No fee to send money by wire, ACH or check, at home or abroad.",
      link: { label: "See how payments work", href: "#" },
    },
    { title: "Cash back on card spend", text: "Every purchase on the card earns a little back, paid into your account monthly." },
    { title: "A yield on idle cash", text: "Sweep the balance you don't need this month into a reserve that earns." },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <MercuryTabs {...overviewTabs} />
      <MercuryTabs {...feesTabs} />
    </div>
  );
}
