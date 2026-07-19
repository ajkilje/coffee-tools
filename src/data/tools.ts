import { Coffee, Droplets, Timer } from "lucide-react";

import type { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    id: 1,
    title: "Coffee Ratio",
    description: "Math. But useful.",
    route: "/ratio",
    icon: Coffee,
  },
  {
    id: 2,
    title: "Brew Timer",
    description: "Because counting sucks.",
    route: "/timer",
    icon: Timer,
  },
  {
    id: 3,
    title: "Water Calculator",
    description: "Minerals matter.",
    route: "/water",
    icon: Droplets,
  },
];