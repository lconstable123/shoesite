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

export type tFooterDataItem = {
  title: string;
  items: { id: string; type: "link" | "modal" }[];
};

export const footerData = [
  {
    title: "SPORTS",
    items: [
      { id: "Football", type: "link" },
      { id: "Running", type: "link" },
      { id: "Outdoors", type: "link" },
      { id: "Basketball", type: "link" },
      { id: "Fitness", type: "link" },
    ],
  },
  {
    title: "LIFESTYLE",
    items: [
      { id: "Casual", type: "link" },
      { id: "Premium", type: "link" },
      { id: "Skatewear", type: "link" },
      { id: "Staples", type: "link" },
    ],
  },
  {
    title: "MEN",
    items: [
      { id: "Shoes", type: "link" },
      { id: "Clothes", type: "link" },
      { id: "Accessories", type: "link" },
    ],
  },
  {
    title: "WOMEN",
    items: [
      { id: "Shoes", type: "link" },
      { id: "Clothes", type: "link" },
      { id: "Accessories", type: "link" },
    ],
  },
  {
    title: "KIDS",
    items: [
      { id: "Shoes", type: "link" },
      { id: "Clothes", type: "link" },
      { id: "Accessories", type: "link" },
    ],
  },
  {
    title: "INFO",
    items: [
      { id: "About", type: "modal" },
      { id: "Careers", type: "modal" },
      { id: "Sustainability", type: "modal" },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      { id: "Store Locator", type: "modal" },
      { id: "Order Tracker", type: "modal" },
      { id: "Customer Service", type: "modal" },
      { id: "Returns & Refunds", type: "modal" },
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
