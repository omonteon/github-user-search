import React, { useState } from "react";

function SearchBar({ onSearch, error = false, onTextChange }) {
  const [searchText, setSearchText] = useState("");

  function submitForm(event) {
    event.preventDefault();
    onSearch(searchText);
  }
  return (
    <form className="search-bar" onSubmit={submitForm}>
      <label htmlFor="inputSearch" className="sr-only">
        Enter githhub username
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
