// Rebuilt from React Bits' src/demo/Micro/CometDialDemo.jsx: the component with the props its preview uses.
import CometDial from "./CometDial"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <CometDial value={62} unit={"%"} accent={"#18181b"} ink={"#18181b"} size={250} sweep={320} thickness={5} speed={25} tapBounce={0.2} flickBounce={0.1} momentum={1} cometReach={180} cometWidth={12} disabled={false} />
    </div>
  )
}
