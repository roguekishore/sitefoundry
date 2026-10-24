// Sample content (gallery only); the page reuses it. The person and company are made up.
import { Triangle } from "lucide-react";
import { ResendQuote, type ResendQuoteProps } from "./resend-quote";

export const quoteSample: ResendQuoteProps = {
  mark: <Triangle className="fill-current" strokeWidth={0} />,
  quote: "Tern made mail the calmest part of our stack. Clear docs, quick setup, templates that look right. We stopped thinking about it.",
  author: { name: "Priya Ramaswamy", role: "Head of Platform at Quayside" },
  link: { label: "Pair it with Astro", href: "#astro" },
};

export default function Demo() {
  return <ResendQuote {...quoteSample} />;
}
