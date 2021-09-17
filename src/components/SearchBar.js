import React from "react";
import IconSearch from "../../assets/icon-search.svg";

function SearchBar() {
  return (
    <div className="search-bar">
      <label htmlFor="inputSearch">
        <IconSearch />
      </label>
      <div className="input-container">
        <input
          type="text"
          id="inputSearch"
          placeholder="Search Github username&#8230;"
        />
      </div>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
