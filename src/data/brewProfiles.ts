import {
  BestFor,
  BrewDifficulty,
  type BrewProfile,
  CharacteristicLabel,
  GrindSize,
  Level,
} from "@/types/brew";

export const brewProfiles: BrewProfile[] = [
  {
    id: "v60",
    name: "V60",

    ratios: [
      {
        ratio: 14,
        title: "Rich & Bold",
        description:
          "Produces a fuller-bodied cup with pronounced sweetness and intensity. Best suited for coffees that can handle a heavier extraction without becoming bitter.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.MilkDrinks,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Advanced,
          },
        ],
      },

      {
        ratio: 15,
        title: "Rich",
        description:
          "A sweeter, fuller cup while maintaining a pleasant balance between body and clarity. Great for everyday brewing when you prefer a richer mouthfeel.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 16,
        title: "Recommended",
        isRecommended: true,
        description:
          "The classic V60 ratio offering an excellent balance of body, sweetness, clarity and acidity. This is the easiest place to start for most coffees.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },
      {
        ratio: 17,
        title: "Light",
        description:
          "Produces a cleaner, brighter cup with increased clarity and a lighter body. Floral and fruit-forward coffees often shine at this ratio.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 18,
        title: "Tea-like",
        description:
          "Maximizes clarity and delicate flavours with a very light body. Works best with well-developed extractions and lightly roasted coffees.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Advanced,
          },
        ],
      },
    ],

    brew: {
      grind: GrindSize.Medium,

      temperature: {
        min: 92,
        max: 94,
      },

      brewTime: {
        min: 165,
        max: 195,
      },

      defaultCoffee: 18,

      coffeeDose: {
        min: 10,
        max: 40,
      },
    },

    brewGuide: [
      "Rinse the paper filter thoroughly before adding coffee.",
      "Add freshly ground coffee and level the bed.",
      "Bloom with approximately twice the coffee weight in water for 30–45 seconds.",
      "Pour slowly in concentric circles while maintaining a consistent water level.",
      "Finish the drawdown between 2:45 and 3:15 for optimal extraction.",
    ],
  },
  {
    id: "pour-over",
    name: "Pour Over",

    ratios: [
      {
        ratio: 15,
        title: "Rich",
        description:
          "Produces a sweeter and fuller-bodied cup with reduced clarity. Ideal for those who prefer a rounder mouthfeel.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 16,
        title: "Recommended",
        isRecommended: true,
        description:
          "Balanced sweetness, body and acidity with a clean finish. A versatile ratio suitable for most coffees and pour over brewers.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 17,
        title: "Light",
        description:
          "Emphasizes clarity and brightness with a lighter body. Excellent for showcasing floral and fruit-forward coffees.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },
    ],

    brew: {
      grind: GrindSize.Medium,

      temperature: {
        min: 92,
        max: 94,
      },

      brewTime: {
        min: 180,
        max: 240,
      },

      defaultCoffee: 20,

      coffeeDose: {
        min: 10,
        max: 45,
      },
    },

    brewGuide: [
      "Rinse the paper filter before brewing.",
      "Use freshly ground coffee for best flavour.",
      "Bloom the coffee for 30–45 seconds.",
      "Maintain a slow and consistent pouring rate.",
      "Keep the coffee bed level and finish within 3–4 minutes.",
    ],
  },
  {
    id: "french-press",
    name: "French Press",

    ratios: [
      {
        ratio: 12,
        title: "Very Rich",
        description:
          "Produces a heavy-bodied immersion brew with bold flavour and a dense, syrupy mouthfeel.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.MilkDrinks,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 13,
        title: "Rich",
        description: "Strong and sweet with a rounded body while maintaining pleasant balance.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 14,
        title: "Balanced Rich",
        description:
          "A richer cup without becoming overpowering, offering excellent sweetness and body.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 15,
        title: "Recommended",
        isRecommended: true,
        description:
          "The classic French Press ratio delivering a full-bodied cup with balanced sweetness and smooth texture.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 16,
        title: "Light",
        description:
          "Cleaner and more delicate while preserving the natural sweetness of immersion brewing.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 17,
        title: "Very Light",
        description:
          "Produces a gentler body with improved clarity while retaining immersion smoothness.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 18,
        title: "Delicate",
        description:
          "The lightest recommended French Press ratio, emphasizing clarity and a refreshing finish.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Advanced,
          },
        ],
      },
    ],

    brew: {
      grind: GrindSize.Coarse,

      temperature: {
        min: 93,
        max: 96,
      },

      brewTime: {
        min: 240,
        max: 240,
      },

      defaultCoffee: 30,

      coffeeDose: {
        min: 15,
        max: 60,
      },
    },

    brewGuide: [
      "Use a coarse grind for even extraction.",
      "Pour all the water at once and stir gently.",
      "Steep for 4 minutes without disturbing the coffee bed.",
      "Break the crust and skim off floating grounds.",
      "Press the plunger slowly and decant immediately to avoid over-extraction.",
    ],
  },
  {
    id: "aeropress",
    name: "AeroPress",

    ratios: [
      {
        ratio: 12,
        title: "Concentrated",
        description:
          "Produces a syrupy and intense cup that pairs exceptionally well with milk or dilution.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.MilkDrinks,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 13,
        title: "Rich",
        description:
          "Strong with rounded sweetness and a satisfying body while maintaining good balance.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 14,
        title: "Balanced Rich",
        description:
          "A fuller-bodied cup that still preserves the AeroPress' naturally clean finish.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 15,
        title: "Recommended",
        isRecommended: true,
        description:
          "The classic AeroPress ratio delivering an excellent balance of sweetness, clarity and body.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 16,
        title: "Light",
        description:
          "Brighter acidity with a lighter body and a cleaner finish, highlighting delicate origin flavours.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 17,
        title: "Very Light",
        description:
          "Maximizes clarity and delicacy while producing a refreshing and tea-like cup.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Advanced,
          },
        ],
      },
    ],

    brew: {
      grind: GrindSize.MediumFine,

      temperature: {
        min: 85,
        max: 92,
      },

      brewTime: {
        min: 120,
        max: 120,
      },

      defaultCoffee: 18,

      coffeeDose: {
        min: 10,
        max: 35,
      },
    },

    brewGuide: [
      "Rinse the paper filter before brewing.",
      "Add coffee followed by the brewing water.",
      "Stir gently for even saturation.",
      "Press slowly over approximately 30 seconds.",
      "Stop pressing once you hear the hissing sound to avoid bitterness.",
    ],
  },
  {
    id: "aeropress-inverted",
    name: "AeroPress (Inverted)",

    ratios: [
      {
        ratio: 12,
        title: "Concentrated",
        description:
          "Longer immersion produces a rich, syrupy cup with exceptional sweetness and body.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.MilkDrinks,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 13,
        title: "Rich",
        description: "Produces a full-bodied cup with rounded sweetness and excellent mouthfeel.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 14,
        title: "Balanced Rich",
        description: "Maintains immersion sweetness while improving clarity and balance.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 15,
        title: "Recommended",
        isRecommended: true,
        description: "The classic inverted AeroPress recipe balancing sweetness, body and clarity.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 16,
        title: "Light",
        description: "Produces a cleaner cup with brighter acidity and a lighter body.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Advanced,
          },
        ],
      },

      {
        ratio: 17,
        title: "Very Light",
        description:
          "Maximum clarity while preserving the smooth immersion character unique to the inverted method.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Advanced,
          },
        ],
      },
    ],

    brew: {
      grind: GrindSize.MediumFine,

      temperature: {
        min: 85,
        max: 92,
      },

      brewTime: {
        min: 150,
        max: 150,
      },

      defaultCoffee: 18,

      coffeeDose: {
        min: 10,
        max: 35,
      },
    },

    brewGuide: [
      "Insert the plunger securely and invert the AeroPress.",
      "Add coffee followed by the brewing water.",
      "Steep for around 2 minutes before stirring gently.",
      "Attach the filter cap and carefully flip onto your mug.",
      "Press slowly until the hiss, then stop.",
    ],
  },

  {
    id: "moka-pot",
    name: "Moka Pot",

    ratios: [
      {
        ratio: 7,
        title: "Very Strong",
        description:
          "Produces an intensely concentrated brew with syrupy texture, ideal for milk drinks.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.MilkDrinks,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 8,
        title: "Strong",
        description:
          "Bold and rich with plenty of sweetness and mouthfeel while remaining approachable.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.EspressoStyle,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 9,
        title: "Rich",
        description: "Strong yet smoother with improved balance between sweetness and intensity.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.Everyday,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 10,
        title: "Recommended",
        isRecommended: true,
        description:
          "The classic moka pot ratio delivering balanced richness, sweetness and intensity.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.EspressoStyle,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Intermediate,
          },
        ],
      },

      {
        ratio: 11,
        title: "Light",
        description: "Cleaner flavours while preserving the traditional moka character.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Advanced,
          },
        ],
      },

      {
        ratio: 12,
        title: "Delicate",
        description:
          "The lightest recommended moka ratio with improved clarity and a gentler finish.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.BlackCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Advanced,
          },
        ],
      },
    ],

    brew: {
      grind: GrindSize.Fine,

      temperature: {
        min: 90,
        max: 90,
      },

      brewTime: {
        min: 240,
        max: 300,
      },

      defaultCoffee: 18,

      coffeeDose: {
        min: 10,
        max: 30,
      },
    },

    brewGuide: [
      "Fill the base with pre-heated water below the safety valve.",
      "Fill the basket level with coffee without tamping.",
      "Brew over low to medium heat.",
      "Remove from the heat as soon as the coffee begins sputtering.",
      "Cool the base under running water to stop extraction.",
    ],
  },

  {
    id: "cold-brew",
    name: "Cold Brew",

    ratios: [
      {
        ratio: 5,
        title: "Concentrate",
        description: "Produces a rich concentrate designed to be diluted with water or milk.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.MilkDrinks,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 6,
        title: "Strong",
        description: "Rich and chocolate-forward with naturally low acidity and a smooth finish.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.IcedCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 7,
        title: "Rich",
        description: "Balanced sweetness and chocolate notes with a smooth mouthfeel.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.IcedCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 8,
        title: "Recommended",
        isRecommended: true,
        description: "Produces a smooth, sweet cold brew that's enjoyable straight or over ice.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.IcedCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 9,
        title: "Light",
        description:
          "Cleaner and lighter with a refreshing finish while maintaining cold brew sweetness.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.Low,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.High,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.IcedCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },

      {
        ratio: 10,
        title: "Ready to Drink",
        description:
          "The lightest recommended ratio producing a crisp, refreshing and easy-drinking cold brew.",

        characteristics: [
          {
            label: CharacteristicLabel.Body,
            value: Level.VeryLow,
          },
          {
            label: CharacteristicLabel.Clarity,
            value: Level.VeryHigh,
          },
          {
            label: CharacteristicLabel.Sweetness,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.Acidity,
            value: Level.Medium,
          },
          {
            label: CharacteristicLabel.BestFor,
            value: BestFor.IcedCoffee,
          },
          {
            label: CharacteristicLabel.Difficulty,
            value: BrewDifficulty.Beginner,
          },
        ],
      },
    ],

    brew: {
      grind: GrindSize.ExtraCoarse,

      temperature: {
        min: 20,
        max: 25,
      },

      brewTime: {
        min: 43200,
        max: 64800,
      },

      defaultCoffee: 60,

      coffeeDose: {
        min: 30,
        max: 150,
      },
    },

    brewGuide: [
      "Use an extra coarse grind.",
      "Combine all the coffee and water at once.",
      "Steep for 12–18 hours at room temperature or in the refrigerator.",
      "Filter thoroughly using paper or cloth.",
      "Serve over ice or dilute to taste with water or milk.",
    ],
  },
];
