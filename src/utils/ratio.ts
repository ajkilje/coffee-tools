import type { BrewProfile, RatioProfile } from "@/types/brew";

/**
 * Calculates water (grams ≈ ml)
 */
export function calculateWater(coffee: number, ratio: number): number {
  return Math.round(coffee * ratio);
}

/**
 * Calculates coffee required for a desired water amount.
 */
export function calculateCoffee(water: number, ratio: number): number {
  return Number((water / ratio).toFixed(1));
}

/**
 * Returns a ratio profile.
 */
export function getRatioProfile(profile: BrewProfile, ratio: number): RatioProfile | undefined {
  return profile.ratios.find((item) => item.ratio === ratio);
}

/**
 * Returns the recommended ratio profile.
 */
export function getRecommendedProfile(profile: BrewProfile): RatioProfile {
  return (
    profile.ratios.find((item) => item.isRecommended) ??
    profile.ratios[Math.floor(profile.ratios.length / 2)]
  );
}

/**
 * Returns the recommended ratio.
 */
export function getRecommendedRatio(profile: BrewProfile): number {
  return getRecommendedProfile(profile).ratio;
}

/**
 * Minimum supported ratio.
 */
export function getMinimumRatio(profile: BrewProfile): number {
  return profile.ratios[0].ratio;
}

/**
 * Maximum supported ratio.
 */
export function getMaximumRatio(profile: BrewProfile): number {
  return profile.ratios[profile.ratios.length - 1].ratio;
}

/**
 * Returns every supported ratio.
 */
export function getSupportedRatios(profile: BrewProfile): number[] {
  return profile.ratios.map((item) => item.ratio);
}

/**
 * Checks if a ratio exists.
 */
export function isValidRatio(profile: BrewProfile, ratio: number): boolean {
  return profile.ratios.some((item) => item.ratio === ratio);
}

/**
 * Returns the nearest supported ratio.
 */
export function getClosestRatio(profile: BrewProfile, ratio: number): number {
  return profile.ratios.reduce((closest, current) =>
    Math.abs(current.ratio - ratio) < Math.abs(closest.ratio - ratio) ? current : closest
  ).ratio;
}

/**
 * Next supported ratio.
 */
export function getNextRatio(profile: BrewProfile, ratio: number): number {
  const index = profile.ratios.findIndex((item) => item.ratio === ratio);

  if (index === -1) {
    return getRecommendedRatio(profile);
  }

  return profile.ratios[Math.min(index + 1, profile.ratios.length - 1)].ratio;
}

/**
 * Previous supported ratio.
 */
export function getPreviousRatio(profile: BrewProfile, ratio: number): number {
  const index = profile.ratios.findIndex((item) => item.ratio === ratio);

  if (index === -1) {
    return getRecommendedRatio(profile);
  }

  return profile.ratios[Math.max(index - 1, 0)].ratio;
}

/**
 * Supported coffee dose range.
 */
export function getCoffeeDoseRange(profile: BrewProfile) {
  return profile.brew.coffeeDose;
}

/**
 * Water range produced by the selected ratio.
 */
export function getWaterRange(profile: BrewProfile, ratio: number) {
  return {
    min: calculateWater(profile.brew.coffeeDose.min, ratio),
    max: calculateWater(profile.brew.coffeeDose.max, ratio),
  };
}

/**
 * Returns the default coffee dose.
 */
export function getDefaultCoffee(profile: BrewProfile): number {
  return profile.brew.defaultCoffee;
}

/**
 * Returns the default water yield.
 */
export function getDefaultWater(profile: BrewProfile): number {
  return calculateWater(profile.brew.defaultCoffee, getRecommendedRatio(profile));
}
