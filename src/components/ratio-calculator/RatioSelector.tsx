interface RatioSelectorProps {
  value: number;
  supportedRatios: number[];
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function RatioSelector({
  value,
  supportedRatios,
  onDecrease,
  onIncrease,
}: RatioSelectorProps) {
  return (
    <div>
      <strong>Ratio</strong>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "8px",
        }}
      >
        <button onClick={onDecrease}>-</button>

        <span>1 : {value}</span>

        <button onClick={onIncrease}>+</button>
      </div>

      <small>Supported ratios: {supportedRatios.map((ratio) => `1:${ratio}`).join(", ")}</small>
    </div>
  );
}
