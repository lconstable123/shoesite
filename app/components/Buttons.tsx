import { SearchIcon } from "./Icons";

export const SearchButton = () => {
  return (
    <button className="header__searchbutton">
      <SearchIcon size={32} className="mx-1 " color="white" />
    </button>
  );
};
