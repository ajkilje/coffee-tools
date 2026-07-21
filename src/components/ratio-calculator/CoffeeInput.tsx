import { IconButton } from "../../components/ui";

interface CoffeeInputProps {
  value: number;
  min: number;
  max: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CoffeeInput({ value, min, max, onIncrease, onDecrease }: CoffeeInputProps) {
  // ==========================
  // Derived State
  // ==========================

  const isMin = value <= min;
  const isMax = value >= max;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-[#3B161D]">Coffee</h3>

      <div className="flex items-center justify-between">
        <IconButton icon="-" onClick={onDecrease} disabled={isMin} />

        <div className="text-center">
          <p className="text-4xl font-bold leading-none text-[#3B161D]">
            {value}
            <span className="ml-1 text-xl font-medium text-stone-500">g</span>
          </p>

          <p className="mt-2 text-sm text-stone-500">
            {min}–{max} g
          </p>
        </div>

        <IconButton icon="+" onClick={onIncrease} disabled={isMax} />
      </div>
    </div>
  );
}
