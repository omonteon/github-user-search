import React from "react";
import ReactDOM from "react-dom";
import ThemeSwitch from "./ThemeSwitch";

test("should render the Theme Switch", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ThemeSwitch />, div);
});
