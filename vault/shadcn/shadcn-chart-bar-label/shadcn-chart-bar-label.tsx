// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarLabel as Main } from "./chart-bar-label"

export interface ShadcnChartBarLabelProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarLabel({ className }: ShadcnChartBarLabelProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarLabel
