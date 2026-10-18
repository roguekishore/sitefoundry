// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieSeparatorNone as Main } from "./chart-pie-separator-none"

export interface ShadcnChartPieSeparatorNoneProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieSeparatorNone({ className }: ShadcnChartPieSeparatorNoneProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieSeparatorNone
