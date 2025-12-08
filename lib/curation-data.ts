import { productData, productsById } from "./product-data";

import type {
  tProduct,
  tProductId,
  tCategory,
  tSubcategory,
  tCollectionsId,
} from "./types";

export type tMenuCollection = Record<
  tCategory,
  {
    menuItems: Partial<Record<tSubcategory, (tProductId | tCollectionsId)[]>>;
    splashImage: string;
  }
>;

export type tCollection = Record<
  tCollectionsId,
  {
    items: tProductId[];
    splashImage?: string;
    byline?: string;
  }
>;

export type tPromoSegment = {
  id: tCollectionsId | tProductId;
  title: string;
  promoImageUrl: string;
  promoImageUrl2: string;
  productImageUrl?: string;

  description: string;
};

export const MenuCollection: tMenuCollection = {
  lifestyle: {
    menuItems: {
      casual: ["streetmasters", "lazysunday", "expresso", "playtime"],
      skatewear: ["rodney-mullet-shoe", "tawny-hawkmouth-shoe"],
      premium: ["luxx", "glider-shoe"],
    },
    splashImage: "/assets/gallery/street-masters/street-masters-all-promo.webp",
  },
  sports: {
    menuItems: {
      competition: [
        "space-jammer-shoe",
        "bigshot-shoe",
        "ronaldo-shoe",
        "pele-x-shoe",
      ],
      // basketball: [],
      outdoors: ["rock-solid-shoe", "vertigo-shoe", "neo-sherpa-shoe"],
      fitness: ["cardiac-shoe", "slipstream-shoe", "sweatlodge-shoe"],
    },
    splashImage: "/assets/gallery/sweatlodge/sweatlodge-promo.webp",
  },
  men: {
    menuItems: {
      shoes: [
        "rock-solid-shoe",
        "lazy-sunday-shoe",
        "luxx-shoe",
        "glider-shoe",
        "street-masters-shoe",
      ],
      clothes: ["luxx-m-shirt", "expresso-shirt", "staples"],
      accessories: [
        "acc-sports-watch",
        "acc-water-bottle",
        "acc-cap",
        "acc-smart-band",
      ],
    },
    splashImage: "/assets/gallery/expresso/expresso-all-promo.webp",
  },
  women: {
    menuItems: {
      shoes: [
        "slipstream-shoe",
        "sweatlodge-shoe",
        "street-masters-shoe",
        "glider-shoe",
      ],
      clothes: ["luxx-f-shirt", "lazy-sunday-shirt", "staples"],
      accessories: [
        "acc-sports-watch",
        "acc-water-bottle",
        "acc-cap",
        "acc-smart-band",
      ],
    },
    splashImage: "/assets/gallery/glider/glider-all-promo.webp",
  },
  kids: {
    menuItems: {
      shoes: ["playtime-shoe", "space-jammer-shoe"],
      clothes: ["playtime-tee", "staples"],
      accessories: ["acc-smart-band"],
    },
    splashImage: "/assets/gallery/playtime/playtime-shoe-promo.webp",
  },
};

export const collectionById: tCollection = {
  luxx: {
    items: [
      "luxx-shoe",
      "luxx-m-shirt",
      "luxx-f-shirt",
      "luxx-m-pants",
      "luxx-f-pants",
    ],
    splashImage: "assets/gallery/luxx/luxx-all-promo.webp",
    byline:
      "Experience luxury in every step. The Luxx collection combines premium materials with cutting-edge design for the ultimate in comfort and style. ",
  },
  expresso: {
    items: ["expresso-shoe", "expresso-shirt", "expresso-pants"],
    splashImage: "assets/gallery/expresso/expresso-all-promo.webp",
    byline:
      "Speed and Style. Fit in anywhere by fitting into the classic Expresso shoe, part of the Expresso collection.",
  },
  staples: {
    items: ["staples-tee", "staples-hoodie"],
    splashImage: "assets/gallery/staples/staples-hoodie-promo.webp",
    byline:
      " The Staples collection. The top of the drawer. Everyday essentials redefined. ",
  },
  playtime: {
    items: ["playtime-shoe", "playtime-tee"],
    splashImage: "assets/gallery/playtime/playtime-shoe-promo.webp",
    byline: " The Playtime collection. Everyday fun for the family.",
  },
  streetmasters: {
    items: [
      "street-masters-shoe",
      "street-masters-shirt",
      "street-masters-pants",
    ],
    splashImage: "assets/gallery/street-masters/street-masters-all-promo.webp",
    byline:
      "Navigate the concrete jungle with style and ease. The Street Masters collection.",
  },
  lazysunday: {
    items: ["lazy-sunday-shoe", "lazy-sunday-shirt", "lazy-sunday-pants"],

    splashImage: "assets/gallery/lazy-sunday/lazy-sunday-shoe-promo.webp",
  },
};

