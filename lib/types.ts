export const Categories = [
  "SPORTS",
  "LIFESTYLE",
  "MEN",
  "WOMEN",
  "KIDS",
] as const;
export type tCategory = (typeof Categories)[number];

export type WidthCategory = "small" | "medium" | "large" | "extralarge";

export const Sizing = ["S", "M", "L", "XL", "2XL"] as const;
export type tGarmentSizing = (typeof Sizing)[number];

export type tProductSizingType = "shoe" | "garment";

export const ShoeSizing = [
  "US 4",
  "U4.5",
  "US 5",
  "US 5.5",
  "US 6",
  "US 6.5",
  "US 7",
  "US 7.5",
  "US 8",
  "US 8.5",
  "US 9",
  "US 9.5",
] as const;
export type tShoeSizing = (typeof ShoeSizing)[number];

export type colors =
  | "red"
  | "blue"
  | "green"
  | "black"
  | "white"
  | "yellow"
  | "grey"
  | "pink";

export type tProductAvailability = {
  inStock: boolean;
  size?: tGarmentSizing[] | tShoeSizing[];
  colors?: colors[];
};

export type tProduct = {
  id: string;
  category: string;
  purpose?: string;
  range?: string;
  name: string;
  discountPrice?: number;
  price: number;
  description?: string;
  byline?: string;
  imageUrl?: string;
  colors: colors[];
  new?: boolean;
  sizing: tProductSizingType;
  availability?: tProductAvailability;
};
