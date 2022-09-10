import React, { useState, useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch, error = false, onTextChange }) {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (error) {
      inputRef.current.ariaInvalid = "true";
    } else {
      inputRef.current.ariaInvalid = "false";
    }
  }, [error]);

  function submitForm(event) {
    event.preventDefault();
    onSearch(searchText);
  }
  return (
    <form className={styles["search-bar"]} onSubmit={submitForm}>
      <label htmlFor="inputSearch" className="sr-only">
        Enter githhub username
      </label>
      <div className={styles["input-container"]}>
        <input
          ref={inputRef}
          type="text"
          id="inputSearch"
          placeholder="Search Github username&#8230;"
          value={searchText}
          aria-invalid="false"
          onChange={(e) => {
            setSearchText(e.target.value);
            onTextChange();
          }}
        />
      </div>
      {error ? <p className={styles["error-message"]}>No results</p> : null}
      <button type="submit" disabled={searchText === "" ? "disabled" : false}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
