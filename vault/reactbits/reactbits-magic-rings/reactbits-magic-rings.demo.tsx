// Rebuilt from React Bits' src/demo/Backgrounds/MagicRingsDemo.jsx: the component with the props its preview uses.
import MagicRings from "./MagicRings"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <MagicRings motion={"pulse"} ringCount={6} speed={1} lineThickness={2} glow={1} baseRadius={0.35} radiusStep={0.1} expansion={0.1} taper={1.5} rotation={0} spin={0} tilt={0} dispersion={0} grain={0} opacity={1} followMouse={false} mouseInfluence={0.2} hoverScale={1.2} hoverIntensity={1} parallax={0.05} clickBurst={true} intro={true} theme={"light"} />
    </div>
  )
}
