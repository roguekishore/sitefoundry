// Rebuilt from React Bits' src/demo/Animations/MetallicPaintDemo.jsx: the component with the props its preview uses.
import MetallicPaint from "./MetallicPaint"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <MetallicPaint text={"Bits"} color={"#ffffff"} density={2} softness={0.1} dispersion={0.3} distortion={0.07} edgeBend={0.6} angle={70} scale={0.6} speed={1} rotation={0} mouseTilt={0.5} intro={true} lightMode={true} />
    </div>
  )
}
