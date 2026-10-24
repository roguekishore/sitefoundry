// Sample content lives here (gallery only); the page reuses it. Every company and person is made up.
import { Building2, Heart, Hexagon, Send, Shield } from "lucide-react";
import { SupabaseStories, type SupabaseStoriesProps } from "./supabase-stories";

export const storiesSample: SupabaseStoriesProps = {
  title: [{ text: "How fast-growing teams", tone: "muted" }, { text: "keep their data on Tidepool" }],
  link: { label: "Read more stories", href: "#" },
  stories: [
    {
      name: "Kindling",
      logo: <Heart fill="currentColor" strokeWidth={0} />,
      tagline: "Running a quarter of a million generated apps, each on its own Tidepool backend.",
      quote: "Kindling exists so that anyone can make software. Most people never learn to program. We let the rest of the world build anyway.",
      person: { name: "Imogen Vale, Head of Product, Kindling" },
      link: { label: "Read the story →", href: "#" },
      tone: "sunset",
    },
    {
      name: "Harbourline Homes",
      logo: <Building2 strokeWidth={2} />,
      tagline: "Moved forty thousand agents onto one shared listings database.",
      quote: "We replaced six legacy systems in a single quarter and nobody on the sales floor noticed the switch.",
      person: { name: "Tomas Reyes, CTO, Harbourline Homes" },
      link: { label: "Read the story →", href: "#" },
      tone: "ink",
    },
    {
      name: "Wardmark",
      logo: <Shield strokeWidth={2} />,
      tagline: "Keeps audit trails for regulated clinics in three countries.",
      quote: "Row rules gave our compliance team something they could read for themselves, which changed every review.",
      person: { name: "Priya Anand, Security Lead, Wardmark" },
      link: { label: "Read the story →", href: "#" },
      tone: "deep",
    },
    {
      name: "Cubeworks",
      logo: <Hexagon fill="currentColor" strokeWidth={0} />,
      tagline: "Serves live inventory to two thousand warehouse screens.",
      quote: "Live sync took a week to wire up. The polling service it replaced took us a year to keep alive.",
      person: { name: "Dana Kowal, Staff Engineer, Cubeworks" },
      link: { label: "Read the story →", href: "#" },
      tone: "night",
    },
    {
      name: "Papercrane",
      logo: <Send strokeWidth={2} />,
      tagline: "Sends nine million scheduled messages a day from workers.",
      quote: "Our whole delivery pipeline is a handful of workers and one table. That is the entire system.",
      person: { name: "Leo Brandt, Founder, Papercrane" },
      link: { label: "Read the story →", href: "#" },
      tone: "glow",
    },
  ],
};

export default function Demo() {
  return <SupabaseStories {...storiesSample} />;
}
