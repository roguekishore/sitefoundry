// Sample content lives here (gallery only); the page reuses it. Tidepool is made up.
import { AtSign, Camera, MessageCircle, Music2, Rss, Sun, Video } from "lucide-react";
import { TidepoolMark } from "../supabase-header/supabase-header.demo";
import { SupabaseFooter, type SupabaseFooterProps } from "./supabase-footer";

const links = (labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: SupabaseFooterProps = {
  logo: <TidepoolMark large />,
  trust: {
    lead: "Your data is guarded.",
    link: { label: "How we secure it", href: "#" },
    badges: [
      { name: "SOC 2 Type II", note: "Audited" },
      { name: "HIPAA", note: "Ready" },
      { name: "ISO 27001", note: "Certified" },
    ],
  },
  socials: [
    { label: "Posts", icon: <AtSign strokeWidth={1.75} />, href: "#" },
    { label: "Source", icon: <Rss strokeWidth={1.75} />, href: "#" },
    { label: "Chat", icon: <MessageCircle strokeWidth={1.75} />, href: "#" },
    { label: "Videos", icon: <Video strokeWidth={1.75} />, href: "#" },
    { label: "Clips", icon: <Music2 strokeWidth={1.75} />, href: "#" },
    { label: "Photos", icon: <Camera strokeWidth={1.75} />, href: "#" },
  ],
  newsletter: { text: "Product news from Tidepool, once a month.", placeholder: "you@work.com", button: "Sign up" },
  columns: [
    { title: "Platform", links: links(["Plans", "Managed SQL", "Sign-in", "Workers", "Compute", "Live sync", "Files", "Embeddings", "Schedules", "All features", "Release week"]) },
    {
      title: "Use cases",
      links: links([
        "AI products", "No-code teams", "First projects", "Developers", "SQL veterans", "Weekend builders", "Hackathons",
        "Startups", "Agencies", "Enterprise", "Lab teams", "Hosted SQL", "B2B software", "Finance", "Health", "Agents",
        "Leaving a document store", "Leaving another host",
      ]),
    },
    { title: "Resources", links: links(["Journal", "Help", "Status", "Partner with us", "Partner directory", "Answers", "Brand kit", "Security & compliance", "Regions", "SOC 2", "HIPAA"]) },
    { title: "Builders", links: links(["Guides", "Tidepool library", "Changelog", "Feed"]) },
    { title: "People", links: links(["Meetups & talks", "Ambassadors", "Contributing", "Source code", "Dev blog"]) },
    {
      title: "Company",
      links: links(["About", "Jobs", "Release stages", "Legal centre", "Privacy", "Privacy choices", "Fair use", "humans.txt", "lawyers.txt", "security.txt", "Contact"]),
    },
  ],
  copyright: "© Tidepool Labs",
  end: (
    <button type="button" aria-label="Switch theme" className="flex text-foreground/70 transition-colors duration-150 hover:text-foreground">
      <Sun className="size-4" />
    </button>
  ),
};

export default function Demo() {
  return <SupabaseFooter {...footerSample} />;
}
