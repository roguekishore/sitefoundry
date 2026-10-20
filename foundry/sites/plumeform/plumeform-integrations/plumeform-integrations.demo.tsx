// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { PlumeformIntegrations, type PlumeformIntegrationsProps } from "./plumeform-integrations";

export const integrationsSample: PlumeformIntegrationsProps = {
  eyebrow: "Where marks go",
  title: "Send every mark where your school keeps them.",
  body: (
    <p>
      When a student hands in, Tidewell can add a row to a spreadsheet, post to your staff chat, update the gradebook, call your own
      webhook, or wait for a read-only Marks API to fetch it. Spreadsheets, chat, the gradebook, webhooks and the API are Plus. CSV
      export and sharing come with every plan.
    </p>
  ),
  link: { label: "See every connection", href: "#connections" },
  chipGroups: [
    { label: "Export", chips: [{ label: "CSV" }, { label: "XLSX", badge: "Plus" }, { label: "Mark scheme", badge: "Plus" }, { label: "Report cards", badge: "Plus" }, { label: "Weekly email", badge: "Plus" }] },
    { label: "Share, on every plan", chips: [{ label: "Link" }, { label: "QR code" }, { label: "Class page" }] },
  ],
  footnote: "A working example with made-up marks, sped up. Nothing is sent or stored.",
};

export default function Demo() {
  return <PlumeformIntegrations {...integrationsSample} />;
}
