// Sample content lives here (gallery only); the page reuses it. Every handle and post is made up.
import { MessageCircle } from "lucide-react";
import { SupabaseCommunity, type SupabaseCommunityProps } from "./supabase-community";

export const communitySample: SupabaseCommunityProps = {
  title: "Meet the regulars",
  description: "Here is what builders keep telling each other about working with Tidepool.",
  cta: { label: "Come say hello", href: "#" },
  badge: <MessageCircle strokeWidth={3} />,
  posts: [
    { handle: "@juno_ships", text: "Workers + sign-in + a local pool on my laptop. Honestly that is the whole stack now.", href: "#" },
    { handle: "@petra.codes", text: "Set up a pool on the train this morning. By the time I got off, the API was live. Nice touch.", href: "#" },
    { handle: "@ollie_fm", text: "Spun up a local pool with one command and it just sat there quietly working. Very pleasant tools.", href: "#" },
    { handle: "@ines_builds", text: "Spent a week inside Tidepool for my new side project. Row rules make the security story so much shorter for a solo founder.", href: "#" },
    { handle: "@karl_dev", text: "Moved two products off a self-managed cluster last month.\n\nThe bill went down and so did my stress. Nothing I miss about the old setup.", href: "#" },
    { handle: "@maya_r", text: "I love everything about it, quietly.", href: "#" },
    { handle: "@samwise_io", text: "Light, quick and fun. Accounts and a few tables in an evening. Almost suspiciously easy.", href: "#" },
    { handle: "@feodora", text: "Watching Tidepool go from 'interesting' to 'what everyone uses' in under two years has been something.", href: "#" },
    { handle: "@hal_writes", text: "Tidepool is just good. ⚡", href: "#" },
    { handle: "@lindqvist", text: "Finally tried it today and wondered why I waited. Went from an empty folder to accounts, a database and live updates in about twenty minutes.", href: "#" },
    { handle: "@b_okafor", text: "The best developer product I have used in years. The guides, the speed, even the way the URLs read. Other tools should study it.", href: "#" },
    { handle: "@remi_ux", text: "Their assistant helped me write cleaner row rules and explained why. That is a good use of AI.", href: "#" },
    { handle: "@tess_k", text: "I always used it as a plain database. Yesterday I tried workers for a webhook and now I am rethinking everything.", href: "#" },
    { handle: "@nadia_ops", text: "Custom domains took two minutes. I set it up while my coffee cooled.", href: "#" },
    { handle: "@gus_m", text: "The built-in advisors caught an open table before launch. Calm, useful, not naggy.", href: "#" },
    { handle: "@arjun_p", text: "Running a local pool and pushing the same schema to production is how this should always have worked.", href: "#" },
    { handle: "@wren.dev", text: "Live sync for our shared whiteboard took an afternoon. We had budgeted two sprints.", href: "#" },
    { handle: "@clio", text: "It keeps getting better every month and never gets in my way.", href: "#" },
    { handle: "@omar_builds", text: "Used it for a weekend hackathon, then kept it for the real product. That says enough.", href: "#" },
    { handle: "@vik", text: "Embeddings in the same database as my rows. One less service to babysit.", href: "#" },
  ],
};

export default function Demo() {
  return <SupabaseCommunity {...communitySample} />;
}
