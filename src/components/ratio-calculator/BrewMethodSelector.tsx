import type { BrewProfile } from "../../types/brew";

interface BrewMethodSelectorProps {
  methods: BrewProfile[];
  selectedMethod: string;
  onChange: (methodId: string) => void;
}

export default function BrewMethodSelector({
  methods,
  selectedMethod,
  onChange,
}: BrewMethodSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-[#3B161D]">Brew Method</h3>

      <div className="flex flex-wrap gap-3">
        {methods.map((method) => {
          const selected = method.id === selectedMethod;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onChange(method.id)}
              className={[
                "rounded-full border px-5 py-2.5",
                "text-sm font-medium whitespace-nowrap",
                "transition-all duration-200 ease-out",
                "active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-[#3B161D]/20",
                selected
                  ? "border-[#3B161D] bg-[#3B161D] text-white shadow-sm"
                  : "border-stone-300 bg-white text-[#3B161D] hover:border-[#3B161D] hover:bg-[#F8F4ED]",
              ].join(" ")}
            >
              {method.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
