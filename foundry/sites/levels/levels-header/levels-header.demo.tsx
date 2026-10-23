import { LevelsHeader, type LevelsHeaderProps } from "./levels-header";

export const headerSample: LevelsHeaderProps = {
  brand: "Ballast",
  links: [
    { label: "How it works", href: "#system" },
    { label: "What we track", href: "#" },
    { label: "Journal", href: "#" },
    {
      label: "For teams",
      href: "#",
      items: [
        { label: "Employers", href: "#" },
        { label: "Clinics", href: "#" },
      ],
    },
  ],
  secondary: { label: "Sign in", href: "#" },
  action: { label: "Get started", href: "#" },
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    // the bar is fixed: this tall dark box stands in for the hero it normally sits over
    <div className="dark min-h-[28rem] bg-card">
      <LevelsHeader {...headerSample} />
    </div>
  );
}
