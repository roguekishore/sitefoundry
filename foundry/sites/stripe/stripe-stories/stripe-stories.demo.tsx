// Sample content lives here (gallery only); the page reuses it.
import { StripeStories, type StripeStoriesProps } from "./stripe-stories";

export const storiesSample: StripeStoriesProps = {
  heading: { lead: "Built for companies of every size.", rest: "Run on a platform that bends to how you work, and keeps up as you grow." },
  segment: {
    title: "Run a global business on one financial backbone",
    text: "Six in ten of the largest Indian retailers already use fernpay to open new markets, add ways to pay and close their books faster.",
    action: { label: "fernpay for enterprise", href: "/enterprise" },
  },
  readLabel: "Read the story",
  openLabel: "Open this story",
  stories: [
    {
      mark: "M",
      markTone: "sun",
      title: "Metroline brings every ticket counter onto one checkout.",
      href: "/stories/metroline",
      art: "aerial",
      facts: [
        { strong: "38", text: "cities" },
        { strong: "4,200+", text: "counters and kiosks" },
        { strong: "Products used", text: "Payments, Terminal, Payouts and Risk" },
      ],
    },
    {
      mark: "HK",
      title: "House of Kora moves ₹900 crore of store and online sales to fernpay.",
      href: "/stories/kora",
      art: "facade",
      facts: [
        { strong: "6", text: "fashion labels" },
        { strong: "310", text: "stores" },
        { strong: "Products used", text: "Payments, Terminal, Reporting and Link" },
      ],
    },
    {
      mark: "B",
      markTone: "paper",
      title: "Basket Bazaar delivers groceries in ten minutes, paid in one tap.",
      href: "/stories/basket",
      art: "market",
      facts: [
        { strong: "2m+", text: "weekly shoppers" },
        { strong: "900", text: "dark stores" },
        { strong: "Products used", text: "Payments, Connect and Cards" },
      ],
    },
    {
      mark: "Tp",
      title: "The Paper takes print and digital subscriptions in one place.",
      href: "/stories/paper",
      art: "dusk",
      facts: [
        { strong: "100%", text: "of subscriptions billed on fernpay" },
        { strong: "Under 10 weeks", text: "from contract to launch" },
        { strong: "Products used", text: "Billing, Payments and Risk" },
      ],
    },
  ],
};

export default function Demo() {
  return <StripeStories {...storiesSample} />;
}
