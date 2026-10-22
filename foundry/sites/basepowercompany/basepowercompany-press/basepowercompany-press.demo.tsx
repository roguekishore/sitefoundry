import { BasepowercompanyPress, type BasepowercompanyPressProps } from "./basepowercompany-press";

export const pressSample: BasepowercompanyPressProps = {
  label: "Covered by newsrooms nationwide",
  names: [
    { name: "Gulf Ledger", look: "caps" },
    { name: "Wirehouse", look: "heavy" },
    { name: "The Plains Courier", look: "italic" },
    { name: "Current Affairs Weekly", look: "stacked" },
    { name: "kilowatt", look: "light" },
    { name: "Morning Dispatch", look: "italic" },
    { name: "GRIDLINE", look: "heavy" },
    { name: "The Homestead Review", look: "caps" },
  ],
};

export default function Demo() {
  return <BasepowercompanyPress {...pressSample} />;
}
