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
    <div>
      <label htmlFor="brew-method">
        <strong>Brew Method</strong>
      </label>

      <br />

      <select
        id="brew-method"
        value={selectedMethod}
        onChange={(event) => onChange(event.target.value)}
      >
        {methods.map((method) => (
          <option key={method.id} value={method.id}>
            {method.name}
          </option>
        ))}
      </select>
    </div>
  );
}
