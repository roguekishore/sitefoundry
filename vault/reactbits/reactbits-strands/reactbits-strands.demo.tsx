// Rebuilt from React Bits' src/demo/Animations/StrandsDemo.jsx: the component with the props its preview uses.
import Strands from "./Strands"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Strands colors={["#d95b56","#ba5046","#ffa24c","#ffe0b3","#93f1ff","#3569fa","#193d9b"]} count={3} speed={1} amplitude={1} waviness={1} energy={0.65} thickness={1} spread={1} glow={1} taper={1} intensity={1} saturation={1} hueShift={0} scale={1} glass={true} glassSize={1} refraction={1} rim={1} dispersion={1} listening={false} interactive={true} clickPulse={true} intro={true} lightMode={true} />
    </div>
  )
}
