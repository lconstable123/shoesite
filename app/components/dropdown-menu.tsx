import { ChevronLeft, ChevronRight, FlagIcon } from "./Icons";
import { menuData } from "../../lib/data";
import Image from "next/image";
import {
  productNamesFromId,
  tCategory,
  tProductId,
  tSubcategory,
} from "@/lib/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { MenuCollection } from "@/lib/curation-data";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { generateTinyUrl } from "@/lib/utils";
import Link from "next/link";

export function DropdownMenu({
  selectedCategory,
  isOpen = true,
}: {
  selectedCategory: tCategory;
  isOpen?: boolean;
}) {
  const selectedCategoryData = MenuCollection[selectedCategory];

  if (!selectedCategoryData.splashImage) {
    toast.error("No splash image for category");
  }
  const [bannerImage, setBannerImage] = useState<string>(
    selectedCategoryData.splashImage
  );

  useEffect(() => {
    const newImage = selectedCategoryData.splashImage || "";
    if (newImage === bannerImage) return;
    toast.success("Banner image updated");
    setBannerImage(newImage);
  }, [selectedCategoryData.splashImage, bannerImage]);

  // useEffect(() => {
  //   toast.success("rendered dropdown menu");
  // }, []);
  const selectedSubcategories = selectedCategoryData.menuItems;
  return (
    <>
      <section className="dropdown__container">
        <DropdownImage
          image={bannerImage || ""}
          thumb={generateTinyUrl(bannerImage) || ""}
        />
        <nav className="dropdown__sections ">
          {Object.entries(selectedSubcategories).map((subcategory) => (
            <DropdownColumn
              key={subcategory[0]}
              title={subcategory[0] as tSubcategory}
              items={subcategory[1]}
            />
          ))}
        </nav>
        <DropdownSidemenu />
      </section>
      {isOpen && (
        <nav className="dropdown__mobile__container">
          <DropdownRow title="Sports" />
          <DropdownRow title="Lifestyle" />
          <DropdownRow title="News" />
        </nav>
      )}
    </>
  );
}

const DropdownColumn = ({
  title,
  items,
}: {
  title: tSubcategory;
  items: tProductId[];
}) => {
  const searchParams = useSearchParams();
  const query = searchParams.toString(); // e.g. "foo=bar&page=2"
  const category = searchParams.get("category");

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div key={title} className="list__container  text-darker">
      <h3>{title}</h3>
      <div className="list__items__container">
        {items.map((item, index) => (
          <Link
            key={index}
            className="list__item cursor-pointer"
            href={`/product/${item}${category ? `?category=${category}` : ""}`}
          >
            <p className="no-select text-black">{productNamesFromId[item]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const DropdownRow = ({ title }: { title: string }) => {
  return (
    <div className="dropdown__mobile__row__container">
      <h3 className=" h-5 uppercase flex items-center no-select font-bold text-darker whitespace-nowrap ">
        {title}
      </h3>
      <ChevronRight />
    </div>
  );
};

const DropdownSidemenu = () => {
  return (
    <section className="dropdown__sidemenu__container">
      <nav className="dropdown__sidemenu__nav">
        {menuData.supportLinks.map((link) => (
          <p key={link.id} className="text-black">
            {link.name}
          </p>
        ))}
      </nav>
      <div className="dropdown__sidemenu__region">
        <FlagIcon size={20} />
        <p className="font-inter font-normal leading-normal text-xs  text-black text-center">
          {menuData.region}
        </p>
      </div>
    </section>
  );
};

export const DropdownColumn2 = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div className="flex flex-col gap-4 items-start w-[120px]">
      <div className="flex items-start w-[120px]">
        <div className="flex flex-col font-inter font-bold justify-center leading-0 text-lg text-darker text-center tracking-[1.26px] whitespace-nowrap">
          <p className="leading-normal">{title}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start justify-center opacity-80 w-full">
        {items.map((item, index) => (
          <p
            key={index}
            className="font-inter font-normal leading-normal text-xs text-text-hard text-center"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const DropdownImage = ({ image, thumb }: { image: string; thumb: string }) => {
  return (
    <div className="dropdown__image h-full w-[300px] relative">
      <Image
        src={image}
        fill
        alt="dropdown image"
        className="object-cover "
        priority
        placeholder="blur"
        blurDataURL={thumb}
      />

      {/* <div className="w-full h-full bg-red" /> */}
    </div>
  );
};
