// Sample content lives here (gallery only); the pages reuse it.
import { AudioWaveform } from "lucide-react";
import { PlumeformV2Header, type PlumeformV2HeaderProps } from "./plumeform-v2-header";

/** Murmur, the fictional questionnaire builder of this recreation: a waveform and a wordmark. */
export function MurmurLogo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <span className="flex items-center gap-1.5">
      <AudioWaveform className={size === "lg" ? "size-6 text-highlight" : "size-[1.125rem] text-primary dark:text-foreground"} strokeWidth={2} aria-hidden />
      <span className={size === "lg" ? "text-[1.375rem] font-extrabold tracking-[-0.04em]" : "text-[1.0625rem] font-extrabold tracking-[-0.04em]"}>
        murmur
      </span>
    </span>
  );
}

export function headerFor(current?: string): PlumeformV2HeaderProps {
  const links = [
    { label: "Product", href: "#product", hasMenu: true },
    { label: "Uses", href: "#uses", hasMenu: true },
    { label: "Learn", href: "#learn", hasMenu: true },
    { label: "Drafts", href: "#drafts" },
    { label: "Plans", href: "#plans" },
    { label: "Try it", href: "#try" },
  ];
  return {
    brand: "Murmur",
    logo: <MurmurLogo />,
    links: links.map((l) => ({ ...l, current: l.label === current })),
    secondary: { label: "Sign in", href: "#signin" },
    cta: { label: "Try it free", href: "#start" },
  };
}

export const headerSample = headerFor();

export default function Demo() {
  return (
    <div className="min-h-[60vh] bg-background pt-2">
      <PlumeformV2Header {...headerSample} />
      <div className="dark mt-24 h-[60vh] bg-background" />
    </div>
  );
}
