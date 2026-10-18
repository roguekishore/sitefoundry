// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import Main from "./page"

export interface ShadcnLogin03Props {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnLogin03({ className }: ShadcnLogin03Props) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnLogin03
