// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarStacked as Main } from "./chart-bar-stacked"

export interface ShadcnChartBarStackedProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarStacked({ className }: ShadcnChartBarStackedProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarStacked
