import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "../SearchBar";

test("should render the Search Bar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchBar />, div);
});
