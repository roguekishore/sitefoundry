import { RhoToneFlow } from "./rho-tone-flow";

const bands = [
  { tone: "dark", label: "Dark section" },
  { tone: "light", label: "Light section" },
  { tone: "dark", label: "Dark again" },
  { tone: "light", label: "Light again" },
] as const;

export default function Demo() {
  return (
    <RhoToneFlow>
      {bands.map((b, i) => (
        <section key={i} data-rho-tone={b.tone} className={`${b.tone === "dark" ? "dark" : ""} bg-background px-gutter py-section text-foreground`}>
          <div className="mx-auto flex h-[60vh] max-w-page flex-col justify-between">
            <p className="text-4xl">{b.label}</p>
            <div className="h-40 rounded-lg bg-card" />
          </div>
        </section>
      ))}
    </RhoToneFlow>
  );
}
