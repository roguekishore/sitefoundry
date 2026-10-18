// Rebuilt from React Bits' src/demo/Micro/LatticeLoaderDemo.jsx: the component with the props its preview uses.
import LatticeLoader from "./LatticeLoader"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <LatticeLoader status={"working"} pattern={"orbit"} grid={3} shape={"round"} color={"#18181b"} doneColor={"#22c55e"} errorColor={"#ef4444"} cellSize={6} gap={2} fontSize={14} step={90} idleOpacity={0.15} glow={false} glowColor={""} showTimer={true} label={"Thinking"} doneLabel={"Done in"} errorLabel={"Failed after"} />
    </div>
  )
}
