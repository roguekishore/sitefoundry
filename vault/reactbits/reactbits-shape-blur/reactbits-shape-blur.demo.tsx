// Rebuilt from React Bits' src/demo/Animations/ShapeBlurDemo.jsx: the component with the props its preview uses.
import ShapeBlur from "./ShapeBlur"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <ShapeBlur sides={6} size={0.6} roundness={0.2} thickness={2} fill={true} echoes={1} spacing={14} color={"#120f17"} blur={16} lensSize={0.3} lensSoftness={0.7} focus={false} chroma={0.3} rotation={0} spin={0} idle={true}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </ShapeBlur>
    </div>
  )
}
