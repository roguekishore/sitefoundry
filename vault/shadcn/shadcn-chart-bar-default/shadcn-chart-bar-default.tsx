// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarDefault as Main } from "./chart-bar-default"

export interface ShadcnChartBarDefaultProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarDefault({ className }: ShadcnChartBarDefaultProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarDefault
