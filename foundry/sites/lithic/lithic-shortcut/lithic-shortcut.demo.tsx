import { LithicShortcut, type LithicShortcutProps } from "./lithic-shortcut";

export const shortcutSample: LithicShortcutProps = {
  title: "Rather start with the raw API?",
  links: [
    { label: "Open the test bench", href: "#" },
    { label: "Browse the guides", href: "#" },
    { label: "See what shipped", href: "#" },
  ],
};

export default function Demo() {
  return <LithicShortcut {...shortcutSample} />;
}