export const promoSegments: tPromoSegment[] = [
  {
    id: "street-masters-shoe",
    title: "Street Masters",
    promoImageUrl:
      "assets/gallery/street-masters/street-masters-all-promo.webp",
    description:
      "Navigate the concrete jungle with style and ease. The Street Masters collection.",
    promoImageUrl2: "/assets/gallery/promo/promo_returns2.webp",
  },
  // {
  //   id: "cardiac-shoe",
  //   title: "Cardiac",
  //   promoImageUrl: "assets/gallery/cardiac/cardiac-promo-2.webp",
  //   promoImageUrl2: "/assets/gallery/promo/office_promo.webp",
  //   description:
  //     "High-performance running shoes designed for maximum comfort and support during intense workouts. Featuring breathable mesh uppers, responsive cushioning, and durable outsoles for superior traction.",
  // },
  {
    id: "luxx-shoe",
    title: "Luxx",
    promoImageUrl: "assets/gallery/luxx/luxx-shoes-promo.webp",
    promoImageUrl2: "/assets/gallery/promo/shipping_promo.webp",
    description:
      "Experience luxury in every step. The Luxx collection combines premium materials with cutting-edge design for the ultimate in comfort and style.",
  },
  // {
  //   id: "expresso-shoe",
  //   title: "Expresso",
  //   promoImageUrl: "assets/gallery/expresso/expresso-all-promo.webp",
  //   promoImageUrl2: "/assets/gallery/expresso/expresso-shoe-promo.webp",
  //   description:
  //     "Speed and Style. Fit in anywhere by fitting into the classic Expresso shoe, part of the Expresso collection.",
  // },
  {
    id: "rodney-mullet-shoe",
    title: "Rodney Mullet",
    promoImageUrl: "assets/gallery/rodney-mullet/rodney-mullet-promo.webp",
    promoImageUrl2: "/assets/gallery/promo/office_promo.webp",
    description:
      "The Rodney Mullet skate shoe. Durable construction with reinforced stitching. Padded collar and tongue for extra comfort. Grippy rubber outsole for superior board control. Classic design that never goes out of style.",
  },
  // {
  //   id: "playtime-shoe",
  //   title: "Playtime",
  //   promoImageUrl: "assets/gallery/playtime/playtime-shoe-promo.webp",
  //   promoImageUrl2: "/assets/gallery/playtime/playtime-shirt-promo.webp",
  //   description: " The Playtime collection. Everyday fun for the family.",
  // },
  // {
  //   id: "bigshot-shoe",
  //   title: "Bigshot",
  //   promoImageUrl: "assets/gallery/bigshot/bigshot-promo.webp",
  //   description:
  //     "Elevate your game with the Bigshot basketball shoes, engineered for explosive performance on the court. With advanced ankle support, responsive cushioning, and a sleek design, these shoes help you dominate every play.",
  // },
  // {
  //   id: "sweatlodge-shoe",
  //   title: "Sweatlodge",
  //   promoImageUrl: "assets/gallery/sweatlodge/sweatlodge-promo.webp",
  //   description:
  //     "All-weather training shoes built to withstand the toughest conditions. The Sweatlodge shoes feature water-resistant uppers, rugged outsoles, and enhanced durability to keep you going no matter the weather.",
  // },
  // {
  //   id: "slipstream-shoe",
  //   title: "Slipstream",
  //   promoImageUrl: "assets/gallery/slipstream/slipstream-promo.webp",
  //   description:
  //     "Lightweight and flexible training shoes perfect for a variety of workouts. The Slipstream shoes feature breathable uppers, cushioned midsoles, and durable outsoles to keep you comfortable and agile during your fitness routine.",
  // },
];
