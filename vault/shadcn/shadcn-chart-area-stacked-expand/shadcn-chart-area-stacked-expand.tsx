// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartAreaStackedExpand as Main } from "./chart-area-stacked-expand"

export interface ShadcnChartAreaStackedExpandProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartAreaStackedExpand({ className }: ShadcnChartAreaStackedExpandProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartAreaStackedExpand
