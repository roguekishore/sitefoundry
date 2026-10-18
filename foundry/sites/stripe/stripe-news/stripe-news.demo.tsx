// Sample content lives here (gallery only); the page reuses it.
import { StripeNews, type StripeNewsProps } from "./stripe-news";

export const newsSample: StripeNewsProps = {
  title: "Latest news",
  rest: "What's new at fernpay.",
  prevLabel: "Previous story",
  nextLabel: "Next story",
  items: [
    {
      label: "Year in review 2026",
      title: "Businesses on fernpay moved ₹82 lakh crore this year.",
      text: "Our yearly letter looks at what drove it – faster-growing young companies, more sales across borders, and shoppers who now buy through AI assistants.",
      link: { label: "Read the letter", href: "/letter" },
      art: "violet",
    },
    {
      title: "Festival week sets a new record.",
      text: "More than 200,000 shops had their best day ever during the Diwali sales.",
      link: { label: "See the numbers", href: "/festival" },
      art: "dusk",
    },
    {
      title: "The 2026 subscription report.",
      text: "What separates the fastest-growing subscription businesses from the rest.",
      link: { label: "Get the report", href: "/report" },
      art: "tide",
    },
    {
      title: "In conversation: building for a billion buyers.",
      text: "Two founders on the choices that shaped their first decade.",
      link: { label: "Watch the talk", href: "/talk" },
      art: "bloom",
    },
    {
      title: "Sell inside AI assistants.",
      text: "A new open standard lets shoppers buy from you without leaving the chat.",
      link: { label: "Learn more", href: "/agents" },
      art: "grid",
    },
    {
      title: "Store and online, one view.",
      text: "How large retailers bring their counters and websites together.",
      link: { label: "Read the guide", href: "/unified" },
      art: "market",
    },
  ],
};

export default function Demo() {
  return <StripeNews {...newsSample} />;
}
