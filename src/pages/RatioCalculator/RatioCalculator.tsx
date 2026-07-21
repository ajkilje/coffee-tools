import {
  BrewInfo,
  BrewMethodSelector,
  BrewRecommendation,
  CoffeeInput,
  RatioSelector,
  WaterResult,
} from "../../components/ratio-calculator";

import { useRatioCalculator } from "../../hooks";

import { Card, PageContainer } from "../../components/ui";

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
    <PageContainer>
      <Card title="Brew Ratio Calculator">
        <BrewMethodSelector
          methods={methods}
          selectedMethod={selectedMethod}
          onChange={handleMethodChange}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
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
          </div>

          <WaterResult water={water} coffee={coffee} ratio={ratio} />
        </div>
      </Card>

      <Card title="Brew Information">
        <BrewInfo brew={profile.brew} />
      </Card>

      {ratioProfile && (
        <Card>
          <BrewRecommendation ratioProfile={ratioProfile} />
        </Card>
      )}
    </PageContainer>
  );
}
