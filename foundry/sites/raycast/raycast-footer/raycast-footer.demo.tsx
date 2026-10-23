import { RaycastFooter, type RaycastFooterProps } from "./raycast-footer";

const links = (labels: string[], external: string[] = []) => labels.map((label) => ({ label, href: "#", external: external.includes(label) }));

export const footerSample: RaycastFooterProps = {
  columns: [
    { title: "Product", links: links(["Library", "Studio", "Crews", "Plans", "Release notes", "Browser add-on", "Developers", "Mobile", "Desktop", "Version 2", "API reference", "Handbook", "Fixes", "Tessel or the rest", "Questions"], ["API reference", "Handbook", "Fixes"]) },
    { title: "Core features", links: links(["Assistant", "Notes", "Focus", "Pastebin", "Window layouts", "Shortcuts", "Find files", "Jump links", "Calculator", "Calendar", "System", "Emoji picker"]) },
    { title: "Top plug-ins", links: links(["Design", "Code", "Pomodoro", "Productivity", "Projects", "Time", "Transcripts", "Translation", "Remote work", "Assistant"]) },
    { title: "Company", links: links(["Manifesto", "Customers", "Careers", "Terms", "Privacy", "Fair use", "Data terms", "Trust centre", "Press", "Contact"], ["Trust centre"]) },
    { title: "Community", links: links(["Stories", "Ambassadors", "Chat room", "Short posts", "Code host", "Portfolio"], ["Short posts", "Code host", "Portfolio"]) },
    { title: "By Tessel", links: links(["Keypad", "Glaze", "Snippet shelf", "Link shelf", "Prompts", "Chat presets", "Code images", "Icon maker", "Merch", "Wallpapers"], ["Glaze", "Snippet shelf", "Link shelf", "Prompts", "Chat presets", "Code images", "Icon maker", "Merch"]) },
  ],
  newsletter: {
    title: "Get our newsletter.",
    text: "Product news and updates in your inbox. No spam.",
    placeholder: "you@example.com",
    fieldLabel: "Email address",
    button: "Subscribe",
    fine: "By sending your address you agree to receive our monthly newsletter. Read the privacy policy for details; you can withdraw consent at any time.",
  },
};

export default function Demo() {
  return <RaycastFooter {...footerSample} />;
}
