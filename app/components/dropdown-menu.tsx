import { ChevronLeft, ChevronRight, FlagIcon } from "./Icons";
import { Categories, menuData } from "../../lib/data";

export function DropdownMenu({
  category = "sports",
}: {
  category?: Categories;
}) {
  return (
    <>
      <section className="dropdown__container">
        <DropdownImage category={category} />
        {/* Menu Categories */}
        <nav className="dropdown__sections">
          <DropdownColumn
            title="Football"
            items={["Ronaldo", "Pele-X", "Messi"]}
          />
          <DropdownColumn
            title="Basketball"
            items={["Jordan", "LeBron", "Kobe"]}
          />
          <DropdownColumn
            title="Tennis"
            items={["Federer", "Nadal", "Djokovic"]}
          />
          <DropdownColumn title="Golf" items={["Tiger", "Phil", "Arnold"]} />
        </nav>
        <DropdownSidemenu />
      </section>
      <nav className="dropdown__mobile__container">
        <DropdownRow title="Sports" />
        <DropdownRow title="Lifestyle" />
        <DropdownRow title="News" />
      </nav>
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
    <div className="list__container text-darker">
      <h3>{title}</h3>
      <div className="list__items__container">
        {items.map((item, index) => (
          <a key={index} className="list__item">
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

const DropdownColumn2 = ({
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

export { DropdownColumn2 };

const DropdownImage = ({ category = "sports" }: { category: Categories }) => {
  return (
    <div className="dropdown__image h-[200px] w-[300px] relative">
      {/* <div
            className="absolute bottom-[-34.4%] left-0 right-[-10.56%] top-[-54%] bg-cover bg-center"
            style={{
              backgroundImage: "url(/api/placeholder/300/250)",
            }}
          /> */}
      <div className="w-full h-full bg-red" />
    </div>
  );
};
