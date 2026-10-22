// Sample content (gallery only); the page reuses it. Tidewell is a made-up bank.
import { ColumnHeader, type ColumnHeaderProps } from "./column-header";

export function TidewellMark({ className }: { className?: string }) {
  return <span className={`font-display text-[1.375rem] font-semibold tracking-[-0.045em] text-foreground lg:text-2xl ${className ?? ""}`}>tidewell</span>;
}

export const headerSample: ColumnHeaderProps = {
  announcement: { text: "Three new rails are live.", linkLabel: "Read the notes.", href: "#" },
  brand: <TidewellMark />,
  links: [
    { label: "Platform", href: "#", menu: true },
    { label: "Builders", href: "#", menu: true },
    { label: "Journal", href: "#" },
    { label: "About", href: "#" },
  ],
  signIn: { label: "Log in", href: "#" },
  action: { label: "Start here", href: "#" },
};

export default function Demo() {
  return (
    <div className="min-h-[40rem] bg-background">
      <ColumnHeader {...headerSample} />
    </div>
  );
}
