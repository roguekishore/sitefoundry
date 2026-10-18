// Rebuilt from React Bits' src/demo/Components/SpecularButtonDemo.jsx: the component with the props its preview uses.
import SpecularButton from "./SpecularButton"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <SpecularButton size={"lg"} radius={18} thickness={1.2} glow={1} shineSize={10} shineFade={34} idleIntensity={0.35} autoAnimate={false} speed={0.35} tint={"#ffffff"} tintOpacity={0.04} blur={0} textColor={"#f5f5f5"} lineColor={"#ffffff"} baseColor={"#525252"} intensity={1} followMouse={true} proximity={250}>
      {"Get Started"}
      </SpecularButton>
    </div>
  )
}
