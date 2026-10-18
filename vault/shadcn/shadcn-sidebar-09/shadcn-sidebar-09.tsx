// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import Main from "./page"

export interface ShadcnSidebar09Props {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnSidebar09({ className }: ShadcnSidebar09Props) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnSidebar09
