// Sample content lives here (gallery only); the page reuses it.
import { StripeQuote, type StripeQuoteProps } from "./stripe-quote";

export const quoteSample: StripeQuoteProps = {
  quotes: [
    {
      brand: "studiohub",
      quote: "fernpay gave us one partner for every studio we serve – from yoga lofts in Pune to climbing gyms in Leeds – so they can keep growing while we keep shipping.",
      name: "Riya Kapoor",
      role: "Head of Payments, Studiohub",
      link: { label: "Read the story", href: "/stories/studiohub" },
    },
    {
      brand: "TRADESKIT",
      quote: "We went from invoices on paper to instant payouts for forty thousand electricians and plumbers in one quarter.",
      name: "Owen Hale",
      role: "Chief Product Officer, Tradeskit",
      link: { label: "Read the story", href: "/stories/tradeskit" },
    },
    {
      brand: "inkwell",
      quote: "Paid newsletters are our whole business. fernpay's billing is the one part of the stack we never worry about.",
      name: "Mara Lind",
      role: "Co-founder, Inkwell",
      link: { label: "Read the story", href: "/stories/inkwell" },
    },
    {
      brand: "counterpoint",
      quote: "Restaurants switch to us faster because payments just work on day one, at the table and online.",
      name: "Dev Sethi",
      role: "VP Partnerships, Counterpoint",
      link: { label: "Read the story", href: "/stories/counterpoint" },
    },
  ],
};

export default function Demo() {
  return <StripeQuote {...quoteSample} />;
}
