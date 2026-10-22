import { PrenuvoHeader, type PrenuvoHeaderProps } from "./prenuvo-header";

export const headerSample: PrenuvoHeaderProps = {
  brand: "oriel",
  homeHref: "#top",
  links: [
    { label: "Plans & prices", href: "#plans" },
    { label: "How it works", href: "#steps" },
    { label: "Our clinicians", href: "#team" },
    { label: "Nervous?", href: "#calm" },
    { label: "For doctors", href: "#doctors" },
    { label: "For teams", href: "#teams" },
    { label: "Sign in", href: "#signin" },
  ],
  cta: { label: "Reserve", mobileLabel: "Reserve a scan", href: "#reserve" },
  region: {
    current: "Canada",
    options: [
      { label: "Canada", href: "#ca" },
      { label: "Ireland", href: "#ie" },
      { label: "New Zealand", href: "#nz" },
    ],
  },
};

export default function Demo() {
  return (
    <div className="dark min-h-[150vh] bg-background">
      <PrenuvoHeader {...headerSample} />
      <div className="h-svh bg-muted" />
    </div>
  );
}
