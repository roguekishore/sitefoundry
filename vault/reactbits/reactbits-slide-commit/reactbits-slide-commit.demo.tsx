// Rebuilt from React Bits' src/demo/Micro/SlideCommitDemo.jsx: the component with the props its preview uses.
import SlideCommit from "./SlideCommit"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <SlideCommit label={"Slide to pay"} doneLabel={"Paid"} errorLabel={"Payment failed"} trackColor={"#f6f6f6"} handleColor={"#18181b"} successColor={"#22c55e"} dangerColor={"#e5484d"} width={280} height={56} radius={28} speed={50} returnBounce={0.38} landingDip={0.026} holdMs={1500} disabled={false} />
    </div>
  )
}
