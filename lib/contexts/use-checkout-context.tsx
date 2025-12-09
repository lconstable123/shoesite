"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  colors,
  tCartItem,
  tGarmentSizing,
  tProductId,
  tShoeSizing,
} from "../types";
import toast from "react-hot-toast";

type tCheckoutContext = {
  cartItems: tCartItem[];
  addToCart: (item: tCartItem) => void;
  removeFromCart: (itemId: tProductId) => void;
  likedItems: tProductId[];
  toggleLikeItem: (itemId: tProductId) => void;
  language?: string;
  setLanguage?: (lang: string) => void;
  setQuantity?: (itemId: tProductId, quantity: number) => void;
};
export const checkoutcontext = createContext<tCheckoutContext | null>(null);

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<tCartItem[]>([]);
  const [likedItems, setLikedItems] = useState<tProductId[]>([]);

  // On mount: load from localStorage
  useEffect(() => {
    const storedCart =
      typeof window !== "undefined" ? localStorage.getItem("cartItems") : [];
    const storedLikes =
      typeof window !== "undefined" ? localStorage.getItem("likedItems") : [];
    if (storedCart && storedLikes) {
      setCartItems(storedCart ? JSON.parse(storedCart as string) : []);
      setLikedItems(storedLikes ? JSON.parse(storedLikes as string) : []);
    }
  }, []);

  const [language, setLanguage] = useState<string>("en");

  const toggleLikeItem = (itemId: tProductId) => {
    if (!likedItems?.includes(itemId)) {
      //   toast.success("added to favourites");
      setLikedItems([...likedItems, itemId]);
    } else {
      //   toast.success("removed from favourites");
      //   toast.success(likedItems);
      setLikedItems(likedItems.filter((id) => id !== itemId));
    }
  };
  const addToCart = (item: tCartItem) => {
    if (cartItems?.find((cartItem) => cartItem.id === item.id)) {
      toast.success(`item is already in the cart`);
      return;
    }
    // toast.success(`item added to cart`);
    setCartItems([...cartItems, item]);
  };
  const removeFromCart = (itemId: tProductId) => {
    // toast.success(`${itemId} removing from cart`);
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  const setQuantity = (itemId: tProductId, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    // toast.success(`liked items updated: ${likedItems.length}`);
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  return (
    <checkoutcontext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        likedItems,
        toggleLikeItem,
        language,
        setLanguage,
        setQuantity,
      }}
    >
      {children}
    </checkoutcontext.Provider>
  );
};

export const useCheckoutContext = () => {
  const context = useContext(checkoutcontext);
  if (!context) {
    throw new Error(
      "useCheckoutContext must be used within a CheckoutProvider"
    );
  }
  return context;
};
