// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartLineDots as Main } from "./chart-line-dots"

export interface ShadcnChartLineDotsProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartLineDots({ className }: ShadcnChartLineDotsProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartLineDots
