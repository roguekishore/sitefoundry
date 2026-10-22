// Sample content lives here (gallery only); the page reuses it.
import { wordmarkSample } from "../anduril-wordmark/anduril-wordmark.demo";
import { AndurilFooter, type AndurilFooterProps } from "./anduril-footer";

export const footerSample: AndurilFooterProps = {
  wordmark: wordmarkSample,
  columns: [
    { label: "Company", links: [{ label: "Purpose", href: "#" }, { label: "Dispatches", href: "#" }, { label: "People", href: "#" }, { label: "Supply shop", href: "#" }] },
    { label: "Join us", links: [{ label: "Openings", href: "#" }, { label: "Graduates", href: "#" }, { label: "Service leavers", href: "#" }, { label: "All roles", href: "#" }] },
    { label: "Follow", links: [{ label: "Bluesky", href: "#" }, { label: "Vimeo", href: "#" }, { label: "Threads", href: "#" }, { label: "Mastodon", href: "#" }, { label: "Newsletter", href: "#" }] },
  ],
  contact: { label: "Write to us", link: { label: "hq@northwatch.example", href: "#" } },
  copyright: "Copyright © 2026 Northwatch Systems",
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Supply chain statement", href: "#" },
    { label: "Shareholders", href: "#" },
    { label: "Vendors", href: "#" },
    { label: "Emissions plan", href: "#" },
  ],
};

export default function Demo() {
  return <AndurilFooter {...footerSample} />;
}
