// Rebuilt from React Bits' src/demo/Backgrounds/PlasmaDemo.jsx: the component with the props its preview uses.
import Plasma from "./Plasma"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Plasma color={"#a6a3b8"} speed={1} twist={1} wave={1} softness={0.5} shine={1} direction={"forward"} scale={1} brightness={1} grain={0.04} quality={0.75} fade={0} opacity={1} mouseInteractive={true} intro={true} lightMode={false} />
    </div>
  )
}
