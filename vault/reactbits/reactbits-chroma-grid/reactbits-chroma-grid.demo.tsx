// Rebuilt from React Bits' src/demo/Components/ChromaGridDemo.jsx: the component with the props its preview uses.
import ChromaGrid from "./ChromaGrid"

export default function Demo() {
  return (
    <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden">
      <ChromaGrid items={[{ image: "https://picsum.photos/seed/foundry-day-landscape/1600/900", title: "Canola Field", subtitle: "Midday", accent: "#ffd23f" }, { image: "https://picsum.photos/seed/foundry-day-portrait/900/1200", title: "The Pier", subtitle: "Clear sky", accent: "#3fb8ff" }, { image: "https://picsum.photos/seed/foundry-day-sky/1600/900", title: "Open Sky", subtitle: "Golden hour", accent: "#ff9a4c" }, { image: "https://picsum.photos/seed/foundry-night-landscape/1600/900", title: "Canola Field", subtitle: "Moonrise", accent: "#5b7cff" }, { image: "https://picsum.photos/seed/foundry-night-portrait/900/1200", title: "The Pier", subtitle: "Dusk", accent: "#ff7eb6" }, { image: "https://picsum.photos/seed/foundry-night-sky/1600/900", title: "Open Sky", subtitle: "Blue hour", accent: "#4c6fff" }]} reveal={"spotlight"} columns={3} minCardWidth={180} gap={12} radius={260} aspectRatio={"3 / 2"} cardRadius={22} showInfo={true} frame={false} softness={0.6} damping={0.45} fadeOut={0.6} grayscale={1} dim={0.12} glow={0.5} borderGlow={1} theme={"light"} />
    </div>
  )
}
