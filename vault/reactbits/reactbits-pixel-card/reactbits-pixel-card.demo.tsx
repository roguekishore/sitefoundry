// Rebuilt from React Bits' src/demo/Components/PixelCardDemo.jsx: the component with the props its preview uses.
import PixelCard from "./PixelCard"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <PixelCard colors={["#f8fafc","#f1f5f9","#cbd5e1"]} shape={"square"} origin={"center"} gap={5} pixelSize={2} speed={35} revealDuration={600} spotlight={0.5} glow={0.5} opacity={0.35} fade={0.7} trigger={"hover"} radius={24} clickPulse={true} intro={true} glowColor={"#71717a"} theme={"light"}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </PixelCard>
    </div>
  )
}
