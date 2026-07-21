import { IconButton } from "../ui";

interface RatioSelectorProps {
  value: number;
  supportedRatios: number[];
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function RatioSelector({
  value,
  supportedRatios,
  onIncrease,
  onDecrease,
}: RatioSelectorProps) {
  // ==========================
  // Derived State
  // ==========================

  const min = Math.min(...supportedRatios);
  const max = Math.max(...supportedRatios);

  const isMin = value <= min;
  const isMax = value >= max;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-[#3B161D]">Ratio</h3>

      <div className="flex items-center justify-between">
        <IconButton icon="-" onClick={onDecrease} disabled={isMin} />

        <div className="text-center">
          <p className="text-4xl font-bold leading-none text-[#3B161D]">1:{value}</p>

          <p className="mt-2 text-sm text-stone-500">
            Available: {supportedRatios.map((ratio) => `1:${ratio}`).join(" • ")}
          </p>
        </div>

        <IconButton icon="+" onClick={onIncrease} disabled={isMax} />
      </div>
    </div>
  );
}
