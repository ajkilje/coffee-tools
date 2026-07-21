import {
  BrewInfo,
  BrewMethodSelector,
  BrewRecommendation,
  CoffeeInput,
  RatioSelector,
  WaterResult,
} from "../../components/ratio-calculator";

import { useRatioCalculator } from "../../hooks";

export default function RatioCalculator() {
  const {
    methods,
    profile,
    ratioProfile,
    water,
    coffee,
    ratio,
    selectedMethod,
    handleMethodChange,
    handleIncreaseCoffee,
    handleDecreaseCoffee,
    handleIncreaseRatio,
    handleDecreaseRatio,
  } = useRatioCalculator();

  return (
    <div>
      <h1>Brew Ratio Calculator</h1>

      <hr />

      <BrewMethodSelector
        methods={methods}
        selectedMethod={selectedMethod}
        onChange={handleMethodChange}
      />

      <CoffeeInput
        value={coffee}
        min={profile.brew.coffeeDose.min}
        max={profile.brew.coffeeDose.max}
        onDecrease={handleDecreaseCoffee}
        onIncrease={handleIncreaseCoffee}
      />

      <RatioSelector
        value={ratio}
        supportedRatios={profile.ratios.map((ratio) => ratio.ratio)}
        onDecrease={handleDecreaseRatio}
        onIncrease={handleIncreaseRatio}
      />

      <WaterResult water={water} />

      <hr />

      <BrewInfo brew={profile.brew} />

      <hr />

      {ratioProfile && <BrewRecommendation ratioProfile={ratioProfile} />}
    </div>
  );
}
