// Rebuilt from React Bits' src/demo/Backgrounds/GradientWavesDemo.jsx: the component with the props its preview uses.
import GradientWaves from "./GradientWaves"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <GradientWaves horizonColor={"#5227FF"} waveColor={"#FF9FFC"} crestColor={"#FFFFFF"} lightMode={false} speed={0.4} amplitude={2.5} waveScale={0.6} waveRatio={0.9} swell={35} turbulence={20} tilt={64} zoom={1} height={5.5} fogDepth={15} relief={1} lightAngle={120} sheen={0} brightness={1} opacity={1} grain={0.2} quality={"medium"} intro={true} mouseInteraction={true} parallaxStrength={0.5} mouseStrength={0.6} swellOnClick={true} paused={false} />
    </div>
  )
}
