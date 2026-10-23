import { LithicTrust, type LithicTrustProps } from "./lithic-trust";

export const trustSample: LithicTrustProps = {
  cards: [
    {
      title: "Plugged straight into the card networks",
      marks: [
        { name: "NORTHLINE", variant: "caps" },
        { name: "orbis", variant: "heavy" },
        { name: "Paxa", variant: "plain" },
      ],
      contours: true,
    },
    {
      title: "Audited and certified, every year",
      text: "Yearly SOC audits, card-data standards and a certified security program",
      badge: true,
    },
    {
      title: "Funded by investors who back infrastructure",
      marks: [
        { name: "Halden Partners", variant: "plain" },
        { name: "Ridge & Vale", variant: "light" },
        { name: "KESTREL", variant: "caps" },
        { name: "Oakmoor", variant: "heavy" },
      ],
      contours: true,
    },
    { title: "99.99% availability", text: "Maintenance never takes you offline" },
  ],
};

export default function Demo() {
  return <LithicTrust {...trustSample} />;
}
