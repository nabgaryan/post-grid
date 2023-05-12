import { BsSearch } from "react-icons/bs";
import classes from "./Search.module.css";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchMode, setSearchMode] = useState(false);

  const searchModeHandler = () => {
    setSearchMode(true);
  };

  const inputHandler = (e) => {
    onSearch(e.target.value);
  };

  const handleInputBlur = () => {
    setSearchMode(false);
  };

  return (
    <>
      {!searchMode && (
        <BsSearch onClick={searchModeHandler} className={classes.icon} />
      )}
      {searchMode && (
        <form>
          <input
            type="search"
            placeholder="Search..."
            onChange={inputHandler}
            onBlur={handleInputBlur}
          />
        </form>
      )}
    </>
  );
};

export default Search;
