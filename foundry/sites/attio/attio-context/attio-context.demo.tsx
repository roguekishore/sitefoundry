// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { BookOpen, Headphones, MessagesSquare, Network, SquareActivity } from "lucide-react";
import { AttioContext, type AttioContextProps } from "./attio-context";

export const contextSample: AttioContextProps = {
  kicker: "Only Tessel has",
  title: "Total Recall",
  mark: "™",
  features: [
    { icon: <SquareActivity />, title: "Nothing to type up.", text: "Mail, meetings, usage and invoices, filed as they happen." },
    { icon: <Network />, title: "Every tool, one memory.", text: "Notes, chat and the rest of your stack, kept in step." },
    { icon: <BookOpen />, title: "Learns your playbook.", text: "Each move is a little sharper than the one before." },
    { icon: <MessagesSquare />, title: "Just ask.", text: "Any account, any question, answered on the spot." },
    { icon: <Headphones />, title: "Agents in the loop.", text: "They read the same facts your people do." },
  ],
};

export default function Demo() {
  return <AttioContext {...contextSample} />;
}
