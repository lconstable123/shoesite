import { cn } from "../../../lib/utils";
import { SearchIcon } from "../Icons";

export function SearchBar({
  fullWidth = false,
  searchText,
  setSearchText,
}: {
  fullWidth?: boolean;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div
      className={cn(
        " bg-white transition-all duration-300  border-white h-7 rounded relative  ",
        fullWidth
          ? "w-full header__searchbar_bottom"
          : "header__searchbar_right w-[100px] xl:w-[191px]"
      )}
    >
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
        className="w-full h-full rounded pl-7 pr-2 text-xs font-normal text-text-hard placeholder:text-text-hard "
      />

      <div className="absolute flex gap-2 items-center justify-center left-[29px] top-[calc(50%-0.5px)] translate-y-[-50%]"></div>
      <div className="absolute left-1 size-5 top-1/2 translate-y-[-50%]">
        <SearchIcon size={20} color="black" />
      </div>
    </div>
  );
}
