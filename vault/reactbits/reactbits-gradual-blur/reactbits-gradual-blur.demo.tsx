// Based on React Bits' GradualBlurDemo.jsx: a scrolling column with the top and bottom edges blurred.
import GradualBlur from "./GradualBlur"

const rows = Array.from({ length: 24 }, (_, i) => `Row ${i + 1}: content scrolls under the blurred edges`)

export default function Demo() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden">
      <div className="h-full overflow-y-auto px-6 py-16">
        {rows.map((row) => (
          <p key={row} className="border-b border-border py-4 text-lg">{row}</p>
        ))}
      </div>
      <GradualBlur position="top" target="parent" zIndex={2} />
      <GradualBlur position="bottom" target="parent" zIndex={2} />
    </div>
  )
}
