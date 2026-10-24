// Sample content lives here (gallery only); the page reuses it. Tidepool and its starters are made up.
import { BadgeDollarSign, Bot, Layers, Link2, PanelsTopLeft, Smartphone } from "lucide-react";
import { SupabaseTemplates, type SupabaseTemplatesProps } from "./supabase-templates";

export const templatesSample: SupabaseTemplatesProps = {
  title: [{ text: "Get a head start", tone: "muted" }, { text: "with starters that are ready to ship" }],
  link: { label: "Browse every starter", href: "#" },
  featured: [
    {
      icon: <BadgeDollarSign className="text-chart-1" />,
      title: "Paid plans starter",
      description: "Everything a subscription product needs: plans, checkout, invoices and a customer area, wired to Tidepool.",
      href: "#",
      mediaLabel: "Preview of the paid plans starter",
    },
    {
      icon: <PanelsTopLeft />,
      title: "App shell starter",
      description: "A server-rendered app with cookie sessions, typed queries and a utility-first stylesheet, ready to extend.",
      href: "#",
      mediaLabel: "Preview of the app shell starter",
    },
  ],
  templates: [
    { icon: <Bot />, title: "Chat assistant", description: "An open chat app that keeps each conversation in your pool and streams answers as they arrive.", href: "#" },
    { icon: <Link2 />, title: "Retrieval starter", description: "Search your own documents with embeddings stored next to the rows they describe.", href: "#" },
    { icon: <Smartphone className="text-chart-2" />, title: "Mobile accounts", description: "Sign-up, profiles and avatars for a cross-platform phone app in a single afternoon.", href: "#" },
    { icon: <Layers />, title: "Monorepo kit", description: "Web and phone apps sharing one typed client, one schema and one set of access rules.", href: "#" },
  ],
};

export default function Demo() {
  return <SupabaseTemplates {...templatesSample} />;
}
