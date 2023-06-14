import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="relative w-[70%]">
      <div id="search-container" className="absolute right-5 top-3 w-auto">
        <BsSearch size={25} />
      </div>
      <input
        name="search"
        placeholder="Search"
        className="w-[100%] h-[48px] rounded-2xl px-10"
      />
    </div>
  );
};
export default SearchBar;
