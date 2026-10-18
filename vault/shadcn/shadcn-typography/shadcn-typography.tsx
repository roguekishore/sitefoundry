// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import Main from "./typography-demo"

export interface ShadcnTypographyProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnTypography({ className }: ShadcnTypographyProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnTypography
