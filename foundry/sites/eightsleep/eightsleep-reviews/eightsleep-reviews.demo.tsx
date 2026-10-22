import { AtSign, MessageCircle } from "lucide-react";
import { EightsleepReviews, type EightsleepReviewsProps } from "./eightsleep-reviews";

const mention = (handle: string) => <span className="text-highlight">{handle}</span>;

export const reviewsSample: EightsleepReviewsProps = {
  rating: { score: 4.6, caption: "From 38,000+ reviews", label: "4.6 out of 5 stars" },
  title: "More than a million nights slept better, and still counting",
  curveLabel: "7:00 AM",
  cta: { label: "Read more reviews", href: "#" },
  items: [
    { type: "story", name: "Noor & Calvin", role: "Tidewell members", quote: "“He sleeps cold, I sleep warm, and for once neither of us is fighting the duvet.”", link: { label: "Read more", href: "#" } },
    {
      type: "posts",
      posts: [
        { name: "pell_runs", handle: "@pell_runs", text: <>{mention("@tidewell")} genuinely the best money I have spent on recovery. I train harder and wake up less wrecked.</>, date: "6:41 PM · Jan 9, 2026", icon: <AtSign strokeWidth={1.5} /> },
        { name: "Ines Marlow", handle: "@inesmarlow", text: <>Told {mention("@tomasq")} to get a {mention("@tidewell")} Mantle. Not a single regret.</>, date: "8:02 AM · Jun 2, 2026", icon: <MessageCircle strokeWidth={1.5} /> },
      ],
    },
    { type: "story", name: "Dr. Aaron Pike", role: "Tidewell member", quote: "“Inside a month my deep sleep had climbed in a way I could actually see in the data.”", link: { label: "Read more", href: "#" } },
    {
      type: "posts",
      posts: [
        { name: "Saskia Brandt", handle: "@saskiab", text: <>Three weeks on the {mention("@tidewell")} Mantle. My sleep score has never been this steady.</>, date: "10:15 PM · Apr 21, 2026", icon: <AtSign strokeWidth={1.5} /> },
        { name: "devon.k", handle: "@devonk", text: <>Night sweats, gone. Thank you {mention("@tidewell")}.</>, date: "5:30 AM · Feb 14, 2026", icon: <MessageCircle strokeWidth={1.5} /> },
      ],
    },
    { type: "story", name: "Maren", role: "Tidewell member", quote: "“I stopped dreading summer nights. The bed just stays right.”", link: { label: "Read more", href: "#" } },
  ],
};

export default function Demo() {
  return <EightsleepReviews {...reviewsSample} />;
}
