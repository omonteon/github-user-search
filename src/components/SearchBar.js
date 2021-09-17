import React, { useState } from "react";
import IconSearch from "../../assets/icon-search.svg";

function SearchBar({ onSearch, error = false, onTextChange }) {
  const [searchText, setSearchText] = useState("");
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
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            onTextChange();
          }}
        />
      </div>
      {error ? <span className="error-message">No results</span> : null}
      <button onClick={() => onSearch(searchText)}>Search</button>
    </div>
  );
}

export default SearchBar;
