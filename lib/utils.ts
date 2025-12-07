import clsx from "clsx";
import { colors, tCategory, tProduct } from "./types";

export const cn = (...inputs: Parameters<typeof clsx>) => clsx(...inputs);

export const chooseProductColorImageUrl = (
  product: tProduct,
  color: colors
): string => {
  const colorMapper: { [key in colors]: string | undefined } = {
    red: product.redImageUrl,
    blue: product.blueImageUrl,
    green: product.greenImageUrl,
    black: product.blackImageUrl,
    white: product.whiteImageUrl,
    grey: product.greyImageUrl,
    pink: product.pinkImageUrl,
    yellow: product.yellowImageUrl,
  };
  const url = colorMapper[color] || product.promoImageUrl || "";
  return url;
};

export const generateTinyUrl = (url: string): string => {
  if (!url) return "";
  const Imagetiny = url?.split(".")[0] + "_tiny.png" || "";
  return Imagetiny;
};

export const handleMenuClick = (
  item: string,
  searchParams: URLSearchParams,
  router: any
) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set("category", item);
  router.push(`?${params.toString()}`, { scroll: false });
};
