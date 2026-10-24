import type { ReflectTestimonialsProps } from "./reflect-testimonials";
import { ReflectTestimonials } from "./reflect-testimonials";

export const testimonialsSample: ReflectTestimonialsProps = {
  eyebrow: "Kind words",
  title: "Night owls agree",
  lead: "A few things people have said about us",
  rows: [
    [
      { name: "Ines Varga", handle: "@inesv", quote: "Three weeks with @nocturne and my scattered notes finally feel like one place. Quick, calm, and it sorts things out without asking me to." },
      { name: "Tobi Achterberg", handle: "@tobiach", quote: "Honestly? @nocturne just works." },
      { name: "Mara Quist", handle: "@maraquist", quote: "Been using @nocturne for reading notes, lectures and half-formed plans. It's the tidy desk I never managed to keep myself." },
      { name: "Ravi Shenoy", handle: "@ravish", quote: "The daily page is the habit I didn't know I needed. @nocturne opens, I write, I close it. That's it." },
    ],
    [
      { name: "Lotte Brand", handle: "@lottebrand", quote: "Got my invite to @nocturne today and wow. It's thoughtful in all the small places. I can see this becoming where all my writing lives." },
      { name: "Kofi Mensah", handle: "@kofim", quote: "I keep @nocturne open all day, for a quick journal line in the morning and for long essays at night. Rare to find one tool that does both." },
      { name: "Sasha Orlov", handle: "@sashao", quote: "Big thanks to @wrenhart for building @nocturne. It has grown into something I open every single day, and the care in the details shows." },
      { name: "Elin Strand", handle: "@elinstrand", quote: "Moved six years of notes into @nocturne over a weekend. Nothing lost, everything linked." },
    ],
  ],
};

export default function Demo() {
  return <ReflectTestimonials {...testimonialsSample} />;
}
