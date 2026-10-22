// Sample content lives here (gallery only); the page reuses it. All releases are made up.
import { LinearChangelog, type LinearChangelogProps } from "./linear-changelog";

export const changelogSample: LinearChangelogProps = {
  title: "What's new",
  entries: [
    {
      title: "Linked change sets",
      text: "Related pull requests now show as one stack in review, so you can step through each layer in order and merge them together.",
      date: "Oct 14, 2026",
      href: "#linked-change-sets",
    },
    {
      title: "Finer control over agent sessions",
      text: "Agent sessions are the quickest route from an issue to a working diff. Set limits, pick the branch and approve each step.",
      date: "Sep 30, 2026",
      href: "#agent-sessions",
    },
    {
      title: "Routines for planning",
      text: "Routines are scheduled agent jobs for a whole team. They can now react to project updates and open follow-up issues.",
      date: "Sep 16, 2026",
      href: "#routines",
    },
    {
      title: "Focused notifications",
      text: "A busy workspace makes a lot of noise. A new focused view surfaces what needs you first and quietly bundles the rest.",
      date: "Sep 2, 2026",
      href: "#focused-notifications",
    },
  ],
  link: { label: "See every release", href: "#changelog" },
};

export default function Demo() {
  return <LinearChangelog {...changelogSample} showOnPhones />;
}
