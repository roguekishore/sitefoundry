// Rebuilt from React Bits' src/demo/Micro/WakeSliderDemo.jsx: the component with the props its preview uses.
import WakeSlider from "./WakeSlider"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <WakeSlider value={50} step={1} bars={32} height={56} restHeight={12} gap={4} fillColor={"#18181b"} trackColor={"#f6f6f6"} sensitivity={1} reach={6} skew={0.6} glide={0.3} smoothing={100} showValue={true} disabled={false} />
    </div>
  )
}
