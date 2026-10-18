// Rebuilt from React Bits' src/demo/Micro/CodeSlotsDemo.jsx: the component with the props its preview uses.
import CodeSlots from "./CodeSlots"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <CodeSlots length={6} value={""} status={"idle"} mask={false} caret={true} disabled={false} accentColor={"#18181b"} inkColor={"#18181b"} slotColor={"#f6f6f6"} digitColor={"#ffffff"} dangerColor={"#ff3b30"} slotSize={44} gap={8} radius={12} bounce={0.2} settle={0.3} rise={8} cascade={20} />
    </div>
  )
}
