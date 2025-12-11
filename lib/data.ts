import { tCollection } from "./curation-data";
import { productData } from "./product-data";
import {
  Categories,
  colors,
  MenuCategory,
  MenuData,
  Products,
  purposes,
  tCategory,
  tCollectionsId,
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

const footerModalIds = [
  "Store Locator",
  "Order Tracker",
  "Customer Service",
  "Returns & Refunds",
  "About",
  "Careers",
  "Sustainability",
] as const;

export type tfooterModalIds = (typeof footerModalIds)[number];

type extendedMenuId = tCollectionsId | tfooterModalIds;

export type tFooterDataItem = {
  title: string;
  items: { id: extendedMenuId; type: "link" | "modal" }[];
};

export const footerData: tFooterDataItem[] = [
  {
    title: "SPORTS",
    items: [
      { id: "football", type: "link" },
      { id: "running", type: "link" },
      { id: "outdoors", type: "link" },
      { id: "basketball", type: "link" },
      { id: "fitness", type: "link" },
    ],
  },
  {
    title: "LIFESTYLE",
    items: [
      { id: "casual", type: "link" },
      { id: "premium", type: "link" },
      { id: "skatewear", type: "link" },
      { id: "staples", type: "link" },
    ],
  },
  {
    title: "MEN",
    items: [
      { id: "shoes-m", type: "link" },
      { id: "clothes-m", type: "link" },
      { id: "accessories", type: "link" },
    ],
  },
  {
    title: "WOMEN",
    items: [
      { id: "shoes-w", type: "link" },
      { id: "clothes-w", type: "link" },
      { id: "accessories", type: "link" },
    ],
  },
  {
    title: "KIDS",
    items: [
      { id: "shoes-k", type: "link" },
      { id: "clothes-k", type: "link" },
      { id: "accessories", type: "link" },
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
