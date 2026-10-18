// Rebuilt from React Bits' src/demo/Backgrounds/FerrofluidDemo.jsx: the component with the props its preview uses.
import Ferrofluid from "./Ferrofluid"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Ferrofluid colors={["#ffffff","#ffffff","#ffffff"]} brightness={1} scale={1.6} spikeHeight={1} sharpness={2.5} tilt={48} turbulence={1} fluidity={0.5} speed={0.5} magnetism={1} variation={0} flowDirection={"down"} mouseStrength={1} mouseRadius={0.22} mouseInteraction={true} clickPulse={true} intro={true} lightMode={false} />
    </div>
  )
}
