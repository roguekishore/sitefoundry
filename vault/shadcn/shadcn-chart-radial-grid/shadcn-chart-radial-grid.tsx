// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadialGrid as Main } from "./chart-radial-grid"

export interface ShadcnChartRadialGridProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadialGrid({ className }: ShadcnChartRadialGridProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadialGrid
