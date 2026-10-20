import { Braces, MessageSquare, Sheet, Users, Webhook } from "lucide-react";
import { PlumeformV2Integrations, type PlumeformV2IntegrationsProps } from "./plumeform-v2-integrations";

export const integrationsSample: PlumeformV2IntegrationsProps = {
  eyebrow: "Wherever your team is",
  title: "Send every reply where the work happens.",
  body: "Each finished reply can land in a spreadsheet, a chat channel, your CRM, a webhook or the read-only results API. Spreadsheets, chat, CRM, webhooks and the API are on Plus; CSV export and sharing are on every plan.",
  link: { label: "Every connection", href: "#connections" },
  destinations: [
    { icon: <Sheet />, name: "Spreadsheet", badge: "Plus", detail: "Replies tab", status: "Three rows added this morning." },
    { icon: <MessageSquare />, name: "Team chat", badge: "Plus", detail: "If score ≤ 6", status: "Nothing posted yet." },
    { icon: <Users />, name: "CRM", badge: "Plus", detail: "Matched by email", status: "No contacts changed yet." },
    { icon: <Webhook />, name: "Webhook", badge: "Plus", detail: "Signed", status: "No events sent yet." },
    { icon: <Braces />, name: "Results API", badge: "Plus", detail: "Read-only", status: "GET /v1/forms/…/replies?after=…", mono: true },
  ],
  chipRows: [
    {
      label: "Export",
      chips: [{ label: "CSV" }, { label: "Excel", badge: "Plus" }, { label: "Codebook", badge: "Plus" }, { label: "Stats script", badge: "Plus" }, { label: "Weekly email", badge: "Plus" }],
    },
    { label: "Share, on every plan", chips: [{ label: "Link" }, { label: "QR code" }, { label: "Embed" }] },
  ],
};

export default function Demo() {
  return <PlumeformV2Integrations {...integrationsSample} />;
}
