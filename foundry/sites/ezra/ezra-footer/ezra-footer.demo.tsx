import { Orbit } from "lucide-react";
import { EzraLockup } from "@foundry/ezra-lockup";
import { EzraFooter, type EzraFooterProps } from "./ezra-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: EzraFooterProps = {
  logo: <EzraLockup partner="Alder" name="kestrel" mark={<Orbit aria-hidden className="size-[1em]" strokeWidth={2.25} />} />,
  logoLabel: "Alder and Kestrel, home",
  columns: [
    { title: "Get in touch", links: links("care@kestrel.example", "555 014 2270"), region: { label: "Canada", href: "#" } },
    { title: "About", links: links("Your risk", "Stories", "Journal", "Why we exist", "Jobs", "News") },
    { title: "Help", links: links("Clinics", "Prices", "Questions", "Gift a scan", "Terms of use", "Privacy", "Remote care consent") },
    { title: "Elsewhere", links: links("Facebook", "Threads", "Instagram", "LinkedIn", "Letters") },
    { title: "Work with us", links: links("For clinicians", "For companies", "For imaging centres") },
  ],
  copyright: "© 2026 Kestrel",
};

export default function Demo() {
  return <EzraFooter {...footerSample} />;
}
