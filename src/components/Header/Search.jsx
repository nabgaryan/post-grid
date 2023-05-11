import { BsSearch } from "react-icons/bs";
import classes from "./Search.module.css";
import { useState } from "react";

const Search = ({ onSearch }) => {

  const searchModeHandler = () => {
    setSearchMode(true);
  };

  const inputHandler = (e) => {
    onSearch(e.target.value);
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
          />
        </form>
      )}
    </>
  );
};

export default Search;
