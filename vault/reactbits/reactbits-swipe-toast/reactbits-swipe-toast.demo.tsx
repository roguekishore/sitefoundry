// Rebuilt from React Bits' src/demo/Micro/SwipeToastDemo.jsx: the component with the props its preview uses.
import SwipeToast from "./SwipeToast"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <SwipeToast icon={<HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} strokeWidth={2} />} title={"File archived"} description={"Moved to Archive"} actionLabel={"Undo"} background={"#ffffff"} color={"#18181b"} fuseColor={"#f5a524"} width={356} radius={12} slideMs={400} settleBounce={0.2} swipeDistance={40} duration={4000} fuse={"bottom"} pauseOnHover={true} closeButton={false} inline={true} />
    </div>
  )
}
