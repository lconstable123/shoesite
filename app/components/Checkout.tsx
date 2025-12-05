"use client";
import { useCheckout } from "@/lib/hooks/use-checkout";
import { colors, tProduct, tProductId } from "@/lib/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ColorPicker } from "./ui/color-picker";
import { QuantityPicker } from "./ui/quantity-picker";
import { SizePicker } from "./ui/size-picker";
import { BagButton, HeartButton } from "./ui/buttons";
import "@/app/components/styling/checkout.css";
export function Checkout({ product }: { product: tProduct | tProduct[] }) {
  return (
    <section className="w-full h-full flex flex-col   ">
      {Array.isArray(product) ? (
        product.map((prod, index) => (
          <ProductContainer key={index} product={prod} rangeId={index} />
        ))
      ) : (
        <ProductContainer product={product} rangeId={0} />
      )}
    </section>
  );
}

//-------------------------------

const ProductContainer = ({
  product,
  rangeId = 0,
}: {
  product: tProduct;
  rangeId?: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    checkoutImage,
    checkoutImagetiny,
    color,
    quantity,
    handleColourClick,
    handleQuantityChange,
  } = useCheckout(product, rangeId, router, searchParams);

  return (
    <div className="checkout__product__container__layout no-select relative  ">
      <div className="checkout__product__image     ">
        <Image
          src={checkoutImage}
          alt={product.name}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={checkoutImagetiny}
        />
      </div>
      <ProductDetails
        product={product}
        quantity={quantity}
        color={color}
        handleQuantityChange={handleQuantityChange}
        handleColourClick={handleColourClick}
      />
    </div>
  );
};

const ProductDetails = ({
  product,
  quantity,
  color,
  handleQuantityChange,
  handleColourClick,
}: {
  product: tProduct;
  quantity: number;
  color: colors;
  handleQuantityChange: (quantity: number) => void;
  handleColourClick: (color: colors) => void;
}) => {
  return (
    <div className="flex flex-col  gap-4 py-10  w-auto px-10  ">
      <h2 className=" border-b border-white">{product.name}</h2>
      {product.discountPrice ? (
        <div className="flex gap-[11px]">
          <h4 className="">${product.discountPrice}</h4>
          <h4 className="text-discount">${product.price}</h4>
        </div>
      ) : (
        <h4 className="">${product.price}</h4>
      )}

      <p className="text-on-black">{product.description}</p>
      {product.garmentType !== "accessory" && (
        <SizePicker type={product.garmentType} />
      )}
      <div className="flex gap-[22px]">
        <QuantityPicker
          quantity={quantity}
          setQuantity={handleQuantityChange}
        />
        <ColorPicker
          colors={product.colors}
          selectedColor={color}
          handleColorChange={handleColourClick}
        />
      </div>
      <div className="flex gap-2   ">
        <BagButton size="lg" text="Add To Bag" />
        <HeartButton liked={false} />
      </div>
    </div>
  );
};

//-------------------------
