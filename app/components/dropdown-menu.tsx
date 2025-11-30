import { ChevronLeft, ChevronRight, FlagIcon } from "./Icons";
import { menuData } from "../../lib/data";
import Image from "next/image";
import { tCategory } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export function DropdownMenu({
  selectedCategory,
  isOpen = false,
}: {
  selectedCategory: tCategory;
  isOpen?: boolean;
}) {
  const selectedCategoryData = menuData.categories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <>
      <section className="dropdown__container">
        <DropdownImage
          image={selectedCategoryData?.img || ""}
          thumb={selectedCategoryData?.thumb || ""}
        />
        <nav className="dropdown__sections ">
          {selectedCategoryData?.subcategories.map((subcategory) => (
            <DropdownColumn
              key={subcategory.id}
              title={subcategory.id}
              items={subcategory.items}
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
  title: string;
  items: string[];
}) => {
  return (
    <div key={title} className="list__container  text-darker">
      <h3>{title}</h3>
      <div className="list__items__container">
        {items.map((item, index) => (
          <a
            key={index}
            className="list__item cursor-pointer"
            href="/product/1"
          >
            <p className="no-select text-black">{item}</p>
          </a>
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
