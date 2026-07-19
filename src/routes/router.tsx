import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import Home from "@/pages/Home/Home";
import RatioCalculator from "@/pages/RatioCalculator/RatioCalculator";
import BrewTimer from "@/pages/BrewTimer/BrewTimer";
import WaterCalculator from "@/pages/WaterCalculator/WaterCalculator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "ratio",
        element: <RatioCalculator />,
      },

      {
        path: "timer",
        element: <BrewTimer />,
      },

      {
        path: "water",
        element: <WaterCalculator />,
      },
    ],
  },
]);