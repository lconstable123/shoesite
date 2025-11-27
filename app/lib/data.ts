export interface MenuCategory {
  id: string;
  name: string;
  subcategories: {
    id: string;
    title: string;
    items: string[];
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

export const menuData: MenuData = {
  categories: [
    {
      id: "sports",
      name: "Sports",
      subcategories: [
        {
          id: "football",
          title: "FOOTBALL",
          items: ["Ronaldo", "Pele-X"],
        },
        {
          id: "basketball",
          title: "BASKETBALL",
          items: ["Space Jammer", "Bigshot"],
        },
        {
          id: "outdoors",
          title: "OUTDOORS",
          items: ["Rock Solid", "Vertigo", "Neo-Sherpa"],
        },
        {
          id: "fitness",
          title: "FITNESS",
          items: ["Cardiac", "Slipstream", "Sweatlodge"],
        },
      ],
    },
    {
      id: "lifestyle",
      name: "Lifestyle",
      subcategories: [
        {
          id: "casual",
          title: "CASUAL",
          items: ["Street Masters", "Lazy Sunday", "Expresso"],
        },
        {
          id: "skatewear",
          title: "SKATEWEAR",
          items: ["Rodney Mullet", "Tawny Hawkmouth"],
        },
        {
          id: "premium",
          title: "PREMIUM",
          items: ["Luxx", "Glider"],
        },
        {
          id: "staples",
          title: "STAPLES",
          items: ["Tees", "Pants", "Jumpers"],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      subcategories: [
        {
          id: "shoes",
          title: "SHOES",
          items: [
            "Rock Solid",
            "Lazy Sunday",
            "Luxx",
            "Glider",
            "Street Masters",
          ],
        },
        {
          id: "clothes",
          title: "CLOTHES",
          items: ["Street Masters", "Luxx", "Expresso"],
        },
        {
          id: "accessories",
          title: "ACCESSORIES",
          items: ["Shop all accessories"],
        },
      ],
    },
    {
      id: "women",
      name: "Women",
      subcategories: [
        {
          id: "shoes",
          title: "SHOES",
          items: ["Street Masters", "Lazy Sunday", "Expresso", "Vertigo"],
        },
        {
          id: "clothes",
          title: "CLOTHES",
          items: ["Street Masters", "Lux", "Expresso"],
        },
        {
          id: "accessories",
          title: "ACCESSORIES",
          items: ["Shop all accessories"],
        },
      ],
    },
    {
      id: "kids",
      name: "Kids",
      subcategories: [
        {
          id: "shoes",
          title: "SHOES",
          items: ["Street Masters", "Playtime"],
        },
        {
          id: "clothes",
          title: "CLOTHES",
          items: ["Tees", "Shirts", "Jumpers"],
        },
        {
          id: "accessories",
          title: "ACCESSORIES",
          items: ["Shop all accessories"],
        },
      ],
    },
  ],
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
export type CarouselCategory = (typeof carouselCategories)[number];

export type Categories = (typeof menuData.categories)[number]["id"];

// Helper function to get category by id
export const getCategoryById = (id: string): MenuCategory | undefined => {
  return menuData.categories.find((category) => category.id === id);
};

// Helper function to get all category names
export const getAllCategoryNames = (): string[] => {
  return menuData.categories.map((category) => category.name);
};

// Helper function to get subcategories by category id
export const getSubcategoriesByCategoryId = (categoryId: string) => {
  const category = getCategoryById(categoryId);
  return category?.subcategories || [];
};
