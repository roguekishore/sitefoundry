// Rebuilt from React Bits' src/demo/Backgrounds/AntigravityDemo.jsx: the component with the props its preview uses.
import Antigravity from "./Antigravity"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Antigravity colors={["#5227FF","#FF9FFC","#B497CF"]} colorMode={"conic"} colorSpeed={0.05} particleShape={"capsule"} count={1500} particleSize={0.9} particleVariance={1} magnetRadius={9} ringRadius={7} fieldStrength={10} waveAmplitude={1} waveCount={3} waveSpeed={0.4} rotationSpeed={0} pulseSpeed={3} depthFactor={1} ambient={0.25} lerpSpeed={0.05} autoAnimate={true} interactive={true} clickBurst={true} intro={true} lightMode={false} />
    </div>
  )
}
