import { AtSign, MessagesSquare, Play } from "lucide-react";
import { RaycastCommunity, type RaycastCommunityProps } from "./raycast-community";

export const communitySample: RaycastCommunityProps = {
  title: "Join the conversation.",
  subtitle: "Swap tips with other people and get more from Tessel every week.",
  cards: [
    { icon: <MessagesSquare />, name: "Chat room", stat: "12k members", description: "Get early word on new features and see how other people bend Tessel to their day.", link: { label: "Come in", href: "#" } },
    { icon: <AtSign />, name: "Short posts", stat: "41k followers", description: "Keep pace with releases, small features and the odd improvement.", link: { label: "Follow along", href: "#" } },
  ],
  videos: ["Ten ways to speed up a Monday", "Our picks for tidy desks", "Meet the focus timer", "Mastering jump links", "Notes finally land", "A tour of the assistant"].map((title) => ({ title, href: "#" })),
  note: "Browse our video channel to find features you had no idea were there.",
  channel: { label: "Tessel TV", href: "#" },
};

export default function Demo() {
  return <RaycastCommunity {...communitySample} />;
}
