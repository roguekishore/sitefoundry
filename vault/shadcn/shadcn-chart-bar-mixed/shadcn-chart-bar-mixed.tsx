// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarMixed as Main } from "./chart-bar-mixed"

export interface ShadcnChartBarMixedProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarMixed({ className }: ShadcnChartBarMixedProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarMixed
