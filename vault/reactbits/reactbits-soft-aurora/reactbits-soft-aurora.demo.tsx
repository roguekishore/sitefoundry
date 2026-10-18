// Rebuilt from React Bits' src/demo/Backgrounds/SoftAuroraDemo.jsx: the component with the props its preview uses.
import SoftAurora from "./SoftAurora"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <SoftAurora color1={"#f7f7f7"} color2={"#e100ff"} spectrum={1} speed={0.6} colorSpeed={1} scale={1.5} brightness={1} noiseFrequency={2.5} noiseAmplitude={1} bandHeight={0.5} bandSpread={1} tilt={0} octaveDecay={0.1} layerOffset={0} enableMouseInteraction={true} mouseInfluence={0.25} clickPulse={true} intro={true} lightMode={false} />
    </div>
  )
}
