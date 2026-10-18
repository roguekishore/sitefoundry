// Rebuilt from React Bits' src/demo/Animations/RibbonsDemo.jsx: the component with the props its preview uses.
import Ribbons from "./Ribbons"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <Ribbons colors={["#3847ff","#7c84ff","#c7cbff"]} shape={"lens"} thickness={30} length={1.4} spread={18} stiffness={0.5} bounce={0.5} wave={0} softness={0} opacity={1} fade={false} />
    </div>
  )
}
