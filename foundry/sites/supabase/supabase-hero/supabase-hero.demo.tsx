// Sample content lives here (gallery only); the page reuses it. Tidepool is made up.
import { SupabaseHero, type SupabaseHeroProps } from "./supabase-hero";

export const heroSample: SupabaseHeroProps = {
  title: [{ text: "Start on a Sunday" }, { text: "Serve a whole country", tone: "brand" }],
  lead: "Every pool begins as a dedicated SQL database. Switch on sign-in, an instant API, workers, live sync, file storage and embeddings as you need them.",
  primary: { label: "Open a pool", href: "#" },
  secondary: { label: "Book a walkthrough", href: "#" },
};

export default function Demo() {
  return <SupabaseHero {...heroSample} />;
}
