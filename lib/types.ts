import { carouselCategories } from "./data";

export const Categories = [
  "lifestyle",
  "sports",
  "men",
  "women",
  "kids",
] as const;

const sucategories = [
  "football",
  "outdoors",
  "basketball",
  "fitness",
  "competition",
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

export const productKeys = [
  "ronaldo-shoe",
  "pele-x-shoe",
  "space-jammer-shoe",
  "bigshot-shoe",
  "rock-solid-shoe",
  "vertigo-shoe",
  "neo-sherpa-shoe",
  "cardiac-shoe",
  "slipstream-shoe",
  "sweatlodge-shoe",
  "street-masters-shoe",
  "street-masters-shirt",
  "street-masters-pants",
  "lazy-sunday-shoe",
  "lazy-sunday-shirt",
  "lazy-sunday-pants",
  "expresso-shoe",
  "expresso-shirt",
  "expresso-pants",
  "rodney-mullet-shoe",
  "tawny-hawkmouth-shoe",
  "luxx-shoe",
  "luxx-m-shirt",
  "luxx-f-shirt",
  "luxx-m-pants",
  "luxx-f-pants",
  "glider-shoe",
  "staples-tee",
  "staples-pants",
  "staples-hoodie",
  "playtime-shoe",
  "playtime-tee",
  "acc-sports-watch",
  "acc-cap",
  "acc-smart-band",
  "acc-water-bottle",
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
export const Sizing = ["XS", "S", "M", "L", "XL", "2XL"] as const;
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
  "Staples",
  "Playtime",
  "Tees",
  "Pants",
  "Jumpers",
  "Shirts",
  "Sports Watch",
  "Cap",
  "Smart Band",
  "Water Bottle",
] as const;

export const Collections = [
  "luxx",
  "expresso",
  "staples",
  "playtime",
  "streetmasters",
  "lazysunday",
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

export const garmentTypes = [
  "shirt",
  "pants",
  "jumper",
  "hoodie",
  "jacket",
  "accessory",
  "shoe",
] as const;

export const PromoCarouselSegments = [
  "Platinum",
  "New-Arrivals",
  "Best-Sellers",
  "Diverse",
  "Casual",
  "Athletic",
  "Fun",
  // "Luxx",
  // "Expresso",
  // "Staples",
  // "Playtime",
  // "Street-Masters",
  // "Lazy-Sunday",
] as const;

export type tCarouselSegments = Record<
  tPromoCarouselSegments,
  {
    name: string;
    items: tProductId[];
  }
>;
export type tPromoCarouselSegments = (typeof PromoCarouselSegments)[number];
export type tCategory = (typeof Categories)[number];
export type tProductId = (typeof productKeys)[number];
export type tCollectionsId = (typeof Collections)[number];
export type tGarmentType = (typeof garmentTypes)[number];
export type CarouselCategory = (typeof carouselCategories)[number];
export type tSubcategory = (typeof sucategories)[number];
export type tProductName = (typeof Products)[number];
export type WidthCategory = "small" | "medium" | "large" | "extralarge";
export type tGarmentSizing = (typeof Sizing)[number];
export type tProductSizingType = (typeof garmentTypes)[number];
export type tShoeSizing = (typeof ShoeSizing)[number];
export type colors = (typeof colors)[number];
export type tCartItem = {
  id: tProductId;
  quantity: number;
  color: colors;
  size: tGarmentSizing | tShoeSizing;
};
export const productNamesFromId: Record<
  tProductId | tCollectionsId,
  tProductName
> = {
  "ronaldo-shoe": "Ronaldo",
  "pele-x-shoe": "Pele-X",
  "space-jammer-shoe": "Space Jammer",
  "bigshot-shoe": "Bigshot",
  "rock-solid-shoe": "Rock Solid",
  "vertigo-shoe": "Vertigo",
  "neo-sherpa-shoe": "Neo-Sherpa",
  "cardiac-shoe": "Cardiac",
  "slipstream-shoe": "Slipstream",
  "sweatlodge-shoe": "Sweatlodge",
  "street-masters-shoe": "Street Masters",
  "street-masters-shirt": "Street Masters",
  "street-masters-pants": "Street Masters",
  "lazy-sunday-shoe": "Lazy Sunday",
  "lazy-sunday-shirt": "Lazy Sunday",
  "lazy-sunday-pants": "Lazy Sunday",
  "expresso-shoe": "Expresso",
  "expresso-shirt": "Expresso",
  "expresso-pants": "Expresso",
  "rodney-mullet-shoe": "Rodney Mullet",
  "tawny-hawkmouth-shoe": "Tawny Hawkmouth",
  "luxx-shoe": "Luxx",
  "luxx-m-shirt": "Luxx",
  "luxx-f-shirt": "Luxx",
  "luxx-m-pants": "Luxx",
  "luxx-f-pants": "Luxx",
  "glider-shoe": "Glider",
  "staples-tee": "Staples",
  "staples-pants": "Staples",
  "staples-hoodie": "Staples",
  "playtime-shoe": "Playtime",
  "playtime-tee": "Playtime",
  "acc-sports-watch": "Sports Watch",
  "acc-cap": "Cap",
  "acc-smart-band": "Smart Band",
  "acc-water-bottle": "Water Bottle",
  luxx: "Luxx",
  expresso: "Expresso",
  staples: "Staples",
  playtime: "Playtime",
  streetmasters: "Street Masters",
  lazysunday: "Lazy Sunday",
};

export type tProductAvailability = {
  inStock: boolean;
  size?: tGarmentSizing[] | tShoeSizing[];
  colors?: colors[];
};

export type tProduct = {
  id: tProductId;
  garmentType: tGarmentType;
  subcategory: tSubcategory;
  purpose?: string;
  range?: string;
  name: string;
  discountPrice?: number;
  price: number;
  description?: string;
  byline?: string;
  promoImageUrl: string;
  primaryImageUrlColor: colors;
  redImageUrl?: string;
  blueImageUrl?: string;
  greenImageUrl?: string;
  blackImageUrl?: string;
  whiteImageUrl?: string;
  greyImageUrl?: string;
  pinkImageUrl?: string;
  yellowImageUrl?: string;
  colors: colors[];
  carousels?: tPromoCarouselSegments[];
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
export type tPromoData = {
  id: string;
  promoUrl: string | null;
  promoByline: string | null;
};
