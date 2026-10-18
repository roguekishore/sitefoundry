// Rebuilt from React Bits' src/demo/Micro/SloshGaugeDemo.jsx: the component with the props its preview uses.
import SloshGauge from "./SloshGauge"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <SloshGauge value={60} interactive={true} showValue={true} disabled={false} liquidColor={"#18181b"} glassColor={"#f6f6f6"} width={88} height={180} radius={20} ticks={4} viscosity={0.15} tilt={0.45} splash={0.42} />
    </div>
  )
}
