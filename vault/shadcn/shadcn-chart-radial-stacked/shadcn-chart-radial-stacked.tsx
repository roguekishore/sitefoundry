// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadialStacked as Main } from "./chart-radial-stacked"

export interface ShadcnChartRadialStackedProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadialStacked({ className }: ShadcnChartRadialStackedProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadialStacked
