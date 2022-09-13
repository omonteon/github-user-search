import React from "react";
import ReactDOM from "react-dom/client";
import SingleLineDataWithIcon from "./SingleLineDataWithIcon";

test("should render SingleLineDataWithIcon", () => {
  const div = document.createElement("div");
  const root = ReactDOM.createRoot(div);
  root.render(<SingleLineDataWithIcon />);
});
