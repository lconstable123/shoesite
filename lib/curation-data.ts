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
      football: ["ronaldo-shoe", "pele-x-shoe"],
      basketball: ["space-jammer-shoe", "bigshot-shoe"],
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
