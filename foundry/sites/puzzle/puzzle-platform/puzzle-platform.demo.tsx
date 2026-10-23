import { PuzzlePlatform, type PuzzlePlatformProps } from "./puzzle-platform";

export const platformSample: PuzzlePlatformProps = {
  cards: [
    {
      eyebrow: "The ledger underneath",
      title: (
        <>
          See your numbers this morning.
          <br /> Not at the end of next month.
        </>
      ),
      text: "Cash, spend, runway and revenue schedules on a ledger that updates as you go, with cash and accrual views of the very same books.",
      cta: { label: "Tour the ledger", href: "#" },
      tone: "mint",
    },
    {
      eyebrow: "Connections",
      title: "Made for the way finance runs now.",
      text: "Direct feeds bring your data in on their own every day. No exports, no uploading files.",
      pills: ["Paydeck", "Harbor Bank", "Fernpay", "Quillcard", "Staffwise", "Ledgerly", "Roamhire", "Billbox", "+11,500 banks via open banking"],
      cta: { label: "Browse every connection", href: "#" },
      tone: "card",
    },
  ],
};

export default function Demo() {
  return <PuzzlePlatform {...platformSample} />;
}
