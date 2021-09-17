import React from "react";
import iconSearch from "../../assets/icon-search.svg";

function SearchBar() {
  return (
    <div className="search-bar">
      <label htmlFor="inputSearch">
        <img src={iconSearch} alt="search icon" />
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
