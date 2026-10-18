// Rebuilt from React Bits' src/demo/Micro/ThoughtLineDemo.jsx: the component with the props its preview uses.
import ThoughtLine from "./ThoughtLine"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <ThoughtLine label={"Thinking…"} doneLabel={""} glyph={"sparkle"} steps={[]} collapsible={true} color={"#18181b"} glyphColor={"#18181b"} fontSize={18} breathPeriod={1.6} breathDepth={0.45} shimmer={true} shimmerDuration={1.8} settleDuration={350} settleBlur={2} working={true} showTimer={true} />
    </div>
  )
}
