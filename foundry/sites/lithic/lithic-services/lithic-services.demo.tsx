import { ArrowLeftRight, FileText, Headset, ShieldCheck, SquareCheck } from "lucide-react";
import { LithicServices, type LithicServicesProps } from "./lithic-services";

export const servicesSample: LithicServicesProps = {
  title: "Money is messy. Running a card shouldn’t be.",
  lead: "Go live calmly, learn from every swipe, and grow revenue alongside a partner who has done it before.",
  text: "Our program specialists sit beside your team from the first scoping call through launch day and every quarter after, so the hard parts stay off your desk.",
  cardsTitle: "Pick the level of help that fits you",
  primary: [
    {
      icon: <ArrowLeftRight aria-hidden />,
      title: "Run it yourself",
      lead: "Keep the bank relationship.",
      text: "Work with your sponsor bank directly while using our processing and ledgers, and add services like full dispute handling whenever you need them.",
      link: { label: "Find out more", href: "#" },
    },
    {
      icon: <SquareCheck aria-hidden />,
      title: "Let us run it",
      lead: "Hand over the hard parts.",
      text: "We carry the bank, network and compliance work end to end, so your team can spend its time on the experience your cardholders see.",
      link: { label: "Find out more", href: "#" },
    },
  ],
  secondary: [
    {
      icon: <Headset aria-hidden />,
      title: "Cardholder care",
      text: "Round-the-clock support for your cardholders, written in your brand’s own voice.",
    },
    {
      icon: <FileText aria-hidden />,
      title: "Disputes handled",
      text: "Fewer losses and fewer bad actors, with chargebacks worked from first claim to final ruling.",
    },
    {
      icon: <ShieldCheck aria-hidden />,
      title: "Fraud watch",
      text: "Experienced analysts tune fraud rules and watch every transaction so your program stays protected.",
    },
  ],
};

export default function Demo() {
  return <LithicServices {...servicesSample} />;
}
