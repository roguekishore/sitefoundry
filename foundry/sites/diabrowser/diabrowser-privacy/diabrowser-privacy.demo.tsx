// Sample content lives here (gallery only); the page reuses it. Kite is made up.
import { Feather, LockKeyhole } from "lucide-react";
import { DiabrowserPrivacy, type DiabrowserPrivacyProps } from "./diabrowser-privacy";

export const privacySample: DiabrowserPrivacyProps = {
  headingTop: "Private by default",
  headingBottom: "and yours to tune",
  chips: [
    { label: "Remember me", on: true },
    { label: "Ad blocking", on: true },
    { label: "Share page text", on: false },
    { label: "Tracker shield", on: true },
    { label: "Tailored chats", on: false },
    { label: "Sync history", on: true },
  ],
  body: [
    "You decide what Kite keeps about your habits and which apps it may reach. Nothing you do is sold or turned into an ad profile, and synced data is encrypted end to end.",
    "Kite for Teams adds single sign-on, admin controls and audit logs, so a whole company can move over safely.",
  ],
  link: { label: "Read how Kite handles privacy", href: "#" },
  topIcon: <LockKeyhole strokeWidth={1.25} />,
  bottomIcon: <Feather strokeWidth={1.25} />,
};

export default function Demo() {
  return <DiabrowserPrivacy {...privacySample} />;
}
