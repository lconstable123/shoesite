import { carouselCategories } from "./data";

export const Categories = [
  "sports",
  "lifestyle",
  "men",
  "women",
  "kids",
] as const;

const sucategories = [
  "football",
  "outdoors",
  "basketball",
  "fitness",
  "casual",
  "premium",
  "skatewear",
  "staples",
  "shoes",
  "tennis",
  "golf",
  "outdoors",
  "clothes",
  "accessories",
] as const;

export const purposes = [
  "performance",
  "casual",
  "premium",
  "staples",
  "skatewear",
  "outdoors",
  "running",
  "training",
  "lifestyle",
] as const;
export const Sizing = ["S", "M", "L", "XL", "2XL"] as const;
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
export const Products = [
  "Ronaldo",
  "Pele-X",
  "Space Jammer",
  "Bigshot",
  "Rock Solid",
  "Vertigo",
  "Neo-Sherpa",
  "Cardiac",
  "Slipstream",
  "Sweatlodge",
  "Street Masters",
  "Lazy Sunday",
  "Expresso",
  "Rodney Mullet",
  "Tawny Hawkmouth",
  "Playtime",
  "Luxx",
  "Glider",
  "Messi",
  "Jordan",
  "Lebron",
  "Kobe",
  "Federer",
  "Nadal",
  "Djokovic",
  "Tiger",
  "Phil",
  "Arnold",
  "Tees",
  "Pants",
  "Jumpers",
  "Shirts",
  "Accessories",
] as const;
export const colors = [
  "red",
  "blue",
  "green",
  "black",
  "white",
  "yellow",
  "grey",
  "pink",
] as const;
export type tCategory = (typeof Categories)[number];
export type CarouselCategory = (typeof carouselCategories)[number];
export type tSubcategory = (typeof sucategories)[number];
export type tProductName = (typeof Products)[number];
export type WidthCategory = "small" | "medium" | "large" | "extralarge";
export type tGarmentSizing = (typeof Sizing)[number];
export type tProductSizingType = "shoe" | "garment";
export type tShoeSizing = (typeof ShoeSizing)[number];
export type colors = (typeof colors)[number];

export type tProductAvailability = {
  inStock: boolean;
  size?: tGarmentSizing[] | tShoeSizing[];
  colors?: colors[];
};

export type tProduct = {
  id: string;
  category: tCategory;
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

export interface MenuCategory {
  id: tCategory;
  img: string;
  thumb?: string;
  subcategories: {
    id: tSubcategory;
    items: tProductName[];
  }[];
}

export interface SupportLink {
  id: string;
  name: string;
}

export interface MenuData {
  categories: MenuCategory[];

  supportLinks: SupportLink[];
  region: string;
}
