// Rebuilt from React Bits' src/demo/Animations/RippleDistortionDemo.jsx: the component with the props its preview uses.
import RippleDistortion from "./RippleDistortion"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <RippleDistortion brushSize={150} strength={0.2} swirl={1} rings={4} spread={5} fade={3} spacing={15} dispersion={0} glint={0} tint={"#a855f7"} tintAmount={0.1} grayscale={true} highlightColor={"#ffffff"} trigger={"hover"} clickStrength={2} quality={"low"} enabled={true} />
    </div>
  )
}
