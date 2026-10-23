// Sample content lives here (gallery only); the page reuses it. Fernhold is made up.
import { AirwallexUniverse, type AirwallexUniverseProps } from "./airwallex-universe";

const video = { label: "See it in action", href: "#" };

export const universeSample: AirwallexUniverseProps = {
  title: "Every money job, one connected platform",
  intro: "Apps and APIs for wallets, spending, collecting and invoicing, right through to finance inside your own product.",
  moreLabel: "Find out more",
  tabs: [
    {
      label: "Wallets",
      tone: "orange",
      eyebrow: "Wallets",
      title: "One smart account for money in every market",
      video,
      cards: [
        { eyebrow: "Local details", title: "Get local account details in 22 markets and receive like a resident", href: "#" },
        { eyebrow: "Conversions", title: "Send to 150+ countries at the mid-market rate", href: "#" },
        { eyebrow: "Connections", title: "Sync every balance with the accounting tools you already use", href: "#" },
      ],
    },
    {
      label: "Spend",
      tone: "violet",
      eyebrow: "Spend",
      title: "Company cards with the rules built in",
      video,
      cards: [
        { eyebrow: "Cards", title: "Issue virtual and physical cards in seconds, each with its own limits", href: "#" },
        { eyebrow: "Expenses", title: "Receipts matched to purchases before anyone asks", href: "#" },
        { eyebrow: "Bills", title: "Approve and pay suppliers in their own currency", href: "#" },
      ],
    },
    {
      label: "Collect",
      tone: "blue",
      eyebrow: "Collect",
      title: "Take payment the way each country likes to pay",
      video,
      cards: [
        { eyebrow: "Checkout", title: "A hosted checkout with 90+ local methods switched on", href: "#" },
        { eyebrow: "Links", title: "Share a payment link in chat, email or a QR code", href: "#" },
        { eyebrow: "In person", title: "Turn a phone into a card terminal at events and pop-ups", href: "#" },
      ],
    },
    {
      label: "Invoicing",
      tone: "teal",
      eyebrow: "Invoicing",
      title: "Send the invoice, let the follow-up run itself",
      video,
      cards: [
        { eyebrow: "Invoices", title: "Branded invoices that customers can pay in their currency", href: "#" },
        { eyebrow: "Plans", title: "Recurring plans with prorating and retries handled", href: "#" },
        { eyebrow: "Usage", title: "Bill by what customers actually used this month", href: "#" },
      ],
    },
    {
      label: "Build",
      tone: "magenta",
      eyebrow: "Build",
      title: "Put accounts and payouts inside your own app",
      video,
      cards: [
        { eyebrow: "Accounts API", title: "Open accounts for your users with a few calls", href: "#" },
        { eyebrow: "Payouts", title: "Pay sellers and creators around the world on schedule", href: "#" },
        { eyebrow: "Card issuing", title: "Launch branded cards for your customers", href: "#" },
      ],
    },
  ],
};

export default function Demo() {
  return <AirwallexUniverse {...universeSample} />;
}
