// Rebuilt from React Bits' src/demo/Animations/GlowCursorDemo.jsx: the component with the props its preview uses.
import GlowCursor from "./GlowCursor"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <GlowCursor color={"#5f8bff"} intensity={1.3} trailWidth={3} linger={1.4} glow={1.2} hotspot={0.8} followSpeed={0.6} grain={0} clickBurst={true} quality={"high"} enabled={true} theme={"light"}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </GlowCursor>
    </div>
  )
}
