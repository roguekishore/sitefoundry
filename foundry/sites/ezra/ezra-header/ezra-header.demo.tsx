import { Orbit } from "lucide-react";
import { EzraLockup } from "@foundry/ezra-lockup";
import { EzraHeader, type EzraHeaderProps } from "./ezra-header";

export const headerSample: EzraHeaderProps = {
  logo: <EzraLockup partner="Alder" name="kestrel" mark={<Orbit aria-hidden className="size-[1em]" strokeWidth={2.25} />} />,
  logoLabel: "Alder and Kestrel, home",
  links: [
    { label: "The visit", href: "#" },
    { label: "Prices", href: "#" },
    { label: "Clinics", href: "#" },
    { label: "Stories", href: "#" },
  ],
  signIn: { label: "Log in", href: "#" },
  action: { label: "Reserve a scan", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return <EzraHeader {...headerSample} />;
}
