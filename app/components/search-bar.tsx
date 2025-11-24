import { cn } from "../lib/utils";
import { SearchIcon } from "./Icons";

export function SearchBar({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <div
      className={cn(
        " bg-white  border-white h-7 rounded relative  ",
        fullWidth
          ? "w-full header__searchbar_bottom"
          : "header__searchbar_right w-[100px] xl:w-[191px]"
      )}
    >
      <div className="absolute flex gap-2 items-center justify-center left-[29px] top-[calc(50%-0.5px)] translate-y-[-50%]">
        <p className="font-normal no-select leading-normal text-xs text-text-hard">
          Search
        </p>
      </div>
      <div className="absolute left-1 size-5 top-1/2 translate-y-[-50%]">
        <SearchIcon size={20} color="black" />
      </div>
    </div>
  );
}
