/**
 * Which surface a section sits on:
 * - "light": the page's own background and text (white paper on the faithful theme);
 * - "dark": the theme's dark scope (pure black on the faithful theme);
 * - "charcoal": the dark scope on its card colour (rgb 25 on the faithful theme).
 */
export type EsrbespokeTone = "light" | "dark" | "charcoal";

/** The classes for a section's root element in the given tone. */
export function toneClass(tone: EsrbespokeTone = "light"): string {
  if (tone === "dark") return "dark bg-background text-foreground";
  if (tone === "charcoal") return "dark bg-card text-card-foreground";
  return "bg-background text-foreground";
}
