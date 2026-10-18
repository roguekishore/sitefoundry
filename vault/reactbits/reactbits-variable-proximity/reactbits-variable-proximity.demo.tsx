// Rebuilt from React Bits' src/demo/TextAnimations/VariableProximityDemo.jsx: the component with the props its preview uses.
import VariableProximity from "./VariableProximity"

export default function Demo() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden">
      <VariableProximity label={"Hover me! And then star React Bits on GitHub, or else..."} fromFontVariationSettings={"'wght' 400, 'opsz' 9"} toFontVariationSettings={"'wght' 1000, 'opsz' 40"} radius={100} falloff={"linear"} smoothing={0.2} scale={1} lift={0} idleWave={false} fontSize={"min(64px, 8.5cqi)"} style={{ display: "block", maxWidth: "20ch", lineHeight: 1.05, textAlign: "center", cursor: "pointer" }} />
    </div>
  )
}
