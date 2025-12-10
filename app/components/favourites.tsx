"use client";
import { useCheckoutContext } from "@/lib/contexts/use-checkout-context";
import { BagItemList, BagSection, EmptyBag } from "./checkout-page";
import { chooseProductColorImageUrl, generateTinyUrl2 } from "@/lib/utils";
import { colors, tProduct, tProductId } from "@/lib/types";
import { productsById } from "@/lib/product-data";
import { useState } from "react";
import { ShoesiteImage } from "./ui/Shoesite-Image";
import { ColorPicker } from "./ui/color-picker";
import { CancelIcon, HeartIcon } from "./Icons";
import { HeartButton } from "./ui/buttons";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export const Favourites = () => {
  const { likedItems, toggleLikeItem } = useCheckoutContext();

  return (
    <div className=" my-10 no-select  ">
      <div className="flex  items-center gap-2 ">
        <HeartIcon size={30} filled className="" />
        <h3 className="text-white tracking-wider  font-bold uppercase">
          Favourites
        </h3>
      </div>
      <section className="w-full grid  h-full  grid-cols-1 lg:grid-cols-2  justify-center my-3 gap-4   ">
        {likedItems.length === 0 ? (
          <div className="w-full  h-20 flex flex-col justify-center items-center ">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.25 }}
              className=" text-md!"
            >
              Your favourites list is empty.
            </motion.p>
          </div>
        ) : (
          likedItems.map((itemId, index) => {
            const product = productsById[itemId as tProductId];
            if (!product) return null;
            return (
              <FavouriteItem key={index} product={product} index={index} />
            );
          })
          // <BagItemList cartItems={likedItems} />
        )}
      </section>
    </div>
  );
};

const FavouriteItem = ({
  product,
  index,
}: {
  product: tProduct;
  index: number;
}) => {
  const [colour, setColour] = useState<colors>(product.primaryImageUrlColor);

  const checkoutImage: string =
    "/" + (chooseProductColorImageUrl(product, colour) || "");
  const { toggleLikeItem } = useCheckoutContext();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return (
    <ItemContainer id={product.id} index={index}>
      <CancelIcon
        handle={() => {
          toggleLikeItem(product.id);
        }}
        white
        size={20}
        className="absolute top-2 z-300 right-2 size-10 stroke-gray-mid cursor-pointer hover:stroke-white transition-all duration-200"
      />

      <a
        href={`/product/${product.id}${
          category ? `?category=${category}` : ""
        }`}
        className="absolute inset-0  z-100"
      />

      <div className="w-60 h-60 relative rounded-md overflow-hidden ">
        <div className="absolute top-2 left-2 z-300">
          <ColorPicker
            colors={product.colors}
            selectedColor={colour}
            handleColorChange={setColour}
          />
        </div>
        <ShoesiteImage url={checkoutImage} name={product.name} />;
      </div>
      <div className="flex flex-col gap-2 w-65 justify-center ml-4">
        <h3 className="font-bold">{product.name}</h3>
        <hr />
        {product.discountPrice ? (
          <div className="flex gap-[11px]">
            <h4 className="text-discount">${product.price}</h4>
            <h4 className="">${product.discountPrice}</h4>
          </div>
        ) : (
          <h4 className="">${product.price}</h4>
        )}
        <p className="text-white/98">{product.description}</p>
      </div>
    </ItemContainer>
  );
};

const ItemContainer = ({
  id,
  children,
  index,
}: {
  id: string;
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      className="w-full sm:w-120 h-full flex  flex-col gap-5 sm:gap-0 items-center sm:items-start sm:flex-row border relative border-gray-mid overflow-hidden py-7 px-4 sm:px-3 sm:py-3 rounded-lg"
    >
      {children}
    </motion.div>
  );
};
