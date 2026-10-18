// Rebuilt from React Bits' src/demo/TextAnimations/GlitchTextDemo.jsx: the component with the props its preview uses.
import GlitchText from "./GlitchText"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <GlitchText shadowColors={["#ff0000","#00ffff"]} mode={"slices"} trigger={"always"} speed={1} intensity={0.5} burstDuration={0.6} flicker={false} offset={10} skew={0} fontWeight={900} enableShadows={true}>
      {"React Bits"}
      </GlitchText>
    </div>
  )
}
