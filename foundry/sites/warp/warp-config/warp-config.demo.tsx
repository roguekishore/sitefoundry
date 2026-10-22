// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpButton } from "@foundry/warp-button";
import { WarpConfig, type WarpConfigProps } from "./warp-config";

const files: WarpConfigProps["tabs"][number]["files"] = [
  { name: "crews/", kind: "folder" },
  { name: "triggers/", kind: "folder" },
  { name: "hosts/", kind: "folder" },
  { name: "playbooks/", kind: "folder" },
  { name: "hooks/", kind: "folder" },
  { name: "graders/", kind: "folder" },
  { name: "trials/", kind: "folder" },
  { name: "line.yaml", kind: "file" },
];

export const configSample: WarpConfigProps = {
  id: "config",
  tag: "Config",
  status: "online",
  title: "Your whole line, written down as config.",
  lead: "Lines-as-config give you a versioned, measurable way to tune what your agents cost and how well they ship.",
  action: (
    <WarpButton href="#" variant="outline" arrow>
      Read more
    </WarpButton>
  ),
  caption: "fig. 2 — line config files",
  tabs: [
    {
      label: "Line",
      description:
        "The line file is the common base under every agent. It links repos, keys, where work comes from and which cloud it runs in, then sets the defaults each crew picks up.",
      files,
      openFile: "line.yaml",
      language: "yaml",
      code: [
        "version: v2beta",
        "name: storefront-line",
        "summary: Self-running delivery line for a storefront app.",
        "handle: storefront",
        "repos:",
        "  - org: northwind",
        "    name: storefront-api",
        "  - org: northwind",
        "    name: storefront-web",
        "keys:",
        "  - RELEASE_SIGNING_KEY",
        "tools:",
        "  tracker:",
        "    serverId: TRACKER_SERVER_ID",
        "clouds:",
        "  gcp:",
        "    account: lathe-runner@northwind.iam",
        "inbox:",
        "  - from: chat",
        "  - from: tickets",
        "defaults:",
        "  model: balanced",
        "  host: standard",
      ].join("\n"),
    },
    {
      label: "Crews",
      description: "Crews are named groups of agents with one job each: triage, build, review, release. Each one says which model it uses and what it may touch.",
      files,
      openFile: "crews/",
      language: "yaml",
      code: ["crew: review", "model: careful", "may:", "  - read", "  - comment", "limits:", "  minutes: 20", "  spend: 3.00"].join("\n"),
    },
    { label: "Triggers", description: "Triggers start work on their own: a new ticket, a failing check, a schedule, or a message in chat." },
    { label: "Hosts", description: "Hosts are where agents run: our cloud, your own machines, or a short-lived sandbox per job." },
    { label: "Playbooks", description: "Playbooks hold the know-how agents reuse: how your team names branches, writes tests and ships." },
    { label: "Hooks", description: "Hooks let other systems hear about a line's progress, and send work back into it." },
    { label: "Graders", description: "Graders score every finished job, so a change to a model or prompt shows up as a number." },
    { label: "Trials", description: "Trials replay real past jobs against new settings before you switch a line over." },
  ],
};

export default function Demo() {
  return <WarpConfig {...configSample} />;
}
