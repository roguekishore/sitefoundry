// Sample content (gallery only); the page reuses it.
import { ChartLine, Users } from "lucide-react";
import { ResendBeyond, type ResendBeyondProps } from "./resend-beyond";

export const beyondSample: ResendBeyondProps = {
  title: "Past the first draft",
  text: [
    "Sort and steer your contacts without a spreadsheet in sight.",
    "Plain reports and numbers that show what to send better next time.",
  ],
  cards: [
    {
      icon: <Users strokeWidth={1.5} />,
      title: "Audience lists",
      text: "Bring in a list of any size in a minute or two, then see every contact and the fields you keep on them.",
      link: { label: "How it works", href: "#lists" },
    },
    {
      icon: <ChartLine strokeWidth={1.5} />,
      title: "Campaign reports",
      text: "See who opened, who clicked and where a send stalled, broken down for each campaign you run.",
      link: { label: "How it works", href: "#reports" },
    },
  ],
};

export default function Demo() {
  return <ResendBeyond {...beyondSample} />;
}
