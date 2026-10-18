import type { ComponentProps as ImageStandInProps } from "react"
// plain-React stand-in for next/image (added by the foundry mirror)
const Image = ({ fill, priority: _p, quality: _q, placeholder: _ph, blurDataURL: _b, unoptimized: _u, style, ...props }: ImageStandInProps<"img"> & { fill?: boolean; priority?: boolean; quality?: number; placeholder?: string; blurDataURL?: string; unoptimized?: boolean }) => (
  <img style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style} {...props} />
)

import { AspectRatio } from "@foundry/shadcn-aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </AspectRatio>
  )
}
