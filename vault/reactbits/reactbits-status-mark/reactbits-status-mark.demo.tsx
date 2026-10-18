// Rebuilt from React Bits' src/demo/Micro/StatusMarkDemo.jsx: the component with the props its preview uses.
import StatusMark from "./StatusMark"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <StatusMark status={"pending"} label={"Draft supplier emails"} color={"#18181b"} doneColor={"#16a34a"} errorColor={"#dc2626"} size={28} strokeWidth={2} dashes={8} fontSize={16} spinDuration={1100} arcLength={0.68} drawDuration={240} fillOpacity={0.06} strike={true} strikeDelay={60} />
    </div>
  )
}
