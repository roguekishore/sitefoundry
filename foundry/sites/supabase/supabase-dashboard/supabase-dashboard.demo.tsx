// Sample content lives here (gallery only); the page reuses it. Tidepool is made up.
import { SupabaseDashboard, type SupabaseDashboardProps } from "./supabase-dashboard";

export const dashboardSample: SupabaseDashboardProps = {
  title: [{ text: "Keep shipping and run your backend" }, { text: "from one calm console", tone: "muted" }],
  tabs: [
    { label: "Rows view", mediaLabel: "Console video: browsing rows" },
    { label: "Query pad", mediaLabel: "Console video: writing a query" },
    { label: "Access rules", mediaLabel: "Console video: editing access rules" },
  ],
};

export default function Demo() {
  return <SupabaseDashboard {...dashboardSample} />;
}
