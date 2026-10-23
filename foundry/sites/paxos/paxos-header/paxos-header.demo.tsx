import { PaxosHeader, type PaxosHeaderProps } from "./paxos-header";

export const headerSample: PaxosHeaderProps = {
  brand: "Keelstone",
  links: [
    { label: "Platform", href: "#" },
    { label: "Tokens", href: "#" },
    { label: "About", href: "#" },
    { label: "Audits", href: "#" },
    { label: "Build", href: "#" },
  ],
  action: { label: "Talk to Us", href: "#" },
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="min-h-[24rem] bg-background">
      <PaxosHeader {...headerSample} />
    </div>
  );
}
