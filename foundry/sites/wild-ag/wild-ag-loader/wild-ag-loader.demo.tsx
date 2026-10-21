import { WildAgLoader, type WildAgLoaderProps } from "./wild-ag-loader";

export const loaderSample: WildAgLoaderProps = { wordmark: "Talgrund" };

export default function Demo() {
  return (
    <div className="min-h-svh bg-background">
      <WildAgLoader {...loaderSample} />
    </div>
  );
}
