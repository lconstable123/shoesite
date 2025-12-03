// "use client";
// import Image from "next/image";
// import { BackIcon } from "./Icons";
// import { tProduct } from "@/lib/types";
// import { QuantityPicker } from "./ui/quantity-picker";
// import { ColorPicker } from "./ui/color-picker";
// import { SizePicker } from "./ui/size-picker";
// import { BagButton, HeartButton } from "./ui/buttons";
// import { useScreenSizeShared } from "@/lib/useScreenSize";
// import Carousel from "./Carousel";
// import { dummyProduct } from "@/lib/data";

// export default function ItemCheckout({ id }: { id: string }) {
//   return (
//     <>
//       <ShoeCheckout product={dummyProduct} />
//       <ProductDetails id={id} />
//     </>
//   );
// }

// function ItemDisplay({ id }: { id: string }) {
//   return (
//     <figure className="relative flex flex-col items-center justify-center bg-amber-200">
//       <Image
//         src="/assets/placeholders/img/blueshoe.png"
//         alt="item image"
//         fill
//         className="object-cover "
//         priority
//         placeholder="blur"
//         blurDataURL="tiny.png"
//       />

//       <a
//         href="/"
//         className=" flex justify-center items-center absolute top-[14px] right-3 w-[46px] h-[40px] border-5 rounded-lg border-black "
//       >
//         <BackIcon className="cursor-pointer " size={30} />
//       </a>
//       <figcaption className="h-[173px] flex flex-col text-center gap-[19px] justify-center px-[135px] items-center w-full bg-white text-darker">
//         <h3 className="uppercase text-2xl font-bold">Product ID: {id}</h3>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
//           lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
//           malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Vivamus lacinia odio vitae vestibulum vestibulum.
//         </p>
//       </figcaption>
//     </figure>
//   );
// }

// function ShoeCheckout({ product }: { product: tProduct }) {
//   return (
//     <section className=" max-w-[650px] border no-select ">
//       <div className="flex flex-col gap-4 px-[25px] sm:px-[63px] py-[31px]">
//         <h3 className="header-light">{product.category}</h3>
//         <h2>{product.name}</h2>
//         {product.discountPrice ? (
//           <div className="flex gap-[11px]">
//             <h4 className="">${product.discountPrice}</h4>
//             <h4 className="text-discount">${product.price}</h4>
//           </div>
//         ) : (
//           <h4 className="">${product.price}</h4>
//         )}
//         {/* <Image
//     src={product.image}
//     alt={product.name}
//     width={500}
//     height={500}
//     className="object-cover"
//   /> */}
//         <p className="text-on-black">{product.description}</p>
//         <div className="flex gap-[22px]">
//           <QuantityPicker />
//           <ColorPicker colors={product.colors} />
//         </div>
//         <SizePicker type={product.sizing} />
//         <div className="flex gap-2 ">
//           <BagButton size="lg" text="Add To Bag" />
//           <HeartButton liked={false} />
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProductDetails({ id }: { id: string }) {
//   const breakpoints = [1300, 1400, 1600];
//   const { isMobile, widthCategory: width } = useScreenSizeShared(
//     breakpoints[0],
//     breakpoints[1],
//     breakpoints[2]
//   );
//   return (
//     <section className="flex-1 border-3 flex justify-start items-center flex-col ">
//       <ItemDisplay id={id} />
//       {/* <div className="flex-col items-center justify-center py-10 w-full "> */}
//       {!isMobile && (
//         <div className="px-10 w-full flex flex-col justify-center items-center">
//           <Carousel
//             isMobile={isMobile}
//             width={width}
//             textAbove="Shop Similar"
//             breakpoints={breakpoints}
//             breakpointDisplayAmounts={[2, 3, 3, 3]}
//             mobile_displayAmount={3}
//             products={[]}
//           />
//           <Carousel
//             isMobile={isMobile}
//             width={width}
//             breakpoints={breakpoints}
//             breakpointDisplayAmounts={[2, 3, 3, 3]}
//             textAbove="Complete the look"
//             mobile_displayAmount={3}
//             products={[]}
//           />
//         </div>
//       )}
//       {/* </div> */}
//     </section>
//   );
// }
