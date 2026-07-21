import type { BrewProfile, RatioProfile } from "../types/brew";

export interface UseRatioCalculatorResult {
  /**
   * Available brew methods.
   */
  methods: BrewProfile[];

  /**
   * Currently selected brew profile.
   */
  profile: BrewProfile;

  /**
   * Selected ratio profile.
   */
  ratioProfile: RatioProfile | undefined;

  /**
   * Calculated water in grams.
   */
  water: number;

  /**
   * Current coffee dose.
   */
  coffee: number;

  /**
   * Current brew ratio.
   */
  ratio: number;

  /**
   * Selected brew method id.
   */
  selectedMethod: string;

  /**
   * Event handlers.
   */
  handleMethodChange: (methodId: string) => void;

  handleIncreaseCoffee: () => void;

  handleDecreaseCoffee: () => void;

  handleIncreaseRatio: () => void;

  handleDecreaseRatio: () => void;
}
