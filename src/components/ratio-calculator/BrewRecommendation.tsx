import type { RatioProfile } from "../../types/brew";

import CharacteristicList from "./CharacteristicList";

interface BrewRecommendationProps {
  ratioProfile: RatioProfile;
}

export default function BrewRecommendation({ ratioProfile }: BrewRecommendationProps) {
  return (
    <>
      <h3>{ratioProfile.title}</h3>

      <p>{ratioProfile.description}</p>

      <CharacteristicList characteristics={ratioProfile.characteristics} />
    </>
  );
}
