// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieDonut as Main } from "./chart-pie-donut"

export interface ShadcnChartPieDonutProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieDonut({ className }: ShadcnChartPieDonutProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieDonut
