import { colors, tProduct } from "./types";
import { v4 as uuidv4 } from "uuid";
function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function uniqueRandomArray(length: number, max: number): number[] {
  if (length > max) {
    throw new Error(
      "Requested length exceeds the number of unique values available"
    );
  }
  const set = new Set<number>();
  while (set.size < length) {
    const num = Math.floor(Math.random() * max);
    set.add(num);
  }
  return Array.from(set);
}

function randomColors(length: number): colors[] {
  const indices = uniqueRandomArray(Math.max(length, 1), colors.length);
  const mapped = indices.map((i) => colors[i]);
  return mapped;
}

function generateLorem(wordsCount = 50) {
  const pool = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "ut",
    "enim",
    "ad",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "ut",
    "aliquip",
    "ex",
    "ea",
    "commodo",
    "consequat",
    "duis",
    "aute",
    "irure",
    "in",
    "reprehenderit",
    "voluptate",
    "velit",
    "esse",
    "cillum",
    "dolore",
    "eu",
    "fugiat",
    "nulla",
    "pariatur",
    "excepteur",
    "sint",
    "occaecat",
    "cupidatat",
    "non",
    "proident",
    "sunt",
    "in",
    "culpa",
    "qui",
    "officia",
    "deserunt",
    "mollit",
    "anim",
    "id",
    "est",
    "laborum",
  ];

  let result = [];
  for (let i = 0; i < wordsCount; i++) {
    const w = pool[Math.floor(Math.random() * pool.length)];
    result.push(w);
  }
  // Capitalize first word and add period at end
  if (result.length > 0) {
    result[0] = result[0][0].toUpperCase() + result[0].slice(1);
    result[result.length - 1] += ".";
  }
  return result.join(" ");
}

