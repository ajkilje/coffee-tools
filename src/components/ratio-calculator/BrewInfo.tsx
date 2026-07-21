import type { BrewDetails } from "../../types/brew";
import { formatDurationRange } from "../../utils/time";

interface BrewInfoProps {
  brew: BrewDetails;
}

export default function BrewInfo({ brew }: BrewInfoProps) {
  return (
    <div>
      <strong>Brew Information</strong>

      <p>
        <strong>Grind:</strong> {brew.grind}
      </p>

      <p>
        <strong>Temperature:</strong> {brew.temperature.min}–{brew.temperature.max}°C
      </p>

      <p>
        <strong>Brew Time:</strong> {formatDurationRange(brew.brewTime.min, brew.brewTime.max)}
      </p>
    </div>
  );
}
