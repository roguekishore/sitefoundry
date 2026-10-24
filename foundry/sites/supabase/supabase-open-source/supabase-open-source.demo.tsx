// Sample content lives here (gallery only); the page reuses it. Tidepool is made up.
import { Star } from "lucide-react";
import { SupabaseOpenSource, type SupabaseOpenSourceProps } from "./supabase-open-source";

export const openSourceSample: SupabaseOpenSourceProps = {
  title: "Built where you can see it",
  body: "Every line of Tidepool is public, because the tools you lean on should be readable, auditable and shaped by their users. Fork it, host it, send a fix. You can always leave.",
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
