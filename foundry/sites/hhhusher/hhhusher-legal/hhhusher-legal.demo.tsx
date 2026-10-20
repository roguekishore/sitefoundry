// Sample terms for a made-up company (Rimlock). Not legal advice; written for the gallery only.
import { HhhusherLegal, type HhhusherLegalProps } from "./hhhusher-legal";

export const termsSample: HhhusherLegalProps = {
  sections: [
    {
      heading: "About this site",
      paragraphs: [
        "Rimlock works to keep everything on this site correct and current, but we can't promise that every detail is complete or free of mistakes. Colours in photos can look different on your screen, specifications are improved from time to time, and now and then a price or a stock level may be wrong. If that affects an order you've placed, we'll tell you and offer to cancel it at no cost. We may update the content of this site at any time without notice. Rimlock isn't responsible for losses that come from using the site or from sites we link to, and we can't be held responsible for interruptions to the site or its availability. We use cookies to understand how the site is used and to remember your preferences; they don't identify you. We only keep personal details that you give us, for example when you order or join our mailing list, we treat them in confidence and we never sell them. We share them only when we must, such as with the courier delivering your parcel. You can leave the mailing list at any time from the link in any email or by writing to us.",
      ],
    },
    {
      heading: "Orders",
      paragraphs: [
        "You can order on this site. An order is binding once we've confirmed it by email. Straight after you order you'll receive a receipt, and we normally pack and send orders within two working days.",
        "Our workshop is open Monday to Friday, except public holidays. If something holds up your order, such as a part being out of stock, we'll let you know straight away. When your parcel leaves us we'll email you the tracking details. Everything you send us while ordering travels over an encrypted connection.",
      ],
    },
    {
      heading: "Payment and delivery",
      paragraphs: [
        "We take the major credit and debit cards and a couple of popular online wallets; which ones you see depends on your country. Prices for customers in the EU include Belgian VAT at 21%. Outside the EU and the US, your country may add import duty or local sales tax when the parcel arrives; these are paid by you, and your local customs office can tell you more. Delivery costs are shown before you pay. We send parcels with major couriers from our workshop in Ghent and our partner warehouse in Ohio, and most arrive within four to eight working days. Orders placed after noon on a Friday are packed the following Monday.",
        "Delivery times depend on your country and on customs, so the times above are a guide only. We may also hold an order while a payment is being checked.",
      ],
    },
    {
      heading: "Returns",
      paragraphs: [
        "If you buy from us directly, you have 30 days from delivery to change your mind. Write to us within that time to start a return, then send the Veil back unused, in its original box and packaging. Returns that arrive used or damaged can't be refunded and will be posted back to you.",
        "The parcel is your responsibility until it reaches us, so please use a tracked service. We can't refund parcels lost on the way back, and we're not responsible for delays at customs outside the EU.",
        "Return postage is paid by you. We'd rather keep prices low for everyone than build the cost of free returns into every order.",
        "Refunds go back to the card or wallet you paid with, within ten days of the return reaching us. A Veil that turns out to be faulty within 30 days will be replaced or refunded. After that, and for Veils bought from our dealers, a two-year warranty applies; see the warranty page for details.",
      ],
    },
  ],
};

export default function Demo() {
  return <HhhusherLegal {...termsSample} />;
}
