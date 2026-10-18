// Sample content lives here (gallery only); the page reuses it.
import { MercuryArt } from "@foundry/mercury-art";
import { MercuryMock } from "@foundry/mercury-mock";
import { coverageBars } from "../mercury-art/mercury-art.demo";
import { billSample, cardSample, invoiceSample, roleSample, rulesSample, uploadSample } from "../mercury-mock/mercury-mock.demo";
import { MercuryFeatures, type MercuryFeaturesProps } from "./mercury-features";

export const toolsFeatures: MercuryFeaturesProps = {
  title: "Money admin used to slow you down. Now it keeps up.",
  items: [
    { title: "Cards in a couple of clicks", text: "Make as many virtual cards as you like: one per tool, per contractor, per campaign.", media: <MercuryMock mock={cardSample} /> },
    { title: "Bills that fill themselves in", text: "Drop in a bill and the details are read for you, payee remembered, ready to approve.", media: <MercuryMock mock={billSample} /> },
    { title: "Invoices without the patchwork", text: "Send one-off or repeating invoices, take several ways to pay, and keep clients in one list.", media: <MercuryMock mock={invoiceSample} /> },
    { title: "Receipts that find their match", text: "Forward or upload a receipt and it's attached to the right card charge on its own.", media: <MercuryMock mock={uploadSample} /> },
  ],
};

export const opsFeatures: MercuryFeaturesProps = {
  title: "Run the books like you've done it for years",
  items: [
    { title: "See everything at once", text: "Every balance, and every dollar in and out, in a single view.", media: <MercuryArt variant="lens" /> },
    { title: "Rules that move money", text: "Automatic transfers, approval steps and tidy categories, set once.", media: <MercuryMock mock={rulesSample} /> },
    { title: "The right access for each person", text: "Limits per card, spending rules and permissions down to the button.", media: <MercuryMock mock={roleSample} /> },
    { title: "Someone to ask", text: "Chat support for every customer, and a named contact once you've grown.", media: <MercuryArt variant="ripple" /> },
  ],
};

export const safetyFeatures: MercuryFeaturesProps = {
  title: "Ordinary protection stops early. We keep going.",
  columns: 3,
  items: [
    { title: "Sixteen times the usual cover", text: "Deposits spread across partner banks so far more of your balance is covered.", media: <MercuryArt variant="bars" bars={coverageBars} /> },
    { title: "Security that's actually modern", text: "Passkeys, fraud and phishing checks, and alerts when something looks off.", media: <MercuryArt variant="print" /> },
    { title: "Controls close at hand", text: "Choose who can see, send or approve, and lock a card in one tap.", media: <MercuryArt variant="toggles" /> },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <MercuryFeatures {...toolsFeatures} />
      <MercuryFeatures {...safetyFeatures} />
    </div>
  );
}
