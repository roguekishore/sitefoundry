// Rebuilt from React Bits' src/demo/Micro/BranchedMenuDemo.jsx: the component with the props its preview uses.
import BranchedMenu from "./BranchedMenu"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <BranchedMenu defaultOpen={[0, 1]} defaultActive="quick" color={"#18181b"} accentColor={"#18181b"} lineColor={"#d4d4d8"} width={240} rowHeight={32} indent={40} trunk={14} radius={10} lineWidth={1.5} fontSize={14} drawDuration={400} foldDuration={300} />
    </div>
  )
}
