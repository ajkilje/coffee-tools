import type { RatioProfile } from "../../types/brew";

import CharacteristicList from "./CharacteristicList";

interface BrewRecommendationProps {
  ratioProfile: RatioProfile;
}

export default function BrewRecommendation({ ratioProfile }: BrewRecommendationProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-[#3B161D]">{ratioProfile.title}</h3>

        <p className="mt-2 leading-7 text-stone-600">{ratioProfile.description}</p>
      </div>

      <CharacteristicList characteristics={ratioProfile.characteristics} />
    </div>
  );
}
