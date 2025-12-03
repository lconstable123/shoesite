import { productData, productsById } from "./product-data";

import type { tProduct, tProductId, tCategory, tSubcategory } from "./types";

export type tMenuCollection = Record<
  tCategory,
  {
    menuItems: Partial<Record<tSubcategory, tProductId[]>>;
    splashImage: string;
  }
>;

export const MenuCollection: tMenuCollection = {
  sports: {
    menuItems: {
      football: ["ronaldo-shoe", "pele-x-shoe"],
      basketball: ["space-jammer-shoe", "bigshot-shoe"],
      outdoors: ["rock-solid-shoe", "vertigo-shoe", "neo-sherpa-shoe"],
      fitness: ["cardiac-shoe", "slipstream-shoe", "sweatlodge-shoe"],
    },
    splashImage: "/assets/gallery/sweatlodge/sweatlodge-promo.webp",
  },
  lifestyle: {
    menuItems: {
      casual: ["street-masters-shoe", "lazy-sunday-shoe", "expresso-shoe"],
      skatewear: ["rodney-mullet-shoe", "tawny-hawkmouth-shoe"],
      premium: ["luxx-shoe", "glider-shoe"],
    },
    splashImage: "/assets/gallery/street-masters/street-masters-all-promo.webp",
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
      clothes: ["luxx-m-shirt", "expresso-shirt", "staples-tee"],
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
        "expresso-shoe",
        "glider-shoe",
      ],
      clothes: ["luxx-f-shirt", "expresso-shirt", "staples-tee"],
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
      clothes: [
        "playtime-tee",
        "staples-tee",
        "staples-pants",
        "staples-hoodie",
      ],
      accessories: ["acc-smart-band"],
    },
    splashImage: "/assets/gallery/playtime/playtime-shoe-promo.webp",
  },
};
