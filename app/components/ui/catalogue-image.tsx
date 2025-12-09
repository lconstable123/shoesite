import { colors, tProduct } from "@/lib/types";
import { chooseProductColorImageUrl, generateTinyUrl2 } from "@/lib/utils";
import Image from "next/image";

export const CatalogueImage = ({
  item,
  color,
}: {
  item: tProduct;
  color?: colors;
}) => {
  const url =
    "/" + chooseProductColorImageUrl(item, color || item.primaryImageUrlColor);
  const Tiny = generateTinyUrl2(url);

  return (
    <Image
      style={{ objectFit: "cover" }}
      loading="eager"
      src={url}
      alt={item?.id || "Product Image"}
      fill
      className="object-cover  "
      priority
      placeholder="blur"
      blurDataURL={Tiny}
    />
  );
};
