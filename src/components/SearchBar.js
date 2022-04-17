import React, { useEffect, useState } from "react";
import { ReactComponent as IconSearch } from '../assets/icon-search.svg';
const INITIAL_USERNAME = "octocat";

function SearchBar({ onSearch, error = false, onTextChange }) {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    onSearch(INITIAL_USERNAME);
  }, []);
  function submitForm(event) {
    event.preventDefault();
    onSearch(searchText);
  }
  return (
    <form className="search-bar" onSubmit={submitForm}>
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
      <button type="submit" disabled={searchText === "" ? "disabled" : false}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
