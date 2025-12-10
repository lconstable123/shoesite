"use client";
import {
  billItem,
  tCartItem,
  tCollectionsId,
  tProduct,
  tProductId,
} from "@/lib/types";
import { BagButton } from "./ui/buttons";
import { productsById } from "@/lib/product-data";

import Carousel from "./Carousel";
import { QuantityPicker } from "./ui/quantity-picker";

import { CatalogueImage } from "./ui/catalogue-image";
import { CancelIcon } from "./Icons";
import { useCheckoutContext } from "@/lib/contexts/use-checkout-context";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  calculateDeliveryCost,
  calculateTotalFromBill,
  generateBillfromCart,
} from "@/lib/register-functions";

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
    <BagAndRegisterContainer>
      <BagSection>
        {cartItems.length === 0 ? (
          <EmptyBag />
        ) : (
          <BagItemList cartItems={cartItems} />
        )}
      </BagSection>

      <div className="w-full flex flex-col items-center justify-center  ">
        <Register
          cartItems={cartItems}
          titleText="Order Summary"
          buttonText="Payment"
          clickthrough="/checkout"
        />
        {/* <div className="w-full flex justify-end mt-5">
          <BagButton size="lg" text="Pay" />
        </div> */}
      </div>
    </BagAndRegisterContainer>
  );
};

const BagAndRegisterContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className=" flex flex-col items-center sm:flex-row sm:items-start gap-10 sm:gap-5 lg:gap-20 w-auto   ">
      {children}
    </div>
  );
};

export const BagSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex   flex-col items-center sm:items-start justify-center sm:justify-start gap-5  min-w-auto lg:min-w-96 ">
      <h2 className="text-2xl font-bold! uppercase!">Checkout</h2>
      {children}
    </div>
  );
};

export const BagItemList = ({ cartItems }: { cartItems: tCartItem[] }) => {
  const amount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <section className=" flex flex-col items-start gap-2 w-full sm:w-80 lg:w-100  h-full">
      <p>{amount} products</p>
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

export const EmptyBag = ({
  text = "Your bag is empty.",
}: {
  text?: string;
}) => {
  return (
    <div className="w-80 lg:w-100 h-20 flex justify-center items-center ">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.25 }}
        className=" text-md!"
      >
        {text}
      </motion.p>
    </div>
  );
};

export const BagItem = ({
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
      className="bg-black no-select flex tracking-wide flex-row justify-between text-white! border border-gray-mid rounded-lg overflow-hidden w-full h-17  "
    >
      <div className="bg-red-500 w-30 h-full relative">
        <CatalogueImage item={item} color={cartItem.color} />
      </div>
      <div className="w-full h-full flex flex-col justify-between px-2 py-1">
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
      <div className="flex flex-col justify-between items-end w-20 py-1 pr-1 h-full">
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

export const Register = ({
  cartItems,
  showAmt = false,
  titleText = "Order Summary",
  buttonText = "Checkout",
  clickthrough = "/",
}: {
  cartItems: tCartItem[];
  showAmt?: boolean;
  titleText?: string;
  buttonText?: string;
  clickthrough?: string;
}) => {
  const bill = generateBillfromCart(cartItems);
  const totalPrice = calculateTotalFromBill(bill, "subtotal");
  const amt = calculateTotalFromBill(bill, "quantity");
  const deliveryCost = calculateDeliveryCost(amt);

  return (
    <section className=" flex flex-col gap-2 w-full max-w-60 sm:w-60 ">
      <h3 className="text-white text-2xl mb-3 font-bold">{titleText}</h3>
      <div className="flex flex-col gap-1 w-full">
        {showAmt && (
          <p className="mb-2">
            {amt} Item{amt !== 1 ? "s" : ""}
          </p>
        )}
        {bill.map((billItem) => {
          const item = productsById[billItem.id] as tProduct;
          if (!billItem.id || !item) return;
          return (
            <RegisterItem
              key={billItem.id}
              label={billItem.name}
              qty={billItem.quantity}
              amount={billItem.subtotal}
            />
          );
        })}
        <div className="mt-2">
          <RegisterItem label="Delivery cost " amount={deliveryCost} />
        </div>
        <hr />
        <RegisterItem label="Total" amount={totalPrice} total={true} />
      </div>
      <a href={clickthrough} className="w-full flex justify-end mt-5">
        <BagButton size="lg" text={buttonText} />
      </a>
    </section>
  );
};

const RegisterItem = ({
  label,
  amount,
  total,
  qty,
}: {
  label: string;
  amount: number;
  total?: boolean;
  qty?: number;
}) => {
  return (
    <div className="flex flex-row justify-between">
      <p className={total ? "font-bold! uppercase!" : ""}>
        {label}
        {qty && qty > 1 ? ` x ${qty}` : ""}
      </p>
      <p className="font-bold!">${amount}</p>
    </div>
  );
};
