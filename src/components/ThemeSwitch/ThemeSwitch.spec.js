import React from "react";
import ReactDOM from "react-dom/client";
import ThemeSwitch from "./ThemeSwitch";

test("should render the Theme Switch", () => {
  const div = document.createElement("div");
  const root = ReactDOM.createRoot(div);
  root.render(<ThemeSwitch />);
});
