// Sample content lives here (gallery only); the page reuses it. Tidepool is made up.
import { SupabaseCta, type SupabaseCtaProps } from "./supabase-cta";

export const ctaSample: SupabaseCtaProps = {
  title: [{ text: "Start on a Sunday,", tone: "muted" }, { text: "serve a whole country" }],
  primary: { label: "Open a pool", href: "#" },
  secondary: { label: "Book a walkthrough", href: "#" },
};

export default function Demo() {
  return <SupabaseCta {...ctaSample} />;
}
