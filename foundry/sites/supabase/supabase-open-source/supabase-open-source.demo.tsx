// Sample content lives here (gallery only); the page reuses it. Tidepool is made up.
import { Star } from "lucide-react";
import { SupabaseOpenSource, type SupabaseOpenSourceProps } from "./supabase-open-source";

export const openSourceSample: SupabaseOpenSourceProps = {
  title: "Built where you can see it",
  body: "Every line of Tidepool is public, because tools you depend on should be readable, auditable and shaped by the people using them. Fork it, run it yourself, send a fix. You can always leave, and you stay in charge.",
  cta: {
    label: (
      <>
        <Star /> Star the repository
      </>
    ),
    href: "#",
  },
  figure: "48.2K",
  figureLabel: "48.2 thousand stars",
};

export default function Demo() {
  return <SupabaseOpenSource {...openSourceSample} />;
}
