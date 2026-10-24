// Sample content lives here (gallery only); the page reuses it. Kite and Paper Kite Co. are made up.
import { DiabrowserFooter, type DiabrowserFooterProps } from "./diabrowser-footer";

const link = (label: string) => ({ label, href: "#" });

export const footerSample: DiabrowserFooterProps = {
  columns: [
    { title: "Product", links: ["For teams", "What's new", "Changelog", "Windows"].map(link) },
    { title: "Resources", links: ["Support", "Status", "Privacy", "Terms", "Security", "Trust portal"].map(link) },
    { title: "Company", links: ["About", "Jobs", "Letters", "Pilot program"].map(link) },
    { title: "Connect", links: ["Bluesky", "LinkedIn", "Instagram"].map(link) },
  ],
  mark: (
    <span className="block text-right font-display text-[22px] leading-[22px] tracking-[-0.03em] normal-case">
      Paper
      <br />
      Kite Co.
    </span>
  ),
  copyright: ["Copyright", "© 2026"],
  credit: ["Drawn and built by", "Paper Kite Co. in Lisbon"],
};

export default function Demo() {
  return <DiabrowserFooter {...footerSample} />;
}
