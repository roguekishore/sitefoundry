import type { ComponentProps as LinkStandInProps } from "react"
// plain-React stand-in for next/link (added by the foundry mirror)
const Link = ({ prefetch: _p, replace: _r, scroll: _s, ...props }: LinkStandInProps<"a"> & { prefetch?: boolean; replace?: boolean; scroll?: boolean }) => <a {...props} />

import { Button } from "@foundry/shadcn-button"

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
