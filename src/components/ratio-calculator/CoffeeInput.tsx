interface CoffeeInputProps {
  value: number;
  min: number;
  max: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function CoffeeInput({ value, min, max, onDecrease, onIncrease }: CoffeeInputProps) {
  return (
    <div>
      <strong>Coffee</strong>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "8px",
        }}
      >
        <button onClick={onDecrease}>-</button>

        <span>{value} g</span>

        <button onClick={onIncrease}>+</button>
      </div>

      <small>
        Allowed: {min}–{max} g
      </small>
    </div>
  );
}
