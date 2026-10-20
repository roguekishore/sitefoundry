import { HhhusherV2Legal, type HhhusherV2LegalProps } from "./hhhusher-v2-legal";

export const termsSample: HhhusherV2LegalProps = {
  sections: [
    {
      heading: "Accuracy",
      paragraphs: [
        "Quello works to keep everything on this site correct and current, but we can't promise that every detail is complete or up to date. Colours, photos, descriptions, prices and stock levels may now and then be wrong. If a price or stock level turns out to be a mistake, we will tell you and give you the choice to cancel your order. We may change what this site says at any time without notice. Quello isn't liable for direct or indirect losses, including lost profit, that come from relying on this site or the sites it links to, and can't guarantee that the site is always available or free of faults. We use cookies to understand how the site is used; they are not tied to your personal details. We only keep personal data you give us yourself, for example when you buy from the shop or join our mailing list. We treat it as confidential and never sell it; we only share it when we must, for example with a carrier delivering your order. You can leave the mailing list at any time from any of our emails.",
      ],
    },
    {
      heading: "Orders",
      paragraphs: [
        "You can order through this site. An order is binding only once Quello has confirmed it. After you order you'll receive an email acknowledging it, and we normally confirm and process orders within two working days.",
        "We work Monday to Friday, except public holidays. If something holds an order up, such as low stock, we'll tell you straight away. When your parcel leaves us we'll email you a final confirmation and a tracking link. Everything you send to and receive from this site is encrypted.",
      ],
    },
    {
      heading: "Payment and delivery",
      paragraphs: [
        "You can pay by card or with the usual online wallets; not every option is offered in every country. Prices for customers in the European Union include VAT. Outside the EU, local import duties or sales taxes may apply and are paid by you; your local customs office can tell you more. Delivery costs are added to your order and shown before you pay. We ship with the major parcel carriers from our warehouses, and delivery usually takes five to ten working days. Orders placed after Friday lunchtime are processed the following Monday.",
        "Delivery times depend on the country and on customs, so they are a guide, not a promise. Quello may also hold an order while a payment is being checked.",
      ],
    },
    {
      heading: "Returns",
      paragraphs: [
        "If you buy from our shop you can return the hood within 30 days of delivery for a full refund. Contact our support team within those 30 days and send the product back exactly as it arrived: unused, undamaged and in its box. A hood that comes back used or damaged won't be refunded, and we'll send it back to you.",
        "The parcel is your responsibility until it reaches us, and we can't refund items lost on the way, so please use a tracked service. We aren't responsible for customs delays outside the EU.",
      ],
    },
  ],
};

export default function Demo() {
  return <HhhusherV2Legal {...termsSample} />;
}
