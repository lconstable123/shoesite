import { productData } from "./product-data";
import {
  Categories,
  colors,
  MenuCategory,
  MenuData,
  Products,
  purposes,
  tCategory,
  tProduct,
} from "./types";

export const menuData: MenuData = {
  categories: [],
  supportLinks: [
    {
      id: "store-locator",
      name: "Store Locator",
    },
    {
      id: "order-tracker",
      name: "Order Tracker",
    },
    {
      id: "help-customer-service",
      name: "Help & Customer Service",
    },
    {
      id: "returns-refunds",
      name: "Returns & Refunds",
    },
    {
      id: "sustainability",
      name: "Sustainability",
    },
  ],
  region: "Australia",
} as const;

export const footerData = [
  {
    title: "SPORTS",
    items: ["Football", "Outdoors", "Basketball", "Fitness"],
  },
  {
    title: "LIFESTYLE",
    items: ["Casual", "Premium", "Skatewear", "Staples"],
  },
  {
    title: "MEN",
    items: ["Shoes", "Clothes", "Acessories"],
  },
  {
    title: "WOMEN",
    items: ["Shoes", "Clothes", "Acessories"],
  },
  {
    title: "KIDS",
    items: ["Shoes", "Clothes", "Acessories"],
  },
  {
    title: "INFO",
    items: ["About", "Careers", "Sustainability"],
  },
  {
    title: "SUPPORT",
    items: [
      "Store Locator",
      "Order Tracker",
      "Customer Service",
      "Returns & Refunds",
    ],
  },
];

export const carouselCategories = [
  "New Arrivals",
  "Street Masters",
  "Platinum",
] as const;

// Helper to get a random item from an array
function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
