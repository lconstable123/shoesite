import { productsById } from "./product-data";
import { billItem, tCartItem, tProduct } from "./types";

export const generateBillfromCart = (cartItems: tCartItem[]): billItem[] => {
  const bill: billItem[] = cartItems
    .map((cartItem) => {
      const item = productsById[cartItem.id] as tProduct;
      if (!cartItem.id || !item) return null;
      return {
        id: item.id,
        name: item.name,
        price: item.discountPrice ?? item.price,
        quantity: cartItem.quantity,
        subtotal: (item.discountPrice ?? item.price) * cartItem.quantity,
      };
    })
    .filter((item) => item !== null);

  return bill;
};

export const calculateTotalFromBill = (
  bill: billItem[],
  billField: keyof billItem
): number => {
  //   if (typeof bill[0][billField] === "number") {
  const amt = bill.reduce((sum, item) => sum + (item ? item.subtotal : 0), 0);
  return amt;
  //   }
  //   return 0;
};

export const caclutateTotalItemsFromBill = (bill: billItem[]): number => {
  const amt = bill.reduce((sum, item) => sum + (item ? item.quantity : 0), 0);
  return amt;
};

export const calculateDeliveryCost = (numItems: number): number => {
  if (numItems === 0) return 0;
  if (numItems < 2) return 20;
  if (numItems >= 2) return 100;
  return 0;
};
