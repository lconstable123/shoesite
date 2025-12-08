"use client";
import { ChevronLeft, ChevronRight, FlagIcon } from "./Icons";
import { menuData } from "../../lib/data";
import Image from "next/image";
import {
  Categories,
  productNamesFromId,
  tCategory,
  tCollectionsId,
  tProductId,
  tSubcategory,
} from "@/lib/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { MenuCollection, tMenuCollection } from "@/lib/curation-data";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  cn,
  generateTinyUrl,
  generateTinyUrl2,
  handleMenuClick,
} from "@/lib/utils";
import Link from "next/link";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function DropdownMenu({
  selectedCategory,
  isOpen = true,
  setIsOpen,
}: {
  selectedCategory: tCategory;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const selectedCategoryData = MenuCollection[selectedCategory];

  return (
    <>
      {category && (
        <DropDownColumnContainer selectedCategory={selectedCategory} />
      )}
      {/* <DropDownRowContainer isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </>
  );
}

const DropDownRowContainer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  // const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  const [menuDepth, setMenuDepth] = useState<"main" | "submenu" | "range">(
    "main"
  );
  const [subCategory, setSubCategory] = useState<string | null>(null);

  const [selectedCategoryData, setSelectedCategoryData] = useState<
    tMenuCollection[tCategory]
  >(MenuCollection[category as tCategory]);

  const handleSetMenuDepth = (
    depth?: "main" | "submenu" | "range",
    category?: string
  ) => {
    if (!depth) {
      setMenuDepth((prev) => {
        if (prev === "range") return "submenu";
        if (prev === "submenu") return "main";
        return "main";
      });
    } else {
      if (category) {
        setSubCategory(category);
      }
      setMenuDepth(depth);
    }
  };

  useEffect(() => {
    if (!category) return;

    setSelectedCategoryData(MenuCollection[category as tCategory]);
  }, [category]);

  return (
    // <div className=" inset-0 absolute z-700">
    <nav className="dropdown__mobile__root absolute z-900   w-full h-screen overflow-hidden">
      {/* Main Menu */}

      <div
        className={cn(
          "absolute transition-all duration-300 top-0 w-full h-full z-900 ",
          isOpen && menuDepth === "main" ? "left-0" : "-left-full"
        )}
      >
        <nav className="dropdown__mobile__container  cursor-pointer relative z-900 ">
          {Categories.map((menucategory) => (
            <DropdownRow
              key={menucategory}
              title={menucategory}
              searchParams={searchParams}
              router={router}
              isSelected={menucategory === category}
              menuDepth={menuDepth}
              setMenuDepth={handleSetMenuDepth}
            />
          ))}
        </nav>
      </div>
      {/* Submenu */}
      <div
        className={cn(
          "absolute transition-all duration-300 top-0 w-full h-full z-900 ",
          isOpen && menuDepth === "submenu"
            ? "left-0"
            : menuDepth === "range"
            ? "-left-full"
            : "left-full"
        )}
      >
        <nav className="dropdown__mobile__container cursor-pointer relative z-900 ">
          <DropdownRow
            key={category}
            title={category || ""}
            searchParams={searchParams}
            router={router}
            returning
            setMenuDepth={handleSetMenuDepth}
          />
          {selectedCategoryData &&
            Object.entries(selectedCategoryData?.menuItems).map(
              (menucategory) => (
                <DropdownRow
                  key={menucategory[0]}
                  title={menucategory[0]}
                  searchParams={searchParams}
                  router={router}
                  menuDepth={menuDepth}
                  setMenuDepth={handleSetMenuDepth}
                  submenu
                />
              )
            )}
        </nav>
      </div>
      {/* items-menu */}
      <div
        className={cn(
          "absolute transition-all duration-300 top-0 w-full h-full z-900 ",
          isOpen && menuDepth === "range" ? "left-0" : "left-full"
        )}
      >
        <nav className="dropdown__mobile__container cursor-pointer relative z-900 ">
          <DropdownRow
            key={category}
            title={subCategory || ""}
            searchParams={searchParams}
            router={router}
            returning
            setMenuDepth={handleSetMenuDepth}
          />
          {selectedCategoryData &&
            subCategory &&
            selectedCategoryData?.menuItems[subCategory as tSubcategory]?.map(
              (menucategory) => (
                <DropdownRow
                  key={menucategory}
                  title={menucategory}
                  searchParams={searchParams}
                  router={router}
                  setMenuDepth={handleSetMenuDepth}
                  menuDepth={menuDepth}
                  parentCategory={subCategory || ""}
                  submenu
                  setIsOpen={setIsOpen}
                />
              )
            )}
        </nav>
      </div>
      <div
        className={cn(
          "transition-all duration-300 fixed bottom-0  w-full  h-auto z-1000  ",
          isOpen
            ? "left-0"
            : menuDepth === "main"
            ? "-left-full"
            : menuDepth === "submenu"
            ? "left-full"
            : menuDepth === "range"
            ? "left-full"
            : ""
        )}
      >
        <DropdownSidemenu />
      </div>
    </nav>

    // </div>
  );
};

const DropDownColumnContainer = ({
  selectedCategory,
}: {
  selectedCategory: tCategory;
}) => {
  const selectedCategoryData = MenuCollection[selectedCategory];
  const selectedSubcategories = selectedCategoryData?.menuItems;

  // const [bannerImage, setBannerImage] = useState<string>(
  //   selectedCategoryData?.splashImage || ""
  // );

  if (!selectedCategoryData?.splashImage) {
    toast.error("No splash image for category");
  }
  const Tiny = generateTinyUrl2(selectedCategoryData?.splashImage || "");
  // useEffect(() => {
  //   const newImage = selectedCategoryData?.splashImage || "";
  //   if (newImage === bannerImage || !selectedCategory) return;
  //   setBannerImage(newImage);
  // }, [selectedCategoryData?.splashImage, bannerImage]);

  return (
    <section className="dropdown__container">
      <div className="w-full h-full  flex flex-row">
        <DropdownImage
          image={selectedCategoryData?.splashImage || ""}
          thumb={Tiny || ""}
        />
        <nav className="dropdown__sections  ">
          {Object.entries(selectedSubcategories).map((subcategory) => (
            <DropdownColumn
              key={subcategory[0]}
              title={subcategory[0] as tSubcategory}
              items={subcategory[1] as tProductId[] | tCollectionsId[]}
            />
          ))}
        </nav>
      </div>
      <DropdownSidemenu />
    </section>
  );
};

const DropdownColumn = ({
  title,
  items,
}: {
  title: tSubcategory;
  items: tProductId[] | tCollectionsId[];
}) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

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

const DropdownRow = ({
  title,
  searchParams,
  router,
  returning = false,
  setMenuDepth,
  menuDepth,
  submenu = false,
  isSelected = false,
  parentCategory,
  setIsOpen,
}: {
  title: string;
  searchParams: URLSearchParams;
  router: AppRouterInstance;
  returning?: boolean;
  submenu?: boolean;
  isSelected?: boolean;
  setMenuDepth?: (
    depth?: "main" | "submenu" | "range",
    category?: string
  ) => void;
  menuDepth?: "main" | "submenu" | "range";
  parentCategory?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const category = searchParams.get("category");

  const MenuClick = () => {
    if (returning) {
      setMenuDepth && setMenuDepth();
    } else {
      if (menuDepth === "main") {
        setMenuDepth && setMenuDepth("submenu", title);
        handleMenuClick(title, searchParams, router);
      }
      if (menuDepth === "submenu") {
        setMenuDepth && setMenuDepth("range", title);
      }
      if (menuDepth === "range") {
        setIsOpen && setIsOpen(false);
      }
    }
  };

  return (
    <div
      key={title}
      onClick={() => MenuClick()}
      className={cn(
        "dropdown__mobile__row__container duration-100 delay-100 transition-opacity ",
        returning
          ? "flex-row-reverse! justify-end gap-x-5  bg-neutral-400/20"
          : "flex-row! justify-between"
        // isSelected ? "opacity-30 cursor-auto!" : "opacity-100"
      )}
    >
      {menuDepth && menuDepth === "range" ? (
        <Link
          // key={index}
          className="list__item cursor-pointer"
          href={`/product/${title}${category ? `?category=${category}` : ""}`}
        >
          <h3 className=" h-5 uppercase flex items-center no-select font-bold text-darker whitespace-nowrap ">
            {productNamesFromId[title as tProductId | tCollectionsId]}
          </h3>
        </Link>
      ) : (
        <h3 className=" h-5  uppercase flex items-center no-select font-bold text-darker whitespace-nowrap ">
          {title}
        </h3>
      )}

      <ChevronRight
        className={`transition-all duration-200 delay-100 ${
          returning ? "rotate-0" : "rotate-180"
        } ${menuDepth && menuDepth === "range" ? "opacity-0" : "opacity-100"}`}
      />
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
    <div className="dropdown__image w-[300px]  relative bg-red-200">
      <Image
        loading="eager"
        src={image}
        fill
        alt="dropdown image"
        className="object-cover "
        priority
        placeholder="blur"
        blurDataURL={thumb}
      />
    </div>
  );
};
