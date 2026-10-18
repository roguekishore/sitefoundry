// Sample content lives here (gallery only); the page reuses it.
import { StripeBook, type StripeBookProps } from "./stripe-book";

export const bookSample: StripeBookProps = {
  title: "On the shelf",
  rest: "Good companies start with good ideas.",
  book: {
    title: "Ledgers & Lanterns",
    subtitle: "A history of keeping count",
    author: "Ines Valcourt",
    blurb: (
      <p>
        Long before money was coins, it was a mark on a tally stick. Valcourt, a historian of trade and a former bank archivist,
        follows bookkeeping from clay tokens to double-entry ledgers to the databases under every card payment. Her{" "}
        <a href="/books/ledgers">book</a> argues that each new way of keeping count let strangers trust one another a little more.
      </p>
    ),
  },
  note: "For more on how economies grow and technology spreads, see our own publications:",
  links: [
    { label: "fernpay Books", href: "/books", badge: "f" },
    { label: "The Long View", href: "/long-view", badge: "L" },
  ],
  seal: { letter: "R", text: "The Reading Room" },
};

export default function Demo() {
  return <StripeBook {...bookSample} />;
}
