// Sample content lives here (gallery only); the page reuses it. Cairn is a made-up bank.
import { IncreaseHeader, type IncreaseHeaderProps } from "./increase-header";

export const wordmark = <span className="font-display text-[1.0625rem] leading-none font-extrabold tracking-[0.12em]">CAIRN</span>;

export const headerSample: IncreaseHeaderProps = {
  brand: "Cairn",
  logo: wordmark,
  links: [
    { label: "Platform", href: "#platform" },
    { label: "Use cases", href: "#use-cases" },
    { label: "Docs", href: "#docs" },
    { label: "Fees", href: "#fees" },
    { label: "Stories", href: "#stories" },
    { label: "Changelog", href: "#changelog" },
  ],
  secondary: { label: "Log in", href: "#login" },
  primary: { label: "Get started", href: "#start" },
};

export default function Demo() {
  return (
    <div className="min-h-[40vh] bg-background">
      <IncreaseHeader {...headerSample} />
    </div>
  );
}
