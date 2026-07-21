import { useMemo, useState } from "react";

import { brewProfiles } from "../data/brewProfiles";

import {
  calculateWater,
  getDefaultRatio,
  getNextRatio,
  getPreviousRatio,
  getRatioProfile,
} from "../utils/ratio";

import type { UseRatioCalculatorResult } from "./useRatioCalculator.types";

export function useRatioCalculator(): UseRatioCalculatorResult {
  // ==========================
  // State
  // ==========================

  const [selectedMethod, setSelectedMethod] = useState("v60");

  const [coffee, setCoffee] = useState(18);

  const [ratio, setRatio] = useState(16);

  // ==========================
  // Derived Data
  // ==========================

  const profile = useMemo(() => {
    return brewProfiles.find((profile) => profile.id === selectedMethod)!;
  }, [selectedMethod]);

  const ratioProfile = useMemo(() => {
    return getRatioProfile(profile, ratio);
  }, [profile, ratio]);

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

    if (!method) {
      return;
    }

    setSelectedMethod(method.id);
    setCoffee(method.brew.defaultCoffee);
    setRatio(getDefaultRatio(method));
  };

  // ==========================
  // Public API
  // ==========================

  return {
    methods: brewProfiles,

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
  };
}
