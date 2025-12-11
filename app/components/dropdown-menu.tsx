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
import { useParams, usePathname, useSearchParams } from "next/navigation";
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
import { RedDivider } from "./RedDivider";
import Modal from "./modal";
import { useCheckoutContext } from "@/lib/contexts/use-checkout-context";
import { title } from "process";
type tMenuDepth = "main" | "submenu" | "range";

export function DropdownMenu({
  selectedCategory,
  isOpen,
  setIsOpen,
  isMobile,
}: {
  selectedCategory: tCategory;
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile?: boolean;
}) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      {/* {category && ( */}

      <div className={cn("transition-all duration-500 w-full z-0 ")}>
        {isOpen && (
          <DropDownDesktopContainer selectedCategory={selectedCategory} />
        )}
      </div>

      {/* )} */}
      {isMobile && (
        <DropDownMobileContainer isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

const DropDownMobileContainer = ({
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
  const [menuDepth, setMenuDepth] = useState<tMenuDepth>("main");

  const [subCategory, setSubCategory] = useState<string | null>(null);
  const [subSubCategory, setSubSubCategory] = useState<string | null>(null);
  const [subItems, setSubItems] = useState<string[] | null>(null);
  const [subSubItems, setSubSubItems] = useState<string[] | null>(null);
  const [selectedCategoryData, setSelectedCategoryData] = useState<
    tMenuCollection[tCategory]
  >(MenuCollection[category as tCategory]);

  useEffect(() => {
    toast.success("Subcategory changed to " + subCategory);
    setSubItems(
      selectedCategoryData?.menuItems[subCategory as tSubcategory] as string[]
      // selectedCategoryData?.menuItems[subCategory as tSubcategory]
    );
  }, [subCategory]);
  useEffect(() => {
    toast.success("finalcat to" + subSubCategory);
    const subsubCatItems =
      selectedCategoryData?.menuItems[subSubCategory as tSubcategory];

    setSubSubItems(subsubCatItems ? [...subsubCatItems] : null);
  }, [subSubCategory]);

  // const handleSetMenuDepth = (depth?: tMenuDepth, category?: string) => {
  //   if (!depth) {
  //     setMenuDepth((prev) => {
  //       if (prev === "range") return "submenu";
  //       if (prev === "submenu") return "main";
  //       return "main";
  //     });
  //   } else {
  //     if (category) {
  //       setSubCategory(category);
  //     }
  //     setMenuDepth(depth);
  //   }
  // };
  const handleSetMenuDepth2 = (depth?: tMenuDepth, category?: string) => {
    switch (depth) {
      case depth && depth === "main":
        setMenuDepth((prev) => {
          if (prev === "range") return "submenu";
          if (prev === "submenu") return "main";
          return "main";
        });
        break;

      case "submenu":
        setMenuDepth((prev) => {
          if (prev === "main") return "submenu";
          if (prev === "submenu") return "main";
          return "main";
        });
        // setMenuDepth("submenu");
        if (category) setSubCategory(category);
        break;
      case "range":
        if (category) setSubSubCategory(category);
        setMenuDepth("range");
        break;

      default:
        break;
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
          "absolute transition-all duration-1000 top-0 w-full h-full z-900 ",
          isOpen && menuDepth === "main" ? "left-0" : "-left-full"
        )}
      >
        <nav className="dropdown__mobile__container  cursor-pointer relative z-900 ">
          <RedDivider />
          {/* <div className="h-4 w-full bg-red-500" /> */}
          {Categories.map((menucategory) => (
            <DropdownRow
              key={menucategory}
              title={menucategory}
              searchParams={searchParams}
              router={router}
              isSelected={menucategory === category}
              menuDepth={menuDepth}
              setMenuDepth={handleSetMenuDepth2}
            />
          ))}
        </nav>
      </div>
      {/* Submenu */}
      <div
        className={cn(
          "absolute transition-all duration-1000  top-0 w-full h-full z-900 ",
          isOpen && menuDepth === "submenu"
            ? "left-0"
            : menuDepth === "range"
            ? "-left-full"
            : "left-full"
        )}
      >
        <nav className="dropdown__mobile__container cursor-pointer relative z-900 ">
          <RedDivider />
          <DropdownRow
            key={category}
            title={category || ""}
            searchParams={searchParams}
            router={router}
            returning
            setMenuDepth={handleSetMenuDepth2}
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
                  setMenuDepth={handleSetMenuDepth2}
                  submenu
                />
              )
            )}
        </nav>
      </div>
      {/* items-menu */}
      <div
        className={cn(
          "dropdown__mobile__container  absolute transition-all duration-1000   w-full h-full z-900 ",
          isOpen && menuDepth === "range" ? "left-0" : "left-full"
        )}
      >
        <nav className="dropdown__mobile__container cursor-pointer relative z-900 ">
          <RedDivider />

          <DropdownRow
            key={category}
            title={subCategory || ""}
            searchParams={searchParams}
            router={router}
            returning
            setMenuDepth={handleSetMenuDepth2}
          />
          {selectedCategoryData &&
            subSubCategory &&
            subSubItems?.map((menucategory) => (
              <DropdownRow
                key={menucategory}
                title={menucategory}
                searchParams={searchParams}
                router={router}
                setMenuDepth={handleSetMenuDepth2}
                menuDepth={menuDepth}
                parentCategory={subCategory || ""}
                submenu
                setIsOpen={setIsOpen}
              />
            ))}
        </nav>
      </div>
      <div
        className={cn(
          "transition-all duration-300 fixed bottom-0   w-full  h-auto z-1000  ",
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
  );
};

const DropDownDesktopContainer = ({
  selectedCategory,
}: {
  selectedCategory: tCategory;
}) => {
  const selectedCategoryData = MenuCollection[selectedCategory];
  const selectedSubcategories = selectedCategoryData?.menuItems;

  if (!selectedCategoryData?.splashImage) {
    toast.error("No splash image for category");
  }
  const Tiny = generateTinyUrl2(selectedCategoryData?.splashImage || "");

  return (
    <section className="dropdown__container bg-fiber-w relative      ">
      <div className="absolute top-0 left-0 w-full z-100 ">
        <RedDivider />
      </div>
      <div className="w-full h-full flex flex-row">
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
  const params = useParams();
  const id = params?.id; // the dynamic segment
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
            <p
              className={`no-select ${
                id && id === item ? "font-bold!" : "text-black"
              }`}
            >
              {item}
            </p>
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
  category,
  setSelectedCategory,
}: {
  title: string;
  searchParams: URLSearchParams;
  router: AppRouterInstance;
  returning?: boolean;
  submenu?: boolean;
  isSelected?: boolean;
  setMenuDepth?: (depth?: tMenuDepth, category?: string) => void;
  menuDepth?: tMenuDepth;
  parentCategory?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  category?: tCategory;
  setSelectedCategory?: React.Dispatch<React.SetStateAction<tCategory>>;
}) => {
  const MenuClick = () => {
    if (returning) {
      setMenuDepth && setMenuDepth();
    } else {
      if (menuDepth === "main") {
        setMenuDepth && setMenuDepth("submenu", title);
        setSelectedCategory && setSelectedCategory(title as tCategory);
        handleMenuClick(title, searchParams, router);
      }
      if (menuDepth === "submenu") {
        setMenuDepth && setMenuDepth("range", title);
      }
      if (menuDepth === "range") {
        // setIsOpen && setIsOpen(false);
      }
    }
  };

  return (
    <div
      key={title}
      onClick={() => MenuClick()}
      className={cn(
        "dropdown__mobile__row__container  duration-100 delay-1000 transition-opacity no-select ",
        returning
          ? "flex-row-reverse! justify-end gap-x-5  bg-neutral-400/20"
          : "flex-row! justify-between"
      )}
    >
      {menuDepth && menuDepth === "range" ? (
        <Link
          className=" cursor-pointer"
          href={`/product/${title}${category ? `?category=${category}` : ""}`}
        >
          <h3 className=" h-5 uppercase flex  no-select font-bold text-darker">
            {productNamesFromId[title as tProductId | tCollectionsId]}
            {/* {title} */}
          </h3>
        </Link>
      ) : (
        <h3 className=" h-5  uppercase flex no-select font-bold text-darker  ">
          {title}
        </h3>
      )}
      <DynamicChevron returning={returning} menuDepth={menuDepth} />
    </div>
  );
};

const DropdownSidemenu = () => {
  const {
    setStoreModalOpen,
    setOrderTrackerModalOpen,
    setHelpModalOpen,
    setRefundModalOpen,
    setSustainabilityModalOpen,
  } = useCheckoutContext();
  return (
    <>
      {/* <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <h2 className="mb-4">ADDED TO BAG!</h2> 
          </Modal> */}
      <section className="dropdown__sidemenu__container">
        <nav className="dropdown__sidemenu__nav cursor-pointer no-select">
          {/* {menuData.supportLinks.map((link) => (
            <p key={link.id} className="text-black">
              {link.name}
            </p>
          ))} */}
          <p onClick={() => setStoreModalOpen(true)} className="text-black">
            Store Locator
          </p>
          <p
            onClick={() => setOrderTrackerModalOpen(true)}
            className="text-black"
          >
            Order Tracker
          </p>
          <p onClick={() => setHelpModalOpen(true)} className="text-black">
            Help & Customer Service
          </p>
          <p onClick={() => setRefundModalOpen(true)} className="text-black">
            Returns & Refunds
          </p>
          <p
            onClick={() => setSustainabilityModalOpen(true)}
            className="text-black"
          >
            Sustainability
          </p>
        </nav>
        <div className="dropdown__sidemenu__region">
          <FlagIcon size={20} />
          <p className="font-inter font-normal leading-normal text-xs no-select  text-black text-center">
            {menuData.region}
          </p>
        </div>
      </section>
    </>
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

const DynamicChevron = ({
  menuDepth,
  returning,
}: {
  menuDepth?: tMenuDepth;
  returning?: boolean;
}) => {
  return (
    <ChevronRight
      className={`transition-all duration-200 delay-100 ${
        returning ? "rotate-0" : "rotate-180"
      } ${menuDepth && menuDepth === "range" ? "opacity-0" : "opacity-100"}`}
    />
  );
};
