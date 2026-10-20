// Sample content (gallery only); the page reuses it. The company is made up.
import { ChartNoAxesColumn } from "lucide-react";
import { ReckonerV2Wordmark } from "@foundry/reckoner-v2-wordmark";
import { ReckonerV2Header, type ReckonerV2HeaderProps } from "./reckoner-v2-header";

export const headerSample: ReckonerV2HeaderProps = {
  brand: "Caldergrove Credit Partners",
  logo: <ReckonerV2Wordmark name="Caldergrove" tagline="Credit partners" icon={<ChartNoAxesColumn strokeWidth={2.5} />} />,
  links: [
    {
      label: "Who we are",
      items: [
        { label: "Our story", href: "#story" },
        { label: "The team", href: "#team" },
        { label: "Careers", href: "#careers" },
      ],
    },
    {
      label: "How we invest",
      items: [
        { label: "Approach", href: "#approach" },
        { label: "Listed credit", href: "#listed" },
        { label: "Direct lending", href: "#direct" },
      ],
    },
    {
      label: "Funds",
      items: [
        { label: "All funds", href: "#funds" },
        { label: "Income fund", href: "#income" },
        { label: "Documents", href: "#documents" },
      ],
    },
  ],
  cta: { label: "Get in touch", href: "#contact" },
};

export default function Demo() {
  return (
    <div className="relative h-[28rem] bg-primary">
      <ReckonerV2Header {...headerSample} className="absolute" />
    </div>
  );
}
