import type { BrewDetails } from "../../types/brew";

import { formatDurationRange } from "../../utils/time";

interface BrewInfoProps {
  brew: BrewDetails;
}

export default function BrewInfo({ brew }: BrewInfoProps) {
  return (
    <div className="space-y-4">
      <InfoRow label="Grind" value={brew.grind} />

      <InfoRow label="Temperature" value={`${brew.temperature.min}–${brew.temperature.max}°C`} />

      <InfoRow
        label="Brew Time"
        value={formatDurationRange(brew.brewTime.min, brew.brewTime.max)}
      />
    </div>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-stone-100 pb-3 last:border-none last:pb-0">
      <span className="text-stone-500">{label}</span>

      <span className="font-medium text-[#3B161D]">{value}</span>
    </div>
  );
}
