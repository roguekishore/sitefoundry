// Rebuilt from React Bits' src/demo/Micro/CallChipDemo.jsx: the component with the props its preview uses.
import CallChip from "./CallChip"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <CallChip icon={"terminal"} status={"running"} expectedMs={2500} size={34} radius={10} color={"#18181b"} surfaceColor={"#f6f6f6"} progressColor={"#18181b"} progressOpacity={0.08} doneColor={"#22c55e"} errorColor={"#ef4444"} washOpacity={0.14} shake={6} showTimer={true} />
    </div>
  )
}
