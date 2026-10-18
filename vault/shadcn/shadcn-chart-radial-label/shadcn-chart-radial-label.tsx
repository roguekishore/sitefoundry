// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadialLabel as Main } from "./chart-radial-label"

export interface ShadcnChartRadialLabelProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadialLabel({ className }: ShadcnChartRadialLabelProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadialLabel
