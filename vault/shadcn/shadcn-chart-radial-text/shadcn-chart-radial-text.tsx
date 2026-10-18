// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadialText as Main } from "./chart-radial-text"

export interface ShadcnChartRadialTextProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadialText({ className }: ShadcnChartRadialTextProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadialText
