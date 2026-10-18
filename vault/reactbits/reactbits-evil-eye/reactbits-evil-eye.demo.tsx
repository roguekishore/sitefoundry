// Rebuilt from React Bits' src/demo/Backgrounds/EvilEyeDemo.jsx: the component with the props its preview uses.
import EvilEye from "./EvilEye"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <EvilEye eyeColor={"#FF6F37"} intensity={1.5} pupilSize={0.6} irisWidth={0.25} glowIntensity={0.35} scale={0.8} noiseScale={1} pupilFollow={1} flameSpeed={1} backgroundColor={"#120F17"} />
    </div>
  )
}
