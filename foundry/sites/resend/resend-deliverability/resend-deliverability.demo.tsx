// Sample content (gallery only); the page reuses it.
import { Ban, BadgeCheck, Gauge, Globe, Hand, KeyRound, MapPin, Server, ShieldCheck } from "lucide-react";
import { ResendDeliverability, type ResendDeliverabilityProps } from "./resend-deliverability";

export const deliverabilitySample: ResendDeliverabilityProps = {
  title: ["Land in inboxes,", "skip the junk pile"],
  items: [
    { icon: <Ban strokeWidth={1.5} />, title: "Blocklist watch", text: <>Hear first when your domain turns up on a <a href="#lists">public blocklist</a>, with the delisting request already drafted for you.</> },
    { icon: <MapPin strokeWidth={1.5} />, title: "Send from nearby", text: "Mail leaves from the region closest to its reader, with hubs across four continents to cut the wait." },
    { icon: <BadgeCheck strokeWidth={1.5} />, title: "Verified brand marks", text: <>Show your logo beside every message with <a href="#marks">brand indicators</a>, and get help with the certificate that unlocks them.</> },
    { icon: <Gauge strokeWidth={1.5} />, title: "Warmed private IPs", text: "A private address that ramps up its volume on its own as your sending grows, with no waiting list." },
    { icon: <Hand strokeWidth={1.5} />, title: "Smart do-not-send list", text: <>Stop repeat sends to people who opted out and stay in line with <a href="#rules">anti-spam rules</a> everywhere you sell.</> },
    { icon: <Globe strokeWidth={1.5} />, title: "Domain health checks", text: "Your DNS is checked around the clock, and you hear about any change that could hurt your reach." },
    { icon: <KeyRound strokeWidth={1.5} />, title: "Signed and verified", text: <>Prove each message is really yours with <a href="#signing">signed headers</a> and an approved sender list.</> },
    { icon: <Server strokeWidth={1.5} />, title: "Proven sending fleet", text: "Addresses with a long clean record, shared out across separate pools so one noisy sender can't drag you down." },
    { icon: <ShieldCheck strokeWidth={1.5} />, title: "Spoofing guard", text: <>Publish a <a href="#policy">sender policy</a> that tells inbox providers what to do with mail that pretends to be you.</> },
  ],
};

export default function Demo() {
  return <ResendDeliverability {...deliverabilitySample} />;
}
