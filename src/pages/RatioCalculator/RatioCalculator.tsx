import { useMemo, useState } from "react";

import { brewProfiles } from "../../data/brewProfiles";
import {
  calculateWater,
  getDefaultRatio,
  getNextRatio,
  getPreviousRatio,
  getRatioProfile,
} from "../../utils/ratio";

import {
  BrewInfo,
  BrewMethodSelector,
  CharacteristicList,
  CoffeeInput,
  RatioSelector,
  WaterResult,
} from "../../components/ratio-calculator";

export default function RatioCalculator() {
  // ==========================
  // State
  // ==========================

  // Default to V60
  const [selectedMethod, setSelectedMethod] = useState("v60");

  // Default coffee dose
  const [coffee, setCoffee] = useState(18);

  // Default ratio
  const [ratio, setRatio] = useState(16);

  // ==========================
  // Derived Data
  // ==========================

  // Selected brew profile
  const profile = useMemo(() => {
    return brewProfiles.find((item) => item.id === selectedMethod)!;
  }, [selectedMethod]);

  // Current ratio profile
  const ratioProfile = useMemo(() => {
    return getRatioProfile(profile, ratio);
  }, [profile, ratio]);

  // Water calculation
  const water = useMemo(() => {
    return calculateWater(coffee, ratio);
  }, [coffee, ratio]);

  // ==========================
  // Event Handlers
  // ==========================

  const handleDecreaseCoffee = () => {
    setCoffee((current) => Math.max(profile.brew.coffeeDose.min, current - 1));
  };

  const handleIncreaseCoffee = () => {
    setCoffee((current) => Math.min(profile.brew.coffeeDose.max, current + 1));
  };

  const handleDecreaseRatio = () => {
    setRatio(getPreviousRatio(profile, ratio));
  };

  const handleIncreaseRatio = () => {
    setRatio(getNextRatio(profile, ratio));
  };

  const handleMethodChange = (methodId: string) => {
    const method = brewProfiles.find((profile) => profile.id === methodId);

    if (!method) return;

    setSelectedMethod(method.id);
    setCoffee(method.brew.defaultCoffee);
    setRatio(getDefaultRatio(method));
  };

  // ==========================
  // Render
  // ==========================

  return (
    <div>
      <h1>Brew Ratio Calculator</h1>

      <hr />

      <BrewMethodSelector
        methods={brewProfiles}
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
        supportedRatios={profile.ratios.map((r) => r.ratio)}
        onDecrease={handleDecreaseRatio}
        onIncrease={handleIncreaseRatio}
      />

      <WaterResult water={water} />

      <hr />

      <BrewInfo brew={profile.brew} />

      <hr />

      <h3>{ratioProfile?.title}</h3>

      <p>{ratioProfile?.description}</p>

      {ratioProfile && <CharacteristicList characteristics={ratioProfile.characteristics} />}
    </div>
  );
}
