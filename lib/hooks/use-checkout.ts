"use client";
import {
  useSearchParams,
  useRouter,
  ReadonlyURLSearchParams,
} from "next/navigation";
import {
  colors,
  tGarmentSizing,
  tProduct,
  tProductId,
  tShoeSizing,
} from "@/lib/types";
import { chooseProductColorImageUrl, generateTinyUrl } from "@/lib/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export const useCheckout = (
  product: tProduct,
  rangeId: number,
  router: AppRouterInstance,
  searchParams: ReadonlyURLSearchParams
) => {
  const colorParam = "cl" + rangeId;
  const sizeParam = "sz" + rangeId;
  const quantityParam = "qt" + rangeId;
  const color =
    (searchParams.get(colorParam) as colors) || product.primaryImageUrlColor;
  const size = searchParams.get(sizeParam) as tGarmentSizing | tShoeSizing;
  const quantity = parseInt(searchParams.get(quantityParam) || "1", 10);
  const checkoutImage: string =
    "/" + (chooseProductColorImageUrl(product, color) || "");

  // const checkoutImagetiny = generateTinyUrl(checkoutImage) || "";
  const handleColourClick = (item: colors) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(colorParam, item);
    router.push(`?${params.toString()}`, { scroll: false });
  };
  const handleQuantityChange = (qty: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(quantityParam, qty.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return {
    checkoutImage,
    // checkoutImagetiny,
    color,
    quantity,
    handleColourClick,
    handleQuantityChange,
  };
};
