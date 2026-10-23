/**
 * The product gradients, one per product family, all at 135°. The stops are theme tokens, so
 * another theme gives them its own colours:
 * - orange: highlight → chart-1
 * - violet: primary → chart-2
 * - blue: chart-3 → chart-4
 * - teal: chart-5 → chart-3
 * - magenta: chart-2 → destructive
 * - purple: chart-4 → chart-2
 */
export type AirwallexTone = "orange" | "violet" | "blue" | "teal" | "magenta" | "purple";

// Written out in full so Tailwind finds every class.
const stops: Record<AirwallexTone, string> = {
  orange: "from-highlight to-chart-1",
  violet: "from-primary to-chart-2",
  blue: "from-chart-3 to-chart-4",
  teal: "from-chart-5 to-chart-3",
  magenta: "from-chart-2 to-destructive",
  purple: "from-chart-4 to-chart-2",
};

/** A filled surface in the tone's gradient. */
export function gradientClass(tone: AirwallexTone = "orange"): string {
  return `bg-linear-135 ${stops[tone]}`;
}

/** Text painted with the tone's gradient (for big figures). */
export function gradientTextClass(tone: AirwallexTone = "orange"): string {
  return `bg-linear-135 ${stops[tone]} bg-clip-text text-transparent`;
}
