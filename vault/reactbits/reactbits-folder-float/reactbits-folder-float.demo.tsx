// Rebuilt from React Bits' src/demo/Micro/FolderFloatDemo.jsx: the component with the props its preview uses.
import FolderFloat from "./FolderFloat"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <FolderFloat label={"Design feedback"} sublabel={""} trigger={"hover"} closeOnSelect={true} physics={true} drift={0.5} itemTextColor={"#18181b"} width={200} height={148} radius={14} spread={180} lift={26} tilt={8} flapAngle={34} restAngle={16} openDuration={520} stagger={45} bounce={0.3} />
    </div>
  )
}
