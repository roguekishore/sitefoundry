// Rebuilt from React Bits' src/demo/Backgrounds/RippleGridDemo.jsx: the component with the props its preview uses.
import RippleGrid from "./RippleGrid"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <RippleGrid color={"#ffffff"} variant={"lines"} cellSize={48} lineWidth={1} glow={0.6} rippleStrength={1} rippleSpeed={1} rippleSize={1} autoRipple={"center"} rippleInterval={2.6} tilt={0} rotation={0} fade={0.5} opacity={1} mouseInteraction={true} clickRipple={true} intro={true} lightMode={false} />
    </div>
  )
}
