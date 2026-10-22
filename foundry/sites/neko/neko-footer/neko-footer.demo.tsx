// Sample content lives here (gallery only); the page reuses it. Ardent Health is made up.
import { Activity } from "lucide-react";
import { NekoFooter, type NekoFooterProps } from "./neko-footer";

export const footerSample: NekoFooterProps = {
  eyebrow: "The check-up, rebuilt",
  title: "Know your body sooner",
  cta: { label: "Book a visit", href: "#book" },
  label: "Ardent Health",
  tagline: "The check-up, rebuilt from scratch",
  columns: [
    {
      title: "Company",
      links: [
        { label: "Our story", href: "#story" },
        { label: "Newsroom", href: "#news" },
        { label: "Clinics", href: "#clinics" },
        { label: "Join us", href: "#jobs" },
        { label: "Research", href: "#research" },
        { label: "Openness report", href: "#open" },
      ],
    },
    {
      title: "Members",
      links: [
        { label: "Sign in", href: "#signin" },
        {
          label: "Get the app",
          href: "#app",
          badge: (
            <span className="ml-1 inline-flex size-4 items-center justify-center rounded-[4px] border border-foreground bg-highlight">
              <Activity className="size-3" strokeWidth={2.5} />
            </span>
          ),
        },
        { label: "Questions", href: "#faq" },
        { label: "Help", href: "#help" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy", href: "#privacy" },
        { label: "Terms", href: "#terms" },
        { label: "Cookies", href: "#cookies" },
      ],
    },
    {
      title: "Follow",
      links: [
        { label: "Instagram", href: "#ig" },
        { label: "LinkedIn", href: "#li" },
        { label: "YouTube", href: "#yt" },
        { label: "X", href: "#x" },
      ],
    },
  ],
  wordmark: "Ardent",
  locale: { label: "United Kingdom · English", href: "#locale" },
  copyright: "© 2026 Ardent Health Ltd",
  contact: { title: "Talk to our team", email: "hello@ardent.example" },
};

export default function Demo() {
  return <NekoFooter {...footerSample} />;
}
