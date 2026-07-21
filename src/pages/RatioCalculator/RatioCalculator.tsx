import { useMemo, useState } from "react";

import { brewProfiles } from "../../data/brewProfiles";
import { calculateWater, getRatioProfile } from "../../utils/ratio";

import { getNextRatio, getPreviousRatio } from "../../utils/ratio";

import { formatDurationRange } from "../../utils/time";

export default function RatioCalculator() {
  // Default to V60
  const [selectedMethod, setSelectedMethod] = useState("v60");

  // Default coffee dose
  const [coffee, setCoffee] = useState(18);

  // Default ratio
  const [ratio, setRatio] = useState(16);

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

  return (
    <div>
      <h1>Brew Ratio Calculator</h1>

      <hr />

      <div>
        <label htmlFor="brew-method">
          <strong>Brew Method</strong>
        </label>

        <br />

        <select
          id="brew-method"
          value={selectedMethod}
          onChange={(event) => {
            const method = brewProfiles.find((item) => item.id === event.target.value);

            if (!method) return;

            setSelectedMethod(method.id);
            setCoffee(method.brew.defaultCoffee);
            setRatio(method.ratios.find((r) => r.isRecommended)?.ratio ?? method.ratios[0].ratio);
          }}
        >
          {brewProfiles.map((method) => (
            <option key={method.id} value={method.id}>
              {method.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <strong>Coffee</strong>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "8px",
          }}
        >
          <button
            onClick={() =>
              setCoffee((current) => Math.max(profile.brew.coffeeDose.min, current - 1))
            }
          >
            -
          </button>

          <span>{coffee} g</span>

          <button
            onClick={() =>
              setCoffee((current) => Math.min(profile.brew.coffeeDose.max, current + 1))
            }
          >
            +
          </button>
        </div>

        <small>
          Allowed: {profile.brew.coffeeDose.min}–{profile.brew.coffeeDose.max} g
        </small>
      </div>

      <div>
        <strong>Ratio</strong>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "8px",
          }}
        >
          <button onClick={() => setRatio(getPreviousRatio(profile, ratio))}>-</button>

          <span>1 : {ratio}</span>

          <button onClick={() => setRatio(getNextRatio(profile, ratio))}>+</button>
        </div>

        <small>Supported ratios: {profile.ratios.map((r) => `1:${r.ratio}`).join(", ")}</small>
      </div>

      <p>
        <strong>Water:</strong> {water} g
      </p>

      <hr />

      <p>
        <strong>Grind:</strong> {profile.brew.grind}
      </p>

      <p>
        <strong>Temperature:</strong> {profile.brew.temperature.min}–{profile.brew.temperature.max}
        °C
      </p>

      <p>
        <strong>Brew Time:</strong>{" "}
        {formatDurationRange(profile.brew.brewTime.min, profile.brew.brewTime.max)}
      </p>

      <hr />

      <h3>{ratioProfile?.title}</h3>

      <p>{ratioProfile?.description}</p>

      <ul>
        {ratioProfile?.characteristics.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
