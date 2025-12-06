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

// const products: tProduct[] = Products.map((product, idx) => {
//   const allImages = [
//     "/assets/placeholders/img/blueshoe.png",
//     "/assets/placeholders/img/redshoe.png",
//     "/assets/placeholders/img/greenshoe.png",
//     "/assets/placeholders/img/blackshoe.png",
//     "/assets/placeholders/img/whiteshoe.png",
//   ];
//   return {
//     id: `product-${idx + 1}`,
//     category: pickRandom(Categories),
//     imageUrl: "https://www.sourcesplash.com/i/random?q=shoes",
//     purpose: pickRandom(purposes),
//     name: product,
//     price: Math.floor(80 + Math.random() * 120),
//     discountPrice:
//       Math.random() > 0.5 ? Math.floor(60 + Math.random() * 80) : undefined,
//     description: `Description for ${product}. High-quality, comfortable, and stylish.`,
//     byline: `The best ${product} for your needs.`,
//     imageUrl: pickRandom(allImages),
//     colors: Array.from({ length: 2 + Math.floor(Math.random() * 4) }, () =>
//       pickRandom(colors)
//     ),
//     new: Math.random() > 0.7,
//     sizing: "shoe",
//     availability: {
//       inStock: Math.random() > 0.1,
//       size: ["US 4", "US 5", "US 6", "US 7", "US 8", "US 9", "US 9.5"],
//       colors: Array.from({ length: 2 + Math.floor(Math.random() * 4) }, () =>
//         pickRandom(colors)
//       ),
//     },
//   };
// });

// export type Categories = (typeof menuData.categories)[number]["id"];

// Helper function to get category by id
export const getCategoryById = (id: string): MenuCategory | undefined => {
  return menuData.categories.find((category) => category.id === id);
};

// Helper function to get all category names
export const getAllCategoryNames = (): string[] => {
  return menuData.categories.map((category) => category.id);
};

// Helper function to get subcategories by category id
export const getSubcategoriesByCategoryId = (categoryId: string) => {
  const category = getCategoryById(categoryId);
  return category?.subcategories || [];
};
export const dummyProduct: tProduct = productData[0];
// export const dummyProduct: tProduct = {
//   id: "product-123",
//   garmentType: "shoe",
//   purpose: "running",
//   subcategory: "fitness",
//   name: "Lazy Sunday",
//   price: 120,
//   discountPrice: 100,
//   description:
//     "A high-quality running shoe for all terrains. Extended half-l bystand cushioning and support with multiplied z-framing. Ribbed vertex positioners for enhanced stability.",
//   imageUrl: "/assets/placeholders/img/blueshoe.png",
//   byline:
//     "Run faster, run farther. Go the distance with our latest running shoes. Really great shoes. You'll love them! I promise. More words here to make it look better.",
//   colors: ["blue", "black", "white", "green", "red", "pink"],
// };