export const productData: tProduct[] = [
  {
    id: "ronaldo-shoe",
    garmentType: "shoe",
    subcategory: "football",
    name: "Ronaldo",
    price: 200,
    discountPrice: 120,
    colors: ["green", "red", "black"],
    purpose: "performance",
    description:
      "A football shoe inspired by a legendary legacy. A charming design engineered for maximum comfort and traction on the field. Featuring cutting-edge sole technology for explosive speed and agility. Ergonomic fit for all-day comfort during intense matches. Breathable upper material to keep feet cool and dry. Innovative design inspired by an iconic vibe.",
    byline:
      "Experience the speed and agility of Ronaldo with this high-performance football shoe.",
    primaryImageUrlColor: "red",
    promoImageUrl: "/assets/gallery/ronaldo/ronaldo-promo.webp",
    redImageUrl: "assets/gallery/ronaldo/ronaldo-shoe-red.webp",
    greenImageUrl: "assets/gallery/ronaldo/ronaldo-shoe-green.webp",
    blackImageUrl: "assets/gallery/ronaldo/ronaldo-shoe-black.webp",
  },
  {
    id: "pele-x-shoe",
    garmentType: "shoe",
    subcategory: "football",
    name: "Pele-X",
    price: 200,
    discountPrice: 120,
    colors: ["red", "black", "white"],
    purpose: "agility",
    description:
      "A shoe based on an iconic style and performance. Lightweight design with superior grip and comfort for football players. Featuring advanced sole technology for quick cuts and pivots on the field. Ergonomic fit for all-day comfort during intense matches. Breathable upper material to keep feet cool and dry. Sleek design inspired by a legendary career.",
    byline:
      "Experience the agility and precision of Pele-X, designed for the ultimate football performance.",
    primaryImageUrlColor: "black",
    promoImageUrl: "assets/gallery/pele-x/peleX-promo-2.webp",
    redImageUrl: "assets/gallery/pele-x/peleX-red.webp",
    whiteImageUrl: "assets/gallery/pele-x/peleX-white.webp",
    blackImageUrl: "assets/gallery/pele-x/peleX-black.webp",
  },
  {
    id: "space-jammer-shoe",
    garmentType: "shoe",
    subcategory: "basketball",
    name: "Space Jammer",
    price: 200,
    discountPrice: 120,
    colors: ["red", "white", "blue"],
    purpose: "performance",
    description:
      "Take your game to new heights with the Space Jammer, designed for ultimate performance and style. Crazy bounce technology for high-flying dunks and quick cuts. Available in Cosmic Red, Lunar White, and Galactic Blue. Featuring advanced cushioning for maximum comfort during intense games. Ergonomic fit for all-day wear on and off the court. Sleek design inspired by the iconic franchise. Zoom air units for superior impact protection and responsiveness.",
    byline:
      "Fun for all ages but dead serious on the court. In no way related to the franchise or its intellectual property holders.",
    primaryImageUrlColor: "blue",
    promoImageUrl: "assets/gallery/space-jammer/space-jammer-promo-3.webp",
    redImageUrl: "assets/gallery/space-jammer/space-jammer-red.webp",
    whiteImageUrl: "assets/gallery/space-jammer/space-jammer-white.webp",
    blueImageUrl: "assets/gallery/space-jammer/space-jammer-blue.webp",
  },
  {
    id: "bigshot-shoe",
    garmentType: "shoe",
    subcategory: "basketball",
    name: "Bigshot",
    price: 220,
    colors: ["red", "black", "white", "pink"],
    purpose: "performance",
    description:
      "The perfect basketball shoe for making big shots. Making those high-impact plays with confidence and style. Leap into the air like never before. Comes in Red, Black, White, and Pink. Heel Cushioning and Ankle Support included. Toast-resistant sole for extra durability on the court. Enhanced grip technology for quick cuts and pivots. Lightweight design to keep you agile and fast. Breathable mesh upper for half-time comfort.",
    byline:
      "Be the big shot on the court with this high-performance basketball shoe.",
    primaryImageUrlColor: "black",
    promoImageUrl: "assets/gallery/bigshot/bigshot-promo.webp",
    redImageUrl: "assets/gallery/bigshot/bigshot-red.webp",
    whiteImageUrl: "assets/gallery/bigshot/bigshot-white.webp",
    pinkImageUrl: "assets/gallery/bigshot/bigshot-pink.webp",
    blackImageUrl: "assets/gallery/bigshot/bigshot-black.webp",
  },
  {
    id: "rock-solid-shoe",
    garmentType: "shoe",
    subcategory: "outdoors",
    name: "Rock Solid",
    price: 300,
    discountPrice: 70,
    colors: ["red", "blue", "green"],
    purpose: "bouldering",
    description:
      "Reinventing the climbing shoe with unparalleled durability and grip. Comes in Berry Red, Medditerranean Blue, and Forest Green. Featuring advanced sole technology for maximum traction on rocky surfaces. Ergonomic fit for all-day comfort while scaling new heights. Embedded gps tracker to ensure you never lose your way. Ironclad toe protection for the toughest climbs. 200 year warranty against rock-induced wear and tear.",
    byline:
      "You want a rock solid climbing shoe? Here it is. It it pretty much indestructible and can get you anywhere. ",
    primaryImageUrlColor: "blue",
    promoImageUrl: "assets/gallery/rock-solid/rock-solid-promo-2.webp",
    redImageUrl: "assets/gallery/rock-solid/rock-solid-red.webp",
    blueImageUrl: "assets/gallery/rock-solid/rock-solid-blue.webp",
    greenImageUrl: "assets/gallery/rock-solid/rock-solid-green.webp",
  },
  {
    id: "vertigo-shoe",
    garmentType: "shoe",
    subcategory: "outdoors",
    name: "Vertigo",
    price: 300,
    discountPrice: 90,
    colors: ["black", "pink", "blue"],
    purpose: "climbing",
    description:
      "Reach new heights with confidence using Vertigo climbing shoes. Robust and Elegant. Engineered for superior grip and comfort on the steepest ascents. Available in Midnight Black, Bubblegum Pink, and Sky Blue. Featuring adaptive fit technology that molds to your foot for personalized comfort. Reinforced sole for maximum durability on rugged terrains. Lightweight design to enhance agility and reduce fatigue during climbs. Integrated chalk pouch for quick access during challenging routes. Rubberized toe cap for added protection against rough surfaces. Trained on Martial Artists and Professional Dancers alike.",
    byline:
      "Heights are afraid of you with Vertigo shoes. Conquer all and do it with grace.",
    primaryImageUrlColor: "blue",
    promoImageUrl: "assets/gallery/vertigo/vertigo-promo.webp",
    pinkImageUrl: "assets/gallery/vertigo/vertigo-pink.webp",
    blueImageUrl: "assets/gallery/vertigo/vertigo-blue.webp",
    blackImageUrl: "assets/gallery/vertigo/vertigo-black.webp",
  },
  {
    id: "neo-sherpa-shoe",
    garmentType: "shoe",
    subcategory: "outdoors",
    name: "Neo-Sherpa",
    price: 300,
    colors: ["black", "green", "grey"],
    purpose: "endurance",
    description:
      "Made of sutainable open source and free trade synthetic Marmot hair.  Available in Obsidian Black, Moss Green, and Stone Grey. Featuring ultra-cushioned insoles for all-day comfort on long treks. Waterproof exterior to keep your feet dry in wet conditions. Breathable mesh panels for enhanced ventilation during intense hikes. Reinforced ankle support for stability on uneven terrains. Eco-friendly materials that minimize environmental impact without compromising performance. Completely odorlous for one month with embedded oxygenated hemp microstructures.",
    byline:
      "Time is an  illusion. Experience endless endurance with Neo-Sherpa. Wherever you need to go, you can find it within yourself with these hiking trailblazers.",
    primaryImageUrlColor: "black",
    promoImageUrl: "assets/gallery/neo-sherpa/neo-sherpa-promo.webp",
    blackImageUrl: "assets/gallery/neo-sherpa/neo-sherpa-black.webp",
    greenImageUrl: "assets/gallery/neo-sherpa/neo-sherpa-green.webp",
    greyImageUrl: "assets/gallery/neo-sherpa/neo-sherpa-grey.webp",
  },
  {
    id: "cardiac-shoe",
    garmentType: "shoe",
    subcategory: "fitness",
    name: "Cardiac",
    price: 540,
    discountPrice: 340,
    colors: ["blue", "green", "grey", "white", "red"],
    purpose: "jogging",
    description:
      "A cutting edge design in collaboration with leading cardiologists to optimize heart rate and circulation during exercise. Advanced sole technology for superior shock absorption and energy return. Ergonomic fit for all-day comfort during runs. Breathable upper material to keep feet cool and dry. Reflective elements for enhanced visibility during low-light conditions. Sleek design inspired by the rhythm of the heart. Comes in blue, green, grey, white, and red.",
    byline:
      "It's all about the attack. Feel your heart racing with every step.",
    primaryImageUrlColor: "green",
    promoImageUrl: "assets/gallery/cardiac/cardiac-promo-2.webp",
    blueImageUrl: "assets/gallery/cardiac/cardiac-blue.webp",
    greenImageUrl: "assets/gallery/cardiac/cardiac-green.webp",
    greyImageUrl: "assets/gallery/cardiac/cardiac-grey.webp",
    whiteImageUrl: "assets/gallery/cardiac/cardiac-white.webp",
    redImageUrl: "assets/gallery/cardiac/cardiac-red.webp",
  },
  {
    id: "slipstream-shoe",
    garmentType: "shoe",
    subcategory: "fitness",
    name: "Slipstream",
    price: 200,

    colors: ["blue", "black", "white"],
    purpose: "crosstraining",
    description:
      "Engineered for versatility and performance across a range of training activities. Featuring multi-directional grip technology for stability during lateral movements. Wind resistant materials ensure durability in all weather conditions. Ergonomic fit for all-day comfort during intense workouts. Breathable upper material to keep feet cool and dry. Sleek design inspired by the flow of movement. Available in Blue, Black, and White. Tested by NASA in a zero gravity environment.",
    byline:
      "Slip into something more comfortable for your crossfit workout. Run to the shops, or run to the moon. ",
    primaryImageUrlColor: "black",
    promoImageUrl: "assets/gallery/slipstream/slipstream-promo.webp",
    blueImageUrl: "assets/gallery/slipstream/slipstream-blue.webp",
    blackImageUrl: "assets/gallery/slipstream/slipstream-black.webp",
    whiteImageUrl: "assets/gallery/slipstream/slipstream-white.webp",
  },
  {
    id: "sweatlodge-shoe",
    garmentType: "shoe",
    subcategory: "fitness",
    name: "Sweatlodge",
    price: Math.floor(80 + Math.random() * 120),
    discountPrice:
      Math.random() > 0.5 ? Math.floor(60 + Math.random() * 80) : undefined,
    colors: ["red", "blue", "green", "pink"],
    purpose: "endurance",
    description:
      "A sweat-inducing shoe for intense workouts. Featuring breathable materials to keep feet cool and dry during long sessions. Ergonomic fit for all-day comfort during endurance training. Reinforced sole for maximum durability on various terrains. Lightweight design to enhance agility and reduce fatigue. Vibrant color options to match your workout gear. Features cooling gel warts to enduce longer training seassions.",
    byline: "A shoe that makes you sweat.",
    primaryImageUrlColor: "black",
    promoImageUrl: "assets/gallery/sweatlodge/sweatlodge-promo.webp",
    blueImageUrl: "assets/gallery/sweatlodge/sweatlodge-blue.webp",
    greenImageUrl: "assets/gallery/sweatlodge/sweatlodge-green.webp",
    pinkImageUrl: "assets/gallery/sweatlodge/sweatlodge-pink.webp",
    redImageUrl: "assets/gallery/sweatlodge/sweatlodge-red.webp",
  },
  {
    id: "street-masters-shoe",
    garmentType: "shoe",
    subcategory: "casual",
    name: "Street Masters",
    price: 150,

    colors: ["green", "black", "white", "grey", "red"],
    purpose: "streetwear",
    description:
      "Available in Green, Black, White, Grey, and Red. Durable sole for urban exploration and everyday wear. Ergonomic fit for all-day comfort while navigating city streets. Breathable upper material to keep feet cool during long walks. Sleek design inspired by street culture and urban fashion. Featuring graffiti-resistant coating to maintain a fresh look. Embedded with mini air-cushions for added comfort on hard surfaces. ",
    byline:
      "Navigate the concrete jungle with style and ease. Part of the Street Masters collection.",
    primaryImageUrlColor: "black",
    promoImageUrl:
      "assets/gallery/street-masters/street-masters-shoe-promo.webp",
    whiteImageUrl:
      "assets/gallery/street-masters/street-masters-shoe-white.webp",
    greenImageUrl:
      "assets/gallery/street-masters/street-masters-shoe-green.webp",
    greyImageUrl: "assets/gallery/street-masters/street-masters-shoe-grey.webp",
    redImageUrl: "assets/gallery/street-masters/street-masters-shoe-red.webp",
    blackImageUrl:
      "assets/gallery/street-masters/street-masters-shoe-black.webp",
  },
  {
    id: "street-masters-shirt",
    garmentType: "shirt",
    subcategory: "casual",
    name: "Street Masters",
    price: 60,

    colors: ["green", "black", "white", "grey", "red"],
    purpose: "streetwear",
    description:
      "Swaggy streetwear for everyday urban adventures. Made from breathable, lightweight fabric to keep you cool while navigating the city. Features a relaxed fit for all-day comfort and ease of movement. Durable construction to withstand the rigors of urban life. Stylish design inspired by street culture and urban fashion. Available in Green, Black, White, Grey, and Red. Graffiti-resistant coating to maintain a fresh look.",
    byline:
      "Navigate the concrete jungle with style and ease. Part of the Street Masters collection.",
    primaryImageUrlColor: "black",
    promoImageUrl:
      "assets/gallery/street-masters/street-masters-shirt-promo.webp",
    whiteImageUrl:
      "assets/gallery/street-masters/street-masters-shirt-white.webp",
    greenImageUrl:
      "assets/gallery/street-masters/street-masters-shirt-green.webp",
    greyImageUrl:
      "assets/gallery/street-masters/street-masters-shirt-grey.webp",
    redImageUrl: "assets/gallery/street-masters/street-masters-shirt-red.webp",
    blackImageUrl:
      "assets/gallery/street-masters/street-masters-shirt-black.webp",
  },
  {
    id: "street-masters-pants",
    garmentType: "pants",
    subcategory: "casual",
    name: "Street Masters",
    price: 80,
    discountPrice: 40,
    colors: ["green", "black", "white", "grey"],
    purpose: "streetwear",
    description:
      "Swaggy streetwear for everyday urban adventures. Made from breathable, lightweight fabric to keep you cool while navigating the city. Features a relaxed fit for all-day comfort and ease of movement. Durable construction to withstand the rigors of urban life. Stylish design inspired by street culture and urban fashion. Available in Green, Black, White, Grey, and Red. Graffiti-resistant coating to maintain a fresh look.",
    byline:
      "Navigate the concrete jungle with style and ease. Part of the Street Masters collection.",
    primaryImageUrlColor: "black",
    promoImageUrl:
      "assets/gallery/street-masters/street-masters-pants-promo.webp",
    whiteImageUrl:
      "assets/gallery/street-masters/street-masters-pants-white.webp",
    greenImageUrl:
      "assets/gallery/street-masters/street-masters-pants-green.webp",
    greyImageUrl:
      "assets/gallery/street-masters/street-masters-pants-grey.webp",
    redImageUrl: "assets/gallery/street-masters/street-masters-pants-red.webp",
    blackImageUrl:
      "assets/gallery/street-masters/street-masters-pants-black.webp",
  },
  {
    id: "lazy-sunday-shoe",
    garmentType: "shoe",
    subcategory: "casual",
    name: "Lazy Sunday",
    price: 100,
    discountPrice: 90,
    colors: ["red", "blue", "green", "black", "white", "grey"],
    purpose: "streetwear",
    description:
      "Relaxed and comfortable footwear for laid-back days. Made from soft, breathable materials to keep your feet cozy. Features a cushioned sole for all-day comfort and support. Stylish design inspired by casual streetwear and bedroom fashion. Available in Red, Blue, Green, Black, White, and Grey. Made of sustainable materials. Perfect for lazy Sundays and everyday wear.",
    byline:
      "Comfort meets style for your laid-back days. No worries, lazy sunday takes care of it. Part of the Lazy Sunday collection.",
    primaryImageUrlColor: "blue",
    promoImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shoe-promo.webp",
    whiteImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shoe-white.webp",
    greenImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shoe-green.webp",
    greyImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shoe-grey.webp",
    redImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shoe-red.webp",
    blackImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shoe-black.webp",
    blueImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shoe-blue.webp",
  },
  {
    id: "lazy-sunday-shirt",
    garmentType: "shirt",
    subcategory: "casual",
    name: "Lazy Sunday",
    price: 60,
    colors: ["red", "blue", "green", "black", "white", "grey"],
    purpose: "streetwear",
    description:
      "Relaxed and comfortable shirt for laid-back days. Made from soft, breathable materials to keep you cozy. Comfortable design inspired by casual bed fashion. Available in Red, Blue, Green, Black, White, and Grey. Made of sustainable materials. Perfect for lazy Sundays and everyday wear.",
    byline:
      "Comfort meets style for your laid-back days. No worries, lazy sunday takes care of it. Part of the Lazy Sunday collection.",
    primaryImageUrlColor: "blue",
    promoImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shirt-promo.webp",
    whiteImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shirt-white.webp",
    greenImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shirt-green.webp",
    greyImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shirt-grey.webp",
    redImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shirt-red.webp",
    blackImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shirt-black.webp",
    blueImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-shirt-blue.webp",
  },
  {
    id: "lazy-sunday-pants",
    garmentType: "pants",
    subcategory: "casual",
    name: "Lazy Sunday",
    price: 70,
    discountPrice: 50,
    colors: ["red", "blue", "green", "black", "white", "grey"],
    purpose: "streetwear",
    description:
      "Relaxed and comfortable slacks for laid-back days. Made from soft, breathable materials to keep you cozy. Comfortable design inspired by casual bed fashion. Available in Red, Blue, Green, Black, White, and Grey. Made of sustainable materials. Perfect for lazy Sundays and everyday wear.",
    byline:
      "Comfort meets style for your laid-back days. No worries, lazy sunday takes care of it. Part of the Lazy Sunday collection.",
    primaryImageUrlColor: "blue",
    promoImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-pants-promo.webp",
    whiteImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-pants-white.webp",
    greenImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-pants-green.webp",
    greyImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-pants-grey.webp",
    redImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-pants-red.webp",
    blackImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-pants-black.webp",
    blueImageUrl: "assets/gallery/lazy-sunday/lazy-sunday-pants-blue.webp",
  },
  {
    id: "expresso-shoe",
    garmentType: "shoe",
    subcategory: "casual",
    name: "Expresso",
    price: 530,

    colors: ["grey", "black", "white"],
    purpose: "classic",
    description:
      "Inspired by timeless design and everyday comfort. Golden era and modern style blended into one. The practical features include premium materials for durability and comfort. Ergonomic fit for all-day wear. Breathable upper to keep feet cool and dry. Sleek design that complements any outfit. Perfect for casual outings or dressing up. A versatile addition to your wardrobe. Runner base and premium leather finish, the best of all worlds.",
    byline:
      "Speed and Style. Fit in anywhere by fitting into the classic Expresso shoe, part of the Expresso collection.",
    primaryImageUrlColor: "black",
    promoImageUrl: "assets/gallery/expresso/expresso-shoe-promo-2.webp",
    whiteImageUrl: "assets/gallery/expresso/expresso-shoe-white.webp",
    greyImageUrl: "assets/gallery/expresso/expresso-shoe-grey.webp",
    blackImageUrl: "assets/gallery/expresso/expresso-shoe-black.webp",
  },
  {
    id: "expresso-shirt",
    garmentType: "shirt",
    subcategory: "casual",
    name: "Expresso",
    price: 260,

    colors: ["grey", "black", "white"],
    purpose: "classic",
    description:
      "Inspired by timeless design and everyday comfort. Golden era and modern style blended into one. The practical features include premium materials for durability and comfort. Ergonomic fit for all-day wear. Premium fabric to keep you cool and dry. Sleek design that complements any outfit. Perfect for casual outings or dressing up. A versatile addition to your wardrobe. Classic button-down style with a modern twist.",
    byline:
      "Speed and Style. Fit in anywhere by fitting into the classic Expresso shirt, part of the Expresso collection.",
    primaryImageUrlColor: "black",
    promoImageUrl: "assets/gallery/expresso/expresso-shirt-promo.webp",
    whiteImageUrl: "assets/gallery/expresso/expresso-shirt-white.webp",
    greyImageUrl: "assets/gallery/expresso/expresso-shirt-grey.webp",
    blackImageUrl: "assets/gallery/expresso/expresso-shirt-black.webp",
  },
  {
    id: "expresso-pants",
    garmentType: "pants",
    subcategory: "casual",
    name: "Expresso",
    price: 300,
    discountPrice: 200,
    colors: ["grey", "black", "white"],
    purpose: "classic",
    description:
      "Inspired by timeless design and everyday comfort. Golden era and modern style blended into one. The practical features include premium materials for durability and comfort. Ergonomic fit for all-day wear. Premium fabric to keep you cool and dry. Sleek design that complements any outfit. Perfect for casual outings or dressing up. A versatile addition to your wardrobe. Classic button-down style with a modern twist.",
    byline:
      "Speed and Style. Fit in anywhere by fitting into the classic Expresso chinos, part of the Expresso collection.",
    primaryImageUrlColor: "black",
    promoImageUrl: "assets/gallery/expresso/expresso-pants-promo.webp",
    whiteImageUrl: "assets/gallery/expresso/expresso-pants-white.webp",
    greyImageUrl: "assets/gallery/expresso/expresso-pants-grey.webp",
    blackImageUrl: "assets/gallery/expresso/expresso-pants-black.webp",
  },
  {
    id: "rodney-mullet-shoe",
    garmentType: "shoe",
    subcategory: "skatewear",
    name: "Rodney Mullet",
    price: 450,
    colors: ["black", "pink", "red", "yellow", "green"],
    purpose: "skateboarding",
    description:
      "Comes in black, pink, red, yellow, and green. Durable sole for skateboarding tricks and everyday wear. Ergonomic fit for all-day comfort while skating. Breathable upper material to keep feet cool during intense sessions. Sleek design inspired by skate culture and freestyle legends. Featuring reinforced toe cap for added protection during tricks. Vibrant color options. Kickflip-tested and ollie-approved.",
    byline:
      "Inspired by the freestlyle legend, get on board with this iconic skate shoe.",
    primaryImageUrlColor: "green",
    promoImageUrl: "assets/gallery/rodney-mullet/rodney-mullet-promo.webp",
    yellowImageUrl: "assets/gallery/rodney-mullet/rodney-mullet-yellow.webp",
    greenImageUrl: "assets/gallery/rodney-mullet/rodney-mullet-green.webp",
    blackImageUrl: "assets/gallery/rodney-mullet/rodney-mullet-black.webp",
    pinkImageUrl: "assets/gallery/rodney-mullet/rodney-mullet-pink.webp",
    redImageUrl: "assets/gallery/rodney-mullet/rodney-mullet-red.webp",
  },
  {
    id: "tawny-hawkmouth-shoe",
    garmentType: "shoe",
    subcategory: "skatewear",
    name: "Tawny Hawkmouth",
    price: 450,

    colors: ["grey", "green", "pink"],
    purpose: "skateboarding",
    description:
      "A shoe designed for aerial tricks and stylish landings. Durable sole for skateboarding tricks and everyday wear. Ergonomic fit for all-day comfort while skating. Breathable upper material to keep feet cool during intense sessions. Sleek design inspired by skate culture and halfpipe legends. Featuring reinforced ankle support for added stability during high-flying maneuvers. Wingtip design elements for a unique look. Oversized tongue for air control.",
    byline:
      "Inspired by the legendary halfpipe pro-skater, classic game, and the legendary bird. Take flight with style. Game the system.",
    primaryImageUrlColor: "green",
    promoImageUrl: "assets/gallery/tawny-hawkmouth/tawny-hawkmouth-promo.webp",
    greyImageUrl: "assets/gallery/tawny-hawkmouth/tawny-hawkmouth-grey.webp",
    greenImageUrl: "assets/gallery/tawny-hawkmouth/tawny-hawkmouth-green.webp",
    pinkImageUrl: "assets/gallery/tawny-hawkmouth/tawny-hawkmouth-pink.webp",
  },

  // {
  //   id: "luxx-shoe",
  //   garmentType: "shoe",
  //   subcategory: "premium",
  //   name: "Luxx",
  //   price: Math.floor(80 + Math.random() * 120),
  //   discountPrice:
  //     Math.random() > 0.5 ? Math.floor(60 + Math.random() * 80) : undefined,
  //   colors: ["black", "white", "grey"],
  //   purpose: "professional",
  //   description: generateLorem(Math.floor(20 + Math.random() * 40)),
  //   byline: generateLorem(10),
  //   imageUrl: "https://www.sourcesplash.com/i/random?q=shoes",
  // },
  // {
  //   id: "luxx-shirt",
  //   garmentType: "shirt",
  //   subcategory: "premium",
  //   name: "Luxx",
  //   price: Math.floor(80 + Math.random() * 120),
  //   discountPrice:
  //     Math.random() > 0.5 ? Math.floor(60 + Math.random() * 80) : undefined,
  //   colors: ["black", "white", "grey"],
  //   purpose: "professional",
  //   description: generateLorem(Math.floor(20 + Math.random() * 40)),
  //   byline: generateLorem(10),
  //   imageUrl: "https://www.sourcesplash.com/i/random?q=shoes",
  // },
  // {
  //   id: "luxx-pants",
  //   garmentType: "pants",
  //   subcategory: "premium",
  //   name: "Luxx",
  //   price: Math.floor(80 + Math.random() * 120),
  //   discountPrice:
  //     Math.random() > 0.5 ? Math.floor(60 + Math.random() * 80) : undefined,
  //   colors: ["black", "white", "grey"],
  //   purpose: "professional",
  //   description: generateLorem(Math.floor(20 + Math.random() * 40)),
  //   byline: generateLorem(10),
  //   imageUrl: "https://www.sourcesplash.com/i/random?q=shoes",
  // },
  // {
  //   id: "glider-shoes",
  //   garmentType: "shoe",
  //   subcategory: "premium",
  //   name: "Glider",
  //   price: Math.floor(80 + Math.random() * 120),
  //   discountPrice:
  //     Math.random() > 0.5 ? Math.floor(60 + Math.random() * 80) : undefined,
  //   colors: ["black", "white", "grey"],
  //   purpose: "professional",
  //   description: generateLorem(Math.floor(20 + Math.random() * 40)),
  //   byline: generateLorem(10),
  //   imageUrl: "https://www.sourcesplash.com/i/random?q=shoes",
  // },
];
