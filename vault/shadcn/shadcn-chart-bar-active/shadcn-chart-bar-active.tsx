// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarActive as Main } from "./chart-bar-active"

export interface ShadcnChartBarActiveProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarActive({ className }: ShadcnChartBarActiveProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarActive
