"use client";
import { useEffect, useRef, useState } from "react";
import { CancelIcon, ChevronDown } from "./Icons";
import toast from "react-hot-toast";
import { cn, generateTinyUrl2 } from "@/lib/utils";
import "./styling/pulldown.css";
import Image from "next/image";
import { useClickOutside } from "@/lib/hooks/use-click-outside";
import { useScrollListener } from "@/lib/hooks/use-scroll-listener";
export function Pulldown() {
  const [pulldownOpen, setPulldownOpen] = useState(false);
  const elmRef = useRef<HTMLDivElement>(null);
  const [canPulldownOpen, setCanPulldownOpen] = useState(true);

  function handleScroll() {
    // if (pulldownOpen === true) {
    //   toast.success("scroll detected");
    setPulldownOpen(false);
    // }
  }

  useClickOutside(elmRef, () => {
    if (canPulldownOpen) {
      setCanPulldownOpen(false);
      setPulldownOpen(false);
    }
  });

  useScrollListener({ handler: handleScroll });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanPulldownOpen(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [pulldownOpen]);

  return (
    <div ref={elmRef} className="w-full h-auto  ">
      <PullDownBar setPulldownOpen={setPulldownOpen} />
      <div
        ref={elmRef}
        onClick={() => setPulldownOpen(!pulldownOpen)}
        className={cn(
          "bg-gradient-to-b from-gray-300 to-gray-500 transition-top pulldown__container   duration-600 absolute z-300 no-select grid  grid-cols-3 gap-0 right-0 left-0 w-full h-auto border-b border-neutral-800 bg-fiber-w ",
          !pulldownOpen ? "-top-100" : "top-0"
        )}
      >
        <div className="absolute top-0 w-full h-full  bg-gradient-to-t from-gray-300/0 via-gray-500/0 to-gray-900 opacity-20 " />
        <PullDownItem
          title="Expedited Shipping"
          blurb="We have options to get your gear to you, when and where you need it."
          url="/assets/gallery/promo/shipping_promo.webp"
        />
        <PullDownItem
          title="Returns & Exchanges"
          blurb="If you're not totally happy with your purchase, you can ship it back at no extra cost and we will offer a full refund."
          url="/assets/gallery/promo/promo_returns.webp"
        />
        <PullDownItem
          title="Lifetime Warranty"
          blurb="All our products come with a lifetime warranty.  If you find a defect we will replace it free of charge."
          url="/assets/gallery/promo/office_promo.webp"
        />
        {/* <div className="absolute  right-2 top-10 "
          <CancelIcon />
        </div> */}
      </div>
    </div>
  );
}

const PullDownBar = ({
  setPulldownOpen,
}: {
  setPulldownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => {
        setPulldownOpen((prev) => !prev);
      }}
      className="relative w-full h-8 justify-center bg-gray-darker flex items-center  px-4 z-1000 "
    >
      <div className="w-full no-select flex gap-[18px] justify-center items-center z-1000">
        <ChevronDown />
        <span className=" font-medium uppercase text-center text-sm ">
          Shipping & Free Returns
        </span>
        <ChevronDown />
      </div>
    </div>
  );
};

const PullDownItem = ({
  title,
  blurb,
  url,
}: {
  title: string;
  blurb: string;
  url: string;
}) => {
  const Tiny = generateTinyUrl2(url);
  return (
    <div className="w-full flex flex-col items-center gap-2   text-center text-black font-bold">
      <div className="border border-gray-light/50 w-30 h-30 relative rounded-full overflow-hidden  ">
        <Image
          src={url}
          alt={title}
          fill
          className="object-cover no-select"
          placeholder="blur"
          blurDataURL={Tiny}
        />
      </div>
      <h3 className="flex-wrap! text-wrap! ">{title}</h3>
      <p> {blurb}</p>
    </div>
  );
};
