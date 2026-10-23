import { SlashHeader, type SlashHeaderProps } from "./slash-header";

export const headerSample: SlashHeaderProps = {
  wordmark: "Ferro",
  announcement: { text: "Ferro opens in Lisbon, with euro accounts for every plan", link: { label: "Read the note", href: "#" } },
  links: [
    { label: "Company", href: "#", menu: true },
    { label: "Products", href: "#", menu: true },
    { label: "Industries", href: "#", menu: true },
    { label: "Stories", href: "#" },
    { label: "Plans", href: "#" },
    { label: "Help", href: "#" },
  ],
  signIn: { label: "Log in", href: "#" },
  action: { label: "Open account", href: "#" },
  menuLabel: "Open the menu",
  toTopLabel: "Back to top",
};

export default function Demo() {
  return (
    <div className="min-h-64 bg-background">
      <SlashHeader {...headerSample} fixed={false} />
    </div>
  );
}
