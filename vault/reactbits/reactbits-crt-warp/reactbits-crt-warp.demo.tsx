// Rebuilt from React Bits' src/demo/Backgrounds/CRTWarpDemo.jsx: the component with the props its preview uses.
import CRTWarp from "./CRTWarp"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <CRTWarp color={"#c755f7"} backgroundColor={"#120f17"} lightMode={false} mask={"aperture"} speed={0.5} variation={0} waveAmplitude={0.3} waveFrequency={2.5} levels={3} columns={80} persistence={0.4} curvature={0.25} corners={0} scanlineStrength={0.6} scanlineFrequency={200} maskStrength={0.3} bloom={1.5} bloomRadius={1} rgbShift={0.003} noise={0.1} flicker={0.15} interference={0.2} vignette={0.3} brightness={1} intro={true} mouseReact={true} mouseStrength={0.5} changeOnClick={true} dpr={2} paused={false} />
    </div>
  )
}
