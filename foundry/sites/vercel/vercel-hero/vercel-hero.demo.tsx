// Sample content (gallery only); the page reuses it. The company and customers are made up.
import type { ReactNode } from "react";
import { Box, CircleDot, Diamond, Waves, Zap } from "lucide-react";
import { VercelHero, type VercelHeroProps } from "./vercel-hero";

function Wordmark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 whitespace-nowrap [&_svg]:size-5 ${className ?? ""}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

export const heroSample: VercelHeroProps = {
  title: "Autonomous Cloud",
  primary: { label: "Start building", href: "#" },
  secondary: { label: "Book a call", href: "#" },
  lines: ["Where agents write the code", "Where products go live", "Where operations run themselves"],
  logos: [
    { name: "Loopwell", logo: <Wordmark className="text-xl font-medium tracking-[-0.03em]" icon={<CircleDot strokeWidth={2.5} />}>Loopwell</Wordmark> },
    { name: "PARCELPOST", logo: <Wordmark className="text-base font-bold tracking-[0.18em]" icon={<Box strokeWidth={2.5} />}>PARCELPOST</Wordmark> },
    { name: "Mindframe", logo: <Wordmark className="text-xl font-semibold tracking-[-0.02em]">Mindframe</Wordmark> },
    { name: "ORBITAL", logo: <Wordmark className="font-mono text-base tracking-[0.35em]">ORBITAL</Wordmark> },
    { name: "Brisk", logo: <Wordmark className="text-xl font-extrabold italic tracking-[-0.04em]" icon={<Zap fill="currentColor" strokeWidth={0} />}>Brisk</Wordmark> },
    { name: "Tidewater", logo: <Wordmark className="text-lg font-semibold leading-4" icon={<Waves strokeWidth={2.5} />}>Tidewater</Wordmark> },
    { name: "Fieldbook", logo: <Wordmark className="text-xl font-semibold tracking-[-0.03em]" icon={<Diamond strokeWidth={2.5} />}>Fieldbook</Wordmark> },
  ],
  mediaLabel: "Hero artwork",
};

export default function Demo() {
  return <VercelHero {...heroSample} />;
}
