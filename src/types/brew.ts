/**
 * Generic intensity scale used across flavour characteristics.
 */
export const Level = {
  VeryLow: "Very Low",
  Low: "Low",
  Medium: "Medium",
  High: "High",
  VeryHigh: "Very High",
} as const;

export type Level = (typeof Level)[keyof typeof Level];

/**
 * Standard characteristic labels.
 */
export const CharacteristicLabel = {
  Body: "Body",
  Clarity: "Clarity",
  Sweetness: "Sweetness",
  Acidity: "Acidity",
  Bitterness: "Bitterness",
  Aftertaste: "Aftertaste",
  BestFor: "Best For",
  Difficulty: "Difficulty",
} as const;

export type CharacteristicLabel = (typeof CharacteristicLabel)[keyof typeof CharacteristicLabel];

/**
 * Recommended grind size.
 */
export const GrindSize = {
  ExtraFine: "Extra Fine",
  Fine: "Fine",
  MediumFine: "Medium Fine",
  Medium: "Medium",
  MediumCoarse: "Medium Coarse",
  Coarse: "Coarse",
  ExtraCoarse: "Extra Coarse",
} as const;

export type GrindSize = (typeof GrindSize)[keyof typeof GrindSize];

/**
 * Brewing difficulty.
 */
export const BrewDifficulty = {
  Beginner: "Beginner Friendly",
  Intermediate: "Intermediate",
  Advanced: "Advanced",
} as const;

export type BrewDifficulty = (typeof BrewDifficulty)[keyof typeof BrewDifficulty];

/**
 * Recommended serving style.
 */
export const BestFor = {
  BlackCoffee: "Black Coffee",
  MilkDrinks: "Milk Drinks",
  EspressoStyle: "Espresso Style",
  IcedCoffee: "Iced Coffee",
  Everyday: "Everyday Drinking",
} as const;

export type BestFor = (typeof BestFor)[keyof typeof BestFor];

/**
 * Generic numeric range.
 */
export interface Range {
  min: number;
  max: number;
}

/**
 * One flavour characteristic.
 */
export interface Characteristic {
  label: CharacteristicLabel;

  value: Level | BrewDifficulty | BestFor;
}

/**
 * One supported brew ratio.
 */
export interface RatioProfile {
  /**
   * Coffee : Water
   * Example:
   * 16 = 1:16
   */
  ratio: number;

  /**
   * Display title.
   */
  title: string;

  /**
   * Marks the default recommendation.
   */
  isRecommended?: boolean;

  /**
   * Educational description.
   */
  description: string;

  /**
   * Cup characteristics.
   */
  characteristics: Characteristic[];
}

/**
 * Brewing recommendations.
 */
export interface BrewDetails {
  /**
   * Recommended grind size.
   */
  grind: GrindSize;

  /**
   * Water temperature (°C).
   */
  temperature: Range;

  /**
   * Brew time (seconds).
   */
  brewTime: Range;

  /**
   * Default coffee dose (g).
   */
  defaultCoffee: number;

  /**
   * Allowed coffee dose (g).
   */
  coffeeDose: Range;
}

/**
 * Complete brew profile.
 */
export interface BrewProfile {
  /**
   * Internal identifier.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Every supported ratio.
   */
  ratios: RatioProfile[];

  /**
   * Brewing recommendations.
   */
  brew: BrewDetails;

  /**
   * Step-by-step guide.
   */
  brewGuide: string[];
}
