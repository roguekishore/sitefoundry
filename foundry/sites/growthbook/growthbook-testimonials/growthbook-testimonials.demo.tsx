// Sample content (gallery only); the page reuses it. All people and companies are made up.
import type { ReactNode } from "react";
import { Box, Mountain, Waves } from "lucide-react";
import { GrowthbookTestimonials, type GrowthbookTestimonialsProps } from "./growthbook-testimonials";

function Mark({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-2 whitespace-nowrap [&_svg]:size-7 ${className ?? ""}`}>
      {icon}
      {children}
    </span>
  );
}

export const testimonialsSample: GrowthbookTestimonialsProps = {
  carouselLabel: "What customers say",
  prevLabel: "Previous quote",
  nextLabel: "Next quote",
  quotes: [
    {
      company: "Boxwell",
      logo: <Mark className="text-[1.625rem] font-bold" icon={<Box strokeWidth={2.5} />}>Boxwell</Mark>,
      quote: "“Northvane gave us one way to test and release that suits how every one of our squads already works. Analysis runs where our data lives, launches go out in careful steps, and nobody keeps a second copy of anything.”",
      name: "Priya Raman",
      role: "Head of Platform, Boxwell",
    },
    {
      company: "Ottergrove",
      logo: <Mark className="font-mono text-[1.625rem] tracking-[0.12em] uppercase">Ottergrove</Mark>,
      quote: "We finally have a shared way to run experiments that respects how our volunteers and engineers work: open, self-hosted, private by default and wired into the warehouse we already had.",
      name: "Tomás Ferreira",
      role: "Staff Engineer, Ottergrove",
    },
    {
      company: "Tidewater",
      logo: <Mark className="text-[1.625rem] font-semibold" icon={<Waves strokeWidth={2.25} />}>Tidewater</Mark>,
      quote: "“Testing model changes used to feel like a brake on the team. Now it feels like a seatbelt: we move just as fast and sleep a lot better.”",
      name: "Dana Okafor",
      role: "Director of Data Science, Tidewater",
    },
    {
      company: "Peakline",
      logo: <Mark className="text-[1.625rem] font-bold" icon={<Mountain strokeWidth={2.5} />}>Peakline</Mark>,
      quote: "“We replaced three tools with one and our test cadence doubled within a quarter.”",
      name: "Lea Hoffmann",
      role: "VP Product, Peakline",
    },
  ],
};

export default function Demo() {
  return <GrowthbookTestimonials {...testimonialsSample} />;
}
