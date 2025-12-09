"use client";
import { tCartItem, tProduct, tProductId } from "@/lib/types";
import { BagButton } from "./ui/buttons";
import { productsById } from "@/lib/product-data";

import Carousel from "./Carousel";
import { QuantityPicker } from "./ui/quantity-picker";

import { CatalogueImage } from "./ui/catalogue-image";
import { CancelIcon } from "./Icons";
import { useCheckoutContext } from "@/lib/contexts/use-checkout-context";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export const Bag = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center   ">
      <div className="transition-all w-full flex justify-center  h-auto min-h-150 px-10 py-20  bg-fiber  ">
        <BagContainer />
      </div>
      <div className="w-full flex justify-center h-auto px-10 py-10  ">
        <Carousel
          breakpoints={[800, 1250, 1600]}
          breakpointDisplayAmounts={[2, 3, 5, 7]}
          textAbove="Shop Popular Picks"
          mobile_displayAmount={8}
        />
      </div>
    </div>
  );
};

const BagContainer = () => {
  //   const ItemIds: tProductId[] = ["expresso-shoe", "glider-shoe", "luxx-shoe"];
  const { cartItems, likedItems } = useCheckoutContext();

  return (
    <div className=" flex flex-col sm:flex-row gap-10 sm:gap-5 lg:gap-20 w-auto    ">
      <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start gap-5  min-w-auto lg:min-w-96 ">
        <h2 className="text-2xl font-bold! uppercase!">Checkout</h2>
        {cartItems.length === 0 ? (
          <div className="w-80 lg:w-100 h-20 flex justify-center items-center ">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.25 }}
              className=" text-md!"
            >
              Your bag is empty.
            </motion.p>
          </div>
        ) : (
          <BagItemList cartItems={cartItems} />
          //   <></>
        )}
      </div>

      <div>
        <Register cartItems={cartItems} />
        <div className="w-full flex justify-end mt-5">
          <BagButton size="lg" text="Pay" />
        </div>
      </div>
    </div>
  );
};

const BagItemList = ({ cartItems }: { cartItems: tCartItem[] }) => {
  return (
    <section className=" flex flex-col items-center gap-2 w-full sm:w-80 lg:w-100  h-full">
      <p>{cartItems.length} items</p>
      {cartItems.map((cartItem, index) => {
        const item = productsById[cartItem.id] as tProduct;
        if (!item || !item.id || !item) return;
        return (
          <BagItem
            key={item.id}
            index={index}
            cartItem={cartItem}
            item={item}
          />
        );
      })}
    </section>
  );
};

const BagItem = ({
  index,
  cartItem,
  item,
}: {
  index: number;
  cartItem: tCartItem;
  item: tProduct;
}) => {
  const { removeFromCart, setQuantity } = useCheckoutContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-black no-select flex tracking-wide flex-row justify-between text-white! border rounded-lg overflow-hidden w-full h-17  "
    >
      <div className="bg-red-500 w-30 h-full relative">
        <CatalogueImage item={item} color={cartItem.color} />
      </div>
      <div className="w-full h-full flex flex-col justify-between  px-2 py-1">
        <div className="flex flex-row justify-between gap-2 ">
          <p className="font-bold!">{item.name}</p>
          <div className="flex flex-row items-end gap-2">
            {item.discountPrice && (
              <p className="font-bold!  text-red strikethrough">
                ${item.discountPrice}
              </p>
            )}
            <p className="ml-auto font-bold! ">${item.price}</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-2">
          <p className="capitalize">Colour: {cartItem.color}</p>
          <p className="capitalize">Size: {cartItem.size} </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end   w-20 py-1 pr-1 h-full">
        <CancelIcon
          size={20}
          white={true}
          className=""
          handle={() => {
            removeFromCart(item.id);
          }}
        />
        <QuantityPicker
          quantity={cartItem.quantity}
          setQuantity={(quantity) => {
            if (setQuantity) setQuantity(item.id, quantity);
          }}
        />
      </div>
    </motion.div>
  );
};

export const Register = ({ cartItems }: { cartItems: tCartItem[] }) => {
  const amt = cartItems.length;

  const calculateDeliveryCost = (numItems: number): number => {
    if (numItems === 0) return 0;
    if (numItems < 2) return 20;
    if (numItems >= 2) return 100;
    return 0;
  };
  const deliveryCost = calculateDeliveryCost(amt);

  const total =
    cartItems
      .map((cartItem) => {
        const item = productsById[cartItem.id] as tProduct;
        if (!cartItem.id || !item) return 0;
        return item.price;
      })
      .reduce((a, b) => a + b, 0) + deliveryCost;
  return (
    <section className="flex flex-col items-end gap-2 w-auto sm:w-60">
      <h3 className="text-white text-2xl mb-4 font-bold">Order Summary</h3>
      <div className="flex flex-col gap-1 w-full">
        <p className="mb-2">
          {cartItems.length} Item{cartItems.length !== 1 ? "s" : ""}
        </p>
        {cartItems.map((cartItem) => {
          const item = productsById[cartItem.id] as tProduct;
          if (!cartItem.id || !item) return;
          return (
            <RegisterItem
              key={cartItem.id}
              label={item.name}
              amount={item.price}
            />
          );
        })}
        <div className="mt-2">
          <RegisterItem label="Delivery cost " amount={deliveryCost} />
        </div>
        <hr />
        <RegisterItem label="Total" amount={total} total={true} />
      </div>
    </section>
  );
};

const RegisterItem = ({
  label,
  amount,
  total,
}: {
  label: string;
  amount: number;
  total?: boolean;
}) => {
  return (
    <div className="flex flex-row justify-between">
      <p className={total ? "font-bold! uppercase!" : ""}>{label}</p>
      <p className="font-bold!">${amount}</p>
    </div>
  );
};
