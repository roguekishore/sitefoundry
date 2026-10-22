// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { AttioChangelog, type AttioChangelogProps } from "./attio-changelog";

export const changelogSample: AttioChangelogProps = {
  badge: "What's new",
  lead: "Sharper every week.",
  rest: "Fresh releases on a steady beat.",
  action: { label: "See every release", href: "#releases" },
  entries: [
    { date: "October 14, 2026", title: "Run history for every flow", text: "Step through each run and see exactly which agent did what.", href: "#run-history" },
    { date: "October 14, 2026", title: "Meeting-note steps", text: "Turn a call summary straight into tasks.", href: "#meeting-steps" },
    { date: "October 7, 2026", title: "Twelve new integrations", text: "Bring more of your stack into flows, from billing to support desks.", href: "#integrations" },
    { date: "October 7, 2026", title: "Smarter prompts in Ask", text: "Tessel now suggests the next question for you.", href: "#ask" },
  ],
  newsletter: {
    lead: "Keep up with Tessel.",
    rest: "Release notes, once a month.",
    placeholder: "Work email",
    submitLabel: "Sign up",
  },
};

export default function Demo() {
  return <AttioChangelog {...changelogSample} />;
}
