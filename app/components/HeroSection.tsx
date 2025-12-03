import { productData } from "@/lib/product-data";
import React, { useState } from "react";
import { ColorPicker } from "./ui/color-picker";
import { chooseProductColorImageUrl } from "@/lib/utils";
import { colors } from "@/lib/types";

export default function HeroSection() {
  // This would be the actual background image URL from the Figma design
  const heroImageUrl = "/api/placeholder/1438/728";

  return (
    <section
      className=" h-full ml-0 mt-0 row-1 w-full bg-cover bg-center flex gap-10 flex-wrap flex-row "
      // style={{
      //   backgroundImage: `url(${"/assets/placeholders/shoebg.png"})`,
      // }}
    >
      {productData.map((product) => {
        const [pickedColor, setPickedColor] = useState<colors>(
          product.primaryImageUrlColor
        );

        const checkoutImage: string =
          chooseProductColorImageUrl(product, pickedColor) || "";
        const checkoutImagetiny =
          checkoutImage?.split(".")[0] + "_tiny.png" || "";
        const promoImage = product.promoImageUrl || "";
        const promoImagetiny =
          product.promoImageUrl.split(".")[0] + "_tiny.png" || "";
        return (
          <div
            key={product.id}
            className="text-[8pt] h-min mt-10   flex flex-col gap-1"
          >
            <div className="flex  gap-1">
              <p className="font-bold!">
                {product.name} | {product.garmentType}
              </p>

              <ColorPicker
                colors={product.colors}
                handleColorChange={setPickedColor}
              />
              <p>{product.subcategory}</p>
            </div>
            <div className="flex gap-2">
              <p>${product.price}</p>
              <p>${product.discountPrice}</p>
            </div>
            <p className="text-[5pt]!">
              {chooseProductColorImageUrl(product, pickedColor)}
            </p>
            <div className="flex gap-2">
              {checkoutImage ? (
                <img
                  src={checkoutImage}
                  alt={product.name}
                  className="object-cover w-70 h-70"
                />
              ) : (
                <Placeholder />
              )}
              {checkoutImagetiny ? (
                <img
                  src={checkoutImagetiny}
                  alt={product.name}
                  className="object-cover w-70 h-70"
                />
              ) : (
                <Placeholder />
              )}
              {promoImage ? (
                <img
                  src={promoImage}
                  alt={product.name}
                  className="object-cover w-70 h-70"
                />
              ) : (
                <Placeholder />
              )}
              {promoImagetiny ? (
                <img
                  src={promoImagetiny}
                  alt={product.name}
                  className="object-cover w-70 h-70"
                />
              ) : (
                <Placeholder />
              )}
            </div>
            <p>{product.byline}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
    </section>
  );
}

const Placeholder = () => {
  return (
    <div className="w-70 h-70 bg-gray-800 flex items-center justify-center">
      invalid image
    </div>
  );
};
