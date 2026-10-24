// Sample content lives here (gallery only); the page reuses it. Tidepool is made up.
import { Star, Waves } from "lucide-react";
import { SupabaseHeader, type SupabaseHeaderProps } from "./supabase-header";

/** The made-up wordmark: a lucide icon in the mint highlight and the name in the display face. */
export function TidepoolMark({ large }: { large?: boolean }) {
  return (
    <span className={large ? "flex items-center gap-2.5" : "flex items-center gap-2"}>
      <Waves className={large ? "size-8 text-highlight" : "size-7 text-highlight"} strokeWidth={2.5} />
      <span className={large ? "font-display text-[1.625rem] font-semibold tracking-[-0.02em]" : "font-display text-[1.375rem] font-semibold tracking-[-0.02em]"}>
        tidepool
      </span>
    </span>
  );
}

export const headerSample: SupabaseHeaderProps = {
  logo: <TidepoolMark />,
  nav: [
    {
      label: "Platform",
      menu: [
        { label: "Managed SQL", href: "#", description: "A dedicated database per pool" },
        { label: "Sign-in", href: "#", description: "Accounts, sessions and roles" },
        { label: "Workers", href: "#", description: "Code that runs next to your data" },
        { label: "Files", href: "#", description: "Uploads served from the edge" },
      ],
    },
    {
      label: "Builders",
      menu: [
        { label: "Guides", href: "#" },
        { label: "Client kits", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      label: "Use cases",
      menu: [
        { label: "Side projects", href: "#" },
        { label: "Growing teams", href: "#" },
        { label: "Large companies", href: "#" },
      ],
    },
    { label: "Plans", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Journal", href: "#" },
  ],
  counter: {
    label: (
      <>
        <Star strokeWidth={1.75} />
        48.2K
      </>
    ),
    href: "#",
  },
  signIn: { label: "Log in", href: "#" },
  cta: { label: "Open a pool", href: "#" },
  menuLabel: "Open the menu",
};

export default function Demo() {
  return (
    <div className="min-h-[60svh] bg-background">
      <SupabaseHeader {...headerSample} />
    </div>
  );
}
